const express = require('express');
const router = express.Router();


const Post = require('../models/Post');

// post index route - not sure if necessary 
router.get('/', async (req, res) => {
  try {
      const posts = await Post.all
      res.status(201).json({posts})
  } catch(err) {
      res.status(500).json({err})
  }
})

// posts show route
router.get('/:id', async (req, res) => {
  try {
      const posts = await Post.findById(req.params.id)
      res.status(202).json(post)
  } catch(err) {
      res.status(404).json({err})
  }
})

// Create posts route
router.post('/', async (req, res) => {
  try {
      const dog = await Post.create(req.body)
      res.status(201).json(post)
  } catch(err) {
      res.status(404).json({err})
  }
})

module.exports = { index, show, create}
