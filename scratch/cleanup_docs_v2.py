import os
import re
import glob
import subprocess

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up step-content wrapper styles & ids that cause JSX parsing errors
    content = re.sub(r'style="display:\s*none;?"', '', content)
    content = re.sub(r'\s*id="step-\d+"', '', content)
    content = re.sub(r'\s*className="step-content"', '', content)

    # 2. Clean up legacy classes and attributes on main, section, headings, etc.
    content = re.sub(r'className="cd-main-content"', '', content)
    content = re.sub(r'id="cd-main"', '', content)
    content = re.sub(r'className="cd-overview"', '', content)
    content = re.sub(r'id="cdHomeOverview"', '', content)
    content = re.sub(r'id="cdHomeTitle"', '', content)
    content = re.sub(r'className="cd-page-title"', '', content)
    content = re.sub(r'className="cd-overview-text"', '', content)
    content = re.sub(r'className="cd-overview-ul"', '', content)
    content = re.sub(r'className="cd-overview-ol"', '', content)
    content = re.sub(r'className="image-wrapper"', '', content)
    content = re.sub(r'className="para-box"', 'className="para-box"', content) # Keep para-box since styled in index.css
    content = re.sub(r'className="h3"', '', content)
    content = re.sub(r'className="h4"', '', content)
    content = re.sub(r'className="demo-img"', '', content)
    
    # Remove translation attributes
    content = re.sub(r'\s*data-i18n="[^"]*"', '', content)

    # 3. Remove inline margin styles like style={{marginTop: '20px'}}
    content = re.sub(r'\s*style=\{\{\s*marginTop:\s*\'[^\']*\'\s*\}\}', '', content)
    content = re.sub(r'\s*style=\{\{\s*marginTop:\s*"[^"]*"\s*\}\}', '', content)

    # 4. Clean up spacing inside tags, e.g. <h1    > to <h1>, <main  > to <main>
    content = re.sub(r'<([a-zA-Z0-9]+)\s+>', r'<\1>', content)
    content = re.sub(r'<([a-zA-Z0-9]+)\s+/>', r'<\1 />', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Revert all changes in src/content first to ensure clean execution
    print("Reverting changes in src/content/ to start fresh...")
    subprocess.run(["git", "checkout", "src/content/"])

    pattern = os.path.join("src", "content", "**", "*.jsx")
    files = glob.glob(pattern, recursive=True)
    print(f"Found {len(files)} files to clean up.")
    for filepath in files:
        clean_file(filepath)
    print("Cleanup completed successfully.")

if __name__ == "__main__":
    main()
