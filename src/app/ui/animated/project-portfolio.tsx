'use client'

import { motion } from "framer-motion"
import { allura } from "../main/fonts"
import { WorkExperiences, WorkPortfolio } from "@/constants"
import { FlexCenterX, FlexCenterY } from "../main/style"

export function Header() {
  return (
    <>
      <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className={`${allura.className} tw-text-6xl md:tw-text-9xl md:tw-w-fit tw-text-center md:tw-text-left`}>Work</motion.h2>
      <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "2rem", opacity: 0 }} className="tw-font-black tw-text-5xl md:tw-text-8xl md:tw-w-fit md:!tw-ml-40 tw-text-center md:tw-text-left">Experience</motion.h2>
    </>
  )
}

export function Description() {
  return(
    <>
      {WorkExperiences?.map((item, index) => (
        <div key={index} className={`tw-w-full ${FlexCenterX} tw-items-start tw-flex-wrap`}>
          <div className="tw-w-full md:tw-w-[55%] md:tw-sticky md:tw-top-0">
            <motion.h3 whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className="tw-text-3xl md:tw-text-4xl !tw-p-5 md:!tw-p-10 !tw-py-5">{index + 1}. {item.title} ({item.duration})</motion.h3>
            <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-py-5 !tw-pt-0">{item.description}</motion.p>
            {item?.jobdesks.length > 0 ? (
              <motion.div whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className="tw-bg-primary tw-py-5 !tw-px-5 md:tw-px-10">
                <p className="md:tw-text-xl">Jobdesk:</p>
                <ol className="tw-list-decimal">
                  {item?.jobdesks.map((item, index) => (
                    <li className="md:tw-text-xl" key={index}>{item}</li>
                  ))}
                </ol>
              </motion.div>
            ) : null}
          </div>
          <div className={`${FlexCenterY} md:tw-justify-center tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-m-5 md:tw-m-0 tw-p-5 md:tw-p-0`}>
            {item.images?.map((item, index) => (
              <motion.img whileInView={{ scale: [1.25, 1], opacity: 1 }} initial={{ scale: 1, opacity: 0 }} key={index} src={item} alt="Work Image" className="tw-w-full md:tw-w-11/12 tw-border tw-border-dark tw-border-solid tw-mb-5" />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export function PortfolioHeader() {
  return (
    <>
      <motion.h2 whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className={`${allura.className} tw-text-6xl md:tw-text-9xl md:tw-w-fit tw-text-center md:tw-text-left`}>Jobdesk</motion.h2>
      <motion.h2 whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "2rem", opacity: 0 }} className="tw-font-black tw-text-5xl md:tw-text-8xl md:tw-w-fit md:!tw-ml-40 tw-text-center md:tw-text-left">Portfolio</motion.h2>
    </>
  )
}

export function PortfolioItems() {
  return (
    <>
      {WorkPortfolio?.map((item, index) => (
        <div key={index} className={`tw-w-full ${FlexCenterX} tw-items-start tw-flex-wrap`}>
          <div className="tw-w-full md:tw-w-[55%] md:tw-sticky md:tw-top-0">
            <motion.h3 whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className="tw-text-3xl md:tw-text-5xl !tw-px-5 md:!tw-px-10 !tw-pt-10">{index + 1}. {item.title}</motion.h3>
            <motion.h4 whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className="tw-text-2xl md:tw-text-4xl !tw-px-5 md:!tw-px-10 !tw-pt-0 !tw-pb-10">({item.subtitle})</motion.h4>
            {item.extra.length > 0 ? (
              <>
                <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item.description[0]}</motion.p>
                <ol className="tw-list-decimal tw-list-outside !tw-px-10 md:!tw-px-16">
                  {item.extra?.map((item, index) => (
                    <motion.li whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} key={index} className="md:tw-text-xl">{item}</motion.li>
                  ))}
                </ol>
                {item.description?.map((item, index) => index > 0 && (
                  <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item}</motion.p>
                ))}
              </>
            ) : (
              <>
                {item.description?.map((item, index) => (
                  <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item}</motion.p>
                ))}
              </>
            )}
          </div>
          <div className={`${FlexCenterY} md:tw-justify-center md:tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-overflow-x-scroll md:tw-overflow-x-hidden tw-p-5 tw-bg-primary tw-gap-5 md:tw-gap-0`}>
            {item.images?.map((item, index) => (
              <motion.div whileInView={{ scale: [1.25, 1], opacity: 1 }} initial={{ scale: 1, opacity: 0 }} key={index} className={`${FlexCenterY} tw-flex-col tw-w-full`}>
                <img src={item.image} alt="Portfolio Image" className="tw-w-80 md:tw-w-full tw-border tw-border-dark tw-border-solid" />
                <h4 className="!tw-mt-1 !tw-mb-5">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}