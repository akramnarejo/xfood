import React from "react";

const Image = (props) => {
  console.log(props);
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center group-hover:opacity-75 aspect-[4/4]"
    />
  );
};

export default Image;
