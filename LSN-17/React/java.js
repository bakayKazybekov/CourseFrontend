ReactDOM.render( 
 
    <input placeholder="Text" />, 
    document.getElementById("app")); 
 
    const inputClick = () => console.log("Clicked") 
    const onMouseOver = () => console.log("Mouse Over") 
 
    const text = "Text" 
    const elem = (<div className='name'> 
    <h1>{text}</h1> 
    <input placeholder={text} 
    onClick ={inputClick} onMouseOver={onMouseOver}/> 
    <p>{text == "Text" ? "Yes" : "No"}</p> 
    </div>) 
const app = document.getElementById("app") 
 
ReactDOM.render(elem, app);