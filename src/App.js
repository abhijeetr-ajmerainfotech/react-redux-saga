import Header from "./components/Header";
import UserComponent from "./components/UserComponent";
import React, { useEffect } from "react";
import Zoho from "./components/Zoho";
function App() {
  const zohoFunc = () => {
    // return window.$zoho && window.$zoho.floatwindow.visible("show");
    return;
  };
  useEffect(() => {
    zohoFunc();
  }, []);

  return (
    <div className="App">
      <Header />
      <UserComponent />
      <Zoho />
    </div>
  );
}

export default App;
