/*- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.*/
let arrayH2 = document.getElementsByTagName('h2');
let idContent = document.getElementById('content');
const content = document.createElement('h3');
content.innerText = 'Зміст';
const elemul = document.createElement('ul');
idContent.append(content, elemul);
for (const elementH2 of arrayH2) {
    const elemLi = document.createElement('li');
    elemLi.innerText = `${elementH2.innerText}`;
    elemul.appendChild(elemLi);
}