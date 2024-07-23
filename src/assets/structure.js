import { ref } from 'vue'

// Import image assets for the structure components
import Goverment from '@/assets/structure/goverment.png'
import Supervisor from '@/assets/structure/supervisor.png'
import Publication from '@/assets/structure/publication.png'
import FoodReseacher from '@/assets/structure/food-researcher.png'
import LogoRefill from  '@/assets/structure/logo-refill.png'
import Talent from '@/assets/structure/talent.png'
import Guider from '@/assets/structure/guider.png'
import Leader from '@/assets/structure/leader.png'
import Secretariat from '@/assets/structure/secretariat.png'

// Create a reactive data object to hold the structure data
export const StructureData = ref([
    {
        image: Secretariat, 
        name: 'Secretariat'
    },
    {
        image: Leader,
        name: 'Leader'
    },
    {
        image: Guider,
        name: 'Guider & Invenstigator'
    },
    {
        image: Talent,
        name: 'Talent & Ambassador'
    },
    {
        image: LogoRefill,
        name: 'Logo Refill'
    },
    {
        image: FoodReseacher,
        name: 'Food Reseacher'
    },
    {
        image: Publication,
        name: 'Media & Publication'
    },
    {
        image: Supervisor,
        name: 'Supervisor'
    },
    {
        image: Goverment,
        name: 'Goverment'
    }
])
