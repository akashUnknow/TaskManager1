const express = require("express");
const { adminOnly, protect } = require("../Middlerware/authMiddleware");
const {
  getUser,
  getUserById,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

//user managermnet router
router.get("/", protect, adminOnly, getUser);
router.get("/:id", protect, getUserById);
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;
