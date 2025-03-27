/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { 
    faBackward,
    faPlay,
    faPause, 
    faForward, 
    faHeart, 
    faVolumeLow, 
    faShuffle,
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faBackward, 
    faPlay, 
    faPause, 
    faForward, 
    faHeart, 
    faVolumeLow, 
    faShuffle,
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight
)

export default FontAwesomeIcon