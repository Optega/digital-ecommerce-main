import FAQsTab from '@/components/FAQsTab';

const FAQsSection = () => {
  return (
    <section>
      <div className="container pb-8 xl:pb-24">
        <div>
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <p className="mt-3 text-neutral-500 dark:text-neutral-300">
            Є питання? Перегляньте наш розділ поширених запитань, щоб отримати
            відповіді на поширені запитання..
          </p>
        </div>
        <div className=" mt-8 lg:mt-10">
          <FAQsTab />
        </div>
      </div>
    </section>
  );
};
export default FAQsSection;
