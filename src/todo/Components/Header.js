import { useState } from "react"
import { AddJob } from "../Container/handleJob"

function Header({setDataJob}) {

    const [job , setJob ] = useState()

    const handleAddJob = (e) => {
        if(e.which === 13 ){
            AddJob(job , setDataJob)
            setJob('')
        }
    }

    return(
        <header className="header">
				<h1>todos</h1>
				<input 
                className="new-todo" 
                placeholder="What needs to be done?"
                value={job || ''}
                onChange={(e) => setJob(e.target.value)}
                onKeyDown={handleAddJob}
                />
			</header>
    )
}

export default Header