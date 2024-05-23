'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { ButtonLinkPrimary } from '@/app/ui/main/button'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) setIsVisible(true)
    else setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <motion.div layout animate={{ right: `${isVisible ? 0 : '-6rem'}` }} style={{ right: '-6rem' }}className='tw-fixed tw-p-3 tw-bottom-5 tw-z-50'>
      <ButtonLinkPrimary link='#' icon={<FaArrowUp />} shape='circle' floating />
    </motion.div>
  )
}

export default ScrollToTopButton