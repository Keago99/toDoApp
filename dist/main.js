(()=>{"use strict";let e=[new n("starterProject")],t=0;function n(e,t=[]){this.projectName=e,this.tasks=t}function s(){const n=document.getElementById("nameOfProjects");n.innerHTML="";for(let s=0;s<e.length;s++){let c=document.createElement("div");c.className="projItem",c.innerText=e[s].projectName,s==t&&c.classList.add("activeProject"),n.appendChild(c)}!function(){const e=document.querySelectorAll(".projItem");for(let n=0;n<e.length;n++)e[n].addEventListener("click",(()=>{for(let t=0;t<e.length;t++)e[t].classList.remove("activeProject");e[n].classList.add("activeProject"),i(),t=n,console.log("The active project is number: "+t)}))}()}function c(){const e=document.getElementById("hiddenProjAdd"),t=document.getElementById("addProjButton");document.getElementById("inputText").value="",e.style.display="none",t.style.display="block"}function o(e,t,n,s){this.title=e,this.description=t,this.dueDate=n,this.priority=s}function i(){const e=document.getElementById("TodoHeader"),t=document.getElementsByClassName("activeProject");e.innerHTML=t[0].textContent}const a=new o("my first Todo!","This is an important task","2024-01-10","High");e[t].tasks.push(a),console.log(e[t].tasks[0]),function(){const e=document.getElementById("addProjButton"),t=document.getElementById("cancelButton");e.addEventListener("click",(()=>{!function(){const e=document.getElementById("hiddenProjAdd");document.getElementById("addProjButton").style.display="none",e.style.display="block"}()})),t.addEventListener("click",(()=>{c()}))}(),function(){const e=document.getElementById("Priority"),t=document.getElementsByClassName("priorityClick");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{t[n].style.backgroundColor;var s=t[n].innerHTML;e.innerHTML=s,t[n].classList.contains("highPriority")&&(e.classList.replace("btn-secondary","btn-danger"),e.classList.replace("btn-warning","btn-danger"),e.classList.replace("btn-success","btn-danger")),t[n].classList.contains("mediumPriority")&&(e.classList.replace("btn-secondary","btn-warning"),e.classList.replace("btn-success","btn-warning"),e.classList.replace("btn-danger","btn-warning")),t[n].classList.contains("lowPriority")&&(e.classList.replace("btn-secondary","btn-success"),e.classList.replace("btn-danger","btn-success"),e.classList.replace("btn-warning","btn-success"))}))}(),s(),document.getElementsByClassName("projItem")[0].classList.add("activeProject"),document.getElementById("addNewProj").addEventListener("click",(()=>{!function(){const s=document.getElementById("inputText").value;if(""!=s){let c=new n(s,new Array);e.push(c),console.log(e[t].tasks[0])}}(),s(),c()})),document.getElementById("createNewTask").addEventListener("click",(()=>{!function(){const n=new o(document.getElementById("todoName").value,document.getElementById("todoDescription").value,document.getElementById("todoDueDate").value,document.getElementById("Priority").innerText);e[t].tasks.push(n)}()}))})();