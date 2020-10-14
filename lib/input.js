'use strict';


class Input {
  constructor(argv) {
    this.action = argv[2];
    this.payload = argv[3];
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