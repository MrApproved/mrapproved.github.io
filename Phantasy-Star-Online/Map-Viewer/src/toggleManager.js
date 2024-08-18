class ToggleManager {
    constructor() {
        Array.from(document.getElementsByClassName("expander")).forEach(
            (ele) => {
                var parent = ele.parentElement;
                ele.addEventListener("click", function () {
                    parent.className =
                        parent.className.indexOf("hide") > 0
                            ? parent.className.replace("hide", "")
                            : parent.className + " hide";
                });
            }
        );
    }
}
