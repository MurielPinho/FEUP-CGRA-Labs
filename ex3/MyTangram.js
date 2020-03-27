class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.createObjects();
        this.initMaterials();
    }

    initBuffers() {
        this.vertices = [];

        //Counter-clockwise reference of vertices
        this.indices = [];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    createObjects() {
        this.triangle = new MyTriangle(this.scene);
        this.trianglebig1 = new MyTriangleBig(this.scene);
        this.trianglebig2 = new MyTriangleBig(this.scene);
        this.trianglesmall1 = new MyTriangleSmall(this.scene);
        this.trianglesmall2 = new MyTriangleSmall(this.scene);
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        ;

    }

    initMaterials() {
        this.red_material = new CGFappearance(this.scene);
        this.red_material.setAmbient(0, 0, 0, 1.0);
        this.red_material.setDiffuse(1, 0, 0, 1.0);
        this.red_material.setSpecular(1, 0, 0, 1.0);
        this.red_material.setShininess(10.0);

        this.blue_material = new CGFappearance(this.scene);
        this.blue_material.setAmbient(0, 0, 0, 1.0);
        this.blue_material.setDiffuse(0, 0, 1, 1.0);
        this.blue_material.setSpecular(0, 0, 1, 1.0);
        this.blue_material.setShininess(10.0);

        this.green_material = new CGFappearance(this.scene);
        this.green_material.setAmbient(0, 0, 0, 1.0);
        this.green_material.setDiffuse(0, 1, 0, 1.0);
        this.green_material.setSpecular(0, 1, 0, 1.0);
        this.green_material.setShininess(10.0);

        this.orange_material = new CGFappearance(this.scene);
        this.orange_material.setAmbient(0, 0, 0, 1.0);
        this.orange_material.setDiffuse(1, 0.4, 0, 1.0);
        this.orange_material.setSpecular(1, 0.4, 0, 1.0);
        this.orange_material.setShininess(10.0);

        this.yellow_material = new CGFappearance(this.scene);
        this.yellow_material.setAmbient(0, 0, 0, 1.0);
        this.yellow_material.setDiffuse(1, 1, 0, 1.0);
        this.yellow_material.setSpecular(1, 1, 0, 1.0);
        this.yellow_material.setShininess(10.0);

        this.purple_material = new CGFappearance(this.scene);
        this.purple_material.setAmbient(0, 0, 0, 1.0);
        this.purple_material.setDiffuse(0.5, 0, 1, 1.0);
        this.purple_material.setSpecular(0.5, 0, 1, 1.0);
        this.purple_material.setShininess(10.0);

        this.pink_material = new CGFappearance(this.scene);
        this.pink_material.setAmbient(0, 0, 0, 1.0);
        this.pink_material.setDiffuse(1, 0.2, 1, 1.0);
        this.pink_material.setSpecular(1, 0.2, 1, 1.0);
        this.pink_material.setShininess(10.0);
        ;
    }
    display() {
        //Diamante por matriz
        this.scene.pushMatrix();
        this.scene.translate(-(Math.sqrt(2)) / 2, (Math.sqrt(2)) / 2, 0);
        var ang = (Math.PI * 45) / 180;
        var rot45 = [Math.cos(ang), Math.sin(ang), 0.0, 0.0,
        -Math.sin(ang), Math.cos(ang), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(rot45);
        //this.green_material.apply();
        this.scene.updateCustomMaterial();
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Triangulo normal
        this.scene.pushMatrix();
        ang = (Math.PI * -135) / 180;
        this.scene.translate(-(Math.sqrt(2)), (Math.sqrt(2)), 0);
        this.scene.rotate(ang, 0, 0, 1);
        this.pink_material.apply();
        this.triangle.display();
        this.scene.popMatrix();


        //Triangulo Maior 1
        this.scene.pushMatrix();
        var rad45 = (Math.PI * -45) / 180;
        this.scene.rotate(rad45, 0, 0, 1);
        this.scene.translate(0, -2, 0);
        this.blue_material.apply();
        this.trianglebig1.display();
        this.scene.popMatrix();


        //Triangulo maior 2
        this.scene.pushMatrix();
        var rad90 = (Math.PI * -90) / 180;
        this.scene.rotate(rad90, 0, 0, 1);
        this.scene.translate(2, 0, 0);
        this.orange_material.apply();
        this.trianglebig2.display();
        this.scene.popMatrix();

        //Triangulo menor 1
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(8), 0, 0);
        this.scene.translate(0, -1, 0);
        this.purple_material.apply();
        this.trianglesmall1.display();
        this.scene.popMatrix();

        //Triangulo menor 2
        this.scene.pushMatrix();
        var rad135 = (Math.PI * -135) / 180;
        this.scene.translate(0, -4, 0);
        this.scene.translate(-Math.sqrt(0.5), 0, 0);
        this.scene.rotate(rad135, 0, 0, 1);
        this.red_material.apply();
        this.trianglesmall2.display();
        this.scene.popMatrix();

        //Paralelogramo
        this.scene.pushMatrix();
        var rad90 = Math.PI / 2;
        var rad180 = Math.PI;
        var radpar = Math.PI / 8;

        this.scene.translate(2, -2, 0);
        this.scene.rotate(radpar, 0, 0, 1)
        this.scene.rotate(rad90, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.yellow_material.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
    }

    updateBuffers() { }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.trianglebig1.enableNormalViz();
        this.trianglebig2.enableNormalViz();
        this.trianglesmall1.enableNormalViz();
        this.trianglesmall2.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.trianglebig1.disableNormalViz();
        this.trianglebig2.disableNormalViz();
        this.trianglesmall1.disableNormalViz();
        this.trianglesmall2.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
    }
}

