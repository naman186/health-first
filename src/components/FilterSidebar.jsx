
import { useState } from 'react';

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4 border-b pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-semibold text-gray-800 hover:text-blue-600"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? '−' : '+'}</span>
      </button>

      {open && <div className="mt-2 pl-2 text-sm text-gray-700 space-y-2">{children}</div>}
    </div>
  );
}

function Filters({title, children}){
    const [open, setOpen] = useState(true);

    return (
    <div className="mb-4 border-b pb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center font-semibold text-gray-800 hover:text-blue-600"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? '−' : '+'}</span>
      </button>

      {open && <div className="mt-2 pl-2 text-sm text-gray-700 space-y-2">{children}</div>}
    </div>
    );
}

function FilterSidebar() {

    return(

    <Filters title="Filters">
    
    <div>
  
    <aside className="w-full md:w-64 p-4 border rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      <FilterSection title="Specialization">
        <label><input type="checkbox" className="mr-2" /> Cardiology</label>
        <label><input type="checkbox" className="mr-2" /> Dermatology</label>
        <label><input type="checkbox" className="mr-2" /> Neurology</label>
        <label><input type="checkbox" className="mr-2" /> Pediatrics</label>
        <label><input type="checkbox" className="mr-2" /> Orthopedics</label>
      </FilterSection>

      <FilterSection title="Distance">
        <select className="w-full border rounded p-1 text-sm">
          <option>Within 5 miles</option>
          <option>Within 10 miles</option>
          <option>Within 20 miles</option>
        </select>
      </FilterSection>

      <FilterSection title="Rating">
        <label><input type="checkbox" className="mr-2" /> 4+ stars</label>
        <label><input type="checkbox" className="mr-2" /> 3+ stars</label>
        <label><input type="checkbox" className="mr-2" /> Any rating</label>
      </FilterSection>

      <FilterSection title="Availability">
        <label><input type="checkbox" className="mr-2" /> Available today</label>
        <label><input type="checkbox" className="mr-2" /> This week</label>
        <label><input type="checkbox" className="mr-2" /> Virtual appointments</label>
      </FilterSection>

      <FilterSection title="Fee Range">
        <select className="w-full border rounded p-1 text-sm">
          <option>Under ₹500</option>
          <option>₹500 - ₹1000</option>
          <option>Above ₹1000</option>
        </select>
      </FilterSection>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all">
        Apply Filters
      </button>
    </aside>

    </div>
    </Filters>
  );
}

export default FilterSidebar;
