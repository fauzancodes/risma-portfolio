import { PortfolioItem } from "@/app/ui/animated/project-portfolio";
import { WorkExperiences } from "@/constants";

export default function page({ params }: { params: { id: string } }) {
  const data = WorkExperiences[0].portfolio.find(item => item.title.toLowerCase().replaceAll(" ","-") === params.id)
  const index = WorkExperiences[0].portfolio.findIndex(item => item.title.toLowerCase().replaceAll(" ","-") === params.id)

  return (
    <section id="portfolio" className={`tw-bg-secondary-light tw-min-h-screen tw-flex tw-flex-col tw-justify-between tw-flex-wrap tw-pt-20`}>
      <PortfolioItem index={index} title={data?.title} subtitle={data?.subtitle} description={data?.description !== undefined ? data?.description !== null ? data?.description : [] : []} extra={data?.extra !== undefined ? data?.extra !== null ? data?.extra : [] : []} images={data?.images} />
    </section>
  )
}
