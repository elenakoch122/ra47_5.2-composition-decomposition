import './App.css';
import Ad from './components/Ad';
import ArticlePreview from './components/ArticlePreview';
import News from './components/News';
// import NewsList from './components/NewsList';
// import NewsNavigation from './components/NewsNavigation';
// import Rates from './components/Rates';
import Search from './components/Search';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      <div className="news-wrapper">
        <News />
        {/* <section className="news"> Блок Новостей
          <div className="news__nav-wrapper">
            <NewsNavigation />
            <span className="news__date">23.03.2023</span>
          </div>
          <NewsList />
          <Rates />
        </section> */}
        <ArticlePreview />
      </div>
      <Search />
      {/* <section className="search"></section> */}
      <Ad />
      {/* <aside className="ad"></aside> */}
      <Sections />
      {/* <div className="sections"></div> */}
    </div>
  );
}

export default App;
