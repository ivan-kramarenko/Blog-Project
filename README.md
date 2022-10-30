<div>
  <h1>Дипломный проект</h1>
  <ol>
    <li>Выбрать тему своего проекта - <strong>Блог</strong> ✔️</li>
    <li>Сделать UX ✔️</li>
    <li>Реализовать UI (интерфейс, кнопки, цвета) </li>
    <li>Создайте и настройте проект ✔️</li>
    <li>Реализовать все компоненты</li>
    <li>Реализовать маршрутизацию</li>
    <li>Реализовать сортировку, фильтрацию, пагинацию</li>
  </ol>
  
  <h2>Обязательно реализовать</h2>
  <ul>
    <li>Страница с перечнем всех статей и кнопкой перехода на отдельную статью</li>
    <li>Страница отдельной статьи</li>
    <li>Страницы администратора для управления статьями/добавления новой статьи</li>
    <li>Страницы входа / регистрации в админ панель</li>
  </ul>
  
  <a href="https://cutt.ly/qNmIRYg">Структура страниц</a>
</div>
<div>
  <h2>Технические требования для всех проектов</h2>
  <span>Нужно разработать Frontend и Backend части приложения. Взаимодействие между ними должно происходить при помощи REST API. Необходима Desktop версия   приложения, а также <strong>адаптивная верстка</strong>. Для стилизации использовать <strong>SASS / SCSS</strong></span>
  
  <h2>Frontend</h2>
  <span>Используем библиотеку <strong>React</strong>.</span>
  
  <h4>Обязательно реализовать:</h4>
  <span>*При нажатии слева на треугольник, открывается выпадающий текст</span>
  <br><br>
  <details>
    <summary>Список элементов</summary>
    <br>
    <span>Выводим минимум 1 список элементов, полученных от сервера через GET запрос</span>
  </details>
  <details>
    <summary>Форма отправки</summary>
    <br>
    <span>Реализовать минимум 2 формы для отправки данных на сервер</span>
  </details>
  <details>
    <summary>Страницы</summary>
    <br>
    <span>Всего минимум 3 страницы на сайте, реализованных с помощью React Router</span>
  </details>
  <details>
    <summary>Страница одного элемента</summary>
    <br>
    <span>Страница получает и выводит информацию с сервера по параметру из URL.
    <br><br>
    Пример для блога: '/posts/42' <br>Если перейти по этому пути, то<br> необходимо найти пост с id = 42 и вывести информацию о нем.
    </span>
  </details>
  <details>
    <summary>Приватные страницы</summary>
    <br>
    <span>Страницы, доступные только авторизованным пользователям (Private Routes)<br><br>
    Например редактирование данных о пользователе.</span>
  </details>
  <details>
    <summary>Использование библиотеки для управления состоянием</summary>
    <br>
    <span>Использование Redux в проекте<br><br>
    Например, сохранение объекта авторизованного пользователя.</span>
  </details>
  <details>
    <summary>Редактирование элементов</summary>
    <br>
    <span>Возможность обновить данные на сервере через PUT/PATCH запросы<br><br>
    Например, если это блог, должна быть возможность редактирования постов.</span>
  </details>
  <details>
    <summary>Удаление элементов</summary>
    <br>
    <span>Возможность удалять данные на сервере через DELETE запрос<br><br>
    Например, если это блог, должна быть возможность удаления постов.</span>
  </details>
  <details>
    <summary>Кастомные хуки</summary>
    <br>
    <span>Реализовать минимум 1 собственный хук React Hooks<br><br>
    Напрмер, хук для изменения темы <i>useDarkMode()</i></span>
  </details>
  <details>
    <summary>Loader</summary>
    <br>
    <span>При любом ожидании пользователя должен появляться loader (крутящаяся иконка-спиннер).<br><br>
    Подойдет любой loader, который впишется в дизайн.</span>
  </details>
  <details>
    <summary>Базовые компоненты</summary>
    <br>
    <span>Основные элементы, которые используются много раз во всем приложении, выносим в отдельные базовые компоненты (например input)</span>
  </details>
  <span>Для более удобной разработки Frontend части приложения, "тестовые" данные от сервера можно получать с помощью пакета json-server. Для этого нужно     написать свой json-server под ваш проект. В дальнейшем это нужно будет переписать на настоящий Backend.</span>
  
  <h2>Backend</h2>
  <span>Используем Node.js Express, MongoDB Для более простой настройки можно использовать облачную базу данных MongoDB Atlas Cloud Database или другие
  облачные сервисы).</span>
  <h3>Обязательно реализовать:</h3>
  <details>
    <summary>Настройка Express</summary>
    <br>
    <span>С помощью Express нужно добавить все роуты, необходимые приложению для работы по REST API. На них будут отправляться запросы от Frontend части.       <br><br>
    Например, если это блог, для получения данных о посте с id = 42 необходимо выполнить GET запрос на '/api/post/42'.</span>
  </details>
  <details>
    <summary>Все виды запросов</summary>
    <br>
    <span>Минимум 1 раз реализуйте работу с каждым из запросов: GET, POST, PUT и/или PATCH, DELETE</span>
  </details>
  <details>
    <summary>Использование промежуточных обработчиков</summary>
    <br>
    <span>Необходимо добавить минимум 1 кастомный middleware в проект.<br><br>
    Например для проверки авторизации пользователя в момент запроса к приватным данным.</span>
  </details>
  <details>
    <summary>Модели mongoose</summary>
    <br>
    <span>Для всех сущностей, которые будут храниться в MongoDB, создаем модель mongoose.<br><br>
    Например, если это блог, будет модель поста, пользователя.</span>
  </details>
  <details>
    <summary>Авторизация и регистрация</summary>
    <br>
    <span>Реализуйте функционал создания аккаунта и входа в него.<br><br>
    Используйте для этого JSON Web Token (JWT).</span>
  </details>
  <details>
    <summary>Восстановление пароля</summary>
    <br>
    <span>Внизу формы авторизации можно добавить кнопку "Забыли пароль". При клике на неё начнется процедура по восстановлению пароля.</span>
  </details>
  <span>Деплой можно реализовать любым удобным для вас способом (например использовать платформу Heroku. Также при желании можно реализовать деплой на VPS   с использованием Docker 🐳</span>  
</div>
