import { ButtonLinkPrimary } from "./button"

const CvButton = () => {
  return (
    <div className='tw-fixed tw-bottom-5 tw-left-5 tw-z-50'>
      <ButtonLinkPrimary link='/CV_Rismawati.pdf' floating text='Curriculum Vitae - Rismawati' download />
    </div>
  )
}

export default CvButton