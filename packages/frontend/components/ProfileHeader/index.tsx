import { UserBio, ProfileHeaderWrapper } from "./styled";

const ProfileHeader = () => {
  return (
    <ProfileHeaderWrapper className="d-flex">
      <div>
        <img
          src="https://via.placeholder.com/150"
          className="rounded float-end"
          alt="..."
        ></img>
      </div>
      <UserBio className="ms-4">
        <h1>/user</h1>
        <p>bio</p>
        <p>social</p>
      </UserBio>
      <div className="ms-auto">
      <button type="button" className="btn btn-primary">Edit</button>
      </div>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
