class MapMaker {
    map;
    canvas;
    enemies;
    zoom;
    scenario = new Scenario();
    roomIndex;
    waveIndex;
    encounterIndex;

    constructor() {
        self.map = {};
    }

    init(canvas, zoom) {
        var self = this;
        self.canvas = canvas;
        self.zoom = zoom;
        self.roomIndex = -1;
        self.waveIndex = -1;
        self.encounterIndex = -1;

        //var mapDrawerWriter = document.getElementById("map-drawer-writer");

        self.canvas.addEventListener("mouseup", function (event) {
            var x = Math.round(
                (event.pageX - (self.canvas.width - 300) / 2) / self.zoom
            );
            var y = Math.round(
                (event.pageY - self.canvas.height / 2) / self.zoom
            );

            // var mapDrawerWriterDiv = document.createElement("div");
            var mapDrawerWriterSelect = document.getElementById(
                "map-drawer-writer-select"
            );
            // var mapDrawerWriterOutput =
            //     mapDrawerWriter.getElementsByClassName("output")[0];
            var selectedValue =
                mapDrawerWriterSelect.options[
                    mapDrawerWriterSelect.selectedIndex
                ].text;
            var objectProperty = "type";

            if (self.getEnemy(selectedValue) !== undefined)
                objectProperty = "name";
            var newObject = {};
            newObject[objectProperty] = selectedValue;
            newObject.position = {
                x: x,
                y: y,
            };
            // mapDrawerWriterDiv.innerHTML = `${JSON.stringify(newObject).replace(
            //     /"([^"]+)":/g,
            //     "$1:"
            // )},`;

            if (self.roomIndex !== -1) {
                if (self.waveIndex !== -1 && self.roomIndex !== -1) {
                    self.scenario.rooms[self.roomIndex].waves[
                        self.waveIndex
                    ].encounters[self.encounterIndex].enemies.push(newObject);
                } else {
                    if (
                        self.scenario.rooms[self.roomIndex].objects ===
                        undefined
                    ) {
                        self.scenario.rooms[self.roomIndex].objects = [];
                    }
                    self.scenario.rooms[self.roomIndex].objects.push(newObject);
                }
            }

            //mapDrawerWriterOutput.appendChild(mapDrawerWriterDiv);
            self.drawScenarioInfo();
        });

        // var mapDrawerWriterButtonsContainer =
        //     mapDrawerWriter.getElementsByClassName("buttons")[0];

        // var clearButton = document.createElement("button");
        // clearButton.innerHTML = "Clear";
        // clearButton.addEventListener("click", () => {
        //     var mapDrawerWriterOutput = document
        //         .getElementById("map-drawer-writer")
        //         .getElementsByClassName("output")[0];
        //     mapDrawerWriterOutput.innerHTML = "";
        // });

        // var waveButton = document.createElement("button");
        // waveButton.innerHTML = "Wave";
        // waveButton.addEventListener("click", () => {
        //     var mapDrawerWriterOutput = document
        //         .getElementById("map-drawer-writer")
        //         .getElementsByClassName("output")[0];
        //     mapDrawerWriterOutput.innerHTML = "";
        // });

        // mapDrawerWriterButtonsContainer.appendChild(waveButton);
        // mapDrawerWriterButtonsContainer.appendChild(clearButton);
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

    setScenario(scenario) {
        var self = this;
        self.scenario = scenario;
        self.drawScenarioInfo();
        self.selectRoom(-1);
    }

    drawScenarioInfo() {
        var element = document.getElementById("map-drawer-scenario");
        var self = this;
        self.scenario;
        element.innerHTML = "";

        var nameDiv = document.createElement("div");
        nameDiv.innerHTML = self.scenario.name;
        element.appendChild(nameDiv);

        var averageTimeDiv = document.createElement("div");
        averageTimeDiv.innerHTML = self.scenario.averageTime;
        element.appendChild(averageTimeDiv);

        var roomsDiv = document.createElement("div");
        roomsDiv.innerHTML = "Rooms";

        self.populateRoomsDiv(roomsDiv);

        element.appendChild(roomsDiv);
    }

    populateRoomsDiv(element) {
        var self = this;
        self.scenario.rooms.forEach((room, i) => {
            self.createLabelDiv(
                element,
                `Order: ${room.order === undefined ? "-" : room.order}`
            );

            if (room.finish !== undefined)
                self.createLabelDiv(element, `Finish: ${room.finish}`);

            if (room.start !== undefined)
                self.createLabelDiv(element, `Start: ${room.start}`);

            var objectsDiv = document.createElement("div");
            objectsDiv.innerHTML = "Objects";

            var addObjectButton = document.createElement("button");

            addObjectButton.innerHTML =
                self.roomIndex === i ? "SELECTED" : "SELECT";

            addObjectButton.addEventListener("click", () => {
                self.selectRoom(i);
                self.waveIndex = -1;
                self.encounterIndex = -1;
                self.drawScenarioInfo();
            });

            objectsDiv.append(addObjectButton);

            self.populateObjectsDiv(room, objectsDiv);

            var wavesDiv = document.createElement("div");
            wavesDiv.innerHTML = "Waves";

            var addWaveButton = document.createElement("button");
            addWaveButton.innerHTML = "+ WAVE";
            addWaveButton.addEventListener("click", () => {
                if (room.waves === undefined) room.waves = [];
                room.waves.push({ order: 100, encounters: [] });
                self.drawScenarioInfo();
            });

            wavesDiv.append(addWaveButton);

            self.populateWavesDiv(room, i, wavesDiv);

            var editButton = document.createElement("button");
            editButton.innerHTML = "EDIT";
            element.append(editButton);

            editButton.addEventListener("click", () => {
                alert("not implemented");
            });

            element.appendChild(objectsDiv);
            element.appendChild(wavesDiv);
        });
    }

    // addObject(room) {
    //     var self = this;
    //     var type = prompt("Type");
    //     var object = new MapObject();
    //     object.type = type;
    //     room.objects.push(object);
    //     self.drawScenarioInfo();
    // }

    populateObjectsDiv(room, element) {
        var self = this;
        if (room.objects !== undefined) {
            room.objects.forEach((object, i) => {
                var typeDiv = document.createElement("div");
                typeDiv.innerHTML = object.type;
                element.appendChild(typeDiv);

                var editObjectButton = document.createElement("button");
                editObjectButton.innerHTML = "EDIT";

                editObjectButton.addEventListener("click", function () {
                    self.promptObjectInputs(object);
                });

                typeDiv.append(editObjectButton);

                var removeObjectButton = document.createElement("button");
                removeObjectButton.innerHTML = "DELETE";

                removeObjectButton.addEventListener("click", function () {
                    room.objects.splice(i, 1);
                    self.drawScenarioInfo();
                });

                typeDiv.append(removeObjectButton);
            });
        }
    }

    populateWavesDiv(room, roomIndex, element) {
        var self = this;
        if (room.waves !== undefined) {
            room.waves.forEach((wave, i) => {
                self.createLabelDiv(element, wave.order);
                self.createLabelDiv(element, wave.optional);
                var encountersLabelDev = self.createLabelDiv(
                    element,
                    "Encounters"
                );

                var addEncounterButton = document.createElement("button");
                addEncounterButton.innerHTML = "+ ENCOUNTER";
                addEncounterButton.addEventListener("click", () => {
                    wave.encounters.push({ order: 1, enemies: [] });
                    self.drawScenarioInfo();
                });

                encountersLabelDev.append(addEncounterButton);

                wave.encounters.forEach((encounter, j) => {
                    var encounterLabelDiv = self.createLabelDiv(
                        element,
                        "Encounter"
                    );

                    var encounterSelectButton =
                        document.createElement("button");
                    encounterSelectButton.innerHTML =
                        roomIndex === self.roomIndex &&
                        self.waveIndex === i &&
                        self.encounterIndex === j
                            ? "SELECTED"
                            : "SELECT";
                    encounterSelectButton.addEventListener("click", () => {
                        self.selectRoom(roomIndex);
                        self.waveIndex = i;
                        self.encounterIndex = j;
                        self.drawScenarioInfo();
                    });

                    encounterLabelDiv.append(encounterSelectButton);

                    var encounterDeleteButton =
                        document.createElement("button");
                    encounterDeleteButton.innerHTML = "DELETE";
                    encounterDeleteButton.addEventListener("click", () => {
                        wave.encounters.splice(j, 1);
                        self.drawScenarioInfo();
                    });

                    encounterLabelDiv.append(encounterDeleteButton);

                    var divEncounter = document.createElement("div");
                    self.populateEncountersDiv(encounter, divEncounter);
                    element.append(divEncounter);
                });

                //element.append(spawnBoxButton);
            });
        }
    }

    populateEncountersDiv(encounter, element) {
        var self = this;
        self.createLabelDiv(element, `Order: ${encounter.order}`);
        self.createLabelDiv(element, `Optional: ${encounter.optional}`);

        encounter.enemies.forEach((enemy, i) => {
            var enemyDiv = self.createLabelDiv(element, enemy.name);

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "DELETE";
            deleteButton.addEventListener("click", () => {
                encounter.enemies.splice(i, 1);
                self.drawScenarioInfo();
            });

            enemyDiv.append(deleteButton);
        });
    }

    promptObjectInputs(object) {
        Object.keys(object).forEach((property) => {
            if (typeof object[property] === "object") {
                var objectProperty = object[property];
                Object.keys(objectProperty).forEach((prop) => {
                    objectProperty[prop] = prompt(
                        `${property} - ${prop}`,
                        objectProperty[prop]
                    );
                });
            } else object[property] = prompt(property, object[property]);
        });
    }

    // Duplicated
    getEnemy(name) {
        for (var i = 0; i < self.enemies.length; i++) {
            if (self.enemies[i].name === name) return self.enemies[i];
        }
        return undefined;
    }

    selectRoom(index) {
        var self = this;
        self.scenario.rooms.forEach((room) => {
            room.selected = false;
        });

        self.roomIndex = index;
        if (self.roomIndex > -1)
            self.scenario.rooms[self.roomIndex].selected = true;
    }

    createLabelDiv(parentElement, text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        parentElement.appendChild(div);
        return div;
    }
}

class MapObject {
    type;
    position;

    constructor() {
        this.position = { x: 0, y: 0 };
    }
}
