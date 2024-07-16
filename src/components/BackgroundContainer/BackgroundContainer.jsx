// BackgroundContainer.jsx
import React from "react";

const BackgroundContainer = ({ children, bgImage, titleImage }) => {
  return (
    <div
      className="bg-cover bg-center min-h-screen h-screen overflow-y-auto"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="relative">
        {titleImage && (
          <div
            id="title-farewell"
            className="absolute top-20 left-20 w-128 max-w-md max-sm:top-5 max-sm:left-5 max-sm:w-36"
          >
            <img
              src={titleImage}
              alt="Title"
              className="w-full h-auto"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default BackgroundContainer;
