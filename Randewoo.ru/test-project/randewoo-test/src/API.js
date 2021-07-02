// слой данных.

// СОздаём промис.
// запускаем 4-10c
// Резолвим с данными об обьекте

// Рандомно генерим число (длину массива coords)
// от 0 до N → идёт время = индексу
// Координаты рандомно

export function getCoords(objectId) {
  // let timeout = (Math.random() * 6 + 4) * 1000; // 4000 - 10000ms
  let timeout = Math.random() * 1000; // 4000 - 10000ms
  let coords = [];

  let coordsLength = Math.floor(Math.random() * 100); // 0 to 100

  for (let i = 0; i < coordsLength; i++) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 15);

    coords.push({ x: x, y: y, t: i });
  }

  let coordinates = new Promise((resolve) => {
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
