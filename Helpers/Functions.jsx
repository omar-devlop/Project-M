//@include "Helpers/Setting.jsx";

function canWrite() {
    if (app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY")) {
        return true;
    }
    alert(scriptName + ' requires access to write files.\n' + 'To allow, please go to Preferences check off "Allow Scripts to Write Files and Access Network" to resolve.');
    return false;
}