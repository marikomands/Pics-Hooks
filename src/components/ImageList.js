import React from "react";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const pictures = images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div className="image-list">{pictures}</div>;
};

export default ImageList;

// const pictures=images.map((image)=>{
// return <img alt={image.descriiption} key={image.id} src={image.urls.regular} />
// })
// repeating image for 3 times is not ideal
