Popup = {
 popupElement: HTMLElement,
 contentsElement: HTMLElement,
 titleElement: HTMLElement,
 contentElement: HTMLElement,
 closeIconElement: HTMLElement,
 initialise() {
  this.popupElement = document.createElement("div");
  this.popupElement.id = "popup";
  this.contentsElement = document.createElement("div");
  this.titleElement = document.createElement("h1");
  this.contentElement = document.createElement("div");
  this.closeIconElement = document.createElement("div");
  this.closeIconElement.id = "close";
  this.closeIconElement.title = "Close";
  this.closeIconElement.innerHTML = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>`;

  this.closeIconElement.addEventListener("click", () => {
   this.popupElement.className = "";
  });

  this.contentsElement.appendChild(this.closeIconElement);
  this.contentsElement.appendChild(this.titleElement);
  this.contentsElement.appendChild(this.contentElement);
  this.contentsElement.id = "contents";

  this.popupElement.appendChild(this.contentsElement);

  document.getElementsByTagName("body")[0].appendChild(this.popupElement);
 },
 render(title, contentsHtml) {
  this.titleElement.innerText = title;
  this.contentElement.innerHTML = contentsHtml;
  this.popupElement.className = "show";
 },
};
