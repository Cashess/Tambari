import { useState } from "react";
import Image from "next/image";

const GarmentCard = ({ imageURL, dressCodeImg, onChangeDressCode }:any) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (dressCodeImg !== imageURL.dressCode) {
      onChangeDressCode(imageURL.dressCode);
    }
    setIsActive(true);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        isActive ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imageURL.thumbnail}
          alt="Dress collection"
          width={127}
          height={103.34}
          className="object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};

export default GarmentCard;