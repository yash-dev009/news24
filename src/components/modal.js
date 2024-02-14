import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

function Modalcomponent({ show , setShow}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setShow(setShow);
//   const handleShow = () => setShow(show);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share in your circle..</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <div style={{margin:"15px"}}>
            <FacebookShareButton>
            <FacebookIcon/>
            </FacebookShareButton>
            <WhatsappShareButton>
            <WhatsappIcon/>
            </WhatsappShareButton>
            <TwitterShareButton>
            <TwitterIcon/>
            </TwitterShareButton>
            <PinterestShareButton>
                <PinterestIcon/>
            </PinterestShareButton>
            <InstapaperShareButton>
                <InstapaperIcon/>
            </InstapaperShareButton>
            <EmailShareButton>
                <EmailIcon />
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