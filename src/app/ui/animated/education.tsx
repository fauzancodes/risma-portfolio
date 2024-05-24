'use client'

import { Education, EducationExperiences, EducationImages } from "@/constants"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }}  className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-center !tw-mb-10 tw-order-1 md:tw-order-2">Education</motion.h2>
  )
}

export function Description() {
  return (
    <>
      {Education?.map((item, index) => (
          <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} key={index} className="!tw-my-5 md:tw-text-xl tw-text-justify">
            {item}
          </motion.p>
        ))}
      <motion.ol animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="tw-list-decimal">
        {EducationExperiences?.map((item, index) => (
          <li key={index} className="!tw-my-5 md:tw-text-xl tw-text-justify">
            {item}
          </li>
        ))}
      </motion.ol> 
    </>
  )
}

export function Images() {
  return (
    <>
      {EducationImages?.map((item, index) => (
        <motion.img whileInView={{ scale: [1.25, 1], opacity: 1 }} initial={{ scale: 1, opacity: 0 }} key={index} src={item} alt="Education Image" className="tw-w-full md:tw-w-11/12 tw-border tw-border-dark tw-border-solid tw-mb-5" />
      ))}
    </>
  )
}