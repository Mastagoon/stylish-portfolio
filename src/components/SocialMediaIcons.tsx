import {
  faFacebookMessenger,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Line from "../../public/icons/line.svg"
import Line2 from "../../public/icons/line2.svg"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import constants from "../data/constants"

const SocialMediaIcons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5000 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden md:fixed bottom-0 right-10 flex flex-col"
    >
      {constants.social_media.github && (
        <>
          <a
            className="flex flex-col"
            rel="noreferrer"
            target={"_blank"}
            href={constants.social_media.github}
          >
            <FontAwesomeIcon
              className="text-light-gray cursor-pointer hover:text-white transition-all mb-1"
              size="3x"
              icon={faGithub}
            />
            <Image alt="Seperator Line" src={Line} />
          </a>
        </>
      )}

      {constants.social_media.linkedin && (
        <>
          <a
            href={constants.social_media.linkedin}
            className="flex flex-col"
            rel="noreferrer"
            target={"_blank"}
          >
            <FontAwesomeIcon
              className="text-light-gray cursor-pointer hover:text-white transition-all"
              size="3x"
              icon={faLinkedin}
            />
            <Image alt="seperator line" src={Line} />
          </a>
        </>
      )}

      {constants.social_media.messenger && (
        <>
          <a
            href={constants.social_media.messenger}
            className="flex flex-col"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-light-gray cursor-pointer hover:text-white transition-all"
              size="3x"
              icon={faFacebookMessenger}
            />
            <Image alt="seperator line" src={Line2} />
          </a>
        </>
      )}
    </motion.div>
  )
}

export default SocialMediaIcons
