 const plans = ['get my transcript','Disable my whatsapp','take Agro related courses','Join a mentorship platform','actively volunteer','Take German on Duolingo', 'write Ielts', 'get a scholarship', 'go to Germany','graduate with a first class'];
 
//   for (let i=0;i< plans.length; i++ ){
//      console.log(plans[i]);
//   };

 // adding task to the input
function addTask (){ 
   let newTask = document.getElementById('input_bar').value
   if (newTask == ''){
      alert('please add a task')
   } else {
      plans.push(newTask);
   };
    console.log(plans);
    document.getElementById('input_bar').value = '';
   updateUI();
   saveData();

 }


 function updateUI (){
    let task_content = " ";
   for (let i=0;i< plans.length; i++ ){
      task_content +=`<div id ="task">
                           <div class ="task_contents" id ="task_contents_${i}">
                              ${plans[i]}
                              <div class="icons">
                                 <span ><img src="pen-solid.svg" alt="" onclick ="OpenEditTask(${i})"></span> 
                                 <span ><img src="trash-can-regular.svg" alt="" onclick ="deleteTask(${i})"></span> 
                              </div>
                           </div>
                           <div id ="while_editing_${i}" class="while_editing">
                              <input id="edit_bar_${i}" class ="edit_bar" type = "text" placeholder = "edit task">
                              <div class= "icons">
                                 <span ><img src="check-solid.svg" alt=""onclick ="saveEditedTask(${i})" ></span> 
                                 <span ><img src="xmark-solid.svg" alt="" onclick ="cancelEditedTask(${i})"></span> 
                              </div>
                           </div>
                        </div>`
   }

   // console.log(task_content);
   document.getElementById("task_items").innerHTML = task_content;
 }

 updateUI();

// opening the edit bar

 function   OpenEditTask (task_id){
   document.getElementById(`edit_bar_${task_id}`).value = plans[task_id]
   document.getElementById(`while_editing_${task_id}`).style.display = 'flex';
   document.getElementById(`task_contents_${task_id}`).style.display = 'none';
 }

 function deleteTask(task_id){
   console.log(task_id);
   //delete item
   plans.splice(task_id,1);
    console.log(plans);
   //update UI
   updateUI();
 }
  function cancelEditedTask (task_id){
   document.getElementById(`edit_bar_${task_id}`).value ="";
  }
 function saveEditedTask(task_id){
   plans[task_id] = document.getElementById(`edit_bar_${task_id}`).value;
  //let rat = document.getElementById(`edit_bar_${task_id

  updateUI();
  saveData()

}

function saveData (){
   localStorage.setItem("data", task_items.innerHTML);

}

 

 
 
