var workspace = Blockly.inject("blocklyDiv", {
    media: "blockly/media/",
    toolbox: document.getElementById("toolbox"),
    scrollbars: true,
    trashcan: true
});

blocklyDiv = document.getElementById("blocklyDiv");
pythonCol = document.getElementById("pythonCol");
blocklyCol = document.getElementById("blocklyCol");
function resizeBlockly(event = undefined, repeat = true) {
    if (pythonCol.style.display == "none")
        blocklyDiv.style.width = "100%";
    else
        blocklyDiv.style.width = (window.innerWidth * 0.6) + "px";
    // fill the rest of the vertical space, leave a bottom margin the same size as the left margin
    blocklyDiv.style.height = (window.innerHeight - blocklyDiv.offsetTop - blocklyDiv.offsetLeft) + "px";
    Blockly.svgResize(workspace);
    if (repeat) setTimeout(resizeBlockly.bind(null, event, false), 10); // call again in 10ms in case the resize was a maximize, wait for it
}
window.addEventListener("resize", resizeBlockly, false);
resizeBlockly();

pythonPre = document.getElementById("pythonPre");

function updatePython() {
    pythonPre.innerHTML = Blockly.Python.workspaceToCode(workspace);
    if (pythonPre.innerHTML == "") pythonPre.innerHTML = "[your code will appear here]";
}
workspace.addChangeListener(updatePython);
updatePython();

function exportPython() {
    var tempLink = document.createElement("a");
    tempLink.setAttribute("href", "data:text/plain," + encodeURIComponent(Blockly.Python.workspaceToCode(workspace)));
    tempLink.setAttribute("download", "main.py");
    document.body.appendChild(tempLink); // Firefox requires the link to be in the body
    tempLink.click();
    document.body.removeChild(tempLink);
}
exportButton = document.getElementById("export");
exportButton.addEventListener("click", exportPython);
document.addEventListener("keydown", e => {
    if (e.ctrlKey && e.keyCode == 83) {
        exportPython();
        e.preventDefault();
    }
});

document.getElementById("hide").addEventListener("click", function() {
    pythonCol.style.display = "none";
    blocklyCol.style.width = "100%";
    blocklyDiv.style.width = "100%";
    Blockly.svgResize(workspace);
    blocklyCol.insertBefore(exportButton, blocklyDiv);
    //exportButton.style.float = "right";
});

// add text<->workspace helper functions
Blockly.Xml.textToWorkspace = text => {
    workspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(text), workspace);
}
Blockly.Xml.workspaceToText = workspace => Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));

function saveBlockly() {
    var tempLink = document.createElement("a");
    tempLink.setAttribute("href", "data:text/plain," + encodeURIComponent(Blockly.Xml.workspaceToText(workspace)));
    tempLink.setAttribute("download", "myProgram.blockly"); // really just xml, using .blockly extension to make it distinct
    document.body.appendChild(tempLink); // Firefox requires the link to be in the body
    tempLink.click();
    document.body.removeChild(tempLink);
}
document.getElementById("save").addEventListener("click", saveBlockly);

function loadBlockly(evt) {
    file = evt.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = evt => Blockly.Xml.textToWorkspace(evt.target.result);
    fileInput.value = "";
}
var fileInput = document.createElement("input");
fileInput.setAttribute("type", "file");
fileInput.setAttribute("display", "none");
fileInput.addEventListener("change", loadBlockly);
document.getElementById("load").addEventListener("click", () => fileInput.click());

// use Ctrl+Backspace or Ctrl+Delete to clear the workspace
document.addEventListener("keydown", e => {
    if (e.ctrlKey && (e.keyCode == 8 || e.keyCode == 46)) {
        workspace.clear();
    }
});

Blockly.BlockSvg.START_HAT = true;

// load previous program
workspace.clear();
Blockly.Xml.textToWorkspace(localStorage.getItem("Pyduino"));
workspace.clearUndo();
// save program when leaving page
window.addEventListener("unload", e => localStorage.setItem("Pyduino", Blockly.Xml.workspaceToText(workspace)));
