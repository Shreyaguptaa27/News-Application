import React from 'react';
import news from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3" style={{ maxWidth: "345px" }}>
      <img src={src ? src : news } style={{ height: "200px", objectFit: "cover", width: "100%" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No title available"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News is a current event. It is the description about something that just happened."}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
