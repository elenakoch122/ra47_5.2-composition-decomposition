import NewsItem from "./NewsItem";

// показывает список новостей
export default function NewsList({ list }) {
  return (
    <ul className="news-list">{'<NewsList />'}
      <li className="news-item"><NewsItem /></li>
      <li className="news-item"><NewsItem /></li>
      <li className="news-item"><NewsItem /></li>
      <li className="news-item"><NewsItem /></li>
    </ul>
  );
}