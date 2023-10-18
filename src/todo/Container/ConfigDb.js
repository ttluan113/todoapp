import axios from 'axios'
function Config(setDataJob) {
    axios.get('http://localhost:3001/todo')
    .then(res => setDataJob(res.data))
}

export default Config