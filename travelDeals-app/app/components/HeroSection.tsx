import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image src="/image1.jpg" alt="Luxury Hotel Corridor" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
            Discover Amazing Travel Deals in Sri Lanka
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the beauty of Sri Lanka with our exclusive travel packages
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg">
            Check with WhatsApp
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
        <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
      </div>
    </section>
  )
}
