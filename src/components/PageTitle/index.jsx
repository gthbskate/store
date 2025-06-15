import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const PageTitle = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);

  return (
    <div className="page-title">
      <div className="page-title__content">
        {pathParts.map((part, index) => {
          const pathTo = '/' + pathParts.slice(0, index + 1).join('/');
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="page-title__text">{`>`}</span>
              )}
              <Link to={pathTo} className="page-title__link">
                {index === 0 ?
                <h1 className="page-title__text">{part.replace(/-/g, ' ')}</h1>
                :
                <p className="page-title__text">{part.replace(/-/g, ' ')}</p>}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PageTitle;
