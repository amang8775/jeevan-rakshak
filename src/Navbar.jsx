import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useNavigate } from 'react-router-dom';



function Navbar() {
     
    const navigate = useNavigate()  ;
    const loginRouteHandler = ()=>{
        navigate('/login') ; 
    }
    const registerRouteHandler = ()=>{
        navigate('/registration')
    }
    const contactRouteHandler = ()=>{
        navigate('/contactus')
    }
    const homeRouteHandler = ()=>{
        navigate('/')
    }
    const FAQRouteHandler = ()=>{
        navigate('/FAQ')
    }
    
const [ start, setStart ] = useState(new Date());
const [ end, setEnd ] = useState(new Date());
const [ eventName, setEventName ] = useState("");
const [ eventDescription, setEventDescription ] = useState("");

const session = useSession(); // tokens, when session exists we have a user
const supabase = useSupabaseClient(); // talk to supabase!
const { isLoading } = useSessionContext();

async function googleSignIn() {
    const { error } =  await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if(error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
 
  }
  async function signOut() {
    await supabase.auth.signOut();
  }
  async function signinn(){
    await googleSignIn();
    // navigate("/registration");
  }
    return (
        <nav
            className="w-full flex justify-between items-center p-[10px] px-[60px] lg:flex-row flex-col sticky lg:-top-[50px] rounded-lg border-b-2 bg-white opacity-90 backdrop-blur-sm z-50 -top-[180px]"
            id="nav"
        >
            <div
                className="flex hover:scale-105 transition-all duration-200 relative items-end w-[205px] hover:cursor-pointer" onClick={homeRouteHandler}
            >
                <img src="images/j.png" alt="" className="w-[60px]" />
                <div
                    className="text-[35px] font-bold text-[#000000] left-[46px] absolute tracking-wider"
                >
                    <span className="font-bold text-[#f45454]">eevan</span>Rakshak
                </div>
            </div>
            <div
                className="flex justify-center sticky lg:gap-10 gap-3 text-[18px] py-2 text-[#7C7C7C] font-semibold lg:flex-row flex-col"
            >
                <div className="hover:text-lightBlue transition-all duration-200 hover:cursor-pointer">
                    <div onClick={FAQRouteHandler}>FAQ</div>
                </div>
                <div className="hover:text-lightBlue transition-all duration-200">
                    <a onClick={homeRouteHandler} href="#aboutus">About Us</a>
                </div>
                <div className="hover:text-lightBlue transition-all duration-200 hover:cursor-pointer">
                    <div  onClick={contactRouteHandler}>Contact Us</div>
                </div>
            </div>
            <div
                className="flex lg:gap-5 gap-3 text-[#F7F5EB] text-[18px] font-semibold"
            >
            {session ?
          <>
           <button onClick={() => signOut()}  className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200">Sign Out</button>
          </>
          :
          <>
          <button
                    onClick={loginRouteHandler}
                    className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200"
                >
                    Login
                </button>
                <button
                    onClick={() => {signinn()}}
                    className="max-lg:w-[40vw] px-5 py-2 rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200"
                >   
                    Sign Up
                </button></>}
                
            </div>
        </nav>
    )
};
export default Navbar;