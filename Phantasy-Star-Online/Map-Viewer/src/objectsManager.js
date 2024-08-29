class ObjectsManager {
    objects;

    constructor() {
        this.objects = [
            {
                type: "label",
                shape: "text",
                colour: "#FFF",
                fontSize: 24,
            },
            {
                type: "start",
                shape: "triangle",
                colour: "skyblue",
                size: 32,
            },
            {
                type: "finish",
                shape: "triangle",
                colour: "orangered",
                size: 32,
            },
            {
                type: "item_box",
                shape: "sqaure",
                size: 12,
                colour: "#FFF",
                outlineColour: "orange",
            },
            {
                type: "special_item_box",
                shape: "sqaure",
                size: 12,
                colour: "brown",
                outlineColour: "orange",
            },
            {
                type: "door_switch",
                shape: "circle",
                size: 9,
                colour: "cyan",
                outlineColour: "white",
            },
            {
                type: "door",
                shape: "rectangle",
                colour: "lime",
            },
            {
                type: "laser_switch",
                shape: "circle",
                size: 9,
                colour: "purple",
                outlineColour: "white",
            },
            {
                type: "laser",
                shape: "rectangle",
                colour: "purple",
            },
            {
                type: "explosive_trap",
                shape: "sqaure",
                size: 9,
                colour: "red",
                outlineColour: "orange",
            },
            {
                type: "floor_button",
                shape: "circle",
                size: 6,
                colour: "yellow",
                outlineColour: "orange",
            },
            {
                type: "capsule",
                shape: "circle",
                size: 6,
                colour: "gray",
                outlineColour: "orange",
            },
            {
                type: "switch",
                shape: "circle",
                size: 6,
                colour: "red",
                outlineColour: "gray",
            },
            {
                type: "monument",
                shape: "diamond",
                size: 16,
                colour: "red",
                outlineColour: "orange",
            },
            {
                type: "warp",
                shape: "triangle",
                colour: "springgreen",
                size: 24,
            },
            {
                type: "boss_warp",
                shape: "sqaure",
                colour: "gray",
                outlineColour: "red",
                size: 32,
            },
        ];

        var objectsTable = document.createElement("table");
        var objectsTableHeaderRow = document.createElement("tr");
        var objectsTableHeaderType = document.createElement("th");
        objectsTableHeaderType.appendChild(document.createTextNode("Type"));
        var objectsTableHeaderColour = document.createElement("th");
        objectsTableHeaderColour.appendChild(document.createTextNode("Colour"));
        var objectsTableHeaderDraw = document.createElement("th");
        objectsTableHeaderDraw.appendChild(document.createTextNode("Draw"));

        objectsTableHeaderRow.appendChild(objectsTableHeaderType);
        objectsTableHeaderRow.appendChild(objectsTableHeaderColour);
        objectsTableHeaderRow.appendChild(objectsTableHeaderDraw);

        objectsTable.appendChild(objectsTableHeaderRow);

        this.objects.forEach((object) => {
            object.active = true;
            var objectTableRow = document.createElement("tr");
            var objectTableType = document.createElement("td");
            objectTableType.appendChild(document.createTextNode(object.type));
            var objectTableColour = document.createElement("td");
            objectTableColour.style.backgroundColor = object.colour;
            var objectTableDraw = document.createElement("td");
            var drawInputCheckBox = document.createElement("input");
            drawInputCheckBox.type = "checkbox";
            objectTableDraw.appendChild(drawInputCheckBox);

            drawInputCheckBox.checked = object.active;
            drawInputCheckBox.addEventListener("change", function (e) {
                object.active = e.currentTarget.checked;
            });

            objectTableRow.appendChild(objectTableType);
            objectTableRow.appendChild(objectTableColour);
            objectTableRow.appendChild(objectTableDraw);

            objectsTable.appendChild(objectTableRow);
        });

        document.getElementById("map-objects-window").appendChild(objectsTable);
    }

    getObjectByType(type) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].type === type) return this.objects[i];
        }
        return null;
    }
}
