const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://all:souf123@startercluster-shard-00-00.wzywb.mongodb.net:27017,startercluster-shard-00-01.wzywb.mongodb.net:27017,startercluster-shard-00-02.wzywb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-xtqmoy-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
