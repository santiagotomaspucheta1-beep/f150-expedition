const fs = require('fs');

const html = fs.readFileSync('c:/Users/Lenovo/OneDrive - frc.utn.edu.ar/Escritorio/Claude/f150/configurador.html', 'utf8');
const idx = html.lastIndexOf('type="__bundler/template"');
if (idx !== -1) {
  const start = html.indexOf('>', idx) + 1;
  const end = html.indexOf('</script>', start);
  const text = html.substring(start, end);

  const template = JSON.parse(text);
  console.log('Template parsed successfully.');
  
  // WITHOUT CLEANUP:
  const match = template.match(/<x-import([\s\S]*?)>/);
  if (match) {
    const tagContent = match[0];
    console.log('x-import tag:', tagContent);
    // Find component-from-global-scope
    const nameMatch = tagContent.match(/component-from-global-scope="(.*?)"/);
    if (nameMatch) {
      console.log('component-from-global-scope value:', nameMatch[1]);
      for (let i = 0; i < nameMatch[1].length; i++) {
        console.log(nameMatch[1][i], ':', nameMatch[1].charCodeAt(i));
      }
    }
  }
}
