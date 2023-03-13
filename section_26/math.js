const add = (x,y)=> x + y;
// module.exports.add = (x,y)=> x + y;
const PI = 3.141592;
const square = x => x*x; 

// module.exports.add = add;
// module.exports.PI = PI;
// exports.PI = PI;
// module.exports.square = square;

const math = {
    add:add,
    PI:PI,
    square:square
}
module.exports = math;