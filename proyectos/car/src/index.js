import _ from 'lodash';
import { 
    Scene, 
    Engine, 
    Color3, 
    Vector3, 
    FreeCamera, 
    Mesh,
    GizmoManager,
    SceneLoader,
    PointLight
} from 'babylonjs';

var canvas = document.getElementById('canvas');
var engine = new Engine(canvas, true);
var createScene = function() {
    var scene = new Scene(engine);
    scene.clearColor = new Color3.White();
    var cameraPosition = new Vector3(0,6,-10);
    var camera = new FreeCamera('camera1', cameraPosition, scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    var box = Mesh.CreateBox('Box', 4.0, scene);

    var light = new PointLight("myPointLight", new Vector3(0, 3, 0), scene);
    // light.intensity = .5;
    light.diffuse = new Color3(1, .5, .5);

    createHeroDude(scene);
    return scene;
}
var scene = createScene();

function createHeroDude(scene)
{

    SceneLoader.ImportMesh("Cube", "/models/car/", "car2.babylon", scene, onDudeImported);
    function onDudeImported(newMeshes, particleSystems, skeletons) {
        newMeshes[0].position = new Vector3(0,6,-10);  // The original dude
        newMeshes[0].name = "heroDude";
        var heroDude = newMeshes[0];
    }
}

engine.runRenderLoop(function(){ // call every loop
    scene.render();
});


// gizmo
// https://doc.babylonjs.com/how_to/gizmo