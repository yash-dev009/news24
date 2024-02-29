import { Button } from "react-bootstrap";
import Style from "./style.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRouter } from "next/router";
import { BsSave ,BsHeart } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";

function Drawer({ show, setShow }) {
  // const [show, setShow] = useState(false);
const router = useRouter()
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas  show={show} onHide={handleClose} className={Style.drawer}>
        <Offcanvas.Header closeButton>
          <img className={Style.drawerlogo} src={"newspaper.png"} />
          <Offcanvas.Title className={Style.drawertextcolor}>
            Upto date news
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={Style.drawertextcolor}>
          <ul >
            <li  className={Style.drawerlist} onClick={()=> {
          router.push("/")
          handleClose()
          }}  > <IoMdHome size={20} />   Home </li> <hr />
         <li className={Style.drawerlist} onClick={()=> {
          router.push("/fav")
          handleClose()
          }}>   <BsHeart/>  Favourite</li> <hr />
           <li className={Style.drawerlist} onClick={()=> {
            router.push("/save")
            handleClose()
            }}> <BsSave />   Save</li> <hr />
          </ul>
          <Button onClick={()=> {router.push("/login")} }>Login</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Drawer;
