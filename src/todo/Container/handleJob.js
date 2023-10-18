import axios from "axios"

const apiJob = 'http://localhost:3001/todo'

function AddJob(job , setDataJob){
    
    axios.post(apiJob, {
       id:Math.random(),
       title:job,
       completed:false
    })

    setTimeout(() => {
        axios.get(apiJob)
        .then(res => setDataJob(res.data))
    },10)

}

function CheckCompletedJob(itemId, itemTitle , checkJob , setDataJob){

    axios.put(apiJob + '/' + itemId, {
        id: itemId,
        title: itemTitle,
        completed:checkJob
      })
      setTimeout(() => {
        axios.get(apiJob)
        .then(res => setDataJob(res.data))
    },10)
   
}


export { AddJob , CheckCompletedJob}