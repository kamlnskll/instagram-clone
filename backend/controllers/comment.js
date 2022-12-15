import Comment from '../models/comment.js'
import Post from '../models/post.js'
import User from '../models/user.js'

export const addComment = async (req, res) => {

const newComment = new Comment({
postedBy: req.user,
comment: req.body.comment
})

try {

const saveComment = await newComment.save()
const pushComment = await Post.findOneAndUpdate({_id: req.params.postid}, { $push: { comments: newComment }, $inc: {numberOfComments: 1}})
await res.status(200).json(saveComment)

} catch (err){ console.log(err) }

} 

export const getComments = async (req, res) => {

try {
const comments = await Post.findById(req.params.postid).select('comments -_id')
console.log(comments)
res.status(200).json(comments)

return comments
}

catch (err) {
    console.log(err)
}

}