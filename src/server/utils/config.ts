import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

export const config = {
  mongo: process.env.MONGO,
  jwtSecret: process.env.JWT_SECRET
}
