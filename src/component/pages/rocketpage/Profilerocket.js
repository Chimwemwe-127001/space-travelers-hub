import React from 'react';
import { useSelector } from 'react-redux';

const Profilerocket = () => {
  const allRockets = useSelector((state) => state.rocket);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="profile-rocket d-flex f-col j-center">
      <h1 className="rocket-profile-header">My Rockets</h1>
      <article className="profile-rocket-cont">
        {reservedRockets.map((rocket) => <p className="rocket-profile-name" key={rocket.id}>{rocket.rocketName}</p>)}
      </article>
    </div>
  );
};

export default Profilerocket;
