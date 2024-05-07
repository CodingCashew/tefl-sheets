import React from 'react';
import { useParams } from 'react-router-dom';

const Sheet: React.FC = () => {
  const {sheetId} = useParams<{sheetId: string}>();
  return (
    <div>
      <h1>Welcome to the Sheet Page</h1>
      <h1>{sheetId}</h1>
    </div>
  );
}

export default Sheet;