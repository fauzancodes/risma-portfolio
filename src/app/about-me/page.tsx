import { FlexCenter } from "../ui/main/style";
import { Description, Header, ProfileImage } from "../ui/animated/about-me";

export default function page() {
  return (
    <section id="about-me" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
      <div className={`${FlexCenter} tw-w-full md:tw-w-[45%] tw-min-h-[30rem] md:tw-min-h-screen tw-my-5 md:tw-my-0`}>
        <div className={`${FlexCenter} tw-w-full tw-h-full md:tw-h-screen tw-border-t tw-border-l tw-border-r-0 tw-border-b-0 tw-border-dark tw-border-solid tw-m-5 md:tw-mr-0 tw-p-5`}>
          <ProfileImage />
        </div>
      </div>
      <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%] tw-overflow-x-hidden`}>
        <Header />
        <Description />
      </div>
    </section>
  )
}
