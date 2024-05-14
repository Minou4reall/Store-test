import { Outlet } from "react-router-dom";
import ControlSideBar from "../components/ControlSideBar";
import Crud from "../components/Crud";
import SlideHeader from "../components/SlideHeader";
function ControlPanel() {
  return (
    <>
      <SlideHeader header={"Control Panel"} extension={"Control Panel"} />
      
        <div className="page-container">
          <ControlSideBar />
          <div className="content-side">
            <Outlet/>
          </div>
        </div>
      
    </>
  );
}
export default ControlPanel;
