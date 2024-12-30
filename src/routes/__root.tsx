import { Outlet, createRootRoute } from '@tanstack/react-router'
import Preloader from '../components/Preloader'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <div>
        <Preloader />
        <div>
        <Outlet />
        </div>
      </div>
  )
}
