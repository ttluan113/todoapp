import TodoList from "./TodoList"


function Todo({dataJob , setDataJob , valueItem }) {


    return(
        <div>
            {dataJob.filter(todo => todo.statuss === valueItem || valueItem === todo.status).map((item ) => <TodoList 
            key={item.id}
            itemTitle={item.title}
            itemCompleted={item.completed}
            itemId={item.id}
            itemStatus={item.status}
            setDataJob={setDataJob}
            />)}
        </div>
    )
}

export default Todo