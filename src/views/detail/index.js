import React from "react";
import Style from "./style.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSave, BsShareFill } from "react-icons/bs";
import Header from "@/components/header";
import useNewsStore from "@/zustand/store";

function Detail({id}) {

  const blog = useNewsStore((state)=>state.posts)

  return (
    <div>
    <Header/>
      <div className={Style.container}>
      <div style={{margin:" 2rem " }}>
        <div className={Style.imgcontainer}>
          <AiOutlineHeart className={Style.cardheart} />
          <div className={Style.cardgallery}>

            {blog.map(u=>{
              return ( {u.id})
            })}
        
              <img className={Style.cardimg} src={`/train.webp`} />
              <img className={Style.cardimg} src={`/train.webp`} />
              <img className={Style.cardimg} src={`/train2.webp`} />
              <img className={Style.cardimg} src={`/train.webp`} />
              <img className={Style.cardimg} src={`/train.webp`} />
           
          </div>
        </div>

        <div>
          <h5 className={Style.cardheading}>
            As of Saturday, at least 280 people died, and about 900 people were
            injured in the tragedy, according to Indian officials.
          </h5>
          <p style={{ textAlignLast: "left", margin: "10px" }}>
            ISOBEL VAN HAGENJUN 3, 2023, 19:55 IST 10 images of the devastation
            following a 3-train crash in India that killed nearly 300 passengers
            This screen grab made from AFPTV video footage taken on June 3, 2023
            shows people gathering at the accident site of a three-train
            collision near Balasore, in the eastern state of Odisha.JAYANTA SHAW
            / Getty Images Nearly 300 people were killed in one of the deadliest
            train crashes in decades in India on Friday. A train in Odisha
            derailed onto an adjacent track, struck by an oncoming train. Nearly
            300 people were killed and hundreds more were injured in the
            Balasore district on Friday in one of the deadliest train crashes in
            India recent history. Here are some of the first images of the
            horrific incident.
          </p>

          <div className={Style.cardsavecontainer}>
            <p className={Style.cardreadmorebtn}>Read more...</p>
            <div>
              <BsShareFill className={Style.cardshareicon} />
              <BsSave className={Style.cardsaveicon} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
