const BUTTON_ADD = document.querySelector(".header-button");
const TO_DO_LIST = document.querySelector(".to-do-list");
const INPUT_VALUE = document.querySelector(".header-input");
const BUTTON_DELETE = ".list-item-delete-button";
const TO_DO_LIST_ITEM = ".to-do-list-item";
const TO_DO_LIST_ITEM_TEXT = ".list-item-text";

document.addEventListener("DOMContentLoaded", function () {
  BUTTON_ADD.addEventListener("click", function () {
    if (INPUT_VALUE.value.trim().length !== 0) {
      const listItem = document.createElement("li");
      listItem.classList.add("to-do-list-item");
      listItem.innerHTML = `
        <div class="list-item">
          <p class="list-item-text-before">✓</p>
          <p class="list-item-text">${INPUT_VALUE.value}</p>
        </div>
        <p class="list-item-delete-button">×</p>
      `;
      TO_DO_LIST.appendChild(listItem);
      INPUT_VALUE.value = "";
    }
  });

  INPUT_VALUE.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      BUTTON_ADD.click();
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.matches(BUTTON_DELETE)) {
      event.target.parentElement.remove();
    } else if (event.target.matches(TO_DO_LIST_ITEM)) {
      event.target.classList.toggle("checked");
    } else if (event.target.matches(".list-item-text-before")) {
      event.target.parentElement.parentElement.classList.toggle("checked"); //parent-parent?
    }
  });

  document.addEventListener("dblclick", function (event) {
    if (event.target.matches(TO_DO_LIST_ITEM_TEXT)) {
      event.target.setAttribute("contenteditable", "true");
      event.target.focus();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.matches(TO_DO_LIST_ITEM_TEXT)) {
      e.target.removeAttribute("contenteditable");
    }
  });
});
