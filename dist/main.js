(()=>{"use strict";let e=[new n("starterProject")],t=0;function n(e,t=[]){this.projectName=e,this.tasks=t}function o(){const n=document.getElementById("nameOfProjects");n.innerHTML="";for(let o=0;o<e.length;o++){let s=document.createElement("div");s.className="projItem",s.innerText=e[o].projectName,o==t&&s.classList.add("activeProject"),n.appendChild(s)}!function(){const e=document.querySelectorAll(".projItem");for(let n=0;n<e.length;n++)e[n].addEventListener("click",(()=>{for(let t=0;t<e.length;t++)e[t].classList.remove("activeProject");e[n].classList.add("activeProject"),c(),t=n,console.log("The active project is number: "+t),l()}))}()}function s(){const e=document.getElementById("hiddenProjAdd"),t=document.getElementById("addProjButton");document.getElementById("inputText").value="",e.style.display="none",t.style.display="block"}function i(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}function c(){const e=document.getElementById("TodoHeader"),t=document.getElementsByClassName("activeProject");e.innerHTML=t[0].textContent}function d(e,t,n){const o=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");return o.classList.add("toDoDiv"),i.classList.add("toDoTaskButton"),s.innerText=e,i.innerHTML='<button type="button"     class="btn btn-primary"> Details</button>',c.innerHTML=t,d.innerHTML=n,s.classList.add("innerTodoDiv"),i.classList.add("innerTodoDiv"),c.classList.add("innerTodoDiv"),d.classList.add("innerTodoDiv"),o.appendChild(s),o.appendChild(i),o.appendChild(c),o.appendChild(d),o}function l(){const n=document.getElementById("TodoList");n.innerHTML="";for(let o=0;o<e[t].tasks.length;o++){const s=d(e[t].tasks[o].title,e[t].tasks[o].dueDate,e[t].tasks[o].priority);n.appendChild(s)}}const r=new i("my first Todo!","This is an important task","2024-01-10","High");e[t].tasks.push(r),console.log(e[t].tasks[0].title),l(),function(){const e=document.getElementById("addProjButton"),t=document.getElementById("cancelButton");e.addEventListener("click",(()=>{!function(){const e=document.getElementById("hiddenProjAdd");document.getElementById("addProjButton").style.display="none",e.style.display="block"}()})),t.addEventListener("click",(()=>{s()}))}(),function(){const e=document.getElementById("Priority"),t=document.getElementsByClassName("priorityClick");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{t[n].style.backgroundColor;var o=t[n].innerHTML;e.innerHTML=o,t[n].classList.contains("highPriority")&&(e.classList.replace("btn-secondary","btn-danger"),e.classList.replace("btn-warning","btn-danger"),e.classList.replace("btn-success","btn-danger")),t[n].classList.contains("mediumPriority")&&(e.classList.replace("btn-secondary","btn-warning"),e.classList.replace("btn-success","btn-warning"),e.classList.replace("btn-danger","btn-warning")),t[n].classList.contains("lowPriority")&&(e.classList.replace("btn-secondary","btn-success"),e.classList.replace("btn-danger","btn-success"),e.classList.replace("btn-warning","btn-success"))}))}(),o(),document.getElementsByClassName("projItem")[0].classList.add("activeProject"),document.getElementById("addNewProj").addEventListener("click",(()=>{!function(){const o=document.getElementById("inputText").value;if(""!=o){let s=new n(o,new Array);e.push(s),console.log(e[t].tasks[0])}}(),o(),s()})),document.getElementById("createNewTask").addEventListener("click",(()=>{!function(){let n=document.getElementById("exampleModal"),o=bootstrap.Modal.getInstance(n),s=document.getElementById("todoName").value,c=document.getElementById("todoDescription").value,d=document.getElementById("todoDueDate").value,r=document.getElementById("Priority").innerText,a=document.getElementById("noTitleAlert"),m=document.getElementById("noDescriptionAlert"),u=document.getElementById("noPriorityAlert");if(""==s)a.id="show";else if(""==c)m.id="show";else if("Priority:"===r.trim())u.id="show";else{const n=new i(s,c,d,r);e[t].tasks.push(n),l(),o.hide()}}(),function(){const e=document.getElementById("todoName"),t=document.getElementById("todoDescription"),n=document.getElementById("noTitleAlert"),o=document.getElementById("noDescriptionAlert"),s=document.getElementById("noPriorityAlert"),i=document.getElementById("Priority");i.innerText="Priority:",i.classList.replace("btn-danger","btn-secondary"),i.classList.replace("btn-warning","btn-secondary"),i.classList.replace("btn-success","btn-secondary"),n.id="noTitleAlert",o.id="noDescriptionAlert",s.id="noPriorityAlert",e.value="",t.value=""}()})),c(),function(){const e=document.getElementById("closeTitleAlertButton"),t=document.getElementById("noTitleAlert");e.addEventListener("click",(()=>{t.id="noTitleAlert"}))}(),function(){const e=document.getElementById("closeDescriptionAlertButton"),t=document.getElementById("noDescriptionAlert");e.addEventListener("click",(()=>{t.id="noDescriptionAlert"}))}(),function(){const e=document.getElementById("closeNoPriorityAlert"),t=document.getElementById("noPriorityAlert");e.addEventListener("click",(()=>{t.id="noPriorityAlert"}))}()})();