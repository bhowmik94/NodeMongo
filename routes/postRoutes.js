const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createPost,
  getMyPosts,
  updatePost,
  deletePost
} = require("../controllers/postController");

const router = express.Router();

// All routes protected
router.post("/", protect, createPost);
router.get("/", protect, getMyPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;