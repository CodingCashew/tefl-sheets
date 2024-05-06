import React, { useEffect, useState } from 'react';

const dummySheetArray = [
  {
    id: 1,
    name: 'Sheet 1',
    description: 'This is the first sheet',
  },
  {
    id: 2,
    name: 'Sheet 2',
    description: 'This is the second sheet',
  },
  {
    id: 3,
    name: 'Sheet 3',
    description: 'This is the third sheet',
  },
];

const Sheets: React.FC = () => {
  const [sheets, setSheets] = useState(dummySheetArray);

  useEffect(() => {
    fetch('/getSheets')
      .then(response => response.json())
      .then(data => setSheets(data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <div>
      {sheets.map((sheet, index) => (

          <div key={index}>
            <h2>{sheet.name}</h2>
            <p>{sheet.description}</p>
          </div>
      )
      )}
    </div>
  );
}

export default Sheets;