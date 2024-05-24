import { FlexCenterY } from "../ui/main/style";
import { Header, Images } from "../ui/animated/certification";

export default function page() {
  return (
    <section id="certification" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterY} tw-flex-row tw-justify-around tw-flex-wrap tw-p-10 tw-gap-5 tw-relative`}>
      <Header />
      <Images />
      <div className="tw-w-full tw-h-[30rem] tw-bg-primary tw-absolute tw-top-0"></div>
    </section>
  )
}
