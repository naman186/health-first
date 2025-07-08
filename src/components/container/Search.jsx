// SearchAndFilterPage.jsx
import React from 'react';
import FilterSidebar from '../FilterSidebar'; // Assuming filter logic separated
import DocotorsCard from '../DocotorsCard';

const SearchPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-center text-xl font-semibold mb-6">
        Find the right healthcare professional for you
      </h1>
      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search doctors, specialties, or clinics"
          className="w-full border px-4 py-2 rounded-md shadow-sm"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        <FilterSidebar />
      

        <div className="flex-1">
          <div className="mb-4 text-sm text-gray-500">
            2 doctors found
          </div>

          <div className="doctors">
            <DocotorsCard/>
          </div>
      </div>

        </div>
    </div>
  );
};

export default SearchPage;
