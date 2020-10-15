'use strict';

class Input {
  constructor(argv) {
    this.action = argv[2];
    this.payload = argv[3];
    this.category = argv[5];
  }
  valid() {
    if (this.action !== '-a' && this.action !== '--add') {
      console.log('This is not valid');
      return false;
    } else if (!this.payload) {
      console.log('This is not valid');
      return false;
    } else {
      console.log('This is a valid entry');
      return true;
    }
  }
}


module.exports = Input;



















// class Input {
//   constructor(args) {
//     const commands = this.parseCommands(args);
//     this.payload = commands.payload;
//     this.action = commands.action;
//   }

//   parseCommands(inputCommands) {
//     const results = {};
//     // list of command to validate
//     const validCommands = ['add'];

//     // dynamically looked for data from a list of commands
//     for (let command of validCommands) {
//       if (Object.keys(inputCommands).includes(command)) {
//         results.action = command;
//         results.payload = inputCommands[command];
//       }
//     }

//     return results;
//   }

//   valid() {
//     if (this.action && this.payload) {
//       return true;
//     }
//     return false;
//   }
// }



// module.exports = Input;



