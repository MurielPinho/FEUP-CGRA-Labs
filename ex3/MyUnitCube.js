class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, -0.5, -0.5,
            -0.5, -0.5, 0.5,
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
        ];

        for (let i = 0; i <= 3; i++) {
            this.indices.push(i,(i+1)%4,i+4);
            this.indices.push((i+1)%4,(i+1)%4+4,i+4);
        
        }
        this.indices.push(4,5,6,);
        this.indices.push(4,6,7,);
        this.indices.push(2,1,0,);
        this.indices.push(3,2,0);

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

