import { SplitScreen } from "./Layout/splitScreen";
import LeftNavbar from "./Layout/leftNavbar";
import MainView from "./Layout/mainView";
// import Signin from "./Auth/signIn";

const LeftHandComponent = () => {
  return <LeftNavbar></LeftNavbar>;
};
const RightHandComponent = () => {
  return <MainView></MainView>;
};

function App() {
  return (
    <div>
      {/* <Signin></Signin> */}
      <SplitScreen leftWeight={2} rightWeight={8}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </div>
    // <div>
    //   <header>
    //     <TopNavbar></TopNavbar>
    //     <div className="layout-display">
    //       <div className="layout-sidebar">
    //         <SideNavbar></SideNavbar>
    //       </div>
    //       <div className="layout-mainview">
    //         <MainView></MainView>
    //       </div>
    //     </div>
    //     <h1>Harsha Perabathula</h1>
    //   </header>
    // </div>
  );
}

export default App;
