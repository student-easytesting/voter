const axios = require("axios");
const User = require("../models/user-model");
const API = process.env.API;
const API_2 = process.env.API_2;
// *-------------------
// Home Logic
// *-------------------

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to voter Website using router ");
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, aadhar, dob, phone, email, city } = req.body;

    const response = await axios.post(`${API}/data/service`, {
      aadhar: aadhar,
    });

    const data = response.data;
    if (name != data.name || dob != data.dob) {
      res.status(500).json("internal server error");
    }

    const aadharExist = await User.findOne({ aadhar });
    if (aadharExist) {
      return res.status(500).json("internal server error");
    }

    let voter = 0;
    let userExist;
    do {
      let random = Math.floor(Math.random() * 100000000);
      let randomNo = random.toString().padEnd(8, "0");
      voter = "RMR" + randomNo;
      userExist = await User.findOne({ voter: voter });
    } while (userExist);
    const userCreated = await User.create({
      name,
      aadhar,
      dob,
      phone,
      email,
      city,
      voter,
    });

    res.status(201).json({
      msg: "registration successful",
      voter: userCreated.voter.toString(),
    });
    const votingresponse = await axios.post(`${API_2}/data/store`, userCreated);
    // console.log(votingresponse.data);
  } catch (error) {
    // res.status(500).json("internal server error");
    console.log(error);
  }
};

module.exports = { home, register };
