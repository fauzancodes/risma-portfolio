import { FlexCenter, FlexCenterY } from "../ui/main/style";
import { ContactImage, ContactItems, ContactQuote, Header } from "../ui/animated/contact";

export default function page() {
  return (
    <section id="certification" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterY} tw-flex-row tw-flex-wrap`}>
      <div className={`${FlexCenter} tw-flex-col tw-w-full md:tw-w-6/12 tw-order-2 md:tw-order-1 tw-p-10`}>
        <ContactImage />
        <ContactQuote />
      </div>
      <div className={`${FlexCenter} tw-flex-col tw-gap-10 tw-w-full md:tw-w-6/12 tw-bg-primary md:tw-min-h-screen tw-p-10 tw-order-1 md:tw-order-2`}>
        <div className={`${FlexCenter} tw-relative`}>
          <Header />
          <div className="tw-h-6 md:tw-h-12 tw-w-64 md:tw-w-[30rem] tw-bg-secondary-light tw-absolute -tw-bottom-2"></div>
        </div>
        <ContactItems />
      </div>
    </section>
  )
}
