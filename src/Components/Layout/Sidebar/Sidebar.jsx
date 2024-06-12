import "../../../Main/Style/Framework.css";
import "../../../Asset/Style/Layout/Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPlus, faBoxOpen, faUserGroup, faShop, faUserTie, faBookmark, faN, faChartSimple, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

import Insights from "../../../Asset/Icon/DashBoard.svg";
import LogoWayFlyer from "../../../Asset/Logo/Logo-Wayflyer-Tosca.svg";

function Sidebar() {
  return (
    <main id="">
      <section className="MainSidebar">
        <div className="Sidebar">
          <div className="Container">
            <div className="SidebarContent">
              {/* Start Content Sidebar Top */}
              <div className="SidebarContentTop">
                <div className="SidebarContentTop-Left">
                  <img src={LogoWayFlyer}></img>
                  <h5>Wayflyer</h5>
                </div>
                <div className="SidebarContentTop-Right">
                  <div className="SidebarContentTop-Right">
                    <button className="ButtonCollapseSidebar">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  </div>
                </div>
              </div>
              {/* End Content Sidebar Top */}

              <div className="SidebarContentCenter">
                <div className="SidebarContentCenter-Navigasi">
                  <h6>APPS</h6>
                  <ul>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        Insights
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faCcVisa} />
                        </div>
                        Card
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        Post
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faBoxOpen} />
                        </div>
                        Product
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faCalendarCheck} />
                        </div>
                        Event
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="diver"></div>
                <div className="SidebarContentCenter-Navigasi">
                  <h6>📕 Bookings</h6>
                  <ul>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        Sales Expert
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faShop} />
                        </div>
                        Chartly
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faUserTie} />
                        </div>
                        Reservation Manager
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        Booking Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="diver"></div>
                <div className="SidebarContentCenter-Navigasi">
                  <ul>
                    <li>
                      <a>
                        <div className="BoxIconApps RedBackground shadow-md ">
                          <FontAwesomeIcon icon={faN} />
                        </div>
                        Newstand
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        Golder Bar
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="BoxIconApps shadow-md">
                          <FontAwesomeIcon icon={faUsers} />
                        </div>
                        Customer Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sidebar;
