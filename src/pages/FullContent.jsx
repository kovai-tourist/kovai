import React from "react";
import { useLocation } from "react-router-dom";
import DisplayContainer from "../components/DisplayContainer";

const FullContent = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="h-[500px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[500px] transition  duration-700 hover:scale-110"
        />
      </div>
      <div className="container mx-20 text-justify ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          Last update on {date}
        </p>
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className="indent-12 leading-7 text-lg text-gray-800 mx-10 my-10 ">{description}</p>
      </div>

      {/* All Blogs Section */}
      <DisplayContainer />
    </div>
  );
};

export default FullContent;