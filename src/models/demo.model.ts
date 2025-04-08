import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const DemoModel = mongoose.model("Demo", demoSchema);

export default DemoModel;
