const fs = require('fs');

const html = fs.readFileSync('c:/Users/Lenovo/OneDrive - frc.utn.edu.ar/Escritorio/Claude/f150/configurador.html', 'utf8');
const idx = html.lastIndexOf('type="__bundler/template"');
if (idx !== -1) {
  const start = html.indexOf('>', idx) + 1;
  const end = html.indexOf('</script>', start);
  const text = html.substring(start, end);
  const target = '0aa9dab2-cd0b-44cf-b848-fd17b8de08c8';
  const matchIdx = text.indexOf(target);
  if (matchIdx !== -1) {
    const surrounding = text.substring(matchIdx - 10, matchIdx + target.length + 10);
    console.log('Surrounding text:', surrounding);
    for (let i = 0; i < surrounding.length; i++) {
      console.log(surrounding[i], ':', surrounding.charCodeAt(i));
    }
  }
}
