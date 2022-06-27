import "./box.css";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
function Box1() {
  const button = [
    { name: "Train Reading", icon: icon1 },
    { name: "Train Focus", icon: icon2 },
    { name: "Weekly Assessment", icon: icon3 },
    { name: "Freestyle", icon: icon4 },
  ];
  // yishai
  return (
    <>
     
      <div className="grid-container">
        <>
      {button.map((v) => {
                return (
          <div>
            <div className=" box  boxbehind"></div>
            <div className="box box1" onClick={(e) => console.log("df")/* props.func(v.name) */ }>
              <div className="icon1">
                <img src={v.icon} alt="book" />{" "}
              </div>

              <div className="namebox">{v.name}</div>
            </div>
          </div>
          
          );
        })}
    </>

        </div>
    </>
  );
}

export default Box1;
