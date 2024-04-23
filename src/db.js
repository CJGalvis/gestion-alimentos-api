import mongoose from "mongoose";

const main = async () => {
  return mongoose.connect(process.env.URI_DB);
};

export default main;
