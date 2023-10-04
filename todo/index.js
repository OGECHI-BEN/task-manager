 const plans = ['get my transcript','take Agro related courses','Join Dekemp','actively volunteer','Take German on Duolingo', 'write Ielts', 'get a scholarship', 'go to Germany','graduate with a first class'];
//   for (let i=0;i< plans.length; i++ ){
//      console.log(plans[i]);
//   };


 // adding task to the input
function addTask (){
   let newTask = document.getElementById('input_bar').value
   plans.push(newTask);
   // console.log(plans);
   updateUI;
 }


 function updateUI (){
    let task_content = " ";
   for (let i=0;i< plans.length; i++ ){
      task_content +=`<div id ="task">
                           <div class  id ="task_contents">
                              ${plans[i]}
                              <div class="icons">
                                 <span ><img src="pen-solid.svg" alt="" onclick ="OpenEditTask()"></span> 
                                 <span ><img src="trash-can-regular.svg" alt="" onclick ="cancel_task()"></span> 
                              </div>
                           </div>
                           <div id ="while_editing">
                              <input id="edit_bar" type = "text" placeholder = "edit task">
                              <div class= "icons">
                                 <span ><img src="check-solid.svg" alt=""onclick ="saveEditedTask()" ></span> 
                                 <span ><img src="xmark-solid.svg" alt="" onclick ="cancelEditedTask()"></span> 
                              </div>
                           </div>
                        </div>`
   }

   // console.log(task_content);
   document.getElementById("task_items").innerHTML = task_content;
 }

 updateUI();

// opening the edit bar

 function   OpenEditTask (){
   document.getElementById('while_editing').style.display = 'block';
   document.getElementById('task_contents').style.display = 'none';
   
   let edit = document.getElementById('edit_bar').value
   plans.push(edit);
   saveEditedTask();
   updateUI;
 }

 function cancelTask(){

 }
  
 function saveEditedTask(){

 }
 

 