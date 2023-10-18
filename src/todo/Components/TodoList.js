import { useState } from "react"
import { CheckCompletedJob } from "../Container/handleJob"


function TodoList({itemTitle , itemId , setDataJob , itemCompleted}) {


    const [checkJob , setCheckJob ] = useState(false)


    const handleCheckJob = (checkJob) => {
        setCheckJob(checkJob)
        CheckCompletedJob(itemId, itemTitle , checkJob , setDataJob)
    }


    return(
        <section className="main">
        <ul className="todo-list">
            <li className={itemCompleted === true ? 'completed' : ''}>
                <div className="view">
                    <input onChange={() => handleCheckJob(!checkJob)} className="toggle" type="checkbox" />
                    <label>{itemTitle}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit"/>
            </li>
        </ul>
    </section>
    )
}

export default TodoList