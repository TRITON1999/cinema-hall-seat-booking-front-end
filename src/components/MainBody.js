import "./MainBody.css";
import React,{useState} from "react";
import Seat from "./Seat";
import datass from './datas.json';

const MainBody = () => {
  const [datas, setDatas] = useState(datass)
  const [count,setCount] = useState(0)
  let data=datas
  
  const handleNumClick = (row, id) => {
    let val = document.querySelector("select").value
    // let count = 0
    for(let i=0;i<data[row].length;++i){
      if(data[row][i].num===id){
        data[row][i].selected=true;
        setCount(count+1)
        break;
      }
    }
      console.log(count)
    setDatas(data)
  }

  return (
    <div className="MainBody">
      <h1>PREMIUM-RS - 470</h1>
      <hr />
      <div className="premium">
        {["K", "J", "I"].map((x) => {
          return (
            <div className="grided">
              <div>{x}</div>{" "}
              {datas[x].map((p) => {
                if (p.num === 0) return <div></div>;
                else
                  return <Seat selected = {p.selected} handleNumClick={handleNumClick} row={p.row} num={p.num} disable={p.disable} />;
              })}
            </div>
          );
        })}
      </div>
      <h1>EXECUTIVE-RS - 450</h1>
      <hr />
      <div className="executive">
        {["H","G","F","E", "D", "C"].map((x) => {
          return (
            <div className="grided">
              <div>{x}</div>{" "}
              {datas[x].map((p) => {
                if (p.num === 0) return <div></div>;
                else
                  return <Seat selected = {p.selected} handleNumClick={handleNumClick} row={p.row} num={p.num} disable={p.disable} />;
              })}
            </div>
          );
        })}
        </div>
      <h1>NORMAL-RS - 430</h1>
      <hr />
      <div className="normal">
      {["B", "A"].map((x) => {
          return (
            <div className="grided">
              <div>{x}</div>{" "}
              {datas[x].map((p) => {
                if (p.num === 0) return <div></div>;
                else
                  return <Seat selected = {p.selected} handleNumClick={handleNumClick} row={p.row} num={p.num} disable={p.disable} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainBody;
