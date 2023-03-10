import {writeFile} from 'fs';

import {name, version} from '../package.json';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `{
  title: 'Chimera Client',
  production: true,
  FIREBASE_API_KEY: ${ process.env['FIREBASE_API_KEY'] },
  name: '${name}',
  version: '${version}'
}`

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
