import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSave, BsShareFill } from "react-icons/bs";
import Style from "./style.module.css";
import { useRouter } from "next/router";

function Card(props) {
  const router = useRouter();
  const handlesave = () => {


  };
  console.log(props.img, `props.img`);
  return (
    <div>
      <div className={Style.cardmaincontainer}>
        <div
          className={Style.cardcontainer}
          onClick={() => {
            router.push(`/detail/${id}`);
          }}
        >
         
            <span>
              <AiOutlineHeart className={Style.cardheart} />
              <div className={Style.cardimgdiv2}>
              {props.img.map((k) => {
                return <img className={Style.cardimg} src={k} />;
              })}
              </div>
            </span>
          <div>
            <h5 className={Style.cardheading}>{props.title.substring(0,80)} <span style={{color:"blue", fontSize:" 15px " }}> more...</span> </h5>
            <p style={{ textAlignLast: "left", margin: "10px" }}>
              {props.detail.substring(0,180)}
            </p>

            <div className={Style.cardsavecontainer}>
              <p className={Style.cardreadmorebtn}>Read more...</p>
              <div>
                <BsShareFill className={Style.cardshareicon} />
                <BsSave onClick={handlesave} className={Style.cardsaveicon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
