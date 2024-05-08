const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Кількість категорій:", categoryItems.length);

categoryItems.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const itemList = item.querySelectorAll("ul > li");
  console.log("Категорія:", itemTitle);
  console.log(`Кількість елементів у категорії: ${itemList.length}`);
});
