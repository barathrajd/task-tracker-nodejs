import { createInterface } from 'node:readline';

export const userInput = createInterface({
  input: process.stdin,
  output: process.stdout,
});
