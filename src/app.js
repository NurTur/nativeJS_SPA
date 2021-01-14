"use strict";

import Home from "./views/pages/Home.js";
import About from "./views/pages/About.js";
import Error404 from "./views/pages/Error404.js";
import PostShow from "./views/pages/PostShow.js";
import Register from "./views/pages/Register.js";

import Navbar from "./views/components/Navbar.js";
import Bottombar from "./views/components/Bottombar.js";

import Utils from "./services/Utils.js";

// Список поддерживаемых маршрутов. Любой URL-адрес, отличный от этих маршрутов, вызовет ошибку 404
const routes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register,
};

// Код роутера. Принимает URL-адрес, сверяется со списком поддерживаемых маршрутов и затем отображает соответствующую страницу содержимого.
const router = async () => {
  // Элемент представления отложенной загрузки:
  const header = document.getElementById("header_container") || null;
  const content = null || document.getElementById("page_container") ;
  const footer = document.getElementById("footer_container") || null;

  // Визуализировать верхний и нижний колонтитулы страницы
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Bottombar.render();
  await Bottombar.after_render();

  //Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL();

  // Проанализируйте URL-адрес и, если он содержит часть идентификатора, измените его на строку ": id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Получите страницу из нашего хеша поддерживаемых маршрутов.
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  if (content) {
    content.innerHTML = await page.render();
    await page.after_render();
  }
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
