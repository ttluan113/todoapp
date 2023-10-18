import { DeleteJobs } from "../Container/handleJob";


function Footer({dataJob , setValueItem , setDataJob}) {


    const result = dataJob.filter(checkLength);
    function checkLength(dataJob) {
    return dataJob.completed === false;
    }

    const result1 = dataJob.filter(checkLength1);
    function checkLength1(dataJob) {
    return dataJob.completed === true;
    }


    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.onclick = function(){
        const deleteSelected = document.querySelector('.item.selected')
        deleteSelected.classList.remove('selected')
        this.classList.add('selected')
        }
    })


    const handleDeleteJobs = () => {
        dataJob.map((item) => DeleteJobs(item.id , setDataJob , item.completed))
    }

    const checkList1 = () => {
        setValueItem('test')
    }

    const checkList2 = () => {
        setValueItem('all')
    }

    const checkList3 = () => {
        setValueItem('active' )
    }

    return(
        <footer className="footer">
        <span className="todo-count"><strong>{result.length}</strong> item left</span>
        <ul className="filters">
            <li>
                <a className="item selected" onClick={() => checkList1()} href="#/">All</a>
            </li>
            <li>
                <a className="item " onClick={() => checkList2()} href="#/active">Active</a>
            </li>
            <li>
                <a className="item " onClick={() => checkList3()} href="#/completed">Completed</a>
            </li>
        </ul>
        {result1.length > 0 ?
        <button onClick={handleDeleteJobs} className="clear-completed">Clear completed</button>
        :
        <span></span>
        }
    </footer>
    )
}

export default Footer