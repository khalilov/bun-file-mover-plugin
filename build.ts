import Bun from 'bun';

await Bun.build({
  entrypoints: ['./source/index.ts'],
  outdir: './build',
  target: 'node',
});