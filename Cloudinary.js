const cloudinary = require("cloudinary");
require('dotenv').config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY ,
   api_secret: process.env.API_SECRET
});

const Uploadimgs = async(imgpath) =>{
  try{
   const data = await cloudinary.uploader.upload(imgpath,{
      resource_type: 'auto',
   });
   return data;
  }catch (err){
   return err;
  }
}
const Deleteimgs = async(imgId) =>{
   try{
    const destroy = await cloudinary.uploader.destroy(imgId);
    return destroy;
   }catch (err){
    return err;
   }
 }

 module.exports = {Uploadimgs,Deleteimgs}