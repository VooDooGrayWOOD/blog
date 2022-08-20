const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    author: {
      type: String,
    },
    author_id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    source: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Article", schema);
