let fruits = [0, 1, 6, 6, 4, 4, 6];

function totalFruit(fruits) {
  let fruitTypes = [];
  let currentWindow = [];
  let maxFruitCount = 0;

  for (const fruit of fruits) {
    if (!fruitTypes.includes(fruit) && fruitTypes.length === 2) {
      fruitTypes.shift();

      let lastFruitType = -1;

      for (let i = currentWindow.length - 1; i >= 0; i--) {
        if (lastFruitType === -1) {
          lastFruitType = currentWindow[i];
        } else if (lastFruitType !== currentWindow[i]) {
          currentWindow.splice(0, i + 1);
          break;
        }
      }
    }

    currentWindow.push(fruit);

    if (currentWindow.length > maxFruitCount) {
      maxFruitCount = currentWindow.length;
    }

    if (!fruitTypes.includes(fruit)) {
      fruitTypes.push(fruit);
    } else if (
      fruitTypes[1] !== fruit &&
      fruitTypes.length !== 1
    ) {
      [fruitTypes[0], fruitTypes[1]] = [
        fruitTypes[1],
        fruitTypes[0]
      ];
    }
  }

  return maxFruitCount;
}

console.log(totalFruit(fruits));