import React from 'react'

export default function About(props) {
    // const [Stylevar, setStylevar] = useState({
    //     color:"black",
    //     backgroundColor: "white"
    //   });

      // let handleflip = ()=>
      // {
      //   if(props.mode.color === "black")
      //   {
      //       setStylevar({
      //           color:"white",
      //   backgroundColor: "black",
      //   border:"2px solid white"
      //       })
      //       setOption("Enable Light Mode");
      //   }
      //   else
      //   {
      //       setStylevar({
      //           color:"black",
      //   backgroundColor: "white"
      //       })
      //       setOption("Enable Dark Mode");
      //   }
      // }
      // const [option, setOption] = useState("Enable Dark Mode");
      // document.querySelectorAll("selectAll").style.backgroundColor = "red";
      let borderstyle = {border:"3px solid white"};
      //Even const variable value changes when it is assigned to a state and the state value changes.
      // const aaas = props.mode;
      // console.log(aaas);
  return (
    <>
    <div id = "main">
    <div className = "container" style = {props.mode}>
    {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{option}</label>
</div> */}

    <div className="accordion" id="accordionExample" style = {props.mode}>
  <div className="accordion-item" style = {props.ss===true?(Object.assign(borderstyle, props.mode)):props.mode}>
    <h2 className="accordion-header" id="headingOne" style = {props.mode} >
      <button className="accordion-button" style = {props.mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style =  {props.ss===true?(Object.assign(borderstyle, props.mode)):props.mode}>
    <h2 className="accordion-header" id="headingTwo">
      <button style = {props.mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style =  {props.ss===true?(Object.assign(borderstyle, props.mode)):props.mode}>
    <h2 className="accordion-header" id="headingThree">
      <button style = {props.mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}
