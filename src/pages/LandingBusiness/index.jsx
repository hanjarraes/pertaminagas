import React, { useEffect, useState } from "react";
import Hero from "component/container/Hero";
import Header from "../../component/container/Header";
import Seccsion from "component/container/Seccsion";
import LogoClient from "component/container/LogoClient";
import Footer from "component/container/Footer";
import CalculatorContent from "component/container/CalculatorContent";
import NaturalGas from "component/container/NaturalGas";
import Provide from "component/container/Provide";
import { dataSeccsion } from "./service";

export default function LandingBusiness() {
  const [usp, setUsp] = useState(dataSeccsion);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_API_URL}/corporate-usp?populate=%2A`, {
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
      <Header business />
      <Hero business />
      <LogoClient />
      <CalculatorContent id="CalculateSavings" />
      <Seccsion dataSeccsion={usp} business  id="NaturalGasBenefits"/>
      <NaturalGas />
      <Provide />
      <Footer business />
    </div>
  );
}
