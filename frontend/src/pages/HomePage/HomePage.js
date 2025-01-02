import React from "react";
import Banner from "../../components/Banner/Banner";
import CategoryList from "../../components/CategoryList/CategoryList";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <div>
      
      <Banner/>
      <CategoryList/>
      <FeaturedProducts/>
      
    </div>
    </div>
  );
};

export default HomePage;

