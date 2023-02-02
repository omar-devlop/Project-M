 function readASE(){

    var aseFile = File.openDialog('Select *.ase file');
    if (aseFile) {
        var data = app.parseSwatchFile(aseFile);

        // if (data.values[0].type = "CMYK") {
        //     alert(data.values[0].type.toString() + "\n" + data.values[0].c.toString() + "\n" + data.values[0].m.toString() + "\n" + data.values[0].y.toString() + "\n" + data.values[0].k.toString());
        // }
        return data.values[0].type.toString() + "\n" + data.values[0].c.toString() + "\n" + data.values[0].m.toString() + "\n" + data.values[0].y.toString() + "\n" + data.values[0].k.toString()
    }
}