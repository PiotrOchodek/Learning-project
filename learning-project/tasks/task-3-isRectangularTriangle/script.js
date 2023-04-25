const isRectangularTriangle = (a, b, c) => {

  if (typeof a !== 'number') {
    console.log('Input is not a number');
    return;
  } else if (typeof b !== 'number') {
    console.log('Input is not a number');
    return;
  } else if (typeof c !== 'number') {
    console.log('Input is not a number');
    return;
  }

  const numbers = [a, b, c].sort((x, y) => {
    return x - y;
  });

  const a2 = numbers[0];
  const b2 = numbers[1];
  const c2 = numbers[2];

  if (Math.pow(a2, 2) + Math.pow(b2, 2) === Math.pow(c2, 2)) {
    console.log(`true`);
    return true;
  } else {
    console.log(
      `From the given lengths of the segments it is impossible to build a right triangle`
    );
    return false;
  }
  
};

isRectangularTriangle(6, 8, 10);
isRectangularTriangle(6, 8, '10');