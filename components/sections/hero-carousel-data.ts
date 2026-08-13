export interface CarouselVehicle {
  name: string
  tagline: string
  slug: string
  protection: string
  engine: string
  weight: string
  blast: string
  seats: string
  color: string
  svgType: 'lc300' | 'mrap' | 'apc'
}

export const CAROUSEL_VEHICLES: CarouselVehicle[] = [
  {
    name: 'Armoured Land Cruiser 300',
    tagline: 'Flagship Executive Protection',
    slug: 'armoured-land-cruiser-300',
    protection: 'EN 1063 BR7 / VPAM VR7',
    engine: '3.5L Twin-Turbo V6 / 305 hp',
    weight: '5,200 kg',
    blast: 'ERB Level 2',
    seats: '5 + 1 Crew',
    color: '#2997ff', // Radiant Blue
    svgType: 'lc300',
  },
  {
    name: 'Mine Resistant Ambush Protected',
    tagline: 'Heavy Blast & IED Shielding',
    slug: 'mine-resistant-ambush-protected',
    protection: 'STANAG 4569 Level 3',
    engine: 'Cummins ISB / 285 hp',
    weight: '18,000 kg',
    blast: 'STANAG L3 Mine Blast',
    seats: '6 + 2 Crew',
    color: '#ff9f0a', // Amber/Orange
    svgType: 'mrap',
  },
  {
    name: 'Armoured Personnel Carrier',
    tagline: 'Tactical Infantry Mobility',
    slug: 'armoured-personnel-carrier',
    protection: 'STANAG 4569 Level 2',
    engine: 'Cummins 6BT / 190 hp',
    weight: '12,500 kg',
    blast: 'STANAG L2 Mine Blast',
    seats: '10 + 2 Crew',
    color: '#30d158', // Green
    svgType: 'apc',
  },
]
