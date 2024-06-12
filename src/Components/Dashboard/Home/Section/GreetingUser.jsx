import "../../../../Main/Style/Framework.css";
import "../../../../Asset/Style/Dashboard/Home/Section/GreetingUser.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function GreetingUser() {
  return (
    <div className="GreetingUser">
      <div className="GreetingUserContent">
        <div className="GreetingUserContent-Left">
          <h5>👋 Hey, Fakhri!</h5>
          <p>We can help with your new product launches with funding of up to $10k.</p>
        </div>
        <div className="GreetingUserContent-Right">
          <span>
            <FontAwesomeIcon icon={faPlus} />
            <h5>Add Widget</h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GreetingUser;
