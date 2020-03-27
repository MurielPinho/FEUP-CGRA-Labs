/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
    constructor(scene,tCoords) {
        super(scene);
        this.initBuffers(tCoords);
    }
    initBuffers(tCoords) {
        this.vertices = [
            -1, 0, 0,	//0
            1, 0, 0,	//1
            0, 1, 0,	//2
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ]

        this.texCoords = tCoords;

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

