import jwt from 'jsonwebtoken'


export const generateAccessToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET_ACCESS_TOKEN, {
        expiresIn: '45m',
    })
}

export const requireLogin = async (req, res, next) => {
const { authorization } = req.headers
if(!authorization){
    return res.status(401).json({error: 'Auth Token Required'})
}
    const token = authorization.split(' ')[1]
    try{
        
    const {id} = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN)

    req.user = id
    next()

    } catch (error){
        console.log(error)
        res.status(401).json({error: 'Request not authorized'})
    }
}

// export const generateRefreshToken = jwt.sign({
    
// })