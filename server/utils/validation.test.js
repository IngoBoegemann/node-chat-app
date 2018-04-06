var expect = require('expect');

var {isRealString} = require('./validation');

// import isRealString

//isRealString
  //should reject non isRealString
  //should reject only spaces
  //should allow strings with non-space characters

  describe('isRealString', () => {
    it('should reject non string names', () => {

      var name = 12;

      expect(isRealString(name)).toBe(false);
    });

    it('should reject only spaces', () => {

      var name = "   ";

      expect(isRealString(name)).toBe(false);
    });

    it('should allow strings with non-space characters', () => {

      var name = " Gandalf_32  ";

      expect(isRealString(name)).toBe(true);
    });
  });
