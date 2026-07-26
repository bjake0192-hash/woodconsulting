const https = require('https');

const queries = [
  { key: 'hero', q: 'business consulting team meeting office candid' },
  { key: 'construction', q: 'construction worker site building candid' },
  { key: 'engineering', q: 'engineer blueprint factory industrial candid' },
  { key: 'manufacturing', q: 'manufacturing plant worker industrial candid' },
  { key: 'logistics', q: 'warehouse forklift logistics candid' },
  { key: 'healthcare', q: 'doctor patient hospital candid' },
  { key: 'facilities', q: 'building maintenance worker candid' },
  { key: 'technology', q: 'software development team startup candid' },
  { key: 'public', q: 'community meeting town hall public candid' },
  { key: 'education', q: 'classroom teacher university candid' },
  { key: 'retail', q: 'retail store owner customer candid' },
  { key: 'news1', q: 'construction safety hardhat site candid' },
  { key: 'news2', q: 'business audit document desk candid' },
  { key: 'news3', q: 'contractor clipboard construction candid' },
  { key: 'contact', q: 'professional handshake office candid' }
];

async function fetchUrl(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3`, (res) => {
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
            resolve('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80'); // fallback
          }
        } catch (e) {
          resolve('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80'); // fallback
        }
      });
    }).on('error', () => {
        resolve('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80'); // fallback
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
