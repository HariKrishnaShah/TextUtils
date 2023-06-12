import './App.css';
import About from './component/About';
import Navbar from './component/Navbar'
import Textualform from './component/Textualform';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
function App() {
  const [alert, setAlert] = useState(null);
  const triggerAlert = (msg, type)=>
  {
    setAlert({msg:msg, type:type});
    setTimeout(()=>{setAlert(null)}, 1800);
  }
  const [darkMode, setMode] = useState(false);
  const [myStyle, setmyStyle] = useState(null);
  // //Template Literals example
  // let name = "Hari";
  // let tt = `I am ${name}`;
  // console.log(tt);
  let toggleMode = ()=>
  {
    if(darkMode === false)
    {
      setmyStyle({backgroundColor:"black", color:"white", borderColor:"white"});
      setMode(true);
      triggerAlert("Dark Mode is turned on", "sucess");
      document.title = "TextUtils - Dark Mode";
      document.getElementById("iconBox").href = "darktext.png"
    }
    else
    {
      setmyStyle(null);
      setMode(false);
      triggerAlert("Dark Mode is turned off.", "sucess");
      document.title = "TextUtils";
      document.getElementById("iconBox").href = "newfavicon.ico";
    }
  }
  const [colorMode, setColorMode] = useState("white");
  let changeColor = (event)=>
  {
    let bg = event.target.value;
    console.log("The current color is " + bg);
    if(bg === "purple" && colorMode !== "purple")
    {
      setColorMode("purple");
      setmyStyle({backgroundColor:"purple", color:"white"});
      triggerAlert("Purple Theme is activated.", "sucess");
      document.title = "TextUtils - Purple Mode";
    }
    else if(bg === "orange" && colorMode !== "orange")
    {
      setColorMode("orange");
      setmyStyle({backgroundColor:"orange", color:"white"});
      triggerAlert("Orange Theme is activated.", "sucess");
      document.title = "TextUtils - Orande Mode";
    }
    else if(bg === "yellow" && colorMode !== "yellow")
    {
      setColorMode("yellow");
      setmyStyle({backgroundColor:"yellow", color:"red"});
      triggerAlert("Yellow Theme is activated.", "sucess");
      document.title = "TextUtils - Yellow Mode";
    }
    else if(bg === "white" && colorMode !== "white")
    {
      setColorMode("white");
      setmyStyle({});
      triggerAlert("Light Theme has been activated.", "sucess");
      document.title = "TextUtils";
    }
    else{
      setmyStyle(null);
      setColorMode("white");
      triggerAlert("Light Theme is activated.", "sucess");
      document.title = "TextUtils";
  }
  setMode(false);
}
setInterval(()=>
{document.title = "TextUtils"}, 
1000);
setInterval(()=>
{
  document.title = "Install TextUtils Now";
}, 1500);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (<Textualform mode = {myStyle} triggerAlert = {triggerAlert}/>),
//   },
//   {
//     path: "/about",
//     element: (<About mode = {myStyle} ss={darkMode} />),
//   },
// ]);
// createRoot(document.getElementById("changing")).render(
//   <RouterProvider router={router} />
// );

if(myStyle === null)
{
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
else{
  document.body.style.backgroundColor = myStyle.backgroundColor;
document.body.style.color = myStyle.color;
}
// Object.assign(document.body.style, xx);
  return (
    <>
    <div id = "first" style = {myStyle}>
      {/* <Navbar title = "WWE"  home = "Ghar" /> */}
    {/* <Navbar /> */}
    {/* <Navbar home = "Ghar" title = "Nepal" /> */}
    {/* <Navbar home = "Ghar" title = {89} /> */}
    {/* <Navbar title = "TextUtils" home = {28} /> */}
    <Navbar mode = {myStyle} clickChange = {toggleMode} changeColor = {changeColor} alert = {alert} darkMode = {darkMode} about = "About US"/>
    {/* using router to show the content */}
    {/* <Textualform mode = {myStyle} triggerAlert = {triggerAlert}/>
    <About mode = {myStyle} ss={darkMode} /> */}
      <Routes>
        {/* <Route path = "/" element = {
        <><Textualform mode = {myStyle} triggerAlert = {triggerAlert} />
        <About mode = {myStyle} ss={darkMode} />
        </>
      }></Route> */}
      <Route path = "/" element = {<Textualform mode = {myStyle} triggerAlert = {triggerAlert} />}></Route>
        <Route path = "/about" element = {<About mode = {myStyle} ss={darkMode} />}></Route>
        <Route path="*" element={<Textualform mode = {myStyle} triggerAlert = {triggerAlert} />} />
      </Routes>
    </div>
    </>
  );
}


export default App;
