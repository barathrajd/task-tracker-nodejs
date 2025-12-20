import fs from 'node:fs';
import path from 'node:path';

const binPath = path.resolve('bin/task-cli.js');

const content = `#!/usr/bin/env node
require('../dist/task-cli.js');
`;

fs.mkdirSync(path.dirname(binPath), { recursive: true });
fs.writeFileSync(binPath, content);
fs.chmodSync(binPath, 0o755);
console.log('✔ bin file created');
