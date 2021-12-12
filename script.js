let GetB=document.querySelector(".GetB")
let PostB=document.querySelector(".PostB")
let PutB=document.querySelector(".PutB")
let DeleteB=document.querySelector(".DeleteB")


// GET REQUEST
GetB.addEventListener("click",function getToDo(){

    axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos',
        params: {
            _limit:5
        }
    })

    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
    
})

// POST REQUEST
PostB.addEventListener("click",function postToDo() {

 axios
    .post("https://jsonplaceholder.typicode.com/todos",{
     title: "New Todo",
     completed:false
    })   
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
})

// PUT/PATCH REQUEST
PutB.addEventListener("click",function putToDo() {

 axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
})

// DELETE REQUEST
DeleteB.addEventListener("click",function deleteToDo(){

    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
})


// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }







    
