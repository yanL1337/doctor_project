import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
const server = express();
import "dotenv/config";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

server.use(express.json());
server.use(cors());

server.post("/sendMail", async (req, res) => {
  console.log(req.body);
  await transport.sendMail({
    from: '"Appointment informer 👻" <info@Dochub.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "Info", // Subject line
    text: `Hallo ${req.body.name}, deine Terminanfrage wurde leider abgelehnt`, // plain text body
  });
  res.end();
});

server.listen(process.env.PORT, () => console.log("rennt"));
