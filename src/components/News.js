import NewsNavigation from "./NewsNavigation";
import NewsList from "./NewsList";
import Rates from "./Rates";

// отображает блок новостей
export default function News() {
  return (
    <div className="news">Блок Новости
      <br />
      {'<News />'}
      <NewsNavigation />
      <NewsList />
      <Rates />
    </div>
  );
}