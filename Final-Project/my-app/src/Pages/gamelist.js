import { Table, Tag, Space,Button  } from 'antd';
import { useContext, useEffect } from 'react';
import { GameContext } from '../Context/GameContext';
import { useHistory} from "react-router"

import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined , CheckCircleTwoTone,CloseCircleOutlined } from '@ant-design/icons';

const Gamelist=()=>{
    let history = useHistory()
    const{functions,state} = useContext(GameContext)
    let {fetchData, functionDelete,functionEdit}= functions
    let {fetchStatus,setFetchStatus,dataGame,setDataGame} = state
    useEffect(()=>{
            if(fetchStatus){
                fetchData()
                setFetchStatus(false)
            }

    },[fetchStatus,setFetchStatus])

     const handleDelete = (event) => {
        let IdData= parseInt(event.currentTarget.value)
        functionDelete(IdData)
       
    }

    const handleEdit = (event) => {
        let IdData= parseInt(event.currentTarget.value)
        history.push(`/gamelist/form/${IdData}`)
    }
    
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Image',
          
            render: (e, index) => (
                <>
                <img alt="example" style={{
                     width: "50%",
                     height: "50%",
                     objectfit:"cover"
                }} src={e.image_url}/> 
               </>
            )
        },
        {
          title: 'Release',
          dataIndex: 'release',
          key: 'release',
        },
        {
          title: 'Platform',
          key: 'platform',
          dataIndex: 'platform',
        },
        {
            title: 'SinglePlayer',
            render: (e, index) => (
              <> 
              {
                e.singlePlayer  === 1 ? <>
                <CheckCircleTwoTone twoToneColor="#52c41a" style={{height:"100px",width:"100px"}}/>
                </>:<CloseCircleOutlined twoToneColor="#FF007F" style={{height:"100px",width:"100px"}}/>
              }
              
             </>
            )
          },
          {
            title: 'Multiplayer',
            render: (e, index) => (
              <> 
              {
                e.multiplayer  === 1 ? <>
                <CheckCircleTwoTone twoToneColor="#52c41a" style={{height:"100px",width:"100px"}}/>
                </>:<CloseCircleOutlined twoToneColor="#FF007F" style={{height:"100px",width:"100px"}}/>
              }
              
             </>
            )
          },
          {
            title: 'Action',
            key: 'action',
            render: (res, index) => (
             <div className>
             <Button onClick={handleEdit} value={res.id}><EditOutlined/></Button>
             <br/>
             <br/>  
             <Button onClick={handleDelete} value={res.id} style={{}}><DeleteOutlined/></Button>
             </div> 
            ), 
        }
      ];
      
      const data = dataGame
      return(
          <>
         <Table columns={columns} dataSource={data} />
          </>
      )
}

export default Gamelist
