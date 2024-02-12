const envPath = import.meta.env;
const conf = {
  appwriteUrl: String(envPath.VITE_APP_APPWRITE_URL),
  appwriteProjectId: String(envPath.VITE_APP_APPWRITE_PROJECT_ID),
  appwriteDatabasetId: String(envPath.VITE_APP_APPWRITE_DATABASE_ID),
  appwriteCollectiontId: String(envPath.VITE_APP_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(envPath.VITE_APP_APPWRITE_BUCKET_ID),
};

export default conf;
