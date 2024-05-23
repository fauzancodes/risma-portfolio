import { Certification } from "@/constants";
import { FlexCenterY } from "../ui/main/style";

export default function page() {
  return (
    <section id="certification" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterY} tw-flex-row tw-justify-around tw-flex-wrap tw-p-10 tw-gap-5 tw-relative`}>
      <h2 className="tw-font-black tw-text-4xl md:tw-text-8xl !tw-mb-10 tw-w-full tw-z-10">Certification</h2>
      {Certification?.map((item, index) => (
        <div key={index} className="tw-w-full md:tw-w-5/12 tw-z-10">
          <img src={item.image} alt={item.title} className="tw-w-full tw-border tw-border-solid tw-border-dark" />
          <div className="tw-font-semibold tw-text-xl">{item.title}</div>
        </div>
      ))}
      <div className="tw-w-full tw-h-[30rem] tw-bg-primary tw-absolute tw-top-0"></div>
    </section>
  )
}
