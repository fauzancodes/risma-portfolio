'use client'

import { About, ProfilePhoto } from "@/constants"
import { FlexCenter } from "../main/style"
import { motion } from 'framer-motion'
import { allura } from "../main/fonts"

export function ProfileImage() {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className={`${FlexCenter} tw-border tw-border-dark tw-border-solid tw-h-full tw-w-full tw-relative`}>
      <img src={ProfilePhoto} alt="Profile Image" className="tw-w-full tw-absolute tw-bottom-0" />
    </motion.div>
  )
}

export function Header() {
  return (
    <>
      <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "-2rem", opacity: 0 }} className={`${allura.className} tw-text-6xl md:tw-text-9xl`}>Introducing</motion.h2>
      <motion.h2 animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: "2rem", opacity: 0 }} className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-right !tw-mb-10">About Me</motion.h2>
    </>
  )
}

export function Description() {
  return (
    <>
      {About?.map((item, index) => (
        <motion.p key={index} animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="!tw-my-5 md:tw-text-xl tw-text-justify">
          {item}
        </motion.p>
      ))}
    </>
  )
}