class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.createObjects();
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
    display()  {
         //Diamante por matriz
         this.scene.pushMatrix();
         this.scene.translate(-(Math.sqrt(2))/2,(Math.sqrt(2))/2,0);
         var ang = (Math.PI * 45) / 180;
         var rot45 = [Math.cos(ang), Math.sin(ang), 0.0, 0.0,
         -Math.sin(ang), Math.cos(ang), 0.0, 0.0,
             0.0, 0.0, 1.0, 0.0,
             0.0, 0.0, 0.0, 1.0];
         this.scene.multMatrix(rot45);
         this.diamond.display();
         this.scene.popMatrix();
 
         //Triangulo normal
         this.scene.pushMatrix();
         ang = (Math.PI * -135) / 180;
         this.scene.translate(-(Math.sqrt(2)),(Math.sqrt(2)),0); 
         this.scene.rotate(ang,0,0,1);
         this.triangle.display();
         this.scene.popMatrix();
 
 
         //Triangulo Maior 1
         this.scene.pushMatrix();
         var rad45 = (Math.PI * -45)/180;
         this.scene.rotate(rad45, 0, 0, 1);
         this.scene.translate(0, -2, 0);
 
 
         this.trianglebig1.display();
         this.scene.popMatrix();
 
 
         //Triangulo maior 2
         this.scene.pushMatrix();
         var rad90 = (Math.PI * -90)/180;
         this.scene.rotate(rad90, 0, 0, 1);
         this.scene.translate(2, 0, 0);
 
         this.trianglebig2.display();
         this.scene.popMatrix();
 
         //Triangulo menor 1
         this.scene.pushMatrix();
         this.scene.translate(-Math.sqrt(8), 0, 0);
         this.scene.translate(0, -1, 0);
         this.trianglesmall1.display();
         this.scene.popMatrix();
 
         //Triangulo menor 2
         this.scene.pushMatrix();
         var rad135 = (Math.PI * -135)/180;
         this.scene.translate(0, -4, 0);
         this.scene.translate(-Math.sqrt(0.5), 0, 0);
         this.scene.rotate(rad135, 0, 0, 1);
         this.trianglesmall2.display();
         this.scene.popMatrix();
 
         //Paralelogramo
         this.scene.pushMatrix();
         var rad90 = Math.PI/2;
         var rad180 = Math.PI;
         var radpar = Math.PI/8;
 
         this.scene.translate(2,-2,0);
         this.scene.rotate(radpar, 0, 0, 1)
         this.scene.rotate(rad90, 0, 0, 1);
         this.scene.scale(-1, 1, 1);
         this.parallelogram.display();
         this.scene.popMatrix();
    }
}

