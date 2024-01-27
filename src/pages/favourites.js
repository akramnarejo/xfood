import React from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { Link } from "react-router-dom";
const Favourites = () => {
  const { favourites, removeFavourites } = useStore(
    (state) => ({
      favourites: state?.favourites,
      removeFavourites: state?.removeFavourites,
    }),
    shallow
  );
  return (
    <div classNameName="max-w-screen-xl">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl pb-2">Favourites</h2>
        <p className="text-gray-700 pb-16">
          we love to cook for you, and we have variety of meal categories,
          choose one to see ready recipes for you!
        </p>
        {/* <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {favourites?.map((meal, index) => {
            return <Card link={false} key={index} data={meal} title={meal.strMeal} thumbnail={meal.strMealThumb} onClick={removeFavourites} disabled={favourites?.filter(item => item?.idMeal === meal.idMeal)?.length ? true : false} />;
          })}
        </div> */}
        {
          favourites.length > 0 ? (<div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            {favourites?.map((meal, index) => {
              return (
                <li key={index} class="flex py-6">
                  <div class="h-60 w-60 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      class="h-full w-full object-cover object-center aspect-[4/4]"
                    />
                  </div>

                  <div class="ml-4 mt-4 flex flex-col gap-2 items-start">
                    <h3 class="text-base font-medium text-gray-900">
                      {meal.strMeal}
                    </h3>
                    <button
                      type="button"
                      class="font-medium text-red-700 hover:text-red-500"
                      onClick={() => removeFavourites(meal)}
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>) : <p className="text-2xl">Wow, you have no food left, visit <Link className="text-blue-600" to='/menu'>Menu</Link> to get more.🍜</p>
        }
      </div>
    </div>
  );
};

export default Favourites;
