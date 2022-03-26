
import Button from "./Button"
const Header = ({onAdd , showAdd}) => {

  return (
    <header className="header">
        <h1>
        {/* <h1 style={headingStyle}> styling by declaring as objects */}
        {/* <h1 style={{color:'red', backgroundColor:"black"}}> inline styling CSS */}
            Task Tracker
        </h1>
        <Button color={showAdd ? 'red':'green'} text="Add" onClick={onAdd} showAdd = {showAdd} /> {/* use props to implement color text properties inside button function */}
    </header>
  )
}
// Header.defaultProps = {
//     title: "Task tracker"
// }


// const headingStyle = {
//     color:'red', 
//     backgroundColor:"black"
// }


export default Header