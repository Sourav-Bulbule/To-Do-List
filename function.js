const todoList = [{
  name: '',
  date:''
},{
  name:'',
  date:''
}];

function renderingHTML(){
let combinedHTML = '';
for(let i=0;i<todoList.length;i++){
  const dataObject=todoList[i]
  // const name = dataObject.name;
  // const date = dataObject.date;
  const {name , date} = dataObject;
  if( name !=='' & date !=''){
  const creatingHTML = `
  <div>${name}</div>
  <div>${date}</div>
  <button class="delete-button" onclick="
  todoList.splice(${i},1);
  renderingHTML();
  ">Delete
  </button>  
  `;
  combinedHTML +=creatingHTML;
}
}
document.querySelector('.html-element').innerHTML = combinedHTML;

// console.log(combinedHTML)
}

function addTodo(){  
  const data1 = document.querySelector('.inputvalue');
  const data2 = document.querySelector('.inputdate');
  const name = data1.value;
  const date = data2.value;
  if( name !=='' & date !=''){
  todoList.push({
    // name: name,
    // date : date,
    name,
    date
  });
  // console.log(todoList);
  data1.value= '';
  data2.value= '';
  
  renderingHTML();
}
}
