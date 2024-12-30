import { createLazyFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/work/Work'
import Team from '../components/team/Team'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
    </>)
}
