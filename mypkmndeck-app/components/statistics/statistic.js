const Statistic = {
 element: HTMLElement,
 messageTemplate: String,
 displaySplitter: Boolean,
 setup(displaySplitter) {
  this.displaySplitter = displaySplitter;
  this.element = document.createElement("li");
  this.update();
 },

 calculate() {},

 update() {
  let percentage = this.calculate().toFixed(2);
  this.element.innerText = `${this.messageTemplate}${isNaN(percentage) ? "0" : percentage}${this.displaySplitter ? " | " : ""}`;
 },
};
