'use strict';

const Input = require('../lib/notes.js');

describe('Check valid method returns true', () => {
  test('will validate the input module creates a new instance of both action and payload', () => {
    let result = new Input([0, 1, '-a', 'testing valid payload']);
    expect(result.valid()).toStrictEqual(true);
    let result2 = new Input([0, 1, '--add', 'testing valid payload']);
    expect(result2.valid()).toStrictEqual(true);
  });

  test('If input value in not a valid entry return false', () => {
    let result = new Input([0, 1, '-b', 'testing valid payload']);
    expect(result.valid()).toStrictEqual(false);
  });
});























// describe('Testing the input module', () => {
//   it('should return a new valid instance with action and payload', () => {

//     let testArgs = { add: 'feed dog' };

//     let parsedInput = new Input(testArgs);

//     expect(parsedInput).toEqual({ action: 'add', payload: 'feed dog' });
//     expect(parsedInput.valid()).toEqual(true);
//   });

//   it('should return a false boolen when given bad inputs', () => {

//     let testArgs = { wrong: 'bad action' };

//     let parsedInput = new Input(testArgs);

//     expect(parsedInput.valid()).toEqual(false);

//   })
// });
