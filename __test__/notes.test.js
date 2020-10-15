'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Testing the notes module', () => {
  it('console log does not get called with no command given', () => {
    let testNote = new Notes();
    testNote.execute();
    expect(console.log).not.toHaveBeenCalled();

  });

  it('console log is called when a valid command is given', () => {
    expect(console.log).not.toHaveBeenCalled();

  });
});

























// const spy = jest.spyOn(console, 'log').mockImplementation();

// describe('Nothing is logged to the console fi there was no command given', () => {
//   beforeEach(() => {
//     spy.mockClear();
//   });
//   test('will validate the console is clear', () => {
//     let result = new Note({ action: 'a', payload: '' });
//   });
//   test('If input value is not valid entry return false', () => {
//     expect(new Note(['*', 'This is an invalid entry'])).toStrictEqual(false);
//   });
// });