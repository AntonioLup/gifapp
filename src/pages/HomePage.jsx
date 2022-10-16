import { createContext, useContext, useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Search from "../components/Search";
import MoreGift from "../components/MoreGift";
import LightDarkMode from "../components/LightDarkMode";
import useLocalStorage from "use-local-storage";
import FilterOption from "../components/FilterOption";
import GoBack from "../components/GoBack";
import LogOut from "../components/LogOut";
function HomePage() {
  const [letters, setLetter] = useState("the boys");
  const [datas, setDatas] = useState();
  const [gifNumber, setgifNumber] = useState(2);
  const [theme, setTheme] = useState("");
  const [wish, setWish] = useState([]);
  const [page, setPage] = useState("gifs");

  const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=YbO9RjfSMJvrDkEH0SDiT3NKaEEUvfJG&q=${letters}&limit=${gifNumber}&offset=0&rating=r&lang=en`;

  useEffect(() => {
    fetch(GIPHY_API)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setDatas(data);
        }, 500);
      })
      .catch((err) => err);
  }, [letters, gifNumber]);

  return (
    <div className="App" data-theme={theme}>
      <LightDarkMode props={theme} setProps={setTheme} />
      <LogOut />
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>API Test</h1>
      <Search props={letters} setProps={setLetter} />
      <FilterOption setPage={setPage} setProps={setLetter} props={wish} />
      {datas ? (
        <Cards
          info={datas}
          props={wish}
          page={page}
          setPage={setPage}
          setProps={setWish}
        />
      ) : (
        <Loading />
      )}
      {page === "gifs" ? (
        <MoreGift props={gifNumber} setProps={setgifNumber} />
      ) : (
        <GoBack setPage={setPage} />
      )}
    </div>
  );
}

export default HomePage;
