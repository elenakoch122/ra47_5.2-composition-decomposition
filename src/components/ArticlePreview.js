// отображает ссылку на статью
export default function ArticlePreview({ title, text, children }) {
  return (
    <a className="article" href="/"> Блок Статья
      <br />
      {'<ArticlePreview />'}
    </a>
  );
}