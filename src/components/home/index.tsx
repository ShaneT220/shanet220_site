import React from "react";
import "../../assets/css/main.css"
import Header from "../layout/Header";
import SectionOne from "../layout/SectionOne";
import SectioTwo from "../layout/SectionTwo";
import SectioThree from "../layout/SectionThree";
import SectionFour from "../layout/SectionFour";


export default function HomePage() {
  return (
    <body className="is-preload">
      <Header/>
      <div id="wrapper">
        <div id="main">
          <SectionOne/>
          <SectioTwo/>
          <SectioThree/>
          {/* <SectionFour/> */}
        </div>
      </div>
    </body>
  )
}