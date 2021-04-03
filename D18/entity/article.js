const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    textPreview: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [{ type: String }],
  },
  {
    timestamps: {
      createdAt,
      updatedAt,
    },
  }
);

module.exports = mongoose.model("Article", ArticleSchema);