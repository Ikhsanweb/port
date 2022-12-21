import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './ItemAnimTwo.css';

const ItemAnimTwo = memo(
  ({ clickDet, imgContent, imgText, imgId, imgParams }) => {
    const [isClickDet, setIsClickDet] = React.useState(clickDet);
    return (
      // <Link className="itemAnimTwo" to={`/portfolioContent/${imgParams}/portfolioContentDetail/${imgId}`}>
      // <div className="itemAnimTwo">
      <div
        className="itemAnimTwo__content"
        onClick={() => setIsClickDet(!isClickDet)}
      >
        <div
          className={
            isClickDet
              ? 'itemAnimTwo__content-pics'
              : 'itemAnimTwo__content-pics detailfalse'
          }
        >
          <div
            className={
              isClickDet
                ? 'itemAnimTwo__content-picscover'
                : 'itemAnimTwo__content-picscover detailfalse'
            }
          >
            <img
              className={
                isClickDet
                  ? 'itemAnimTwo__content-picscoverimg'
                  : 'itemAnimTwo__content-picscoverimg detailfalse'
              }
              src={imgContent}
            />
          </div>
        </div>
        <div
          className={
            isClickDet
              ? 'itemAnimTwo__content-text'
              : 'itemAnimTwo__content-text detailfalse'
          }
        >
          <div className="itemAnimTwo__content-textdiv">
            <h4
              className={
                isClickDet
                  ? 'itemAnimTwo__content-texth4'
                  : 'itemAnimTwo__content-texth4 detailfalse'
              }
            >
              {imgText}
            </h4>
            <Link
              to={`/portfolioContent/${imgParams}/portfolioContentDetail/${imgId}`}
            >
              <h2
                className={
                  isClickDet
                    ? 'itemAnimTwo__content-look'
                    : 'itemAnimTwo__content-look detailfalse'
                }
              >
                More detail...
              </h2>
            </Link>
          </div>
        </div>
      </div>
      // </div>
      // </Link>
    );
  }
);

export default ItemAnimTwo;
