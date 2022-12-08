import Post from "../models/post.js";
import User from "../models/user.js";
import path from 'path'
import DatauriParser from 'datauri/parser.js'
import { uploader } from "../utils/cloudinary.js";

export const createPost = async (req, res) => {

    console.log(req.body)
    const newPost = new Post({
        photo: req.body.photo,
        caption: req.body.caption,
        postedBy: req.user,
    })
    
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
        User.findOneAndUpdate({_id: req.user}, { $push: {posts: savedPost._id}}, {new: true})
        // User.findOneAndUpdate({_id: req.user}, { $inc: {postCount: 1}}) ----> Not incrementing for whatever reason.
        console.log('New post created')
    } catch (err) { throw err }

}

export const uploadContentToCloudinary = (req, res) => {
    
    console.log('req.file: ', req.file)
    const parser = new DatauriParser()
    const extName = path.extname(req.file.originalname).toString();
    const file64 = parser.format(extName, req.file.buffer);
    return uploader.upload(file64.content).then((result) => {
        const image = result.url
        return res.status(200).json({
            message: 'Your image has been uploaded to cloudinary',
            data: {
                image
            }
        })}).catch((err) => res.status(400).json({
            message: 'Something went wrong with your upload to cloudinary',
            data: { err }
        }))
    

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


