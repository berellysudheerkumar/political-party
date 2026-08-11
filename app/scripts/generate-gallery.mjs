import fs from 'node:fs';
import path from 'node:path';

const galleryDir = path.resolve('public/images/gallery');
const outputFile = path.resolve('app/config/content/gallery.generated.ts');

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg'];

if (!fs.existsSync(galleryDir)) {
  console.error(`Gallery directory not found: ${galleryDir}`);
  process.exit(1);
}

const files = fs
  .readdirSync(galleryDir)
  .filter((file) => {
    const extension = path.extname(file).toLowerCase();
    return supportedExtensions.includes(extension);
  })
  .sort((a, b) => a.localeCompare(b));

const items = files.map((file, index) => {
  const name = path.parse(file).name;

  return {
    id: `gallery-${index + 1}`,
    image: `/images/gallery/${file}`,
    title: name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
  };
});

const content = `export const galleryContent = {
  eyebrow: 'Campaign Gallery',

  items: ${JSON.stringify(items, null, 2)},
};
`;

fs.writeFileSync(outputFile, content);

console.log(`Gallery generated: ${files.length} images`);
