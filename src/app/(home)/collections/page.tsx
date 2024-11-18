import Breadcrumbs from '@/components/Breadcrumbs';
import CategoriesSection from '@/components/home/sections/Categories';
import { categoriesData } from '@/data/content';
import ButtonLink from '@/shared/Button/ButtonLink';

const CollectionsPage = () => {
  const breadcrumbItems = [
    { title: <ButtonLink href="/">Головна</ButtonLink> },
    { title: 'Категорії' },
  ];
  return (
    <main className="pb-24">
      <div className="container mb-6">
        <Breadcrumbs Items={breadcrumbItems} />
      </div>
      <CategoriesSection title="Всі категорії" categories={categoriesData} />
    </main>
  );
};

export default CollectionsPage;
