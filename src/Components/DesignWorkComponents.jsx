import React from 'react';

const DesignWorkComponents = () => {
  return (
    <div className="w-full py-10">
      {/* Heading Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 mb-10">
        <h1 className="text-xl md:text-3xl font-poppins font-semibold text-white">
          Designing with <span className="text-[#59ff89]">Passion</span>
        </h1>
        <p className="text-md md:text-lg font-poppins text-white mt-2 max-w-3xl">
          Crafting unique visuals with creativity and precision to bring ideas to life.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
        {[
          { title: "Sample Test 01", text: "vshhvhvsvbhvsvbshvhhsbsvs sdvbsd vsjvsdbh" },
          { title: "Sample Test 02", text: "vshhvhvsvbhvsvbshvhhsbsvs sdvbsd vsjvsdbh" },
          { title: "Sample Test 03", text: "vshhvhvsvbhvsvbshvhhsbsvs sdvbsd vsjvsdbh" },
          { title: "Sample Test 04", text: "vshhvhvsvbhvsvbshvhhsbsvs sdvbsd vsjvsdbh" },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-white p-4 text-left rounded-none"
          >
            <h2 className="text-lg font-poppins font-semibold text-white">{item.title}</h2>
            <p className="text-sm text-white mt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignWorkComponents;
