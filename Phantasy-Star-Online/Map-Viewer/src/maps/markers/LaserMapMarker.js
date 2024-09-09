class LaserMapMarker extends BaseMapMarker {
    colour;
    positionOffset;

    constructor(position) {
        super();
        this.type = "door";
        this.colour = "purple";
        this.positionOffset = new Position();
        this.positionOffset.x = position.x;
        this.positionOffset.y = position.y + 32;
    }
}
