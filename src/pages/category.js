import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import Card from "../components/card";
const Category = () => {
  const params = useParams();
  const { category } = params;
  const {
    favourites,
    addFavourites,
    fetchMeals,
    meals,
  } = useStore(
    (state) => ({
      favourites: state?.favourites,
      addFavourites: state?.addFavourites,
      fetchMeals: state?.fetchMeals,
      meals: state?.meals,
    }),
    shallow
  );
  useEffect(() => {
    fetchMeals(category);
  }, [category]);
  return (
    <div classNameName="max-w-screen-xl">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl pb-2">{category} Menu</h2>
        <p className="text-gray-700 pb-16">
          we love to cook for you, and we have variety of meal categories,
          choose one to see ready recipes for you!
        </p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {meals.category?.map((meal, index) => {
            return <Card link={false} key={index} data={meal} title={meal.strMeal} thumbnail={meal.strMealThumb} onClick={addFavourites} disabled={favourites?.filter(item => item?.idMeal === meal.idMeal)?.length ? true : false} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
