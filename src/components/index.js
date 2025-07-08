import Header from "./container/Header.jsx";
import Home from "./container/Home.jsx";
import Footer from "./container/Footer.jsx";
import BookAppointment from "./container/BookAppointment.jsx";
import { Outlet } from "react-router";
import Logoutbtn from "./Logoutbtn";
import InputBox from "./InputBox";
import Button from "./Button";
import AuthLayout from "./AuthLayout";
import Login from "./container/Login.jsx";
import App from "../App.jsx";
import Signup from "./container/Signup.jsx";  
import SearchPage from "./container/Search.jsx";
import Profile from "./container/UserProfile.jsx";
import DoctorHome from "./container/DoctorHome.jsx"


export {
  Header,
  Logoutbtn,
  App,
  AuthLayout,
  Home,
  InputBox,
  Button,
  Footer,
  BookAppointment,
  Outlet,
  Signup,
  Login,
  SearchPage,
  Profile,
  DoctorHome
};