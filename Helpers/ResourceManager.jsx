function GetTranslation(key) {

    // TODO in future update the translation system to be each language in file alone like resources in C#
    return translations[language][key];

}

function Icons(icon) {

    // TODO update icon folder to get the created folder
    var scriptFile = File($.fileName);
    var scriptPath = scriptFile.parent.path;

    var iconPath = scriptPath + "/Resources/FluentIcons/" + icon + ".png";

    return iconPath;
}