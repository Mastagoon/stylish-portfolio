import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import projects from "../data/projects"
import ProjectShowcase from "./ProjectShowcase"

const MyWork: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>()
  const [projectShowcaseModalState, setProjectShowcaseModalState] =
    useState(false)

  const openProjectShowcase = (index: number) => {
    setSelectedProjectIndex(index)
    setProjectShowcaseModalState(true)
  }

  return (
    <>
      <div id="my-work" className="min-h-screen grid grid-cols-12">
        <div className="mb-10 row-span-1 col-span-12 grid grid-cols-12 mt-14">
          <div className="col-span-1 hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-10 flex col-span-12 flex-row lg:justify-between justify-center items-center"
          >
            <h1 className="lg:text-[86px] text-6xl text-primary-green">
              My Work
            </h1>
            <div className="h-[1px] mt-8 w-1/2 bg-light-green text-center mx-auto hidden lg:block"></div>
          </motion.div>
        </div>
        <div className="col-span-1 lg:block hidden"></div>
        <div className="lg:col-span-10 col-span-12 justify-center align-center grid grid-cols-12">
          {projects.map((project, index: number) => {
            return (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                key={index}
                onClick={() => openProjectShowcase(index)}
                className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col px-3 group"
              >
                <Image
                  alt="Project Thumbnail"
                  className="opacity-60 group-hover:opacity-40 transition-all cursor-pointer"
                  height={200}
                  width={375}
                  blurDataURL={`/images/${project.thumbnail}`}
                  placeholder="blur"
                  src={`/images/${project.thumbnail}`}
                />
                <div className="flex flex-row gap-2 justify-center items-center my-5">
                  <span className="w-[11px] h-[11px] bg-light-green rounded-full group-hover:bg-primary-green"></span>
                  <span className="text-light-gray group-hover:text-white cursor-pointer">
                    {project.title}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      {typeof selectedProjectIndex != "undefined" && (
        <ProjectShowcase
          project={projects[selectedProjectIndex]}
          isOpenFromProps={projectShowcaseModalState}
          setIsOpenFromProps={setProjectShowcaseModalState}
        />
      )}
    </>
  )
}

export default MyWork
