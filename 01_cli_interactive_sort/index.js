const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


const inputText = {
  greeting: 'Hello. Enter 10 words or didgits deviding them in spaces: ',
  questionA: 'Sort words alphabetically',
  questionB: 'Show numbers from lesser to greater',
  questionC: 'Show numbers from bigger to smaller',
  questionD: 'Display words in ascending order by number of letters in the word',
  questionE: 'Show only unique words',
  questionF: 'Display only unique values from the set of words and numbers entered by the user',
}

readline.question(inputText.greeting, (input, exit) => {
  console.log(`Hey there ${input}!`);
  readline.close();
});