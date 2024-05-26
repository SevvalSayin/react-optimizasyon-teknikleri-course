const Button=(props)=>{
    console.log("Button Çalıştı");
    return(
        <button onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;

/* props.onClick===props.prev.onClick */