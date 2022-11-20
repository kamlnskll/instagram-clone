import Post from "../models/post.js";

export const createPost = async (req, res) => {

    const newPost = new Post(req.body)

}