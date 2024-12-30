import { createLazyFileRoute } from '@tanstack/react-router'
import PrivacyPolicy from '../components/PrivacyPolicy'

export const Route = createLazyFileRoute('/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPolicy />
}
