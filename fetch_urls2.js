const https = require('https');

const queries = [
  { key: 'construction', q: 'construction worker' },
  { key: 'engineering', q: 'engineer blueprint' },
  { key: 'manufacturing', q: 'manufacturing plant' },
  { key: 'logistics', q: 'warehouse forklift' },
  { key: 'healthcare', q: 'doctor patient' },
  { key: 'education', q: 'classroom teacher' },
  { key: 'news1', q: 'construction safety hardhat' }
];

async function fetchUrl(query) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'unsplash.com',
      path: `/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3`,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          let photo = json.results.find(p => !p.premium);
          if (!photo) photo = json.results[0];
          
          if (photo && photo.urls && photo.urls.raw) {
            let url = photo.urls.raw.split('?')[0]; 
            resolve(`${url}?auto=format&fit=crop&w=1200&q=80`);
          } else {
            resolve('FAILED'); 
          }
        } catch (e) {
          resolve('FAILED'); 
        }
      });
    });
  });
}

async function run() {
  for (const item of queries) {
    const url = await fetchUrl(item.q);
    console.log(`${item.key}: "${url}"`);
  }
}

run();
