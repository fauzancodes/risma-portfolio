import { About, ProfilePhoto } from "@/constants";
import { FlexCenter } from "../ui/main/style";
import { allura } from "../ui/main/fonts";

export default function page() {
  return (
    <section id="about-me" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
      <div className={`${FlexCenter} tw-w-full md:tw-w-[45%] tw-min-h-[30rem] md:tw-min-h-screen tw-my-5 md:tw-my-0`}>
        <div className={`${FlexCenter} tw-w-full tw-h-full md:tw-h-screen tw-border-t tw-border-l tw-border-r-0 tw-border-b-0 tw-border-dark tw-border-solid tw-m-5 md:tw-mr-0 tw-p-5`}>
          <div className={`${FlexCenter} tw-border tw-border-dark tw-border-solid tw-h-full tw-w-full tw-relative`}>
            <img src={ProfilePhoto} alt="Profile Image" className="tw-w-full tw-absolute tw-bottom-0" />
          </div>
        </div>
      </div>
      <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%]`}>
        <h2 className={`${allura.className} tw-text-6xl md:tw-text-9xl`}>Introducing</h2>
        <h2 className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-right !tw-mb-10">About Me</h2>
        {About?.map((item, index) => (
          <p key={index} className="!tw-my-5 md:tw-text-xl">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
