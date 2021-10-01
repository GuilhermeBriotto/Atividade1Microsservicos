const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.get = async () => {
  const result = await User.find();
  return result;
};

exports.create = async (data) => {
  let user = User(data);
  await user.save();
};

exports.getById = async (id) => {
  const result = await User.findById(id);
  return result;
};

exports.udpate = async (id, data) => {
  await User.findByIdAndUpdate(id, {
    $set: {
      name: data.name,
      address: data.address,
      age: data.age,
    },
  });
};

exports.delete = async (id) => {
  await User.findByIdAndDelete(id);
};

