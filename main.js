const bars = document.querySelector("#bars");
const closeBars = document.querySelector("#close-bars");
const addTask = document.querySelector(".add-task");
const definitionTask = document.querySelector(".definition-task");
const backgroundDefault = document.querySelector(".background-default");
const priority = document.querySelector("#priority");
const tagRight = document.querySelector("#tag-right");
const tagBottom = document.querySelector("#tag-bottom");
const priorityItems = document.querySelector("#priority-items");
const btnAddTask = document.querySelector("#btn-add-task");
const closeDefineTask = document.querySelector("#close-define-task");
const modifyOption = document.querySelector("#modify-options");
const modify = document.querySelector("#modify");
const checkBox = document.querySelector("#checked");
const taskName = document.querySelector("#task-name");
const description = document.querySelector("#descriptin");
const container = document.querySelector(".container");
const doneContainer = document.querySelector(".container-done");
const low = document.querySelector("#low");
const medium = document.querySelector("#medium");
const high = document.querySelector("#high");



let data = [];
let selectedPriority = "";

document.addEventListener('DOMContentLoaded', getTasks);
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // tasks.forEach(function(task){
    
  // });
  data = tasks;
  render(data);
}

/* نمایش ساید بار در سایز موبایل و پنهان کردن آن */
bars.addEventListener("click", function () {
  document.querySelector("#side-bar").classList.remove("fade-out");
});

closeBars.addEventListener("click", function () {
  document.querySelector("#side-bar").classList.add("fade-out");
});
/* پایان نمایش و عدم نمایش ساید بار */

/* نمایش تعریف تسک و پنهان کردن بک گراند با فشردن افزودن تسک */
addTask.addEventListener("click", showIt);
function showIt() {
  definitionTask.style.display = "flex";
  backgroundDefault.style.display = "none";
  addTask.style.display = "none";
}
/* پایان نعریف تسک */

/* نمایش اولویت بندی */
priority.addEventListener("click", showPriority);
function showPriority() {
  tagRight.classList.toggle("hidden");
  tagBottom.classList.toggle("hidden");
  priorityItems.classList.toggle("hidden");
}
/* پایان نمایش اولویت بندی */

/* نمایش اولویت  */
function showBadge(element) {
  priority.style.display = "none";
  priorityItems.style.display = "none";
  document.getElementById(element).classList.toggle("hidden");
}
/* پایان نمایش اولیت  */

/* بستن اولویت */
const removeBadge = (element) => {
  priority.style.display = "flex";
  priorityItems.style.display = "flex";
  document.getElementById(element).classList.toggle("hidden");
};
/* پایان بستن اولویت */

/* بستن تعریف تسک(در صورت نبود تسک باید عکس برگردد) */ /* بررسی مجدد */
closeDefineTask.addEventListener("click", closeTask);
function closeTask() {
  definitionTask.style.display = "none";
  addTask.style.display = "flex";
  if ((data = [])) {
    backgroundDefault.style.display = "flex";
  } else {
    backgroundDefault.style.display = "none";
  }
}
/* پایان بستن تعریف تسک */

/* اعتبار سنجی داده های وارد شده */
const validation = () => {
  if (taskName.value === "") {
    alert("لطفا یک تسک وارد نمایید!");
    return false;
  } else if (description.value === "") {
    alert("لطفا توضیحات تسک را وارد نمایید");
    return false;
  } else if (
    document.querySelector('input[name="priority"]:checked') === null
  ) {
    alert("لطفا اولویت تسک را انتخاب نمایید");
    return false;
  }

  return true;
};
/* پایان اعتبار سنجی */

/* افزودن تسک جدید */
btnAddTask.addEventListener("click", newElement);
function newElement() {
  if (validation()) {
    newTask({
      id: new Date().getTime(),
      title: taskName.value,
      desc: description.value,
      isDone: false,
      priority: selectedPriority,
    });
  }
}
/*  */

/* باز و بسته کردن 3 نقطه کنار تسک */
container.addEventListener("click", showOption);
doneContainer.addEventListener("click", showOption);

function showOption(event) {
  if (event.target.classList.contains("modify-options")) {
    const parentBox = event.target.closest(".parentDiv");
    const modifyElm = parentBox.querySelector(".modify");
    if (modifyElm.style.display === "none") {
      modifyElm.style.display = "flex";
    } else {
      modifyElm.style.display = "none";
    }
  }
}

/* پایان باز و بسته کردن 3نقطه */

/* تسک های انجام شده */
// container.addEventListener("click", doneTask);
const doneTask = (id) => {
  data = data.map((task) => {
    if (task.id === id) {
      return { ...task, isDone: !task.isDone };
    } else {
      return task;
    }
  });

  render(data);
};


const setPriority = (value) => {
  selectedPriority = value;
  showBadge(value);
};

const newTask = (task) => {
  data.push(task);
  render(data);
};

const render = (tasks) => {
  const inProgress = [];
  const done = [];

  tasks.forEach((task) => {
    if (!task.isDone) {
      inProgress.push(template(task));
    } else {
      done.push(template(task));
    }
  });




  container.innerHTML = inProgress.join("");
  doneContainer.innerHTML = done.join("");

  storeTaskInLocalStorage(data);

  reset();
};

/* پاک کردن یک تسک دلخواه */ /* در صورت حذف و نبود نسک دیگری عکس باید برگردد */
const removeTask = (id) => {
  data = data.filter((task) => {
    return task.id !== id;
  });
  render(data);
};
/*پایان پاک کردن یک تسک دلخواه */

