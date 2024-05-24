'use client'

import { motion } from 'framer-motion'
import { FlexCenterY } from '../main/style'
import { FaArrowRight } from 'react-icons/fa6'

export function Ball() {
  return (
    <motion.div animate={{ scale: [2, 1], opacity: 1 }} whileHover={{ scale: 1.5 }} initial={{ opacity: 0 }} className="tw-bg-primary tw-w-full md:tw-w-80 tw-h-80 md:tw-rounded-full tw-absolute tw-left-0 md:tw-left-40"></motion.div>
  )
}

export function Header() {
  return (
    <motion.h3 animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "-10rem", opacity: 0 }} className="tw-font-medium md:tw-text-3xl tw-absolute tw-top-5 tw-right-5 md:tw-top-10 md:tw-right-10 tw-z-10">Project Administrator Portfolio</motion.h3>
  )
}

export function Author() {
  return (
    <motion.h4 animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="tw-font-normal md:tw-text-3xl tw-absolute tw-bottom-5 tw-left-5 md:tw-bottom-36 md:-tw-left-10 md:-tw-rotate-90 tw-z-10">By. <strong>Rismawati</strong></motion.h4>
  )
}

type ListOfContentsProps = {
  index: number;
  link?: string;
  text?: string;
}
export function ListOfContentsComponent({index, link, text}: ListOfContentsProps) {
  return (
    <motion.a whileInView={{ translateX: 0, opacity: 1 }} initial={{ translateX: "10rem", opacity: 0 }} whileHover={{ translateX: "1rem" }} key={index} href={link} className={`${FlexCenterY} !tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent tw-gap-3`}>0{index + 1} {text} <FaArrowRight /></motion.a>
  )
}
