const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')

const adminSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
     password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// // will encrypt password everytime its saved
// adminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const Admin = mongoose.model("Admin", adminSchema);

module.exports=Admin;