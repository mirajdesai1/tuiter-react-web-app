import React from "react";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import navReducer from "./reducers/nav-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

const store = configureStore(
  { reducer: { who: whoReducer, tuitsData: tuitsReducer, nav: navReducer } });

function Tuiter({active = "home"}) {
  const renderComponent = (a) => {
    switch (a) {
      case "home":
        return <HomeComponent />;
      case "explore":
        return <ExploreComponent />;
      default:
        return <HomeComponent />;
    }
  };
  
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active={active} />
          </div>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6"
            style={{ "position": "relative" }}>
            {renderComponent(active)}
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default Tuiter;