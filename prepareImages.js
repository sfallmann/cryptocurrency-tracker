const fs = require('fs');

const files = fs.readdirSync('./assets/images/icons/128').filter(x => x.includes('png'));
const ex =
  `{\n ${files.map(x => `'${x.split('.png')[0]}': require('./${x}'),`).join('\n')} }`;
const res = `export default ${ex}`;
fs.writeFileSync('./assets/images/icons/128/index.js', res);
