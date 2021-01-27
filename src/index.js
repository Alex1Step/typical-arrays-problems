
exports.min = function min (array) {
  if (arguments.length===0) {return 0}
  if (array.length===0) {return 0}
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (arguments.length===0) {return 0}
  if (array.length===0) {return 0}
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (arguments.length===0) {return 0}
  if (array.length===0) {return 0}
  let sum = 0;
  array.forEach(element => {
    sum = sum + element
  });
  return sum/(array.length);
}
