import React from "react"

const SearchBar = () => {
  return (

    <div className="bg-white shadow-md rounded-xl p-6 mb-8">
      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="text"
          placeholder="Location"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            Search
        </button>

      </div>
    </div>
  )
}

export default SearchBar