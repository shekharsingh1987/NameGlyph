import { readFileSync } from 'fs';
import { resolve } from 'path';

const packageJson = JSON.parse(
  readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'),
);

console.info(`PACKAGE_VERSION=${packageJson.version}`); 