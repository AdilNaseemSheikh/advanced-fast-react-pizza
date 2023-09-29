import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" placeholder: w-28 rounded-full bg-yellow-100
        px-4 py-2 text-sm text-stone-400 transition-all duration-300
        sm:focus:w-72 focus:outline-none sm:w-64 focus:ring-2 focus:ring-yellow-100 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
