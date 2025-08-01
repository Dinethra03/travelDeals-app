"use client"

import { useState } from "react"
import DealCard from "./DealCard"
import { deals } from "../data/deals"

export default function DealsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL DEALS")

  const categories = ["ALL DEALS", "KANDY DEALS", "COLOMBO DEALS"]

  const filteredDeals =
    activeCategory === "ALL DEALS"
      ? deals
      : deals.filter((deal) => deal.category.toUpperCase() === activeCategory.replace(" DEALS", ""))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Travel Deals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of travel experiences across Sri Lanka
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-blue-900 text-white shadow-lg transform scale-105"
                  : "bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Show message if no deals */}
        {filteredDeals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No deals found for this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
