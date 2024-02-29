
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Style from "./styles.module.css"

function Modalcomponent({ show, setShow }) {
  //   const [show, setShow] = useState(false);

  const handleClose = () =>{       
     setShow(setShow)};
  //   const handleShow = () => setShow(show);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={ (e) =>{ setShow(setShow) 
       }}>
        <Modal.Header closeButton>
          <Modal.Title>Share in your circle..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={Style.modalicons}
           
          >
            <FacebookShareButton>
              <FacebookIcon className={Style.icons} />
            </FacebookShareButton>
            <WhatsappShareButton>
              <WhatsappIcon className={Style.icons} />
            </WhatsappShareButton>
            <TwitterShareButton>
              <TwitterIcon className={Style.icons} />
            </TwitterShareButton>
            <PinterestShareButton>
              <PinterestIcon className={Style.icons} />
            </PinterestShareButton>
            <InstapaperShareButton>
              <InstapaperIcon className={Style.icons} />
            </InstapaperShareButton>
            <EmailShareButton>
              <EmailIcon className={Style.icons} />
            </EmailShareButton>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalcomponent;
