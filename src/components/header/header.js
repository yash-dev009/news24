import React, { useState } from "react";
import Style from "./style.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsHeart } from "react-icons/bs";
import Drawer from "../drawer/drawer";

const Header = ({ login, post =false}) => {
  const [logIn, setLogIn] = useState(false);
  const [click, setClick] = useState(false);

  const router = useRouter();
  return (
    <div>
      <Drawer show={click} setShow={setClick} />
      <div className={Style.container}>
        <div className={Style.btncontainer}>
          <GiHamburgerMenu
            onClick={() => setClick(true)}
            className={Style.hamburger}
          />
          <div
            className={Style.headerlogo_heading}
            onClick={() => {
              router.push("/");
            }}
          >
            <img className={Style.logo} src={`/newspaper.png`} />
            <h3 className={Style.heading}>24*7 news</h3>
          </div>
          <div className={Style.Postbtndiv}>
            <BsHeart className={Style.heart}
              onClick={() => {
                router.push("/fav");
              }}
            />
            {post && (
              <button
                className={Style.Postbtn}
                onClick={() => {
                  router.push("/form");
                }}
              >
                Post news
              </button>
            )}
            <button
              className={Style.Postbtn}
              onClick={() => {
                router.push("/login");
              }}
            >
              {" "}
              Login
            </button>
            <button
              className={Style.Postbtn}
              onClick={() => {
                router.push("/signup");
              }}
            >
              {" "}
              Signup
            </button>
            <IoPersonCircleOutline size={25} onClick={()=>router.push("/profile")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
