import "../../../Main/Style/Framework.css";
import "../../../Asset/Style/Layout/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <main id="MainNavbar">
      <section className="MainNavbar">
        <nav className="Navbar shadow-2xl">
          <div className="Container">
            <div className="NavbarContent">
              <div className="NavbarContent-Left">
                <h5>Home</h5>
              </div>
              <div className="NavbarContent-Center">
                <form className="InputSearchContainer">
                  <i className="IconInputSearch">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                  <input className="InputSearch" type="text" placeholder="What Are You Looking For?"></input>
                </form>
              </div>

              <div className="NavbarContent-Right">
                <div className="NavbarContent-Notification">
                  <button>
                    <span className="BadgeNotification">4</span>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </div>

                <div className="diver-vertical"></div>

                <button className="NavbarContent-Profile">
                  <div className="NavbarContent-ProfileAvatar">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="NavbarContent-ProfileName">
                    <h5>Frontend Engineer</h5>
                    <h6>Muhammad Fakhri Alfi Syahrin H.</h6>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}

export default Navbar;
