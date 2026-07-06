const fs = require('fs');
const html = fs.readFileSync('c:/Users/Lenovo/OneDrive - frc.utn.edu.ar/Escritorio/Claude/f150/configurador.html', 'utf8');

const m = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
if (m) {
  let template = JSON.parse(m[1]);
  console.log('Original template length:', template.length);
  console.log('Contains \\"F150Viewer\\":', template.includes('\\"F150Viewer\\"'));
  console.log('Contains "F150Viewer" (escaped in JS string):', template.includes('"F150Viewer"'));
  console.log('Contains \\" (literal backslash + quote):', template.includes('\\"'));
  
  // Apply our replacements:
  let cleaned = template
    .replace(/="\\"/g, '="').replace(/\\""/g, '"')
    .replace(/="\"/g, '="').replace(/\""/g, '"')
    .replace(/\\"/g, '"');
    
  console.log('After clean, contains "F150Viewer":', cleaned.includes('"F150Viewer"'));
  console.log('After clean, contains \\"F150Viewer\\":', cleaned.includes('\\"F150Viewer\\"'));
} else {
  console.log('Template not found');
}
