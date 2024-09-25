var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mapDrawer = new MapDrawer();
var enemiesInfo = new EnemiesInfo();
var waveSelector = new WaveSelector();
var roomManager = new RoomManager(waveSelector);
var scenarioSelector = new ScenarioSelector(roomManager);
var mapSelector = new MapSelector(scenarioSelector, enemiesInfo);
var toggleManager = new ToggleManager();
var objectsManagers = new ObjectsManager();
var mapMaker = new MapMaker();
var modal = new Modal();

window.addEventListener(
    "resize",
    function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
    true
);

window.dispatchEvent(new Event("resize"));

function draw() {
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000";
    ctx.lineWidth = 1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    mapDrawer.draw(ctx);
}

setInterval(function () {
    draw();
}, 1000 / 60);

mapDrawer.init(canvas, true);
mapDrawer.setObjectsManager(objectsManagers);
mapSelector.init(maps);
