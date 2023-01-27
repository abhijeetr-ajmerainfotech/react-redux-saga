import React from "react";
import { useDispatch } from "react-redux";
import { removeUsers } from "../redux/action";
const Card = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-3 p-3">
      <div className="card m-3 " key={user.id}>
        <div className="card-content p-3">
          <h5 className="card-title">UserName : {user.username.substr(0, 10)}</h5>
          <h6 className="card-text">FullName : {user.name.substr(0, 10)}</h6>
          <h6 className="card-subtitle">Email: {user.email.substr(0, 15)}...</h6>
          <p className="card-text">Company :{user.company.name}</p>
          <p className="card-text">Phone : {user.phone}</p>
          <p className="card-text">Website : <a href=""> {user.website}</a></p>
          <p className="card-text">
            Address :{user.address.city}
          </p>
        </div>
        <button onClick={(index) => { dispatch(removeUsers(user.id)) }} className="btn btn-danger">remove</button>
      </div>
    </div>
  );
};

export default Card;
