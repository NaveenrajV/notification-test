import React from "react";
import Notifications from "cb-react-notifications";
import logo from "./cblogo.png";

import "./App.scss";
// import "./styles.css";
import "./okrjoy-styles.scss";
import CustomComponent from "./CustomComponent/CustomComponent";
import bell from "./bell.svg";
import user from "./user.svg";
import settings from "./gear.svg";
import MsgComponent from "./MsgComponent/MsgComponent";

function App() {
  const markAllAsRead = () => {
    console.log("markAllAsRead");
  };

  const fetchData = () => {
    console.log(" fetch data");
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
      <div className="title">
        <img
          src={
            "https://pbs.twimg.com/profile_images/643394241616478209/GE-7kygE_400x400.png"
          }
        />
      </div>

      <div className="items">
        <div>
          <Notifications
            data={dataLink}
            fetchData={fetchData}
            links={{ seeAll: "/seeAll" }}
          />
        </div>

        {/* <div>
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
        </div> */}

        <div>
          <img
            src={
              "https://files.slack.com/files-pri/T02EG6DGW-FS2ATS32S/54b6eb343b72fe4b42129586ffc55615-5df66f45f311c9664c36f4c4cbcfe80a.png"
            }
            alt="users"
          />
        </div>

        {/* <div>
        <img src={settings} alt="settings" />
      </div> */}
      </div>
    </div>
  );
}

export default App;
