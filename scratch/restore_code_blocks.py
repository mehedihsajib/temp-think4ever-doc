import os
import re
from bs4 import BeautifulSoup

MAPPING = {
    "mcp_gemini.html": "src/content/designer/mcp-gemini.jsx",
    "manual_think_mcp.html": "src/content/designer/think-mcp.jsx",
    "mcp_claude_desktop.html": "src/content/designer/mcp-claude-desktop.jsx",
    "manual_think_api.html": "src/content/designer/think-api.jsx",
    "mcp_test_and_tools.html": "src/content/designer/mcp-test-and-tools.jsx",
    "mcp_vscode.html": "src/content/designer/mcp-vscode.jsx",
    "mcp_claude_code.html": "src/content/designer/mcp-claude-code.jsx",
    "mcp_kiro.html": "src/content/designer/mcp-kiro.jsx",
    "mcp_codex.html": "src/content/designer/mcp-codex.jsx",
    "mcp_cursor.html": "src/content/designer/mcp-cursor.jsx",
    "mcp_amazonq.html": "src/content/designer/mcp-amazonq.jsx",
    "mcp_windsurf.html": "src/content/designer/mcp-windsurf.jsx"
}

def xhtml_clean(html_content):
    # Convert class to className and for to htmlFor
    html_content = html_content.replace('class="', 'className="')
    html_content = html_content.replace('onclick="', 'onClick="')
    # Escape raw curly braces
    html_content = html_content.replace('{', '&#123;').replace('}', '&#125;')
    return html_content

def process_code_block(pre_el):
    code_el = pre_el.find("code")
    if not code_el:
        return str(pre_el)
    
    # Get raw inner HTML of code
    raw_html = code_el.decode_contents()
    # Split by literal newline
    lines = raw_html.split("\n")
    
    new_lines_html = []
    for line in lines:
        if not line.strip():
            # Keep empty line
            new_lines_html.append('<div>&nbsp;</div>')
        else:
            new_lines_html.append(f'<div>{line}</div>')
            
    joined_lines = "\n".join(new_lines_html)
    
    # Return formatted JSX pre block
    return f"<pre><code>{joined_lines}</code></pre>"

def find_and_replace_wrappers(jsx_content, replacement_blocks):
    start_tag = '<div className="code-block-wrapper">'
    idx = 0
    replacement_idx = 0
    new_content = ""
    
    while True:
        pos = jsx_content.find(start_tag, idx)
        if pos == -1:
            new_content += jsx_content[idx:]
            break
            
        new_content += jsx_content[idx:pos]
        
        stack = 1
        curr = pos + len(start_tag)
        
        while stack > 0 and curr < len(jsx_content):
            next_open = jsx_content.find('<div', curr)
            next_close = jsx_content.find('</div>', curr)
            
            if next_close == -1:
                break
                
            if next_open != -1 and next_open < next_close:
                stack += 1
                curr = next_open + 4
            else:
                stack -= 1
                curr = next_close + 6
                
        if stack == 0:
            if replacement_idx < len(replacement_blocks):
                new_content += replacement_blocks[replacement_idx]
                replacement_idx += 1
            else:
                new_content += jsx_content[pos:curr]
            idx = curr
        else:
            new_content += start_tag
            idx = pos + len(start_tag)
            
    return new_content, replacement_idx

def migrate_code_blocks(html_name, jsx_path):
    html_path = os.path.join("old-codebase", html_name)
    if not os.path.exists(html_path):
        print(f"HTML file not found: {html_path}")
        return
        
    if not os.path.exists(jsx_path):
        print(f"JSX file not found: {jsx_path}")
        return

    with open(html_path, "r", encoding="utf-8") as f:
        html_soup = BeautifulSoup(f.read(), "html.parser")
        
    # Get all code blocks in legacy HTML
    legacy_wrappers = html_soup.find_all("div", class_="code-block-wrapper")
    if not legacy_wrappers:
        return
        
    # Process each code-block wrapper to wrap pre contents in divs
    jsx_wrappers_replacement = []
    for wrapper in legacy_wrappers:
        # Wrap the pre code lines in divs
        pre_tag = wrapper.find("pre")
        if pre_tag:
            new_pre_html = process_code_block(pre_tag)
            pre_tag.replace_with(BeautifulSoup(new_pre_html, "html.parser"))
        
        # Convert legacy wrapper content to React JSX
        wrapper_xhtml = xhtml_clean(str(wrapper))
        jsx_wrappers_replacement.append(wrapper_xhtml)

    # Read current JSX file content
    with open(jsx_path, "r", encoding="utf-8") as f:
        jsx_content = f.read()

    # Find and replace wrappers with balanced parsing
    new_jsx_content, replaced_count = find_and_replace_wrappers(jsx_content, jsx_wrappers_replacement)
    
    # Write back to JSX
    with open(jsx_path, "w", encoding="utf-8") as f:
        f.write(new_jsx_content)
    print(f"Restored code blocks for: {jsx_path} ({replaced_count} blocks)")

def main():
    # Reset git changes on mapping paths first to start fresh and avoid double replacements
    print("Reverting files before running...")
    import subprocess
    for html, jsx in MAPPING.items():
        subprocess.run(["git", "checkout", jsx])
        
    for html, jsx in MAPPING.items():
        migrate_code_blocks(html, jsx)
    print("Code blocks restored and formatted.")

if __name__ == "__main__":
    main()
