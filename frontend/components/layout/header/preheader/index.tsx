import { ScrollSnap } from "~/components/shared/scroll-snap"

// Todo: Get dumby api for this stuff
const links = [
  {
    label: 'Plane13', 
    link: '/'
  },
  {
    label: 'Plane13 Holidays', 
    link: '/'
  },
]

export function PreHeader (): JSX.Element {
  return (
    <section className='py-1 bg-slate-400'>
      <div className='container mx-auto flex justify-between px-2'>
        <ScrollSnap customClasses="gap-5">
          {links.map((link, key) => {
            return (
              <div key={key}>{link.label}</div>
            )
          })}
        </ScrollSnap>
        <div>Country Flag</div>
      </div>

    </section>
  )
}