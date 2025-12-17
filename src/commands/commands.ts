const args = process.argv.slice(2);
const parsed: Record<string, string> = {};

for (const arg of args) {
  const [key, value] = arg.replace('--', '').split('=');
  parsed[key] = value;
}

export const parsedArgs = parsed;
