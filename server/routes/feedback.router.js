const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('in POST', req.body);
  const queryText = ` INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1, $2, $3, $4); `;
  const queryArgs = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

  pool.query(queryText, queryArgs)
  .then(result => {
    console.log('posted feedback');
    res.sendStatus(201);
  })
  .catch(error => {
    console.log('error', error)
    
  });
});

module.exports = router;