import { Fragment } from "react";
import mealsImage from '../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    return (
        <Fragment>
            <header className={classes.header}>
                
            
               
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
                
                
            </header>
            <div className={classes['main-image']}>

                <img src={mealsImage} alt="table full of food" ></img>
            </div>
        </Fragment>
    )
}

export default Header