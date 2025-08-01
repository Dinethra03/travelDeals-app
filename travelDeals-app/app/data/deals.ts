export interface Deal {
  id: number
  title: string
  description: string
  price: string
  originalPrice?: string
  image: string
  category: string
  duration: string
  rating: number
  features: string[]
}

export const deals: Deal[] = [
  {
    id: 1,
    title: "Kandy Cultural Heritage Tour",
    description:
      "Explore the cultural heart of Sri Lanka with visits to the Temple of the Tooth, Royal Botanical Gardens, and traditional Kandyan dance performances.",
    price: "$89",
    originalPrice: "$120",
    image: "/placeholder.svg?height=300&width=400&text=Kandy+Temple",
    category: "KANDY",
    duration: "Full Day",
    rating: 4.8,
    features: ["Temple Visit", "Cultural Show", "Local Guide", "Lunch Included"],
  },
  {
    id: 2,
    title: "Colombo City Discovery",
    description:
      "Discover the vibrant capital city with shopping at Pettah Market, colonial architecture tours, and modern Colombo exploration.",
    price: "$65",
    originalPrice: "$85",
    image: "/placeholder.svg?height=300&width=400&text=Colombo+City",
    category: "COLOMBO",
    duration: "Half Day",
    rating: 4.6,
    features: ["City Tour", "Shopping", "Architecture", "Local Transport"],
  },
  {
    id: 3,
    title: "Kandy Esala Perahera Festival 2026",
    description:
      "Witness the magnificent Kandy Esala Perahera with premium viewing spots, traditional ceremonies, and cultural immersion.",
    price: "$150",
    originalPrice: "$200",
    image: "/placeholder.svg?height=300&width=400&text=Perahera+Festival",
    category: "KANDY",
    duration: "2 Days",
    rating: 4.9,
    features: ["Premium Seating", "Festival Guide", "2 Days", "Accommodation"],
  },
  {
    id: 4,
    title: "Galle Fort & Southern Coast",
    description:
      "Visit the historic Dutch fort, explore colonial architecture, enjoy coastal scenery, and experience southern Sri Lankan culture.",
    price: "$95",
    originalPrice: "$130",
    image: "/placeholder.svg?height=300&width=400&text=Galle+Fort",
    category: "COLOMBO",
    duration: "Full Day",
    rating: 4.7,
    features: ["Historic Fort", "Beach Time", "Seafood Lunch", "Photography"],
  },
  {
    id: 5,
    title: "Nuwara Eliya Tea Plantation Experience",
    description:
      "Experience the scenic hill country, learn about Ceylon tea production, visit tea factories, and enjoy cool mountain climate.",
    price: "$110",
    originalPrice: "$145",
    image: "/placeholder.svg?height=300&width=400&text=Tea+Plantation",
    category: "KANDY",
    duration: "Full Day",
    rating: 4.8,
    features: ["Tea Factory", "Scenic Views", "Tea Tasting", "Hill Country"],
  },
  {
    id: 6,
    title: "Negombo Beach & Lagoon Tour",
    description:
      "Unwind at beautiful beaches near Colombo with water sports, fresh seafood, lagoon boat rides, and sunset views.",
    price: "$75",
    originalPrice: "$100",
    image: "/placeholder.svg?height=300&width=400&text=Negombo+Beach",
    category: "COLOMBO",
    duration: "Half Day",
    rating: 4.5,
    features: ["Beach Access", "Boat Ride", "Seafood", "Water Sports"],
  },
  {
    id: 7,
    title: "Sigiriya Rock Fortress Day Trip",
    description:
      "Climb the ancient Sigiriya Rock Fortress, explore the archaeological site, and learn about Sri Lankan history.",
    price: "$125",
    originalPrice: "$160",
    image: "/placeholder.svg?height=300&width=400&text=Sigiriya+Rock",
    category: "KANDY",
    duration: "Full Day",
    rating: 4.9,
    features: ["Rock Climbing", "Ancient Art", "History Tour", "Photography"],
  },
  {
    id: 8,
    title: "Colombo Food & Market Tour",
    description:
      "Taste authentic Sri Lankan cuisine, visit local markets, learn cooking techniques, and experience food culture.",
    price: "$55",
    originalPrice: "$75",
    image: "/placeholder.svg?height=300&width=400&text=Food+Tour",
    category: "COLOMBO",
    duration: "Half Day",
    rating: 4.4,
    features: ["Food Tasting", "Market Visit", "Cooking Demo", "Local Guide"],
  },
  {
    id: 9,
    title: "Pinnawala Elephant Orphanage",
    description:
      "Visit the famous elephant orphanage, watch feeding times, learn about elephant conservation, and interact with gentle giants.",
    price: "$80",
    originalPrice: "$105",
    image: "/placeholder.svg?height=300&width=400&text=Elephant+Orphanage",
    category: "KANDY",
    duration: "Half Day",
    rating: 4.7,
    features: ["Elephant Feeding", "Conservation", "Photography", "Educational"],
  },
]
