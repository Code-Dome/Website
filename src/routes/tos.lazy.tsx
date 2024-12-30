import { createLazyFileRoute } from '@tanstack/react-router'
import Tos from '../components/Tos'

export const Route = createLazyFileRoute('/tos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Tos />
}
