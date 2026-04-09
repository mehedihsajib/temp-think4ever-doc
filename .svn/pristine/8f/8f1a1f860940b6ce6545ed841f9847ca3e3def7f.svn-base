const fs = require('fs');
const path = require('path');
const dir = 'd:/MoadBus/wallet_documentation';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let count = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('assets/js/navigation.js') && !content.includes('assets/js/i18n.js')) {
    // Some files might have <script src="assets/js/navigation.js"></script>
    // some might have <script src="./assets/js/navigation.js"></script>
    content = content.replace(
      /<script\s+src=[\"\'](?:\.\/)?assets\/js\/navigation\.js[\"\']><\/script>/g,
      '<script src="assets/js/i18n.js"></script>\n    <script src="assets/js/navigation.js"></script>'
    );
    fs.writeFileSync(filePath, content);
    count++;
  }
});

console.log('Injected i18n into ' + count + ' files.');
