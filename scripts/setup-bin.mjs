import fs from 'node:fs';
import path from 'node:path';

const binPath = path.resolve('bin/task-tracker.js');

const content = `#!/usr/bin/env node
require('../dist/task-tracker.js');
`;

fs.mkdirSync('bin', { recursive: true });
fs.writeFileSync(binPath, content);
fs.chmodSync(binPath, 0o755);

console.log('✔ bin file created');
