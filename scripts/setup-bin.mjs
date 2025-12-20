import fs from 'node:fs';
import path from 'node:path';

const binPath = path.resolve('dist/bin/task-cli.js');
const packageJsonPath = path.resolve('dist/package.json');
const packageJsonVersion = JSON.parse(fs.readFileSync('package.json'));

const content = `#!/usr/bin/env node
require('../task-cli.js');
`;

const packageJsonContent = `
{
  "name": "${packageJsonVersion.name}",
  "version": "${packageJsonVersion.version}",
  "type": "module",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "import": "./index.js"
    }
  },
  "types": "./index.d.ts",
  "bin": { "task-cli": "bin/task-cli.js" }
}
`;

fs.mkdirSync(path.dirname(binPath), { recursive: true });
fs.writeFileSync(binPath, content);
fs.chmodSync(binPath, 0o755);
console.log('✔ bin file created');

fs.writeFileSync(packageJsonPath, packageJsonContent);
fs.chmodSync(packageJsonPath, 0o755);
console.log('✔ package.json file created');

fs.copyFileSync(path.resolve('README.md'), path.resolve('dist/README.md'));
console.log('✔ README.md copied');
