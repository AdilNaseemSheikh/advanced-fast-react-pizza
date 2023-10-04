import React from 'react';
import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.user.username);
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold uppercase md:block">
      {username}
    </div>
  );
}

export default Username;
