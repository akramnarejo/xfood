import React from "react";
import Image from "./image";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { data, title, description, thumbnail, onClick, disabled, link } = props;
  return (
    <div class="group bg-gray-50">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {link ? <><Link to={`/category/${title}`} className="hover:cursor-pointer">
        <Image src={thumbnail} alt={title} />
        </Link></> : <Image src={thumbnail} alt={title} />}
      </div>
      <div class="flex justify-between mt-2 mx-2">
        <h3 class="text-lg font-medium text-gray-700">{link ? <Link to={`/category/${title}`} className="hover:cursor-pointer">{title}</Link> : title}</h3>
      </div>
      <p className={`${link ? 'block' : 'hidden'} text-sm text-gray-700 mx-2 mb-2 text-start h-16 overflow-hidden`}>{description}</p>
      {
        onClick ? (<button className={`border border-blue-800 p-2 text-sm rounded-lg float-start mx-2 ${disabled ? 'border-gray-850 hover:cursor-not-allowed bg-gray-200' : 'hover:border-gray-900'}`} onClick={() => onClick(data)} disabled={disabled}>{disabled ? 'Added' : 'Add To Favourites'}</button>) : null
      }
    </div>
  );
};

export default Card;
