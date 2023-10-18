import axios from "axios"

const apiJob = 'http://localhost:3001/todo'

    async function AddJob  (job , setDataJob){

    const postJob = await axios.post(apiJob, {
       id:Math.random(),
       title:job,
       completed:false
    })


      const getJob = await  axios.get(apiJob)
        .then(res => setDataJob(res.data))

        return await Promise.all([postJob , getJob])
}

 async function CheckCompletedJob(itemId, itemTitle , checkJob , setDataJob){

    const putJob = await axios.put(apiJob + '/' + itemId, {
        id: itemId,
        title: itemTitle,
        completed:checkJob
      })
      
      const getJob = await axios.get(apiJob)
        .then(res => setDataJob(res.data))

        return await Promise.all([putJob , getJob])
   
}


export { AddJob , CheckCompletedJob}