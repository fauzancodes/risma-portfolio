import { Description, Header, PortfolioHeader, PortfolioItems } from "../ui/animated/project-portfolio";

export default function page() {
  return (
    <>
      <section id="work" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<Header />
				</div>
				<Description />
      </section>
			<section id="portfolio" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<PortfolioHeader />
				</div>
				<PortfolioItems />
      </section>
    </>
  )
}
