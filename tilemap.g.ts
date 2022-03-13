// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000c00000000000000010200000000000000000000000000000908000000010200000000000000000009070200000708000000000000000001070b0702000707000000010200000007070707070709070000000709000000070708070707070707060707070000000407070707070707070707070b000000000707070707070707090708090000000007070908090707070707090300000001070709070707070707070905000000070b07080707070a0707070900000000040707070707070707070700000000000000040707070707070705000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 . 2 2 2 2 2 
2 2 2 . . 2 2 . 2 2 . 2 2 2 2 2 
2 . . . . . 2 . . 2 . 2 . . 2 2 
2 . . . . . . 2 . 2 2 2 . 2 2 2 
2 . . 2 . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . 2 . 2 2 2 2 
2 2 . . 2 2 2 . . . . . 2 . 2 2 
2 . . . 2 . . . . . . . 2 . 2 2 
2 . . . 2 . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . 2 2 2 2 
2 2 2 . . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.swamp.swampTile10,sprites.swamp.swampTile11,sprites.swamp.swampTile16,sprites.swamp.swampTile18,sprites.swamp.swampTile19,sprites.dungeon.floorDarkDiamond,myTiles.tile1,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,myTiles.tile3,myTiles.tile4,tiles.util.door5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Ground_tile0":
            case "tile1":return tile1;
            case "Ground_tile":
            case "tile3":return tile3;
            case "Ground_tile1":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
