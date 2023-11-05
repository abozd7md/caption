import { useState } from "react";
import Sidenavbar from "./Sidenav";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };
  function refreshPage() {
    window.location.reload(true);
  }
  function handleMenu(e) {
    if (e.target === <h3>أدب</h3> && e.target === <h3>راب</h3>) {
      console.log(e.target.value);
      setIsOpen(true);
    } else {
      console.log(e.target);

      setIsOpen(false);
    }
  }
  return (
    <>
      <div>
        <div onClick={handleMenu}>
          <Sidenavbar open={isOpen} />
        </div>
        <div bg="dark" variant="dark">
          <div className="navbar-container">
            <div>
              {isOpen ? (
                ""
              ) : (
                <div>
                  <h1>كابشن</h1>
                </div>
              )}
            </div>
            <div>
              <Button
                variant="outlined"
                onClick={refreshPage}
                style={{
                  border: "1px solid white",
                  color: "white",
                  fontFamily: "Tajawal, sanSerif",
                }}
              >
                تحديث
              </Button>
            </div>
            <div>
              {" "}
              <MenuIcon onClick={handleClick} className="rotate-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
