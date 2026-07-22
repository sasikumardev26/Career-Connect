import React from 'react'

const FeaturedCategories = () => {
  return (
    
      <div className="max-w-7xl mx-auto px-10 py-16">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="text-5xl">💻</div>
          <h3 className="text-xl font-semibold mt-3">IT</h3>
          <p className="text-gray-500">120 Jobs</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="text-5xl">🎨</div>
          <h3 className="text-xl font-semibold mt-3">Design</h3>
          <p className="text-gray-500">45 Jobs</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="text-5xl">📈</div>
          <h3 className="text-xl font-semibold mt-3">Marketing</h3>
          <p className="text-gray-500">80 Jobs</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl ">
          <div className="text-5xl">💰</div>
          <h3 className="text-xl font-semibold mt-3">Finance</h3>
          <p className="text-gray-500">60 Jobs</p>
        </div>

      </div>

    </div>
    
  )
}

export default FeaturedCategories
