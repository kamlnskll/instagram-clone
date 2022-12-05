import Post from "../models/post.js";
import User from "../models/user.js";
import { uploadContent } from "../utils/uploadContent.js";

export const createPost = async (req, res) => {

const photo = uploadContent(req.body.photo).then(res => res.data)
    // Basic for now, add images as requirement for post
    const newPost = new Post({
       photo: photo,
        caption: req.body.caption,
        postedBy: req.user,
    }
    )
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
        console.log('New post created')
    } catch (err) { throw err }

}

// export const uploadImgorVid = async (req, res) => {
// // We want to upload the image to cloudinary via BASE64 format.
// // Find a way to combine this with the create post button function perhaps

// uploadContent(req.body.image).then((url) => res.send(url)).catch((err) => res.status(500))
// }

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


