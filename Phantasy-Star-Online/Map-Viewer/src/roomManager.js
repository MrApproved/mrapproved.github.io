class RoomManager {
    rooms;
    waveManager;

    constructor(waveManager) {
        this.waveManager = waveManager;
    }

    setup(rooms) {
        var self = this;
        self.rooms = self.sortRoomsByOrder(rooms);
        var roomsEle = document.getElementById("map-rooms-window");

        self.rooms.forEach((room) => {
            //if (room.order !== undefined)
            room.active = true;
            var roomEle = document.createElement("div");
            roomEle.className = "room-contents";
            var roomNameContainer = document.createElement("div");
            roomNameContainer.innerHTML = `<span>Room: ${room.order}</span>`;
            var roomNameContainerActivator = document.createElement("input");
            roomNameContainer.appendChild(roomNameContainerActivator);
            roomNameContainerActivator.type = "checkbox";
            roomNameContainer.className = "room-header";
            roomEle.appendChild(roomNameContainer);

            roomNameContainerActivator.addEventListener("click", function (e) {
                room.active = !room.active;
            });

            //if (room.order !== undefined)
            roomNameContainerActivator.checked = room.active;

            self.waveManager.setupForRoom(room, roomEle);
            roomsEle.appendChild(roomEle);
        });
    }

    sortRoomsByOrder(rooms) {
        return rooms.sort((a, b) => {
            var aOrder =
                a.order === undefined ? (aOrder = Number.MAX_VALUE) : a.order;
            var bOrder =
                b.order === undefined ? (bOrder = Number.MAX_VALUE) : b.order;
            return aOrder - bOrder;
        });
    }
}
