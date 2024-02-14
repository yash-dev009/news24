import react, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BsSave, BsShareFill } from "react-icons/bs";
import Style from "./style.module.css";
import { useRouter } from "next/router";
import useNewsStore from "@/zustand/store";

import Modalcomponent from "../modal";

function Card({ fav = false }) {
  const { updatePost, posts } = useNewsStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [click, setClick] = useState(false);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };
  const router = useRouter();

  let dataToMap = fav ? posts?.filter((v) => v.isfav == true) : posts;

  const renderlist = dataToMap.map((news) => {
    const { id, title, detail, image, isfav } = news;

    return (
      < >
        <div className={Style.cardcontainer} key={id}>
          <span>
            {isfav ? (
              <BsHeartFill
                className={Style.cardheart}
                style={{ color: "red" }}
                onClick={() => updatePost(id - 1, !isfav)}
              />
            ) : (
              <BsHeart
                className={Style.cardheart}
                style={{ color: "white" }}
                onClick={() => updatePost(id - 1, !isfav)}
              />
            )}

            <div
              className={Style.cardimgdiv2}
              onClick={() => {
                router.push(`/detail/${id}`);
              }}
            >
              {/* <img
                className={Style.cardimg}
                src={image[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                onClick={() => handleImageClick(0)}
              /> */}

              {image.map((k, index) => (
                // <img
                //   key={index}
                //   src={image}
                //   alt={`Image ${index + 1}`}
                //   style={{ width: '50px', margin: '5px', cursor: 'pointer' }}
                //   onClick={() => handleImageClick(index)}
                // />
                <div className="position-relative">
                  <div className={Style.cardimgcount}> {image.length - 2}</div>
                  <img
                    key={k.index}
                    className={Style.cardimg}
                    src={k}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
              {/* </div> */}
              {/* </div> */}
            </div>
          </span>
          <div
            // onClick={() => {
            //   router.push(`/detail/${id}`);
            // }}
          >
            <h5 className={Style.cardheading}>
              {title.substring(0, 80)}{" "}
              <span style={{ color: "blue", fontSize: " 15px " }}>
                more...
              </span>
            </h5>
            <p style={{ textAlignLast: "left", margin: "10px" }}>
              {detail.substring(0, 180)}
            </p>

            <div className={Style.cardsavecontainer}>
              <p className={Style.cardreadmorebtn}>Read more...</p>
              <div>
                <BsShareFill className={Style.cardshareicon} onClick={()=>setClick(true)} />
                <Modalcomponent show={click} setShow={setClick}/>
                <BsSave className={Style.cardsaveicon} />
                {/* onClick={handlesave} */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <div className={Style.card}> {renderlist}</div>;
}

export default Card;
