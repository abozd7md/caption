import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import mainPageData from "./quotes/Data";
import wegzData from "./quotes/rap/wegz";
import pabloData from "./quotes/rap/pablo";
import legacyData from "./quotes/rap/legacy";
import afroData from "./quotes/rap/afro";
import abuAnwar from "./quotes/rap/aboelanwar";
import yossefData from "./quotes/rap/abu";
import wezyData from "./quotes/rap/wezy";
import shahenData from "./quotes/rap/shahen";
import randomRapData from "./quotes/rap/rapData";
import streetData from "./quotes/sarsaga/sarsaga";
import ahmedKhaledData from "./quotes/literature/ahmedtawfiq";
import tahaData from "./quotes/literature/taha";
import nagebData from "./quotes/literature/nagebquotes";
import englishData from "./quotes/literature/english";

const sadData = mainPageData.filter((item) => {
  if (item.category === "sad") {
    return item.content;
  }
});
const randomData = mainPageData.filter((item) => {
  if (item.category === "random") {
    return item.content;
  }
});
const restOfData = mainPageData.filter((item) => {
  if (!item.category) {
    return item.content;
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App data={mainPageData} />,
  },
  {
    path: "/sad",
    element: <App data={sadData} />,
  },
  {
    path: "/comedy",
    element: <div>Hello world!</div>,
  },
  {
    path: "/random",
    element: <App data={randomData} />,
  },
  {
    path: "/english",
    element: <App data={englishData} />,
  },
  {
    path: "/ahmedkhaled",
    element: <App data={ahmedKhaledData} />,
  },
  {
    path: "/nagebmahfoz",
    element: <App data={nagebData} />,
  },
  {
    path: "/taha",
    element: <App data={tahaData} />,
  },
  {
    path: "/sarsaga",
    element: <App data={streetData} />,
  },
  {
    path: "/wegz",
    element: <App data={wegzData} />,
  },
  {
    path: "/pablo",
    element: <App data={pabloData} />,
  },
  {
    path: "/legacy",
    element: <App data={legacyData} />,
  },
  {
    path: "/afro",
    element: <App data={afroData} />,
  },
  {
    path: "/abuyossef",
    element: <App data={yossefData} />,
  },
  {
    path: "/shahen",
    element: <App data={shahenData} />,
  },
  {
    path: "/abuelanwar",
    element: <App data={abuAnwar} />,
  },
  {
    path: "/wezy",
    element: <App data={wezyData} />,
  },
  {
    path: "/randomrap",
    element: <App data={randomRapData} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
