import { Button } from "react-bootstrap";
import Style from "./style.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useRouter } from "next/router";

function Drawer({ show, setShow }) {
  // const [show, setShow] = useState(false);
const router = useRouter()
  const handleClose = () => setShow(false);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className={Style.drawercolor}>
        <Offcanvas.Header closeButton>
          <img className={Style.drawerlogo} src={"newspaper.png"} />
          <Offcanvas.Title className={Style.drawertextcolor}>
            Upto date news
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={Style.drawertextcolor}>
          <ul>
            <li className={Style.drawerlist}>Home </li> <hr />
            <li className={Style.drawerlist}> Favourite</li> <hr />
            <li className={Style.drawerlist}> Save</li> <hr />
          </ul>
          <Button onClick={()=> {router.push("/login")} }>Login</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Drawer;
