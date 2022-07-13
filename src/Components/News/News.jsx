import React from "react";
import "./news.scss";

import NewsItem from "../newsItem/NewsItem";



function News({ category }) {
  return (
    <div className="news">
      <NewsItem category={category}/>
    </div>
  );
}

export default News;
