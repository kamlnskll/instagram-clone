import Post from "../models/post.js";
import User from "../models/user.js";
import { dataUri } from "../utils/multer.js";

export const createPost = async (req, res) => {

    if(req.file){
        const file = dataUri(req)
        return cloudinary.v2.uploader.upload(file).then((result) => {
            const image = result.url
            return res.status(200).json({
                message: 'Your image has been uploaded to cloudinary',
                data: {
                    image
                }
            }).then()
            
    
        }).catch((err) => res.status(400).json({
            message: 'Something went wrong with your upload to cloudinary',
            data: { err }
        }))
    
    }

    // Basic for now, add images as requirement for post
    // const newPost = new Post({
    //     photo: image,
    //     caption: req.body.caption,
    //     postedBy: req.user,
    // })
    
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
        console.log('New post created')
    } catch (err) { throw err }

}

// export const uploadContent = (req, res) =>{

//     if(req.file){
//         const file = dataUri(req)
//         return uploader.upload(file).then((result) => {
//             const image = result.url
//             return res.status(200).json({
//                 message: 'Your image has been uploaded to cloudinary',
//                 data: {
//                     image
//                 }
//             })
    
//         }).catch((err) => res.status(400).json({
//             message: 'Something went wrong with your upload to cloudinary',
//             data: { err }
//         }))
    
//     }}


// export const uploadToCloudinary = async (req, res) => {
// // We want to upload the image to cloudinary via BASE64 format.
// // Find a way to combine this with the create post button function perhaps
// uploadContent(req.body.image).catch((err) => res.status(err))

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


