import Post from "../models/post.js";

export const createPost = async (req, res) => {

    const newPost = new Post(req.body)

}

export const deletePost = async (req, res) => {


}

// Edit post caption only, not photo/video
export const editPost = async (req, res) => {


}

export const likePost = async (req, res) => {
    
}