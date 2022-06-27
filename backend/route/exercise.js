const router = require("express").Router();

router.route('/get').get((req, res) => {
    res.send('Eercise!')
  })
module.exports = router;