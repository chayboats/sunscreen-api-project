import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = 3000;
const GOOGLE_GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=`;
const UV_URL = 'https://api.openuv.io/api/v1/uv?';

function encodeAddress(address) {
  const encodedValues = Object.values(address).map((value) => value.replace(/ /g, '%20'));
  return encodedValues.join('%20');
}

function setUVCategory(uvIndex) {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  if (uvIndex >= 11) return 'Extremely High';
  return 'Invalid UV Index';
}

async function getAddressData(address) {
  try {
    const result = await fetch(`${GOOGLE_GEOCODING_URL}${address}&key=${process.env.GOOGLE_API_KEY}`);
    const jsonResult = await result.json();

    return jsonResult.status === 'OK' ? jsonResult.results[0] : jsonResult;
  } catch (error) {
    console.log(error.status);
    console.error(error.status);
  }
}

async function getUVIndex(lat, lng) {
  try {
    const uvResult = await fetch(`${UV_URL}lat=${lat}&lng=${lng}`, { headers: { 'Content-Type': 'application/json', 'x-access-token': process.env.OPENUV_API_KEY } });
    const jsonUvResult = await uvResult.json();

    return jsonUvResult.error ? jsonUvResult.error : Math.round(jsonUvResult.result.uv);
  } catch (error) {
    console.log('hit');
    console.log(error.error);
    console.error(error.error);
  }
}

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs', { page: 'HOME' });
});

app.post('/location', (req, res) => {
  res.render('index.ejs', { page: 'LOCATION', data: undefined });
});

app.post('/results', async (req, res) => {
  const address = encodeAddress(req.body);
  const addressData = await getAddressData(address);
  const data = {};
  if (addressData.status) {
    data.error = 'There was an error finding this location';
    res.render('index.ejs', { page: 'LOCATION', data });
    return;
  }

  const setCoordinate = (direction) => Number(addressData?.geometry?.location[direction])?.toFixed(2);
  const lat = setCoordinate('lat');
  const lng = setCoordinate('lng');

  const uvIndex = await getUVIndex(lat, lng);

  if (typeof uvIndex === 'string') {
    data.error = 'There was an error finding this location';
    res.render('index.ejs', { page: 'LOCATION', data });
    return;
  }

  data.location = addressData?.formatted_address;
  data.uvIndex = uvIndex;
  data.uvIndexCategory = setUVCategory(uvIndex);
  data.message = uvIndex > 5 ? 'You need sunscreen!' : "Sunscreen isn't necessary right now.";

  res.render('index.ejs', { page: 'RESULTS', data });
});

app.post('/new-search', (req, res) => {
  res.render('index.ejs', { page: 'LOCATION', data: undefined });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
