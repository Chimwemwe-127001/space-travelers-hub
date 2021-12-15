import React from 'react';
import { useSelector } from 'react-redux';

const Profilerocket = () => {
  const dragonDetail = useSelector((state) => state.dragonReducer);
  const reservedDragon = dragonDetail.filter((dragon) => dragon.reserved === true);
  return (
    <div className="profile-rocket d-flex f-col j-center">
      <h1 className="rocket-profile-header">My Dragon</h1>
      <article className="profile-rocket-cont">
        {reservedDragon.map((dragon) => <p className="rocket-profile-name" key={dragon.id}>{dragon.name}</p>)}
      </article>
    </div>
  );
};

export default Profilerocket;
