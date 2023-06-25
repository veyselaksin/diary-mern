// Mongo DB configuration
const MONGO_HOST = process.env.MONGO_HOST || "localhost"
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "diary"
const MONGO_USER = process.env.MONGO_USER || "root"
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "root"

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/${MONGO_DB_NAME}?authSource=admin`

export default { MONGO_URI };