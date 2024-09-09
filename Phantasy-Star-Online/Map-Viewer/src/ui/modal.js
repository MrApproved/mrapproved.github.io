class Modal {
    width = 300;
    height = 300;
    modalDiv;
    titleDiv;
    headerSpan;
    contentsDiv;
    okButton;

    activeObject;

    constructor() {
        this.createModal();
    }

    createModal() {
        var self = this;
        self.modalDiv = document.createElement("div");
        self.modalDiv.id = "modal";
        self.titleDiv = document.createElement("div");
        self.titleDiv.class = "header";
        self.headerSpan = document.createElement("span");
        self.contentsDiv = document.createElement("textarea");
        self.contentsDiv.class = "body";

        var closeButton = document.createElement("button");
        closeButton.innerText = "X";

        closeButton.addEventListener("click", () => {
            self.modalDiv.style.display = "none";
        });

        self.okButton = document.createElement("button");
        self.okButton.innerText = "DONE";

        self.okButton.addEventListener("click", () => {
            self.updateMethod(self.contentsDiv.value);
            self.modalDiv.style.display = "none";
        });

        self.titleDiv.appendChild(self.headerSpan);
        self.titleDiv.appendChild(closeButton);
        self.titleDiv.appendChild(self.okButton);
        self.modalDiv.appendChild(self.titleDiv);
        self.modalDiv.appendChild(self.contentsDiv);

        closeButton.click();
        document.getElementsByTagName("body")[0].appendChild(self.modalDiv);
    }

    display(obj, update) {
        var self = this;
        self.contentsDiv.value = JSON.stringify(obj);
        self.updateMethod = update;
        self.modalDiv.style.display = "block";
    }
}
