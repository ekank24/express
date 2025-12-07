var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('tämä hakee kaikki käyttäjät (GET)');
});

router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  res.send(`tämä hakee käyttäjän, joka ID on ${userId} (GET)`);
});

router.get('/category/:categoryName/product/:productId', function(req, res, next) {
  const category = req.params.categoryName;
  const product = req.params.productId;
  res.send(`haetaan tuotetta ID:llä ${product} kategoriasta ${category} (GET)`);
});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  console.log('vastaanotettu data:', newUser);
  res.status(201).json({
    message: 'käyttäjä luotu (POST)',
    createdUser: newUser
  });
});

module.exports = router;