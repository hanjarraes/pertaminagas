import React, { useEffect, useState } from "react";
import Hero from "component/container/Hero";
import Header from "../../component/container/Header";
import Seccsion from "component/container/Seccsion";
import People from "component/container/People";
import ImageDesc from "component/container/ImageDesc";
import Prosess from "component/container/Prosess";
import Questions from "component/container/Questions";
import More from "component/container/More";
import Footer from "component/container/Footer";
import { dataSeccsion } from "./service";

const Landing = () => {
  const [usp, setUsp] = useState(dataSeccsion);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_API_URL}/residential-usp?populate=%2A`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CMS_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((d) =>
        setUsp({
          title: d.data.attributes.title ?? '',
          desc: d.data.attributes.desc ?? '',
          itemSeccsion: dataSeccsion.itemSeccsion.map((item, index) => {
            return {
              logo: item.logo,
              decs: d.data.attributes?.sections[index].desc ?? '',
              title: d.data.attributes?.sections[index].title ?? '',
            };
          }),
        })
      );
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Seccsion dataSeccsion={usp} id={"KelebihanGasBumi"} />
      <People />
      <ImageDesc />
      <Prosess />
      <Questions />
      <More />
      <Footer />
    </div>
  );
};

export default Landing;
