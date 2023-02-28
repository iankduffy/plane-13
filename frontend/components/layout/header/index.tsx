import { PreHeader } from "./preheader";

export function Header(): JSX.Element {
  return (
    <header className="bg-brand">
      <PreHeader />
      <section className='container mx-auto'>
        <div>Mobile Search</div>
        <div>Logo</div>
        <div>Mobile Menu</div>
      </section>
    </header>
  )
}