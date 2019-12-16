import React from "react";
import Notifications from "cb-react-notifications";
import "./App.scss";
// import "./styles.css";
import "./okrjoy-styles.scss";
import CustomComponent from "./CustomComponent/CustomComponent";
function App() {
  const markAllAsRead = () => {
    console.log("markAllAsRead");
  };
  const dataLink =
    "https://raw.githubusercontent.com/NaveenrajV/cb-notifications/master/Data.json";

  const data = {
    "1": {
      image:
        "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
      message: "Kameshwaran S had shared a feedback with you.",
      detailPage: "/"
    },
    "2": {
      image:
        "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
      message: "Kameshwaran S had shared a feedback with you.",
      detailPage: "/"
    }
    // "3": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // },
    // "4": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // },
    // "5": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // },
    // "6": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // }
  };

  return (
    <div className="App">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>
        <Notifications
          // renderItem={CustomComponent}
          data={data}
          header={{ title: "Notifications", option: "View All" }}
          displaySeeAll={false}
          markAllAsRead={markAllAsRead}
          links={{ seeAll: "/seeAll" }}
          classNamePrefix="okrjoy-"
          cardOptions={false}
        />
      </div>
      <div>Item 4</div>
      <div>Item 5</div>
    </div>
  );
}

export default App;
