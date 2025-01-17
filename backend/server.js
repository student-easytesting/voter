require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routers/auth-router");
const serviceRoute = require("./routers/service-router");
const errorMiddleware = require("./middlewares/error-middleware");
const connectDb = require("./utils/db");

const corsOptions = {
  // origin: "http://localhost:5173",
  origin: (origin, callback) => {
    // Check if the origin is allowed
    const allowedOrigins = [
      "http://localhost:5175",
      "http://localhost:5174",
      "http://localhost:5173",
      "https://aadhar.votingdapp.online",
      "https://voter.votingdapp.online",
      "https://voting.votingdapp.online",
    ];
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed ? origin : false);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
// app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
// app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 8001;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
