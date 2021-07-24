const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Rest API
// request  responce
app.get('/', (req, res) => {
  res.send('Chtonibud drugo 123e');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/GETCOORDS/:id', async (req, res) => {
  res.send(JSON.stringify(await getCoords(req.params.id)));
});

// JSON.stringify(req.query)
// query - get parametrs

async function getCoords(objectId) {
  let timeout = Math.random() * 1000;
  const coords = [];

  const coordsLength = Math.floor(Math.random() * 100); // 0 to 100

  for (let i = 0; i < coordsLength; i++) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 15);

    coords.push({ x: x, y: y, t: i });
  }

  const coordinates = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: objectId,
        objectName: `Box ${objectId}`,
        coords: coords,
      });
    }, timeout);
  });

  return coordinates;
}
