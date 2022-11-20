import jwt from 'jsonwebtoken'
// import * as dotenv from 'dotenv'
// dotenv.config()

export const generateAccessToken = (id) => {
    return jwt.sign({id}, `${process.env.JWT_SECRET_ACCESS_TOKEN}`, {
        expiresIn: '10m',
    })
}

// export const generateRefreshToken = jwt.sign({
    
// })