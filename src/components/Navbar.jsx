import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useLogout } from "../hooks/useLogout";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    backgroundColor: "#626870",
    height: "58px",
    width: "1076px",
    borderRadius: "5px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginTop: "1rem",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "lightgray",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { logout } = useLogout();

  return (
    <nav className="navbar">
      <div className={classes.navlinks}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>
        <Link to="/signup" className={classes.link}>
          Sign up
        </Link>
        <Link to="/login" className={classes.link}>
          Log in
        </Link>
        <span onClick={logout} className={classes.link}>
          Log out
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
