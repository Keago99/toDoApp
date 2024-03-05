(()=>{"use strict";let e=[new n("starterProject")],t=0;function n(e,t=[]){this.projectName=e,this.tasks=t}function i(){const n=document.getElementById("nameOfProjects");n.innerHTML="";for(let i=0;i<e.length;i++){let o=document.createElement("div");o.className="projItem",o.innerText=e[i].projectName,i==t&&o.classList.add("activeProject"),n.appendChild(o)}!function(){const e=document.querySelectorAll(".projItem");for(let n=0;n<e.length;n++)e[n].addEventListener("click",(()=>{for(let t=0;t<e.length;t++)e[t].classList.remove("activeProject");e[n].classList.add("activeProject"),c(),t=n,console.log("The active project is number: "+t),l()}))}()}function o(){const e=document.getElementById("hiddenProjAdd"),t=document.getElementById("addProjButton");document.getElementById("inputText").value="",e.style.display="none",t.style.display="block"}function s(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i}function c(){const e=document.getElementById("TodoHeader"),t=document.getElementsByClassName("activeProject");e.innerHTML=t[0].textContent}function d(e,t,n){const i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div");return i.classList.add("toDoDiv"),s.classList.add("toDoTaskButton"),o.innerText=e,s.innerHTML='<button type="button"     class="btn btn-primary detailButton" data-bs-toggle="modal" data-bs-target="#descriptionModal" > Details     <img src="../src/images/smallMagnifyingGlass.png" class="magnifyPicture"/>     </button>',c.innerHTML=t,d.innerHTML=n+" priority","Low priority"===d.innerHTML?d.style.color="#05EE53":"Medium priority"===d.innerHTML?d.style.color="yellow":"High priority"===d.innerHTML?d.style.color="red":console.log("this is nothing listed priority"),l.innerHTML='<button type="button"    class="btn btn-primary deleteButton"> Delete    <img src="../src/images/icons8-trash-can-64.png" class="magnifyPicture"/>    </button>',o.classList.add("innerTodoDiv","titleDisplay"),s.classList.add("innerTodoDiv"),c.classList.add("innerTodoDiv"),d.classList.add("innerTodoDiv"),l.classList.add("innerTodoDiv"),i.appendChild(o),i.appendChild(s),i.appendChild(c),i.appendChild(d),i.appendChild(l),i}function l(){const n=document.getElementById("TodoList");n.innerHTML="";for(let i=0;i<e[t].tasks.length;i++){const o=d(e[t].tasks[i].title,e[t].tasks[i].dueDate,e[t].tasks[i].priority);n.appendChild(o)}!function(){const n=document.getElementsByClassName("titleDisplay"),i=document.getElementsByClassName("detailButton"),o=document.getElementById("descriptionTodoName"),s=document.getElementById("descriptionTodoArea"),c=document.getElementById("descTodoDate");for(let d=0;d<i.length;d++)i[d].addEventListener("click",(i=>{let l=n[d].innerText;console.log("This is the "+[d]+"th number details and the current title is "+l);const r=e[t].tasks.findIndex((e=>e.title==l));o.innerText=e[t].tasks[r].title,s.innerText=e[t].tasks[r].description,c.value=e[t].tasks[r].dueDate,i.stopPropagation()}))}()}const r=new s("my first Todo!","This is an important task","2024-01-10","High");e[t].tasks.push(r),console.log(e[t].tasks[0].title),l(),function(){const e=document.getElementById("addProjButton"),t=document.getElementById("cancelButton");e.addEventListener("click",(()=>{!function(){const e=document.getElementById("hiddenProjAdd");document.getElementById("addProjButton").style.display="none",e.style.display="block"}()})),t.addEventListener("click",(()=>{o()}))}(),function(){const e=document.getElementById("Priority"),t=document.getElementsByClassName("priorityClick");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{t[n].style.backgroundColor;var i=t[n].innerHTML;e.innerHTML=i,t[n].classList.contains("highPriority")&&(e.classList.replace("btn-secondary","btn-danger"),e.classList.replace("btn-warning","btn-danger"),e.classList.replace("btn-success","btn-danger")),t[n].classList.contains("mediumPriority")&&(e.classList.replace("btn-secondary","btn-warning"),e.classList.replace("btn-success","btn-warning"),e.classList.replace("btn-danger","btn-warning")),t[n].classList.contains("lowPriority")&&(e.classList.replace("btn-secondary","btn-success"),e.classList.replace("btn-danger","btn-success"),e.classList.replace("btn-warning","btn-success"))}))}(),i(),document.getElementsByClassName("projItem")[0].classList.add("activeProject"),document.getElementById("addNewProj").addEventListener("click",(()=>{!function(){const t=document.getElementById("inputText").value;if(""!=t){let i=new n(t,new Array);e.push(i)}}(),i(),o()})),document.getElementById("createNewTask").addEventListener("click",(()=>{!function(){let n=document.getElementById("exampleModal"),i=bootstrap.Modal.getInstance(n),o=document.getElementById("todoName").value,c=document.getElementById("todoDescription").value,d=document.getElementById("todoDueDate").value,r=document.getElementById("Priority").innerText,a=document.getElementById("noTitleAlert"),m=document.getElementById("noDescriptionAlert"),u=document.getElementById("noPriorityAlert");if(""==o)a.id="show";else if(""==c)m.id="show";else if("Priority:"===r.trim())u.id="show";else{const n=new s(o,c,d,r);e[t].tasks.push(n),l(),i.hide()}}(),function(){const e=document.getElementById("todoName"),t=document.getElementById("todoDescription"),n=document.getElementById("noTitleAlert"),i=document.getElementById("noDescriptionAlert"),o=document.getElementById("noPriorityAlert"),s=document.getElementById("Priority");s.innerText="Priority:",s.classList.replace("btn-danger","btn-secondary"),s.classList.replace("btn-warning","btn-secondary"),s.classList.replace("btn-success","btn-secondary"),n.id="noTitleAlert",i.id="noDescriptionAlert",o.id="noPriorityAlert",e.value="",t.value=""}()})),c(),function(){const e=document.getElementById("closeTitleAlertButton"),t=document.getElementById("noTitleAlert");e.addEventListener("click",(()=>{t.id="noTitleAlert"}))}(),function(){const e=document.getElementById("closeDescriptionAlertButton"),t=document.getElementById("noDescriptionAlert");e.addEventListener("click",(()=>{t.id="noDescriptionAlert"}))}(),function(){const e=document.getElementById("closeNoPriorityAlert"),t=document.getElementById("noPriorityAlert");e.addEventListener("click",(()=>{t.id="noPriorityAlert"}))}()})();