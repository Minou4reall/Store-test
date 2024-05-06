import ProfileForm from "../components/ProfileForm";
import SlideHeader from "../components/SlideHeader";
function Profile() {
    return (
      <>
        <SlideHeader header={"Profile"} extension={"Profile"} />
        <ProfileForm/>
      </>
    );
  }
  export default Profile;