import React, { memo } from 'react';
import { Link } from 'react-router-dom';
// import POSTER from '../../assets/cert8.png'
import './ItemAnim.css';

const ItemAnim = memo(
  ({
    click,
    setClick,
    itemTitle,
    itemSubtitle,
    itemImg,
    itemId,
    itemPath,
    isSingleLink,
    isLink,
    singleLink,
  }) => {
    const [isClick, setIsClick] = React.useState(click);
    return (
      <div
        className={
          isClick ? 'portfolio__body-item' : 'portfolio__body-item portfalse'
        }
        onClick={() => setIsClick(!isClick)}
      >
        <div
          className={
            isClick
              ? 'portfolio__body-item-up-true'
              : 'portfolio__body-item-up-true portfalse'
          }
        >
          <h2>{itemTitle}</h2>
        </div>
        <div
          className={
            isClick
              ? 'portfolio__body-item-down-true'
              : 'portfolio__body-item-down-true portfalse'
          }
        >
          <div
            className={
              isClick
                ? 'portfolio__body-item-down-true-imgcover'
                : 'portfolio__body-item-down-true-imgcover portfalse'
            }
          >
            <img
              src={itemImg}
              className={
                isClick
                  ? 'portfolio__body-item-down-true-img'
                  : 'portfolio__body-item-down-true-img portfalse'
              }
            />
          </div>
          <div className="portfolio__body-item-down-true-explained">
            <h3
              className={
                isClick
                  ? 'portfolio__body-item-down-true-explained-text'
                  : 'portfolio__body-item-down-true-explained-text portfalse'
              }
            >
              {itemSubtitle}
            </h3>
            {isSingleLink ? (
              isLink ? (
                <Link to={singleLink}>
                  <h3
                    className={
                      isClick
                        ? 'portfolio__body-item-down-true-explained-text2'
                        : 'portfolio__body-item-down-true-explained-text2 portfalse'
                    }
                  >
                    Click Here
                  </h3>
                </Link>
              ) : (
                <a href={singleLink}>
                  <h3
                    className={
                      isClick
                        ? 'portfolio__body-item-down-true-explained-text2'
                        : 'portfolio__body-item-down-true-explained-text2 portfalse'
                    }
                  >
                    Click Here
                  </h3>
                </a>
              )
            ) : (
              <Link to={`/portfolioContent/${itemId}`}>
                <h3
                  className={
                    isClick
                      ? 'portfolio__body-item-down-true-explained-text2'
                      : 'portfolio__body-item-down-true-explained-text2 portfalse'
                  }
                >
                  Click Here
                </h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ItemAnim;
