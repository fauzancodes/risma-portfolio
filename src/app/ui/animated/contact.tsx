'use client'

import { Contact, ContactPhoto, Quote } from "@/constants"
import { motion } from "framer-motion"
import { ButtonLinkSecondary } from "../main/button"
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa6"
import { FlexCenter } from "../main/style"

export function Header() {
  return (
    <motion.h2 animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "1rem", opacity: 0 }} className="tw-w-full tw-text-center tw-text-5xl md:tw-text-8xl tw-z-10">Contact</motion.h2>
  )
}

export function ContactItems() {
  const handleContact = (name: string) => {
    return (
      name === 'phone' ? <FaPhone /> :
      name === 'email' ? <FaEnvelope /> :
      name === 'whatsapp' ? <FaWhatsapp /> :
      name === 'instagram' ? <FaInstagram /> :
      name === 'telegram' ? <FaTelegram /> :
      name === 'linkedin' ? <FaLinkedin /> : null
    )
  }

  return (
    <motion.div animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "1rem", opacity: 0 }} className={`${FlexCenter} tw-flex-wrap tw-gap-10`}>
      {Contact?.map((item, index) => (
        item.name === 'email' ? (
          <ButtonLinkSecondary key={index} icon={handleContact(item.name)} link={item.link} shape='circle' floating extraClass="tw-h-16 md:tw-h-20 tw-w-16 md:tw-w-20 tw-text-3xl md:tw-text-5xl" />
        ) : (
          <ButtonLinkSecondary key={index} icon={handleContact(item.name)} link={item.link} shape='circle' floating outline extraClass="tw-h-16 md:tw-h-20 tw-w-16 md:tw-w-20 tw-text-3xl md:tw-text-5xl" />
        )
      ))}
    </motion.div>
  )
}

export function ContactImage() {
  return (
    <motion.img animate={{ opacity: 1 }} initial={{ opacity: 0 }} src={ContactPhoto} alt="Profile Image" className="tw-w-8/12 md:tw-w-5/12" />
  )
}

export function ContactQuote() {
  return (
    <>
      <motion.h3 animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "1rem", opacity: 0 }} className="!tw-my-5">Rismawati, S.T.</motion.h3>
      <motion.p animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "1rem", opacity: 0 }} className="tw-text-center">{Quote.description}</motion.p>
      <motion.div animate={{ translateY: 0, opacity: 1 }} initial={{ translateY: "1rem", opacity: 0 }} className={`${FlexCenter} tw-mt-1 tw-relative`}>
        <span className="tw-p-2 tw-bg-secondary-light tw-z-10">{Quote.author}</span>
        <div className="tw-bg-dark tw-h-0.5 tw-w-56 tw-absolute"></div>
      </motion.div>
    </>
  )
}