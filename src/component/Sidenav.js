import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
function Sidenavbar(props) {
  return (
    <div className={props.open ? "sidenav-open scale-up-right" : "sidenav"}>
      <div className="container">
        <Link to={`/`} className="sidenav-title">
          <h3>
            الرئيسية <HomeIcon />
          </h3>
        </Link>
        <section className="rap-sidenav">
          <h3>
            راب <DoNotTouchIcon />
          </h3>
          <Link to={`/wegz`}>
            <h6>ويجز</h6>
          </Link>
          <Link to={`/pablo`}>
            <h6>بابلو</h6>
          </Link>
          <Link to={`/legacy`}>
            <h6>ليجسي</h6>
          </Link>
          <Link to={`/afro`}>
            <h6>أفرو</h6>
          </Link>
          <Link to={`/abuyossef`}>
            <h6>أبيوسف</h6>
          </Link>
          <Link to={`/abuelanwar`}>
            <h6>أبو الانوار</h6>
          </Link>
          <Link to={`/shahen`}>
            <h6>شاهين</h6>
          </Link>
          <Link to={`/wezy`}>
            <h6>ويزي</h6>
          </Link>
        </section>
        <section className="rap-sidenav">
          <h3>
            أدب <ImportContactsIcon />
          </h3>
          <Link to={`/ahmedkhaled`}>
            <h6>احمد خالد توفيق</h6>
          </Link>
          <Link to={`/nagebmahfoz`}>
            <h6>نجيب محفوظ</h6>
          </Link>
          <Link to={`/taha`}>
            <h6>طه حسين</h6>
          </Link>
        </section>
        <Link to={`/sad`}>
          <h3>كلام حزن</h3>
        </Link>
        <Link to={`/random`}>
          <h3>كلام عشوائي</h3>
        </Link>
        <Link to={`/sarsaga`}>
          <h3>كلام سرسجة</h3>
        </Link>
        <Link to={`/english`}>
          <h3>إنجليزي</h3>
        </Link>
      </div>
    </div>
  );
}

export default Sidenavbar;
