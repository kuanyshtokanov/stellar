import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'

import * as pages from './pages'
import getRoutes from './routes'

library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faDribbble
)

export { default as Layout } from './Layout'
export const routes = getRoutes(pages)
