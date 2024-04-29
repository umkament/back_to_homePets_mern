import mongoose from 'mongoose'
//import User from "../models/user.js"

const PetSchema = new mongoose.Schema(
   {
     titleAdvt: {
       type: String,
       required: true
     },
     description: {
       type: String,
       required: true
     },
     name: {
       type: String,
       required: true
     },
     kindOfPet: {
       type: String,
       required: true
     },
     breed: String,
     age: Number,
     color: String,
     weight: String,
     height: String,
     gender: String,
     birthday: Date,
     microchip: String,
     vaccinations: [
       {
         name: String,
         date: Date
       }
     ],
     mainImageUrl: String,
     isAdopted: {
       type: Boolean,
       default: false
     },
     photos: {
       type: Array,
       default: []
     },
     tags: {
       type: Array,
       default: []
     },
     viewCount: {
       type: Number,
       default: 0
     },
     user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true
     }
   },
   {
     timestamps: true
   }
)

export default mongoose.model('Pet', PetSchema)





