'use strict';

const Note = require('../lib/notes.js');

const spy = jest.spyOn(console, 'log').mockImplementation();

describe('Nothing is logged to the console fi there was no command given', () => {
  beforeEach(() => {
    spy.mockClear();
  });
  test('will validate the console is clear', () => {
    let result = new Note({ action: 'a', payload: '' });
  });
  test('If input value is not valid entry return false', () => {
    expect(new Note(['*', 'This is an invalid entry'])).toStrictEqual(false);
  });
});