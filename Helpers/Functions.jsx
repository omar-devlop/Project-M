//@include "Helpers/Setting.jsx";
//@include "Packages/JSON.jsx";


function canWrite() {
    if (app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY")) {
        return true;
    }
    // TODO update the alert message
    alert(scriptName + ' requires access to write files.\n' + 'To allow, please go to Preferences check off "Allow Scripts to Write Files and Access Network" to resolve.');
    return false;
}

function getUserDataFolder() {
    if (!canWrite()) {
        return
    };

    var userDataFolder = Folder.userData;
    var dataScriptFolder = new Folder(userDataFolder.toString() + "/" + scriptName);

    if (!dataScriptFolder.exists) {
        dataScriptFolder.create();
    }

    dataScriptFolder = new Folder(dataScriptFolder.toString() + "/" + version);

    if (!dataScriptFolder.exists) {
        dataScriptFolder.create();
    }
    return dataScriptFolder.toString();
}


function readJSON(storedFile, folder) {

    // TODO update folder to get the created folder

    var settFolder;

    if (folder == null) {
        settFolder = new Folder(getUserDataFolder() + "/Settings");
    } else {
        settFolder = folder;
    }

    var file = File(settFolder.toString() + "/" + storedFile + ".json");
    file.encoding = "UTF-8";

    file.open("r");
    var data = file.read();
    file.close();

    return JSON.parse(data);

}

