import axios from "axios"

const apiJob = 'http://localhost:3001/todo'

async function AddJob  (job , setDataJob){
 

    const postJob = await axios.post(apiJob, {
       id:Math.random(),
       title:job,
       completed:false,
       status:'all',
       statuss : 'test'
    })


      const getJob = await  axios.get(apiJob)
        .then(res => setDataJob(res.data))

        return await Promise.all([postJob , getJob])
}

async function CheckCompletedJob(itemId, itemTitle , checkJob , itemStatus,setDataJob ){
    const putJob = await axios.put(apiJob + '/' + itemId, {
        id: itemId,
        title: itemTitle,
        completed:checkJob,
        status : itemStatus,
        statuss:'test'
      })
      
      const getJob = await axios.get(apiJob)
        .then(res => setDataJob(res.data))

        return await Promise.all([putJob , getJob])
   
}

async function DeleteJob(itemId , setDataJob){
    const deleteJob = await axios.delete(apiJob + '/' + itemId)
    const getJob = await axios.get(apiJob)
    .then(res => setDataJob(res.data))
    return await Promise.all([deleteJob , getJob])
}

async function EditValueJob (itemId, newJob , checkJob , setDataJob){
    const putJob = await axios.put(apiJob + '/' + itemId, {
        id: itemId,
        title: newJob,
        completed:checkJob
      })
      
      const getJob = await axios.get(apiJob)
        .then(res => setDataJob(res.data))
        return await Promise.all([putJob , getJob])
}

async function DeleteJobs(id , setDataJob , itemCompleted){
  if(itemCompleted === true){
    const deleteJob = await axios.delete(apiJob + '/' + id)
    const getJob = await axios.get(apiJob)
    .then(res => setDataJob(res.data))
    return await Promise.all([deleteJob , getJob])
  }else{
    return
  }


}

export { AddJob , CheckCompletedJob , DeleteJob , EditValueJob , DeleteJobs}