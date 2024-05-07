import React, { useEffect, useState } from "react";
import { Sheet } from "../../shared/interfaces";



const Sheets: React.FC = () => {
  const [sheets, setSheets] = useState([] as Sheet[]);

  useEffect(() => {
    fetch("/getSheets")
      .then((response) => response.json())
      .then((data) => setSheets(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="d-flex flex-wrap xs-mw-95 md-mw-75 justify-content-center">
      {sheets.map((sheet, index) => (
        // <div key={index}>
        //   <h2>{sheet.title}</h2>
        //   <p>{sheet.subject}</p>
        // </div>
        <div className="card m-3" style={{width: "18rem"}}>
          <img className="card-img-top" src={`${sheet.pdfUrl}`} alt="PDF sheet"></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/cart" className="btn btn-primary">Buy Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sheets;
