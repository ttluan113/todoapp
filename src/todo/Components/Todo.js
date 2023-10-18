import TodoList from "./TodoList"


function Todo({dataJob , setDataJob}) {

   

    return(
        <div>
            {dataJob.map((item ) => <TodoList 
            key={item.id}
            itemTitle={item.title}
            itemCompleted={item.completed}
            itemId={item.id}
            setDataJob={setDataJob}
            />)}
        </div>
    )
}

export default Todo