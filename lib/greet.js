const greet = {};

greet.sayHello = (name) => {
  if(typeof name !== 'string') return null;
  return `Hello ${name}`;
}


module.exports = exports = greet;
