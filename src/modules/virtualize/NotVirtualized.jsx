import React from 'react';
import { Button } from 'antd';
import datas from './datas';

const NotVirtualized = () => {
  const [tableDatas, setTableDatas] = React.useState(datas.concat(datas).concat(datas));

  const sortTable = () => {
    setTableDatas((list) => [...list].reverse());
  };

  return (
    <div>
      <center style={{ padding: '200px' }}>
        <table style={{ display: 'block', maxHeight: '300px', border: '1px solid black', overflowY: 'scroll' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableDatas.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.random}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Button style={{ marginTop: '20px' }} onClick={sortTable}>
          Reverse table
        </Button>
      </center>
    </div>
  );
};

export default NotVirtualized;
