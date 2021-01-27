export default function NavBar() {
  return `<nav class="navbar" role="navigation" aria-label="main navigation">
       <div class="container">
       <div class="logo"></div>
           <div class="navbar-brand">
               <a class="navbar-item" href="/#/">
                   <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo">
                  
               </a>
               <div role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
               </div>
           </div>
           <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
               <div class="navbar-start">
                   <a class="navbar-item" href="/#/">
                       Home
                   </a>
                   <a class="navbar-item" href="/#/about">
                       About
                   </a>
                   <a class="navbar-item" href="/#/secret">
                       Secret
                   </a>
               </div>
               <div class="navbar-end">
                   <div class="navbar-item">
                       <div class="buttons">
                           <a class="button is-primary" href="/#/register">
                               <strong>Sign up</strong>
                           </a>
                       </div>
                   </div>
               </div>
          </div>
       </div>
   </nav>`;
}
