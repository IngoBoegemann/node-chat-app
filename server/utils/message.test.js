var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    // store res in var
    var author = 'Ingo';
    var text = 'some text';
    var message = generateMessage(author, text);
    //assert from match
    expect(message.from).toBe(author);
        //assert text match
    expect(message.text).toBe(text);
    //asser created at is number
    expect(message.createdAt).toBeA('number');
  });
});
