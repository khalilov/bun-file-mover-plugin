# File Mover Plugin

File mover plugin for bun.sh


### Installation:
```bash
bun add bun-file-mover-plugin
```

#### Props
`from`
* type: `String`
* required: `false`
* default: `'./src'`

`to`
* type: `String`
* required: `false`
* default: `'./build'`

`transform`
* type: `Function`
* required: `false`

`reqursive`
* type: `Boolean`
* required: `false`
* default: `true`


### Usage example:
```ts
import Bun from 'bun';
import { FileMoverPlugin } from 'bun-file-mover-plugin';

const APP_LINK = 'https://any-site.com';

Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './build',
  plugins: [
    FileMoverPlugin({
      from: './src/images',
      to: './build/images'
    }),
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