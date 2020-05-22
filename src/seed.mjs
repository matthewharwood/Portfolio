import axios from 'axios';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
const __dirname = dirname(fileURLToPath(import.meta.url));

const main = async () => {
  const {result} = await axios.get('https://0eq54p9g.api.sanity.io/v1/data/query/production?query=*').then(d => d.data);
  const SEED_PATH = join(__dirname, '_data', 'sanity.json');
  try {
    await fs.writeJson(SEED_PATH, result);
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

main();
