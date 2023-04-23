// import "./App.css";
import { useState, useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const { url } = useSelector((state) => state.home);
  // console.log(url);
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromAPI("/movie/popular").then((res) => {
      console.log(res);

      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      Hello World !!!
      {url?.total_pages}
    </div>
  );
}

export default App;
