import { v2 as cloudinary } from 'cloudinary';

const connectToCloudinary = () => {
  // 🔍 Add this debug log before configuration
  console.log('🔗 Connecting to Cloudinary...');

  // 👇 Cloudinary configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log('✅ Cloudinary connected');
};

export default connectToCloudinary;