import { WorkExperiences, WorkPortfolio } from "@/constants";
import { FlexCenterX, FlexCenterY } from "../ui/main/style";

export default function page() {
  return (
    <>
      <section id="work" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<h2 className="tw-font-semibold tw-italic tw-text-5xl md:tw-text-8xl md:tw-w-fit tw-text-center md:tw-text-left">Work</h2>
					<h2 className="tw-font-black tw-text-5xl md:tw-text-8xl md:tw-w-fit md:!tw-ml-40 tw-text-center md:tw-text-left">Experience</h2>
				</div>
				{WorkExperiences?.map((item, index) => (
					<div key={index} className={`tw-w-full ${FlexCenterX} tw-items-start tw-flex-wrap`}>
						<div className="tw-w-full md:tw-w-[55%] md:tw-sticky md:tw-top-0">
							<h3 className="tw-text-3xl md:tw-text-4xl !tw-p-5 md:!tw-p-10 !tw-py-5">{index + 1}. {item.title} ({item.duration})</h3>
							<p className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-py-5 !tw-pt-0">{item.description}</p>
							{item?.jobdesks.length > 0 ? (
								<div className="tw-bg-primary tw-py-5 !tw-px-5 md:tw-px-10">
									<p className="md:tw-text-xl">Jobdesk:</p>
									<ol className="tw-list-decimal">
										{item?.jobdesks.map((item, index) => (
											<li className="md:tw-text-xl" key={index}>{item}</li>
										))}
									</ol>
								</div>
							) : null}
						</div>
						<div className={`${FlexCenterY} md:tw-justify-center tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-m-5 md:tw-m-0 tw-p-5 md:tw-p-0`}>
							{item.images?.map((item, index) => (
          			<img key={index} src={item} alt="Work Image" className="tw-w-full md:tw-w-11/12 tw-border tw-border-dark tw-border-solid tw-mb-5" />
							))}
						</div>
					</div>
				))}
      </section>
			<section id="portfolio" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
				<div className="tw-mb-12 tw-mx-5">
					<h2 className="tw-font-semibold tw-italic tw-text-5xl md:tw-text-8xl md:tw-w-fit tw-text-center md:tw-text-left">Jobdesk</h2>
					<h2 className="tw-font-black tw-text-5xl md:tw-text-8xl md:tw-w-fit md:!tw-ml-40 tw-text-center md:tw-text-left">Portfolio</h2>
				</div>
				{WorkPortfolio?.map((item, index) => (
					<div key={index} className={`tw-w-full ${FlexCenterX} tw-items-start tw-flex-wrap`}>
						<div className="tw-w-full md:tw-w-[55%] md:tw-sticky md:tw-top-0">
							<h3 className="tw-text-3xl md:tw-text-5xl !tw-px-5 md:!tw-px-10 !tw-pt-10">{index + 1}. {item.title}</h3>
							<h4 className="tw-text-2xl md:tw-text-4xl !tw-px-5 md:!tw-px-10 !tw-pt-0 !tw-pb-10">({item.subtitle})</h4>
							{item.extra.length > 0 ? (
								<>
									<p key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item.description[0]}</p>
									<ol className="tw-list-decimal tw-list-outside !tw-px-10 md:!tw-px-16">
										{item.extra?.map((item, index) => (
											<li key={index} className="md:tw-text-xl">{item}</li>
										))}
									</ol>
									{item.description?.map((item, index) => index > 0 && (
										<p key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item}</p>
									))}
								</>
							) : (
								<>
									{item.description?.map((item, index) => (
										<p key={index} className="md:tw-text-xl !tw-px-5 md:!tw-px-10 !tw-mb-5">{item}</p>
									))}
								</>
							)}
						</div>
						<div className={`${FlexCenterY} md:tw-justify-center md:tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-overflow-x-scroll md:tw-overflow-x-hidden tw-p-5 tw-bg-primary tw-gap-5 md:tw-gap-0`}>
							{item.images?.map((item, index) => (
								<div key={index} className={`${FlexCenterY} tw-flex-col tw-w-full`}>
									<img src={item.image} alt="Portfolio Image" className="tw-w-80 md:tw-w-full tw-border tw-border-dark tw-border-solid" />
									<h4 className="!tw-mt-1 !tw-mb-5">{item.title}</h4>
								</div>
							))}
						</div>
					</div>
				))}
      </section>
    </>
  )
}
