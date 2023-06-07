import classes from "./BtmButton.module.css"
const BtmButton=(props)=>{
    return(
        <>
           <button className={classes.button} onClick={props.onClick}>{props.children}</button>
        </>
    )
}
export default BtmButton