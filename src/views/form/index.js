import React, { useRef, useState } from "react";
import style from "./style.module.css";
/* import SimpleInput from "@/components/simpleInput"; */
import Header from "@/components/header";
import useNewsStore from "@/zustand/store";
import { useRouter } from "next/router";

function Form() {
/*   const [choose, setChoose] = useState(null); */
const [title, setTitle] = useState()
const [detail, setDetail] = useState()
 const [image, setImage] = useState([]);

  const router = useRouter()
  const inputref = useRef();

  const addPost = useNewsStore((state) => state.addPost);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage([...image,URL.createObjectURL(event.target.files[0])])

      
    }
  };

 const handleSubmit= ()=> {
  addPost({image,title,detail})

router.push("/")

  setTitle("")
  setDetail("")

 }
  console.log(detail,`detail`);
  console.log(title,`title`);


  return (
    <div>
      <div className={style.container}>
        <Header />

        <div className={style.formcontainer}>
          <div className={style.formimgcontainer}>
            <div  onClick={() => inputref.current.click()}>
              <input
                type="file"
                name="file"
                className={style.formimginput}
                onChange={onImageChange}
                ref={inputref}
              />
              <img className={style.formimgfill} src={"/dummysave (2).jpg"} />
            </div>

            <div className={style.imagearray} >
              {image.map(v => {
                return <img key={v.id} className={style.formimg} src={v} />
              } )}
            </div>
          </div>

          {/*   <SimpleInput
            title="Title"
            maxLength={65}
            name="user_name"
            inputStyle={{ width: "93%" }}
         
          />
          <SimpleInput
            title="Description"
            maxLength={65}
            name="user_name"
            inputStyle={{ width: "93%" }}
          /> */}
       <div  className={style.forminputcontainer} >
          <label>Username :</label>
          <input
            className={style.forminput}
            type="text"
            placeholder="username"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <label >Description :</label>
          <input
            className={style.forminput}
            type="text"
            value={detail}
            placeholder="Description"
            onChange={(e)=>setDetail(e.target.value)}
          />
          </div>

          <div className={style.formbtndiv}>
            <button className={style.formbtn} onClick={handleSubmit}>Submit</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
