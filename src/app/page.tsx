import { FlexCenter, FlexCenterX } from "./ui/main/style";

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
			<section id="list-of-content" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-items-center tw-flex-row tw-justify-between tw-flex-wrap tw-relative`}>
				<h2 className="tw-text-5xl md:tw-text-8xl tw-font-black tw-w-full md:tw-w-6/12 !tw-pl-20 !tw-pt-20 !tw-pb-5">List Of Contents</h2>
				<div className={`${FlexCenterX} tw-flex-col tw-bg-primary tw-w-full md:tw-w-6/12 tw-text-2xl tw-font-bold md:tw-text-4xl md:tw-min-h-screen tw-px-10 tw-pb-20 md:tw-pb-0`}>
					<a href="#cover" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">01 Cover</a>
					<a href="#list-of-content" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">02 List Of Contents</a>
					<a href="/about-me" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">03 About Me</a>
					<a href="/education" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">04 Education</a>
					<a href="/certification" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">05 Certification</a>
					<a href="/project-portfolio" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">06 Project Portfolio</a>
					<a href="/contact" className="!tw-my-5 tw-no-underline tw-text-dark hover:tw-text-accent">07 Contact</a>
				</div>
				<div className="tw-absolute tw-font-bold tw-text-xl tw-bottom-10 tw-right-10 md:tw-bottom-16 md:tw-right-16">{new Date().getFullYear()}</div>
        <div className={`${FlexCenter} tw-border-t tw-border-r-0 tw-border-l tw-border-b-0 tw-border-dark tw-border-solid tw-w-16 tw-h-16 md:tw-w-44 md:tw-h-44 tw-absolute tw-left-5 tw-top-5`}>
          <div className="tw-border-t tw-border-r-0 tw-border-l tw-border-b-0 tw-border-dark tw-border-solid tw-w-10 tw-h-10 md:tw-w-36 md:tw-h-36"></div>
        </div>
        <div className={`${FlexCenter} tw-border-t-0 tw-border-r tw-border-l-0 tw-border-b tw-border-dark tw-border-solid tw-w-16 tw-h-16 md:tw-w-44 md:tw-h-44 tw-absolute tw-right-5 tw-bottom-5`}>
          <div className="tw-border-t-0 tw-border-r tw-border-l-0 tw-border-b tw-border-dark tw-border-solid tw-w-10 tw-h-10 md:tw-w-36 md:tw-h-36"></div>
        </div>
			</section>
    </>
  );
}
