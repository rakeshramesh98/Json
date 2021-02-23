import React from 'react'
import './App.css';

function App() {
  const data= [
    {
      "component": "button",
      "block": true,
      "danger": true,
      "disabled": true,
      "ghost": true,
      "href":"",
     },
    {
      "component": "Elana",
      "lastName": "Ricioppo",
      "username": "ericioppo1",
      "email": "ericioppo1@timesonline.co.uk",
      "passsword": "S7p9ReUoQe"
    },
    {
      "component": "Bentlee",
      "lastName": "Decourt",
      "username": "bdecourt2",
      "email": "bdecourt2@about.me",
      "passsword": "MWU9hc"
    },
    {
      "component": "Hyacintha",
      "lastName": "Choudhury",
      "username": "hchoudhury3",
      "email": "hchoudhury3@va.gov",
      "passsword": "kRtWP1"
    },
    {
      "component": "Ari",
      "lastName": "Spedroni",
      "username": "aspedroni4",
      "email": "aspedroni4@sun.com",
      "passsword": "o78ibUPPmDlZ"
    },
    {
      "component": "Abelard",
      "lastName": "Rodriguez",
      "username": "arodriguez5",
      "email": "arodriguez5@shutterfly.com",
      "passsword": "g2jd4AwfpA"
    },
    {
      "component": "Ikey",
      "lastName": "Latek",
      "username": "ilatek6",
      "email": "ilatek6@berkeley.edu",
      "passsword": "GAsgPpKvJx"
    },
    {
      "component": "Justis",
      "lastName": "Habbeshaw",
      "username": "jhabbeshaw7",
      "email": "jhabbeshaw7@simplemachines.org",
      "passsword": "GN2aQt3ZPq"
    },
    {
      "component": "Maddie",
      "lastName": "Bayne",
      "username": "mbayne8",
      "email": "mbayne8@constantcontact.com",
      "passsword": "H1GmQcyG6"
    },
    {
      "component": "Gerrie",
      "lastName": "Rulton",
      "username": "grulton9",
      "email": "grulton9@reverbnation.com",
      "passsword": "tcwp6oONe"
    }
  ]
  function entry(){
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value.component}`);
    }
  }
  entry()
  return (
    <div className="App">
      {data.map((det,i)=>{
        const {component,...props}=det;
        if(component==='button'){
          return (
            <Button {...props}>Primary Button</Button>
            )
        }
      })}
    </div>
  );
}

export default App;
