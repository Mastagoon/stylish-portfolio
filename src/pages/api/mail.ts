import { NextApiRequest, NextApiResponse } from "next"
import sendMail from "../../server/sendMail"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return
  const { email, text, subject, name } = req.body
  const result = await sendMail(subject, name + "\n" + email + "\n" + text)
  return result == 1
    ? res.status(200).json({ message: "success" })
    : res.status(500).json({ message: "error" })
}

export default handler
