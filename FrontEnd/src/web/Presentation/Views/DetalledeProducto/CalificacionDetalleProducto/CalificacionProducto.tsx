import React from 'react';
import { Rating } from '@mui/material';

interface RatingComponentProps {
  rating: number;
  reviews: number;
}

const CalificacionProducto: React.FC<RatingComponentProps> = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-2">
     
      <Rating
        value={rating}
        precision={4.2}
        readOnly
        className="text-yellow-500"
      />
     
      <span className="text-gray-700 font-medium">{rating}</span>
     
      <span className="text-gray-500">({reviews})</span>
     
      <button className="text-blue-600 underline hover:text-blue-800">
        Calificar
      </button>
    </div>
  );
};

export default CalificacionProducto;
