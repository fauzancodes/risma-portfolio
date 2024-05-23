import { FlexCenter, FlexCenterX } from "./ui/main/style";

export default function Home() {
  return (
    <header  className={`tw-bg-secondary-light tw-min-h-screen ${FlexCenterX} tw-flex-col tw-flex-wrap tw-gap-5 md:tw-gap-3 tw-p-6 md:tw-px-16`}>
      <div className={`${FlexCenterX} tw-flex-col tw-flex-wrap tw-gap-5 md:tw-gap-3 md:tw-ml-40`}>
        <h1 className={`tw-text-7xl md:tw-text-9xl tw-font-black tw-z-10`}><span className="tw-text-transparent" style={{ WebkitTextStroke: ".3rem #0d0d0d" }}>Port</span>folio.</h1>
        <h2 className="tw-font-semibold md:tw-text-4xl tw-z-10">Project Report, Leadership, Teamwork, Communication</h2>
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
  );
}
