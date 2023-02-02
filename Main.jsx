//@include "modules/readASE.jsx";

(function (thisObj) {

    var mainScriptFile = new File($.fileName);

    alert(mainScriptFile.toString());

    alert(readASE());

})(this);