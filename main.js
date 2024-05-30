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

/* عوض کردن تم به دارک مود و لایت مود */
const changeThemToDark = dark.addEventListener('click', function(){
document.documentElement.classList.add('dark');
});

const changeThemToLight = light.addEventListener('click', function(){
    document.documentElement.classList.remove('dark');
    });
/* پایان عوض کردن تم */

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


priorityLow.addEventListener('click',showLow);
function showLow(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#low').style.display = "flex";
}

priorityMedium.addEventListener('click',showMedium);
function showMedium(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#medium').style.display = "flex";
}

priorityHigh.addEventListener('click',showMedium);
function showMedium(){
    priority.style.display = "none";
    priorityItems.style.display = "none";
    document.querySelector('#high').style.display = "flex";

}

// if(document.querySelector('#task-name').value !== null){
//     console.log('hi');
//     // btnAddTask.style.backgroundColor = btn-add;
// }

