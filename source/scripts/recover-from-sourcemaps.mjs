import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.resolve(scriptDir, '..');
const repositoryRoot = path.resolve(sourceDir, '..');

function findFile(directory, predicate) {
  const name = fs.readdirSync(directory).find(predicate);
  if (!name) {
    throw new Error(`Could not find the expected source map in ${directory}`);
  }
  return path.join(directory, name);
}

function sourceContent(map, sourceName) {
  const index = map.sources.indexOf(sourceName);
  if (index < 0 || map.sourcesContent[index] == null) {
    throw new Error(`Source map does not contain ${sourceName}`);
  }
  return map.sourcesContent[index];
}

function write(relativePath, content) {
  const target = path.join(sourceDir, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, 'utf8');
}

const jsMapPath = findFile(
  path.join(repositoryRoot, 'static', 'js'),
  (name) => /^main\..+\.js\.map$/.test(name),
);
const cssMapPath = findFile(
  path.join(repositoryRoot, 'static', 'css'),
  (name) => /^main\..+\.css\.map$/.test(name),
);

const jsMap = JSON.parse(fs.readFileSync(jsMapPath, 'utf8'));
const cssMap = JSON.parse(fs.readFileSync(cssMapPath, 'utf8'));

let app = sourceContent(jsMap, 'App.tsx')
  .replaceAll('./assests/', './assets/')
  .replace(
    "import Avatar_wenxi from \"./assets/Avatar_wenxi.jpeg\"",
    "import parseBibTeX from 'bib2json';\nimport Avatar_wenxi from \"./assets/Avatar_wenxi.jpeg\"",
  )
  .replace("  let BibtexParser = require('bib2json');\n  let papers: IPapersProps = BibtexParser(MyPublications);", "  const papers: IPapersProps = parseBibTeX(MyPublications);");

let main = sourceContent(jsMap, 'index.tsx')
  .replace("import reportWebVitals from './reportWebVitals';\n", '')
  .replace(/\n\/\/ If you want to start measuring[\s\S]*?reportWebVitals\(\);\s*$/, '\n');

write('src/App.tsx', app);
write('src/main.tsx', main);
write('src/index.css', sourceContent(cssMap, 'index.css'));
write('src/components/Paper.tsx', sourceContent(jsMap, 'components/Paper.tsx'));
write('src/components/Footer.tsx', sourceContent(jsMap, 'components/Footer.tsx').replaceAll('../assests/', '../assets/'));
write('src/components/Award.tsx', sourceContent(jsMap, 'components/Award.tsx'));
write('src/reportWebVitals.ts', sourceContent(jsMap, 'reportWebVitals.ts'));

const mediaDir = path.join(repositoryRoot, 'static', 'media');
const assets = [
  ['Avatar_wenxi.', 'Avatar_wenxi.jpeg'],
  ['PKU.', 'PKU.png'],
  ['CAM.', 'CAM.png'],
];

for (const [prefix, targetName] of assets) {
  const sourceName = fs.readdirSync(mediaDir).find((name) => name.startsWith(prefix));
  if (!sourceName) {
    throw new Error(`Could not recover ${targetName}`);
  }
  fs.copyFileSync(
    path.join(mediaDir, sourceName),
    path.join(sourceDir, 'src', 'assets', targetName),
  );
}

for (const publicFile of ['favicon.ico', 'logo192.png', 'logo512.png', 'manifest.json', 'robots.txt']) {
  fs.copyFileSync(
    path.join(repositoryRoot, publicFile),
    path.join(sourceDir, 'public', publicFile),
  );
}

console.log('Recovered the React source files and image assets into source/.');
