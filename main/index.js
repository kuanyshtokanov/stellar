import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCopy, faGem, faCodeBranch, faFolderOpen, faSignal, faLaptop } from '@fortawesome/free-solid-svg-icons'

import * as pages from './pages'
import getRoutes from './routes'

library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faDribbble,
  faCode,
  faCopy,
  faGem,
  faCodeBranch,
  faFolderOpen,
  faSignal,
  faLaptop
)

export { default as Layout } from './Layout'
export const routes = getRoutes(pages)
