import { createLazyFileRoute } from '@tanstack/react-router'
import Cookies from '../components/Cookies'

export const Route = createLazyFileRoute('/cookies')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Cookies />
}
