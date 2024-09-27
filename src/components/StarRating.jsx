"use client"; // クライアントコンポーネントとしてマーク
import { useState } from "react";

const StarRating = ({ level }) => {
  const [rating, setRating] = useState(level);

  return (
    <div className="ml-2">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            className={
              starIndex <= rating
                ? "text-yellow-500 cursor-default"
                : "text-gray-300 cursor-default"
            }
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
