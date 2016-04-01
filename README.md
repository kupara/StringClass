
# CheckPoint II String Class Extension using Prototypes and Regular Expressions

This implementation extends the functionality of the `String` class by adding more utility methods.

# Running tests
The tests are run using `jasmine` on the command line

To run the tests, use the following steps:

 - Clone the repo locally and navigate to the newly created folder

    `$ git clone git@github.com:andela-ekupara/StringClass.git`
    `$ cd StringClass`

 - Open the `index.html` file in your browser to see the tests run.


# Methods Included in the Implementation

This library consist of nine custom methods:
 - `hasVowels()`
 - `toUpper()`
 - `toLower()`
 - `isQuestion()`
 - `words()`
 - `wordCount()`
 - `toCurrency()`
 - `fromCurrency`

1. **Method `hasVowels()`**

    This method can be used to check if a string contains vowels.
    It will return a boolean datatype of `true` if vowels exist and `false` if they don't.

    ``` JavaScript
        "edwin".hasVowels(); // returns true
        "hymn".hasVowels(); // returns false
    ```
2.  **Method `toUpper()`**

    Calling this method on a string returns the string, but with all characters in uppercase as applicable

    ``` JavaScript
        "edwin".toUpper(); // returns "EDWIN"
    ```
3. **Method `toLower()`**

    Calling this method on a string returns the string, but with all characters in lowercase as applicable

    ``` JavaScript
        var myVar = "WE ALL LOVE JAVASCRIPT";
            myVar.toLower(); // returns "we all love javascript"
    ```
4. **Method `ucFirst()`**

    Calling this method on a string returns the string, but with the first character 
    converted to uppercase.

    ``` JavaScript
        var sentence = "welcome to the Dojo";
            sentence.ucFirst(); // returns "Welcome to the Dojo"
    ```
5.  **Method `isQuestion()`**

    This method returns `true` if the string is a question and `false` otherwise

    ``` JavaScript
        var questioon = "Is this a question?", answer = "yes it is.";
            question.isQuestion(); // returns true
            answer.isQuestion(); // returns false
    ```
6.  **Method `words()`**

    This method returns the all the words in sentence in form of an array
    e.g `['me', 'and', 'myself']`

    ``` JavaScript
        var sentence = "me and myself";
            sentence.words(); // returns ['me', 'and', 'myself']
    ```
7.  **Method `WordCount()`**

    This method returns the number of words words in a sentence.  
    It utilizes the method `words` above
    ``` JavaScript
        var sentence = "me, myself and I";
            sentence.wordCount(); // returns 4
    ```
8.  **Method `toCurrency()`**

    This method can be used to format a string to currency.
    ``` Javascript
        var money = "234456789.123"
            money.toCurrency(); // returns 234,456,789.123
    ```
9.  **Method `fromCurrency()`**

    This method can be used to convert a currency format back to nummber.
    Its return type is a number.
    ``` JavaScript
        var currency = "12,345,678.12";
            currency.fromCurrency(); // returns 12345678.12
    ```
