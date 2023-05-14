import { useEffect } from "react";
import { useParams } from "react-router";
import GeneralComponent from "../General/GeneralComponent";
import ProductList from "./ProductList";
import { brandNames } from "../data/brandData";
import Marquee from "react-fast-marquee";
import "./brands.css";

function Brands() {
  const eyewear = useParams();

  useEffect(() => {
    if (eyewear?.brand) {
      let selectedBrand = document.querySelector(`#brand-${eyewear.brand}`);
      selectedBrand.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [eyewear?.brand]);

  return (
    <>
      <GeneralComponent>
        <div className="brands container">
          <h1>Eyewear Brands</h1>
          <p>
            Smart Eyes Optical, has a wide range of branded products. The top
            ranged brands are displayed below. You can choose your favorite
            brand from our store.
          </p>
          <div className="brand-marquee">
            <Marquee>
              {brandNames.map((brand, index) => {
                return (
                  <img
                    loading="lazy"
                    key={index}
                    src={brand.brandLogo}
                    alt="Brand Logo"
                    height={60}
                  />
                );
              })}
            </Marquee>
          </div>
          <ProductList displayBrandLogo={true} />
        </div>
      </GeneralComponent>
    </>
  );
}

export default Brands;
