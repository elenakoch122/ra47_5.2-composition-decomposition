import Logo from "./Logo";
import SearchForm from "./SearchForm";
import SearchNav from "./SearchNav";

// отображает блок поиска
export default function Search({ list }) {
  return (
    <div className="search"> Блок Поиск
      <Logo />
      <SearchNav />
      <SearchForm />
    </div>
  );
}