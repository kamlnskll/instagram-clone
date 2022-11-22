import Post from "../models/post.js";

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
        const posts = await Post.find()
        res.status(200).json(post)
    } catch(err) { throw err }


}

export const getPostById = async (req, res) => {


}

export const likePost = async (req, res) => {
    
}


