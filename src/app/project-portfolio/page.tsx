import { Description, Header, PortfolioHeader, PortfolioItems, PortfolioLists } from "../ui/animated/project-portfolio";
import { FlexCenter, FlexCenterY } from "../ui/main/style";

export default function page() {
  return (
    <>
      <section id="work" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<Header />
				</div>
				<Description />
      </section>
			<section id="portfolio" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenter} tw-flex-wrap tw-pt-20 tw-relative tw-overflow-hidden tw-gap-10`}>
				<div className="tw-w-full md:tw-w-5/12 tw-mx-5">
					<PortfolioHeader />
				</div>
				<div className={`tw-w-full md:tw-w-6/12 ${FlexCenterY} tw-justify-start tw-flex-wrap tw-gap-12 tw-bg-primary md:tw-bg-transparent tw-py-10 md:tw-py-0`}>
					<div className="tw-hidden md:tw-block tw-absolute tw-bg-primary tw-w-6/12 tw-h-full tw-rotate-[60deg]"></div>
					<PortfolioLists />
				</div>
			</section>
			{/* <section id="portfolio" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<PortfolioHeader />
				</div>
				<PortfolioItems />
      </section> */}
    </>
  )
}
