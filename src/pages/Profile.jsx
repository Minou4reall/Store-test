import ProfileForm from "../components/ProfileForm";
import SlideHeader from "../components/SlideHeader";
import ProfileSideBar from "../components/ProfileSideBar";
import InstallmentStatus from "../components/InstallmentStatus";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <SlideHeader header={"Profile"} extension="Profile" />
      <div className="page-container">
        <ProfileSideBar/>
        <div className="content-side">
          <Outlet/>
          
        </div>
      </div>
      
    </>
  );
}
export default Profile;
