var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {

    var from = 'Ingo';
    var latitude = 123;
    var longitude = 123;

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
  });
});
