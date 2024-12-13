import { useState } from "react";
import { Button } from "@nextui-org/react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CalificarProducto = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div style={{ textAlign: "center" }} className="w-[300px] ml-auto">
      <div
        style={{ display: "flex", justifyContent: "center", gap: "5px" }}
        className="flex flex-col bg-[#fff] items-center rounded-lg border-solid border-cyan-300 border-[2px]"
      >
        <p>Califica este producto</p>
        <div>
          {[1, 2, 3, 4, 5].map((starValue) => (
            <Button
              key={starValue}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              style={{
                borderRadius: "50%",
                padding: "0",
                minWidth: "auto",
                height: "40px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {starValue <= (hoveredRating || rating) ? (
                <StarIcon style={{ color: "#FFD700" }} />
              ) : (
                <StarBorderIcon style={{ color: "#FFD700" }} />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalificarProducto;
