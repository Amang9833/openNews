import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// https:inshorts.deta.dev/news?category={category_name}
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <Link to="/all" className="link">
            open<span className="bold">News</span>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="search" >
          <div className="warpper">
            <input type="text" className="searchBtn" placeholder="search..." />
            <SearchOutlinedIcon className="btn" />
          </div>
        </div>
        <div className="categories">
          <ul className="items">
            <li className="item">
              <Link className="link" to="/all">General </Link>
            </li>
            <li className="item">
              <Link className="link" to="/national"> National</Link>
            </li>
            <li className="item">
              <Link className="link" to="/business">Business </Link>
            </li>
            <li className="item">
              <Link className="link" to="/sports"> Sports</Link>
            </li>
            <li className="item">
              <Link className="link" to="/world"> World</Link>
            </li>
            <li className="item">
              <Link className="link" to="/politics"> Politics</Link>
            </li>
            <li className="item">
              <Link className="link" to="/technology">Technology </Link>
            </li>
            <li className="item">
              <Link className="link" to="/startUp">StartUp </Link>
            </li>
            <li className="item">
              <Link className="link" to="/entertainment">Entertainment </Link>
            </li>
            <li className="item">
              <Link className="link" to="/miscellaneous"> Miscellaneous</Link>
            </li>
            <li className="item">
              <Link className="link" to="/hatke">Hatke </Link>
            </li>
            <li className="item">
              <Link className="link" to="/science">Science </Link>
            </li>
            <li className="item">
              <Link className="link" to="/automobile">Automobile </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
