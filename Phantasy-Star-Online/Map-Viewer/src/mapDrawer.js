class MapDrawer {
    map;
    objects;
    scenario;
    position;
    mapRooms;
    zoom;
    drag;
    dragStart;
    dragEnd;
    canvas;
    speedRunMode;
    objectsManager;
    enableMaker;

    constructor() {
        this.position = new Position();
        this.zoom = 1.0;
        this.drag = false;
        this.speedRunMode = false;
        this.enableMaker = false;
    }

    init(canvas, enableMaker) {
        var self = this;
        self.canvas = canvas;
        self.enableMaker = enableMaker;
        if (self.enableMaker) {
            self.mapMaker = new MapMaker();
            self.mapMaker.init(self.canvas, self.zoom, self.map);
        }

        self.canvas.addEventListener("mousedown", function (event) {
            self.dragStart = {
                x: event.pageX - self.position.x,
                y: event.pageY - self.position.y,
            };

            self.drag = true;
        });

        self.canvas.addEventListener("mousemove", function (event) {
            if (self.drag) {
                self.dragEnd = {
                    x: event.pageX - self.canvas.offsetLeft,
                    y: event.pageY - self.canvas.offsetTop,
                };
                self.position.x = self.dragEnd.x - self.dragStart.x;
                self.position.y = self.dragEnd.y - self.dragStart.y;
            }
        });

        self.canvas.addEventListener("mouseup", function () {
            self.drag = false;
            self.dragStart = self.dragEnd;
        });

        self.canvas.addEventListener("wheel", function (event) {
            var newZoom = self.zoom - event.deltaY / 1000;
            self.zoom = newZoom < 0.1 ? 0.1 : newZoom;
        });

        var speedRunMode = document.getElementById("speed-run-mode");
        speedRunMode.addEventListener("change", function (e) {
            self.speedRunMode = e.currentTarget.checked;
        });
    }

    setObjectsManager(objectsManagers) {
        this.objectsManager = objectsManagers;
    }

    setMap(map) {
        this.map = map;
        if (this.enableMaker === true) {
            this.mapMaker.populateDropdown(
                this.map.enemies,
                this.objectsManager.objects
            );
        }
    }

    setScenario(scenario) {
        var self = this;

        self.scenario = scenario;
        self.zoom = 1;
        self.position = new Position();
        self.position.x = (self.canvas.width / 2) * self.zoom - 150;
        self.position.y = (self.canvas.height / 2) * self.zoom;

        document.getElementById("average-time").innerHTML = `${Math.floor(
            scenario.averageTime / 60
        )}:${scenario.averageTime % 60}`;

        self.mapRooms = new Array();

        for (let i = 0; i < self.scenario.rooms.length; i++) {
            var room = self.scenario.rooms[i];
            room.image = new Image();
            room.image.src = room.src;
            self.mapRooms.push(room);
        }

        self.mapMaker.setScenario(self.scenario);
    }

    draw(ctx) {
        var self = this;

        if (self.scenario !== undefined) {
            self.mapRooms.forEach((room) => {
                if (room.order !== undefined) ctx.globalAlpha = 1;
                else ctx.globalAlpha = 0.25;

                if (room.start === true || room.finish === true) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = room.start === true ? "aqua" : "orange";
                } else {
                    ctx.shadowColor = undefined;
                    ctx.shadowBlur = 0;
                }

                ctx.drawImage(
                    room.image,
                    self.position.x -
                        self.calculateCentreOffset(room.image.width),
                    self.position.y -
                        self.calculateCentreOffset(room.image.height),
                    room.image.width * self.zoom,
                    room.image.height * self.zoom
                );

                ctx.shadowColor = undefined;
                ctx.shadowBlur = 0;

                if (room.order === undefined && self.speedRunMode === true)
                    return;

                if (room.active === undefined || room.active === true) {
                    if (room.waves !== undefined) {
                        room.waves.forEach((wave) => {
                            if (
                                wave.active !== undefined &&
                                wave.active === true &&
                                wave.encounters !== undefined
                            ) {
                                wave.encounters.forEach((encounter) => {
                                    if (
                                        encounter.active !== undefined &&
                                        encounter.active === true
                                    ) {
                                        encounter.enemies.forEach((enemy) => {
                                            self.drawEnemy(
                                                ctx,
                                                enemy,
                                                self.getEnemy(
                                                    self.map.enemies,
                                                    enemy.name
                                                ),
                                                wave.optional
                                            );
                                        });
                                    }
                                });
                                if (wave.spawnLine !== undefined) {
                                    self.drawWaveSpawnLine(ctx, wave.spawnLine);
                                }
                                if (wave.spawnBox !== undefined) {
                                    self.drawWaveSpawnBox(ctx, wave.spawnBox);
                                }
                            }
                        });
                    }
                }

                if (room.objects !== undefined) {
                    room.objects.forEach((object) => {
                        self.drawObject(ctx, object);
                    });
                }
            });
        }
    }

    // Duplicated
    getEnemy(enemies, name) {
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].name === name) return enemies[i];
        }
        return undefined;
    }

    calculateCentreOffset(length) {
        return (length * this.zoom) / 2;
    }

    drawEnemy(ctx, enemy, enemyData, optional = false) {
        ctx.save();
        if (optional) ctx.globalAlpha = 0.25;
        this.drawCircle(ctx, enemy.position, enemyData.colour, "#222", 10);
        ctx.restore();
    }

    drawObject(ctx, object) {
        ctx.save();
        var mapObject = this.objectsManager.getObjectByType(object.type);

        if (mapObject.active) {
            if (mapObject.shape === "text")
                this.drawText(
                    ctx,
                    object.value,
                    object.position,
                    getColour(),
                    mapObject.fontSize
                );
            else if (mapObject.shape === "triangle")
                this.drawTriangle(
                    ctx,
                    object.position,
                    mapObject.colour,
                    mapObject.size
                );
            else if (mapObject.shape === "circle")
                this.drawCircle(
                    ctx,
                    object.position,
                    getColour(),
                    mapObject.outlineColour,
                    mapObject.size
                );
            else if (mapObject.shape === "sqaure")
                this.drawSqaure(
                    ctx,
                    object.position,
                    getColour(),
                    mapObject.outlineColour,
                    mapObject.size
                );
            else if (mapObject.shape === "rectangle")
                this.drawLine(
                    ctx,
                    object.position,
                    object.positionOffset,
                    getColour()
                );
            else if (mapObject.shape === "diamond")
                this.drawDiamond(
                    ctx,
                    object.position,
                    getColour(),
                    mapObject.outlineColour,
                    mapObject.size
                );
        }
        ctx.restore();

        function getColour() {
            return object.colour !== undefined
                ? object.colour
                : mapObject.colour;
        }
    }

    drawFloorButton(ctx, floorButton) {
        this.drawCircle(ctx, floorButton.position, "yellow", "orange", 6);
    }

    drawWaveSpawnLine(ctx, spawnLine) {
        this.drawDashedLine(ctx, spawnLine.position, spawnLine.positionOffset);
    }

    drawWaveSpawnBox(ctx, spawnBox) {
        this.drawDashedBox(ctx, spawnBox.position, "#FFF", spawnBox.size);
    }

    drawCircle(ctx, position, colour, borderColour, radius) {
        ctx.beginPath();
        ctx.arc(
            this.position.x + position.x * this.zoom,
            this.position.y + position.y * this.zoom,
            radius * this.zoom,
            0,
            2 * Math.PI
        );
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.lineWidth = 3 * this.zoom;
        ctx.strokeStyle = borderColour;
        ctx.stroke();
    }

    // https://stackoverflow.com/questions/8935930/create-equilateral-triangle-in-the-middle-of-canvas
    drawTriangle(ctx, position, colour, size) {
        ctx.fillStyle = colour;

        var xPos = this.position.x + position.x * this.zoom;
        var yPos = this.position.y + position.y * this.zoom;

        var h = size * (Math.sqrt(3) / 2);

        ctx.beginPath();
        ctx.save();
        ctx.translate(xPos, yPos);
        ctx.moveTo(0, -h / 2);
        ctx.lineTo(-size / 2, h / 2);
        ctx.lineTo(size / 2, h / 2);
        ctx.lineTo(0, -h / 2);

        ctx.stroke();
        ctx.fill();

        ctx.closePath();

        ctx.restore();
    }

    drawSqaure(ctx, position, colour, borderColour = "#222", baseSize = 16) {
        ctx.fillStyle = colour;
        ctx.strokeStyle = borderColour;
        var calculatedXPosition = this.calculateXPosition(position.x);
        var calculatedYPosition = this.calculateYPosition(position.y);
        var size = baseSize * this.zoom;

        ctx.fillRect(calculatedXPosition, calculatedYPosition, size, size);
        ctx.strokeRect(calculatedXPosition, calculatedYPosition, size, size);
    }

    drawDiamond(ctx, position, colour, borderColour = "#222", size = 16) {
        ctx.fillStyle = colour;
        ctx.strokeStyle = borderColour;

        var xPos = this.position.x + position.x * this.zoom;
        var yPos = this.position.y + position.y * this.zoom;
        ctx.lineWidth = 7 * this.zoom;
        ctx.beginPath();
        ctx.save();
        ctx.translate(xPos, yPos);
        ctx.moveTo(0, (size * this.zoom) / 2);
        ctx.lineTo((-size * this.zoom) / 2, 0);
        ctx.lineTo(0, (-size * this.zoom) / 2);
        ctx.lineTo((size * this.zoom) / 2, 0);
        ctx.lineTo(0, (size * this.zoom) / 2);

        ctx.stroke();
        ctx.fill();

        ctx.closePath();

        ctx.restore();
    }

    drawDashedBox(ctx, position, colour, size) {
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = colour;
        var calculatedXPosition = this.calculateXPosition(position.x);
        var calculatedYPosition = this.calculateYPosition(position.y);
        var xSize = size.x * this.zoom;
        var ySize = size.y * this.zoom;
        ctx.strokeRect(calculatedXPosition, calculatedYPosition, xSize, ySize);
        ctx.setLineDash([]);
    }

    drawLine(ctx, position, positionOffset, colour = "purple") {
        ctx.beginPath();
        ctx.moveTo(
            this.position.x + position.x * this.zoom,
            this.position.y + position.y * this.zoom
        );
        ctx.lineTo(
            this.position.x + positionOffset.x * this.zoom,
            this.position.y + positionOffset.y * this.zoom
        );
        ctx.lineWidth = 10 * this.zoom;
        ctx.strokeStyle = colour;
        ctx.stroke();
    }

    drawDashedLine(ctx, position, positionOffset, colour = "white") {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(
            this.calculateXPosition(position.x),
            this.calculateYPosition(position.y)
        );
        ctx.lineTo(
            this.calculateXPosition(positionOffset.x),
            this.calculateYPosition(positionOffset.y)
        );
        ctx.strokeStyle = colour;
        ctx.stroke();
        ctx.setLineDash([]);
    }

    drawText(ctx, text, position, colour, fontSize) {
        ctx.fillStyle = colour;
        ctx.font = `${fontSize * this.zoom}px serif`;
        ctx.fillText(
            text,
            this.position.x + position.x * this.zoom,
            this.position.y + position.y * this.zoom
        );
    }

    calculateXPosition(x) {
        return this.position.x + x * this.zoom;
    }

    calculateYPosition(y) {
        return this.position.y + y * this.zoom;
    }
}
