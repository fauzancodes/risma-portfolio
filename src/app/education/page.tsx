import { Education, EducationExperiences, EducationImages } from "@/constants";
import { FlexCenterY } from "../ui/main/style";

export default function page() {
  return (
    <section id="education" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
      <div className={`${FlexCenterY} md:tw-justify-center tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-m-5 md:tw-m-0 tw-p-5 md:tw-px-0 tw-order-2 md:tw-order-1`}>
        {EducationImages?.map((item, index) => (
          <img key={index} src={item} alt="Education Image" className="tw-w-full md:tw-w-11/12 tw-border tw-border-dark tw-border-solid tw-mb-5" />
        ))}
      </div>
      <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%] tw-h-fit md:tw-sticky md:tw-top-0`}>
        <h2 className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-center !tw-mb-10 tw-order-1 md:tw-order-2">Education</h2>
        {Education?.map((item, index) => (
          <p key={index} className="!tw-my-5 md:tw-text-xl">
            {item}
          </p>
        ))}
        <ol className="tw-list-decimal">
          {EducationExperiences?.map((item, index) => (
            <li key={index} className="!tw-my-5 md:tw-text-xl">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
