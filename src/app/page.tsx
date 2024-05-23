import { About, Education, EducationExperiences, EducationImages, ProfilePhoto, WorkExperiences, WorkPortfolio } from "@/constants";
import { FlexCenter, FlexCenterX, FlexCenterY } from "./ui/main/style";

export default function Home() {
  return (
    <>
      <header id="cover" className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterX} tw-flex-col tw-flex-wrap tw-gap-5 md:tw-gap-3`}>
        <div className={`${FlexCenterX} tw-flex-col tw-flex-wrap tw-gap-5 md:tw-gap-3 md:tw-ml-72`}>
          <h1 className={`tw-text-7xl md:tw-text-9xl tw-font-black tw-z-10 tw-text-center md:tw-text-left`}><span className="tw-text-transparent" style={{ WebkitTextStroke: ".3rem #0d0d0d" }}>Port</span>folio.</h1>
          <h2 className="tw-font-semibold md:tw-text-4xl tw-z-10 tw-italic tw-text-center md:tw-text-left">Project Report, Leadership, Teamwork, Communication</h2>
          <div className="tw-bg-primary tw-w-full md:tw-w-80 tw-h-80 md:tw-rounded-full tw-absolute tw-left-0 md:tw-left-40"></div>
        </div>
        <h3 className="tw-font-medium md:tw-text-3xl tw-absolute tw-top-5 tw-right-5 md:tw-top-10 md:tw-right-10 tw-z-10">Project Administrator Portfolio</h3>
        <h4 className="tw-font-normal md:tw-text-3xl tw-absolute tw-bottom-5 tw-left-5 md:tw-bottom-36 md:-tw-left-10 md:-tw-rotate-90 tw-z-10">By. <strong>Rismawati</strong></h4>
        <div className={`${FlexCenter} tw-border-t tw-border-r-0 tw-border-l tw-border-b-0 tw-border-dark tw-border-solid tw-w-16 tw-h-16 md:tw-w-44 md:tw-h-44 tw-absolute tw-left-5 tw-top-5`}>
          <div className="tw-border-t tw-border-r-0 tw-border-l tw-border-b-0 tw-border-dark tw-border-solid tw-w-10 tw-h-10 md:tw-w-36 md:tw-h-36"></div>
        </div>
        <div className={`${FlexCenter} tw-border-t-0 tw-border-r tw-border-l-0 tw-border-b tw-border-dark tw-border-solid tw-w-16 tw-h-16 md:tw-w-44 md:tw-h-44 tw-absolute tw-right-5 tw-bottom-5`}>
          <div className="tw-border-t-0 tw-border-r tw-border-l-0 tw-border-b tw-border-dark tw-border-solid tw-w-10 tw-h-10 md:tw-w-36 md:tw-h-36"></div>
        </div>
      </header>
      <section id="about-me" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
        <div className={`${FlexCenter} tw-w-full md:tw-w-[45%] tw-min-h-[30rem] md:tw-min-h-screen`}>
          <div className={`${FlexCenter} tw-w-full tw-h-full md:tw-h-screen tw-border-t tw-border-l tw-border-r-0 tw-border-b-0 tw-border-dark tw-border-solid tw-m-5 md:tw-mr-0 tw-p-5`}>
            <div className={`${FlexCenter} tw-border tw-border-dark tw-border-solid tw-h-full tw-w-full tw-relative`}>
              <img src={ProfilePhoto} alt="Profile Image" className="tw-w-full tw-absolute tw-bottom-0" />
            </div>
          </div>
        </div>
        <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%]`}>
          <h2 className="tw-font-semibold tw-italic tw-text-5xl md:tw-text-8xl">Introducing</h2>
          <h2 className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-right !tw-mb-10">About Me</h2>
          {About?.map((item, index) => (
            <p key={index} className="!tw-my-5 md:tw-text-xl">
              {item}
            </p>
          ))}
        </div>
      </section>
      <section id="education" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-row tw-justify-between tw-flex-wrap`}>
        <div className={`${FlexCenterY} md:tw-justify-center md:tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-overflow-x-scroll md:tw-overflow-x-hidden tw-m-5 md:tw-m-0 tw-p-5 md:tw-p-0 tw-border tw-border-dark tw-border-solid md:tw-border-0 md:tw-border-dark md:tw-border-solid`}>
					{EducationImages?.map((item, index) => (
						<img key={index} src={item} alt="Education Image" className="tw-w-full md:tw-w-11/12 md:tw-border md:tw-border-dark md:tw-border-solid tw-mb-5" />
					))}
        </div>
        <div className={`tw-bg-primary tw-px-10 tw-py-12 md:tw-w-[55%] tw-h-fit md:tw-sticky md:tw-top-0`}>
          <h2 className="tw-font-black tw-text-5xl md:tw-text-8xl tw-text-center !tw-mb-10">Education</h2>
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
						<div className={`${FlexCenterY} md:tw-justify-center md:tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-gap-5 md-tw-gap-0 tw-overflow-x-scroll md:tw-overflow-x-hidden tw-m-5 md:tw-m-0 tw-p-5 md:tw-p-0 tw-border tw-border-dark tw-border-solid md:tw-border-0 md:tw-border-dark md:tw-border-solid`}>
							{item.images?.map((item, index) => (
          			<img key={index} src={item} alt="Work Image" className="tw-w-full md:tw-w-11/12 md:tw-border md:tw-border-dark md:tw-border-solid tw-mb-5" />
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
						<div className={`${FlexCenterY} md:tw-justify-center md:tw-flex-col tw-w-full md:tw-w-[45%] md:tw-min-h-screen tw-overflow-x-scroll md:tw-overflow-x-hidden tw-p-5 tw-border tw-border-dark tw-border-solid md:tw-border-0 md:tw-border-dark md:tw-border-solid tw-bg-primary tw-gap-5 md:tw-gap-0`}>
							{item.images?.map((item, index) => (
								<div key={index} className={`${FlexCenterY} tw-flex-col tw-w-full`}>
									<img src={item.image} alt="Portfolio Image" className="tw-w-80 md:tw-w-full md:tw-border md:tw-border-dark md:tw-border-solid" />
									<h4 className="!tw-mt-1 !tw-mb-5">{item.title}</h4>
								</div>
							))}
						</div>
					</div>
				))}
      </section>
    </>
  );
}
