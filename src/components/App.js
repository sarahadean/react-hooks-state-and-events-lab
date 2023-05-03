
import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const [stateVariable, setStateVariableFunction] = useState()
  const [isDarkMode, setDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"

  // function handleClick(){
  //   setDarkMode(!isDarkMode)
  // }

  function onDarkModeClick(){
    setDarkMode(!isDarkMode)
  }
  return (
    <div className={appClass}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header> */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
