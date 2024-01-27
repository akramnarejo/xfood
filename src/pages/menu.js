import React, { useEffect } from "react";
import Card from "../components/card";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
const Menu = () => {
  const { categories, fetchCategories } = useStore(
    (state) => ({
      categories: state?.categories,
      fetchCategories: state?.fetchCategories,
    }),
    shallow
  );

  console.log("categories: ", categories);
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div classNameName="max-w-screen-xl">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl pb-2">Menu</h2>
        <p className="text-gray-700 pb-16">
          we love to cook for you, and we have variety of meal categories, choose one to see ready recipes for you!
        </p>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories?.map((category, index) => {
            return (
              <Card
                link={true}
                key={index}
                data={category}
                title={category.strCategory}
                description={category.strCategoryDescription}
                thumbnail={category.strCategoryThumb}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
