//@include "modules/readASE.jsx";
//@include "modules/translations.jsx";


var language = "ar";

function getTranslation (key){

    return translations[language][key];

}




(function (thisObj) {

    var mainScriptFile = new File($.fileName);

    // alert(mainScriptFile.toString());

    // alert(readASE());

    alert(getTranslation("Exit"));

})(this);