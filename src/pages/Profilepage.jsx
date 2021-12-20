import { React } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Profilepage() {
  const { userName, setUserName } = useContext(UserContext);

  function changeHandler(event) {
    const { value } = event.target;
    setUserName(value);
  }

  function clickHandler() {
    return setUserName(userName);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Profile</h1>
      <h4>User Name</h4>
      <TextField onChange={changeHandler} />

      <div style={{ display: "flex", marginLeft: "20rem" }}>
        {" "}
        <Button
          onClick={clickHandler}
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Profilepage;
