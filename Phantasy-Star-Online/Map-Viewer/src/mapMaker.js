class MapMaker {
    map;
    canvas;
    enemies;
    zoom;

    constructor() {
        self.map = {};
    }

    init(canvas, zoom) {
        var self = this;
        self.canvas = canvas;
        self.zoom = zoom;

        var mapDrawerWriter = document.getElementById("map-drawer-writer");

        self.canvas.addEventListener("mouseup", function (event) {
            var x = Math.round(
                (event.pageX - (self.canvas.width - 300) / 2) / self.zoom
            );
            var y = Math.round(
                (event.pageY - self.canvas.height / 2) / self.zoom
            );

            var mapDrawerWriterDiv = document.createElement("div");
            var mapDrawerWriterSelect = document.getElementById(
                "map-drawer-writer-select"
            );
            var mapDrawerWriterOutput =
                mapDrawerWriter.getElementsByClassName("output")[0];
            var selectedValue =
                mapDrawerWriterSelect.options[
                    mapDrawerWriterSelect.selectedIndex
                ].text;
            var objectProperty = "type";

            if (self.getEnemy(selectedValue) !== undefined)
                objectProperty = "name";
            var newObject = {};
            newObject[objectProperty] = selectedValue;
            (newObject.position = {
                x: x,
                y: y,
            }),
                (mapDrawerWriterDiv.innerHTML = `${JSON.stringify(
                    newObject
                ).replace(/"([^"]+)":/g, "$1:")},`);

            mapDrawerWriterOutput.appendChild(mapDrawerWriterDiv);
        });

        var mapDrawerWriterButtonsContainer =
            mapDrawerWriter.getElementsByClassName("buttons")[0];

        var clearButton = document.createElement("button");
        clearButton.innerHTML = "Clear";
        clearButton.addEventListener("click", () => {
            var mapDrawerWriterOutput = document
                .getElementById("map-drawer-writer")
                .getElementsByClassName("output")[0];
            mapDrawerWriterOutput.innerHTML = "";
        });

        var waveButton = document.createElement("button");
        waveButton.innerHTML = "Wave";
        waveButton.addEventListener("click", () => {
            var mapDrawerWriterOutput = document
                .getElementById("map-drawer-writer")
                .getElementsByClassName("output")[0];
            mapDrawerWriterOutput.innerHTML = "";
        });

        mapDrawerWriterButtonsContainer.appendChild(waveButton);
        mapDrawerWriterButtonsContainer.appendChild(clearButton);
    }

    populateDropdown(enemies, objects) {
        self.enemies = enemies;

        var mapDrawerWriterSelect = document.getElementById(
            "map-drawer-writer-select"
        );

        var i,
            L = mapDrawerWriterSelect.options.length - 1;
        for (i = L; i >= 0; i--) {
            mapDrawerWriterSelect.remove(i);
        }

        self.enemies.forEach((enemy) => {
            var option = document.createElement("option");
            option.text = option.value = enemy.name;
            mapDrawerWriterSelect.add(option);
        });

        objects.forEach((object) => {
            var option = document.createElement("option");
            option.text = option.value = object.type;
            mapDrawerWriterSelect.add(option);
        });
    }

    // Duplicated
    getEnemy(name) {
        for (var i = 0; i < self.enemies.length; i++) {
            if (self.enemies[i].name === name) return self.enemies[i];
        }
        return undefined;
    }
}
