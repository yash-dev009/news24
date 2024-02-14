import React from "react";
import Style from "./style.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSave, BsShareFill } from "react-icons/bs";
import Header from "@/components/header/header";
import useNewsStore from "@/zustand/store";
import {   
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon, } from "react-share";

function Detail({ id }) {
  const blog = useNewsStore((state) => state.posts);
  const data = blog.filter((page) => page.id == id);
  console.log(data, "data");

  return (
    <div>
      <Header />
      <div className={Style.container}>
        <div style={{ margin: " 2rem " }}>
          <div className={Style.imgcontainer}>
            <AiOutlineHeart className={Style.cardheart} />
            <div className={Style.cardgallery}>
              {data[0]?.image?.map((p) => (
                <img
                  className={Style.cardimg}
                  key={p.id}
                  src={p}
                  alt="news images"
                />
              ))}
            </div>
          </div>

          <div>
            <h5 className={Style.cardheading}>{data[0].title}</h5>
            <p style={{ textAlignLast: "left", margin: "10px" }}>
              {data[0].detail}
            </p>

            <div className={Style.cardsavecontainer}>
            <FacebookShareButton url="https://chirayu-portfolio.vercel.app"  >
            <FacebookIcon size={20}/>
             </FacebookShareButton>
            <WhatsappShareButton url="https://chirayu-portfolio.vercel.app"  >
            <WhatsappIcon size={20}/>
             </WhatsappShareButton>
          
             
             
                {/* <EmailShareButton size={20}/> */}
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
