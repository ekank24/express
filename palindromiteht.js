const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('anna sana: ', (sana) => {
  const kasiteltySana = sana.toLowerCase();

  const kaannettySana = kasiteltySana.split('').reverse().join('');

  if (kasiteltySana === kaannettySana) {
    console.log(`'${sana}' on palindromi`);
  } else {
    console.log(`'${sana}' ei ole palindromi`);
  }

  rl.close();
});