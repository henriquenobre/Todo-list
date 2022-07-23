import { Header } from "./components/Header"
import Clipboard from './assets/clipboard.svg'
import Trash from './assets/trash.svg'
import Plus from './assets/plus.svg'
import './style.css'
import { useState } from "react"

function App() {
  const [taskList,setTaskList] = useState<any>([])
  const [taskListEmpty,setTaskListEmpty] = useState(false)

  function createAction(e:any){
    e.preventDefault()
    setTaskList([
      ...taskList,
      {
        text:e.target[0].value,
        class: 'taskList'
      }
    ])
    setTaskListEmpty(true)
  }

  function removeTask(taskRemoved:any) {
    setTaskList(taskList.splice(taskRemoved,1));
    if (taskList.length === 0) {
      setTaskListEmpty(false)
      setTaskList([])
    }
}

  function finishedTask(key:any){
  }

 return (
  <div className="contentWrapper"> 
    <Header />
    <div >
      <form className="actions" onSubmit={createAction}>
        <input placeholder="Adcione uma nova tarefa"/>
        <button type="submit">
          Criar
          <img src={Plus} />
        </button>
      </form>
      <div>
        <div className="tittles">
          <div style={{display: 'flex',alignItems: 'center'}}>
            <h2>Tarefas criadas</h2>
            <p className="number">{taskList.length}</p>
          </div>
          <div style={{display: 'flex',alignItems: 'center'}}>
            <h2>Concluídas</h2>
            <p className="number">0 de {taskList.length}</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="list">
          { !taskListEmpty 
          ?
          <div>
            <img src={Clipboard} style={{height:'64px'}}/>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>  
          :
          <div>
            {taskList.map((task:any,key:any) =>{
              return(
                <div className={task.class} key={key}>
                  <input type="checkbox" className="checkbox" onClick={()=>finishedTask(key)}/>
                  <p>{task.text}</p>
                  <img src={Trash} style={{cursor:'pointer'}} onClick={()=>removeTask(key)}></img>
                </div>
              )
            })}
            
          </div>}
        </div>
      </div>
    </div>
  </div>
 )
}

export default App
