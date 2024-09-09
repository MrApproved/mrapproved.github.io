class MapMaker {
    map;
    canvas;
    enemies;
    objects;
    zoom;
    scenario = new Scenario();
    roomIndex;
    waveIndex;
    encounterIndex;
    mapDrawer;

    objectsDropDown;
    enemiesDropDown;

    constructor() {
        this.map = {};
    }

    init(canvas, mapDrawer) {
        var self = this;
        self.canvas = canvas;
        self.mapDrawer = mapDrawer;
        self.zoom = self.mapDrawer.zoom;
        self.roomIndex = -1;
        self.waveIndex = -1;
        self.encounterIndex = -1;

        self.canvas.addEventListener("mouseup", function (event) {
            var x = Math.round(
                (event.pageX - self.mapDrawer.position.x) / self.mapDrawer.zoom
            );
            var y = Math.round(
                (event.pageY - self.mapDrawer.position.y) / self.mapDrawer.zoom
            );

            var selectedValue =
                self.objectsDropDown.disabled == false
                    ? self.objectsDropDown.options[
                          self.objectsDropDown.selectedIndex
                      ].text
                    : self.enemiesDropDown.options[
                          self.enemiesDropDown.selectedIndex
                      ].text;

            if (self.roomIndex !== -1) {
                if (self.waveIndex !== -1) {
                    var newEnemy = {};
                    newEnemy.name = selectedValue;
                    newEnemy.position = {
                        x: x,
                        y: y,
                    };

                    self.scenario.rooms[self.roomIndex].waves[
                        self.waveIndex
                    ].encounters[self.encounterIndex].enemies.push(newEnemy);
                } else {
                    if (
                        self.scenario.rooms[self.roomIndex].objects ===
                        undefined
                    ) {
                        self.scenario.rooms[self.roomIndex].objects = [];
                    }
                    var object = self.getObject(selectedValue);
                    var position = new Position();
                    position.x = x;
                    position.y = y;
                    var newObject = {};
                    eval(`newObject = new ${object.mapMakerClass}(position)`);

                    newObject.type = selectedValue;
                    newObject.position = position;

                    self.scenario.rooms[self.roomIndex].objects.push(newObject);
                }
            }

            self.drawScenarioInfo();
        });
    }

    populateDropdown(enemies, objects) {
        var self = this;
        self.enemies = enemies;
        self.objects = objects;

        self.objectsDropDown = document.getElementById(
            "map-drawer-writer-objects"
        );

        self.enemiesDropDown = document.getElementById(
            "map-drawer-writer-enemies"
        );

        var i,
            L = self.objectsDropDown.options.length - 1;
        for (i = L; i >= 0; i--) {
            self.objectsDropDown.remove(i);
        }

        i = 0;
        L = self.enemiesDropDown.options.length - 1;
        for (i = L; i >= 0; i--) {
            self.enemiesDropDown.remove(i);
        }

        self.enemies.forEach((enemy) => {
            var option = document.createElement("option");
            option.text = option.value = enemy.name;
            self.enemiesDropDown.add(option);
        });

        objects.forEach((object) => {
            var option = document.createElement("option");
            option.text = option.value = object.type;
            self.objectsDropDown.add(option);
        });

        self.objectsDropDown.disabled = true;
        self.enemiesDropDown.disabled = true;
    }

    setScenario(scenario) {
        var self = this;
        self.scenario = scenario;
        self.drawScenarioInfo();
        self.selectRoom(-1);
    }

    drawScenarioInfo() {
        var scenarioEle = document.getElementById("map-drawer-scenario");
        var element = scenarioEle.getElementsByTagName("div")[0];
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

                self.objectsDropDown.disabled = false;
                self.enemiesDropDown.disabled = true;
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
                // We only want to allow specific values to be modified
                modal.display(
                    {
                        optional: self.scenario.rooms[i].optional,
                        order: self.scenario.rooms[i].order,
                    },
                    (json) => {
                        self.scenario.rooms[i] = {
                            ...self.scenario.rooms[i],
                            ...JSON.parse(json),
                        };
                    }
                );
            });

            element.appendChild(objectsDiv);
            element.appendChild(wavesDiv);
        });
    }

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
                    modal.display(room.objects[i], (json) => {
                        room.objects[i] = JSON.parse(json);
                    });
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

                        self.objectsDropDown.disabled = true;
                        self.enemiesDropDown.disabled = false;
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
        for (var i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].name === name) return this.enemies[i];
        }
        return undefined;
    }

    getObject(type) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].type === type) return this.objects[i];
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
