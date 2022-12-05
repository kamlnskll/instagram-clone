import Post from "../models/post.js";
import User from "../models/user.js";

export const createPost = async (req, res) => {

    // Basic for now, add images as requirement for post
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
        console.log('New post created')
    } catch (err) { throw err }

}

export const deletePost = async (req, res) => {

    try{
        await Post.deleteOne({
            _id: req.params.id
        }, {
            new: true
        })
        res.status(200).json('Post Deleted')
    } catch (err) {
        throw err
    }

}

// Edit post caption only, not photo/video
export const editPost = async (req, res) => {


}


export const getAllPosts = async (req, res) => {

    try{
        const posts = await Post.find().populate('postedBy')
        res.status(200).json(posts)
    } catch(err) { throw err }

}

export const getSubscribedPosts = async (req, res) => {
    try{
    const findUser = await User.findById(req.user).select('following -_id').populate({path: 'following', populate: { path: 'posts' }})
    // 'following', 'posts')
    res.status(200).json(findUser)

    } catch(err) { throw err }

}


export const getPostById = async (req, res) => {


}

export const likePost = async (req, res) => {
    
}


