import React, { useState } from "react";
import { useUserContext } from "../Contexts/UserContext";
import { API } from "../global";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, userId, setUser, userToken } = useUserContext();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(user);
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          profilePic: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    handleSubmit(userData);
    setUser(userData, userToken);
    // You can add logic to save the updated data to your backend here
  };

  const handleSubmit = (data) => {
    console.log(data);
    fetch(`${API}/users/editUser/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/profile"));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 flex justify-center">
          <div className="card">
            <div className="card-header">
              <h3>Profile</h3>
            </div>
            <div className="card-body">
              <div className="profile-pic-container flex justify-center items-center gap-2 mb-2">
                <img
                  src={userData.profilePic || "assets/ProfilePic.png"}
                  // src="src/assets/ProfilePic.png"

                  alt="Profile"
                  className="img-fluid profile-pic w-28  "
                />

                {editMode && (
                  <div className="mb-3">
                    <label htmlFor="profilePic" className="form-label">
                      Edit Profile Picture
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="profilePic"
                      name="profilePic"
                      onChange={handleProfilePicChange}
                    />
                  </div>
                )}
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    readOnly={true}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    value={userData.fullname}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNo" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNo"
                    name="mobileNo"
                    value={userData.mobileNo}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userData.emailId}
                    onChange={handleInputChange}
                    readOnly={!editMode}
                  />
                </div>

              </form>
            </div>
            <div className="card-footer">
              {editMode ? (
                <button
                  className="btn btn-primary me-2"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-secondary me-2"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
