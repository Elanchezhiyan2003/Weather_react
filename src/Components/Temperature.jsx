import React from 'react';

function Temperature({ setCity, stats }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };


  const handleClick = () => {
    setDisplayValue(handleCityChange); // Display the inputValue when button is clicked
  };

  return (
    <>
      <div className="flex justify-between">
        <input
          type="text"
          // ref={inputRef} 
          // value={input}
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:border-slate-400"
          placeholder="Enter Your City"
          onChange={handleCityChange}
          // value={stats.location} // Controlled component
        />
        <div className="m-4" onClick={setCity}>
          <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 scale-110 hover:scale-100 transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
      </div>

          <div >
            <img className='w-25 h-20 mt-10 ml-14 object-contain  text-yellow-400 scale-110 hover:scale-100 transition-transform duration-300 ease-in-out' src={stats.icon} alt="" />
          </div>

      <div className="flex justify-center items-center text-slate-200 mt-10 scale-110 hover:scale-100 transition-transform duration-300 ease-in-out">
        <p className="font-semibold text-[55px]">{stats.temp}&deg;c</p>
      </div>

      <div className="flex justify-center items-center text-slate-300 mt-8 text-[25px] scale-110 hover:scale-100 transition-transform duration-300 ease-in-out">
        {stats.condition}
      </div>

      <div className="flex justify-center text-slate-400 mt-5 text-[15px]">
        Today . {stats.time} | {stats.location}
      </div>
    </>
  );
}

export default Temperature;
