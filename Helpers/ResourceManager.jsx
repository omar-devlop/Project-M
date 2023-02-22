function GetTranslation(key) {

    // TODO in future update the translation system to be each language in file alone like resources in C#
    return translations[language][key];

}

// TODO update the resorce manager and make Icons smaller 20px for example
// TODO update to make the icons smaller than 20px

// TODO idea for icon manager ship the icons as png with the script (create them at first run), then call the png file by resorces manager by entering only the string
function Icons(icon) {

    return fluentIcons[icon];

}