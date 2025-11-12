import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Products from "../../shopCompo/FeaturedProducts/Products";
import CategoryFilter from "../../shopCompo/CategoryFilter/CategoryFilter";
import Pagination from "../../shopCompo/Pagination/Pagination";
import Newsletter from "../../homeCompo/Newsletter/Newsletter";

import { useState } from "react";

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15; // Example

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Yahan data fetch karo based on page
    console.log(`Fetching data for page: ${page}`);
  };
  return (
    <>
      <main>
        <HeroBanner h3Text="Home Shop" h1Text="Shop" height="300px" />
        <CategoryFilter />
        <Products />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          visiblePages={5}
        />
        <Newsletter />
      </main>
    </>
  );
}
