"use strict";

import Utils from "@/services/Utils";
import { BottomBar, NavBar } from "@/views/components";
import { Home, About, PostShow, Register, Error404 } from "@/views/pages";
import "@/index.scss";

interface IPage {
  render: () => string;
  after_render: () => any;
}

interface IRoutes {
  [key: string]: IPage;
}

interface IFetch {
  [key: string]: boolean;
}

const routes: IRoutes = {
  "/": Home,
  "/about": About,
  "/p/:id": PostShow,
  "/register": Register,
};

const isFetch: IFetch = {
  "/": true,
  "/p/:id": true,
};

const root: HTMLElement = document.getElementById("app");
const header: HTMLElement = root.querySelector(".header_container");
const content: HTMLElement = root.querySelector(".page_container");
const footer: HTMLElement = root.querySelector(".footer_container");

const router = async () => {
  header.innerHTML = NavBar();
  footer.innerHTML = BottomBar();

  let request = Utils.parseRequestURL();
  let parsedURL: string =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  let page: IPage = routes[parsedURL] ? routes[parsedURL] : Error404;

  let hasFetch: boolean = isFetch[parsedURL] ? isFetch[parsedURL] : false;
 
  content.innerHTML = page.render();
  if (hasFetch) {
    content.innerHTML = await page.after_render();
  }

  //injectTemplateByUrl(parsedURL); Dinamic import
};

// async function injectTemplateByUrl(parsedURL: string) {
//   let routeFile: string = routes[parsedURL]
//     ? routes[parsedURL]
//     : "error404";

//   let hasFetch: boolean = isFetch[parsedURL] ? isFetch[parsedURL] : false;
//   let lazyLoaded = await import(`./views/pages/${routeFile}`);
//   let page: IPage = lazyLoaded.default;

//   content.innerHTML = page.render();
//   if (hasFetch) {
//     content.innerHTML = await page.after_render();
//   }
// }

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("DOMContentLoaded", router);
