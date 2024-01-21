import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Charts from "./pages/charts/Charts";
import BarChartPage from "./pages/barChartPage/BarChartPage";
import PieChartPage from "./pages/pieChartPage/PieChartPage";
import LineChartPage from "./pages/lineChartPage/LineChartPage";
import RadarChartPage from "./pages/radarChartPage/RadarChartPage";
import Setting from "./pages/setting/Setting";
import Profile from "./pages/profile/Profile";
import Logout from "./pages/logout/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/charts" element={<Charts />} />
          </Route>

          <Route path="users">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>

          <Route path="/barchart" element={<BarChartPage />} />
          <Route path="/donutchart" element={<PieChartPage />} />
          <Route path="/linechart" element={<LineChartPage />} />
          <Route path="/radarchart" element={<RadarChartPage />} />

          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
