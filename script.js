"use strict";

const jokes = {
  dadJokes: [
    "I only know 25 letters of the alphabet. I don't know y.",
    "What do you call a factory that makes okay products? A satisfactory",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "What did the ocean say to the beach? Nothing it just waved.",
    "How does the moon cut his hair?  Eclipse it.",
    "Where do fruits go on vacation?  Pear-is!",
  ],

  animalJokes: [
    "What did the fish say when it swam into a wall?  Dam!",
    "What do you get when you cross a snake with a tasty dessert? A. A pie-thon!",
    "Why are cats bad storytellers? Because they only have one tale.",
    "What do you call a grizzly bear caught in the rain? A drizzly bear!",
    "What do you call an alligator who is a thief? A crookodile!",
    "What kind of ant is even bigger than an elephant? A gi-ant!",
  ],

  codeJokes: [
    "Algorithm: word used by programmers when … they do not want to explain what they did",
    "Why did the programmer quit his job ? Because he didn't get arrays",
    "Knock, knock.  Who's there? very long pause.. Java.",
    "The programmer got stuck in the shower because the instructions on the shampoo bottle said Lather, Rinse, Repeat",
    "A good programmer is someone who looks both ways before crossing a one-way street.",
    "Programmer (noun): A machine that turns coffee into code",
  ],
};

const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const outputJoke = () => {
  let result = [];

  for (let arr in jokes) {
    let message = randomNum(jokes[arr].length);

    switch (arr) {
      case "dadJokes":
        result.push(`Dad Joke: ${jokes[arr][message]}`);
        break;
      case "animalJokes":
        result.push(`Animal Joke: ${jokes[arr][message]}`);
        break;
      case "codeJokes":
        result.push(`Code Joke: ${jokes[arr][message]}`);
        break;
      default:
        result.push(`Not enough info`);
        break;
    }
  }
  return result;
};

console.log(outputJoke());
