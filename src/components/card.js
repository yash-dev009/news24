import react, { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { BsSave, BsShareFill } from "react-icons/bs";
import Style from "./style.module.css";
import { useRouter } from "next/router";
import useNewsStore from "@/zustand/store";

function Card() {
  const  addFavPost  = useNewsStore((state)=>state.addFavPost);
  const favposts = useNewsStore((state) => state.favpost);
  console.log(favposts ,"favpost");
  
  // const { id, title ,detail ,img} = props

  const router = useRouter();
  // console.log(props ,"props")

  const posts = useNewsStore((state) => state.posts);
  const data = posts.map((v) => ({ ...v, isfav: false }));
  console.log(data, "post");


  // fake data just for testing


  const renderlist = data.map((news) => {
    const [isLiked, setIsLiked] = react.useState(false)
    const { id, title, detail, image } = news

const handleheart =()=>{
  setIsLiked(!isLiked)
  // if(!isLiked){
  //   addFavPost(news)
  //   return
  // }
  addFavPost(news)
}
console.log(addFavPost,"addFavPost");
 

    return (
      <div key={id}>
        <div className={Style.cardcontainer}>
          <span>
            <BsHeart
              className={Style.cardheart}
              style={{ color: isLiked ? "red" : "white" }}
              onClick={handleheart}
            />
            <div
              className={Style.cardimgdiv2}
              onClick={() => {
                router.push(`/detail/${id}`);
              }}
            >
              {image?.map((k) => {
                return <img key={k.id} className={Style.cardimg} src={k} />;
              })}
            </div>
          </span>
          <div
            onClick={() => {
              router.push(`/detail/${id}`);
            }}
          >
            <h5 className={Style.cardheading}>
              {title.substring(0, 80)}{" "}
              <span style={{ color: "blue", fontSize: " 15px " }}>
                {" "}
                more...
              </span>{" "}
            </h5>
            <p style={{ textAlignLast: "left", margin: "10px" }}>
              {detail.substring(0, 180)}
            </p>

            <div className={Style.cardsavecontainer}>
              <p className={Style.cardreadmorebtn}>Read more...</p>
              <div>
                <BsShareFill className={Style.cardshareicon} />
                <BsSave className={Style.cardsaveicon} />
                {/* onClick={handlesave} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (<div className={Style.card}> {renderlist}</div>)
}

export default Card;
