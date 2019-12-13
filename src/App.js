import React from "react";
import Notifications from "cb-react-notifications";
import "./App.css";
import "./styles.css";
function App() {
  const markAllAsRead = () => {
    console.log("markAllAsRead");
  };
  const dataLink =
    "https://raw.githubusercontent.com/NaveenrajV/cb-notifications/master/Data.json";
  return (
    <div className="App">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>
        <Notifications
          data={dataLink}
          markAllAsRead={markAllAsRead}
          links={{ seeAll: "/seeAll" }}
          // classNamePrefix="notify-"
        />
      </div>
      <div>Item 4</div>
      <div>Item 5</div>
    </div>
  );
}

export default App;
