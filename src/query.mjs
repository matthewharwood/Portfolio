import axios from 'axios';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sanityClient from '@sanity/client'
import fs from 'fs-extra';
const __dirname = dirname(fileURLToPath(import.meta.url));
import dot from "dotty";


async function sanityWrite(result) {

  let final = [...result];
  const unwrap = () => {
    const dotKeys = dot.deepKeys(result);
    const refPaths = dotKeys.filter(d => d.includes("_ref"));

    for (let path of refPaths) {
      const id = dot.get(result, path);
      const parent = path.slice(0, -1);

      for (let d of result) {
        if (d._id === id) {
          dot.put(final, parent, d);
        }
      }
    }
  };

  const SEED_PATH = join(__dirname, '_data', 'sanity.json');
  try {
    unwrap()
    await fs.writeJson(SEED_PATH, result);
    console.log('success!', result)
  } catch (err) {
    console.error(err)
  }
}
const main = async () => {
  const query = `
    *[_type == "page" && title == "Uber.com"]{
      ...,
      route->,
      section[]{
        ...,
        content[]
      },
    }`
  const queryAll = `*[]`
  const client = sanityClient({
    projectId: '0eq54p9g',
    dataset: 'production',
    apiVersion: '2019-01-29',
    token: 'skh0p8gVt9wVMecAACqb0LKITHrqZ1aYKrRENttA0ln11GcIMUDD2lRV2Kw8hjybxJyN3hH395PF52Y0PY3izyeotpqBXnV5GBsEAgTqIYyD2999Hq831Cj5bwYHmoTUGrIRPM3ZwMDaqn7ktdeu7RNUqt8c9hQkI0kg9sFLyHzMzAxu01ok', // or leave blank for unauthenticated usage
    useCdn: false
  })
  const result = await client.fetch(queryAll)
  await sanityWrite(result);

  const subscription = client.listen(queryAll).subscribe(async (update) => {
    if(update.result) {
      const result = await client.fetch(queryAll)
      await sanityWrite(result);
      console.log('***'.repeat(10), '\n')
      console.log('\t UPDATE \t\n');
      console.count()
      console.log('\t UPDATE \t\n');
      console.log('***'.repeat(10), '\n');

    }
  });
}
main();
