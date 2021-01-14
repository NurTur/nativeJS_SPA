"use strict";

import Utils from "./services/Utils.js";
import { BottomBar, NavBar } from "./views/components/index.js";
import {
  Home,
  About,
  Error404,
  PostShow,
  Register,
} from "./views/pages/index.js";

// Список поддерживаемых маршрутов. Любой URL-адрес, отличный от этих маршрутов, вызовет ошибку 404
const routes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register,
};

const isFetch = {
  "/": true,
};

const router = async () => {
  // Элемент представления отложенной загрузки:
  const header = document.getElementById("header_container") || null;
  const content = document.getElementById("page_container") || null;
  const footer = document.getElementById("footer_container") || null;

  // Визуализировать верхний и нижний колонтитулы страницы

  header.innerHTML = await NavBar.render();
  await NavBar.after_render();
  footer.innerHTML = await BottomBar.render();
  await BottomBar.after_render();

  //Get the parsed URl from the addressbar
  let request = Utils.parseRequestURL();

  // Проанализируйте URL-адрес и, если он содержит часть идентификатора, измените его на строку ": id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  let hasFetch = isFetch[parsedURL] ? isFetch[parsedURL] : false;

  if (content) {
    content.innerHTML = await page.render();
    if (hasFetch) {
      content.innerHTML = await page.after_render();
    } else {
      await page.after_render();
    }
  }
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
