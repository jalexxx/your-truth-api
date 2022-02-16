const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts');

router.get('posts/', postsController.index);
router.get('posts/:id', postsController.show);
router.post('/posts', postsController.create);

module.exports = router;