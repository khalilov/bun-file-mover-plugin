import Bun from 'bun';

await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './',
  target: 'node',
});