import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"
import Head from "next/head"
import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Hero from "../components/Hero"
import MyWork from "../components/MyWork"
import NavBar from "../components/NavBar"
import SocialMediaIcons from "../components/SocialMediaIcons"
import constants from "../data/constants"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          {constants.name} | {constants.title}
        </title>
      </Head>
      <NavBar />
      <Hero />
      <About />
      <MyWork />
      <ContactMe />
      <SocialMediaIcons />
      <div className="flex text-primary-green flex-col justify-center items-center mt-4">
        <span>Created by Sahal Alzubair</span>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/mastagoon/masta-portfolio"
        >
          <FontAwesomeIcon
            className="text-light-gray cursor-pointer hover:text-white transition-all mb-1"
            size="3x"
            icon={faGithub}
          />
        </a>
      </div>
    </>
  )
}

export default Home
