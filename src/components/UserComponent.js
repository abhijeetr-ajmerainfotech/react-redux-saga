import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/action";
import Card from "./Card";

const UserComponent = ({ store }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="text-center ">
          API Call using{" "}
          <strong className="text-success text-darken">Redux and Saga</strong>
        </h1>
        <div className="row">
          {loading && <p>Loading...</p>}
          {users.length === 0 && !loading && <h6>No users available!</h6>}
          {error && !loading && <h6 className="text-danger">{error}</h6>}
          {users.length > 0 &&
            users.map((user) => <Card key={user.id} user={user} />)}
        </div>
      </div>
    </>
  );
};

export default UserComponent;
