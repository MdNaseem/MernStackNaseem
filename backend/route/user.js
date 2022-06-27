const router = require("express").Router();

router.route('/get').get((req, res) => {
    res.send('User!')
  })
module.exports = router;