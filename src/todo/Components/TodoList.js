import { useState } from "react"
import { CheckCompletedJob, DeleteJob , EditValueJob} from "../Container/handleJob"


function TodoList({itemTitle , itemId , setDataJob , itemCompleted , itemStatus}) {


    const [checkJob , setCheckJob ] = useState(false)
    const [editJob , setEditJob] = useState(false)
    const [newJob , setNetJob] = useState()

    const handleCheckJob = (checkJob) => {
        setCheckJob(checkJob)
        if(checkJob === true){
            itemStatus = 'active'
        }else{
            itemStatus = 'all'
        }
        CheckCompletedJob(itemId, itemTitle , checkJob , itemStatus, setDataJob)
    }

    const handleDeleteJob = (itemId) => {
        DeleteJob(itemId , setDataJob)
    }

    const handleEditValueJob = () => {
        setEditJob(!editJob)
        EditValueJob(itemId, newJob , checkJob , setDataJob)

    }
    return(
        <section className="main">
        <ul className="todo-list">
            <li className={itemCompleted === true ? 'completed' : '' || editJob === true ? 'editing' : ''}>
                <div className="view">
                    <input onChange={() => handleCheckJob(!checkJob)} className="toggle" type="checkbox" />
                    <label onClick={() => handleEditValueJob()}>{itemTitle}</label>
                    <button onClick={() => handleDeleteJob(itemId)} className="destroy"></button>
                </div>
                <input 
                className="edit"
                onBlur={() => handleEditValueJob()}
                onChange={(e) => setNetJob(e.target.value)}
                />
            </li>
        </ul>
    </section>
    )
}

export default TodoList