import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const UserSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    address: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Item', // Assuming 'Item' is the model for your items
      default: []
    }
  },
  {
    timestamps: true,
  }
);
// static signup method
UserSchema.statics.signup = async function(name, email,address, password) {

  // validation
  if (!name||!email ||!address || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email,address, password: hash })

  return user
}

// static login method
UserSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

// instance method to update password
UserSchema.methods.updatePassword = async function(oldPassword, newPassword,confirmNewPassword) {
  const match = await bcrypt.compare(oldPassword, this.password);
  if (!match) {
    throw Error('Incorrect old password');
  }
  if(newPassword !== confirmNewPassword){
    throw Error('Passwords do not match');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  this.password = hash;
  await this.save();

  return this;
};


export const User = mongoose.model("User", UserSchema);