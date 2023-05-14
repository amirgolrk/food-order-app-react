import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1 >ReactMeals</h1>
        <HeaderCartButton/>
        </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage}  alt="picture of delicious foods" title="foood"/>
      </div>
    </Fragment>
  );
};

export default Header;
