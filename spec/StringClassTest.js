describe('Tests for StringClass Checkpoint', function() {
  
  var inLower = 'nouppercase',
    inUpper= 'NOLOWERCASE',
    noVowels = 'rhythm',
    asQuestion = 'Am I a question? ',
    asNumber = 11111.11,
    asCurrency = '11,111.11',
    mixedString = 'I have two kids @ home that are thrilled coz am a cool dad';

  describe('Test String with hasVowels', function() {  
    // hasVowels() checks whether a string has vowels returning true 
    // if so and false otherwise 
    it('Should return true if the String has Vowels', function() {
      expect(typeof inLower.hasVowels()).toBe('boolean');
      expect(inLower.hasVowels()).toBeTruthy();
      expect(noVowels.hasVowels()).not.toBeTruthy();
    });
  });

  describe('Test String with toUpper()', function() { 
    // toUpper() returns the string with all letters in Uppercase 
    it('should return a String with all letters converted to UPPERCASE', function() { 
      expect(typeof inUpper.toUpper()).toBe('string');
      expect(inLower.toUpper()).toEqual(inLower.toUpperCase());
      expect(inUpper.toUpper()).toEqual(inUpper);
      expect(asQuestion.toUpper()).toEqual(asQuestion.toUpperCase());
      expect('ABC'.toUpper()).toEqual('ABC');
    });
  });

  describe('Test String with toLower()', function() {
    // toLower() returns the string with all letters in Lowercase 
    it('should return a string with all LETTERS converted to lowercase', function() {
      expect(typeof inUpper.toLower()).toBe('string');
      expect(inUpper.toLower()).toEqual(inUpper.toLowerCase());
      expect(inLower.toLower()).toEqual(inLower);
      expect(asQuestion.toLower()).toEqual(asQuestion.toLowerCase());
      expect('ABC'.toLower()).toEqual('abc');
    });
  });
  
  describe('Test String with ucFirst()', function() {
    //ucFirst() returns a String with the first letter in Uppercase
    it('should return the String with the first letter uppercased', function() {
      expect(typeof inLower.ucFirst()).toBe('string');
      expect(inLower.ucFirst()).toEqual('Nouppercase');
      expect(noVowels.ucFirst()).toEqual('Rhythm');
    });
  });
  
  describe('Test String with isQuestion()', function() {
    // returns true if the string it's called on is a question and
    // false if it's not.
    it('should return true is the String is a question', function() {
      expect(typeof asQuestion.isQuestion()).toEqual('boolean');
      expect(asQuestion.isQuestion()).toBeTruthy();
      expect(noVowels.isQuestion()).not.toBeTruthy();
    });
  });
  
  describe('Test String with words()', function() {
    // returns a list of the words in the string, as an Array
    it('should return an array of all the words in the given string', function() {
      var _words = mixedString.words();
      expect(typeof _words).toBe('object');
      expect(Array.isArray(_words)).toBeTruthy();
      expect(_words.length).toEqual(13);
      expect(_words).toEqual(['I', 'have', 'two', 'kids', 'home', 'that', 'are', 'thrilled', 'coz', 'am', 'a', 'cool', 'dad']);
    });
  });

  describe('Test String with wordCount()', function() {
    // Returns the number of words in the string using words()
    it('should return the number of words in a given string', function() {
      var numOfWords = mixedString.wordCount();
      expect(typeof numOfWords).toEqual('number');
      expect(numOfWords).toEqual(13);
      expect(noVowels.wordCount()).toEqual(1);
    });
  });

  describe('Test String with toCurrency()', function() {
    // Returns a currency representation of the String
    it('should return a number in currency format', function() {
      expect(typeof asNumber.toCurrency()).toEqual('string');
      expect(asNumber.toCurrency()).toEqual(asCurrency);
    });
  });

  describe('Test String with fromCurrency()', function() {
    // Returns a number representation of the Currency String
    it('should return the currency as a number', function() {
      expect(typeof asCurrency.fromCurrency()).toEqual('string');
      expect(asCurrency.fromCurrency()).toEqual(asNumber);
    });
  });
});
