const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('anna ensimmäinen luku: ', (luku1_str) => {
  rl.question('anna toinen luku: ', (luku2_str) => {
    const luku1 = parseFloat(luku1_str);
    const luku2 = parseFloat(luku2_str);

    if (isNaN(luku1) || isNaN(luku2)) {
      console.log('virheellinen syöte. Anna vain numeroita');
    } else {
      if (luku1 > luku2) {
        console.log(`suurempi luku on: ${luku1}`);
      } else if (luku2 > luku1) {
        console.log(`suurempi luku on: ${luku2}`);
      } else {
        console.log('luvut ovat yhtä suuria');
      }
    }

    rl.close();
  });
});