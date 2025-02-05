const breakfastMenu = ['Pankakes - $12', 'Eggs Benedict - $22.99' , 'Oatmeal - $21.99', 'Frittata - $15'];
const maincourseMenu = ['Steak - $16.09', 'Pasta - $32', 'Burger - $2.58', 'Salmon - $10.25'];
const desertMenu = ['Cake - $25', 'Ice Cream - $6.20', 'Pudding - $4.66', 'Fruit Salad - $2.75'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
maincourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;