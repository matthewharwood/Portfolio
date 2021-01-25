import axios from 'axios';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
const __dirname = dirname(fileURLToPath(import.meta.url));
import dot from "dotty";


const main = async () => {
  const {result} = await axios.get('https://0eq54p9g.api.sanity.io/v1/data/query/production?query=*').then(d => d.data);
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
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

main();
