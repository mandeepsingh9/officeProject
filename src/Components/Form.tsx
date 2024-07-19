import { useState } from "react";

const Form = () => {
  const [usdt, setUsdt] = useState("");
  const [ftm, setFtm] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    if (name === "usdt") {
      setUsdt(value);
    } else if (name === "ftm") {
      setFtm(value);
    }
  };

  const getInputStyle = (data:any ) => ({
    color: data && parseFloat(data) < 100 ? "red" : "white",
  });

  return (
    <form className="form">
      <div className="FormChild">
        <div className="formLabel">
          <label>USDT</label>
          <label>Available 0000</label>
        </div>
        <div>
          <input
            type="text"
            name="usdt"
            value={usdt}
            onChange={handleChange}
            style={getInputStyle(usdt)}
          />
        </div>
        <span>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </span>
      </div>
      <div className="FormChild">
        <div className="formLabel">
          <label>FTM</label>
          <label>Available 0000</label>
        </div>
        <div>
          <input
            type="text"
            name="ftm"
            value={ftm}
            onChange={handleChange}
            style={getInputStyle(ftm)}
          />
        </div>
        <span>
          <label>0%</label>
          <label>25%</label>
          <label>50%</label>
          <label>75%</label>
          <label>MAX</label>
        </span>
      </div>
    </form>
  );
};

export default Form;
