const bars = document.querySelector('#bars');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const closeBars = document.querySelector('#close-bars');
const addTask = document.querySelector('.add-task');
const definitionTask = document.querySelector('.definition-task');
const backgroundDefault = document.querySelector('.background-default');
const priority = document.querySelector('#priority');
const tagRight = document.querySelector('#tag-right');
const tagBottom = document.querySelector('#tag-bottom');
const priorityItems = document.querySelector('#priority-items');
const priorityLow = document.querySelector('#priority-low');
const priorityMedium = document.querySelector('#priority-medium');
const priorityHigh = document.querySelector('#priority-high');
const btnAddTask = document.querySelector('#btn-add-task');
const closeDefineTask =document.querySelector('#close-define-task');
const modifyOption = document.querySelector('#modify-options');
const modify = document.querySelector('#modify');
const checkBox = document.querySelector ('#descriptin');
const taskName = document.querySelector('#task-name');
const description = document.querySelector('#descriptin');

/* عوض کردن تم به دارک مود و لایت مود */
// localStorage.setItem('theme', 'light');
const changeThemToDark = dark.addEventListener('click', function(){
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme','dark');
});

const changeThemToLight = light.addEventListener('click', function(){
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme','light');
    });
/* پایان عوض کردن تم */

/* ذخیره تم در localStorage */
if(localStorage.getItem('theme') === 'dark'){
    document.documentElement.classList.add('dark');
}else{
    document.documentElement.classList.remove('dark');
}
/* پایان ذخیره تم در localStorage */

/* نمایش ساید بار در سایز موبایل و پنهان کردن آن */
bars.addEventListener('click', function(){
    document.querySelector('#side-bar').classList.remove('fade-out');
});

closeBars.addEventListener('click', function(){
    document.querySelector('#side-bar').classList.add('fade-out');
});
/* پایان نمایش و عدم نمایش ساید بار */

/* نمایش تعریف تسک و پنهان کردن بک گراند با فشردن افزودن تسک */
addTask.addEventListener('click', showIt);
function showIt(){
    definitionTask.style.display = "flex";
    backgroundDefault.style.display = "none";
    addTask.style.display = "none";
}
/* پایان نعریف تسک */

/* نمایش اولویت بندی */
priority.addEventListener('click',showPriority);
function showPriority(){
    tagRight.style.display = "none";
    tagBottom.style.display = "flex";
    priorityItems.style.display = "flex";
}
/* پایان نمایش اولویت بندی */

/* نمایش اولویت پایین */
priorityLow.addEventListener('click',showLow);
function showLow(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#low').style.display = "flex";
}
/* پایان نمایش اولیت پایین */

/* نمایش اولویت متوسط */
priorityMedium.addEventListener('click',showMedium);
function showMedium(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#medium').style.display = "flex";
}
/* پایان نمایش اولیت متوسط */

/* نمایش اولویت بالا */
priorityHigh.addEventListener('click',showhigh);
function showhigh(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#high').style.display = "flex";
}
/* پایان نمایش اولیت بالا */

/* بستن تعریف تسک(در صورت نبود تسک باید عکس برگردد) */
closeDefineTask.addEventListener('click', closeTask);
    function closeTask(){
        definitionTask.style.display = "none";
        addTask.style.display = "flex";
    }
/* پایان بستن تعریف تسک */

/* باز و بسته کردن 3نقطه کنار تسک */
modifyOption.addEventListener('click', showOption);
function showOption() {
    if (modify.style.display === "none") {
      modify.style.display = "flex";
    } else {
      modify.style.display = "none";
    }
  }
/* پایان باز و بسته کردن 3نقطه */



// btnAddTask.addEventListener('click', newElement);
// function newElement(){
//     var h2 = document.createElement("h2");
//     var inputValue = taskName.value;
//     var text = document.createTextNode(inputValue);
//     h2.appendChild(text);
//     h2.className = "text-sm font-semibold font-colorP md:text-base font-bold dark:text-white";
//     if(inputValue === ''){
//         alert("لطفا یک تسک وارد نمایید!");
//     }else{
//         document.querySelector(".myDiv").appendChild(h2);
//     }
//     inputValue = "";

// }


btnAddTask.addEventListener('click', newElement);
function newElement(){
    var h2 = document.createElement("h2");
    var inputValue = taskName.value;
    var text = document.createTextNode(inputValue);
    h2.appendChild(text);
    h2.className = "text-sm font-semibold font-colorP md:text-base font-bold dark:text-white";
    var p = document.createElement("p");
    var desc = description.value;
    var longText = document.createTextNode(desc);
    p.appendChild(longText);
    p.className = "text-xs font-normal font-color-description mt-4 md:text-sm dark:font-color-description-dark";
    if(inputValue && desc === ''){
        alert("لطفا یک تسک وارد نمایید!");
    }else{
        document.querySelector(".myDiv").appendChild(h2);
        document.querySelector(".parentDiv").appendChild(p);
    }
    inputValue = "";
}




// if(document.querySelector('#task-name').value !== null){
//     console.log('hi');
//     // btnAddTask.style.backgroundColor = btn-add;
// }

