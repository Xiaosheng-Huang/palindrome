module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function() {
    let content = this.processedContent()
    return content === content.reverse();
  }
}
