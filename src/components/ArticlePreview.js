export default function ArticlePreview({ title, text, children }) {
  return (
    // <a className="article" href="/">Ссылка на статью</a>
    <div className="article"> Блок Статья
      <br />
      {'<ArticlePreview />'}
    </div>
  );
}