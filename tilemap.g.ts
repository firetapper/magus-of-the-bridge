// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000001020000000000000000000000000000060600000001020000000000000000000603020000030900000000000000000103030302000303000000010200000003030303030306030000000306000000030309030303030303080303030000000403030303030303030303030300000000030303030303030306030906000000000303060606030303030306030000000103030603030303030303060500000003030306030303070303030600000000040303030303030303030300000000000000040303030303030305000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 . . 2 2 2 2 2 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 . 2 2 2 2 2 
2 2 2 . . 2 2 . 2 2 . 2 2 2 2 2 
2 . . . . . 2 . . 2 . 2 . . 2 2 
2 . . . . . . 2 . 2 . 2 . 2 2 2 
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
`, [myTiles.transparency16,sprites.swamp.swampTile10,sprites.swamp.swampTile11,sprites.swamp.swampTile16,sprites.swamp.swampTile18,sprites.swamp.swampTile19,sprites.dungeon.floorLight2,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
