const express = require("express");
const session = require("express-session");
const uri = require("./MongoUtils/mongo_pass.js");
const multer = require("multer");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
let rfs = require("rotating-file-stream");
const path = require("path");
const errorMiddleware = require("./Error/error.js");
const { redirectLogged } = require("./Routers/sessionHandlers.js");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Mongoose Connected !!!"))
  .catch((err) => {
    console.log("FAILED TO CONNECT !!!");
    console.log(err);
  });

const App = express();

let csrfProtection = csrf({ cookie: true });
csrfProtection = (req, res, next) => {
  next();
};

module.exports.csrfProtection = csrfProtection;
App.use(bodyparser.urlencoded({ extended: false }));  // ===============================================================================

App.use(
  session({
    secret: "keyy that will sign cookie",
    resave: false,
    saveUninitialized: false,
    name: "sessionID",
    cookie: {
      expires: 60000 * 10, // 10 Minutes
    },
  })
);
App.use(cookieParser());                              // ===============================================================================

// App.use((req, res, next) => {
//   req.session.userID = "";
//   req.session.customer = false;
//   req.session.seller = false;
//   req.session.admin = false;
//   next();
// })
App.use(cors());                                     // ===============================================================================

let accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

App.use(morgan("combined", { stream: accessLogStream })); // ===============================================================================

App.listen(8080, () => {
  console.log("\nListening to \nhttp://localhost:8080/");
});

// App.use(express.urlencoded({ extended: false }));

App.use(errorMiddleware);                               // ===============================================================================

// =================================================================================

const route = require("./admin/taskroute.js");          // ===============================================================================
const sellerRoute = require("./seller/sellerTaskroute.js");
const csurf = require("csurf");
App.use(bodyparser.json());
App.use("/api", route);
App.use("/api/seller", sellerRoute);

// =================================================================================

App.use("/api/customer", require("./Routers/routeCustomer"));
App.use(
  "/api/customerview/data",
  require("./Routers/Customer/customerViewData.js")
);

// =================================================================================

App.get("/", (req, res) => {
  res.json({
    status: "OK",
    code: 200,
    message: "Welcome To New API Server",
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({                           // ===============================================================================
  storage: storage,
});

App.post("/xtraDetails", upload.single("ProfileImage"), (req, res) => {
  console.log("hi consumer");
  console.log(`File Name : ${req.file.filename}`);
  console.log(req.file);
  // res.send({
  //   status: "ok",
  //   uploaded: true
  // });
  res.send(`<div>
    <h1 class="m-5">Data Sent</h1>
    <a href="http://localhost:5173/sellerview">Goto SellerView</a>
    </div>`
  )
});
// const storage2 = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads2')
//     },
//     filename: function (req, file, cb) {
//       cb(null,   +`${Date.now()}-${file.originalname}`)
//     }
//   });
//   // App.use(express.urlencoded({extended:false}))
//   const upload2= multer({
//     storage2: storage2});
// App.post('/xtraDetails2', upload2.single("ProfileImage2"),(req, res)=>{
//     console.log("hi seller")
//     console.log(req.file ,req.body);
//     res.send("Hi seller")
// })


App.get("/getcsrf", redirectLogged, csrfProtection, (req, res) => {
  res.send({
    status: "OK",
    token: "Ha Ha ha", // req.csrfToken(),
  });
});
