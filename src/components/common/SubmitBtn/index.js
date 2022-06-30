// import "./style.css";
// import { Link } from "react-router-dom";
// export default function SubmitBtn({ path, name, onclick }) {
//   return (
//     //creator : nehorai, team f , enter the path with / and enter the function without ()
//     <div className="submit">
//       <Link to={path}>
//         <div type="button" onClick={(event) => onclick(event)}>
//           <div className="word">{name}</div>
//         </div>
//       </Link>
//     </div>  
//   );
// }

import "./style.css";
import { Link } from "react-router-dom";
export default function SubmitBtn({ path = "", name, type, click }) {
  switch (type) {
    case "submit":
      return (
        <button className="submit" type={type}>
          <div className="word">Submit</div>
        </button>
      );
    case "button":
      return (
        <button className="submit" type={type} onClick={click}>
          <div className="word">{name}</div>
        </button>
      );
    case "link":
      return (
        <Link className="submit" to={path}>
          <div className="word">{name}</div>
        </Link>
      );
  }
}

// creator : nehorai
// team f
// Available types: button, link, submit  
// on type submit you can't have a name