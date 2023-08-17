import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function OffCanvasExample({ name, open, setOpen, ...props }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <Offcanvas show={open} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-bar">
            <div>
              <div className="profile">
                <span>
                  <MdAccountCircle color="#B1B1B1" size="100px" />
                </span>
                <div className="profile-info">
                  <span>홍길동</span>
                  <span>hgd@naver.com</span>
                </div>
              </div>
              <div className="category">
                <span>내 정보</span>
                <span>전문가 신청</span>
                <span>개발자 정보</span>
              </div>
            </div>
            <div className="logout">
              <span>로그아웃</span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Menu({ open, setOpen }) {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample
          open={open}
          setOpen={setOpen}
          key={idx}
          placement={placement}
        />
      ))}
    </>
  );
}

export default Menu;
