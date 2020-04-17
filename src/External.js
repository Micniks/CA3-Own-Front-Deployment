import React, { useState } from "react";
import settingUrl from "./settings";

export function External() {
  const [norris, setNorris] = useState(<br/>);
  const [dad, setDad] = useState(<br/>);
  const [setup, setSetup] = useState(<br/>);
  const [punchline, setPunchline] = useState();
  const [showPunchline, setShowPunchline] = useState(true);
  
  const URL = settingUrl.externalApi();
  
  function fetchExternalApi() {
    let options = {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    fetch(URL, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDad(data.dadJoke);
        setNorris(data.chuckJoke);
        setSetup(data.jokeSetup);
        setPunchline(data.jokePunchLine);
        setShowPunchline(false);
      });
  }
  return (<div>
    <h1>External API</h1>
    <button onClick={fetchExternalApi}>Press to fetch from API's!</button>
    <h2>Chuck Norris joke: </h2>
    <p>{norris}</p>
    <h2>Dad joke:</h2>
    <p>{dad}</p>
    <h2>Joke: {!showPunchline && <button onClick={()=>{setShowPunchline(true)}}>Punchline please</button>}</h2>
    <p>{setup}</p>
    {showPunchline && <p>{punchline}</p>}
  </div>);
}
