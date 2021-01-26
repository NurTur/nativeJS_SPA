"use strict";

import Utils from "@/services/Utils";
import { BottomBar, NavBar } from "@/views/components";
import { Home, About, Error404, PostShow, Register } from "@/views/pages";
import "@/index.scss";

const routes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register,
};

const isFetch = {
  "/": true,
  "/p/:id": true,
};

const router = async () => {
  const root = document.getElementById("app") || null;
  const header = root.querySelector(".header_container") || null;
  const content = root.querySelector(".page_container") || null;
  const footer = root.querySelector(".footer_container") || null;

  header.innerHTML = NavBar();
  footer.innerHTML = BottomBar();

  let request = Utils.parseRequestURL();

  // Проанализируйте URL-адрес и, если он содержит часть идентификатора, измените его на строку ": id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  let hasFetch = isFetch[parsedURL] ? isFetch[parsedURL] : false;

  content.innerHTML = await page.render();
  if (hasFetch) {
    content.innerHTML = await page.after_render();
  }
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("DOMContentLoaded", router);
