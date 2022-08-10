import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Placeholder from "../../public/images/project_thumbnail_placeholder.png"
import { Project } from "../types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons"
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Carousel } from "flowbite-react"

interface ProjectShowcaseProps {
  isOpenFromProps: boolean
  setIsOpenFromProps: React.Dispatch<React.SetStateAction<boolean>>
  project: Project
  closeButton?: boolean
}
const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  isOpenFromProps,
  setIsOpenFromProps,
  project,
}) => {
  return (
    <Transition appear show={isOpenFromProps} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-scroll overflow-x-hidden"
        onClose={() => setIsOpenFromProps(false)}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-dark_shadow" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-screen min-h-screen py-6 text-left align-middle transition-all transform bg-semi-transparent text-white flex flex-col  gap-5">
              <div
                onClick={() => setIsOpenFromProps(false)}
                className="grid grid-cols-12"
              >
                <div className="col-span-12 ml-6 flex flex-row gap-3 items-center">
                  <FontAwesomeIcon
                    className="text-primary-green cursor-pointer"
                    size="3x"
                    icon={faArrowLeft}
                  />
                  <h2 className="text-xl font-bold cursor-pointer">Back</h2>
                </div>
                <h1 className="col-span-12 text-4xl text-center">
                  {project.title} {`(${project.year})`}
                </h1>
              </div>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:w-1/2 w-full self-center">
                <Carousel slideInterval={10000} className="">
                  {project.images.map((img, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col h-full group items-center justify-center relative bg-gray-400 dark:bg-gray-700 dark:text-white"
                      >
                        <Image
                          alt="project image"
                          className="brightness-50 group-hover:brightness-90 transition-all"
                          layout="fill"
                          src={`/images/${img.image}`}
                          placeholder="blur"
                          blurDataURL={`/images/${img.image}`}
                        />
                        <h4 className=" z-50 text-light-gray group-hover:text-white transition-all carousel-caption absolute bottom-10">
                          {img.caption}
                        </h4>
                      </div>
                    )
                  })}
                </Carousel>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-1 "></div>
                <div className="col-span-10 grid grid-cols-12 gap-10">
                  {project.info.map((info, index: number) => {
                    return (
                      <div
                        key={index}
                        className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col"
                      >
                        <h1 className="flex flex-row items-center gap-3">
                          <span className="w-[11px] h-[11px] bg-white rounded-full hover:bg-primary-green"></span>
                          <span className="text-primary-blue capitalize">
                            {info.infoTitle}
                          </span>
                        </h1>
                        <p className="ml-6 text-light-gray">{info.infoText}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              {(project.github || project.design || project.url) && (
                <div className="my-3 grid grid-cols-12">
                  <div className="col-span-1"></div>
                  <div className="col-span-10 grid grid-cols-12 gap-10">
                    <div className="col-span-12">
                      <h1 className="flex flex-row items-center gap-3">
                        <span className="w-[11px] h-[11px] bg-white rounded-full hover:bg-primary-green"></span>
                        <span className="text-primary-blue capitalize">
                          Links
                        </span>
                      </h1>
                      <div className="flex lg:flex-row flex-col justify-around">
                        <a
                          className="outline-none"
                          rel="noreferrer"
                          target={"_blank"}
                          href={project.url}
                        >
                          <button
                            disabled={!project.url}
                            className="border-2 mt-5 mx-5 relative border-white px-14 rounded-sm py-2 hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Visit
                            <FontAwesomeIcon
                              className="text-white absolute -top-3 -right-4 fa-xl"
                              icon={faLink}
                            />
                          </button>
                        </a>
                        <a
                          rel="noreferrer"
                          target={"_blank"}
                          href={project.github}
                        >
                          <button
                            disabled={!project.github}
                            className="border-2 flex flex-row gap-1 mt-5 mx-5 border-primary-green px-14 rounded-sm py-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary-green"
                          >
                            <FontAwesomeIcon
                              className="text-white fa-xl"
                              icon={faGithub}
                            />
                            Code
                          </button>
                        </a>
                        <a
                          rel="noreferrer"
                          target={"_blank"}
                          href={project.design}
                        >
                          <button
                            disabled={!project.design}
                            className="border-2 flex flex-row gap-1 mt-5 mx-5 border-primary-green px-14 rounded-sm py-2 hover:bg-primary-green disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <FontAwesomeIcon
                              className="text-white fa-xl"
                              icon={faFigma}
                            />
                            Design
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProjectShowcase
