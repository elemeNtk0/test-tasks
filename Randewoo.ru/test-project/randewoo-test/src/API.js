// слой данных.

// СОздаём промис.
// запускаем 4-10c
// Резолвим с данными об обьекте

export function getCoords(objectId) {
  // let timeout = (Math.random() * 6 + 4) * 1000; // 4000 - 10000ms
  let timeout = Math.random() * 1000; // 4000 - 10000ms

  let coordinates = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: objectId,
        objectName: `Box ${objectId}`,
        coords: [
          { x: 1, y: 2, t: 1 },
          { x: 1, y: 4, t: 2 },
          { x: 1, y: 5, t: 3 },
          { x: 1, y: 6, t: 4 },
        ],
      });
    }, timeout);
  });

  return coordinates;
}
