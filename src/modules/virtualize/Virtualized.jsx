import React from 'react';
import { Table, Column } from 'react-virtualized';
import { Button } from 'antd';
import datas from './datas';

const Virtualized = () => {
  const [tableDatas, setTableDatas] = React.useState(datas.concat(datas).concat(datas));

  const sortTable = () => {
    setTableDatas((list) => [...list].reverse());
  };

  return (
    <center style={{ padding: '200px' }}>
      <Table
        list={tableDatas}
        width={400}
        height={300}
        headerHeight={20}
        rowHeight={30}
        rowCount={tableDatas.length}
        rowGetter={({ index }) => tableDatas[index]}
        style={{ border: '1px solid black' }}
      >
        <Column label="Name" dataKey="name" width={100} />
        <Column width={200} label="Description" dataKey="random" />
      </Table>
      <Button style={{ marginTop: '20px' }} onClick={sortTable}>
        Reverse table
      </Button>
    </center>
  );
};

export default Virtualized;