const modifyTask = (id) => {
  renderEditor(id)
};

const reset = () => {
  const hiddenInput = document.querySelector('input[name="priority"]:checked');
  taskName.value = "";
  description.value = "";
  hiddenInput.checked = false;

  if (selectedPriority === "low") {
    low.style.display = "none";
  } else if (selectedPriority === "medium") {
    medium.style.display = "none";
  } else {
    high.style.display = "none";
  }

  tagRight.classList.remove('hidden');
  tagBottom.classList.add('hidden');
  definitionTask.style.display = "none";
  addTask.style.display = "flex";

  priority.style.removeProperty('display');
  priority.classList.remove('hidden');
  priorityItems.style.removeProperty('display');
  priorityItems.classList.add('hidden');
};

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  task.forEach(task => {
    tasks.findIndex(elm => elm.id == task.id) == -1 && tasks.push(task);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const template = (task) => {
  return `
    <div class="border-task bg-white rounded-xl py-3 px-4 mt-4 shadow-task parentDiv relative dark:bg-body-dark" id="task-${task.id}">
    <div class="w-1 h-[60px] rounded-l-lg priority-border absolute right-0"></div>
    <div class="flex md:items-center justify-between">
        <div class="flex md:items-center gap-4 myDiv">
            <input onclick="doneTask(${task.id})" id="checked" class="w-5 h-5 check-box" type="checkbox" ${task.isDone && "checked"} />
            <div class="flex md:flex-row flex-col md:gap-4 gap-1">
            <h2 class="text-sm font-semibold font-colorP md:text-base font-bold dark:text-white ${task.isDone ? "line-through" : ""}">${task.title}</h2>
              <div class="rounded py-0.5 px-2 
              ${
                task.priority === "low"
                  ? "bg-Priority-low font-priority-low"
                  : task.priority === "medium"
                  ? "bg-Priority-medium font-priority-medium"
                  : "bg-Priority-high font-priority-high"
              }
               text-xs font-bold max-w-fit">
                  ${
                    task.priority === "low"
                      ? "پایین"
                      : task.priority === "medium"
                      ? "متوسط"
                      : "بالا"
                  }
            </div>
            </div>
        </div>
        <i class="fa fa-ellipsis-v dark:text-white modify-options p-1 cursor-pointer" aria-hidden="true"></i>                   
    </div>
    <div class="modify hidden flex items-center rounded-lg p-[5px] gap-2.5 max-w-fit mr-auto border border-[#EBEDEF]">
        <i onclick="removeTask(${
          task.id
        })" class="fa-regular fa-bin-recycle text-[#5C5F61]"></i>
        <div class="w-px h-4 bg-div"></div>
        <i onclick="modifyTask(${
          task.id
        })" class="fa-regular fa-pen-to-square text-[#5C5F61]"></i>
    </div>    
    <p class="text-xs font-normal font-color-description mt-4 md:text-sm dark:font-color-description-dark">${
      task.desc
    }</p>
    </div>
  `;
};

const renderEditor = (id) => {
  const task = data.find(record=> record.id == id);

 const modifyDiv = document.createElement('div');
 modifyDiv.className = "modifyDiv border-task bg-white rounded-xl py-3 px-4 mt-2";

 modifyDiv.innerHTML = `
 <input type="text" value="${task.title}" class="text-sm font-semibold font-colorP w-full block md:text-base font-bold dark:text-white" id="edit-title">
<textarea rows="2" class="text-xs font-normal w-full resize-none font-color-description mt-1 block md:text-sm dark:font-color-description-dark" id="edit-desc">${task.desc}</textarea>
<div class="rounded py-0.5 px-2 mt-4 max-w-fit flex items-center gap-2
${
  task.priority === "low"
    ? "bg-Priority-low font-priority-low"
    : task.priority === "medium"
    ? "bg-Priority-medium font-priority-medium"
    : "bg-Priority-high font-priority-high"
}">
<i onClick="updateBadge(${task.id})" class="fa fa-times text-black dark:text-white" aria-hidden="true"></i>
<button class="text-sm font-bold">
            ${
              task.priority === "low"
                ? "پایین"
                : task.priority === "medium"
                ? "متوسط"
                : "بالا"
            }
</button>
</div>
<div class="h-px bg-line mt-4"></div>
<button onClick="updateTask(${task.id})" class="block mr-auto mt-4 text-white bg-primary py-1.5 px-4 rounded-md text-xs font-semibold md:text-sm dark:bg-button-moon-dark">ویرایش تسک</button>
 `

  document.querySelector('#task-'+id).after(modifyDiv);
}



const updateTask = (id) =>{
  const task = data.find(elm => elm.id == id);

  task.title = document.querySelector('#edit-title').value;
  task.desc = document.querySelector('#edit-desc').value;

  render(data);
};

// function doneTask(event) {
//   if (event.target.classList.contains("check-box")) {
//     const parentBox = event.target.closest(".parentDiv");
//     const task = parentBox.querySelector("h2");
//     const descDone = parentBox.querySelector("p");
//     const priorityBorder = parentBox.querySelector(".priority-border");
//     document.querySelector("#done").after(parentBox);
//     task.style.textDecoration = "line-through";
//     descDone.style.display = "none";
//     parentBox.style.padding = "24px 20px";
//     priorityBorder.style.height = "40px";
//   }
// }
/* پایان تسک های انجام شده */