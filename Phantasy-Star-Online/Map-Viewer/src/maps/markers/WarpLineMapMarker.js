class WarpLineMapMarker extends BaseMapMarker {
    colour;
    positionOffset;

    constructor(position) {
        super();
        this.type = "warp_line";
        this.positionOffset = new Position();
        this.positionOffset.x = position.x;
        this.positionOffset.y = position.y + 32;
    }
}
