function add(a, b, logger) {
  logger("Sumando 1: + " + a.toString());
  logger("Sumando 2: + " + b.toString());
  return a + b;
}

function logToConsole(message) {
  console.log(message);
}

console.log(add(4, 5, logToConsole));
