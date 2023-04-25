import NewsList from "./NewsList";
import NewsNavigation from "./NewsNavigation";
import Rates from "./Rates";

export default function News({ list }) {
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