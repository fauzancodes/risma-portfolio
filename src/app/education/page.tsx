import { FlexCenterY } from "../ui/main/style";
import { Description, Header, Images } from "../ui/animated/education";

export default function page() {
  return (
    <section id="education" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
      <div className={`${FlexCenterY} md:tw-justify-center tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-m-5 md:tw-m-0 tw-p-5 md:tw-px-0 tw-order-2 md:tw-order-1`}>
        <Images />
      </div>
      <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%] tw-h-fit md:tw-sticky md:tw-top-0`}>
        <Header />
        <Description />
      </div>
    </section>
  )
}
