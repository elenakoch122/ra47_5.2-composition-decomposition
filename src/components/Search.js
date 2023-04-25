import Logo from "./Logo";
import SearchNav from "./SearchNav";
import SearchForm from "./SearchForm";

// отображает блок поиска
export default function Search() {
  return (
    <div className="search"> Блок Поиск
      <Logo />
      <SearchNav />
      <SearchForm />
    </div>
  );
}