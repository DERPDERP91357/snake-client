const IP = '165.227.47.243';
const PORT = 50541;
const name = "Dan";

// const MOVE_UP_KEY = "w";
// const MOVE_DOWN_KEY = "s";
// const MOVE_LEFT_KEY = "a";
// const MOVE_RIGHT_KEY = "d";

// const msg1Input = '1';
// const msg2Input = '2';

const keyBindings = {
  w : "Move: up",
  s : "Move: down",
  a : "Move: left",
  d : "Move: right",
  1 : "Say: YOO",
  2 : "Say: HOO",
};

module.exports = {
  IP,
  PORT,
  name,
  keyBindings
  // MOVE_UP_KEY,
  // MOVE_DOWN_KEY,
  // MOVE_LEFT_KEY,
  // MOVE_RIGHT_KEY,
  // msg1Input,
  // msg2Input
};