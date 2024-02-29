import react, { useEffect, useState } from "react";
import { BsFillSave2Fill, BsHeart, BsHeartFill, BsSave2Fill } from "react-icons/bs";
import { BsSave, BsShareFill } from "react-icons/bs";
import Style from "./style.module.css";
import { useRouter } from "next/router";
import useNewsStore from "@/zustand/store";

import Modalcomponent from "../modal/modal";

function Card({ fav = false , save=false }) {
  const { updatePost , savePost, posts } = useNewsStore((state) => state);
  console.log(posts,"posts");
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [click, setClick] = useState(false);

  // const handleImageClick = (index) => {
  //   setCurrentIndex(index);
  // };
  const router = useRouter();

  let dataToMap = save ? posts?.filter((v) => v.isCapture == true) : fav ? posts?.filter((v) => v.isfav == true) : posts  
  const renderlist = dataToMap.map((news) => {
    const { id, title, detail, image, isfav , isCapture } = news;
     const [ firstimg , secondimg , ...remainingimg]= image

    return (
      < >
                <Modalcomponent show={click} setShow={setClick}/>

        <div className={Style.cardcontainer}   onClick={(e) => {
               e.stopPropagation()
               router.push(`/detail/${id}`);
              }} key={id}>
          <span>
            {isfav ? (
              <BsHeartFill
                className={Style.cardheart}
                style={{ color: "red" }}
                onClick={(e) =>{      e.stopPropagation() 
                  updatePost(id - 1, !isfav)}}
              />
            ) : (
              <BsHeart
                className={Style.cardheart}
                style={{ color: "white" }}
                onClick={(e) => {      e.stopPropagation()
                   updatePost(id - 1, !isfav)}}
              />
            )}

<div   className={Style.cardimgdiv2}
            >
      <img  className={Style.cardimg} src={firstimg} alt="First Image" />
      
      
      {remainingimg.length > 0 ? 
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div 
            className={Style.overlay}
          >
            +{remainingimg.length-1} photos
          </div>
          <img src={secondimg}  className={Style.cardimg} alt="Remaining Images" />
        </div> 
      :     <img src={secondimg}  className={Style.cardimg} alt="Second image" />}
    </div>
    </span>
            
          <div >
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
                <BsShareFill className={Style.cardshareicon} onClick={(e)=>{ e.stopPropagation() 
                  setClick(true)}} />
                {/* <BsFillSave2Fill className={Style.cardsaveicon} onClick={(e) =>{      e.stopPropagation() 
                  savePost(id-1,)}} /> */}
                  {isCapture ? (
              <BsFillSave2Fill
                className={Style.cardsaveicon}
                style={{ color: "black" }}
                onClick={(e) =>{      e.stopPropagation() 
                  savePost(id - 1, !isCapture)}}
              />
            ) : (
              <BsSave
                className={Style.cardsaveicon}
                style={{ backgroundColor: "white" }}
                onClick={(e) => {      e.stopPropagation()
                  savePost(id - 1, !isCapture)}}
              />
            )}
                {/* onClick={handlesave} */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
console.log(renderlist,"render");
  return <div>
<h1 className={Style.heading}>{save ? "Saved Posts" : fav ? "Fav Posts" : "All Posts"}</h1>
    <div className={Style.card}> {renderlist.length == 0 ? "No Post Found !!" : renderlist}</div>;
  </div>
  
}

export default Card;
