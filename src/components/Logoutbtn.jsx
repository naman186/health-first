import { logout } from "../store/authslice";
import { useDispatch } from "react-redux";
import authService from '../appwrite/auth.js'; 
function Logoutbtn({children}) {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=> {
            dispatch(logout()); //this will remove the user from the store as usko inst mil jayenge ki ye nikal gya hai
        })  //why we do not use user in params? because logout already has the context of the user who is logged in, 
    }

    const loginHandler = () => {
        authService.login().then((user) => {
            dispatch(login(user));
        }) // but isme user lagega cuz when logging in we need context of user
    }

    return (
        <button onClick={logoutHandler} className="bg-blue-500 text-white border-2 rounded-2xl px-4 py-2 ">
            {children}
        </button>
    );

}
export default Logoutbtn;