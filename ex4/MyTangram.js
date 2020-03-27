class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.triangle = new MyTriangle(scene);

		this.trianglebig1 = new MyTriangleBig(scene, [0, 0,
             1, 0,
             0.5, 0.5]);

		this.trianglebig2 = new MyTriangleBig(scene, [1, 0,
              1, 1,
              0.5, 0.5]);

        this.trianglesmall1 = new MyTriangleSmall(scene, [0, 0,
             0, 0.5,
             0.25, 0.25]);

		this.trianglesmall2 = new MyTriangleSmall(scene, [0.25, 0.75,
             0.75, 0.75,
             0.5, 0.5]);

		this.diamond = new MyDiamond(scene);
		this.parallelogram = new MyParallelogram(scene);
		this.initMaterials();
	}
	initColorsObj(r, g, b) {
         r /= 255;
         g /= 255;
         b /= 255;
         let c = new CGFappearance(this.scene);
         c.setAmbient(r, g, b, 1.0);
         c.setDiffuse(0, 0, 0, 1.0);
         c.setSpecular(1.0, 1.0, 1.0, 1.0);
         c.setShininess(10.0);
         return c;

	}

	initTextures(image, wrapMode){
         let texture = new CGFappearance(this.scene);
         texture.setAmbient(0.1, 0.1, 0.1, 1);
         texture.setDiffuse(0.9, 0.9, 0.9, 1);
         texture.setSpecular(0.1, 0.1, 0.1, 1);
         texture.setShininess(10.0);
         texture.loadTexture(image);
         texture.setTextureWrap(wrapMode, wrapMode);
         return texture;
    }

     initMaterials() {
          this.orange = this.initColorsObj(255, 156, 0);
          this.blue = this.initColorsObj(0, 156, 255);
          this.pink = this.initColorsObj(255, 156, 210);
          this.green = this.initColorsObj(0, 255, 0);
          this.purple = this.initColorsObj(170, 79, 194);
          this.yellow = this.initColorsObj(255, 255, 0);
          this.red = this.initColorsObj(255, 20, 20);
          this.dtex = this.initTextures('images/tangram.png', 'REPEAT');
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
         this.dtex.apply();
         this.diamond.display();
         this.scene.popMatrix();
 
         //Triangulo normal
         this.scene.pushMatrix();
         ang = (Math.PI * -135) / 180;
         this.scene.translate(-(Math.sqrt(2)),(Math.sqrt(2)),0); 
         this.scene.rotate(ang,0,0,1);
         this.dtex.apply();
         this.triangle.display();
         this.scene.popMatrix();
 
 
         //Triangulo Maior 1
         this.scene.pushMatrix();
         var rad45 = (Math.PI * -45)/180;
         this.scene.rotate(rad45, 0, 0, 1);
         this.scene.translate(0, -2, 0);
         this.dtex.apply();
         this.trianglebig1.display();
         this.scene.popMatrix();
 
 
         //Triangulo maior 2
         this.scene.pushMatrix();
         var rad90 = (Math.PI * -90)/180;
         this.scene.rotate(rad90, 0, 0, 1);
         this.scene.translate(2, 0, 0);
         this.dtex.apply();
         this.trianglebig2.display();
         this.scene.popMatrix();
 
         //Triangulo menor 1
         this.scene.pushMatrix();
         this.scene.translate(-Math.sqrt(8), 0, 0);
         this.scene.translate(0, -1, 0);
         this.dtex.apply();
         this.trianglesmall1.display();
         this.scene.popMatrix();
 
         //Triangulo menor 2
         this.scene.pushMatrix();
         var rad135 = (Math.PI * -135)/180;
         this.scene.translate(0, -4, 0);
         this.scene.translate(-Math.sqrt(0.5), 0, 0);
         this.scene.rotate(rad135, 0, 0, 1);
         this.dtex.apply();
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
         this.dtex.apply();
         this.parallelogram.display();
         this.scene.popMatrix();


    }
}

