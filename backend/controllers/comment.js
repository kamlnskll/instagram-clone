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
const pushComment = await Post.findOneAndUpdate({_id: req.params.postid}, { $push: { comments: newComment._id }, $inc: {numberOfComments: 1}})
await res.status(200).json(saveComment)

} catch (err){ console.log(err) }

} 

export const getCommentsWithUserData = async (req, res) => {

try {
  
        const posts = await Post.find({_id: req.params.postid}).select('comments -_id');
        const populatedComments = await Post.populate(posts, {
          path: "comments",
          populate: {
            path: "postedBy",
            select: "userName profilePic"
          }}
);  
        await res.json(populatedComments)
        return populatedComments;
}

catch (err) {
    console.log(err)
}

}