import { Contact, ContactPhoto, Quote } from "@/constants";
import { FlexCenter, FlexCenterY } from "../ui/main/style";
import { ButtonLinkSecondary } from "../ui/main/button";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa6";

export default function page() {
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
    <section id="certification" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterY} tw-flex-row tw-flex-wrap`}>
      <div className={`${FlexCenter} tw-flex-col tw-w-full md:tw-w-6/12 tw-order-2 md:tw-order-1 tw-p-10`}>
        <img src={ContactPhoto} alt="Profile Image" className="tw-w-8/12 md:tw-w-5/12" />
        <h3 className="!tw-my-5">Rismawati, S.T.</h3>
        <p className="tw-text-center">{Quote.description}</p>
        <div className={`${FlexCenter} tw-mt-1 tw-relative`}>
          <span className="tw-p-2 tw-bg-secondary-light tw-z-10">{Quote.author}</span>
          <div className="tw-bg-dark tw-h-0.5 tw-w-56 tw-absolute"></div>
        </div>
      </div>
      <div className={`${FlexCenter} tw-flex-col tw-gap-10 tw-w-full md:tw-w-6/12 tw-bg-primary md:tw-min-h-screen tw-p-10 tw-order-1 md:tw-order-2`}>
        <div className={`${FlexCenter} tw-relative`}>
          <h2 className="tw-w-full tw-text-center tw-text-5xl md:tw-text-8xl tw-z-10">Contact</h2>
          <div className="tw-h-6 md:tw-h-12 tw-w-64 md:tw-w-[30rem] tw-bg-secondary-light tw-absolute -tw-bottom-2"></div>
        </div>
        <div className={`${FlexCenter} tw-flex-wrap tw-gap-10`}>
          {Contact?.map((item, index) => (
            item.name === 'email' ? (
              <ButtonLinkSecondary key={index} icon={handleContact(item.name)} link={item.link} shape='circle' floating extraClass="tw-h-16 md:tw-h-20 tw-w-16 md:tw-w-20 tw-text-3xl md:tw-text-5xl" />
            ) : (
              <ButtonLinkSecondary key={index} icon={handleContact(item.name)} link={item.link} shape='circle' floating outline extraClass="tw-h-16 md:tw-h-20 tw-w-16 md:tw-w-20 tw-text-3xl md:tw-text-5xl" />
            )
          ))}
        </div>
      </div>
    </section>
  )
}
