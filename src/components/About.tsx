import constants from "../data/constants"
import { motion } from "framer-motion"

const About: React.FC = () => {
  return (
    <div id="about-me" className="min-h-screen grid grid-cols-12">
      <div className="row-span-1 col-span-12 grid grid-cols-12 mt-14">
        <div className="col-span-1 hidden lg:block"></div>
        <div className="lg:col-span-10 col-span-12 flex flex-row lg:justify-between justify-center mb-5 items-center">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:text-[86px] text-6xl text-center lg:text-left text-primary-green"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[1px] mt-8 w-1/2 bg-light-green text-center mx-auto hidden lg:block"
          ></motion.div>
        </div>
        <div className="col-span-1 hidden lg:block"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="row-span-2 grid grid-cols-12 col-span-12"
      >
        <div className="col-span-1 hidden lg:block"></div>

        <div className="lg:col-span-5 flex flex-col md:items-start items-center col-span-12">
          <h1 className="flex-row items-center hidden lg:flex gap-2 mb-5">
            <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green"></span>
            <span className="text-light-green">About Me</span>
          </h1>
          <p className="w-2/3 text-lighter-gray leading-loose text-xl text-center lg:text-left">
            Lorem quam quam reprehenderit odit eos Nemo ullam odit et deserunt
            libero Odio ipsum eos enim laborum porro? Quos libero ea magni
            aperiam qui. Ut aspernatur ipsa voluptatibus aperiam saepe. Beatae
            voluptatem eius necessitatibus laborum obcaecati, facere aperiam.
            Ipsum consequuntur
          </p>
        </div>
        <hr className="w-full  col-span-12 lg:hidden  my-10 bg-lighter-gray" />
        <div className="lg:col-span-5 col-span-12 flex flex-col items-center">
          <h1 className="flex flex-row items-center gap-2 mb-5">
            <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green"></span>
            <span className="text-light-green">Technologies I Use</span>
          </h1>
          <div className="flex flex-col gap-3 mx-5">
            {constants.techs.map((c: string, i: number) => (
              <div key={i} className="flex flex-row items-center gap-2">
                <span className="w-[11px] h-[11px] border-2 border-light-green rounded-full hover:bg-primary-green"></span>
                <span className="text-lighter-gray">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
