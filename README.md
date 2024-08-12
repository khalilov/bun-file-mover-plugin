# File Mover Plugin

File mover plugin for bun.sh


Installation:
```bash
bun add bun-file-mover-plugin
```

Usage example:
```ts
import Bun from 'bun';
import { FileMoverPlugin } from 'bun-file-mover-plugin';

const APP_LINK = 'https://any-site.com';

Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './build',
  plugins: [
    FileMoverPlugin({
      from: './src/templates/',
      to: './build/templates',
      transform: (content: string) => {
        const regexp = new RegExp('{{APP_LINK}}', 'ig');
        return content.replace(regexp, APP_LINK);
      }
    })    
  ]
});

```