import Image from "next/image"

interface Deal {
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

interface DealCardProps {
  deal: Deal
}

export default function DealCard({ deal }: DealCardProps) {
  const discountPercentage = deal.originalPrice
    ? Math.round(
        ((Number.parseFloat(deal.originalPrice.replace("$", "")) - Number.parseFloat(deal.price.replace("$", ""))) /
          Number.parseFloat(deal.originalPrice.replace("$", ""))) *
          100,
      )
    : 0

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={deal.image || "/placeholder.svg"}
          alt={deal.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
          ⭐ {deal.rating}
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discountPercentage}%
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {deal.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{deal.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{deal.description}</p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {deal.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center text-blue-600 text-sm mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Duration: {deal.duration}
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-900">{deal.price}</span>
            {deal.originalPrice && <span className="text-gray-500 line-through text-lg">{deal.originalPrice}</span>}
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
