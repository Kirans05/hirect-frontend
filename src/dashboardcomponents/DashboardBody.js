import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./bookItem";
import { user } from "../context";

const DashboardBody = () => {
  const contextValues = useContext(user);
  
  return (
    <div>
      {contextValues.bookList.length ? (
        <div className="totalBookDisplay">
          {contextValues.bookList.map((item, index) => {
            return <BookItem key={index} item={item} />;
          })}
        </div>
      ) : (
        <h1 style={{textAlign:"center"}}>No Data To Display</h1>
      )}
    </div>
  );
};

export default DashboardBody;
