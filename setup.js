const fs = require('fs');
const path = require('path');

// Create directories
const directories = [
  'src',
  'src/app',
  'src/components',
  'src/lib',
  'src/styles',
  'public',
  'public/images',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create next.config.js
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig;
`;

fs.writeFileSync('next.config.js', nextConfig);
console.log('Created next.config.js');

// Create tsconfig.json if it doesn't exist
if (!fs.existsSync('tsconfig.json')) {
  const tsConfig = {
    compilerOptions: {
      target: "es5",
      lib: ["dom", "dom.iterable", "esnext"],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      forceConsistentCasingInFileNames: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "node",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "preserve",
      incremental: true,
      plugins: [
        {
          name: "next"
        }
      ],
      paths: {
        "@/*": ["./src/*"]
      }
    },
    include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    exclude: ["node_modules"]
  };

  fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
  console.log('Created tsconfig.json');
}

console.log('Setup complete! Now run:');
console.log('npm install');
console.log('npm run dev'); 