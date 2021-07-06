export async function getCoords(objectId) {
  // let timeout = Math.random() * 1000; // 4000 - 10000ms
  const timeout = (Math.random() * 6 + 4) * 1000; // 4000 - 10000ms
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
