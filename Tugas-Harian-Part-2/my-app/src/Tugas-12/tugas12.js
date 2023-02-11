import React, {useState, useEffect} from "react"
import axios from "axios"

  const Peserta= () =>{
    const [pesertaLomba, setPesertaLomba] =  useState([])
    const [inputName, setInputName] =  useState("")
    const [inputCourse, setInputCourse] =  useState("")
    const [inputScore, setInputScore] =  useState("")
    const [currentId, setCurrentId] =  useState(-1)
  
    useEffect( () => {
      const fetchData = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
  
        setPesertaLomba(result.data.map(x=>{ return {id: x.id, name: x.name, course: x.course, score: x.score} }) )
      }
        
      fetchData()
    }, [])
    
    const handleEdit = (event) =>{
        let idPeserta = event.target.value
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`)
        .then(res => {
          let data = res.data
          setInputName(data.name)
          setInputCourse(data.course)
          setInputScore(data.score)
          setCurrentId(data.id)
        })
      }
    
      let scores = (item) =>{
          if(item.score>= 80 && item.score<= 100){
              return "A";
          }else if(item.score>= 70 && item.score<= 79){
            return "B";
        }else if(item.score>= 60 && item.score<= 69){
            return "C";
        }else if(item.score>= 50 && item.score<= 59){
            return "D";
        }else if(item.score>= 0 && item.score<= 49){
            return "E";
        }
      }

      const handleDelete = (event) =>{
        let ID_STUDENT = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${ID_STUDENT}`)
        .then(() => {
          let newPesertaLomba = pesertaLomba.filter(el=> {return el.id !== ID_STUDENT})
          setPesertaLomba(newPesertaLomba)
        })
      }

      const handleChangeName = (event) =>{
        let inputValue = event.target.value
        setInputName(inputValue)
      }

      const handleChangeCourse = (event) =>{
        let inputValue = event.target.value
        setInputCourse(inputValue)
      }

      const handleChangeScore = (event) =>{
        let inputValue = event.target.value
        setInputScore(inputValue)
      }

      const handleSubmit = (event) =>{
        event.preventDefault()
    
        if (currentId === -1){
          // untuk create data baru
          axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputName, course: inputCourse, score: inputScore})
          .then(res => {
              let data = res.data
              setPesertaLomba([...pesertaLomba, {id: data.id, name: data.name, score: data.score, course: data.course}])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputName, course: inputCourse, score: inputScore})
          .then(() => {
              let singlePeserta = pesertaLomba.find(el=> el.id === currentId)
              singlePeserta.name= inputName
              singlePeserta.course= inputCourse
              singlePeserta.score= inputScore
              setPesertaLomba([...pesertaLomba])
          })      
        }
        setInputName("")
        setInputCourse("")
        setInputScore("")
        setCurrentId(-1)
      }

    return(
      <>
        { pesertaLomba !== null &&
          (<div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
            <h1>Daftar Nilai Mahasiswa</h1>
            <table className="peserta-lomba">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Mata Kuliah</th>
                  <th>Nilai</th>
                  <th>Indeks Nilai</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                  {
                    pesertaLomba.map((item, index)=>{
                      return(                    
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.course}</td>
                          <td>{item.score}</td>
                          <td>{scores(item)}</td>
                          <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
          
          </div>)
        }

            {/* Form */}
            <h1 style={{textAlign: "center"}}>Form Nilai Mahasiswa</h1>
            <form method="post" id="jarak" onSubmit={handleSubmit}>
            <label id="bold">Nama</label>
            <input required type="text" name="nama" value={inputName} onChange={handleChangeName}/>
 
            <label id="bold">Mata Kuliah</label>
            <input required type="text" name="course" value={inputCourse} onChange={handleChangeCourse}/>
 
            <label id="bold">Nilai</label>
            <input required type="number" name="score" min="0" max="100" value={inputScore} onChange={handleChangeScore}/>

             <input type="submit" value="Submit"/>
             </form>
        
      </>
      
    )
  }
  
  export default Peserta