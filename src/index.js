/* Bundle */
import components from'./components/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGear,
    faHouse,
    faArrowUpRightFromSquare,
    faCloud
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
    faGear,
    faHouse,
    faArrowUpRightFromSquare,
    faCloud
)

/* Bundle */
const RoboUi = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }

        /* add font awesome icon component */
        Vue.component('font-awesome-icon', FontAwesomeIcon)
    }
}

export { RoboUi }

/* Individual components */
export { default as RoboButton } from './components/RoboButton.vue'
export { default as RoboLoader } from './components/RoboLoader.vue'
export { default as RoboLogo } from './components/RoboLogo.vue'
export { default as RoboBreadcrumbs } from './components/RoboBreadcrumbs.vue'
export { default as RoboSidebar } from './components/RoboSidebar.vue'
export { default as RoboSidebarItem } from './components/RoboSidebarItem.vue'

/* Other */
// import './styles/index.css'