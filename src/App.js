import "./App.css";
import { useState } from "react";

// Component definition
export default function App() {
  // JS starts
  const users = [
    {
      name: "Karthik",
      pic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Nathiya",
      pic: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Infant",
      pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
    },
    {
      name: "Santhosh",
      pic: "https://1.bp.blogspot.com/-OUtpaIR5QhI/YTuyWw8XvtI/AAAAAAAAuUk/ZtNLZvNSoL8pyaYESOjwReXEhYu1zFltgCLcBGAsYHQ/s1536/Best-Profile-Pic-For-Boys%2B%252813%2529.jpg",
    },
  ];

  const people = ["Karithk", "Nathiya", "Infant", "Honest", "Vani"];

  // JS ends
  // JSX starts
  // DRY - Dont repeat yourself
  return (
    <div className="App">
      {users.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}

      {/* {people.map((personName) => (
        <Welcome name={personName} />
      ))} */}

      {/* <Counter />
      <Counter />
      <Counter /> */}
    </div>
  );
  // JSX ends
}

// hook is function - starts with 'use'
//  useState
// state - current scenario - current data
// const [state, setState] = useState(InitialValue) ;
// setState - Informs React state is changed - re-render (updating)
function Counter() {
  // let like1 = 10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      {/* onClick - camelCase */}
      <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button>
      <button className="btn-dislike" onClick={() => setDisLike(disLike + 1)}>
        👎 {disLike}
      </button>
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Welcome, {name} 👋😎🎉🎉🤩</h1>
      <Counter />
    </div>
  );
}

function Welcome({ name }) {
  return (
    <div>
      <h1>Hi, {name} 👋😎🎉🎉</h1>
    </div>
  );
}

// function Welcome(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hi, {props.name} 👋😎🎉🎉</h1>
//     </div>
//   );
// }

// props - (like arguments in function)

// Component Msg
// 1. first letter must be capital
// 2. Return only one JSX element
// function Msg(props) {
//   return (
//     <div>
//       <img className="profile-pic" src={props.pic} alt={props.name} />
//       <h1>Hi, {props.name} 👋😎🎉🎉</h1>
//     </div>
//   );
// }

// JSX  5 - 8 | JavaScript XML
// JSX -> Webpack + Babel ->  JS
// App()

// App - component
// template syntax - {}
