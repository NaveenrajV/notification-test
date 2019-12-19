import React from "react";
import Notifications from "cb-react-notifications";
import logo from "./cblogo.png";

import "./App.scss";
// import "./styles.css";
import "./okrjoy-styles.scss";
import CustomComponent from "./CustomComponent/CustomComponent";
import bell from "./bell.svg";
import MsgComponent from "./MsgComponent/MsgComponent";

function App() {
  const markAllAsRead = () => {
    console.log("markAllAsRead");
  };

  const dataLink =
    "https://raw.githubusercontent.com/NaveenrajV/cb-notifications/master/Data.json";

  const data1 = {
    "1": {
      image: logo,
      message: "Kameshwaran S had shared a feedback with you.",
      detailPage: "/"
    },
    "2": {
      image: logo,
      message: (
        <p>
          Kameshwaran S had shared a
          <span style={{ color: "#7ac2fa" }}>feedback</span> with you.
        </p>
      ),
      detailPage: "/"
    },
    "3": {
      image:
        "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
      message: <MsgComponent />,
      detailPage: "/"
    }
    // ,
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
    // }
    // ,
    // "6": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // },
    // "7": {
    //   image:
    //     "https://synergi-dev.s3.ap-southeast-1.amazonaws.com/profile-pictures/6b924382abac8a886ddf18d1b54b4aad-7eb8ac92ca10898bd6cc31ca6e356c45.png",
    //   message: "Kameshwaran S had shared a feedback with you.",
    //   detailPage: "/"
    // }
  };

  const data = {};
  return (
    <div className="App">
      <div>Item 1</div>
      <div>Item 2</div>
      {console.log(typeof bell)}
      <div>
        <Notifications
          // renderItem={CustomComponent}
          data={data1}
          header={{
            title: "Notifications",
            option: { name: "View All", onClick: markAllAsRead }
          }}
          displaySeeAll={false}
          links={{ seeAll: "/seeAll" }}
          classNamePrefix="okrjoy"
          cardOptions={false}
          icon={bell}
        />
      </div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>
        <Notifications data={dataLink} links={{ seeAll: "/seeAll" }} />
      </div>
    </div>
  );
}

export default App;
