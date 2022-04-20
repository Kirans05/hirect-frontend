import React, { useEffect, useState } from "react";
import SignInPage from "./signinpage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoardPage from "./dashboardcomponents/DashBoardPage";
import { Provider } from "./context";
import BookeDetailsPage from "./dashboardcomponents/BookeDetailsPage";
import axios from "axios";
import Home from "./home";



const App = () => {


  const [bookList, setbookList] = useState([]);

  const RetrieveBooks = async () => {
    let response = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCepyldEynXGItoe_F3V1YeiDbvQIjPXAM&maxResults=40`
    );
    setbookList(response.data.items);
  };

  const SearchResult =async (data) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${data}&key=AIzaSyCepyldEynXGItoe_F3V1YeiDbvQIjPXAM&maxResults=40`
    console.log(url)
    let response = await axios(url)
    setbookList(response.data.items)
  }

  useEffect(() => {
    RetrieveBooks();
  }, []);

  return (
    <div>
      <Provider value={{bookList,SearchResult}}>
       
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard/:paramsValue" element={<DashBoardPage />} />
          <Route path="/bookDetailsPage/:id" element={<BookeDetailsPage />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;

//  api link - https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey

// apikey -AIzaSyCepyldEynXGItoe_F3V1YeiDbvQIjPXAM