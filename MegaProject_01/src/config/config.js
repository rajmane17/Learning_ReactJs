const config = {
    APPWRITE_URL: String(import.meta.env.VITE_APPWRITE_URL),
    APPWRITE_PROJECT_ID: String(import.meta.env.APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID: String(import.meta.env.APPWRITE_DATABASE_ID),
    APPWRITE_BUCKET_ID: String(import.meta.env.APPWRITE_BUCKET_ID),
    APPWRITE_COLLECTION_ID: String(import.meta.env.APPWRITE_COLLECTION_ID),
}

export default config