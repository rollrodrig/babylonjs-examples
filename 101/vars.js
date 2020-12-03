var Engine = BABYLON.Engine;
var Scene = BABYLON.Scene;
var ArcRotateCamera = BABYLON.ArcRotateCamera;
var Vector3 = BABYLON.Vector3;
var Vector4 = BABYLON.Vector4;
var HemisphericLight = BABYLON.HemisphericLight;
var PointLight = BABYLON.PointLight;
var MeshBuilder = BABYLON.MeshBuilder;
var Mesh = BABYLON.Mesh;
var DynamicTexture = BABYLON.DynamicTexture;
var Texture = BABYLON.Texture;
var Color3 = BABYLON.Color3;
var StandardMaterial = BABYLON.StandardMaterial;
var SpotLight = BABYLON.SpotLight;
var Animation = BABYLON.Animation;

function degToRadians(d) {
    return d*(Math.PI/180);
}
function makeTextPlane(text, color, size, position) {
    
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "36px Arial", color , "transparent", true);
    
    var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
        plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
        plane.material.backFaceCulling = false;
        plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        plane.material.diffuseTexture = dynamicTexture;
        if(position) {
            plane.position = new BABYLON.Vector3(position[0], position[1], position[2]);    
        }
    return plane;
};
function showAxis(scene, size) {

    var axisX = BABYLON.Mesh.CreateLines("axisX", [
        new BABYLON.Vector3.Zero(), 
        new BABYLON.Vector3(size, 0, 0), 
        new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
        new BABYLON.Vector3(size, 0, 0), 
        new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
    
    var xChar = makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    
    var axisY = BABYLON.Mesh.CreateLines("axisY", [
        new BABYLON.Vector3.Zero(), 
        new BABYLON.Vector3(0, size, 0), 
        new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
        new BABYLON.Vector3(0, size, 0), 
        new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
    ], scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);

    var yChar = makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);

    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        new BABYLON.Vector3.Zero(), 
        new BABYLON.Vector3(0, 0, size), 
        new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), 
        new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
    ], scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);

    var zChar = makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
}
function wireframeMaterial(scene){
    var mat = new BABYLON.StandardMaterial("mat", scene);
        mat.wireframe = true;
    return mat;
}
function light(scene){
   var light = 
   new BABYLON.HemisphericLight("HemiLight", 
        new BABYLON.Vector3(0, 1, 0), scene); 
}
function camera(scene){
    var camera =  
    new BABYLON.ArcRotateCamera("Camera", 
        // degToRadians(-45), 
        // Math.PI/3, 5, 
        degToRadians(0), 
        degToRadians(90), 5, 
        new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true); 
}
function box(scene){
    var box = MeshBuilder.CreateBox("shooter", {}, scene);
    return box;
}



































