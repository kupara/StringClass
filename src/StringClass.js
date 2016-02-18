(function() {
  'use strict';

  String.prototype.hasVowels = function() {
    return /[aeiou]/.test(this);
  };

  String.prototype.toUpper = function() {
    return this.replace(/[a-z]/g, function(str) {
      // from str to ascii
      return String.fromCharCode(str.charCodeAt() - 32);
    })
  };

  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, function(str) {
      // from str to ascii
      return String.fromCharCode(str.charCodeAt() + 32);
    })
  }

  String.prototype.ucFirst = function() {
    return this.replace(/[a-z]/, function(str) {
      return str.toUpper();
    })
  };

  String.prototype.isQuestion = function() {
    return /(\?.)$/.test(this);
  };

  String.prototype.words = function() {
    return this.replace(/\W/g).split(' ');
  };

  String.prototype.wordCount = function() {
    
  };
  
  String.prototype.toCurrency = function() {
    
  };

  String.prototype.fromCurrency = function() {
    
  };
})();
