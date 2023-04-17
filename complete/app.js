const editableDiv = document.querySelector(".editable-div");
const updateBtn = document.querySelector("#update-btn");

updateBtn.addEventListener("click", function () {
  const updatedContent = editableDiv.innerHTML;
  console.log(updatedContent); // print the updated content in the console
});
