import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./components/Header";
import Views from "./Views/index";
import Sidebar from "components/Sidebar";
import {
  AppLayout,
} from '@cloudscape-design/components';
// import "./assets/styles/CloudscapeGlobalstyle.css"
function App() {
  return (
    <Router>
  <Header/>
    <AppLayout
    headerSelector="#header"
 headerVariant="high-contrast"
 navigationWidth={250}
//  disableContentPaddings
    navigation={
      
      <Sidebar/>
    
    }
    toolsHide={true}
    content={
<MainContent/>
    }
  />
     </Router>
  );
}
function MainContent() {
  return (
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
  );
}
export default App;

