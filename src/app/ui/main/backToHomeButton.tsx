'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft } from "react-icons/fa6"
import { ButtonLinkPrimary } from './button'
import { usePathname } from 'next/navigation'

export default function BackToHomeButton() {
  const pathname = usePathname();

  return (
    <motion.div layout animate={{ left: `${pathname !== "/" ? 0 : '-6rem'}` }} style={{ left: '-6rem' }} className='tw-fixed tw-p-3 tw-top-0 tw-z-50'>
      <ButtonLinkPrimary link={`${pathname.includes('/project-portfolio/') ? '/project-portfolio#portfolio' : '/#list-of-content'}`} icon={<FaArrowLeft />} shape='circle' floating />
    </motion.div>
  )
}
