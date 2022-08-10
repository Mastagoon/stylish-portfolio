import nodemailer from "nodemailer"
import constants from "../data/constants"

// async..await is not allowed in global scope, must use a wrapper
let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const sendMail = async (subject: string, text: string): Promise<0 | 1> => {
  try {
    const mail = await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: constants.mail,
      subject,
      text,
    })
    return 1
  } catch (err) {
    return 0
  }
}

export default sendMail
