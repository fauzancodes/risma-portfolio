import { ButtonLinkPrimary } from "./button"

const CvButton = () => {
  return (
    <div className='tw-fixed tw-bottom-5 tw-left-5 tw-z-50'>
      <ButtonLinkPrimary link='/CV - Rismawati.pdf' floating text='Download CV' download />
    </div>
  )
}

export default CvButton