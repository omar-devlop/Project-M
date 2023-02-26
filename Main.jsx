//@include "Packages/JSON.jsx";
//@include "Helpers/Setting.jsx";
//@include "Helpers/Functions.jsx";
//@include "Modules/ReadASE.jsx";
//@include "Resources/UIElements.jsx";
//@include "Resources/Translations.jsx";
//@include "Helpers/ResourceManager.jsx";



function projectM_Func(thisObj) {
    function buildUI(thisObj) {

        alert(GetTranslation("welcomeMessage"));
        var mainWindow = buildInterface(thisObj);

        
        return mainWindow;

    }

    var mainPanel = buildUI(thisObj);

    if (mainPanel != null && mainPanel instanceof Window) {
        mainPanel.center();
        mainPanel.show();
    } else {

        mainPanel;

    }

}


if (canWrite()) {

    // alert("START ....");
    projectM_Func(this);
    // alert("DONE");

} else {

    alert("Can't write");
}