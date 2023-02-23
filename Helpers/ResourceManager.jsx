function GetTranslation(key) {

    // TODO update translations folder to get the created folder

    var languageFile = readJSON(language, scriptPath + "/Resources/Translations");

    return languageFile[key];

}

function Icons(icon) {

    // TODO update icon folder to get the created folder

    var iconPath = scriptPath + "/Resources/FluentIcons/" + icon + ".png";

    return iconPath;
}