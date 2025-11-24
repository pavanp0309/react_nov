import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const VALID = ['basic', 'premium', 'advanced'];

const Card = (props) => {
  const {
    id,
    title,
    features,
    rating,
    description,
    accuracy,
    category,
    type: explicitType, // optional override
  } = props;

  const location = useLocation();

  // Resolve category: explicit prop > pathname segment > default 'basic'
  const pathParts = location.pathname.split('/').filter(Boolean); // ['feature','premium',...]
  const inferred = pathParts[0] === 'feature' && VALID.includes(pathParts[1]) ? pathParts[1] : null;
  const resolvedType = explicitType || inferred || 'basic';

  const to = `/feature/${resolvedType}/${id}`;

  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card border border-primary rounded p-3">
          <h4 className='card-title fs-3'>{title}</h4>
          <p className='card-text fs-5'>{rating}⭐</p>
          <p className='card-text fs-6 text-secondary text-capitalize'>{features}</p>
          <button className='btn btn-outline-success fw-bold text-capitalize'>Try now</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
