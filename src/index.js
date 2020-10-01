exports.min = function min(array) {
  if (
    typeof array === "undefined" ||
    array === null ||
    array.length === null ||
    array.length < 1
  )
    return 0;
};

exports.max = function max(array) {
  return 0;
};

exports.avg = function avg(array) {
  if (
    typeof array === "undefined" ||
    array === null ||
    array.length === null ||
    array.length < 1
  )
    return 0;
  return array.reduce((current, prev) => current + prev) / array.length;
};
