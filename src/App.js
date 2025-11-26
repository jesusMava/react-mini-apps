// import logo from "./logo.svg";
// import "./App.css";
// import StarRating from "./StarRating";
// import colorData from "./color-data.json";
// import { useState } from "react";
// import ColorList from "./ColorList";
// import AddColorForm from "./AddColorForm";
// import { v4 } from "uuid";
// import CheckBox from "./Checkbox";
// import { GraphQLClient } from "graphql-request";

// function App() {
//   const [colors, setColors] = useState(colorData);

//   const query = `
//     query findRepos($login:String!) {
//       user(login:$login) {
//         login
//         name
//         location
//         avatar_url: avatarUrl
//         repositories(first:100) {
//           totalCount
//           nodes {
//             name
//           }
//         }
//       }
//     }
//     `;

//     const client = new GraphQLClient(
//       "https://api.github.com/graphql",
//       {
//         headers: {
//           Authorization: `Bearer <PERSONAL_ACCESS_TOKEN>`
//         }
//       }
//       );

//       client
//         .request(query, { login: "moontahoe" })
//         .then(results => JSON.stringify(results, null, 2))
//         .then(console.log)
//         .catch(console.error);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         and save to reload.
//         <CheckBox />
//         {/* <StarRating totalStars={5} 
//           style={{backgoundColor: "lightblue"}}
//           onDoubleClick={e => alert("Double clicked!")}
//         />

//         <ColorList />

//         <AddColorForm /> */}
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, redirect } from "react-router-dom";
import {
Home,
About,
Events,
Products,
Contact,
Services,
History
} from "./pages";
import { Whoops404 } from "./Whoops404";

function App() {
  return (
  <div>
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="services" element={<Services />} />
        <Route path="history" element={<History />} />
      </Route>

    <Route path="/events" element={<Events />} />
    <Route path= "/products" element={<Products />} />
    <Route path= "/contact" element={<Contact />} />
    {/* Se ocupa el * para algun router que no es encontrado */}
    <Route path="*" element={<Whoops404/>} />
  </Routes>
  </div>
  );
}
export default App;