function buildInterface(thisObj) {

    var mainWin = (thisObj instanceof Panel) ? thisObj : new Window("palette", scriptName, [0, 0, 210, 500], {
        resizeable: false,
    });

    mainWin.graphics.backgroundColor = mainWin.graphics.newBrush(mainWin.graphics.BrushType.SOLID_COLOR, defaultBGColor);
    mainWin.orientation = "column";
    mainWin.alignChildren = ["left", "top"];
    mainWin.margins = 8;
    // mainWin.spacing = 4;

    var topPanel = mainWin.add("group", [5, 5, 205, 35], undefined);
    topPanel.orientation = "row";
    topPanel.alignChildren = ["left", "center"];
    topPanel.graphics.backgroundColor = topPanel.graphics.newBrush(topPanel.graphics.BrushType.SOLID_COLOR, orangeColor);
    // topPanel.spacing = 0;
    // topPanel.margins = mMargins;

    quick_Note_Btn = topPanel.add("iconbutton", [2.5, 2.5, 27.5, 27.5], Icons("fluent_add_16_filled"), {
        style: "toolbutton"
    });
    var scriptLogoBinary = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00K\x00\x00\x00\x19\b\x06\x00\x00\x00y\b\u00D3\x16\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\x1EiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 9.0-c000 79.171c27f, 2022/08/16-18:02:43        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreateDate=\"2023-02-05T00:08:17+03:00\" xmp:ModifyDate=\"2023-02-05T01:00:15+03:00\" xmp:MetadataDate=\"2023-02-05T01:00:15+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:ea5b6646-0561-fb4c-a634-ab21e8468e45\" xmpMM:DocumentID=\"xmp.did:788bbdca-3d31-2242-9afa-15fc5b221905\" xmpMM:OriginalDocumentID=\"xmp.did:788bbdca-3d31-2242-9afa-15fc5b221905\"> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"LOGO\" photoshop:LayerText=\"LOGO\"/> </rdf:Bag> </photoshop:TextLayers> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:788bbdca-3d31-2242-9afa-15fc5b221905\" stEvt:when=\"2023-02-05T00:14:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 24.0 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:ea5b6646-0561-fb4c-a634-ab21e8468e45\" stEvt:when=\"2023-02-05T01:00:15+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 24.0 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x00\u0085\u008D'\x00\x00\x01DIDATX\u00C3\u00ED\u0097M\r\u00C30\f\u0085K\u00A1\x14B!\x14Ja\x14B!\x14J\u00A1\x14J!\x14J!\u00D7\x1EK!\u00CB\u00C1\u0093\u00A2\u00CC\u00F9\u00DB&\u00A7\u00ED<\u00E9]Z\u00FB\u00CD\u00FB\x16[\u00CE\u00E0\u009C\x1BXub\b\f\u008Ba1\u00AC\u00DB\u00C0\u00DA\u00F7\u00DDz\u00B9@vh\u00F8\u00F8x\u00EDe\"\x0F\x07\u00CF\u00A7/=f/U\u00C8U^\x0B\u0092\u00BB`\u00B9]`\u00F9\u00B8\x07R \u00A6\u00D5k\u00CC\u00FC\u00D0\x1A\u008F\u00CDKF\u00B9\x12\u00A9\u00BD\u0098K\x0E\x0BN\u0082k\u0090\u008D\u0081}\u00E0q\u00BC<\x00\u0094k\u0094$\u0087\u0095)\u00D4\x00\u0080\x14\u00845\u00F0\u0098*<\u00B6\u00E8t\b\u00C8\x1D\x13'\u00CA\x06\u00B9\u00A9\u00F7#5\u00AC\x15\u009BOQ\u008CH\x14,\u00E1\u00BD)y\u0084\u00B3\u00AC\u00E2D\x1A$\x17\u00FD\x0E2X\u00F0\u00AF\u00BA\u009A\u00F8\u00C4<\u00D2-\x1E\t\u00DF\r\u00C9\x17H\u009C\u00C0N7%,\u00AC\u0080\u00A5%\u00B6\u00D6\x03\u00DA]\x07R\u00F0\u00BC\u00A5\u00DE\u00B7\u00D8\u00BB\u00C2RX\u00AB]\t\x16Y\x1Bf`]\u00A3\r)\x07|\x06\u00D6\u00A9\x06\u00FC\x11\u00CD\u008AP\u0082pu0\tX\u00A7Z\x1Dr\u009A:.\u00A5\u00A6b\u00D7#_J\u008B\u00B0:\\w\u00B06=\u00C5u\u00A7\n\u00D6\u00AF.\u00D2\u00D0V:1\u00B8glY\u00EDv\u0091f1,\u0086\u00C5\u00B0\x18\x16\u00C3\u00FA\x0B=\x01\u00F5\u00E7@D<\u00CF\u00F8\x1A\x00\x00\x00\x00IEND\u00AEB`\u0082";
    var scriptLogo = topPanel.add("image", [25, 5, 100, 25], scriptLogoBinary);




    var mainPanel = mainWin.add("group", [5, 40, 205, 490], undefined);
    mainPanel.orientation = "column";
    mainPanel.alignChildren = ["left", "center"];
    mainPanel.graphics.backgroundColor = mainPanel.graphics.newBrush(mainPanel.graphics.BrushType.SOLID_COLOR, defaultBGColor);

    var easePanel = mainPanel.add("group", [0, 0, 200, 80], undefined);
    easePanel.orientation = "column";
    easePanel.alignChildren = ["left", "center"];
    easePanel.graphics.backgroundColor = easePanel.graphics.newBrush(easePanel.graphics.BrushType.SOLID_COLOR, greenColor);

    easeOutBtn = easePanel.add("iconbutton", [5, 5, 25, 25], Icons("fluent_arrow_previous_16_filled"), {
        style: "toolbutton"
    });
    easeInBtn = easePanel.add("iconbutton", [5, 30, 25, 50], Icons("fluent_arrow_next_16_filled"), {
        style: "toolbutton"
    });
    easeBtn = easePanel.add("iconbutton", [5, 55, 25, 75],  Icons("fluent_arrow_swap_16_filled"), {
        style: "toolbutton"
    });

    var eS_Size = 20;
    var eS_Base = (easePanel.size.height - (3 * eS_Size) - 5) / 4;;

    easeOutSlider = easePanel.add("slider", [30, eS_Base, 135, eS_Base + eS_Size], undefined);
    easeInSlider = easePanel.add("slider", [30, eS_Base * 2 + eS_Size, 135, eS_Base * 2 + eS_Size * 2], undefined);
    easeSlider = easePanel.add("slider", [30, eS_Base * 3 + eS_Size * 2, 135, eS_Base * 3 + eS_Size * 3], undefined);

    // easeOutAmount = easeSliders.add("edittext", [140, 5, 170, 25], "100");
    easeOutAmount = easePanel.add('statictext {text: "0", justify: "center"}', [140, 5, 170, 25]);
   
    // easeInAmount = easePanel.add("edittext", [140, 30, 170, 50], "100");
    easeInAmount = easePanel.add('statictext {text: "50", justify: "center"}', [140, 30, 170, 50]);

    // easeAmount = easePanel.add("edittext", [140, 55, 170, 75], "100");
    easeAmount = easePanel.add('statictext {text: "100", justify: "center"}', [140, 55, 170, 75]);

    var setGr = easeOutAmount.graphics;
    setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, blueColor, 1);

    store_Ease_Btn = easePanel.add("iconbutton", [175, 5, 195, 25], Icons("fluent_copy_16_filled"), {
        style: "toolbutton"
    });
    import_Ease_Btn = easePanel.add("iconbutton", [175, 30, 195, 50], Icons("fluent_clipboard_paste_16_filled"), {
        style: "toolbutton"
    });
    stored_Ease_Txt = easePanel.add('statictext {text: "0", justify: "center"}', [175, 55, 195, 75]);

   


    // var iconbutton1 = mainPanel.add("iconbutton", [0, 0, 50, 50], undefined, {
    //     name: "iconbutton1",
    //     style: "toolbutton"
    // });
    // iconbutton1.icon = Icons("fluent_accessibility_16_filled");


    return mainWin;

}