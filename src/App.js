import './App.css';
import News from './components/News';
import ArticlePreview from './components/ArticlePreview';
import Search from './components/Search';
import Ad from './components/Ad';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      <div className="news-wrapper">
        <News />
        <ArticlePreview />
      </div>
      <Search />
      <Ad />
      <Sections />
    </div>
  );
}

export default App;
