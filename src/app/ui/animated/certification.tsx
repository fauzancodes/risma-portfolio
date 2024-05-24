'use client'

import { Certification } from "@/constants"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className="tw-font-black tw-text-4xl md:tw-text-8xl !tw-mb-10 tw-w-full tw-z-10 tw-text-center md:tw-text-left">Certification</motion.h2>
  )
}

export function Images() {
  return (
    <>
      {Certification?.map((item, index) => (
        <motion.div whileInView={{ scale: [1.25, 1], opacity: 1 }} initial={{ scale: 1, opacity: 0 }} key={index} className="tw-w-full md:tw-w-5/12 tw-z-10">
          <img src={item.image} alt={item.title} className="tw-w-full tw-border tw-border-solid tw-border-dark" />
          <div className="tw-font-semibold tw-text-xl">{item.title}</div>
        </motion.div>
      ))}
    </>
  )
}