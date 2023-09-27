import {readFileSync} from 'fs';
import path from 'path';

export async function getPost() {
  const file = path.join(
    process.cwd(),
    'app',
    'routes',
    'blog.hello-world.mdx'
  );

  const data = readFileSync(file, 'utf8');

  return data;
}
