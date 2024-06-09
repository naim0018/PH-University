import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path: path.join(process.cwd(),'.env')})

export default {
    NODE_ENV :process.env.NODE_ENV,
    port:process.env.PORT,
    db:process.env.DB,
    defaultPass : process.env.DEFAULT_PASS,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    
}

