import { motion } from "framer-motion"
import { useState } from "react"
import Swal from "sweetalert2"
import Loading from "./Loading"

const ContactMe: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [subject, setSubject] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!name || !email || !text || !subject)
      return Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error",
        confirmButtonText: "OK",
      })

    setIsLoading(true)
    try {
      await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, text, subject }),
      })
      setIsLoading(false)
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent! Thank you for contacting me",
        icon: "success",
        timer: 2000,
        position: "bottom-right",
      })
      setName("")
      setEmail("")
      setText("")
      setSubject("")
    } catch (err) {
      setIsLoading(false)
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again",
        icon: "error",
      })
    }
  }

  return (
    <div id="contact-me" className="min-h-screen flex flex-col">
      {isLoading && <Loading t="Sending Mail, Please Wait..." />}
      <div className="mb-10 grid grid-cols-12 mt-14">
        <div className="col-span-1 hidden lg:block"></div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-10 col-span-12 flex flex-row justify-center lg:justify-between items-center"
        >
          <h1 className="lg:text-[86px] text-6xl text-primary-green">
            Contact Me
          </h1>
          <div className="h-[1px] mt-8 w-1/2 bg-light-green text-center hidden lg:block mx-auto"></div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12 my-5"
      >
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <p className="text-white">
            Feel free to contact me through my social media or <br />
            through the form below. I’m currently open for job offers or
            freelance projects.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-12"
      >
        <div className="col-span-1"></div>
        <form className="col-span-10">
          <div className="w-full flex my-3 lg:gap-20 flex-row">
            <div className="flex grow flex-col gap-1">
              <label className="text-white" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                className="w-full px-2 py-3 rounded-md"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col grow gap-1">
              <label className="text-white" htmlFor="email">
                Your Email Address
              </label>
              <input
                className="w-full py-3 px-2 rounded-md"
                name="mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="my-3 flex flex-col gap-1">
            <label className="text-white" htmlFor="subject">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              className="py-3 w-full rounded-md px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white" htmlFor="message">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-2 py-3 rounded-md resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={(e) => handleSubmit(e)}
              className="border-2 mt-10 text-white border-light-green py-2 px-8 rounded-md hover:border-primary-green hover:text-white hover:bg-primary-green transition-all"
            >
              Send
            </button>
          </div>
        </form>
        <div className="col-span-1"></div>
      </motion.div>
    </div>
  )
}

export default ContactMe
