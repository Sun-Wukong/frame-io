import express from 'express';
import expressJwt from 'express-jwt'
import Comment from '../models/Comment'

const router = express.Router()

const jwtMiddleWare = expressJwt({
  secret: process.env.AUTH_TOKEN_SECRET,
  credentialsRequired: false,
  algorithms: ['HS256'],
  getToken: (req) => { 
    return req.cookies.auth_token || null
  }
})

router.post('/', jwtMiddleWare, (req, res) => {
  const { title, timestamp, meta_data, content_id, reply_to } = req.body
  try {
    const comment = Comment.create({
      text: req.body
    })
  } catch (e) {

  }
})

module.exports = router