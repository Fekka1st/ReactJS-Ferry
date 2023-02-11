import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from 'antd';


const MovieList =()=>{
    const columns = [
        {
          title: 'Title',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Duration',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Genre',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Description',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Rating',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Review',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Image',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Year',
            dataIndex: 'address',
            key: 'address',
          },
        {
          title: 'action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>edit</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
      ];
    return(
        <>
            <h1>ini list Movie</h1>
            <Table columns={columns} dataSource={data} />
        </>
    )

}
export default MovieList