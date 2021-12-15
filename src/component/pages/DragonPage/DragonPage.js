import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon, cancelReserve } from '../../../redux/dragon/dragon';
import './dragon.css';

const DragonPage = () => {
  DragonPage.propTypes = {
    dragonDetail: PropTypes.oneOfType([PropTypes.array]).isRequired,
  };
  const dragonDetail = useSelector((state) => state.dragonReducer);
  const dispatch = useDispatch();
  const reserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const cancel = (id) => {
    dispatch(cancelReserve(id));
  };

  return (
    <div>
      {dragonDetail.map((dragonDetail) => (
        <div key={dragonDetail.id} className="dragonPage">
          <div className="dragon"><img src={dragonDetail.flickr_images} alt="dragon" /></div>
          <div className="dragonContent">
            <h3>{dragonDetail.name}</h3>
            <p>
              {dragonDetail.reserved && <span className="dragonBadge">Reserved</span> }
              <span>{dragonDetail.description}</span>
            </p>
            {!dragonDetail.reserved && (<button className="reserve-btn" onClick={() => reserve(dragonDetail.id)} type="button">reserve dragon</button>)}
            {dragonDetail.reserved && (<button className="cancel-btn" onClick={() => cancel(dragonDetail.id)} type="button">cancel reservation</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DragonPage;
