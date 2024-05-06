import "../style/profile.css";
function ProfileForm() {
  return (
    <>
      <div className="profile-content">
        <form action="">
          <div className="grid-content">
            <div className="input-content" >
              <label>Your Name</label>
              <input type="text" value={"Sadek"}/>
            </div>
            <div className="input-content">
              <label>Your Last name</label>
              <input type="text" value={"Mansour"}/>
            </div>
            <div className="input-content">
              <label>Your E-mail</label>
              <input type="email" value={"Minou4reall@gmail.com"} />
            </div>
            <div className="input-content">
              <label>Your Phone</label>
              <input type="tel" value={"0555307591"}/>
            </div>
            <div className="input-content">
              <label>Your Address</label>
              <input type="text" value={"08 Mai 1945"} />
            </div>
            <div className="input-content">
              <label>Your Password</label>
              <input type="password" value={"Minou2004"}/>
            </div>
          </div>
          <button
          className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
          type="submit"
        >
          Update Profile
        </button>
        </form>
      </div>
    </>
  );
}
export default ProfileForm;
