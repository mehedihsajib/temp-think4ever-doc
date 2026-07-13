import os
import re
import glob

def clean_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove <main className="cd-main-content" id="cd-main"> and its closing </main>
    content = re.sub(r'<main\s+className="cd-main-content"\s+id="cd-main"\s*>', '', content)
    content = re.sub(r'<main\s+id="cd-main"\s+className="cd-main-content"\s*>', '', content)
    content = re.sub(r'</main>\s*(?=\n\s*</div>)', '', content)
    content = re.sub(r'</main>\s*(?=</div>)', '', content)

    # 2. Remove <section className="cd-overview" id="cdHomeOverview"> and its closing </section>
    content = re.sub(r'<section\s+className="cd-overview"\s+id="cdHomeOverview"\s*>', '', content)
    content = re.sub(r'<section\s+id="cdHomeOverview"\s+className="cd-overview"\s*>', '', content)
    content = re.sub(r'</section>\s*(?=\n\s*</main>)', '', content)
    content = re.sub(r'</section>\s*(?=</main>)', '', content)
    content = re.sub(r'</section>\s*(?=\n\s*</div>)', '', content)
    content = re.sub(r'</section>\s*(?=</div>)', '', content)

    # 3. Remove attributes from remaining tags
    # Remove data-i18n="..."
    content = re.sub(r'\s*data-i18n="[^"]*"', '', content)
    # Remove id="cdHomeTitle"
    content = re.sub(r'\s*id="cdHomeTitle"', '', content)
    # Remove id="cdHomeOverview"
    content = re.sub(r'\s*id="cdHomeOverview"', '', content)
    # Remove className="cd-page-title"
    content = re.sub(r'\s*className="cd-page-title"', '', content)
    # Remove className="cd-overview-text"
    content = re.sub(r'\s*className="cd-overview-text"', '', content)
    # Remove className="cd-overview-ul"
    content = re.sub(r'\s*className="cd-overview-ul"', '', content)
    # Remove className="cd-overview-ol"
    content = re.sub(r'\s*className="cd-overview-ol"', '', content)
    # Remove className="image-wrapper"
    content = re.sub(r'\s*className="image-wrapper"', '', content)
    # Remove className="h3" from heading elements
    content = re.sub(r'\s*className="h3"', '', content)

    # 4. Remove inline margin styles like style={{marginTop: '20px'}}
    content = re.sub(r'\s*style=\{\{\s*marginTop:\s*\'[^\']*\'\s*\}\}', '', content)
    content = re.sub(r'\s*style=\{\{\s*marginTop:\s*"[^"]*"\s*\}\}', '', content)

    # 5. Clean up any double spaces/formatting in tags, e.g. <h1  > to <h1>
    content = re.sub(r'<([a-zA-Z0-9]+)\s+>', r'<\1>', content)
    content = re.sub(r'<([a-zA-Z0-9]+)\s+/>', r'<\1 />', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    pattern = os.path.join("src", "content", "**", "*.jsx")
    files = glob.glob(pattern, recursive=True)
    print(f"Found {len(files)} files to clean up.")
    for filepath in files:
        clean_file(filepath)
    print("Cleanup completed.")

if __name__ == "__main__":
    main()
