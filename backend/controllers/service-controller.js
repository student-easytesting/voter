const User = require("../models/user-model");

// *-------------------------------
//* getAllUsers Logic 📝
// *-------------------------------
const getUser = async (req, res) => {
  try {
    const { voter } = req.body;

    const userExist = await User.findOne({ voter });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Voter No " });
    }

    return res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = getUser;
