import React from 'react';

import BenefitsSection from '@/components/home/sections/Benefits';
import BestSellersSection from '@/components/home/sections/BestSellers';
import FAQsSection from '@/components/home/sections/FAQs';
import HeaderSection from '@/components/home/sections/Header';
import PopluarCategoriesSection from '@/components/home/sections/PopluarCategories';
import RecommendedSection from '@/components/home/sections/Recommend';
import StylesSection from '@/components/home/sections/StylesSection';

const page = () => {
  return (
    <main>
      <HeaderSection />
      <BestSellersSection />
      {/* <GuideSection /> */}
      <StylesSection />
      <BenefitsSection />
      {/* <NewArrivals2 /> */}
      <RecommendedSection />
      {/* <NewArrivals /> */}
      <PopluarCategoriesSection />
      {/* <SponsorsSection /> */}
      {/* <LatestBlogPostsSection /> */}
      <FAQsSection />
    </main>
  );
};

export default page;
