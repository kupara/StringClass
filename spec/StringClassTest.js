describe('Tests for StringClass Checkpoint', function() {
  'use strict';
  
  var inLower = 'nouppercase',
    inUpper= 'NOLOWERCASE',
    noVowels = 'rhythm',
    asQuestion = 'Am I a question? ',
    asNumber = '111111.11',
    asCurrency = '110,111.11',
    mixedString = 'I have two kids home that are thrilled coz am a cool dad';

  describe('The function String.prototype.hasVowels()', function() {  
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.hasVowels).toBeDefined();
      expect(typeof String.prototype.hasVowels).toBe('function');
    });
    
    // hasVowels() checks whether a string has vowels returning true 
    // if so and false otherwise 
    it('should return true if the String has Vowels', function() {
      expect(typeof inLower.hasVowels()).toBe('boolean');
      expect(inLower.hasVowels()).toBeTruthy();
      expect(noVowels.hasVowels()).not.toBeTruthy();
      expect('S@t!R3'.hasVowels()).toBeFalsy();
    });
  });

  describe('The function String.prototype.toUpper()', function() { 
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.toUpper).toBeDefined();
      expect(typeof String.prototype.toUpper).toBe('function');
    });
    
    // toUpper() returns the string with all letters in Uppercase 
    it('should return a String with all letters converted to UPPERCASE', function() { 
      expect(String.prototype.toUpper).toBeDefined();
      expect(typeof inUpper.toUpper()).toBe('string');
      expect(inLower.toUpper()).toEqual(inLower.toUpperCase());
      expect(inUpper.toUpper()).toEqual(inUpper);
      expect(asQuestion.toUpper()).toEqual(asQuestion.toUpperCase());
      expect('ABC'.toUpper()).toEqual('ABC');
    });
  });

  describe('The function String.prototype.toLower()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.toLower).toBeDefined();
      expect(typeof String.prototype.toLower).toBe('function');
    });
    
    // toLower() returns the string with all letters in Lowercase 
    it('should return a string with all LETTERS converted to lowercase', function() {
      expect(String.prototype.toLower).toBeDefined();
      expect(typeof inUpper.toLower()).toBe('string');
      expect(inUpper.toLower()).toEqual(inUpper.toLowerCase());
      expect(inLower.toLower()).toEqual(inLower);
      expect(asQuestion.toLower()).toEqual(asQuestion.toLowerCase());
      expect('ABC'.toLower()).toEqual('abc');
    });
  });
  
  describe('The function String.prototype.ucFirst()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.ucFirst).toBeDefined();
      expect(typeof String.prototype.ucFirst).toBe('function');
    });
    
    //ucFirst() returns a String with the first letter in Uppercase
    it('should return the String with the first letter uppercased', function() {
      expect(String.prototype.ucFirst).toBeDefined();
      expect(typeof inLower.ucFirst()).toBe('string');
      expect(inLower.ucFirst()).toEqual('Nouppercase');
      expect(noVowels.ucFirst()).toEqual('Rhythm');
    });
  });
  
  describe('The function String.prototype.isQuestion()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.isQuestion).toBeDefined();
      expect(typeof String.prototype.isQuestion).toBe('function');
    });
    
    // returns true if the string it's called on is a question and
    // false if it's not.
    it('should return true is the String is a question', function() {
      expect(String.prototype.isQuestion).toBeDefined();
      expect(typeof asQuestion.isQuestion()).toBe('boolean');
      expect(asQuestion.isQuestion()).toBeTruthy();
      expect(noVowels.isQuestion()).not.toBeTruthy();
    });
  });
  
  describe('The function String.prototype.words()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.words).toBeDefined();
      expect(typeof String.prototype.words).toBe('function');
    });
    
    // returns a list of the words in the string, as an Array
    it('should return an array of all the words in the given string', function() {
      var _words = mixedString.words();
      expect(String.prototype.words).toBeDefined();
      expect(typeof _words).toBe('object');
      expect(Array.isArray(_words)).toBeTruthy();
      expect(_words.length).toEqual(13);
      expect(_words).toEqual(['I', 'have', 'two', 'kids', 'home', 'that', 'are', 'thrilled', 
        'coz', 'am', 'a', 'cool', 'dad']);
    });
  });

  describe('The function String.prototype.wordCount()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.wordCount).toBeDefined();
      expect(typeof String.prototype.wordCount).toBe('function');
    });
    
    // Returns the number of words in the string using words()
    it('should return the number of words in a given string', function() {
      expect(String.prototype.wordCount).toBeDefined();
      var numOfWords = mixedString.wordCount();
      expect(typeof numOfWords).toBe('number');
      expect(numOfWords).toEqual(13);
      expect(noVowels.wordCount()).toEqual(1);
    });
    it('should use the words method to calculate  word count', function() {
      // spyOn the `words` method to ensure it is called when `wordCount` is run
      spyOn(String.prototype, 'words').and.callThrough();
      mixedString.wordCount();
      expect(String.prototype.words).toHaveBeenCalled();
    });
  });

  describe('The function String.prototype.toCurrency()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.toCurrency).toBeDefined();
      expect(typeof String.prototype.toCurrency).toBe('function');
    });

    // Returns a currency representation of the String
    it('should return a number in currency format', function() {
      expect(String.prototype.toCurrency).toBeDefined();
      expect(typeof asNumber.toCurrency()).toEqual('string');
      expect(asNumber.toCurrency()).toEqual('111,111.11');
      expect('323233.23'.toCurrency()).toEqual('323,233.23');
    });
  });

  describe('The function String.prototype.fromCurrency()', function() {
    it('should be a function and prototype of the String class', function() {
      expect(String.prototype.fromCurrency).toBeDefined();
      expect(typeof String.prototype.fromCurrency).toBe('function');
    });

    // Returns a number representation of the Currency String
    it('should return the currency as a number', function() {
      expect(String.prototype.fromCurrency).toBeDefined();
      expect(typeof asCurrency.fromCurrency()).toBe('number');
      expect(asCurrency.fromCurrency()).toEqual(110111.11);
      expect('323,233.23'.fromCurrency()).toEqual(323233.23);
    });
  });
});
