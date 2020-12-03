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