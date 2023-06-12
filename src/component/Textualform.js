import React, { useState } from "react";

function Texxtform(props) {
  const [text, setText] = useState("DEFAULT TEXT");
  let handleChange = (event) => {
    // console.log("Tried to change value of text area" + event.target.value);
    let newtext = event.target.value;
    setText(newtext);
    document.getElementById("foundmails").innerHTML = "Click on find mail to extract mail.";
  };
  let toupper = () => {
    setText(text.toUpperCase());
    props.triggerAlert("Text converted to uppercase.", "success");
  };
  let tolower = () => {
    setText(text.toLowerCase());
    props.triggerAlert("Text converted to lowercase.", "success");
  };
  let mails = [];
  let findmails = () => {
    let words = text.split(" ");
    for (let a = 0; a < words.length; a++) {
        if (words[a].endsWith("@gmail.com")) {
            mails.push(words[a]);
        }
    }
    if(mails.length===0)
    {
      document.getElementById("foundmails").innerHTML = "Sorry ! no mails were found in the text";
      props.triggerAlert("No Emails were found in the text", "danger");
    }
    else
    {
      document.getElementById("foundmails").innerHTML = "Found mails are: " + mails.join(", ");
      props.triggerAlert("Emails have been extracted from the text below.", "success");
    }
  };

  let handleClearText = ()=>
  {
    setText("");
    props.triggerAlert("Text Cleared", "success");
  }
  let handleCopyToClipboard = ()=>
  {
   let aa = document.getElementById("exampleFormControlTextarea1");
    aa.select();
    navigator.clipboard.writeText(text);
    props.triggerAlert("Text copied to clipboard.", "success");
  }
  let handleExtraSpace = ()=>
  {
    let wordarray = text.split(/\s+/g);
    // setText(text.replace(/\s+/g,' ').trim());
    let finaltext = wordarray.join(" ");
    finaltext = finaltext.replaceAll(" .", ".");
    setText(finaltext);
    props.triggerAlert("Extra spaces have been removed.", "success");
  }
  let handleFirstWordCapital = ()=>
  {
    let wordarray= text.split(/\s+/g);
    if((wordarray[0]) !=="")
    {
      for(let i = 0; i<wordarray.length; i++)
    {
      let word = wordarray[i];
      let finalword = word.replace(word[0], word[0].toUpperCase());
      wordarray[i] = finalword;
    }
    }
    setText(wordarray.join(" "));
    props.triggerAlert("First letter of each word have been converted to capital letter.", "success");
  }
  return (
    <>
      <div className="container" >
        <h1>Enter the text below</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          row="50"
          col="100"
          value={text}
          onChange={handleChange}
          style = {props.mode}
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={toupper} style={props.mode}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={tolower} style={props.mode}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={findmails} style={props.mode}>
          Find email addresses
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText} style={props.mode}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyToClipboard} style={props.mode}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace} style={props.mode}>
          Remove Extra spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleFirstWordCapital} style={props.mode} >
          First Word Capital
        </button>


        <h4>Text Summary</h4>
        <p>
          {
            text.split(" ").filter(function (n) {
              return n !== "";
            }).length
          }{" "}
          words {text.length} characters {text.length / 125} mintues read
        </p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter text in the textarea to preview"}</p>
        <h5>Found Mails</h5>
        <p id="foundmails">{text.length>0?"Click on find mails button to extract mails.":"Enter text in the textarea to find mails."}</p>
      </div>
    </>
  );
}
export default Texxtform;
