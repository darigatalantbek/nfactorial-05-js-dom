// Как найти?…

// 1. Таблицу с `id="age-table"`.
let table = document.getElementById('age-table');

// 2. Все элементы `label` внутри этой таблицы (их три).
let labels = table.getElementsByTagName('label');

// 3. Первый `td` в этой таблице (со словом «Age»).
let firstElenTd = table.querySelector('td');

// 4. Форму `form` с именем `name="search"`.
let elemForm = document.getElementsByName('search')[0];

// 5. Первый `input` в этой форме.
let firstInput = elemForm.querySelectorAll('input')[0];

// 6. Последний `input` в этой форме.
let lastInput = elemForm.querySelectorAll('input')[1];


<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // Код выведет <!--body-->
</script>