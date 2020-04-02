attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D texture;
uniform float timeFactor;
uniform float normScale;

varying vec2 vTextureCoord;

void main() {
	vec4 map = texture2D(texture, aTextureCoord+vec2(timeFactor*0.02, timeFactor*0.01));

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	gl_Position.y +=map.r*5.0;
 	vTextureCoord = aTextureCoord;

}

