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
        self.routeMaking = false;
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

            if (self.routeMaking === true) {
                var position = new Position();
                position.x = x;
                position.y = y;
                if (self.scenario.route === undefined) self.scenario.route = [];
                self.scenario.route.push(position);
            } else if (self.roomIndex !== -1) {
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

        document
            .getElementById("map-drawer-unselect")
            .addEventListener("click", () => {
                self.routeMaking = false;
                self.roomIndex = -1;
                self.waveIndex = -1;
                self.encounterIndex = -1;
                self.drawScenarioInfo();
            });

        document
            .getElementById("map-drawer-edit")
            .addEventListener("click", () => {
                modal.display(
                    {
                        name: self.scenario.name,
                        averageTime: self.scenario.averageTime,
                        route: self.scenario.route,
                    },
                    (json) => {
                        var properties = JSON.parse(json);
                        (self.scenario.name = properties.name),
                            (self.scenario.averageTime =
                                properties.averageTime),
                            (self.scenario.route = properties.route),
                            self.drawScenarioInfo();
                    }
                );
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
        var element = scenarioEle.getElementsByTagName("div")[1];
        var self = this;
        self.scenario;
        element.innerHTML = "";

        var nameDiv = document.createElement("div");
        nameDiv.innerHTML = `Name: ${self.scenario.name}`;
        element.appendChild(nameDiv);

        var averageTimeDiv = document.createElement("div");
        averageTimeDiv.innerHTML = `Avg Time: ${self.scenario.averageTime}`;
        element.appendChild(averageTimeDiv);

        var routeDiv = self.createLabelDiv(element, "Route");
        var routeButton = document.createElement("button");
        routeButton.innerHTML =
            self.routeMaking === true ? "SELECTED" : "SELECT";

        routeButton.addEventListener("click", () => {
            self.routeMaking = true;
            self.roomIndex = -1;
            self.waveIndex = -1;
            self.encounterIndex = -1;
            self.drawScenarioInfo();
        });

        routeDiv.append(routeButton);

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
                self.roomIndex === i && self.waveIndex === -1
                    ? "SELECTED"
                    : "SELECT";

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
                if (self.scenario.rooms[i].waves === undefined)
                    self.scenario.rooms[i].waves = [];
                self.scenario.rooms[i].waves.push({
                    order: self.scenario.rooms[i].waves.length + 1,
                    active: true,
                    optional: false,
                    encounters: [],
                });
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
                        start: self.scenario.rooms[i].start,
                        finish: self.scenario.rooms[i].finish,
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
            element.appendChild(document.createElement("br"));
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
                var waveDiv = self.createLabelDiv(element, "Wave");
                self.createLabelDiv(element, wave.order);
                self.createLabelDiv(element, wave.optional);

                var editButton = document.createElement("button");
                editButton.innerHTML = "EDIT";

                editButton.addEventListener("click", () => {
                    modal.display(
                        {
                            optional:
                                self.scenario.rooms[roomIndex].waves[i]
                                    .optional,
                            order: self.scenario.rooms[roomIndex].waves[i]
                                .order,
                            spawnBox:
                                self.scenario.rooms[roomIndex].waves[i]
                                    .spawnBox,
                            spawnLines:
                                self.scenario.rooms[roomIndex].waves[i]
                                    .spawnLines,
                        },
                        (json) => {
                            self.scenario.rooms[roomIndex].waves[i] = {
                                ...self.scenario.rooms[roomIndex].waves[i],
                                ...JSON.parse(json),
                            };
                        }
                    );
                });

                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "DELETE";

                deleteButton.addEventListener("click", () => {
                    room.waves.splice(i, 1);
                    self.drawScenarioInfo();
                });

                var spawnBoxButton = document.createElement("button");
                spawnBoxButton.innerHTML =
                    room.waves[i].spawnBox === undefined
                        ? "+ SPAWNBOX"
                        : "- SPAWNBOX";
                spawnBoxButton.addEventListener("click", () => {
                    if (room.waves[i].spawnBox === undefined) {
                        room.waves[i].spawnBox = {
                            position: new Position(),
                            size: {
                                x: 32,
                                y: 32,
                            },
                        };
                    } else {
                        room.waves[i].spawnBox = undefined;
                    }

                    self.drawScenarioInfo();
                });

                var spawnLineButton = document.createElement("button");
                spawnLineButton.innerHTML =
                    room.waves[i].spawnLines === undefined
                        ? "+ SPAWNLINE"
                        : "- SPAWNLINE";
                spawnLineButton.addEventListener("click", () => {
                    if (room.waves[i].spawnLines === undefined) {
                        room.waves[i].spawnLines = [
                            {
                                position: {
                                    x: 0,
                                    y: 0,
                                },
                                positionOffset: {
                                    x: 32,
                                    y: 32,
                                },
                            },
                        ];
                    } else {
                        room.waves[i].spawnLines = undefined;
                    }

                    self.drawScenarioInfo();
                });

                waveDiv.appendChild(editButton);
                waveDiv.appendChild(deleteButton);
                waveDiv.appendChild(spawnBoxButton);
                waveDiv.appendChild(spawnLineButton);

                var encountersLabelDev = self.createLabelDiv(
                    element,
                    "Encounters"
                );

                var addEncounterButton = document.createElement("button");
                addEncounterButton.innerHTML = "+ ENCOUNTER";
                addEncounterButton.addEventListener("click", () => {
                    wave.encounters.push({
                        order: wave.encounters.length + 1,
                        active: true,
                        enemies: [],
                    });
                    self.drawScenarioInfo();
                });

                encountersLabelDev.append(addEncounterButton);

                wave.encounters.forEach((encounter, j) => {
                    var encounterLabelDiv = self.createLabelDiv(
                        element,
                        "Encounter"
                    );

                    var encounterEditButton = document.createElement("button");
                    encounterEditButton.innerHTML = "EDIT";
                    encounterEditButton.addEventListener("click", () => {
                        modal.display(
                            {
                                order: self.scenario.rooms[roomIndex].waves[i]
                                    .encounters[j].order,
                            },
                            (json) => {
                                self.scenario.rooms[roomIndex].waves[
                                    i
                                ].encounters[j] = {
                                    ...self.scenario.rooms[roomIndex].waves[i]
                                        .encounters[j],
                                    ...JSON.parse(json),
                                };

                                self.drawScenarioInfo();
                            }
                        );
                    });

                    encounterLabelDiv.append(encounterEditButton);

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

        encounter.enemies.forEach((enemy, i) => {
            var enemyDiv = self.createLabelDiv(element, enemy.name);

            var editButton = document.createElement("button");
            editButton.innerHTML = "EDIT";
            editButton.addEventListener("click", () => {
                modal.display(encounter.enemies[i], (json) => {
                    encounter.enemies[i] = JSON.parse(json);
                });
            });

            enemyDiv.append(editButton);

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
