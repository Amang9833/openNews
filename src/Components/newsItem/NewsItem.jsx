import React, { useState, useEffect } from "react";
import "./newsItem.scss";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

function NewsItem({ category }) {
  

  const url = `https://inshorts.deta.dev/news?category=${category}`;

  const [state, setState] = useState({
    article: [],
    loading: true,
  });

  useEffect(() => {
    const fetchDate = async () => {
      try {
        let Fetchdata = await fetch(url);
      let data = await Fetchdata.json();

      setState({
        article: data.data,
        loading: false,
      });
      }
      catch (err)
      {
        console.log(err)
      }

      document.title = category;

    };

    fetchDate();
  }, [url, category]);

  let news = state.article;

  return state.loading === true ? (
    <ReactLoading className="loading" type="spinningBubbles" color="purple" />
  ) : (
    <>
      {news.map((item) => {
        return (
          <div className="newsitem" key={item.id}>
            <div className="photo">
              <img src={item.imageUrl} alt="" />
            </div>
            <div className="icons">
              <ShareOutlinedIcon className="icon"  />
              <FavoriteBorderOutlinedIcon className="icon" />
              <AddShoppingCartOutlinedIcon className="icon" />
            </div>
            <div className="titleWrapper">
              <h4>Title</h4>
              <div className="title">{item.title}</div>
              <div className="dateWarpper">
                <h4>Descripton</h4>
                <span>{item.author}</span>
                <span>{item.date}</span>
              </div>
              <div className="description">{item.content}</div>
            </div>
            <div className="btn">
              <Link
                to={`${
                  item.readMoreUrl === null ? item.url : item.readMoreUrl
                }`}
                target="_blank"
              >
                <button>Read more...</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}



export default NewsItem;
