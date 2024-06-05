const dark = document.querySelector("#dark");
const light = document.querySelector("#light");

/* عوض کردن تم به دارک مود و لایت مود */
// localStorage.setItem('theme', 'light');
const changeThemToDark = dark.addEventListener("click", function () {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

const changeThemToLight = light.addEventListener("click", function () {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
});
/* پایان عوض کردن تم */


/* ذخیره تم در localStorage */
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
/* پایان ذخیره تم در localStorage */