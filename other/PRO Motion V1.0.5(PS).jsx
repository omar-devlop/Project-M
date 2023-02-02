var scriptName = "PRO.Motion";
var version = "1.0.5";
var AEVer = getAEVersion();

"object" != typeof JSON && (JSON = {}),
    function () { 
        "use strict";
        var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta, rep;

        function f(t) {
            return t < 10 ? "0" + t : t
        }

        function this_value() {
            return this.valueOf()
        }

        function quote(t) {
            return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var r, n, o, u, f, a = gap,
                i = e[t];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (u = i.length, r = 0; r < u; r += 1) f[r] = str(r, i) || "null";
                        return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o
                    }
                    if (rep && "object" == typeof rep)
                        for (u = rep.length, r = 0; r < u; r += 1) "string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o);
                    else
                        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o);
                    return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function (t, e, r) {
            var n;
            if (indent = gap = "", "number" == typeof r)
                for (n = 0; n < r; n += 1) indent += " ";
            else "string" == typeof r && (indent = r);
            if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            var j;

            function walk(t, e) {
                var r, n, o = t[e];
                if (o && "object" == typeof o)
                    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]);
                return reviver.call(t, e, o)
            }
            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }();


if (canWrite()) {

    myScript(this);

} else {

    myScript(this, 1);

}

function myScript(thisObj, isErr) {

    //===============================

    if (isErr) {
        var w = buildUI(thisObj, isErr);
        return;
    }

    var iconsFolder = new Folder(getUserDataFolder() + "/Icons");
    if (!iconsFolder.exists) {
        iconsFolder.create();
    }

    createIcons(iconsFolder);

    //============================

    var ffxFolder = new Folder(getUserDataFolder() + "/Presets");
    if (!ffxFolder.exists) {
        ffxFolder.create();
    }

    var bounceFFX = createResourceFile("Bounce.ffx", "RIFX\x00\x00\x0B\u00FEFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x0B\u00DAbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x07Bounce\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\n^sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\x16parTparn\x00\x00\x00\x04\x00\x00\x00\x05tdmn\x00\x00\x00(Pseudo/Bounce-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nAmplitude\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00B\u008C\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nGravity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00A \x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nMax Jumps\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00@\u00A0\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Jump In / Out\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00LIST\x00\x00\x05\u00FCtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Bounce\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/Bounce-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nAmplitude\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@Q\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bGravity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@$\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nMax Jumps\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@\x14\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Bounce-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EJump In / Out\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Bounce\",\"matchname\":\"Pseudo/Bounce\",\"controlArray\":[{\"index\":0,\"name\":\"Amplitude\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":70,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Gravity\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":10,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Max Jumps\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":5,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false,\"active\":true},{\"index\":3,\"name\":\"Jump In / Out\",\"hold\":true,\"parent\":null,\"type\":\"checkbox\",\"keyframes\":true,\"invisible\":false,\"default\":false,\"label\":\"\"}]}", ffxFolder.toString(), true);
    var elasticFFX = createResourceFile("Elastic.ffx", "RIFX\x00\x00\n\x14FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u00F0bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\bElastic\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\btsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03@parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/Test-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nAmplitude\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00A\u00A0\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFrequency\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00B \x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nDecay\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00F\x1C@\x00\x00\x00\x00\x00B\u00C8\x00\x00Bp\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u00E8tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bElastic\x00tdmn\x00\x00\x00(Pseudo/Test-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/Test-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nAmplitude\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@4\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nFrequency\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@D\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Test-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06Decay\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@N\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Elastic\",\"matchname\":\"Pseudo/Test\",\"controlArray\":[{\"index\":0,\"name\":\"Amplitude\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":20,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false,\"active\":true},{\"index\":1,\"name\":\"Frequency\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":40,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Decay\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":60,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":10000,\"precision\":1,\"percent\":false,\"pixel\":false}]}", ffxFolder.toString(), true);
    var wiggleFFX = createResourceFile("Wiggle.ffx", "RIFX\x00\x00\b\x1EFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x07\u00FAbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Wiggle\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x07Wiggle\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06~sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02tparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/Wiggle-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Wiggle-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFrequency\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00@@\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Wiggle-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nAmplitude\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03\u00BEtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Wiggle\x00\x00tdmn\x00\x00\x00(Pseudo/Wiggle-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/Wiggle-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nFrequency\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Wiggle-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nAmplitude\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Wiggle\",\"matchname\":\"Pseudo/Wiggle\",\"controlArray\":[{\"index\":0,\"name\":\"Frequency\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":3,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false,\"active\":true},{\"index\":1,\"name\":\"Amplitude\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":50,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":1,\"percent\":false,\"pixel\":false}]}", ffxFolder.toString(), true);
    var loopWiggleFFX = createResourceFile("LoopWiggle.ffx", "RIFX\x00\x00\x0F\u00D0FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x0F\u00ACbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\fLoop Wiggle\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0E,sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x05\u00AEparTparn\x00\x00\x00\x04\x00\x00\x00\x07tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nFrequency\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00@@\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nAmplitude\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00BH\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rLoop Time\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nLoop Time / Sec\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00A \x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04Comp Duration\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x01\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b2tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fLoop Wiggle\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nFrequency\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@\b\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nAmplitude\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nLoop Time\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x10Loop Time / Sec\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@$\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0EComp Duration\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Loop_Wiggle-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fLoop Wiggle\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Loop Wiggle\",\"matchname\":\"Pseudo/Loop_Wiggle\",\"controlArray\":[{\"index\":0,\"name\":\"Frequency\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":3,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Amplitude\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":50,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":1,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Loop Time\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false,\"active\":true},{\"index\":0,\"name\":\"Loop Time / Sec\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":10,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Comp Duration\",\"hold\":true,\"parent\":null,\"type\":\"checkbox\",\"keyframes\":true,\"invisible\":false,\"default\":true,\"label\":\"\"},{\"type\":\"endgroup\"}]}", ffxFolder.toString(), true);
    var xyColorFFX = createResourceFile("XYColor.ffx", "RIFX\x00\x00\bJFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\b&bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYColor\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\bXYColor\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06\u00AAsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02tparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/XYColor-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYColor-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05X Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYColor-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Y Color\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03\u00EAtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bXYColor\x00tdmn\x00\x00\x00(Pseudo/XYColor-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYColor-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\ftdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bX Color\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYColor-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\ftdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bY Color\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYColor\",\"matchname\":\"Pseudo/XYColor\",\"controlArray\":[{\"index\":0,\"name\":\"X Color\",\"hold\":false,\"parent\":null,\"type\":\"color\",\"keyframes\":true,\"invisible\":false,\"default_red\":255,\"default_green\":255,\"default_blue\":255},{\"index\":1,\"name\":\"Y Color\",\"hold\":false,\"parent\":null,\"type\":\"color\",\"keyframes\":true,\"invisible\":false,\"default_red\":0,\"default_green\":0,\"default_blue\":0}]}", ffxFolder.toString(), true);
    var xyFFX = createResourceFile("XY.ffx", "RIFX\x00\x00\b\x06FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x07\u00E2bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XY\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x03XY\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06jsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02tparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/XY-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XY-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nX\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XY-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nY\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03\u00AAtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x03XY\x00\x00tdmn\x00\x00\x00(Pseudo/XY-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XY-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XY-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XY\",\"matchname\":\"Pseudo/XY\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":\"0\",\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false}]}", ffxFolder.toString(), true);
    var xyzFFX = createResourceFile("XYZ.ffx", "RIFX\x00\x00\t\u00F8FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u00D4bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x04XYZ\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b\\sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03@parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/XYZ-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nX\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nY\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nZ\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u00D0tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x04XYZ\x00tdmn\x00\x00\x00(Pseudo/XYZ-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYZ-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZ-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Z\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYZ\",\"matchname\":\"Pseudo/XYZ\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":\"0\",\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Z\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false,\"active\":true}]}", ffxFolder.toString(), true);
    var xyiiFFX = createResourceFile("XYII.ffx", "RIFX\x00\x00\x07\u00DAFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x07\u00B6bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYII\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x05XYII\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06<sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02tparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/XYII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06X\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03|tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x05XYII\x00\x00tdmn\x00\x00\x00(Pseudo/XYII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYII\",\"matchname\":\"Pseudo/XYII\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"active\":true},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540}]}", ffxFolder.toString(), true);
    var xyziiFFX = createResourceFile("XYZII.ffx", "RIFX\x00\x00\t\u00B4FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u0090bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x06XYZII\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b\x16sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03@parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/XYZII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06X\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06Z\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u008Atdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06XYZII\x00tdmn\x00\x00\x00(Pseudo/XYZII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYZII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZII-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Z\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYZII\",\"matchname\":\"Pseudo/XYZII\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540},{\"index\":2,\"name\":\"Z\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"active\":true}]}", ffxFolder.toString(), true);
    var xyiiiFFX = createResourceFile("XYIII.ffx", "RIFX\x00\x00\b\nFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x07\u00E6bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYIII\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x06XYIII\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06lsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02tparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/XYIII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYIII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12X\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYIII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03\u00ACtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x06XYIII\x00tdmn\x00\x00\x00(Pseudo/XYIII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYIII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYIII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYIII\",\"matchname\":\"Pseudo/XYIII\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0,\"active\":true}]}", ffxFolder.toString(), true);
    var xyziiiFFX = createResourceFile("XYZIII.ffx", "RIFX\x00\x00\n\x00FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\t\u00DCbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x07XYZIII\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\b`sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03@parTparn\x00\x00\x00\x04\x00\x00\x00\x04tdmn\x00\x00\x00(Pseudo/XYZIII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12X\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12Y\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12Z\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x04\u00D4tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07XYZIII\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYZIII-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02X\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Y\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZIII-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00EEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x02Z\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYZIII\",\"matchname\":\"Pseudo/XYZIII\",\"controlArray\":[{\"index\":0,\"name\":\"X\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0},{\"index\":1,\"name\":\"Y\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0},{\"index\":2,\"name\":\"Z\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0,\"active\":true}]}", ffxFolder.toString(), true);
    var xHoverFFX = createResourceFile("XHover.ffx", "RIFX\x00\x00\x11\u00BCFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x11\u0098bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x07XHover\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x10\x1Csspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06pparTparn\x00\x00\x00\x04\x00\x00\x00\btdmn\x00\x00\x00(Pseudo/XHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHover IN\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHover Out\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rSensitivity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHorizontal\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nVertical\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Hover Layer\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\t`tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07XHover\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tHover IN\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nHover Out\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fSensitivity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BHorizontal\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tVertical\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07XHover\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fHover Layer\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XHover\",\"matchname\":\"Pseudo/XHover\",\"controlArray\":[{\"index\":0,\"name\":\"Hover IN\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":\"0\",\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Hover Out\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Sensitivity\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false},{\"index\":0,\"name\":\"Horizontal\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Vertical\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"type\":\"endgroup\"},{\"index\":3,\"name\":\"Hover Layer\",\"parent\":null,\"type\":\"layer\",\"invisible\":false,\"default\":1,\"active\":true}]}", ffxFolder.toString(), true);
    var xyHoverFFX = createResourceFile("XYHover.ffx", "RIFX\x00\x00\x11\u008CFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x11hbescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\bXYHover\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0F\u00ECsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06pparTparn\x00\x00\x00\x04\x00\x00\x00\btdmn\x00\x00\x00(Pseudo/XYHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06Hover IN\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x06Hover OUT\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u0080\x00\x00\x00\u0080\x00\x00\x00\x002\x00\x00\x002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rSensitivity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHorizontal\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nVertical\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Hover Layer\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\t0tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bXYHover\x00tdmn\x00\x00\x00(Pseudo/XYHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tHover IN\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nHover OUT\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x02\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x000@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fSensitivity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BHorizontal\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tVertical\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bXYHover\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fHover Layer\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYHover\",\"matchname\":\"Pseudo/XYHover\",\"controlArray\":[{\"index\":0,\"name\":\"Hover IN\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540},{\"index\":1,\"name\":\"Hover OUT\",\"hold\":false,\"parent\":null,\"type\":\"point\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540},{\"index\":2,\"name\":\"Sensitivity\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false},{\"index\":0,\"name\":\"Horizontal\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Vertical\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"type\":\"endgroup\"},{\"index\":3,\"name\":\"Hover Layer\",\"parent\":null,\"type\":\"layer\",\"invisible\":false,\"default\":1,\"active\":true}]}", ffxFolder.toString(), true);
    var xyzHoverFFX = createResourceFile("XYZHover.ffx", "RIFX\x00\x00\x11\u00C2FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x11\u009Ebescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\tXYZHover\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x10 sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06pparTparn\x00\x00\x00\x04\x00\x00\x00\btdmn\x00\x00\x00(Pseudo/XYZHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12Hover IN\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x12Hover OUT\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00?\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00@I\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rSensitivity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHorizontal\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nVertical\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Hover Layer\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\tdtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tXYZHover\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYZHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tHover IN\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nHover OUT\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x03\x00\x0F\x00\x03\u00FF\u00FF\u00FF\u00FF\x00\x00]\u00A8=\u009B|\u00DF\u00D9\u00D7\u00BD\u00BC?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\b\t\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00H@#333333@\x15\u0099\u0099\u0099\u0099\u0099\u009A\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fSensitivity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BHorizontal\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tVertical\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/XYZHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E2tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tXYZHover\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/XYZHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fHover Layer\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"XYZHover\",\"matchname\":\"Pseudo/XYZHover\",\"controlArray\":[{\"index\":0,\"name\":\"Hover IN\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0},{\"index\":1,\"name\":\"Hover OUT\",\"hold\":false,\"parent\":null,\"type\":\"point3d\",\"keyframes\":true,\"invisible\":false,\"default_x\":0.5,\"default_y\":0.5,\"point_x\":960,\"point_y\":540,\"default_z\":0,\"point_z\":0},{\"index\":2,\"name\":\"Sensitivity\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false},{\"index\":0,\"name\":\"Horizontal\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Vertical\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"type\":\"endgroup\"},{\"index\":3,\"name\":\"Hover Layer\",\"parent\":null,\"type\":\"layer\",\"invisible\":false,\"default\":1,\"active\":true}]}", ffxFolder.toString(), true);
    var colorHoverFFX = createResourceFile("ColorHover.ffx", "RIFX\x00\x00\x11\u00F8FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x11\u00D4bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\x0BColorHover\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x10Tsspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06pparTparn\x00\x00\x00\x04\x00\x00\x00\btdmn\x00\x00\x00(Pseudo/ColorHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Hover IN\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05Hover OUT\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rSensitivity\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nHorizontal\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nVertical\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00=\u00CC\u00CC\u00CCIt$\x00=\u00CC\u00CC\u00CCB\u00C8\x00\x00A\u00C8\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00Hover Layer\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\t\u0098tdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BColorHover\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/ColorHover-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x0Etdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tHover IN\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x01\x0Etdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nHover OUT\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x04\x00\x07\x00\x01\x00\x02\u00FF\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00`@o\u00E0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fSensitivity\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BHorizontal\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\tVertical\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b?\u00B9\u0099\u0099\u0099\u0099\u0099\u009AtduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/ColorHover-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BColorHover\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/ColorHover-0007\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\fHover Layer\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"ColorHover\",\"matchname\":\"Pseudo/ColorHover\",\"controlArray\":[{\"index\":0,\"name\":\"Hover IN\",\"hold\":false,\"parent\":null,\"type\":\"color\",\"keyframes\":true,\"invisible\":false,\"default_red\":255,\"default_green\":255,\"default_blue\":255},{\"index\":1,\"name\":\"Hover OUT\",\"hold\":false,\"parent\":null,\"type\":\"color\",\"keyframes\":true,\"invisible\":false,\"default_red\":0,\"default_green\":0,\"default_blue\":0},{\"index\":2,\"name\":\"Sensitivity\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false},{\"index\":0,\"name\":\"Horizontal\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Vertical\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":25,\"smin\":0.1,\"smax\":100,\"vmin\":0.1,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"type\":\"endgroup\"},{\"index\":3,\"name\":\"Hover Layer\",\"parent\":null,\"type\":\"layer\",\"invisible\":false,\"default\":1,\"active\":true}]}", ffxFolder.toString(), true);
    var antiFFX = createResourceFile("Anticipation.ffx", "RIFX\x00\x00\b*FaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\b\x06bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Anticipation\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\rAnticipation\x00\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x06\u0084sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x02\u008CparTparn\x00\x00\x00\x04\x00\x00\x00\x03tdmn\x00\x00\x00(Pseudo/Anticipation-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Anticipation-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x07Anticipation Type\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x01\x00\x03\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pdnm\x00\x00\x00\x10OUT|IN|IN - OUT\x00tdmn\x00\x00\x00(Pseudo/Anticipation-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nOvershoot\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00A\u0088\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x03\u00ACtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\rAnticipation\x00\x00tdmn\x00\x00\x00(Pseudo/Anticipation-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/Anticipation-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DEtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x12Anticipation Type\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/Anticipation-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F6tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\nOvershoot\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(@1\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Anticipation\",\"matchname\":\"Pseudo/Anticipation\",\"controlArray\":[{\"index\":0,\"name\":\"Anticipation Type\",\"hold\":true,\"parent\":null,\"type\":\"popup\",\"keyframes\":false,\"invisible\":false,\"default\":1,\"options\":\"OUT|IN|IN - OUT\"},{\"index\":1,\"name\":\"Overshoot\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":17,\"smin\":0,\"smax\":100,\"vmin\":0,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false,\"active\":true}]}", ffxFolder.toString(), true);
    var extrudeFFX = createResourceFile("3DExtrude.ffx", "RIFX\x00\x00\x0F\u00DAFaFXhead\x00\x00\x00\x10\x00\x00\x00\x03\x00\x00\x00D\x00\x00\x00\x01\x01\x00\x00\x00LIST\x00\x00\x0F\u00B6bescbeso\x00\x00\x008\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00]\u00A8\x00\x1D\u00F8R\x00\x00\x00\x00\x00d\x00d\x00d\x00d?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FFLIST\x00\x00\x00\u00ACtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x02LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE Effect Parade\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdsn\x00\x00\x00\bExtrude\x00LIST\x00\x00\x00dtdsptdot\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdpl\x00\x00\x00\x04\x00\x00\x00\x01LIST\x00\x00\x00@tdsitdix\x00\x00\x00\x04\u00FF\u00FF\u00FF\u00FFtdmn\x00\x00\x00(ADBE End of path sentinel\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x0E:sspcfnam\x00\x00\x000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x05\u00A4parTparn\x00\x00\x00\x04\x00\x00\x00\x07tdmn\x00\x00\x00(Pseudo/3DExtrude-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FF\u00FF\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\n3D Depth Shadow\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\u00C2\u00C8\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\rOffset\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nX - offset\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nY - offset\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\nZ - offset\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00C9t$\x00It$\x00\x00\x00\x00\x00B\u00C8\x00\x00\x00\x00\x00\x00\x00\x02\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00pard\x00\x00\x00\u0094\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0E\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\bJtdgptdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bExtrude\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0000\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00DAtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x03tdsn\x00\x00\x00\x01\x00\x00tdb4\x00\x00\x00|\u00DB\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x00\x00\x00\x02X?\x1A6\u00E2\u00EB\x1CC-?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00?\u00F0\x00\x00\x00\x00\x00\x00\x00\x00\x00\x04\x04\u00C0\u00C0\u00C0\u00FF\u00C0\u00C0\u00C0\x00\x00\x00\x00\u0080\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(Pseudo/3DExtrude-0001\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00FCtdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x103D Depth Shadow\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\u00C0Y\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0002\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00D4tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x07Offset\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0003\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BX - offset\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0004\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BY - offset\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0005\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00F8tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\x0BZ - offset\x00\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\u00FF\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdum\x00\x00\x00\b\x00\x00\x00\x00\x00\x00\x00\x00tduM\x00\x00\x00\b@Y\x00\x00\x00\x00\x00\x00tdmn\x00\x00\x00(Pseudo/3DExtrude-0006\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00LIST\x00\x00\x00\u00E0tdbstdsb\x00\x00\x00\x04\x00\x00\x00\x01tdsn\x00\x00\x00\bExtrude\x00tdb4\x00\x00\x00|\u00BD\u0099\x00\x01\x00\x01\x00\x00\x00\x01\x00\x04\x00\x00]\u00A8\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00cdat\x00\x00\x00(\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00tdpi\x00\x00\x00\x04\x00\x00\x00\x0Etdmn\x00\x00\x00(ADBE Group End\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00{\"controlName\":\"Extrude\",\"matchname\":\"Pseudo/3DExtrude\",\"controlArray\":[{\"index\":0,\"name\":\"3D Depth Shadow\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":-100,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Offset\",\"parent\":null,\"type\":\"group\",\"container\":null,\"invisible\":false,\"active\":true},{\"index\":0,\"name\":\"X - offset\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":1,\"name\":\"Y - offset\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"index\":2,\"name\":\"Z - offset\",\"hold\":false,\"parent\":null,\"type\":\"slider\",\"keyframes\":true,\"invisible\":false,\"default\":0,\"smin\":0,\"smax\":100,\"vmin\":-1000000,\"vmax\":1000000,\"precision\":2,\"percent\":false,\"pixel\":false},{\"type\":\"endgroup\"}]}", ffxFolder.toString(), true);

    //===============================

    function buildUI(Obj, isErr) {

        // UI Build Start

        win = (Obj instanceof Panel) ? Obj : new Window("palette", "new project", [0, 0, 210, 500], {
            resizeable: false,
        });

        if (isErr) {

            errPanel = win.add("panel", [5, 5, 210, 220]);
            errPanel.name = "errorPanel";
            errText = errPanel.add("statictext", [5, 5, 195, 205], undefined, {
                multiline: true,
            });

            errText.text = scriptName + " " + version + '\nRequires access to write files.\n\n' + 'To allow, please go to\n\nPreferences > General\n\nand check off\n\n"Allow Scripts to Write Files and Access Network"\n\nThen relaunch the script.';

            return win;
        }

        var defBG = [0.137254901960784, 0.137254901960784, 0.137254901960784];

        var greenColor = [0.137254901960784, 0.784313725490196, 0.235294117647059];
        var redColor = [0.784313725490196, 0.137254901960784, 0.137254901960784];
        var orangeColor = [0.784313725490196, 0.549019607843137, 0.137254901960784];
        var blueColor = [0.176470588, 0.549019608, 0.921568627];

        win.graphics.backgroundColor = win.graphics.newBrush(win.graphics.BrushType.SOLID_COLOR, defBG);

        //===============================

        //===============================

        topPanel = win.add("panel", [5, 5, 210, 40]); {
            topPanel.name = "topPanel";

            quick_Note_Btn = topPanel.add("iconbutton", [2.5, 2.5, 27.5, 27.5], undefined, { //[5, 5, 25, 25]
                style: "toolbutton"
            });
            quick_Note_Btn.toggle = false;

            scriptImage = topPanel.add("image", [30, 5, 170, 25], undefined);

            aboutGroup = topPanel.add("group", [0, 35, 205, 390], undefined); {
                aboutGroup.visible = false;

                bigLogoImage = aboutGroup.add("image", [2.5, 5, 202.5, 85], undefined);

                var aboutTxt = aboutGroup.add("statictext", [5, 85, 200, 135], undefined); {
                    aboutTxt.justify = "center";
                    aboutTxt.multiline = true;
                    aboutTxt.text = "PRO Motion Script\nExclusive on Envato.com";
                }

                envatoIcon = aboutGroup.add("image", [45, 150, 70, 175], undefined);
                faceIcon = aboutGroup.add("image", [75, 150, 100, 175], undefined); //[60, 150, 85, 175]  
                instaIcon = aboutGroup.add("image", [105, 150, 130, 175], undefined); //[90, 150, 115, 175]
                youtubeIcon = aboutGroup.add("image", [135, 150, 160, 175], undefined); //[120, 150, 145, 175]

                contactIcon = aboutGroup.add("image", [170, 325, 195, 350], undefined);
                verTxt = aboutGroup.add("statictext", [10, 340, 55, 350], undefined);{
                    verTxt.text = version;
                }
            }

            noteGroup = topPanel.add("group", [30, 0, 200, 30], undefined);{

                noteGroup.visible = false;
                
                var radiobutton1 = noteGroup.add("radioButton", [5, 7.5, 25, 27.5], undefined); //[2.5, 2.5, 32.5, 27.5]
                radiobutton1.value = true; 
                radiobutton1.name = "NOTE"; 
                var radiobutton2 = noteGroup.add("radioButton", [30, 7.5, 50, 27.5], undefined); //[2.5, 2.5, 32.5, 27.5]
                radiobutton2.name = "ALT"; 
                var radiobutton3 = noteGroup.add("radioButton", [55, 7.5, 75, 27.5], undefined); //[2.5, 2.5, 32.5, 27.5]
                radiobutton3.name = "CTRL"; 
                var radiobutton4 = noteGroup.add("radioButton", [80, 7.5, 100, 27.5], undefined); //[2.5, 2.5, 32.5, 27.5]
                radiobutton4.name = "SHIFT"; 
                var noteTitleTxt = noteGroup.add("statictext", [105, 5, 150, 25], undefined);
                noteTitleTxt.text = "NOTE";
                
                var isExCode = noteGroup.add("checkbox", [150, 7.5, 185, 27.5], undefined);
                isExCode.value = false;
                isExCode.enabled = false;
                
                var noteTexts = win.add('edittext {properties: {multiline: true, scrollable: true}}', [5, 45, 210, 402.5], "100");
                noteTexts.name = "noteText";
                noteTexts.visible = false;
                noteTexts.name = 'NOTE';
                var colorNote = win.add("iconbutton", [7.5, 405, 54.5, 407.5], undefined);
                colorNote.enabled = false;
                colorNote.visible = false;
                colorBtn(colorNote,greenColor);
                colorNote.name = "colorNote";
            }

                
            plugin_Btn = topPanel.add("iconbutton", [97.5, 2.5, 122.5, 27.5], undefined, {
                style: "toolbutton"
            });
            plugin_Btn.toggle = false;
            // colorBtn(test_BtnPanel,orangeColor);


            
            scriptLauncher_Btn = topPanel.add("iconbutton", [122.5, 2.5, 147.5, 27.5], undefined, { 
                style: "toolbutton"
            });
            scriptLauncher_Btn.toggle = false;

            screenshot_Btn = topPanel.add("iconbutton", [147.5, 2.5, 172.5, 27.5], undefined, { 
                style: "toolbutton"
            });

            about_Btn = topPanel.add("iconbutton", [172.5, 2.5, 197.5, 27.5], undefined, { //[175, 5, 195, 25]
                style: "toolbutton"
            });
            about_Btn.toggle = false;

        }

        scriptLancherPanel = win.add("panel", [5, 45, 210, 402.5]);{

            scriptLancherPanel.name = "scriptLancherPanel";
            scriptLancherPanel.visible = false;

            scriptListSearchBar = scriptLancherPanel.add('edittext {justify: "center", properties: {borderless: true}}',[2.5,2.5,200,22.5]);

            scriptList = scriptLancherPanel.add("listbox",[2.5,25,200,322.5]);
            refreshScripts_Btn = scriptLancherPanel.add("iconbutton", [175, 325, 200, 350], undefined, { 
                style: "toolbutton"
            });

            scriptsFolder_Btn = scriptLancherPanel.add("iconbutton", [2.5, 325, 27.5, 350], undefined, { 
                style: "toolbutton"
            });

        }

        easeSliders = win.add("panel", [5, 45, 210, 130]); {

            easeSliders.name = "easeSlidersPanel";

            easeOutImage = easeSliders.add("iconbutton", [5, 5, 25, 25], undefined, {
                style: "toolbutton"
            });
            easeInImage = easeSliders.add("iconbutton", [5, 30, 25, 50], undefined, {
                style: "toolbutton"
            });
            easeImage = easeSliders.add("iconbutton", [5, 55, 25, 75], undefined, {
                style: "toolbutton"
            });

            var eS_Size = 20;
            var eS_Base = (easeSliders.size.height - (3 * eS_Size) - 5) / 4;;

            easeOutSlider = easeSliders.add("slider", [30, eS_Base, 135, eS_Base + eS_Size], undefined);
            easeInSlider = easeSliders.add("slider", [30, eS_Base * 2 + eS_Size, 135, eS_Base * 2 + eS_Size * 2], undefined);
            easeSlider = easeSliders.add("slider", [30, eS_Base * 3 + eS_Size * 2, 135, eS_Base * 3 + eS_Size * 3], undefined);

            easeOutAmount = easeSliders.add("edittext", [140, 5, 170, 25], "100");
            easeInAmount = easeSliders.add("edittext", [140, 30, 170, 50], "100");
            easeAmount = easeSliders.add("edittext", [140, 55, 170, 75], "100");

            store_Ease_Btn = easeSliders.add("iconbutton", [175, 5, 195, 25], undefined, {
                style: "toolbutton"
            });
            import_Ease_Btn = easeSliders.add("iconbutton", [175, 30, 195, 50], undefined, {
                style: "toolbutton"
            });
            stored_Ease_Txt = easeSliders.add('statictext {text: "0", justify: "center"}', [175, 55, 195, 75]);
        }

        anchors = win.add("panel", [5, 135, 100, 235]); {
            anchors.name = "anchorsPanel";
            topLine = anchors.add("group", [5, 7.5, 105, 107.5], "undefined");
            topLeftBtn = topLine.add("iconbutton", [5, 5, 25, 25], undefined, {
                style: "toolbutton"
            });
            topMidBtn = topLine.add("iconbutton", [30, 5, 50, 25], undefined, {
                style: "toolbutton"
            });
            topRightBtn = topLine.add("iconbutton", [55, 5, 75, 25], undefined, {
                style: "toolbutton"
            });

            midLine = anchors.add("group", [5, 32.5, 105, 132.5], "undefined");
            midLeftBtn = midLine.add("iconbutton", [5, 5, 25, 25], undefined, {
                style: "toolbutton"
            });
            midMidBtn = midLine.add("iconbutton", [30, 5, 50, 25], undefined, {
                style: "toolbutton"
            });
            midRightBtn = midLine.add("iconbutton", [55, 5, 75, 25], undefined, {
                style: "toolbutton"
            });

            botLine = anchors.add("group", [5, 57.5, 105, 157.5], "undefined");
            botLeftBtn = botLine.add("iconbutton", [5, 5, 25, 25], undefined, {
                style: "toolbutton"
            });
            botMidBtn = botLine.add("iconbutton", [30, 5, 50, 25], undefined, {
                style: "toolbutton"
            });
            botRightBtn = botLine.add("iconbutton", [55, 5, 75, 25], undefined, {
                style: "toolbutton"
            });
        }

        firstPanel = win.add("panel", [105, 135, 210, 235]); {
            firstPanel.name = "firstPanel";
            bounce_Btn = firstPanel.add("iconbutton", [5, 5, 70, 30], undefined, {
                style: "toolbutton"
            });
            elastic_Btn = firstPanel.add("iconbutton", [5, 35, 70, 60], undefined, {
                style: "toolbutton"
            });
            clone_Btn = firstPanel.add("iconbutton", [5, 65, 70, 90], undefined, {
                style: "toolbutton"
            });


            lineCap_Btn = firstPanel.add("iconbutton", [75, 5, 100, 30], undefined, {
                style: "toolbutton"
            });

            lineJoin_Btn = firstPanel.add("iconbutton", [75, 35, 100, 60], undefined, {
                style: "toolbutton"
            });

            addNullStrokeAlign_Btn = firstPanel.add("iconbutton", [75, 65, 100, 90], undefined, {
                style: "toolbutton"
            });

        }

        var bSize = 25;
        var bSpace = 3.5;

        secPanel = win.add("panel", [5, 240, 210, 370]); { 
            secPanel.name = "secPanel";
            var bPos = 5

            break_Btn = secPanel.add("iconbutton", [bSpace, bPos, (bSize + bSpace), (bPos + bSize)], undefined, { //[5, 5, 65, 30][5, 35, 65, 60]
                style: "toolbutton"
            });
            linkIT_Btn = secPanel.add("iconbutton", [(bSize + (2 * bSpace)), bPos, ((2 * bSize) + (2 * bSpace)), (bPos + bSize)], undefined, { //[5, 35, 65, 60]
                style: "toolbutton"
            });
            lockIT_Btn = secPanel.add("iconbutton", [((2 * bSize) + (3 * bSpace)), bPos, ((3 * bSize) + (3 * bSpace)), (bPos + bSize)], undefined, { //[70, 35, 130, 60][35, 35, 60, 60]
                style: "toolbutton"
            });
            extrudeIT_Btn = secPanel.add("iconbutton", [((3 * bSize) + (4 * bSpace)), bPos, ((4 * bSize) + (4 * bSpace)), (bPos + bSize)], undefined, { //[135, 35, 195, 60][65, 35, 90, 60]
                style: "toolbutton"
            });
            marker_Btn = secPanel.add("iconbutton", [((4 * bSize) + (5 * bSpace)), bPos, ((5 * bSize) + (5 * bSpace)), (bPos + bSize)], undefined, { //[70, 65, 130, 90][125, 35, 150, 60]
                style: "toolbutton"
            });
            flip_Btn = secPanel.add("iconbutton", [((5 * bSize) + (6 * bSpace)), bPos, ((6 * bSize) + (6 * bSpace)), (bPos + bSize)], undefined, { //[70, 5, 130, 30]
                style: "toolbutton"
            });
            cut_Btn = secPanel.add("iconbutton", [((6 * bSize) + (7 * bSpace)), bPos, ((7 * bSize) + (7 * bSpace)), (bPos + bSize)], undefined, { //[135, 5, 195, 30][185, 35, 210, 60]
                style: "toolbutton"
            });

            hover_Btn = secPanel.add("iconbutton", [bSpace, (bSize + (2 * bPos)), (bSize + bSpace), ((2 * bPos) + (2 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });
            keyControl_Btn = secPanel.add("iconbutton", [(bSize + (2 * bSpace)), (bSize + (2 * bPos)), ((2 * bSize) + (2 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[135, 65, 195, 90][155, 35, 180, 60]
                style: "toolbutton"
            });
            wiggle_Btn = secPanel.add("iconbutton", [((2 * bSize) + (3 * bSpace)), (bSize + (2 * bPos)), ((3 * bSize) + (3 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[5, 95, 65, 120]
                style: "toolbutton"
            });
            shred_Btn = secPanel.add("iconbutton", [((3 * bSize) + (4 * bSpace)), (bSize + (2 * bPos)), ((4 * bSize) + (4 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });
            arrangeBtn = secPanel.add("iconbutton", [((4 * bSize) + (5 * bSpace)), (bSize + (2 * bPos)), ((5 * bSize) + (5 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });
            orderBtn = secPanel.add("iconbutton", [((5 * bSize) + (6 * bSpace)), (bSize + (2 * bPos)), ((6 * bSize) + (6 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });
            sequenceBtn = secPanel.add("iconbutton", [((6 * bSize) + (7 * bSpace)), (bSize + (2 * bPos)), ((7 * bSize) + (7 * bSpace)), ((2 * bPos) + (2 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });

            rename_Btn = secPanel.add("iconbutton", [bSpace, ((3 * bPos) + (2 * bSize)), (bSize + bSpace), ((3 * bPos) + (3 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });
            rename_Btn.toggle = false;
            rename_Txt = secPanel.add("edittext", [(bSize + (2 * bSpace)), ((3 * bPos) + (2 * bSize)), ((4 * bSize) + (4 * bSpace)), ((3 * bPos) + (3 * bSize))], "");
            rename_Txt.visible = false;
            serialize_Btn = secPanel.add("iconbutton", [((4 * bSize) + (5 * bSpace)), ((3 * bPos) + (2 * bSize)), ((5 * bSize) + (5 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });
            serialize_Btn.visible = false;
            serialize_Btn.toggle = false;
            serialize_Txt = secPanel.add("edittext", [((5 * bSize) + (6 * bSpace)), ((3 * bPos) + (2 * bSize)), ((6 * bSize) + (6 * bSpace)), ((3 * bPos) + (3 * bSize))], "");
            serialize_Txt.visible = false;
            doRename_Btn = secPanel.add("iconbutton", [((6 * bSize) + (7 * bSpace)), ((3 * bPos) + (2 * bSize)), ((7 * bSize) + (7 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[70, 95, 130, 120]
                style: "toolbutton"
            });
            doRename_Btn.visible = false;

            loopOut_Btn = secPanel.add("iconbutton", [(bSize + (2 * bSpace)), ((3 * bPos) + (2 * bSize)), ((2 * bSize) + (2 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });
            loopIn_Btn = secPanel.add("iconbutton", [((2 * bSize) + (3 * bSpace)), ((3 * bPos) + (2 * bSize)), ((3 * bSize) + (3 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });
            line_Btn = secPanel.add("iconbutton", [((3 * bSize) + (4 * bSpace)), ((3 * bPos) + (2 * bSize)), ((4 * bSize) + (4 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });
            selSimilar_Btn = secPanel.add("iconbutton", [((4 * bSize) + (5 * bSpace)), ((3 * bPos) + (2 * bSize)), ((5 * bSize) + (5 * bSpace)), ((3 * bPos) + (3 * bSize))], undefined, { //[5, 65, 65, 90][95, 35, 120, 60]
                style: "toolbutton"
            });

            /* posRnd_Btn = secPanel.add("iconbutton", [bSpace, ((3 * bPos) + (2 * bSize)), (bSize + bSpace), ((3 * bPos) + (3 * bSize))], iconPosRnd, { //[137, 99, 151, 116]
                style: "toolbutton"
            });
            rotRnd_Btn = secPanel.add("iconbutton", [(bSize + (2 * bSpace)), ((3 * bPos) + (2 * bSize)), ((2 * bSize) + (2 * bSpace)), ((3 * bPos) + (3 * bSize))], iconRotRnd, { //[151, 99, 165, 116]
                style: "toolbutton"
            });
            sclRnd_Btn = secPanel.add("iconbutton", [((2 * bSize) + (3 * bSpace)), ((3 * bPos) + (2 * bSize)), ((3 * bSize) + (3 * bSpace)), ((3 * bPos) + (3 * bSize))], iconSclRnd, { //[165, 99, 179, 116]
                style: "toolbutton"
            });
            optRnd_Btn = secPanel.add("iconbutton", [((3 * bSize) + (4 * bSpace)), ((3 * bPos) + (2 * bSize)), ((4 * bSize) + (4 * bSpace)), ((3 * bPos) + (3 * bSize))], iconOptRnd, { //[179, 99, 193, 116]
                style: "toolbutton"
            }); */

            offsetV = secPanel.add("edittext", [((5 * bSize) + (6 * bSpace)), ((3 * bPos) + (2 * bSize)) + 2.5, ((6 * bSize) + (6 * bSpace)), ((3 * bPos) + (3 * bSize)) - 2.5], "10");
            stepV = secPanel.add("edittext", [((6 * bSize) + (7 * bSpace)), ((3 * bPos) + (2 * bSize)) + 2.5, ((7 * bSize) + (7 * bSpace)), ((3 * bPos) + (3 * bSize)) - 2.5], "1");

            seqColor = secPanel.add("iconbutton", [((6 * bSize) + (6 * bSpace)) + 1, ((3 * bPos) + (2 * bSize)) + 3.5, ((6 * bSize) + (7 * bSpace)) - 1, ((3 * bPos) + (3 * bSize)) - 3.5], undefined, {
                style: "toolbutton"
            });

            colorBtn(seqColor, blueColor);
            seqColor.enabled = false;

            altInfo = secPanel.add("iconbutton", [199, 95, 205, 102], undefined, {
                style: "toolbutton"
            });
            ctrlInfo = secPanel.add("iconbutton", [199, 104, 205, 111], undefined, {
                style: "toolbutton"
            });
            shiftInfo = secPanel.add("iconbutton", [199, 113, 205, 120], undefined, {
                style: "toolbutton"
            });

            colorBtn(altInfo, greenColor);
            colorBtn(ctrlInfo, greenColor);
            colorBtn(shiftInfo, greenColor);

            altInfo.enabled = ctrlInfo.enabled = shiftInfo.enabled = false;
            altInfo.visible = ctrlInfo.visible = shiftInfo.visible = false;

            infoText = secPanel.add("statictext", [5, ((4 * bPos) + (3 * bSize)), 210, ((4 * bPos) + (4 * bSize))], "");

        }

        colorControl = win.add("panel", [5, 375, 210, 402.5]); {
            colorControl.name = "colorControl";
            addcolor_Btn = colorControl.add("iconbutton", [0, 0, 25, 25], undefined, { //[75, 65, 100, 90]
                style: "toolbutton"
            });
            
            swapColor_Btn = colorControl.add("iconbutton", [50, 0, 75, 25], undefined, {
                style: "toolbutton",
            });
            
            useCodeColor_Btn = colorControl.add("iconbutton", [75, 0, 100, 25], undefined, {
                style: "toolbutton",
            });

            loadColor_Btn = colorControl.add("iconbutton", [100, 0, 125, 25], undefined, { //[75, 65, 100, 90]
                style: "toolbutton"
            });

            updateColor_Btn = colorControl.add("iconbutton", [125, 0, 150, 25], undefined, { //[75, 65, 100, 90]
                style: "toolbutton"
            });

            reloadColorJSON_Btn = colorControl.add("iconbutton", [150, 0, 175, 25], undefined, { //[75, 65, 100, 90]
                style: "toolbutton"
            });

            hidecolor_Btn = colorControl.add("iconbutton", [175, 0, 200, 25], undefined, { //[75, 65, 100, 90]
                style: "toolbutton"
            });


        }
        colorPanel = win.add("group", [10, 405, 210, 430]);
        colorPanel.name = "colorPanel";

        //===================================================================

        scriptImage.icon = iconsFolder.toString() + "/scriptLogo.png";
        quick_Note_Btn.icon = iconsFolder.toString() + "/quickNoteIcon.png";
        scriptLauncher_Btn.icon = iconsFolder.toString() + "/scriptLancherIcon.png";
        refreshScripts_Btn.icon = iconsFolder.toString() + "/reloadColorJSONIcon.png";
        scriptsFolder_Btn.icon = iconsFolder.toString() + "/scriptsFolderIcon.png";
        screenshot_Btn.icon = iconsFolder.toString() + "/screenshotIcon.png";
        about_Btn.icon = iconsFolder.toString() + "/aboutIcon.png";
        extrudeIT_Btn.icon = iconsFolder.toString() + "/extrudeIcon.png";
        lockIT_Btn.icon = iconsFolder.toString() + "/lockIcon.png";
        linkIT_Btn.icon = iconsFolder.toString() + "/linkIcon.png";
        hover_Btn.icon = iconsFolder.toString() + "/hoverIcon.png";
        keyControl_Btn.icon = iconsFolder.toString() + "/keyControlIcon.png";
        cut_Btn.icon = iconsFolder.toString() + "/trimIcon.png";
        marker_Btn.icon = iconsFolder.toString() + "/markerIcon.png";
        break_Btn.icon = iconsFolder.toString() + "/breakIcon.png";
        flip_Btn.icon = iconsFolder.toString() + "/flipIcon.png";
        wiggle_Btn.icon = iconsFolder.toString() + "/wiggleIcon.png";
        shred_Btn.icon = iconsFolder.toString() + "/shredIcon.png";
        arrangeBtn.icon = iconsFolder.toString() + "/arrangeIcon.png";
        orderBtn.icon = iconsFolder.toString() + "/orderIcon.png";
        sequenceBtn.icon = iconsFolder.toString() + "/sequenceIcon.png";
        rename_Btn.icon = iconsFolder.toString() + "/renameIcon.png";
        doRename_Btn.icon = iconsFolder.toString() + "/doRenameIcon.png";
        serialize_Btn.icon = iconsFolder.toString() + "/serializeIcon.png";
        loopOut_Btn.icon = iconsFolder.toString() + "/loopOutIcon.png";
        loopIn_Btn.icon = iconsFolder.toString() + "/loopInIcon.png";
        line_Btn.icon = iconsFolder.toString() + "/lineIcon.png";
        selSimilar_Btn.icon = iconsFolder.toString() + "/selSimilarIcon.png";
        elastic_Btn.icon = iconsFolder.toString() + "/elasticIcon.png";
        bounce_Btn.icon = iconsFolder.toString() + "/bounceIcon.png";
        clone_Btn.icon = iconsFolder.toString() + "/cloneIcon.png";
        lineCap_Btn.icon = iconsFolder.toString() + "/linecapIcon.png";
        lineJoin_Btn.icon = iconsFolder.toString() + "/linejoinIcon.png";
        addNullStrokeAlign_Btn.icon = iconsFolder.toString() + "/addNullIcon.png";
        easeImage.icon = iconsFolder.toString() + "/easeIcon.png";
        easeInImage.icon = iconsFolder.toString() + "/easeInIcon.png";
        easeOutImage.icon = iconsFolder.toString() + "/easeOutIcon.png";
        store_Ease_Btn.icon = iconsFolder.toString() + "/storeEaseIcon.png";
        import_Ease_Btn.icon = iconsFolder.toString() + "/importEaseIcon.png";
        topLeftBtn.icon = iconsFolder.toString() + "/TL.png";
        topMidBtn.icon = iconsFolder.toString() + "/TM.png";
        topRightBtn.icon = iconsFolder.toString() + "/TR.png";
        midLeftBtn.icon = iconsFolder.toString() + "/ML.png";
        midMidBtn.icon = iconsFolder.toString() + "/MM.png";
        midRightBtn.icon = iconsFolder.toString() + "/MR.png";
        botLeftBtn.icon = iconsFolder.toString() + "/BL.png";
        botMidBtn.icon = iconsFolder.toString() + "/BM.png";
        botRightBtn.icon = iconsFolder.toString() + "/BR.png";
        addcolor_Btn.icon = iconsFolder.toString() + "/addColorIcon.png";
        swapColor_Btn.icon = iconsFolder.toString() + "/swapColorIcon.png";
        useCodeColor_Btn.icon = iconsFolder.toString() + "/useCodeColorIcon.png";
        loadColor_Btn.icon = iconsFolder.toString() + "/loadColorIcon.png";
        updateColor_Btn.icon = iconsFolder.toString() + "/updateColorIcon.png";
        reloadColorJSON_Btn.icon = iconsFolder.toString() + "/reloadColorJSONIcon.png";
        hidecolor_Btn.icon = iconsFolder.toString() + "/hideColorIcon.png";
        bigLogoImage.icon = iconsFolder.toString() + "/bigLogoIcon.png";
        instaIcon.icon = iconsFolder.toString() + "/instaIcon.png";
        faceIcon.icon = iconsFolder.toString() + "/faceIcon.png";
        youtubeIcon.icon = iconsFolder.toString() + "/youtubeIcon.png";
        envatoIcon.icon = iconsFolder.toString() + "/envatoIcon.png";
        contactIcon.icon = iconsFolder.toString() + "/contactUsIcon.png";
        plugin_Btn.icon = iconsFolder.toString() + "/pluginBtnIcon.png";

        //===================================================================


        var infoFunction = function (event) {

            if (event.type === "mouseover") {

                switch (this) {

                    case extrudeIT_Btn:
                        infoText.text = "Extrude Selected Layers";
                        altInfo.visible = ctrlInfo.visible = true;
                        break;
                    case lockIT_Btn:
                        infoText.text = "Lock Selected Properties";
                        altInfo.visible = shiftInfo.visible = true;
                        break;
                    case linkIT_Btn:
                        infoText.text = "Create Controllers for Selected Props";
                        altInfo.visible = shiftInfo.visible = true;
                        break;
                    case hover_Btn:
                        infoText.text = "Create Hover Controllers";
                        break;
                    case keyControl_Btn:
                        this.icon = iconsFolder.toString() + "/keyControl_BtnIcon.png";
                        infoText.text = "Create Controllers for Selected Keys";
                        break;
                    case cut_Btn:
                        infoText.text = "Trim Selected Layers or Comp";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case marker_Btn:
                        infoText.text = "Create Marker Controllers";
                        altInfo.visible = true;
                        break;
                    case break_Btn:
                        infoText.text = "Explode Shape / Comp / Text Layers";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case flip_Btn:
                        infoText.text = "Filp Layers / Reverse Layers Order";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case wiggle_Btn:
                        infoText.text = "Add Wiggle to Selected Properties";
                        altInfo.visible = shiftInfo.visible = true;
                        break;
                    case shred_Btn:
                        infoText.text = "Shred Layers into Rows / Columns";
                        altInfo.visible = true;
                        break;
                    case store_Ease_Btn:
                        infoText.text = "Copy Ease from Keyframes";
                        ctrlInfo.visible = true;
                        break;
                    case import_Ease_Btn:
                        infoText.text = "Paste Ease to Keyframes";
                        break;
                    case bounce_Btn:
                        infoText.text = "Add Bounce Expression";
                        shiftInfo.visible = true;
                        break;
                    case elastic_Btn:
                        infoText.text = "Add Elastic / Anticipation Expression";
                        altInfo.visible = shiftInfo.visible = true;
                        break;
                    case clone_Btn:
                        infoText.text = "Clone Selected Keyframes";
                        altInfo.visible = true;
                        break;
                    case loopOut_Btn:
                        infoText.text = "Add LoopOut Expression";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case loopIn_Btn:
                        infoText.text = "Add LoopIn Expression";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case lineCap_Btn:
                        infoText.text = "Change Line Cap";
                        altInfo.visible = ctrlInfo.visible = true;
                        break;
                    case lineJoin_Btn:
                        infoText.text = "Change Line Join";
                        altInfo.visible = ctrlInfo.visible = true;
                        break;
                    case quick_Note_Btn:
                        infoText.text = "Open Quick Note Panel";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case easeOutSlider:
                        infoText.text = "Change Keyframe Outgoing Velocity";
                        break;
                    case easeInSlider:
                        infoText.text = "Change Keyframe Incoming Velocity";
                        break;
                    case easeSlider:
                        infoText.text = "Change Keyframe Velocity";
                        break;
                    case easeOutImage:
                        infoText.text = "Keyframe Outgoing Interpolation";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case easeInImage:
                        infoText.text = "Keyframe Incoming Interpolation";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case easeImage:
                        infoText.text = "Keyframe Interpolation";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case arrangeBtn:
                        this.icon = iconsFolder.toString() + "/arrangeBtnIcon.png";
                        infoText.text = "Arrange Selected Layers";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case orderBtn:
                        infoText.text = "Change Order for Sequence Layers";
                        break;
                    case sequenceBtn:
                        infoText.text = "Sequence Selected Layers";
                        altInfo.visible = true;
                        break;
                    case offsetV:
                        infoText.text = "Set Offset for Sequence Layers";
                        break;
                    case stepV:
                        infoText.text = "Set Step for Sequence Layers";
                        break;
                    case rename_Btn:

                        ctrlInfo.visible = true;
                        if (this.toggle) {

                            infoText.text = "Hide Rename Tool";

                        } else {

                            infoText.text = "Show Rename Tool";

                        }


                        break;
                    case serialize_Btn:
                        infoText.text = "Serialize Before / After";
                        break;
                    case doRename_Btn:
                        infoText.text = "Rename Selected Layers";
                        altInfo.visible = true;
                        break;
                    case line_Btn:
                        infoText.text = "Create Line between Layers";
                        altInfo.visible = shiftInfo.visible = true;
                        break;
                    case addcolor_Btn:
                        infoText.text = "Add Selected Colors to Palette";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case loadColor_Btn:
                        infoText.text = "Load Colors from Project to Palette";
                        break;
                    case updateColor_Btn:
                        infoText.text = "Update Project Colors from Palette";
                        break;
                    case reloadColorJSON_Btn:
                        infoText.text = "Reload Saved Colors to Palette";
                        break;
                    case hidecolor_Btn:
                        if (this.toggle) {

                            infoText.text = "Show Colors Palette";

                        } else {

                            infoText.text = "Hide Colors Palette";

                        }
                        break;
                    case selSimilar_Btn:
                        infoText.text = "Select Similar Properties";
                        break;
                    case addNullStrokeAlign_Btn:
                        infoText.text = "Add Null / Shape Stroke Alignment";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;
                    case useCodeColor_Btn:
                            if (this.toggle) {
                                infoText.text = "Change the property color";
                            } else {
                                infoText.text = "Link the color with palette";
                            }
                        break;
                    case envatoIcon:
                        envatoIcon.icon = iconsFolder.toString() + "/envatoColoredIcon.png";
                        break;
                    case youtubeIcon:
                        youtubeIcon.icon = iconsFolder.toString() + "/youtubeColoredIcon.png";
                        break;  
                    case faceIcon:
                        faceIcon.icon = iconsFolder.toString() + "/faceColoredIcon.png";
                        break;   
                    case instaIcon:
                        instaIcon.icon = iconsFolder.toString() + "/instaColoredIcon.png";
                        break;                                                                   
                    case swapColor_Btn:
                        infoText.text = "Swap Between Fill & Stroke Colors";
                        break;    
                    case screenshot_Btn:
                        infoText.text = "Take Screenshot for Composition";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;    
                    case topLeftBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;     
                    case topMidBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case topRightBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case midLeftBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case midMidBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case midRightBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;  
                    case botLeftBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case botMidBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;   
                    case botRightBtn:
                        infoText.text = "Adjust Anchor Point or Position";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;
                        break;                                                                                                                                                                                                                    
                    default:
                        infoText.text = "";

                }

            }

            if (event.type === "mousedown") {

                switch (this) {

                    case orderBtn:
                        this.icon = iconsFolder.toString() + "/orderBtnDownIcon.png";
                        break;

                    case sequenceBtn:
                        this.icon = iconsFolder.toString() + "/sequenceBtnIcon.png";
                        break;
                    case serialize_Btn:
                        this.icon = iconsFolder.toString() + "/serialize_BtnIcon.png";
                        break;
                    case doRename_Btn:
                        this.icon = iconsFolder.toString() + "/doRename_BtnIcon.png";
                        break;

                    default:


                }

            }

            if (event.type === "mouseout") {

                switch (this) {

                    case keyControl_Btn:
                        this.icon = iconsFolder.toString() + "/keyControlIcon.png";
                        infoText.text = "";
                        break;
                    case arrangeBtn:

                        this.icon = iconsFolder.toString() + "/arrangeIcon.png";
                        infoText.text = "";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = false;
                        break;

                    case sequenceBtn:

                        this.icon = iconsFolder.toString() + "/sequenceIcon.png";
                        infoText.text = "";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = false;
                        break;

                    case orderBtn:

                        if (order == 1) {
                            this.icon = iconsFolder.toString() + "/orderBtnIIcon.png";
                        } else if (order == 2) {
                            this.icon = iconsFolder.toString() + "/orderBtnIcon.png";
                        } else if (order == 3) {
                            this.icon = iconsFolder.toString() + "/orderIcon.png";
                        }

                        infoText.text = "";
                        break;

                    case faceIcon:
                        faceIcon.icon = iconsFolder.toString() + "/faceIcon.png";
                        break;
                    case instaIcon:
                        instaIcon.icon = iconsFolder.toString() + "/instaIcon.png";
                        break;
                    case youtubeIcon:
                        youtubeIcon.icon = iconsFolder.toString() + "/youtubeIcon.png";
                        break;
                    case envatoIcon:
                        envatoIcon.icon = iconsFolder.toString() + "/envatoIcon.png";
                        break;
                    default:
                        infoText.text = "";
                        altInfo.visible = ctrlInfo.visible = shiftInfo.visible = false;


                }
            }
        };

        
        function rightClickBtn(p, btn){

            if (p.button ==2) {

                switch (btn) {
                    case topLeftBtn:
                        adjustPositionToComp(0,0);
                        break;     
                    case topMidBtn:
                        adjustPositionToComp(1,0);
                        break;   
                    case topRightBtn:
                        adjustPositionToComp(2,0);
                        break;   
                    case midLeftBtn:
                        adjustPositionToComp(0,1);
                        break;   
                    case midMidBtn:
                        adjustPositionToComp(1,1);
                        break;   
                    case midRightBtn:
                        adjustPositionToComp(2,1);
                        break;
                    case botLeftBtn:
                        adjustPositionToComp(0,2);
                        break;   
                    case botMidBtn:
                        adjustPositionToComp(1,2);
                        break;   
                    case botRightBtn:
                        adjustPositionToComp(2,2);
                        break;                  
                    default:
                        return;
                }
            }

        }

        topLeftBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        topMidBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        topRightBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        midLeftBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        midMidBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        midRightBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        botLeftBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        botMidBtn.addEventListener("click", function(p){rightClickBtn(p, this)})
        botRightBtn.addEventListener("click", function(p){rightClickBtn(p, this)})

        topLeftBtn.addEventListener("mouseover", infoFunction);
        topLeftBtn.addEventListener("mouseout", infoFunction);
        topMidBtn.addEventListener("mouseover", infoFunction);
        topMidBtn.addEventListener("mouseout", infoFunction);
        topRightBtn.addEventListener("mouseover", infoFunction);
        topRightBtn.addEventListener("mouseout", infoFunction);
        midLeftBtn.addEventListener("mouseover", infoFunction);
        midLeftBtn.addEventListener("mouseout", infoFunction);
        midMidBtn.addEventListener("mouseover", infoFunction);
        midMidBtn.addEventListener("mouseout", infoFunction);
        midRightBtn.addEventListener("mouseover", infoFunction);
        midRightBtn.addEventListener("mouseout", infoFunction);
        botLeftBtn.addEventListener("mouseover", infoFunction);
        botLeftBtn.addEventListener("mouseout", infoFunction);
        botMidBtn.addEventListener("mouseover", infoFunction);
        botMidBtn.addEventListener("mouseout", infoFunction);
        botRightBtn.addEventListener("mouseover", infoFunction);
        botRightBtn.addEventListener("mouseout", infoFunction);
        extrudeIT_Btn.addEventListener("mouseover", infoFunction);
        extrudeIT_Btn.addEventListener("mouseout", infoFunction);
        lockIT_Btn.addEventListener("mouseover", infoFunction);
        lockIT_Btn.addEventListener("mouseout", infoFunction);
        linkIT_Btn.addEventListener("mouseover", infoFunction);
        linkIT_Btn.addEventListener("mouseout", infoFunction);
        hover_Btn.addEventListener("mouseover", infoFunction);
        hover_Btn.addEventListener("mouseout", infoFunction);
        keyControl_Btn.addEventListener("mouseover", infoFunction);
        keyControl_Btn.addEventListener("mouseout", infoFunction);
        cut_Btn.addEventListener("mouseover", infoFunction);
        cut_Btn.addEventListener("mouseout", infoFunction);
        marker_Btn.addEventListener("mouseover", infoFunction);
        marker_Btn.addEventListener("mouseout", infoFunction);
        break_Btn.addEventListener("mouseover", infoFunction);
        break_Btn.addEventListener("mouseout", infoFunction);
        flip_Btn.addEventListener("mouseover", infoFunction);
        flip_Btn.addEventListener("mouseout", infoFunction);
        wiggle_Btn.addEventListener("mouseover", infoFunction);
        wiggle_Btn.addEventListener("mouseout", infoFunction);
        shred_Btn.addEventListener("mouseover", infoFunction);
        shred_Btn.addEventListener("mouseout", infoFunction);
        store_Ease_Btn.addEventListener("mouseover", infoFunction);
        store_Ease_Btn.addEventListener("mouseout", infoFunction);
        import_Ease_Btn.addEventListener("mouseover", infoFunction);
        import_Ease_Btn.addEventListener("mouseout", infoFunction);
        elastic_Btn.addEventListener("mouseover", infoFunction);
        elastic_Btn.addEventListener("mouseout", infoFunction);
        bounce_Btn.addEventListener("mouseover", infoFunction);
        bounce_Btn.addEventListener("mouseout", infoFunction);
        clone_Btn.addEventListener("mouseover", infoFunction);
        clone_Btn.addEventListener("mouseout", infoFunction);
        loopOut_Btn.addEventListener("mouseover", infoFunction);
        loopOut_Btn.addEventListener("mouseout", infoFunction);
        loopIn_Btn.addEventListener("mouseover", infoFunction);
        loopIn_Btn.addEventListener("mouseout", infoFunction);
        lineCap_Btn.addEventListener("mouseover", infoFunction);
        lineCap_Btn.addEventListener("mouseout", infoFunction);
        lineJoin_Btn.addEventListener("mouseover", infoFunction);
        lineJoin_Btn.addEventListener("mouseout", infoFunction);
        quick_Note_Btn.addEventListener("mouseover", infoFunction);
        quick_Note_Btn.addEventListener("mouseout", infoFunction);
        easeOutSlider.addEventListener("mouseover", infoFunction);
        easeOutSlider.addEventListener("mouseout", infoFunction);
        easeInSlider.addEventListener("mouseover", infoFunction);
        easeInSlider.addEventListener("mouseout", infoFunction);
        easeSlider.addEventListener("mouseover", infoFunction);
        easeSlider.addEventListener("mouseout", infoFunction);
        easeOutImage.addEventListener("mouseover", infoFunction);
        easeOutImage.addEventListener("mouseout", infoFunction);
        easeInImage.addEventListener("mouseover", infoFunction);
        easeInImage.addEventListener("mouseout", infoFunction);
        easeImage.addEventListener("mouseover", infoFunction);
        easeImage.addEventListener("mouseout", infoFunction);
        arrangeBtn.addEventListener("mouseover", infoFunction);
        arrangeBtn.addEventListener("mouseout", infoFunction);
        orderBtn.addEventListener("mouseover", infoFunction);
        orderBtn.addEventListener("mouseout", infoFunction);
        orderBtn.addEventListener("mousedown", infoFunction);
        sequenceBtn.addEventListener("mouseover", infoFunction);
        sequenceBtn.addEventListener("mouseout", infoFunction);
        sequenceBtn.addEventListener("mousedown", infoFunction);
        offsetV.addEventListener("mouseover", infoFunction);
        offsetV.addEventListener("mouseout", infoFunction);
        stepV.addEventListener("mouseover", infoFunction);
        stepV.addEventListener("mouseout", infoFunction);
        rename_Btn.addEventListener("mouseover", infoFunction);
        rename_Btn.addEventListener("mouseout", infoFunction);
        serialize_Btn.addEventListener("mouseover", infoFunction);
        serialize_Btn.addEventListener("mouseout", infoFunction);
        serialize_Btn.addEventListener("mousedown", infoFunction);
        doRename_Btn.addEventListener("mouseover", infoFunction);
        doRename_Btn.addEventListener("mouseout", infoFunction);
        doRename_Btn.addEventListener("mousedown", infoFunction);
        bounce_Btn.addEventListener("mouseover", infoFunction);
        bounce_Btn.addEventListener("mouseout", infoFunction);
        elastic_Btn.addEventListener("mouseover", infoFunction);
        elastic_Btn.addEventListener("mouseout", infoFunction);
        line_Btn.addEventListener("mouseover", infoFunction);
        line_Btn.addEventListener("mouseout", infoFunction);
        addcolor_Btn.addEventListener("mouseover", infoFunction);
        addcolor_Btn.addEventListener("mouseout", infoFunction);
        loadColor_Btn.addEventListener("mouseover", infoFunction);
        loadColor_Btn.addEventListener("mouseout", infoFunction);
        updateColor_Btn.addEventListener("mouseover", infoFunction);
        updateColor_Btn.addEventListener("mouseout", infoFunction);
        reloadColorJSON_Btn.addEventListener("mouseover", infoFunction);
        reloadColorJSON_Btn.addEventListener("mouseout", infoFunction);
        hidecolor_Btn.addEventListener("mouseover", infoFunction);
        hidecolor_Btn.addEventListener("mouseout", infoFunction);
        selSimilar_Btn.addEventListener("mouseover", infoFunction);
        selSimilar_Btn.addEventListener("mouseout", infoFunction);
        addNullStrokeAlign_Btn.addEventListener("mouseover", infoFunction);
        addNullStrokeAlign_Btn.addEventListener("mouseout", infoFunction);
        useCodeColor_Btn.addEventListener("mouseover", infoFunction);
        useCodeColor_Btn.addEventListener("mouseout", infoFunction);
        swapColor_Btn.addEventListener("mouseover", infoFunction);
        swapColor_Btn.addEventListener("mouseout", infoFunction);
        screenshot_Btn.addEventListener("mouseover", infoFunction);
        screenshot_Btn.addEventListener("mouseout", infoFunction);
        faceIcon.addEventListener("mouseover", infoFunction);
        faceIcon.addEventListener("mouseout", infoFunction);
        instaIcon.addEventListener("mouseover", infoFunction);
        instaIcon.addEventListener("mouseout", infoFunction);
        youtubeIcon.addEventListener("mouseover", infoFunction);
        youtubeIcon.addEventListener("mouseout", infoFunction);
        envatoIcon.addEventListener("mouseover", infoFunction);
        envatoIcon.addEventListener("mouseout", infoFunction);


        var openUrlWeb = function (event) {

            switch (this) {

                case instaIcon:

                    openUrl_function('https://www.instagram.com/pro.motion.script/');

                    break;

                case faceIcon:

                    openUrl_function('https://www.facebook.com/PRO.Motion.Script');

                    break;

                case contactIcon:

                    openUrl_function('https://forms.gle/km7rXYZvMA1iQBDWA');

                    break;

                case youtubeIcon:

                    openUrl_function('https://www.youtube.com/channel/UCvugvK_jHPAlrdOTsSHJh1w');

                    break;
                    
                case envatoIcon:

                    openUrl_function('https://videohive.net/item/pro-motion/28168923');

                    break;
    

                default:

            }

        }

        //===================================================================

        //===================================================================

        quick_Note_Btn.helpTip = "Click : Open Quick Note window\nALT + Click : Add ALT Tab Code to Selected Properties / Excute Code\nCTRL + Click : Add CTRL Tab Code to Selected Properties / Excute Code\nSHIFT + Click : Add SHIFT Tab Code to Selected Properties / Excute Code";
        isExCode.helpTip = "Excute this code";
        screenshot_Btn.helpTip = "Click : Take Screenshot for Composition ( Adaptive Resolution )\nALT + Click : Take Screenshot for Composition ( FULL Resolution )\nCTRL + Click : Change Screenshots Folder\nSHIFT + Click : Open Screenshots Folder";
        scriptLauncher_Btn.helpTip = "Click :  Show / Hide Script Launcher";
        refreshScripts_Btn.helpTip = "Click : Refresh Script List";
        scriptsFolder_Btn.helpTip = "Click : Select AE's Scripts folder\nCTRL + Click : Delete Saved Folder & Clear List\nSHIFT + Click : Open Scripts Folder";
        easeOutImage.helpTip = "Click : Change Keyframe Outgoing Interpolation to LINEAR\nALT + Click : Change Keyframe Outgoing Interpolation to BEZIER\nCTRL + Click : Change Keyframe Outgoing Interpolation to HOLD";
        easeInImage.helpTip = "Click : Change Keyframe Incoming Interpolation to LINEAR\nALT + Click : Change Keyframe Incoming Interpolation to BEZIER\nCTRL + Click : Change Keyframe Incoming Interpolation to HOLD";
        easeImage.helpTip = "Click : Change Keyframe Interpolation to LINEAR\nALT + Click : Change Keyframe Interpolation to BEZIER\nCTRL + Click : Change Keyframe Interpolation to HOLD";
        easeOutSlider.helpTip = "Move : Change Ease Out of Selected Keyframes";
        easeInSlider.helpTip = "Move : Change Ease In of Selected Keyframes";
        easeSlider.helpTip = "Move : Change Ease Out/In of Selected Keyframes";
        easeOutAmount.helpTip = "Change : Change Ease Out of Selected Keyframes";
        easeInAmount.helpTip = "Change : Change Ease In of Selected Keyframes";
        easeAmount.helpTip = "Change : Change Ease Out/In of Selected Keyframes";
        store_Ease_Btn.helpTip = "Click : Copy Ease from Selected Keyframes\nCTRL + Click : Delete Copied Ease";
        import_Ease_Btn.helpTip = "Click : Paste Copied Ease to Selected Keyframes";
        stored_Ease_Txt.helpTip = "Numbers of Copied Keyframes Ease";
        topLeftBtn.helpTip = topMidBtn.helpTip = topRightBtn.helpTip = midLeftBtn.helpTip = midMidBtn.helpTip = midRightBtn.helpTip = botLeftBtn.helpTip = botMidBtn.helpTip = botRightBtn.helpTip = "Click : Change Anchor Point Position\nALT + Click : Change Anchor Point Position with Ignoring MASK\nCTRL + Click : Add Parent NULL to selected Layers\nRight Click : Adjust Position relative to the Composition";
        bounce_Btn.helpTip = "Click : Add Bounce Experssion To Selected Props with One Controller\nwith SHIFT : Put Controller for Each Property";
        elastic_Btn.helpTip = "Click : Add Elastic Experssion To Selected Props with One Controller\nALT + Click : Add Anticipation Experssion To Selected Props with One Controller\nwith SHIFT : Put Controller for Each Property";
        clone_Btn.helpTip = "Click : Clone Selected Keyframes\nALT + Click : Reversal Clone Selected Keyframes";
        lineCap_Btn.helpTip = "Click : Change Line Cap to Butt Cap\nALT + Click : Change Line Cap to Round Cap\nCTRL + Click : Change Line Cap to Projecting Cap";
        lineJoin_Btn.helpTip = "Click : Change Line Join to Miter Join\nALT + Click : Change Line Join to Round Join\nCTRL + Click : Change Line Join to Bevel Join";
        break_Btn.helpTip = "Click : Explode Shapes / DeCompose Comps / Break Text Layers to Words\nALT + Click : Break Text Layers to Letters\nCTRL + Click : Break Text Layers to Lines\nSHIFT + Click : FORCE DeCompose Selected Compositions (Can't Undo)";
        linkIT_Btn.helpTip = "Click : Create Controllers for Selected Properties\nALT + Click : Create Controllers with Separate Properties\nSHIFT + Click : Link Similar Properties from Other Layers to Selected One";
        lockIT_Btn.helpTip = "Click : Lock Selected Properties\nALT + Click : Un-Lock Selected Properties\nSHIFT + Click : Lock Selected Layers Position to Comp Center";
        extrudeIT_Btn.helpTip = "Click : Extrude Selected Layers\nALT + Click : Extrude Selected Layers with Accepts Lights\nCTRL + Click : Change Default Extrude Value";
        marker_Btn.helpTip = "Click : Create Marker to Control all Keyframes in property\nALT + Click : Create 2 Markers to Control Keyframes in property as 2 Parts";
        flip_Btn.helpTip = "Click : Flip Selected Layers Horizontally\nALT + Click : Flip Selected Layers Vertically\nCTRL + Click : Flip Selected Layers Horizontally & Vertically\nSHIFT + Click : Reverse Selected Layers Order";
        cut_Btn.helpTip = "Click : Trim Selected Layers to First & Latest Keyframes\nALT + Click : Trim Selected Layers Outpoint to Latest Keyframe\nCTRL + Click : Trim Selected Layers Inpoint to First Keyframe\nSHIFT + Click : Trim Comp to Layers [ + CTRL from Start , + ALT from End ]";
        hover_Btn.helpTip = "Click : Create Hover Controller to Selected Properties";
        keyControl_Btn.helpTip = "Click : Create Keyframes Controller to Selected Keyframes";
        wiggle_Btn.helpTip = "Click : Add Wiggle Controller to Selected Properties\nALT + Click : Add Loop Wiggle Controller to Selected Properties\nwith SHIFT : Put Controller for Each Property";
        shred_Btn.helpTip = "Click : Shredder Selected Media Layer Vertically\nALT + Click : Shredder Selected Media Layer Horizontally\nCTRL + Click : Change Default Shredder Value";
        arrangeBtn.helpTip = "Click : Arrange Selected Layers Inpoint to Playhead\nALT + Click : Arrange Selected Layers Inpoint to Beginning of the Comp\nCTRL + Click : Arrange Selected Layers Outpoint to Playhead\nSHIFT + Click : Arrange Selected Layers Outpoint to End the Comp";
        orderBtn.helpTip = "Click : Change Order for Sequence Layers";
        sequenceBtn.helpTip = "Click : Sequence Selected Layers Based on Order\nALT + Click : Reversal Sequence Selected Layers Based on Order";
        loopOut_Btn.helpTip = "Click : Add loopOut Cycle Expression to Selected Properties\nALT + Click : Add loopOut Pingpong Expression to Selected Properties\nCTRL + Click : Add loopOut Continue Expression to Selected Properties\nSHIFT + Click : Add loopOut Offset Expression to Selected Properties";
        loopIn_Btn.helpTip = "Click : Add loopIn Cycle Expression to Selected Properties\nALT + Click : Add loopIn Pingpong Expression to Selected Properties\nCTRL + Click : Add loopIn Continue Expression to Selected Properties\nSHIFT + Click : Add loopIn Offset Expression to Selected Properties";
        rename_Btn.helpTip = "Click : Show / Hide Rename Tool\nCTRL + Click : Reset Name and Serialize to Default";
        serialize_Btn.helpTip = "Click : Change Serialize Before / After Name";
        doRename_Btn.helpTip = "Click : Rename Selected Layer from Top to Bottom\nALT + Click : Rename Selected Layer from Bottom to Top";
        line_Btn.helpTip = "Click : Create Line Connect all Selected Layers\nALT + Click : Create One to Multi Line Connector\nSHIFT + Click : Create Multi to Multi Line Connector";
        addcolor_Btn.helpTip = "Click : Add Selected Colors / Colors in Selected Layers to Palette\nALT + Click : Create Color Palette in Project\nCTRL + Click : Change Default Color Box Value\nSHIFT + Click : Remove All Colors from Palette";
        swapColor_Btn.helpTip = "Click : Swap Fill & Stroke Colors for Selected Layers or Group";
        loadColor_Btn.helpTip = "Click : Load Colors from Project to Palette";
        updateColor_Btn.helpTip = "Click : Update / Create Color Palette in Project";
        reloadColorJSON_Btn.helpTip = "Click : Reload Saved Colors to Palette";
        hidecolor_Btn.helpTip = "Click : Show / Hide Colors Palette";
        selSimilar_Btn.helpTip = "Click : Select Similar Properties from Other Selected Properties";
        addNullStrokeAlign_Btn.helpTip = "Click : Add Null in Comp Center\nALT + Click : Shape Stroke Align [ Outer ]\nCTRL + Click : Shape Stroke Align [ Inner ]\nSHIFT + Click : Shape Stroke Align [ Center ]";
        useCodeColor_Btn.helpTip = "Click : Change Mode Change Color with code / without code";
        instaIcon.helpTip = "Click : Go to Instagram Page";
        faceIcon.helpTip = "Click : Go to Facebook Page";
        contactIcon.helpTip = "Click : Go to Contact Forms";
        youtubeIcon.helpTip = "Click : Go to Youtube Channel";
        envatoIcon.helpTip = "Click : Go to Envato Page";

        //===================================================================

        // UI Build End

        //Load Setting Start


        if (haveSetting("easeOutS")) {
            easeOutSlider.value = getSetting("easeOutS");
            easeOutAmount.text = parseInt(getSetting("easeOutS"));
        } else {
            easeOutSlider.value = 100;
            easeOutAmount.text = 100;
        }
        if (haveSetting("easeInS")) {
            easeInSlider.value = getSetting("easeInS");
            easeInAmount.text = parseInt(getSetting("easeInS"));
        } else {
            easeInSlider.value = 100;
            easeInAmount.text = 100;
        }
        if (haveSetting("easyEaseS")) {
            easeSlider.value = getSetting("easyEaseS");
            easeAmount.text = parseInt(getSetting("easyEaseS"));
        } else {
            easeSlider.value = 100;
            easeAmount.text = 100;
        }

        if (haveSetting("offsetValue")) {
            offsetV.text = parseInt(getSetting("offsetValue"));
        } else {
            offsetV.text = "10";
        }

        if (haveSetting("stepValue")) {
            stepV.text = parseInt(getSetting("stepValue"));
        } else {
            stepV.text = "1";
        }

        if (haveSetting("serializeType")) {

            if (getSetting("serializeType") == true) {

                serialize_Btn.toggle = true;
                serialize_Btn.icon = iconsFolder.toString() + "/serializeTypeIcon.png";

            } else {

                serialize_Btn.toggle = false;
                serialize_Btn.icon = iconsFolder.toString() + "/serializeIcon.png";

            }

        } else {
            serialize_Btn.toggle = false;
        }

        if (haveSetting("orderSeq")) {

            order = getSetting("orderSeq");

            if (order == 1) {
                orderBtn.icon = iconsFolder.toString() + "/orderBtnIIcon.png";
            } else if (order == 2) {
                orderBtn.icon = iconsFolder.toString() + "/orderBtnIcon.png";
            } else if (order == 3) {
                orderBtn.icon = iconsFolder.toString() + "/orderIcon.png";
            }

        } else {

            order = 1;
            orderBtn.icon = iconsFolder.toString() + "/orderBtnIIcon.png";

        }

        if (hasJSON("renameText")) {

            var renameObj = importJSON("renameText");

            rename_Txt.text = renameObj.baseName;
            serialize_Txt.text = renameObj.secName;

        } else {

            rename_Txt.text = "NAME";
            serialize_Txt.text = " - ";

        }

        if (haveSetting("hideColors")) {

            if (getSetting("hideColors") == 1) {

                colorPanel.visible = false;
                hidecolor_Btn.toggle = true;
                hidecolor_Btn.icon = iconsFolder.toString() + "/showColorIcon.png";

            } else {

                colorPanel.visible = true;
                hidecolor_Btn.toggle = false;
                hidecolor_Btn.icon = iconsFolder.toString() + "/hideColorIcon.png";

            }

        } else {
            hidecolor_Btn.toggle = false;
        }

        if (haveSetting("useCodeColor")) {

            if (getSetting("useCodeColor") == 1) {

                useCodeColor_Btn.toggle = true;
                useCodeColor_Btn.icon = iconsFolder.toString() + "/useCodeColorIcon.png";

            } else {

                useCodeColor_Btn.toggle = false;
                useCodeColor_Btn.icon = iconsFolder.toString() + "/notUseCodeColorIcon.png";

            }

        } else {
            useCodeColor_Btn.toggle = false;
            useCodeColor_Btn.icon = iconsFolder.toString() + "/notUseCodeColorIcon.png";
        }        

        var setGr = stored_Ease_Txt.graphics;
        if (hasJSON("StoredEase")) {

            try {

                stored_Ease_Txt.text = importJSON("StoredEase").length;
                setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, greenColor, 1);

            } catch (e) {

                deleteJSON("StoredEase");
                stored_Ease_Txt.text = 0;
                setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, redColor, 1);

            }

        } else {

            stored_Ease_Txt.text = 0;
            setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, redColor, 1);

        }

        if (hasJSON("ColorPalette")) {

            try {

                var colorsArr = importJSON("ColorPalette");

                for (var i = 0; i < colorsArr.length; i++) {

                    addColor_Function(colorsArr[i]);

                }

            } catch (e) {

            }

        }



        //Load Setting End

        // UI Build Clicks Start

        instaIcon.addEventListener("click", openUrlWeb); 
        faceIcon.addEventListener("click", openUrlWeb);
        contactIcon.addEventListener("click", openUrlWeb);
        youtubeIcon.addEventListener("click", openUrlWeb);
        envatoIcon.addEventListener("click", openUrlWeb);



        plugin_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isShift = keyState.shiftKey;

            var pluginsFolder = new Folder(getUserDataFolder() + "/plugins");
            if (!pluginsFolder.exists) {
                pluginsFolder.create();
            }
            
            if(isShift){
                pluginsFolder.execute();
                return;
            }


            if (plugin_Btn.toggle == false) {

                easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = false;
                plugin_Btn.toggle = true;

                about_Btn.enabled = quick_Note_Btn.enabled = scriptLauncher_Btn.enabled = false;

                var pluginsFiles = [];
                var pluginsPath = pluginsFolder.getFiles();

                for (var i = 0; i < pluginsPath.length; i++){
                    if (!(pluginsPath[i] instanceof Folder)){
                        pluginsFiles.push(pluginsPath[i])
                    }
                }
                
                plugintoAdd = []
                pluginPosition = 45;

                for (var i = 0; i < pluginsFiles.length; i++){
                    pluginsFiles[i].open("r");
                    var data = pluginsFiles[i].read();
                    pluginsFiles[i].close();
                    var pluginSize = data.split('\n')[0].replace("Height:","");
                    
                    pluginObj = {}
                    pluginObj.pos = pluginPosition;
                    pluginObj.size = parseInt(pluginSize);
                    pluginObj.data = data.toString();
                    plugintoAdd.push(pluginObj);

                    pluginPosition += (parseInt(pluginSize) + 5);

                }
                
                for (var i = 0; i < plugintoAdd.length; i++){
                    try{
                        addPlugintoScript(win, plugintoAdd[i].pos, plugintoAdd[i].size, plugintoAdd[i].data);
                    }catch(e){
                        alert(e);
                    }
                }

            } else {

                var childNum = win.children.length;
                for (var i = childNum - 1 ; i > 0 ; i--){
                    if(win.children[i].name == "plugin"){
                        win.remove(win.children[i]);
                    }
                }

                easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = true;
                plugin_Btn.toggle = false;
                about_Btn.enabled = quick_Note_Btn.enabled = scriptLauncher_Btn.enabled = true;

                colorPanel.visible = !hidecolor_Btn.toggle;
                
            }

            function addPlugintoScript(mainGroup, pluginPosition, pluginHeight, elements){
                var group = mainGroup.add ("panel",[7.5, pluginPosition, 207.5, pluginHeight + pluginPosition]);
                group.name = "plugin";
                var newEl = elements;

                while (newEl.search("[PLUGIN]") != -1) {
                    newEl = newEl.replace("[PLUGIN]", "group");
                }
                eval(newEl);
                return;
            }


        }

        scriptListSearchBar.addEventListener("keydown", function (k) {
            doPressedSearchBar(k, this)
        });
        
        scriptList.addEventListener("keydown", function (k) {
            doPressedScriptList(k, this)
        });

        function doPressedScriptList(key, control) {

            if(scriptList.items.length != 0){
                switch (key.keyName) {

                    case "Enter":
                        var haveSelItem = false;
                        for(var i = 0 ; i < scriptList.items.length ; i++){
                            if(scriptList.items[i].selected == true){
                                haveSelItem = true;
                                continue;
                            }
                        }

                        var baseFileScript = scriptList.items[0];

                        if(haveSelItem){
                            baseFileScript = scriptList.items[scriptList.selection.index];
                        }

                        var scriptFile = new File(baseFileScript.name.toString());

                        if (scriptFile.exists){

                            try {
                            
                                $.evalFile(scriptFile);
                            
                            } catch (e) {
                            
                                alert(e);
                            
                            }
                        
                        }else{
                        
                            alert("Error : Can't find the script :\n" + scriptFile.toString());
                        
                        }
                        break;
                        
                        default:
                }
            }
        }

        function doPressedSearchBar(key, control) {
            if(scriptList.items.length != 0){
                switch (key.keyName) {
                case "Up":
                 
                    var haveSelItem = false;
                    for(var i = 0 ; i < scriptList.items.length ; i++){
                        if(scriptList.items[i].selected == true){
                            haveSelItem = true;
                            continue;
                        }
                    }
                    if(haveSelItem){
                        var selItem = scriptList.selection.index;
                        if(selItem != 0){
                            scriptList.items[selItem].selected = false;
                            scriptList.items[selItem - 1].selected = true;
                        }

                    }else{
                        scriptList.items[scriptList.items.length - 1].selected = true;
                    }

                    break;
                case "Down":

                    var haveSelItem = false;
                    for(var i = 0 ; i < scriptList.items.length ; i++){
                        if(scriptList.items[i].selected == true){
                            haveSelItem = true;
                            continue;
                        }
                    }
                    if(haveSelItem){
                        var selItem = scriptList.selection.index;
                        if(selItem != scriptList.items.length-1){
                            scriptList.items[selItem].selected = false;
                            scriptList.items[selItem + 1].selected = true;
                        }

                    }else{
                        scriptList.items[0].selected = true;
                    }

                    break;
                case "Enter":
                 
                    var haveSelItem = false;
                    for(var i = 0 ; i < scriptList.items.length ; i++){
                        if(scriptList.items[i].selected == true){
                            haveSelItem = true;
                            continue;
                        }
                    }

                    var baseFileScript = scriptList.items[0];

                    if(haveSelItem){
                        baseFileScript = scriptList.items[scriptList.selection.index];
                    }

                    var scriptFile = new File(baseFileScript.name.toString());

                    if (scriptFile.exists){

                        try {
                        
                            $.evalFile(scriptFile);
                        
                        } catch (e) {
                        
                            alert(e);
                        
                        }
                    
                    }else{
                    
                        alert("Error : Can't find the script :\n" + scriptFile.toString());
                    
                    }
                    
                    break;
                    
                    default:
                    }
            }
        }

        scriptListSearchBar.onChanging = function (){

            if(hasJSON("ScriptsList")){
                var baseList = importJSON("ScriptsList");
                searchInScripts(baseList);
            }
 
        }

        scriptLauncher_Btn.onClick = function () {

            if (scriptLauncher_Btn.toggle == false) {

                easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = false;
                scriptLauncher_Btn.toggle = scriptLancherPanel.visible = true;

                plugin_Btn.enabled = about_Btn.enabled = quick_Note_Btn.enabled = false;
                
                if(hasJSON("scriptFolder")){
                    var scriptObj = importJSON("scriptFolder");
                    buildScriptsList(scriptObj.scriptFolder);
                }

                scriptListSearchBar.text = ''; 
                scriptListSearchBar.active = true;

            } else {

                easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = true;
                scriptLauncher_Btn.toggle = scriptLancherPanel.visible = false;
                plugin_Btn.enabled = about_Btn.enabled = quick_Note_Btn.enabled = true;

                scriptListSearchBar.text = ''; 
                scriptListSearchBar.active = false;

                colorPanel.visible = !hidecolor_Btn.toggle;

            }

        }

        radiobutton1.onClick = radiobutton2.onClick = radiobutton3.onClick = radiobutton4.onClick = function(){

            noteTitleTxt.text = noteTexts.name = this.name;

            var theTextis = ''

            switch (this.name) {
                case 'NOTE':
                    isExCode.enabled = isExCode.value = false;

                    if (hasJSON("Note")){
                        noteObj = importJSON("Note");
                        theTextis = noteObj.note;
                    }else{
                        theTextis = '';
                    }

                    colorNote.location = [7.5, 405]
                    colorNote.size = [47, 2.5]

                    break;
                case 'ALT':
                    isExCode.enabled = true;

                    if (hasJSON("AltNote")){
                        altObj = importJSON("AltNote");
                        isExCode.value = altObj.isCode;
                        theTextis = altObj.note;
                    }else{
                        isExCode.value = false;
                        theTextis = '';
                    }

                    colorNote.location = [58.5, 405]
                    colorNote.size = [47, 2.5]

                    break;
                case 'CTRL':
                    isExCode.enabled = true;
                    
                    if (hasJSON("CtrlNote")){
                        ctrlObj = importJSON("CtrlNote");
                        isExCode.value = ctrlObj.isCode;
                        theTextis = ctrlObj.note;
                    }else{
                        isExCode.value = false;
                        theTextis = '';
                    }

                    colorNote.location = [109.5, 405]
                    colorNote.size = [47, 2.5]

                    break;            
                case 'SHIFT':
                    isExCode.enabled = true;
                                        
                    if (hasJSON("ShiftNote")){
                        shiftObj = importJSON("ShiftNote");
                        isExCode.value = shiftObj.isCode;
                        theTextis = shiftObj.note;
                    }else{
                        isExCode.value = false;
                        theTextis = '';
                    }

                    colorNote.location = [160.5, 405]
                    colorNote.size = [47, 2.5]

                    break;  
                default:
                    var theTextis = '';
            }

            noteTexts.text = theTextis;
            
          
        }

        noteTexts.onChange = isExCode.onClick = function(){

            switch (noteTexts.name) {
                case 'NOTE':
                    var NoteObj = {}
                    NoteObj.isCode = false;
                    NoteObj.note = noteTexts.text;
                    storeJSON(NoteObj, "Note");
                    break;
                case 'ALT':
                    var altNoteObj = {}
                    altNoteObj.isCode = isExCode.value;
                    altNoteObj.note = noteTexts.text;
                    storeJSON(altNoteObj, "AltNote");
                    break;
                case 'CTRL':
                    var ctrlNoteObj = {}
                    ctrlNoteObj.isCode = isExCode.value;
                    ctrlNoteObj.note = noteTexts.text;
                    storeJSON(ctrlNoteObj, "CtrlNote");
                    break;            
                case 'SHIFT':
                    var shiftNoteObj = {}
                    shiftNoteObj.isCode = isExCode.value;
                    shiftNoteObj.note = noteTexts.text;
                    storeJSON(shiftNoteObj, "ShiftNote");
                    break;  
                default:

            }


        }

        refreshScripts_Btn.onClick = function (){

            if(hasJSON("scriptFolder")){
                var scriptObj = importJSON("scriptFolder");
                buildScriptsList(scriptObj.scriptFolder);
            }
            
            if(hasJSON("ScriptsList")){
                var baseList = importJSON("ScriptsList");
                searchInScripts(baseList);
            }


        }

        scriptList.onDoubleClick = function (){

            var keyState = ScriptUI.environment.keyboardState;
            var isShift = keyState.shiftKey;

            var scriptSelected = (scriptList.selection !== null);
		
		    if (scriptSelected)
		    {
              
		    	var scriptFile = new File(scriptList.selection.name.toString());

                if (isShift){

                    var scriptItemFolder = new Folder(scriptFile.toString().replace(scriptList.selection.toString(),''));
                    
                    if(scriptItemFolder.exists){
                        scriptItemFolder.execute();
                    }else{
                        alert("Error : Can't find this folder :\n" + scriptItemFolder.toString());
                    }
                    
                    return;
               
                }

                if (scriptFile.exists){

                    try {

                        $.evalFile(scriptFile);

                    } catch (e) {

                        alert(e);

                    }

                }else{

		    		alert("Error : Can't find the script :\n" + scriptFile.toString());

                }
            
		    }
        }

        scriptsFolder_Btn.onClick = function (){
            
            var keyState = ScriptUI.environment.keyboardState;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

            if(isCtrl){

                deleteJSON("scriptFolder");
                scriptList.removeAll();
                return;

            }

            if((hasJSON("scriptFolder")) && isShift){
              
                var scriptObj = importJSON("scriptFolder");
                var saveFolder = new Folder(scriptObj.scriptFolder);
                
                if(saveFolder.exists){
                    saveFolder.execute();
                }else{
                    alert("Error : Can't find this folder :\n" + saveFolder.toString());
                }

                return;
            }

            var scriptObj = {}
            scriptObj.scriptFolder = Folder.selectDialog("Locate AE's Scripts folder").toString();
           
            if (scriptObj.scriptFolder !== null)
            {
                deleteJSON("scriptFolder");
                storeJSON(scriptObj, "scriptFolder");
                buildScriptsList(scriptObj.scriptFolder);
            }
        }
        
        screenshot_Btn.onClick = function (){

            var keyState = ScriptUI.environment.keyboardState;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;
            var isAlt = keyState.altKey;

            if(isCtrl){
                
                var screenObj = {}
                screenObj.screenshotFolder = Folder.selectDialog('Select Screenshots Folder').toString();
                if (screenObj.screenshotFolder !== null){
                    deleteJSON("screenshotFolder");
                    storeJSON(screenObj,"screenshotFolder");
                }
                return;

            }

            if(hasJSON("screenshotFolder")){

                var screenObj = importJSON("screenshotFolder");

            }else{

                var screenObj = {}
                    screenObj.screenshotFolder = Folder.selectDialog('Select folder to save images').toString();
             
                storeJSON(screenObj,"screenshotFolder");

            }
            
            var saveFolder = new Folder(screenObj.screenshotFolder);
            
            if(!saveFolder.exists){
                saveFolder.create();
            }

            if(isShift){

                saveFolder.execute();
                return;

            }

            var compItem = selItems("comp");

            var filePngName = (compItem.name).toString().replace(/[\"\*\/\:\<\>\?\\\+\,\;\=\!\@\#\^\~\`\&\%]/g,'') || 'Snapshot';
            var compItemFrame = Math.floor(compItem.time/compItem.frameDuration);
            
            var i = 1;
            while((filePng=new File(screenObj.screenshotFolder + "/" + filePngName +' [F'+Array(5-String(compItemFrame).length).join(0)+compItemFrame+']('+(i++)+').png')).exists)
            continue;          

            if(isAlt){

                var savedCompRes = compItem.resolutionFactor;
                compItem.resolutionFactor = [1,1];
                
            }   
            
            compItem.saveFrameToPng(compItem.time, filePng);

            if(isAlt){
                
                compItem.resolutionFactor = savedCompRes;
                
            }   

        }

        swapColor_Btn.onClick = function (){

            var selGroup = selItems("prop",0);
            if(selGroup.length == 0 ){
                selGroup = selItems("layer");
            }

            if(selGroup === undefined){
                return;
            }

            app.beginUndoGroup("Swap Colors");

            for (var i = 0 ; i < selGroup.length; i ++){
                var fillValue;
                var strokeValue;

                if(selGroup[i] instanceof ShapeLayer){
                    scanPropGroupSwap(selGroup[i].property(2));

                    if(fillValue !== undefined && strokeValue !== undefined){
                        scanApplyPropGroupSwap(selGroup[i].property(2));
                        fillValue = undefined;
                        strokeValue = undefined;
                    }

                }else if(selGroup[i].propertyDepth >= 2){
                    scanPropGroupSwap(selGroup[i]);

                    if(fillValue !== undefined && strokeValue !== undefined){
                        scanApplyPropGroupSwap(selGroup[i]);
                        fillValue = undefined;
                        strokeValue = undefined;
                    }
                }
                
            }

            app.endUndoGroup();
            
            function scanApplyPropGroupSwap(propGroup) {
                var i, prop;
                 for (i = 1; i <= propGroup.numProperties; i++) {
                    
                    prop = propGroup.property(i);
                    
                        if (prop.propertyType === PropertyType.PROPERTY) {

                            if(prop.matchName === "ADBE Vector Stroke Color"){
                                prop.expression = '';
                                prop.setValue(fillValue);
                            }
                            if (prop.matchName === "ADBE Vector Fill Color") {
                                prop.expression = '';
                                prop.setValue(strokeValue);
                            }

                        } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                            scanApplyPropGroupSwap(prop);
                        }

                    }
            }

            function scanPropGroupSwap(propGroup) {
                var i, prop;
                 for (i = 1; i <= propGroup.numProperties; i++) {
                    
                    prop = propGroup.property(i);
                    
                        if(fillValue === undefined || strokeValue === undefined){
                            if (prop.propertyType === PropertyType.PROPERTY) {

                                if(prop.matchName === "ADBE Vector Stroke Color" && strokeValue === undefined ){
                                    strokeValue = prop.value;
                                }
                                if (prop.matchName === "ADBE Vector Fill Color" && fillValue === undefined) {
                                    fillValue = prop.value;
                                }

                            } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                                scanPropGroupSwap(prop);
                            }
                        }else{
                            return;
                        }
                    }
            }


        }
        
        useCodeColor_Btn.onClick = function (){
            if (useCodeColor_Btn.toggle) {

                useCodeColor_Btn.toggle = false;
                useCodeColor_Btn.icon = iconsFolder.toString() + "/notUseCodeColorIcon.png";
                infoText.text = "Link the color with palette";
                saveSetting("useCodeColor", 0);

            } else {

                useCodeColor_Btn.toggle = true;
                useCodeColor_Btn.icon = iconsFolder.toString() + "/useCodeColorIcon.png";
                infoText.text = "Change the property color";
                saveSetting("useCodeColor", 1);

            }

        }

        about_Btn.onClick = function () {

            if (about_Btn.toggle == false) {

                plugin_Btn.visible = scriptLauncher_Btn.visible = screenshot_Btn.visible =  scriptImage.visible = quick_Note_Btn.visible = easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = false;
                topPanel.size = [205, 397.5];
                about_Btn.icon = iconsFolder.toString() + "/backIcon.png";

                aboutGroup.visible = true;

                about_Btn.toggle = true;


            } else {

                plugin_Btn.visible = scriptLauncher_Btn.visible = screenshot_Btn.visible = scriptImage.visible = quick_Note_Btn.visible = easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = true;
                topPanel.size = [205, 35];

                aboutGroup.visible = false;

                about_Btn.icon = iconsFolder.toString() + "/aboutIcon.png";
                about_Btn.toggle = false;
                colorPanel.visible = !hidecolor_Btn.toggle;

            }

        }

        addNullStrokeAlign_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

            var curComp = selItems("comp", 0);
            if (curComp === undefined) {
                return;
            }
            var selLayers = selItems("layer", 0);

            if((isAlt && !isCtrl) || (!isAlt && isCtrl) || isShift){

                var shapeLayersArr = [];

                for (var j = 0; j < selLayers.length; j++) {
                    if(selLayers[j] instanceof ShapeLayer){
                        shapeLayersArr.push(selLayers[j]);
                    }
                }

                if(shapeLayersArr.length != 0 ){
                    
                    app.beginUndoGroup("add Custom Stroke");
                        
                        var lastCode;

                        if(isCtrl){
                            var lastCode = '/-2';
                        }else{
                            var lastCode = '/2';
                        }
                    
                        scanAllSelLayers(shapeLayersArr, lastCode);

                    app.endUndoGroup();
                
                }

                function scanAllSelLayers(layers, lastCode){

                    for (var y = 0; y < layers.length; y++) {
                          
                        scanPropGroupforStroke(layers[y], lastCode);
                      
                    }
                }

                function scanPropGroupforStroke(propGroup, code) {
                   
                    var i, prop;
                    
                    for (i = 1; i <= propGroup.numProperties; i++) {
                       
                        prop = propGroup.property(i);

                        if (prop.propertyType === PropertyType.PROPERTY) {
                            if(prop.matchName === "ADBE Vector Stroke Width"){
                                
                                var isThereOffset = false;
                                var parentGroup = prop.parentProperty.parentProperty;
                                
                                var propPathArr = getPropPath(prop);
                                var newPathArr = [];
                                
                                for(var r = 0 ; r < propPathArr.length - 1 ; r++){
                                    if(!(propPathArr[r].toString() == "Contents")){
                                        newPathArr.push(propPathArr[r]);
                                    }
                                }
                                
                                var expCode = "";

                                if(!isShift){
                                    var firstLetter =  prop.name.toLowerCase().slice(0, 1);
                                    expCode = 'content("' + newPathArr.toString().split(',').join('").content("') + '").' + firstLetter + prop.name.substring(1).replace(/\s+/,'') + code;
                                }
                                                                

                                for(var ofs = 1 ; ofs <= parentGroup.numProperties ; ofs++){
                                   
                                    if(parentGroup.property(ofs).matchName === "ADBE Vector Filter - Offset"){

                                        isThereOffset = true;

                                        parentGroup.property(ofs).property("ADBE Vector Offset Amount").expression = expCode;
                                        if(isShift){
                                            parentGroup.property(ofs).property("ADBE Vector Offset Amount").setValue(0);
                                        }

                                    }
                                }
                                
                                if(!isThereOffset){
                                    if(!isShift){
                                        var newOffset = prop.parentProperty.parentProperty.addProperty("ADBE Vector Filter - Offset");
                                        newOffset.property("ADBE Vector Offset Amount").expression = expCode;

                                        scanAllSelLayers(shapeLayersArr, code);
                                    }
                                }
                              
                            }

                        } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                            scanPropGroupforStroke(prop, code);
                        }
                    }
                }


                return;
            }

            app.beginUndoGroup("Add NULL");

            var newNull = curComp.layers.addNull();
            newNull.label = 9;
            newNull.property("ADBE Transform Group").property(1).setValue([50, 50]);

            for (var i = 0; i < selLayers.length; i++) {

                selLayers[i].parent = newNull;

            }

            app.endUndoGroup();

        }

        selSimilar_Btn.onClick = function () {

            var comp = app.project.activeItem;
            var layers = comp.selectedLayers;
            var selProps = comp.selectedProperties;

            app.beginUndoGroup("Selected Similar Properties");

            var newSelectedProps = getSimilarProps(selProps, layers);

            for (var i = 0; i < newSelectedProps.length; i++) {

                newSelectedProps[i].selected = true;

            }

            app.endUndoGroup();

        }

        addcolor_Btn.onClick = function () {

            //============================

            var keyState = ScriptUI.environment.keyboardState;// here i must edit

            if (keyState.ctrlKey || keyState.metaKey) {
                var num = 50;
                if (haveSetting("colorBoxS")) {
                    num = getSetting("colorBoxS");
                }
                userNum("Choose Size for Color Box", num, "colorBoxS", 50, 5);

                return;

            } else if (keyState.altKey) {

                app.beginUndoGroup("Add Colors Palette");

                addColorComp();

                app.endUndoGroup();

            } else if (keyState.shiftKey) {

                var childNum = colorPanel.children.length;
                for (var i = 0; i < childNum; i++) {
                    colorPanel.remove(colorPanel.children[0]);
                }
                saveColors();

                return;

            } else {

                var selProps = selItems("prop", 0, 1);
                var selLayers = selItems("layer", 0, 0);

                if ((selProps.length == 0) && (selLayers.length != 0)) {

                    for (var l = 0; l < selLayers.length; l++) {
                        if(selLayers[l] instanceof ShapeLayer){
                           scanPropGroupforColors(selLayers[l].property(2));
                        }
                    }

                    function scanPropGroupforColors(propGroup) {
                        var i, prop;
                         for (i = 1; i <= propGroup.numProperties; i++) {
                            
                             prop = propGroup.property(i);
                           
                                 if (prop.propertyType === PropertyType.PROPERTY) {
                                    if((prop.matchName === "ADBE Vector Stroke Color") || (prop.matchName === "ADBE Vector Fill Color")){
                                        if (!checkDuplicatedColor(prop.value)) {
                                            addColor_Function(prop.value);
                                        }
                                    }
                                 } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                                    scanPropGroupforColors(prop);
                                 }
                             }
                     }

                } else if(selProps.length != 0){
                    for (var ad = 0; ad < selProps.length; ad++) {
                        if (selProps[ad].value.length == 4) {
                            if (!checkDuplicatedColor(selProps[ad].value)) {
                                addColor_Function(selProps[ad].value);
                            }
                        }
                    }
                }
                
                saveColors();
        

            }

        }

        loadColor_Btn.onClick = function () {

            var isExist = checkForComp("Colors Palette");

            if (!(isExist == false)) {

                var colorsArr = [];

                var effectsIs = isExist.layer(1).property("ADBE Effect Parade");
                var effectsNum = effectsIs.numProperties - 1;

                for (var i = 1; i <= effectsNum; i++) {

                    colorsArr.push(effectsIs((i + 1)).property(1).value);

                }

                //=================================================

                var colorsNum = colorPanel.children.length;

                for (var f = 0; f < colorsNum; f++) {

                    colorPanel.remove(colorPanel.children[0]);

                }

                //=================================================

                for (var ad = 0; ad < colorsArr.length; ad++) {

                    addColor_Function(colorsArr[ad]);

                }

                saveColors();

            }

        }

        updateColor_Btn.onClick = function () {

            app.beginUndoGroup("Update Colors Palette");

            var isExist = checkForComp("Colors Palette");

            if (!(isExist == false)) {

                isExist.layer(1).remove();

            }

            addColorComp(true);

            app.endUndoGroup();

        }

        reloadColorJSON_Btn.onClick = function () {

            var colorsNum = colorPanel.children.length;

            for (var f = 0; f < colorsNum; f++) {

                colorPanel.remove(colorPanel.children[0]);

            }

            if (hasJSON("ColorPalette")) {

                try {

                    var colorsArr = importJSON("ColorPalette");

                    for (var i = 0; i < colorsArr.length; i++) {

                        addColor_Function(colorsArr[i]);

                    }

                } catch (e) {

                }

            }

        }

        hidecolor_Btn.onClick = function () {

            if (hidecolor_Btn.toggle) {

                colorPanel.visible = true;
                hidecolor_Btn.toggle = false;
                hidecolor_Btn.icon = iconsFolder.toString() + "/hideColorIcon.png";
                infoText.text = "Hide Colors Palette";
                saveSetting("hideColors", 0);

            } else {

                colorPanel.visible = false;
                hidecolor_Btn.toggle = true;
                hidecolor_Btn.icon = iconsFolder.toString() + "/showColorIcon.png";
                infoText.text = "Show Colors Palette";
                saveSetting("hideColors", 1);

            }

        }

        line_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isShift = keyState.shiftKey;

            var selLayers = selItems("layer");

            if (selLayers === undefined) {
                return;
            }

            if (selLayers.length < 2) {
                return alert("Please Select at Least ( 2 ) Layers");
            }

            var fIndx = selLayers[0].index;

            var eIndx = selLayers[selLayers.length - 1].index;

            if (fIndx < eIndx) {

                selLayers.reverse();

            }

            var alt = 1;

            if (isAlt) {
                alt = 2;
            } else if (isShift) {
                alt = 3;
            }


            app.beginUndoGroup("Create Line Connector");

            lineConnector(selLayers, alt)

            app.endUndoGroup();

        }

        doRename_Btn.onClick = function () {

            this.icon = iconsFolder.toString() + "/doRenameIcon.png";

            var keyState = ScriptUI.environment.keyboardState;

            var selLayers = selItems("layer");
            if (selLayers === undefined) {
                return;
            }

            var fIndx = selLayers[0].index;
            var eIndx = selLayers[selLayers.length - 1].index;

            if (fIndx > eIndx) {
                selLayers.reverse();
            }
            if (keyState.altKey) {
                selLayers.reverse();
            }

            app.beginUndoGroup("Rename Layers");

            var baseName = rename_Txt.text;
            var secName = serialize_Txt.text;
            var nameType = serialize_Btn.toggle;

            for (var i = 1; i <= selLayers.length; i++) {

                if (nameType) {

                    selLayers[(i - 1)].name = baseName + secName + i;

                } else {

                    selLayers[(i - 1)].name = i + secName + baseName;

                }

            }

            app.endUndoGroup();

        }

        serialize_Txt.onChange = rename_Txt.onChange = function () {

            var renameTextObj = {}

            renameTextObj.baseName = rename_Txt.text;
            renameTextObj.secName = serialize_Txt.text;

            storeJSON(renameTextObj, "renameText");

        }

        rename_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                deleteJSON("renameText");
                rename_Txt.text = "NAME";
                serialize_Txt.text = " - ";

                return;

            }


            if (this.toggle) {

                rename_Btn.icon = iconsFolder.toString() + "/renameIcon.png";

                offsetV.visible = true;
                stepV.visible = true;
                seqColor.visible = true;
                loopOut_Btn.visible = true;
                loopIn_Btn.visible = true;
                line_Btn.visible = true;
                selSimilar_Btn.visible = true;


                rename_Txt.visible = false;
                serialize_Txt.visible = false;
                serialize_Btn.visible = false;
                doRename_Btn.visible = false;

                this.toggle = false;
                infoText.text = "Show Rename Tool";

            } else {

                rename_Btn.icon = iconsFolder.toString() + "/rename_BtnIcon.png";

                offsetV.visible = false;
                stepV.visible = false;
                seqColor.visible = false;
                loopOut_Btn.visible = false;
                loopIn_Btn.visible = false;
                line_Btn.visible = false;
                selSimilar_Btn.visible = false;


                rename_Txt.visible = true;
                serialize_Txt.visible = true;
                serialize_Btn.visible = true;
                doRename_Btn.visible = true;

                this.toggle = true;
                infoText.text = "Hide Rename Tool";

            }

        }

        serialize_Btn.onClick = function () {

            if (this.toggle) {

                this.icon = iconsFolder.toString() + "/serializeIcon.png";

                this.toggle = false;

                saveSetting("serializeType", 0);

            } else {

                this.icon = iconsFolder.toString() + "/serializeTypeIcon.png";

                this.toggle = true;

                saveSetting("serializeType", 1);

            }

        }

        offsetV.onChange = function () {

            var num = parseInt(offsetV.text);

            if ((isNaN(num) === true)) {

                offsetV.text = "10";

            }

            saveSetting("offsetValue", offsetV.text);

        }

        stepV.onChange = function () {

            var num = parseInt(stepV.text);

            if ((isNaN(num) === true) || num <= 0) {
                stepV.text = "1";
            }

            saveSetting("stepValue", stepV.text);

        }

        sequenceBtn.onClick = function () {

            var selLayers = selItems("layer");
            if (selLayers === undefined) {
                return;
            }

            var curComp = app.project.activeItem;
            var compFrame = 1 / curComp.frameDuration;

            var offsetValue = parseInt(offsetV.text);
            var stepValue = Math.abs(parseInt(stepV.text));

            var selLayersIndx = new Array;

            app.beginUndoGroup("Arrange Layers");

            for (var i = 0; i < selLayers.length; i++) {
                selLayersIndx[i] = selLayers[i].index
            }
            var fIndx = selLayersIndx[0];
            var eIndx = selLayersIndx[selLayersIndx.length - 1];
            if (order == 1 && (fIndx > eIndx)) {
                selLayers.reverse();
            }
            if (order == 2 && (fIndx < eIndx)) {
                selLayers.reverse();
            }
            if (order == 3) {
                selLayers.shuffle();
            }


            if (keys("alt")) {
                offsetValue = -offsetValue;
            }

            for (var i = 0; i < selLayers.length; i++) {
                if (order == 3) {
                    arrangeLayerToTime(selLayers[i], curComp.time + (selLayers[i].inPoint - curComp.time) + ((getRndInteger(-offsetValue, offsetValue + 1) / offsetValue) * (offsetValue / compFrame)), 0);
                } else {
                    if (stepValue == 1) {
                        arrangeLayerToTime(selLayers[i], curComp.time + (selLayers[i].inPoint - curComp.time) + ((i) * (offsetValue / compFrame)), 0);
                    } else {
                        for (var j = 0; j < stepValue; j++) {
                            arrangeLayerToTime(selLayers[i + j], curComp.time + (selLayers[i + j].inPoint - curComp.time) + (((i) * (offsetValue / compFrame)) / stepValue), 0);
                        }
                        i = i + (stepValue - 1);
                    }
                }
            }

            app.endUndoGroup();
        }

        orderBtn.onClick = function () {
            if (order == 1) {
                order = 2;
                orderBtn.icon = iconsFolder.toString() + "/orderBtnIcon.png";
            } else if (order == 2) {
                order = 3;
                orderBtn.icon = iconsFolder.toString() + "/orderIcon.png";
            } else if (order == 3) {
                order = 1;
                orderBtn.icon = iconsFolder.toString() + "/orderBtnIIcon.png";
            }

            saveSetting("orderSeq", order);

        }

        arrangeBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

            var selLayers = selItems("layer");
            if (selLayers === undefined) {
                return;
            }

            app.beginUndoGroup("Arrange Layers");

            if (isAlt) {
                arrangeLayersToTime(selLayers, 0, 0);

            } else if (isCtrl) {
                var curComp = app.project.activeItem;
                arrangeLayersToTime(selLayers, curComp.time, 1);

            } else if (isShift) {
                var curComp = app.project.activeItem;
                arrangeLayersToTime(selLayers, curComp.duration, 1);

            } else {
                var selProps = selItems("prop", 0);
                var curComp = app.project.activeItem;

                if (selProps.length == 0) {
                    arrangeLayersToTime(selLayers, curComp.time, 0);
                } else {
                    arrangeKeysToTime(selProps, curComp.time);

                }
                app.endUndoGroup();
            }
        }

        shred_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (haveSetting("Shredder")) {
                var num = getSetting("Shredder");
            } else {
                var num = 10;
            }

            if (isCtrl) {
                userNum("Choose the default value for Shredder", num, "Shredder", 10, 2);
                return;
            }

            app.beginUndoGroup("Shredder");

            Shredder(num, isAlt);

            app.endUndoGroup();

        }

        wiggle_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isShift = keyState.shiftKey;

            var selProps = selItems("prop");
            if (selProps === undefined) {
                return;
            }
            var selLayers = selItems("layer", 0);

            if (isAlt) {
                app.beginUndoGroup("Add Loop Wiggle");
            } else {
                app.beginUndoGroup("Add Wiggle");
            }

            doSelectLayers(selLayers, false);

            selProps = getExpDrivenProps(selProps);

            for (var i = 0; i < selProps.length; i++) {



                var layer = getLayerFromProperty(selProps[i]);

                if (isAlt) {

                    if (isShift) {
                        var controlName = "Loop Wiggle: " + selProps[i].name;
                        var effName = putEFF(layer, loopWiggleFFX, controlName);
                    } else {
                        var controlName = "Loop Wiggle";

                        if (!isLayerHasEff(layer, controlName)) {
                            var effName = putEFF(layer, loopWiggleFFX, controlName);


                        }

                    }

                    var expCode = expressionCode("wiggle", 1);
                    var baseCode = 'freq = effect("' + controlName + '")(1);\namp = effect("' + controlName + '")(2);\n\nif(effect("' + controlName + '")(5) == 1){\nloopTime = thisComp.duration;\n}else{\nloopTime = effect("' + controlName + '")(4);\n}\n';

                } else {

                    if (isShift) {
                        var controlName = "Wiggle: " + selProps[i].name;
                        var effName = putEFF(layer, wiggleFFX, controlName);
                    } else {
                        var controlName = "Wiggle";

                        if (!isLayerHasEff(layer, controlName)) {
                            var effName = putEFF(layer, wiggleFFX, controlName);

                        }

                    }

                    var expCode = expressionCode("wiggle");
                    var baseCode = 'freq = effect("' + controlName + '")(1);\namp = effect("' + controlName + '")(2);\n';

                }
                layer.selected = false;

                selProps[i].expression = baseCode + expCode;

            }

            app.endUndoGroup();


        }

        keyControl_Btn.onClick = function () {

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }

            app.beginUndoGroup("Add Keyframes Controller");

            for (var i = 0; i < selProps.length; i++) {

                if (selProps[i].numKeys == 2) {
                    if (selProps[i].expression == "") {

                        var layer = getLayerFromProperty(selProps[i]);

                        if (selProps[i].value.length === 4) {

                            var newController = putEFF(layer, xyColorFFX, "KeyControl : " + selProps[i].name);
                            var baseCode = 'try {\n\n    var controllerID = effect("' + newController.name + '");\n';
                            exType = 4;

                        } else {

                            if (selProps[i].propertyValueType == PropertyValueType.OneD) {

                                var newController = putEFF(layer, xyFFX, "KeyControl : " + selProps[i].name);
                                var baseCode = 'try {\n\n    firstValue = effect("' + newController.name + '")(1);\n    secValue = effect("' + newController.name + '")(2);\n';
                                exType = 1;

                            } else if (selProps[i].propertyValueType == PropertyValueType.TwoD || selProps[i].propertyValueType == PropertyValueType.TwoD_SPATIAL) {


                                var newController = putEFF(layer, xyiiFFX, "KeyControl : " + selProps[i].name);
                                var baseCode = 'try {\n\n\n    nxV1 = effect("' + newController.name + '")(1)[0];\n    nxV2 = effect("' + newController.name + '")(1)[1];\n    nyV1 = effect("' + newController.name + '")(2)[0];\n    nyV2 = effect("' + newController.name + '")(2)[1];\n';
                                exType = 2;

                            } else {

                                var newController = putEFF(layer, xyiiiFFX, "KeyControl : " + selProps[i].name);
                                var baseCode = 'try {\n\n    nxV1 = effect("' + newController.name + '")(1)[0];\n    nxV2 = effect("' + newController.name + '")(1)[1];\n    nyV1 = effect("' + newController.name + '")(2)[0];\n    nyV2 = effect("' + newController.name + '")(2)[1];\n\n    try {\n        nxV3 = effect("' + newController.name + '")(1)[2];\n        nyV3 = effect("' + newController.name + '")(2)[2];\n';
                                exType = 3;

                            }
                        }

                        newController.property(1).setValue(selProps[i].keyValue(1));
                        newController.property(2).setValue(selProps[i].keyValue(2));
                        var expCode = expressionCode("control", exType);
                        selProps[i].expression = baseCode + expCode;

                    }
                } else {
                    alert(selProps[i].name + " : Has ( " + selProps[i].numKeys + " ) Keyframes.\nPlease Select Property that have ( 2 ) Keyframes to Control IT.");
                }
            }

            app.endUndoGroup();

        }

        marker_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }

            app.beginUndoGroup("Add Marker Code");

            var layerArr = [];
            var markerArr = [];

            for (var i = 0; i < selProps.length; i++) {

                var keyNum = selProps[i].selectedKeys;

                if (!(keyNum[0] == 1)) {
                    alert("Please Select from The First Keyframe");
                    return;
                }

                if (isAlt) {

                    if (selProps[i].numKeys >= 4) {

                        if (((selProps[i].numKeys - selProps[i].selectedKeys.length) >= 2)) {

                            layerArr.push(getLayerFromProperty(selProps[i]));
                            markerArr.push(selProps[i].keyTime(1));
                            markerArr.push(selProps[i].keyTime(selProps[i].selectedKeys.length + 1));
                            var expCode = expressionCode("marker", selProps[i].selectedKeys.length, 2);
                            selProps[i].expression = expCode;

                        } else {

                            alert("Please Leave at least 2 Keyframes in " + selProps[i].name + " Property");

                        }

                    } else {

                        alert("Please Select Property that have at least 4 Keyframes\n" + selProps[i].name + " : Has Only ( " + selProps[i].numKeys + " ) Keyframes");

                    }

                } else {

                    layerArr.push(getLayerFromProperty(selProps[i]));
                    markerArr.push(selProps[i].keyTime(1));

                    var expCode = expressionCode("marker", selProps[i].selectedKeys.length, 1);
                    selProps[i].expression = expCode;

                }

            }

            layerArr = getUniqueArray(layerArr);

            for (var m = 0; m < layerArr.length; m++) {

                var layerMarkers = layerArr[m].property("Marker").numKeys;

                if (layerMarkers != 0) {

                    for (var d = 0; d < layerMarkers; d++) {

                        layerArr[m].property("Marker").removeKey((m + 1));

                    }

                }

                var firstMarker = new MarkerValue("Start");
                var firstMarkerTime = Math.min.apply(null, markerArr);
                layerArr[m].property("Marker").setValueAtTime(firstMarkerTime, firstMarker);

                if (isAlt) {

                    var endMarker = new MarkerValue("End");
                    var endMarkerTime = Math.max.apply(null, markerArr);
                    layerArr[m].property("Marker").setValueAtTime(endMarkerTime, endMarker);

                }

            }

            app.endUndoGroup();

            return;

        }

        hover_Btn.onClick = function () {

            var selProps = selItems("prop");
            if (selProps === undefined) {
                return;
            }
            var selLayers = selItems("layer", 0)

            app.beginUndoGroup("Add Hover");

            var comp = app.project.activeItem;
            var nullName = checkLayerName(comp.layers, "Hover Controller");


            var isOne = false;
            var isTwo = false;
            var isThree = false;
            var isFour = false;

            var newNull = comp.layers.addNull();
            newNull.guideLayer = true;
            newNull.name = nullName;
            newNull.label = 11;

            for (var i = 0; i < selProps.length; i++) {

                var valProp = selProps[i].value;
                var expType = valProp.length;
                var layerProp = getLayerFromProperty(selProps[i]);

                if (!layerProp.threeDLayer && expType === 3) {
                    expType = 2;
                }

                if (expType === undefined) {
                    expType = 1;
                }


                if (expType == 1) {
                    isOne = true;
                }
                if (expType == 2) {
                    isTwo = true;
                }
                if (expType == 3) {
                    isThree = true;
                }
                if (expType == 4) {
                    isFour = true;
                }


                var expCode = expressionCode("hover", nullName, expType);

                if (selProps[i].canSetExpression) {
                    selProps[i].expression = expCode;
                }

            }

            doSelectLayers(selLayers, false);
           
            if (isOne) {
                putEFF(newNull, xHoverFFX);
            }
            if (isTwo) {
                putEFF(newNull, xyHoverFFX);
            }
            if (isThree) {
                putEFF(newNull, xyzHoverFFX);
            }
            if (isFour) {
                putEFF(newNull, colorHoverFFX);
            }
          
            doSelectLayers(selLayers, true);
            
            // fix hover not work

            effectIs = newNull.property("ADBE Effect Parade");
            var effectsNum = effectIs.numProperties;

            for (var i = 1; i <= effectsNum; i++) {

                effectIs.property(i).property(7).setValue(1);
            }

            // fix hover not work

            app.endUndoGroup();

            function checkLayerName(layers, name) {

                var hasName = 0;
                var fixName = "";

                for (var i = 1; i <= layers.length; i++) {
                    var thereName = false;
                    for (var h = 1; h <= layers.length; h++) {
                        if (layers[h].name == name + fixName) {
                            thereName = true;
                        }
                    }

                    if (thereName) {
                        hasName++
                        if (!(hasName === 0)) {
                            fixName = " [" + hasName + "]";
                        }
                    }
                }

                return name + fixName;
            }

        }

        extrudeIT_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isAlt = keyState.altKey;

            if (haveSetting("extrude")) {
                var extrudeValue = getSetting("extrude");
            } else {
                var extrudeValue = 15;
            }

            if (isCtrl) {

                userNum("Choose the default value for Extrude 3D", extrudeValue, "extrude", 15, 2);
                return;

            }

            extrude(extrudeValue, isAlt);


        }

        lockIT_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isShift = keyState.shiftKey;


            if (isAlt) {

                var selProps = selItems("prop", 1, 1);
                if (selProps === undefined) {
                    return;
                }

                try {
                    app.beginUndoGroup("UnLock IT");

                    for (var i = 0; i < selProps.length; i++) {

                        var e = selProps[i].expression.toString();
                        if (e.search("//LOCK IT") == 0) {
                            e = e.replace("//LOCK IT", "").replace(";", "").replace("[", "").replace("]", "").split(",");



                            selProps[i].expression = "";

                            if (selProps[i].numKeys == 0) {
                                var xV = parseFloat(e[0]);
                                var yV = parseFloat(e[1]);
                                var zV = parseFloat(e[2]);

                                if (selProps[i].value.length == 4) {
                                    var aV = parseFloat(e[3]);
                                    selProps[i].setValue([xV, yV, zV, aV]);
                                } else if (selProps[i].value.length == 3 || (selProps[i].propertyValueType == PropertyValueType.ThreeD_SPATIAL || selProps[i].propertyValueType == 6414)) {
                                    selProps[i].setValue([xV, yV, zV]);
                                } else if (selProps[i].value.length == 2 || (selProps[i].propertyValueType == PropertyValueType.TwoD_SPATIAL)) {
                                    selProps[i].setValue([xV, yV]);
                                } else {
                                    selProps[i].setValue(xV);
                                }
                            }
                        }


                    }
                } catch (err) {

                    alert(err);
                }

            } else if (isShift) {

                var selLayers = selItems("layer");
                if (selLayers === undefined) {
                    return;
                }

                app.beginUndoGroup("Lock Layers to Comp Center");

                var layers = selLayers;

                var expCode = expressionCode("lockPos");

                for (var i = 0; i < layers.length; i++) {

                    var endCode = "[xValue,yValue]"

                    if (layers[i].threeDLayer) {
                        endCode = "[xValue,yValue,value[2]]"
                    }

                    layers[i].property("ADBE Transform Group").property("ADBE Position").expression = expCode + endCode;

                }

            } else {

                var selProps = selItems("prop", 1, 1);
                if (selProps === undefined) {
                    return;
                }

                app.beginUndoGroup("Lock IT");

                for (var i = 0; i < selProps.length; i++) {
                    //  if (selProps[i].canSetExpression) {
                    if (selProps[i].expression == "") {
                        var expCode = "//LOCK IT\n[" + selProps[i].value.toString() + "];";
                        selProps[i].expression = expCode;
                    }
                    //}

                }
            }
            app.endUndoGroup();

        }

        linkIT_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isShift = keyState.shiftKey;

            if (isShift) {

                var selProps = selItems("prop", 1, 1);

                if (selProps === undefined) {
                    return;
                }

                var selLayers = selItems("layer", 0);

                if (selLayers.length == 1) {
                    return alert("Please Select at Least ( 2 ) Layers");
                }

                app.beginUndoGroup("Link Similar Properties to One");

                for (var p = 0; p < selProps.length; p++) {

                    var expCode = 'thisComp.layer("' + getLayerFromProperty(selProps[p]).name + '")' + getPropExpCode(selProps[p]);

                    var newSelectedProps = getExpDrivenProps(getSimilarProps([selProps[p]], selLayers));

                    for (var i = 0; i < newSelectedProps.length; i++) {

                        if (!(newSelectedProps[i] == selProps[p])) {

                            newSelectedProps[i].expression = expCode;

                        }

                    }
                }

                app.endUndoGroup();

            } else {

                linkIT_function(isAlt);

            }

        }

        cut_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

                
            if (isShift) {
                
                var comp = app.project.activeItem;
                
                if (comp || (comp instanceof CompItem)) {
                    
                    app.beginUndoGroup("Trim Comp");

                    var inPointArr = [];
                    var outPointArr = [];
                    var layers = comp.layers;

                    for (var i = 1; i <= layers.length; i++) {
                        inPointArr.push(layers[i].inPoint);
                        outPointArr.push(layers[i].outPoint);
                    }

                    if (isAlt && !isCtrl) {
                        
                        comp.duration = Math.max.apply(Math, outPointArr);

                    }else if(isCtrl && !isAlt){

                        var minInPoint = Math.min.apply(Math, inPointArr);

                        for (var i = 1; i <= layers.length; i++) {
                            layers[i].startTime -= minInPoint;
                        }

                        comp.duration -= minInPoint;
                    
                    }else{

                        var minInPoint = Math.min.apply(Math, inPointArr);

                        for (var i = 1; i <= layers.length; i++) {
                            layers[i].startTime -= minInPoint;
                        }

                        comp.duration = Math.max.apply(Math, outPointArr) - minInPoint;
                    
                    }

                    app.endUndoGroup();
                
                }

                return;

            }

            var selLayers = selItems("layer",0);

            if (selLayers === undefined) {

                return;
            }

            var comp = app.project.activeItem;

            app.beginUndoGroup("Trim Layers");

            for (var i = 0; i < selLayers.length; i++) {
                var animatedProp = [];
                scanPropGroupProperties(selLayers[i]);

                var firstKeys = [];
                var endKeys = [];

                for (var j = 0; j < animatedProp.length; j++) {
                    firstKeys.push(animatedProp[j].keyTime(1));
                    endKeys.push(animatedProp[j].keyTime(animatedProp[j].numKeys));
                }

                if ((firstKeys.length >> 0) && (endKeys.length >> 0)) {

                    if (isAlt) {

                        selLayers[i].outPoint = Math.max.apply(Math, endKeys) + comp.frameDuration;

                    } else if (isCtrl) {
                        var fixOut = selLayers[i].outPoint;
                        selLayers[i].inPoint = Math.min.apply(Math, firstKeys);
                        selLayers[i].outPoint = fixOut;

                    } else {

                        selLayers[i].inPoint = Math.min.apply(Math, firstKeys);
                        selLayers[i].outPoint = Math.max.apply(Math, endKeys) + comp.frameDuration;

                    }
                }

            }


            function scanPropGroupProperties(propGroup) {
                var i, prop;
                for (i = 1; i <= propGroup.numProperties; i++) {
                    prop = propGroup.property(i);
                    if (prop.propertyType === PropertyType.PROPERTY) {
                        if (prop.numKeys >> 0) {
                            animatedProp.push(prop);
                        }
                    } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                        scanPropGroupProperties(prop);
                    }
                }

            }

            app.endUndoGroup();

        }

        flip_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var selLayers = selItems("layer");
            if (selLayers === undefined) {
                return;
            }

            if (keyState.shiftKey) {
                flipLayers(selLayers);
                return;
            }

            if (keyState.altKey) {
                app.beginUndoGroup("Flip Vertical");
                for (var i = 0; i < selLayers.length; i++) {
                    var sclprop = selLayers[i].property("scale");
                    if (sclprop.numKeys == 0) {
                        var sclValue = sclprop.value;
                        selLayers[i].property("scale").setValue([sclValue[0], -sclValue[1]]);
                    } else {
                        for (var j = 0; j < sclprop.numKeys; j++) {
                            var keyV = sclprop.keyValue(j + 1);
                            sclprop.setValueAtKey(j + 1, [keyV[0], -keyV[1]]);
                        }
                    }
                }

            } else if (keyState.ctrlKey || keyState.metaKey) {
                app.beginUndoGroup("Flip Horizontal & Vertical");
                for (var i = 0; i < selLayers.length; i++) {
                    var sclprop = selLayers[i].property("scale");
                    if (sclprop.numKeys == 0) {
                        var sclValue = sclprop.value;
                        selLayers[i].property("scale").setValue([-sclValue[0], -sclValue[1]]);
                    } else {
                        for (var j = 0; j < sclprop.numKeys; j++) {
                            var keyV = sclprop.keyValue(j + 1);
                            sclprop.setValueAtKey(j + 1, [-keyV[0], -keyV[1]]);
                        }
                    }
                }

            } else {
                app.beginUndoGroup("Flip Horizontal");
                for (var i = 0; i < selLayers.length; i++) {
                    var sclprop = selLayers[i].property("scale");
                    if (sclprop.numKeys == 0) {
                        var sclValue = sclprop.value;
                        selLayers[i].property("scale").setValue([-sclValue[0], sclValue[1]]);
                    } else {
                        for (var j = 0; j < sclprop.numKeys; j++) {
                            var keyV = sclprop.keyValue(j + 1);
                            sclprop.setValueAtKey(j + 1, [-keyV[0], keyV[1]]);
                        }
                    }
                }
            }
            app.endUndoGroup();

        }

        break_Btn.onClick = function () {
            
            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

            var selLayers = selItems("layer");
            if (selLayers === undefined) {
                return;
            }
            
            if(isShift){
                var comp = app.project.activeItem;
                var selLayers = comp.selectedLayers;

                if(AEVer >= 14.0){
                    for (var i = 0; i < selLayers.length; i++) {
                        deCompose_Composition_function(comp, selLayers[i]);
                    }
                }

                return;
            }

            var selProps = getOnlyShapeGroups(selItems("prop", 0));

            if (selProps.length > 0) {

                app.beginUndoGroup("Explode Shape");

                var breakedLayerArr = [];
                var forDels = [];

                for (var i = 0; i < selProps.length; i++) {

                    var layerIs = getLayerFromProperty(selProps[i]);

                    breakedLayerArr.push(explodeProps(layerIs, selProps[i].propertyIndex));

                    if (isAlt) {

                        var delPropObj = {};

                        delPropObj.Is = selProps[i];
                        delPropObj.layer = getLayerFromProperty(selProps[i]);
                        delPropObj.index = selProps[i].propertyIndex;

                        forDels.push(delPropObj);

                    } else {

                        selProps[i].enabled = false;

                    }

                }

                if (isAlt && (forDels.length > 0)) {

                    for (var g = 0; g < forDels.length; g++) {

                        forDels[(forDels.length - g - 1)].layer.property(2).property(forDels[(forDels.length - g - 1)].index).remove();

                    }

                }

                doSelectLayers(breakedLayerArr, true);

                app.endUndoGroup();

                return;

            } else {

                app.beginUndoGroup("Break Text / Shape / Comp");
                
                var comp = app.project.activeItem;
                var breakedLayerArr = [];

                for (var i = 0; i < selLayers.length; i++) {
                    
                    doSelectLayers(app.project.activeItem.selectedLayers, false);

                    if (selLayers[i].property("sourceText") == null) {

                        if(selLayers[i] instanceof ShapeLayer){
                            
                            selLayers[i].selected = true;
    
                            breakedLayerArr.push(explode(selLayers[i]));

                        }else{

                            if(AEVer >= 14.0){
                                deCompose_Composition_function(comp, selLayers[i]);
                            }

                        }

                    } else {

                        selLayers[i].selected = true;

                        if (isAlt) {
                            breakedLayerArr.push(breakText(selLayers[i], 1)); //Letters
                        } else if (isCtrl) {
                            breakedLayerArr.push(breakText(selLayers[i], 0)); //Lines
                        } else {
                            breakedLayerArr.push(breakText(selLayers[i], 2)); //Words
                        }

                    }

                }

            }

            for (var s = 0; s < breakedLayerArr.length; s++) {

                doSelectLayers(breakedLayerArr[s], true);
            }

            app.endUndoGroup();

        }

        clone_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            if (keyState.altKey) {

                cloneKeyframes(2);

            } else {

                cloneKeyframes(0);

            }

        }

        loopIn_Btn.onClick = function () {

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }

            var keyState = ScriptUI.environment.keyboardState;

            app.beginUndoGroup("Add LoopOut");


            var expCode = "";

            if (keyState.altKey) {
                expCode = expressionCode("loop", 0, 1);
            } else if (keyState.ctrlKey || keyState.metaKey) {
                expCode = expressionCode("loop", 0, 3);
            } else if (keyState.shiftKey) {
                expCode = expressionCode("loop", 0, 2);
            } else {
                expCode = expressionCode("loop", 0);
            }


            for (var i = 0; i < selProps.length; i++) {
                if (selProps[i].canSetExpression) {
                    if (selProps[i].propertyValueType == PropertyValueType.SHAPE) {
                        selProps[i].expression = "try{\nvalueAtTime(time % key(numKeys).time);\n}catch(err){value;}";
                    } else {
                        selProps[i].expression = expCode;
                    }
                }
            }

            app.endUndoGroup();

        }

        loopOut_Btn.onClick = function () {

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }

            var keyState = ScriptUI.environment.keyboardState;

            app.beginUndoGroup("Add LoopOut");


            var expCode = "";

            if (keyState.altKey) {
                expCode = expressionCode("loop", 1, 1);
            } else if (keyState.ctrlKey || keyState.metaKey) {
                expCode = expressionCode("loop", 1, 3);
            } else if (keyState.shiftKey) {
                expCode = expressionCode("loop", 1, 2);
            } else {
                expCode = expressionCode("loop", 1);
            }


            for (var i = 0; i < selProps.length; i++) {
                if (selProps[i].canSetExpression) {
                    if (selProps[i].propertyValueType == PropertyValueType.SHAPE) {
                        selProps[i].expression = "try{\nvalueAtTime(time % key(numKeys).time);\n}catch(err){value;}";
                    } else {
                        selProps[i].expression = expCode;
                    }
                }
            }

            app.endUndoGroup();

        }

        lineCap_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            app.beginUndoGroup("Change Line Cap");

            if (keyState.altKey) {
                capButt(2, 1);
            } else if (keyState.ctrlKey || keyState.metaKey) {
                capButt(3, 1);
            } else {
                capButt(1, 1);
            }

            app.endUndoGroup();

        }

        lineJoin_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            app.beginUndoGroup("Change Line Join");

            if (keyState.altKey) {
                capButt(2, 2);
            } else if (keyState.ctrlKey || keyState.metaKey) {
                capButt(3, 2);
            } else {
                capButt(1, 2);
            }

            app.endUndoGroup();

        }

        elastic_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = !keyState.shiftKey;

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }
            var selLayers = selItems("layer", 0);
            doSelectLayers(selLayers, false);

            if (isAlt) {
                app.beginUndoGroup("Add Anticipation");
                addExpPre(selProps, 2, isShift);
            } else {
                app.beginUndoGroup("Add Elastic");
                addExpPre(selProps, 1, isShift);
            }

            app.endUndoGroup();

        }

        bounce_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isShift = !keyState.shiftKey;

            var selProps = selItems("prop", 1, 1);
            if (selProps === undefined) {
                return;
            }

            var selLayers = selItems("layer", 0);
            doSelectLayers(selLayers, false);

            app.beginUndoGroup("Add Bounce");
            addExpPre(selProps, 3, isShift);

            app.endUndoGroup();

        }

        store_Ease_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                if (hasJSON("StoredEase")) {

                    deleteJSON("StoredEase");

                }

                stored_Ease_Txt.text = 0;
                setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, redColor, 1);

                return;

            }

            var selProp = selItems("prop", 1, 1);
            if (selProp === undefined) {
                return;
            }

            var stored_Ease_Obj = [];

            for (var i = 0; i < selProp.length; i++) {
                for (var j = 0; j < selProp[i].selectedKeys.length; j++) {
                    stored_Ease_Obj.push(getKeyEaseObj(selProp[i], selProp[i].selectedKeys[j]));
                }
            }

            stored_Ease_Txt.text = stored_Ease_Obj.length;
            setGr.foregroundColor = setGr.newPen(setGr.PenType.SOLID_COLOR, greenColor, 1);

            storeJSON(stored_Ease_Obj, "StoredEase");

        }

        import_Ease_Btn.onClick = function () {


            var selProp = selItems("prop", 1, 1);
            if (selProp === undefined) {
                return;
            }

            var checknumkey = 0;
            for (var i = 0; i < selProp.length; i++) {

                if (selProp[i].canVaryOverTime == true) {
                    for (var k = 0; k < selProp[i].selectedKeys.length; k++) {

                        checknumkey++;
                    }
                }
            }

            var stored_Ease_Obj = importJSON("StoredEase");

            if (!(checknumkey % stored_Ease_Obj.length == 0)) {
                alert("Please select the same number of Copied Keys or its multiple.\nCopied Keys : " + stored_Ease_Obj.length + " \t Selected Keys : " + checknumkey, scriptName);
                return;
            }

            var a = 0;

            app.beginUndoGroup("Paste Ease");

            for (var i = 0; i < selProp.length; i++) {
                try {

                    for (var k = 0; k < selProp[i].selectedKeys.length; k++) {

                        applyKeyEaseObj(selProp[i], selProp[i].selectedKeys[k], stored_Ease_Obj[a]);

                        a++

                        if (a == stored_Ease_Obj.length) {
                            a = 0;
                        }
                    }

                } catch (err) {

                    alert(err);

                }
            }

            app.endUndoGroup();
        }

        quick_Note_Btn.onClick = function () {
            var keyState = ScriptUI.environment.keyboardState;

            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isShift = keyState.shiftKey;

            var noteType = '';

            if (isAlt) {
                noteType = 'AltNote';
                noteApplier(noteType);
            } else if (isCtrl) {
                noteType = 'CtrlNote';
                noteApplier(noteType);
            } else if (isShift) {
                noteType = 'ShiftNote';
                noteApplier(noteType);
            } else {

                
                if (quick_Note_Btn.toggle == false) {

                    plugin_Btn.visible = scriptLauncher_Btn.visible = screenshot_Btn.visible =  scriptImage.visible = about_Btn.visible = easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = colorPanel.visible = false;

                    quick_Note_Btn.icon = iconsFolder.toString() + "/backReverseIcon.png";
                    noteGroup.visible = quick_Note_Btn.toggle = noteTexts.visible = colorNote.visible = true;
                   
                    radiobutton1.value = true;
                    isExCode.enabled = isExCode.value = false;

                    if (hasJSON("Note")){
                        altObj = importJSON("Note");
                        noteTexts.text = altObj.note;
                    }else{
                        noteTexts.text = '';
                    }

                    noteTitleTxt.text = noteTexts.name = 'NOTE';

                    colorNote.location = [7.5, 405]
                    colorNote.size = [47, 2.5]

                } else {

                    plugin_Btn.visible = scriptLauncher_Btn.visible = screenshot_Btn.visible = scriptImage.visible = about_Btn.visible = easeSliders.visible = anchors.visible = firstPanel.visible = secPanel.visible = colorControl.visible = true;

                    quick_Note_Btn.icon = iconsFolder.toString() + "/quickNoteIcon.png";
                    noteGroup.visible = quick_Note_Btn.toggle = noteTexts.visible = colorNote.visible = false;
                    colorPanel.visible = !hidecolor_Btn.toggle;
                }

                return;

            }

            function noteApplier(type){

                if (hasJSON(type.toString())) {

                    var noteObj = importJSON(type.toString());
                    if (noteObj.isCode) {

                        try {
                            eval(noteObj.note.toString());
                        } catch (e) {
                            alert(e);
                        }

                        return;

                    }else{
                        var expCode = noteObj.note.toString();
                    }
                }

                var selProps = selItems("prop");
                if (selProps === undefined) {
                    return;
                }
    
                app.beginUndoGroup("Add Expression");
    
                setExpression(selProps, expCode);
    
                app.endUndoGroup();

            }

        }

        easeOutImage.onClick = function () {
            var keyState = ScriptUI.environment.keyboardState;

            if (keyState.altKey) {

                changeInterpolationType(undefined, true, 2, 2, false, true);

            } else if (keyState.ctrlKey || keyState.metaKey) {

                changeInterpolationType(undefined, true, 3, 3, false, true);

            } else {

                changeInterpolationType(undefined, true, 1, 1, false, true);

            }

        }

        easeInImage.onClick = function () {
            var keyState = ScriptUI.environment.keyboardState;

            if (keyState.altKey) {

                changeInterpolationType(undefined, true, 2, 2, true, false);

            } else if (keyState.ctrlKey || keyState.metaKey) {

                changeInterpolationType(undefined, true, 3, 3, true, false);

            } else {

                changeInterpolationType(undefined, true, 1, 1, true, false);

            }

        }

        easeImage.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            if (keyState.altKey) {

                changeInterpolationType(undefined, true, 2, 2, true, true);

            } else if (keyState.ctrlKey || keyState.metaKey) {

                changeInterpolationType(undefined, true, 3, 3, true, true);
                
            } else {
                
                changeInterpolationType(undefined, true, 1, 1, true, true);
                
            }
            
        }
        
        topLeftBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 0, 0);

            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(0, 0, true);
                } else {
                    moveAnchorPoint(0, 0, 0);
                }

            }

            app.endUndoGroup();

        }

        topMidBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 0.5, 0);

            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(1, 0, true);
                } else {
                    moveAnchorPoint(1, 0, 0);
                }

            }

            app.endUndoGroup();

        }

        topRightBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 1, 0);

            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(2, 0, true);
                } else {
                    moveAnchorPoint(2, 0, 0);
                }

            }

            app.endUndoGroup();

        }

        midLeftBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 0, 0.5);

            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(0, 1, true);
                } else {
                    moveAnchorPoint(0, 1, 0);
                }

            }

            app.endUndoGroup();

        }

        midMidBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null");

                addNullObj(0, 0.5, 0.5);

            } else {

                app.beginUndoGroup("Move AnchorPoint");

                if (isAlt) {
                    moveAnchorPoint(1, 1, true);
                } else {
                    moveAnchorPoint(1, 1, 0);
                }

            }

            app.endUndoGroup();

        }

        midRightBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 1, 0.5);


            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(2, 1, true);
                } else {
                    moveAnchorPoint(2, 1, 0);
                }

            }

            app.endUndoGroup();

        }

        botLeftBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 0, 1);


            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(0, 2, true);
                } else {
                    moveAnchorPoint(0, 2, 0);
                }

            }

            app.endUndoGroup();

        }

        botMidBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 0.5, 1);


            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(1, 2, true);
                } else {
                    moveAnchorPoint(1, 2, 0);
                }

            }

            app.endUndoGroup();

        }

        botRightBtn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;
            var isAlt = keyState.altKey;
            var isCtrl = keyState.ctrlKey || keyState.metaKey;

            if (isCtrl) {

                app.beginUndoGroup("Add Null")

                addNullObj(0, 1, 1);


            } else {

                app.beginUndoGroup("Move AnchorPoint")

                if (isAlt) {
                    moveAnchorPoint(2, 2, true);
                } else {
                    moveAnchorPoint(2, 2, 0);
                }

            }

            app.endUndoGroup();

        }

        easeOutSlider.onChanging = function () {
            easeOutAmount.text = fixMotionValue(easeOutSlider.value);

            if (keys("alt") && keys("ctrl")) {

                var selLayers = selItems("layer", 0);
                if (selLayers === undefined) {
                    return;
                }

                var curComp = app.project.activeItem;
                var compFrame = 1 / curComp.frameDuration;
                var offsetValue = (parseInt(easeOutAmount.text) / 10) * parseInt(offsetV.text);
                var stepValue = Math.abs(parseInt(stepV.text));
                var selLayersIndx = new Array;

                app.beginUndoGroup("Arrange Layers");

                for (var i = 0; i < selLayers.length; i++) {
                    selLayersIndx[i] = selLayers[i].index
                }
                var fIndx = selLayersIndx[0];
                var eIndx = selLayersIndx[selLayersIndx.length - 1];
                if (fIndx > eIndx) {
                    selLayers.reverse();
                }

                for (var i = 0; i < selLayers.length; i++) {
                    if (stepValue == 1) {
                        arrangeLayerToTime(selLayers[i], selLayers[0].inPoint + ((i) * (offsetValue / compFrame)), 0);
                    } else {
                        for (var j = 0; j < stepValue; j++) {
                            arrangeLayerToTime(selLayers[i + j], selLayers[0].inPoint + (((i) * (offsetValue / compFrame)) / stepValue), 0);
                        }
                        i = i + (stepValue - 1);
                    }
                }
            }

            app.endUndoGroup();
        }

        easeInSlider.onChanging = function () {
            easeInAmount.text = fixMotionValue(easeInSlider.value);

            if (keys("alt") && keys("ctrl")) {

                var selLayers = selItems("layer", 0);
                if (selLayers === undefined) {
                    return;
                }

                var curComp = app.project.activeItem;
                var compFrame = 1 / curComp.frameDuration;
                var offsetValue = (parseInt(easeInAmount.text) / 10) * parseInt(offsetV.text);
                var stepValue = Math.abs(parseInt(stepV.text));
                var selLayersIndx = new Array;

                app.beginUndoGroup("Arrange Layers");

                for (var i = 0; i < selLayers.length; i++) {
                    selLayersIndx[i] = selLayers[i].index
                }

                var fIndx = selLayersIndx[0];
                var eIndx = selLayersIndx[selLayersIndx.length - 1];
                if (fIndx < eIndx) {
                    selLayers.reverse();
                }

                for (var i = 0; i < selLayers.length; i++) {
                    if (stepValue == 1) {
                        arrangeLayerToTime(selLayers[i], selLayers[0].inPoint + ((i) * (offsetValue / compFrame)), 0);
                    } else {
                        for (var j = 0; j < stepValue; j++) {
                            arrangeLayerToTime(selLayers[i + j], selLayers[0].inPoint + (((i) * (offsetValue / compFrame)) / stepValue), 0);
                        }
                        i = i + (stepValue - 1);
                    }
                }
            }

            app.endUndoGroup();
        }

        easeSlider.onChanging = function () {
            easeAmount.text = fixMotionValue(easeSlider.value);

        }

        easeOutSlider.onChange = function () {

            saveSetting("easeOutS", easeOutSlider.value);

            if (easeOutSlider.value >= 1) {
                changeInterpolationType(easeOutSlider.value, false, undefined, undefined, false, true);
            } else {
                changeInterpolationType(undefined, true, 1, 1, false, true);
            }

        }

        easeInSlider.onChange = function () {

            saveSetting("easeInS", easeInSlider.value);

            if (easeInSlider.value >= 1) {
                changeInterpolationType(easeInSlider.value, false, undefined, undefined, true, false);
            } else {
                changeInterpolationType(undefined, true, 1, 1, true, false);
            }

        }

        easeSlider.onChange = function () {

            saveSetting("easyEaseS", easeSlider.value);

            if (easeSlider.value >= 1) {
                changeInterpolationType(easeSlider.value, false, undefined, undefined, true, true);
            } else {
                changeInterpolationType(undefined, true, 1, 1, true, true);
            }

        }

        easeOutAmount.onChange = function () {
            easeOutSlider.value = fixMotionValue(parseInt(easeOutAmount.text));
            easeOutAmount.text = easeOutSlider.value;

            if (easeOutSlider.value >= 1) {
                changeInterpolationType(easeOutSlider.value, false, undefined, undefined, false, true);
            } else {
                changeInterpolationType(undefined, true, 1, 1, false, true);
            }

            saveSetting("easeOutS", easeOutSlider.value);
        }

        easeInAmount.onChange = function () {
            easeInSlider.value = fixMotionValue(parseInt(easeInAmount.text));
            easeInAmount.text = easeInSlider.value;

            if (easeInSlider.value >= 1) {
                changeInterpolationType(easeInSlider.value, false, undefined, undefined, true, false);
            } else {
                changeInterpolationType(undefined, true, 1, 1, true, false);
            }

            saveSetting("easeInS", easeInSlider.value);
        }

        easeAmount.onChange = function () {
            easeSlider.value = fixMotionValue(parseInt(easeAmount.text));
            easeAmount.text = easeSlider.value;

            if (easeSlider.value >= 1) {
                changeInterpolationType(easeSlider.value, false, undefined, undefined, true, true);
            } else {
                changeInterpolationType(undefined, true, 1, 1, true, true);
            }

            saveSetting("easyEaseS", easeSlider.value);
        }

        easeOutAmount.addEventListener("keydown", function (k) {
            doPressed_key(k, this, 100, 0, 100)
        });
        easeInAmount.addEventListener("keydown", function (k) {
            doPressed_key(k, this, 100, 0, 100)
        });
        easeAmount.addEventListener("keydown", function (k) {
            doPressed_key(k, this, 100, 0, 100)
        });

        offsetV.addEventListener("keydown", function (k) {
            doPressed_key(k, this, 10, undefined, undefined)
        });
        stepV.addEventListener("keydown", function (k) {
            doPressed_key(k, this, 1, 1, undefined)
        });

        // UI Build Clicks End



        return win;

    }

    //  Functions Start

    function openUrl_function(url) {

        if (isArrHave($.os.split(/\s+/), "Windows")) {

            system.callSystem("cmd /c start \"q\" \"" + url + "\"");

        } else {

            var cmd = "open \"" + url + "\"";
            system.callSystem(cmd);

        }

    }

    function deCompose_Composition_function(comp, layer){

        try{
            if(!(layer instanceof ShapeLayer)){
                var layerSource = layer.source;
                if (layerSource.toString() === '[object CompItem]'){
                    var compIndex;
                    for (var i = 1; i <= app.project.items.length; i++) {
                        if(app.project.items[i].name === layerSource.name){
                            compIndex = i;
                            break;
                        }
                    }

                    var compedLayer = app.project.items[parseInt(compIndex)];
                    
                   

                    for (var i = 1; i <= compedLayer.layers.length; i++) {
                        compedLayer.layer(i).copyToComp(comp);
                    }
                        layer.enabled = false
                      

                }
            }
        }catch(e){
        }

        return;

    }

    function searchInScripts(listArr){

        scriptList.removeAll();

        var input = scriptListSearchBar.text;

        if(input != ''){

            for (i = 0; i < listArr.length; i++) {
                if (!(listArr[i].name.toLowerCase().search(input.toLowerCase()) == -1)) {
                    item = scriptList.add('item',listArr[i].name);
                    item.name = listArr[i].location;    
                }
            }

        }else{

            for (i = 0; i < listArr.length; i++) {
                item = scriptList.add('item',listArr[i].name);
                item.name = listArr[i].location;
            }
        }

    }

    function adjustPositionToComp(x,y){

        selLayers = selItems("layer",0);
        if(selLayers === undefined){
            return;
        }

        var xValue;
        var yValue;

        switch (x) {
            case 0:
                xValue = 0;
                break;
            case 1:
                xValue = app.project.activeItem.width/2;
                break;
            case 2:
                xValue = app.project.activeItem.width;
                break;                
            default:
                xValue = app.project.activeItem.width/2;
        }

        switch (y) {
            case 0:
                yValue = 0;
                break;
            case 1:
                yValue = app.project.activeItem.height/2;
                break;
            case 2:
                yValue = app.project.activeItem.height;
                break;                
            default:
                yValue = app.project.activeItem.height/2;
        }


        app.beginUndoGroup("Adjust Position");

        for ( var i = 0 ; i < selLayers.length ; i++ ){
            if (selLayers[i].position.dimensionsSeparated === false) {
                
                if(selLayers[i].position.isTimeVarying){
                    selLayers[i].position.setValueAtTime(app.project.activeItem.time, [xValue, yValue])
                }else{
                    selLayers[i].position.setValue([xValue, yValue])
                }

            }else{

                layerPosX = selLayers[i].property("ADBE Transform Group").property("ADBE Position_0");
                layerPosY = selLayers[i].property("ADBE Transform Group").property("ADBE Position_1");

                if(layerPosX.isTimeVarying){
                    layerPosX.setValueAtTime(app.project.activeItem.time, xValue);
                }else{
                    layerPosX.setValue(xValue);
                }
                  
                if(layerPosY.isTimeVarying){
                    layerPosY.setValueAtTime(app.project.activeItem.time, yValue);
                }else{
                    layerPosY.setValue(yValue);
                }

            }

        }

        app.endUndoGroup();

    }

    function buildScriptsList(scriptFolder){

        scriptList.removeAll();
        scriptFiles = rd_getAEScripts(scriptFolder);
        scriptFiles.sort(rd_sortByName);

        var scriptAsJSON = [];
        
        for (var i = 0; i < scriptFiles.length; i++){
            
            newListItem = scriptList.add("item", scriptFiles[i].displayName);
            newListItem.name = scriptFiles[i].fsName.toString();

            var thisScriptObj = {}

            thisScriptObj.name = newListItem.toString();
            thisScriptObj.location = newListItem.name;

            scriptAsJSON.push(thisScriptObj);
            
            
        }

        deleteJSON("ScriptsList");
        storeJSON(scriptAsJSON,"ScriptsList");
        
    }

	function rd_sortByName(a, b)
	{
		if (a.name.toLowerCase() < b.name.toLowerCase())
			return -1;
		else if (a.name.toLowerCase() > b.name.toLowerCase())
			return 1;
		else
			return 0;
	}

    function rd_getAEScripts(path)
    {
        path = new Folder(path.toString());
      
        var pathFiles = path.getFiles(), files = new Array(), subfiles;
        
        for (var i = 0; i < pathFiles.length; i++)
            if (!(pathFiles[i] instanceof Folder)){
                if (pathFiles[i].name.match(/\.(js|jsx|jsxbin)$/) && (pathFiles[i].fsName !== File($.fileName).fsName))
                    files[files.length] = pathFiles[i];
            }else{

				if (pathFiles[i].name.match(/^\(.*\)$/)){
					continue;
                }else{

					subfiles = rd_getAEScripts(pathFiles[i]);
					for (var j = 0; j < subfiles.length; j++)
						files[files.length] = subfiles[j];

				}

            }
        return files;
    }

    function getSimilarProps(props, layers) {

        var newSelProps = [];

        for (var p = 0; p < props.length; p++) {

            var propPath = getPropPath(props[p]);

            for (var i = 0; i < layers.length; i++) {

                try {

                    var newProp = layers[i];

                    for (var j = 0; j < propPath.length; j++) {

                        newProp = newProp.property(propPath[j]);

                    }

                    newSelProps.push(newProp);

                } catch (e) {

                }

            }
        }

        return newSelProps;

    }

    function getPropExpCode(myProp) {

        var allPath = "";

        while (myProp.parentProperty) {
            allPath = '("' + myProp.name + '")' + allPath;
            myProp = myProp.parentProperty;
        }

        return allPath;


    }

    function doPressed_key(key, control, def, min, max) {
        var step;
        key.shiftKey ? step = 10 : step = 1;
        switch (key.keyName) {
            case "Up":
                control.text = forceNum(parseInt(control.text) + step, def, min, max);
                break;
            case "Down":
                control.text = forceNum(parseInt(control.text) - step, def, min, max);
                break;

            default:
        }
    }

    function lineConnector(selLayers, type) { //type: 1 = line , 2 = one to all , 3 = all to all

        if (type === undefined) {

            type = 1;

        }

        if (type == 1) { //=============================================================================================================================

            var comp = app.project.activeItem;

            var lineLayer = comp.layers.addShape();
            lineLayer.moveAfter(selLayers[0]);

            var isClosedController = lineLayer.property("ADBE Effect Parade").addProperty("ADBE Checkbox Control");
            isClosedController.name = "Closed Path";
            isClosedController.property(1).setValue(false);

            var layersArr = [];

            for (var i = 0; i < selLayers.length; i++) {

                var layerControl = lineLayer.property("ADBE Effect Parade").addProperty("ADBE Layer Control");

                layerControl.name = selLayers[i].name;
                layerControl.property(1).setValue(selLayers[i].index);
                layersArr.push('"' + selLayers[i].name + '"');

            }

            lineLayer.name = "Line Connector";
            lineLayer.label = 9;
            var contentsGroup = lineLayer.property("Contents"); //BASE
            var baseLineGroup = contentsGroup.addProperty("ADBE Vector Group"); //Base Group
            baseLineGroup.name = "Line";

            var lineGroup = baseLineGroup.property("Contents").addProperty("ADBE Vector Group"); //Group01
            lineGroup.name = "Line - 01";

            var linePath = lineGroup.property("Contents").addProperty("ADBE Vector Shape - Group");
            var lineStroke = lineGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");

            lineGroup.property("Contents").property("Stroke 1").property("Stroke Width").setValue(10);
            var lineFill = lineGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
            lineFill.enabled = false;

            var baseCode = 'var nullLayerNames = [' + layersArr.toString() + '];';
            var expCode = expressionCode("line");
            var endCode = 'effect("Closed Path")(1));';

            lineGroup.property("Contents").property("Path 1").property("Path").expression = baseCode + expCode + endCode;

        } else if (type == 2) { //=============================================================================================================================

            var comp = app.project.activeItem;

            var lineLayer = comp.layers.addShape();
            lineLayer.moveAfter(selLayers[0]);

            var layersArr = [];

            for (var i = 0; i < selLayers.length; i++) {

                var layerControl = lineLayer.property("ADBE Effect Parade").addProperty("ADBE Layer Control");

                layerControl.name = selLayers[i].name;
                layerControl.property(1).setValue(selLayers[i].index);

                if (i != 0) {
                    layersArr.push('"' + selLayers[0].name + '"' + ',' + '"' + selLayers[i].name + '"');
                }

            }

            lineLayer.name = "Line Connector";
            lineLayer.label = 9;
            var contentsGroup = lineLayer.property("Contents"); //BASE
            var baseLineGroup = contentsGroup.addProperty("ADBE Vector Group"); //Base Group
            baseLineGroup.name = "Line";

            var lineGroup = baseLineGroup.property("Contents").addProperty("ADBE Vector Group"); //Group01
            lineGroup.name = "Line - 01";

            for (var j = 0; j < layersArr.length; j++) {

                var linePath = lineGroup.property("Contents").addProperty("ADBE Vector Shape - Group");

                var baseCode = 'var nullLayerNames = [' + layersArr[j].toString() + '];';
                var expCode = expressionCode("line");
                var endCode = 'origPath.isClosed());';

                lineGroup.property("Contents").property('Path ' + (j + 1)).property("Path").expression = baseCode + expCode + endCode;


            }

            var lineStroke = lineGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
            lineGroup.property("Contents").property("Stroke 1").property("Stroke Width").setValue(10);




        } else if (type == 3) { //=============================================================================================================================

            var comp = app.project.activeItem;

            var lineLayer = comp.layers.addShape();
            lineLayer.moveAfter(selLayers[0]);

            selLayers.reverse();

            var layersArr = [];

            for (var i = 0; i < selLayers.length; i++) {

                var layerControl = lineLayer.property("ADBE Effect Parade").addProperty("ADBE Layer Control");

                layerControl.name = selLayers[i].name;
                layerControl.property(1).setValue(selLayers[i].index);

                if (i != 0) {
                    layersArr.push('"' + selLayers[i].name + '"');
                }

            }

            lineLayer.name = "Line Connector";
            lineLayer.label = 9;
            var contentsGroup = lineLayer.property("Contents"); //BASE
            var baseLineGroup = contentsGroup.addProperty("ADBE Vector Group"); //Base Group
            baseLineGroup.name = "Line";

            var lineGroup = baseLineGroup.property("Contents").addProperty("ADBE Vector Group"); //Group01
            lineGroup.name = "Line - 01";


            var pathCount = 1;

            for (var h = 0; h < selLayers.length; h++) {

                for (var j = 0; j < selLayers.length - (h + 1); j++) {

                    var linePath = lineGroup.property("Contents").addProperty("ADBE Vector Shape - Group");

                    var baseCode = 'var nullLayerNames = ["' + selLayers[h].name + '","' + selLayers[(j + h + 1)].name + '"];';
                    var expCode = expressionCode("line");
                    var endCode = 'origPath.isClosed());';

                    lineGroup.property("Contents").property('Path ' + (pathCount)).property("Path").expression = baseCode + expCode + endCode;
                    pathCount++;

                }

            }

            var lineStroke = lineGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
            lineGroup.property("Contents").property("Stroke 1").property("Stroke Width").setValue(10);

        } //=============================================================================================================================

        var lockPosCode = expressionCode("lockPos");
        var lockPosEndCode = "[xValue,yValue]"
        lineLayer.property("ADBE Transform Group").property("ADBE Position").expression = lockPosCode + lockPosEndCode;

        return;

    }

    function createColorPalette(colorsArr, altUpdate) {

        if (altUpdate === undefined) {
            altUpdate = false;
        }

        var curComp = selItems("comp");
        if (curComp === undefined) {
            return;
        }

        var isExist = checkForComp("Colors Palette");

        if ((isExist == false) || altUpdate) {

            try {

                if ((altUpdate == false) || (isExist == false)) {

                    var newComp = app.project.items.addComp("Colors Palette", curComp.width, curComp.height, curComp.pixelAspect, curComp.duration, curComp.frameRate);

                } else {

                    var newComp = isExist;

                }

                var isFolderExist = checkInProject("Colors Palette Folder");

                if (isFolderExist == false) {

                    var compFolder = app.project.items.addFolder("Colors Palette Folder");

                } else {

                    var compFolder = isFolderExist;

                }


                newComp.parentFolder = compFolder;

                if (!(checkForLayer("Colors Palette", curComp))) {

                    var addedComp = curComp.layers.add(newComp);

                    addedComp.guideLayer = true;
                    addedComp.shy = true;
                    addedComp.selected = false;
                    addedComp.locked = true;

                }


            } catch (e) {

                alert(e);

            }


            var myColors = newComp.layers.addShape();
            myColors.name = "Color Palette";
            myColors.selected = false;
            myColors.label = 7;

            myColors.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0, 0]);
            myColors.property("ADBE Transform Group").property("ADBE Position").expression = "[0,0,0]";
            myColors.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "[0,0,0]";
            var contentsGroup = myColors.property("Contents");
            var colorGroup = contentsGroup.addProperty("ADBE Vector Group");
            colorGroup.name = "Colors";

            var boxSizeControl = myColors.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
            boxSizeControl.name = "Colors Size";
            boxSizeControl.property(1).setValue(100);
            myColors.property("ADBE Transform Group").property("ADBE Scale").expression = 'x = effect("Colors Size")(1);\n[x, x]';

            var boxSizeIs = 50;

            if (haveSetting("colorBoxS")) {
                boxSizeIs = getSetting("colorBoxS");
            }


            for (var i = 0; i < colorsArr.length; i++) {
                addColorBox('Color: ' + (i + 1), colorsArr[i], [(i * boxSizeIs) + (boxSizeIs / 2), boxSizeIs / 2], boxSizeIs);
            }

        } else {

            if (!(checkForLayer("Colors Palette", curComp))) {

                var newComp = isExist;

                var addedComp = curComp.layers.add(newComp);

                addedComp.guideLayer = true;
                addedComp.shy = true;
                addedComp.selected = false;
                addedComp.locked = true;

            }

        }

        return;

        function addColorBox(groupName, boxColor, boxPos, boxSize) {

            if (boxSize === undefined) {
                boxSize = 50;
            }
            var newColor = colorGroup.property("Contents").addProperty("ADBE Vector Group"); //group
            newColor.name = groupName;

            var newColor_Path = newColor.property("Contents").addProperty("ADBE Vector Shape - Rect");
            newColor_Path.property("ADBE Vector Rect Size").setValue([boxSize, boxSize]); //size
            newColor.property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue(boxPos); //Pos
            var newColor_Fill = newColor.property("Contents").addProperty("ADBE Vector Graphic - Fill");
            newColor_Fill.property("ADBE Vector Fill Color").setValue(boxColor); //color
            var newColorControl = myColors.property("ADBE Effect Parade").addProperty("ADBE Color Control");
            newColorControl.property(1).setValue(boxColor);
            newColorControl.name = groupName;
            newColor_Fill.property("ADBE Vector Fill Color").expression = 'effect("' + groupName + '")(1);';

        }

    }

    function checkForComp(name) {

        var items = app.project.items;

        for (var j = 1; j <= items.length; j++) {

            if (items[j] != null && items[j] instanceof CompItem) {

                if (items[j].name == name) {

                    return items[j];

                }
            }

        }

        return false;

    }

    function checkInProject(name) {

        var items = app.project.items;

        for (var j = 1; j <= items.length; j++) {

            if (items[j].name == name) {

                return items[j];

            }


        }

        return false;

    }

    function checkForLayer(name, comp) {

        var items = comp.layers;

        for (var j = 1; j <= items.length; j++) {

            if (items[j].name == name) {

                return true;

            }

        }

        return false;

    }

    function addColor_Function(colorIs) {

        var childNum = colorPanel.children.length;

        var colorBoxSize = 25;

        var nRow = Math.floor(childNum / 8);

        childNum = childNum - (nRow * 8);

        colorPanel.size = [205, ((nRow + 1) * 25)];


        color_Btn = colorPanel.add("iconbutton", [(childNum * colorBoxSize), (nRow * colorBoxSize), ((childNum * colorBoxSize) + colorBoxSize), ((nRow * colorBoxSize) + colorBoxSize)], undefined, {
            style: "toolbutton"
        });

        colorBtn(color_Btn, colorIs);

        color_Btn.onClick = function () {

            var keyState = ScriptUI.environment.keyboardState;

            var isCtrl = keyState.ctrlKey || keyState.metaKey;
            var isAlt = keyState.altKey;
            var isShift = keyState.shiftKey;

            if (isShift) {

                colorPanel.remove(this);

                var childNum = colorPanel.children.length;

                for (var i = 0; i < childNum; i++) {

                    var nRow = Math.floor(i / 8);
                    var nLocation = (i + 1) - (nRow * 8);


                    colorPanel.children[i].location = [((nLocation - 1) * 25), (nRow * colorBoxSize)];
                    colorPanel.children[i].size = [25, 25];

                }

                colorPanel.size = [205, ((Math.floor(childNum / 8) + 1) * 25)];

                saveColors();

                return;

            } else if (isCtrl) {

                var selProps = selItems("prop", 0, 1);
                if (selProps === undefined) {

                    return;

                }

                for (var j = 0; j < selProps.length; j++) {

                    if (selProps[j].value.length == 4) {

                        if (!(checkDuplicatedColor(selProps[j].value))) {

                            colorBtn(this, selProps[j].value);
                            saveColors();
                            return;

                        }

                    }

                }

            } else {

                var selProps = selItems("prop", 0, 1);
                var selLayers = selItems("layer", 0, 0);
               
                var theColor = this.name.toString().split(",");

                if ((selProps.length == 0) && (selLayers.length != 0)) {
                    
                    app.beginUndoGroup("Apply Color");

                    var colorNum = ((this.location[0] / 25) + 1) + ((this.location[1] / 25) * 8);
                    
                    for (var l = 0; l < selLayers.length; l++) {
                        if(selLayers[l] instanceof ShapeLayer){
                           scanPropGroupColors(selLayers[l].property(2),colorNum.toString());
                        }
                    }
                   
                    function scanPropGroupColors(propGroup,colorNum) {
                       var i, prop;
                        for (i = 1; i <= propGroup.numProperties; i++) {
                           
                            prop = propGroup.property(i);

                                if (prop.propertyType === PropertyType.PROPERTY) {
                                    if(isAlt){
                                        if(prop.matchName === "ADBE Vector Stroke Color"){
                                            if(useCodeColor_Btn.toggle){
                                                addColorComp();
                                                prop.expression = '//' + scriptName + '_Colors_Tool' + '\n\ntry{\n  comp("Colors Palette").layer("Color Palette").effect("Color: ' + colorNum + '")(1);\n}catch(e){\n  value;\n}';
                                            }else{
                                                prop.expression = '';
                                                prop.setValue(theColor);
                                            }
                                        }
                                    }else{
                                        if (prop.matchName === "ADBE Vector Fill Color") {
                                            if(useCodeColor_Btn.toggle){
                                                addColorComp();
                                                prop.expression = '//' + scriptName + '_Colors_Tool' + '\n\ntry{\n  comp("Colors Palette").layer("Color Palette").effect("Color: ' + colorNum + '")(1);\n}catch(e){\n  value;\n}';
                                            }else{
                                                prop.expression = '';
                                                prop.setValue(theColor);
                                            }
                                        }
                                    }

                                } else if ((prop.propertyType === PropertyType.INDEXED_GROUP) || (prop.propertyType === PropertyType.NAMED_GROUP)) {
                                    scanPropGroupColors(prop,colorNum);
                                }
                            }
                    }

                } else if(selProps.length != 0){
                    
                    app.beginUndoGroup("Apply Color");

                    for (var i = 0; i < selProps.length; i++) {
                        if (selProps[i].value.length == 4) {
                            if(useCodeColor_Btn.toggle){
                                addColorComp();
                                var colorNum = ((this.location[0] / 25) + 1) + ((this.location[1] / 25) * 8);
                                selProps[i].expression = '//' + scriptName + '_Colors_Tool' + '\n\ntry{\n  comp("Colors Palette").layer("Color Palette").effect("Color: ' + colorNum + '")(1);\n}catch(e){\n  value;\n}';
                            }else{
                                selProps[i].expression = '';
                                selProps[i].setValue(theColor);

                            }
                        }
                    }
                }

                app.endUndoGroup();
            }
        }

        color_Btn.addEventListener("mouseover", function () {

            altInfo.visible = ctrlInfo.visible = shiftInfo.visible = true;

        });
        color_Btn.addEventListener("mouseout", function () {

            altInfo.visible = ctrlInfo.visible = shiftInfo.visible = false;

        });

        color_Btn.helpTip = "Click : Apply this Color to Selected Properties or Fill in Selected Layers\nALT + Click : Apply this Color to Stroke in Selected Layers\nCTRL + Click : Replace this Color with Selected Color\nSHIFT + Click : Remove this Color";

    }

    function checkDuplicatedColor(newName) {

        for (var i = 0; i < colorPanel.children.length; i++) {

            if (colorPanel.children[i].name.toString() == newName.toString()) {

                return true;

            }

        }

        return false;

    }

    function addColorComp(altUpdate) {

        var colorsArr = [];

        for (var i = 0; i < colorPanel.children.length; i++) {

            colorsArr.push(colorPanel.children[i].name);

        }

        if (colorsArr.length != 0) {

            createColorPalette(colorsArr, altUpdate);

            return;

        }

        return;

    }

    function saveColors() {

        var colorsArr = [];

        for (var i = 0; i < colorPanel.children.length; i++) {

            colorsArr.push(colorPanel.children[i].name);

        }

        storeJSON(colorsArr, "ColorPalette");

    }

    function explodeProps(layerIs, propIndx) {

        var layer = layerIs.duplicate();
        layerIs.selected = false;

        var contentProps = layer.property(2);
        var layerPropNum = contentProps.numProperties;

        var delAfter = layerPropNum - propIndx;

        for (var g = 0; g < delAfter; g++) {

            contentProps.property((layerPropNum - g)).remove();

        }

        var delBefore = contentProps.numProperties - 1;

        for (var g = 0; g < delBefore; g++) {

            contentProps.property(1).remove();

        }

        layer.name = contentProps.property(1).name;

        return layer;
    }

    function getOnlyShapeGroups(arr) {

        var groupsArr = [];

        for (i = 0; i < arr.length; i++) {

            if (arr[i].matchName === "ADBE Vector Group") {
                if (arr[i].propertyDepth == 2) {
                    groupsArr.push(arr[i]);
                }
            }

        }

        return groupsArr;

    }

    function addExpPre(props, type, alt) { //type 1:Elastic , 2:anticipation , 3:Bounce

        if (type == 1) {

            var ffxName = "Elastic";
            var ffxFile = elasticFFX;
            var expCode = expressionCode("elastic");

        } else if (type == 2) {

            var ffxName = "Anticipation";
            var ffxFile = antiFFX;
            var expCode = expressionCode("anti");

        } else if (type == 3) {

            var ffxName = "Bounce";
            var ffxFile = bounceFFX;
            var expCode = expressionCode("bounce");

        }

        var presetsToAdd = [];

        for (var i = 0; i < props.length; i++) {

            var layer = getLayerFromProperty(props[i]);

            if (alt) {

                var controlName = ffxName;
                presetsToAdd.push(layer);

            } else {

                var controlName = ffxName + ": " + props[i].name;

                var presetObj = {};
                presetObj.layer = layer;
                presetObj.name = controlName;
                presetsToAdd.push(presetObj);

            }

            if (type == 1) {
                var baseCode = 'amp = effect("' + controlName + '")(1) / 200;\nfreq = effect("' + controlName + '")(2) / 25;\ndecay = effect("' + controlName + '")(3) / 10;\n';
            } else if (type == 2) {
                var baseCode = 'var Anticipation_Type = effect("' + controlName + '")(1);\nvar s = effect("' + controlName + '")(2)/10;\n\n';
            } else if (type == 3) {
                var baseCode = 'elastic = (effect("' + controlName + '")(1)) / 100;\ngravity = (effect("' + controlName + '")(2)) * 500;\nbounceMax = effect("' + controlName + '")(3);\non_off = effect("' + controlName + '")(4);\n';
            }

            props[i].expression = baseCode + expCode;

        }

        if (alt) {

            presetsToAdd = getUniqueArray(presetsToAdd);

            for (var r = 0; r < presetsToAdd.length; r++) {

                var layerEffects = presetsToAdd[r].property("ADBE Effect Parade");
                var effectsNum = layerEffects.numProperties;

                if (effectsNum == 0) {

                    putEFF(presetsToAdd[r], ffxFile, ffxName);

                } else {

                    var isthereEff = false;

                    for (var ch = 0; ch < effectsNum; ch++) {

                        if (layerEffects.property((ch + 1)).name == ffxName) {

                            isthereEff = true;

                        }

                    }

                    if (!isthereEff) {

                        putEFF(presetsToAdd[r], ffxFile, ffxName);

                    }

                }

            }

        } else {

            for (var r = 0; r < presetsToAdd.length; r++) {

                putEFF(presetsToAdd[r].layer, ffxFile, presetsToAdd[r].name);

            }

        }

        return;

    }

    function getExpDrivenProps(props) {
        var arr = props.slice(0);
        for (var i = arr.length - 1; i >= 0; i--) {
            var prop = arr[i];
            if (!(prop instanceof Property) || prop.canSetExpression === false || prop.canVaryOverTime === false) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    function getFFX(type) { ///

        var ffxFile = getUserDataFolder() + "/presets/" + type;
        alert(ffxFile);
        return ffxFile;

    }

    function cloneKeyframes(alt) {

        var selProps = selItems("prop");
        if (selProps === undefined) {
            return;
        }

        if (isPropsHasKeyframes(selProps)) {

            var comp = selItems("comp", 0);
            pasteKeyframes(comp, alt);

        } else {

            alert("Please select keyframe(s) to Clone them.");

            return;
        }

    }

    function isPropsHasKeyframes(props) {

        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            if (prop instanceof Property && prop.canVaryOverTime && prop.numKeys > 0) {
                if (prop.selectedKeys.length > 0) {
                    return true;
                }
            }
        }
        return false;

    }

    function applyKeyEaseObj(prop, key, storedObj) {

        if ((prop.keyInTemporalEase(key)[1] != undefined) && (storedObj.In[1] == undefined)) {
            storedObj.In[1] = storedObj.In[0];
            storedObj.InFlip[1] = storedObj.InFlip[0];
        }

        if ((prop.keyInTemporalEase(key)[2] != undefined) && (storedObj.In[2] == undefined)) {
            storedObj.In[2] = storedObj.In[1];
            storedObj.InFlip[2] = storedObj.InFlip[1];

        }

        if ((prop.keyOutTemporalEase(key)[1] != undefined) && (storedObj.Out[1] == undefined)) {
            storedObj.Out[1] = storedObj.Out[0];
            storedObj.OutFlip[1] = storedObj.OutFlip[0];
        }

        if ((prop.keyOutTemporalEase(key)[2] != undefined) && (storedObj.Out[2] == undefined)) {
            storedObj.Out[2] = storedObj.Out[1];
            storedObj.OutFlip[2] = storedObj.OutFlip[1];
        }

        storedObj.In.splice(prop.keyInTemporalEase(key).length, storedObj.In.length);
        storedObj.Out.splice(prop.keyInTemporalEase(key).length, storedObj.Out.length);


        var inInfluence = JSON.stringify(storedObj.In[0].influence);
        if (inInfluence < 0.1) {
            inInfluence = 0.1;
        }

        var outInfluence = JSON.stringify(storedObj.Out[0].influence);
        if (outInfluence < 0.1) {
            outInfluence = 0.1;
        }

        storedObj.In[0] = new KeyframeEase(JSON.stringify(storedObj.In[0].speed), inInfluence);
        storedObj.Out[0] = new KeyframeEase(JSON.stringify(storedObj.Out[0].speed), outInfluence);

        if (key > 1 && (prop.keyInTemporalEase(key)[1] != undefined)) {

            if (storedObj.InFlip[0] == true) {

                if ((prop.keyOutTemporalEase((key - 1))[0].speed > 0 && storedObj.In[0].speed > 0) || (prop.keyOutTemporalEase((key - 1))[0].speed < 0 && storedObj.In[0].speed < 0)) {

                    storedObj.In[0].speed = -storedObj.In[0].speed;

                }

            } else {

                if ((prop.keyOutTemporalEase((key - 1))[0].speed > 0 && storedObj.In[0].speed < 0) || (prop.keyOutTemporalEase((key - 1))[0].speed < 0 && storedObj.In[0].speed > 0)) {

                    storedObj.In[0].speed = -storedObj.In[0].speed;

                }

            }

        }

        if (prop.numKeys > key && (prop.keyInTemporalEase(key)[1] != undefined)) {

            if (storedObj.OutFlip[0] == true) {

                if ((prop.keyInTemporalEase((key + 1))[0].speed > 0 && storedObj.Out[0].speed > 0) || (prop.keyInTemporalEase((key + 1))[0].speed < 0 && storedObj.Out[0].speed < 0)) {

                    storedObj.Out[0].speed = -storedObj.Out[0].speed;

                }

            } else {

                if ((prop.keyInTemporalEase((key + 1))[0].speed > 0 && storedObj.Out[0].speed < 0) || (prop.keyInTemporalEase((key + 1))[0].speed < 0 && storedObj.Out[0].speed > 0)) {

                    storedObj.Out[0].speed = -storedObj.Out[0].speed;

                }

            }

        }


        if (prop.keyInTemporalEase(key)[1] != undefined) {

            inInfluence = JSON.stringify(storedObj.In[1].influence);
            if (inInfluence < 0.1) {
                inInfluence = 0.1;
            }

            outInfluence = JSON.stringify(storedObj.Out[1].influence);
            if (outInfluence < 0.1) {
                outInfluence = 0.1;
            }

            storedObj.In[1] = new KeyframeEase(JSON.stringify(storedObj.In[1].speed), inInfluence);;
            storedObj.Out[1] = new KeyframeEase(JSON.stringify(storedObj.Out[1].speed), outInfluence);;


            if (key > 1 && (prop.keyInTemporalEase(key)[1] != undefined)) {

                if (storedObj.InFlip[1] == true) {

                    if ((prop.keyOutTemporalEase((key - 1))[1].speed > 0 && storedObj.In[0].speed > 0) || (prop.keyOutTemporalEase((key - 1))[1].speed < 0 && storedObj.In[1].speed < 0)) {

                        storedObj.In[1].speed = -storedObj.In[1].speed;

                    }

                } else {

                    if ((prop.keyOutTemporalEase((key - 1))[1].speed > 0 && storedObj.In[1].speed < 0) || (prop.keyOutTemporalEase((key - 1))[1].speed < 0 && storedObj.In[1].speed > 0)) {

                        storedObj.In[1].speed = -storedObj.In[1].speed;

                    }

                }

            }

            if (prop.numKeys > key && (prop.keyInTemporalEase(key)[1] != undefined)) {

                if (storedObj.OutFlip[1] == true) {

                    if ((prop.keyInTemporalEase((key + 1))[1].speed > 0 && storedObj.Out[1].speed > 0) || (prop.keyInTemporalEase((key + 1))[1].speed < 0 && storedObj.Out[1].speed < 0)) {

                        storedObj.Out[1].speed = -storedObj.Out[1].speed;

                    }

                } else {

                    if ((prop.keyInTemporalEase((key + 1))[1].speed > 0 && storedObj.Out[1].speed < 0) || (prop.keyInTemporalEase((key + 1))[1].speed < 0 && storedObj.Out[1].speed > 0)) {

                        storedObj.Out[1].speed = -storedObj.Out[1].speed;

                    }

                }

            }

        }

        if (prop.keyInTemporalEase(key)[2] != undefined) {

            inInfluence = JSON.stringify(storedObj.In[2].influence);
            if (inInfluence < 0.1) {
                inInfluence = 0.1;
            }

            outInfluence = JSON.stringify(storedObj.Out[2].influence);
            if (outInfluence < 0.1) {
                outInfluence = 0.1;
            }

            storedObj.In[2] = new KeyframeEase(JSON.stringify(storedObj.In[2].speed), inInfluence);;
            storedObj.Out[2] = new KeyframeEase(JSON.stringify(storedObj.Out[2].speed), outInfluence);;


            if (key > 1 && (prop.keyInTemporalEase(key)[1] != undefined)) {

                if (storedObj.InFlip[2] == true) {

                    if ((prop.keyOutTemporalEase((key - 1))[2].speed > 0 && storedObj.In[2].speed > 0) || (prop.keyOutTemporalEase((key - 1))[2].speed < 0 && storedObj.In[2].speed < 0)) {

                        storedObj.In[2].speed = -storedObj.In[2].speed;

                    }

                } else {

                    if ((prop.keyOutTemporalEase((key - 1))[2].speed > 0 && storedObj.In[2].speed < 0) || (prop.keyOutTemporalEase((key - 1))[2].speed < 0 && storedObj.In[2].speed > 0)) {

                        storedObj.In[2].speed = -storedObj.In[2].speed;

                    }

                }

            }

            if (prop.numKeys > key && (prop.keyInTemporalEase(key)[1] != undefined)) {

                if (storedObj.OutFlip[2] == true) {

                    if ((prop.keyInTemporalEase((key + 1))[2].speed > 0 && storedObj.Out[2].speed > 0) || (prop.keyInTemporalEase((key + 1))[2].speed < 0 && storedObj.Out[2].speed < 0)) {

                        storedObj.Out[2].speed = -storedObj.Out[2].speed;

                    }

                } else {

                    if ((prop.keyInTemporalEase((key + 1))[2].speed > 0 && storedObj.Out[2].speed < 0) || (prop.keyInTemporalEase((key + 1))[2].speed < 0 && storedObj.Out[2].speed > 0)) {

                        storedObj.Out[2].speed = -storedObj.Out[2].speed;

                    }

                }

            }

        }

        prop.setTemporalEaseAtKey(key, storedObj.In, storedObj.Out);
        prop.setInterpolationTypeAtKey(key, storedObj.InInterpolation, storedObj.OutInterpolation);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            prop.setRovingAtKey(key, storedObj.Rov);
        }

    }

    function storeJSON(obj, file) {

        var settFolder = new Folder(getUserDataFolder() + "/Settings");
        if (!settFolder.exists) {
            settFolder.create();
        }

        var jsonFile = File(settFolder.toString() + "/" + file + ".json");
        jsonFile.encoding = "UTF-8";

        jsonFile.open("w");
        jsonFile.write(JSON.stringify(obj));
        jsonFile.close();

    }

    function hasJSON(storedFile) {

        var settFolder = new Folder(getUserDataFolder() + "/Settings");
        var file = File(settFolder.toString() + "/" + storedFile + ".json");

        if (file.exists) {
            return true;
        }
        return false;

    }

    function deleteJSON(storedFile) {

        var settFolder = new Folder(getUserDataFolder() + "/Settings");
        var file = File(settFolder.toString() + "/" + storedFile + ".json");
        
        if(file.exists){
            file.remove();
        }

    }

    function importJSON(storedFile) {

        var settFolder = new Folder(getUserDataFolder() + "/Settings");
        var file = File(settFolder.toString() + "/" + storedFile + ".json");
        file.encoding = "UTF-8";

        file.open("r");
        var data = file.read();
        file.close();

        return JSON.parse(data);

    }

    function getKeyEaseObj(prop, key) {

        var keyEaseObj = {};

        keyEaseObj.In = prop.keyInTemporalEase(key);
        keyEaseObj.Out = prop.keyOutTemporalEase(key);
        keyEaseObj.InInterpolation = prop.keyInInterpolationType(key);
        keyEaseObj.OutInterpolation = prop.keyOutInterpolationType(key);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            keyEaseObj.Rov = prop.keyRoving(key);
        } else {
            keyEaseObj.Rov = false;
        }

        keyEaseObj.InFlip = [];
        keyEaseObj.OutFlip = [];

        if (key > 1) {

            if ((prop.keyOutTemporalEase((key - 1))[0].speed >= 0 && prop.keyInTemporalEase((key))[0].speed >= 0) || (prop.keyOutTemporalEase((key - 1))[0].speed <= 0 && prop.keyInTemporalEase((key))[0].speed <= 0)) {

                keyEaseObj.InFlip[0] = false;

            } else {

                keyEaseObj.InFlip[0] = true;

            }

        }

        if (prop.numKeys > key) {

            if ((prop.keyOutTemporalEase((key))[0].speed >= 0 && prop.keyInTemporalEase((key + 1))[0].speed >= 0) || (prop.keyOutTemporalEase((key))[0].speed <= 0 && prop.keyInTemporalEase((key + 1))[0].speed <= 0)) {

                keyEaseObj.OutFlip[0] = false;

            } else {

                keyEaseObj.OutFlip[0] = true;

            }

        }

        if (!(prop.keyOutTemporalEase(key)[1] == undefined)) {

            if (key > 1) {

                if ((prop.keyOutTemporalEase((key - 1))[1].speed >= 0 && prop.keyInTemporalEase((key))[1].speed >= 0) || (prop.keyOutTemporalEase((key - 1))[1].speed <= 0 && prop.keyInTemporalEase((key))[1].speed <= 0)) {

                    keyEaseObj.InFlip[1] = false;

                } else {

                    keyEaseObj.InFlip[1] = true;

                }

            }

            if (prop.numKeys > key) {

                if ((prop.keyOutTemporalEase((key))[1].speed >= 0 && prop.keyInTemporalEase((key + 1))[1].speed >= 0) || (prop.keyOutTemporalEase((key))[1].speed <= 0 && prop.keyInTemporalEase((key + 1))[1].speed <= 0)) {

                    keyEaseObj.OutFlip[1] = false;

                } else {

                    keyEaseObj.OutFlip[1] = true;

                }

            }

        }

        if (!(prop.keyOutTemporalEase(key)[2] == undefined)) {

            if (key > 1) {

                if ((prop.keyOutTemporalEase((key - 1))[2].speed >= 0 && prop.keyInTemporalEase((key))[2].speed >= 0) || (prop.keyOutTemporalEase((key - 1))[2].speed <= 0 && prop.keyInTemporalEase((key))[2].speed <= 0)) {

                    keyEaseObj.InFlip[2] = false;

                } else {

                    keyEaseObj.InFlip[2] = true;

                }

            }

            if (prop.numKeys > key) {

                if ((prop.keyOutTemporalEase((key))[2].speed >= 0 && prop.keyInTemporalEase((key + 1))[2].speed >= 0) || (prop.keyOutTemporalEase((key))[2].speed <= 0 && prop.keyInTemporalEase((key + 1))[2].speed <= 0)) {

                    keyEaseObj.OutFlip[2] = false;

                } else {

                    keyEaseObj.OutFlip[2] = true;

                }

            }

        }

        return keyEaseObj;

    }

    function colorBtn(button, color) {

        button.fillBrush = button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, color);
        button.onDraw = customDraw;
        button.name = color;

        return;

        function customDraw() {
            with (this) {
                graphics.drawOSControl();
                graphics.rectPath(0, 0, size[0], size[1]);
                graphics.fillPath(fillBrush);

            }
        }

    }

    function explode(layerIs) {

        var baseLayer = layerIs;

        if (baseLayer.property(2).numProperties <= 1) {

            return;
        }

        baseLayer.selected = false;
        var layer = baseLayer.duplicate();
        baseLayer.enabled = false;

        var layerPropNum = layer.property(2).numProperties;

        for (var i = 0; i < layerPropNum; i++) {

            var newLayer = layer.duplicate();
            newLayer.enabled = false;
            newLayer.name = layer.property(2).property(1).name;
            newLayer.label = 8;
            newLayer.selected = true;
            newLayer.moveBefore(layer);

            var contentProps = newLayer.property(2);
            var lettersNum = contentProps.numProperties;

            for (var j = 1; j <= lettersNum; j++) {

                try {
                    contentProps.property(2).remove();
                } catch (e) {
                    layer.property(2).property(1).remove();
                }

            }


        }


        layer.remove();

        var comp = app.project.activeItem;

        for (var e = 0; e < comp.selectedLayers.length; e++) {
            comp.selectedLayers[e].enabled = true;
        }

        return comp.selectedLayers;

    }

    function userNum(text, dValue, type, def, min, max) {

        var dialog = new Window("palette", undefined, undefined, {
            independent: true,
            closeButton: false,
            borderless: true
        });
        dialog.text = "Dialog";
        dialog.preferredSize.width = 300;
        dialog.preferredSize.height = 150;
        dialog.orientation = "row";
        dialog.alignChildren = ["fill", "fill"];
        dialog.spacing = 0;
        dialog.margins = 0;

        var group1 = dialog.add("group", undefined, {
            name: "group1"
        });
        group1.orientation = "column";
        group1.alignChildren = ["fill", "center"];
        group1.spacing = 10;
        group1.margins = 10;

        var tG = group1.add("group", undefined, {
            name: "tG"
        });
        tG.orientation = "row";
        tG.alignChildren = ["center", "top"];
        tG.spacing = 10;
        tG.margins = 0;

        var textG = group1.add("group", undefined, {
            name: "textG"
        });
        textG.orientation = "column";
        textG.alignChildren = ["fill", "center"];
        textG.spacing = 10;
        textG.margins = 0;

        var staticText = textG.add("statictext", undefined, undefined, {
            name: "staticText"
        });
        staticText.text = text;

        var editText = textG.add('edittext {properties: {name: "editText"}}');
        editText.text = dValue;
        editText.active = true;

        var btnsG = group1.add("group", undefined, {
            name: "btnsG"
        });
        btnsG.orientation = "row";
        btnsG.alignChildren = ["right", "center"];
        btnsG.spacing = 10;
        btnsG.margins = 0;

        var cancelBtn = btnsG.add("button", undefined, undefined, {
            name: "cancelBtn"
        });
        cancelBtn.text = "Cancel";

        var okBtn = btnsG.add("button", undefined, undefined, {
            name: "okBtn"
        });
        okBtn.text = "OK";

        var bG = group1.add("group", undefined, {
            name: "bG"
        });
        bG.orientation = "row";
        bG.alignChildren = ["center", "bottom"];
        bG.spacing = 10;
        bG.margins = 0;

        var tGGr = tG.graphics;
        tGGr.backgroundColor = tGGr.newBrush(tGGr.BrushType.SOLID_COLOR, [0.9804, 0.9059, 0.007843]);

        var bGGr = bG.graphics;
        bGGr.backgroundColor = bGGr.newBrush(bGGr.BrushType.SOLID_COLOR, [0.9804, 0.9059, 0.007843]);

        dialog.center();
        dialog.show();

        editText.addEventListener("keydown", function (k) {
            doCustomPressed_key(k, this)
        });

        function doCustomPressed_key(key, control) {
            var step;
            key.shiftKey ? step = 10 : step = 1;
            switch (key.keyName) {
                case "Up":
                    control.text = forceNum(parseInt(editText.text) + step, def, min, max);
                    break;
                case "Down":
                    control.text = forceNum(parseInt(editText.text) - step, def, min, max);
                    break;
                case "Enter":
                    saveSetting(type, forceNum(editText.text, def, min, max));
                    dialog.close();
                    break;

                default:
            }
        }

        dialog.onDeactivate = cancelBtn.onClick = function () {
            dialog.close();
        }

        okBtn.onClick = function () {

            saveSetting(type, forceNum(editText.text, def, min, max));
            dialog.close();

        }

    }

    function forceNum(num, def, min, max) {

        if (min === undefined) {
            min = -10000;
        }
        if (max === undefined) {
            max = 10000;
        }

        num = parseInt(num);

        if (isNaN(num) === true) {
            return def;
        } else if (num <= min) {
            num = min;
        } else {
            if (num > max) {
                num = max;
            }
        }
        return num;
    }

    function Shredder(stacks, alt) {

        selLayers = selItems("layer");
        if (selLayers === undefined) {
            return;
        }

        var comp = app.project.activeItem;
        layer = selLayers[0];
        var duplicates = [];

        var x = 0;
        var y = 0;
        var dLayer;
        var shape = new Shape();
        var layerMask;
        var fixShred = 0;
        var z = 0;
        for (var i = 1; i <= stacks; i++) {
            dLayer = layer.duplicate();
            duplicates.push(dLayer);
            dLayer.audioEnabled = false;
            if (fixShred == 0) {
                dLayer.name = "[" + i + "]-" + layer.name;
            } else {
                dLayer.name = "Fix Gap-[" + i + "]-" + layer.name;
            }

            if (!alt) {
                var num = Math.floor(layer.width / stacks);
                if (fixShred == 0) {
                    shape.vertices = [
                        [x, y],
                        [x, y + layer.height],
                        [x + num, y + layer.height],
                        [x + num, y]
                    ];
                } else {
                    shape.vertices = [
                        [x, y],
                        [x, y + layer.height],
                        [x + num + z, y + layer.height],
                        [x + num + z, y]
                    ];
                }
                x += num;
                if (i == stacks && x != layer.width && fixShred == 0 && layer.width % stacks != 0) {
                    stacks++
                    z = Math.round((layer.width - x) - num);
                    fixShred = 1;
                }

            } else {
                var num = Math.floor(layer.height / stacks);
                if (fixShred == 0) {
                    shape.vertices = [
                        [x, y],
                        [x, y + num],
                        [x + layer.width, y + num],
                        [x + layer.width, y]
                    ];
                } else {
                    shape.vertices = [
                        [x, y],
                        [x, y + num + z],
                        [x + layer.width, y + num + z],
                        [x + layer.width, y]
                    ];
                }
                y += num;
                if (i == stacks && x != layer.height && fixShred == 0 && layer.height % stacks != 0) {
                    stacks++
                    z = Math.round((layer.height - y) - num);
                    fixShred = 1;
                }
            }
            i
            layerMask = dLayer.Masks.addProperty("Mask");
            layerMask.property("ADBE Mask Shape").setValue(shape);

        }
        layer.enabled = false;
        return;

    }

    function breakText(layerIs, type) { // 1 letters - 2 words - other Lines

        if (type === undefined) {
            type = 2;
        }

        var baseLayer = layerIs;
        var n = baseLayer.text.sourceText.value.text;

        app.executeCommand(3781);
        baseLayer.enabled = false;
        baseLayer.selected = false;

        var comp = app.project.activeItem;
        var layer = comp.selectedLayers[0];


        if (type == 1) {

            var breakArr = n.replace(/ /g, "").replace(/\t/g, "").replace(/\r/g, "").replace(/\n/g, "").split("");

        } else if (type == 2) {

            var breakArr = n.split(/\s+/);

        } else {

            var breakArr = n.replace(/\t/g, "").split(/\r+/);

            for (var f = 0; f < breakArr.length; f++) {
                breakArr[f] = breakArr[f].replace(/ /g, "");
            }

        }


        for (var i = 0; i < breakArr.length; i++) {

            var newLayer = layer.duplicate();
            newLayer.enabled = false;
            newLayer.name = breakArr[i];
            newLayer.label = 14;
            newLayer.selected = true;
            newLayer.moveBefore(baseLayer);

            var contentProps = newLayer.property(2);
            var lettersNum = contentProps.numProperties;
            var fixDel = 0;

            for (var j = 1; j <= lettersNum; j++) {
                if (j > breakArr[i].length) {
                    contentProps.property(j - fixDel).remove();
                    fixDel++;
                }
            }

            for (var z = 1; z <= breakArr[i].length; z++) {
                layer.property(2).property(1).remove();
            }
        }

        if (baseLayer.property("ADBE Transform Group").property("ADBE Position").isTimeVarying == 0 && baseLayer.property("ADBE Transform Group").property("ADBE Anchor Point").isTimeVarying == 0) {

            app.executeCommand(10312);

        }

        layer.remove();

        for (var e = 0; e < comp.selectedLayers.length; e++) {
            comp.selectedLayers[e].enabled = true;
        }

        return comp.selectedLayers;

    }

    function flipLayers(selLayers) {

        if (selLayers.length <= 1) {
            return alert("Please Select at least ( 2 ) Layers to Flip them.");
        }

        app.beginUndoGroup("Flip Layers");

        var fIndx = selLayers[0].index;
        var eIndx = selLayers[selLayers.length - 1].index;

        if (fIndx < eIndx) {
            selLayers.reverse();
        }

        for (var i = 0, l = selLayers.length; i < l; i++) {
            if (!selLayers[i].locked) {
                selLayers[i].moveBefore(selLayers[l - 1]);
            }

        }

        app.endUndoGroup();
        return;

    }

    function linkIT_function(isAlt) {

        var selProps = selItems("prop", 1, 1);
        if (selProps === undefined) {
            return;
        }
        var selLayers = selItems("layer", 0);

        var propsInfo = [];

        for (var i = 0; i < selProps.length; i++) {

            if (selProps[i].canSetExpression) {
                if (!(selProps[i].propertyValueType == PropertyValueType.NO_VALUE)) {
                    if (!(selProps[i].propertyValueType == PropertyValueType.SHAPE)) {
                        if (!(selProps[i].propertyValueType == PropertyValueType.TEXT_DOCUMENT)) {
                            if (!(selProps[i].propertyValueType == PropertyValueType.CUSTOM_VALUE)) {
                                propsInfo.push(getPropInfo(selProps[i]));
                            }
                        }
                    }
                }
            }

        }

        app.beginUndoGroup("Link IT");

        doSelectLayers(selLayers, false);

        var addPresetsEff = [];


        for (var i = 0; i < propsInfo.length; i++) {

            if (!(propsInfo[i].isEffect)) {

                var myProp = propsInfo[i].name;
                var valProp = propsInfo[i].value;

                if (!valProp.length) {
                    valProp = [valProp];
                }

                if (!propsInfo[i].layer.threeDLayer && valProp.length === 3) {
                    valProp.length = 2;
                }

                var effectsProperty = propsInfo[i].layer.property("ADBE Effect Parade");

                if (!isAlt) {

                    var propType = getPropType(myProp, valProp);

                    var newControl = effectsProperty.addProperty(propType);
                    var hasControlName = 0;
                    var numControlName = "";
                    var controlName = myProp;

                    for (var h = 1, hs = effectsProperty.numProperties; h < hs; h++) {
                        if (effectsProperty.property(h).name === controlName + numControlName) {
                            hasControlName++
                            if (!(hasControlName === 0)) {
                                numControlName = " [" + hasControlName + "]"
                            }
                        }
                    }

                    newControl.name = controlName + numControlName;

                    newControl.property(1).setValue(valProp);
                    var expressionText = 'effect("' + newControl.name + '")(1);';

                } else {

                    if (valProp.length == 3) {

                        var newController = putEFF(propsInfo[i].layer, xyzFFX, selProps[i].name);
                        newController.property(1).setValue(valProp[0]);
                        newController.property(2).setValue(valProp[1]);
                        newController.property(3).setValue(valProp[2]);
                        var expressionText = 'xValue =effect("' + newController.name + '")(1);\nyValue =effect("' + newController.name + '")(2);\nzValue =effect("' + newController.name + '")(3);\n\n[xValue, yValue, zValue]';

                    } else if (valProp.length == 2) {

                        var newController = putEFF(propsInfo[i].layer, xyFFX, selProps[i].name);
                        newController.property(1).setValue(valProp[0]);
                        newController.property(2).setValue(valProp[1]);

                        var expressionText = 'xValue =effect("' + newController.name + '")(1);\nyValue =effect("' + newController.name + '")(2);\n\n[xValue, yValue]';

                    } else {

                        var propType = getPropType(myProp, valProp);

                        var newControl = effectsProperty.addProperty(propType);
                        var hasControlName = 0;
                        var numControlName = "";
                        var controlName = myProp;

                        for (var h = 1, hs = effectsProperty.numProperties; h < hs; h++) {
                            if (effectsProperty.property(h).name === controlName + numControlName) {
                                hasControlName++
                                if (!(hasControlName === 0)) {
                                    numControlName = " [" + hasControlName + "]"
                                }
                            }
                        }

                        newControl.name = controlName + numControlName;

                        newControl.property(1).setValue(valProp);
                        var expressionText = 'effect("' + newControl.name + '")(1);';

                    }

                }

                propsInfo[i].is.expression = expressionText;

            } else {

                var myProp = propsInfo[i].name;
                var valProp = propsInfo[i].value;

                var propType = getPropType(myProp, valProp);

                var effectsProperty = propsInfo[i].layer.property("ADBE Effect Parade");

                var hasControlName = 0;
                var numControlName = "";
                var controlName = myProp;

                for (var h = 1, hs = effectsProperty.numProperties; h <= hs; h++) {
                    if (effectsProperty.property(h).name === controlName + numControlName) {
                        hasControlName++
                        if (!(hasControlName === 0)) {
                            numControlName = " [" + hasControlName + "]"
                        }
                    }
                }

                var expressionText = 'effect("' + controlName + numControlName + '")(1);';
                propsInfo[i].is.expression = expressionText;

                var presetObj = {};

                presetObj.name = controlName + numControlName;
                presetObj.value = valProp;
                presetObj.type = propType;
                presetObj.layer = propsInfo[i].layer;

                addPresetsEff.push(presetObj);


                // var newControl = effectsProperty.addProperty(propType);

                // newControl.name = controlName + numControlName;
                //newControl.property(1).setValue(valProp);


            }
        }

        if (addPresetsEff.length > 0) {

            for (var u = 0; u < addPresetsEff.length; u++) {

                var newControl = addPresetsEff[u].layer.property("ADBE Effect Parade").addProperty(addPresetsEff[u].type);
                newControl.name = addPresetsEff[u].name;
                newControl.property(1).setValue(addPresetsEff[u].value);

            }

        }

        doSelectLayers(selLayers, true);
        app.endUndoGroup();

        function getPropType(myProp, valProp) {

            if (myProp == "Color") {
                propType = "ADBE Color Control"
            } else {

                switch (valProp.length) {
                    case 1:
                        switch (myProp) {
                            case "Rotation":
                                propType = "ADBE Angle Control"
                                break;
                            case "X Rotation":
                                propType = "ADBE Angle Control"
                                break;
                            case "Y Rotation":
                                propType = "ADBE Angle Control"
                                break;
                            case "Z Rotation":
                                propType = "ADBE Angle Control"
                                break;
                            case "Skew Axis":
                                propType = "ADBE Angle Control"
                                break;
                            default:
                                propType = "ADBE Slider Control"
                        }
                        break;
                    case 2:
                        propType = "ADBE Point Control"
                        break;
                    case 3:
                        propType = "ADBE Point3D Control"
                        break;
                    default:
                        propType = "ADBE Slider Control"
                }
            }
            return propType;

        }

        function getPropInfo(prop) {

            var propObj = {};

            propObj.is = prop;
            propObj.name = prop.name;
            propObj.value = prop.value;
            propObj.layer = getLayerFromProperty(prop);
            propObj.type = prop.propertyValueType;
            propObj.isEffect = isEffectTest();

            return propObj;

            function isEffectTest() {
                var thereEffect = false;
                while (prop.parentProperty) {
                    prop = prop.parentProperty;
                    if (prop.matchName == "ADBE Effect Parade") {
                        thereEffect = true;
                        return thereEffect;
                    }
                }
                return thereEffect;
            }

        }

    }

    function setExpression(props, expCode) {

        for (var i = 0; i < props.length; i++) {
            if (props[i].canSetExpression) {
                props[i].expression = expCode;
            }
        }
        return;
    }

    function putEFF(layer, file, name) {

        layer.selected = false;
        layer.selected = true;
        layer.applyPreset(file);

        var layerEffects = layer.property("ADBE Effect Parade");
        var effectsNum = layerEffects.numProperties;

        var hasControlName = 0;
        var fixName = "";

        if (name === undefined) {
            name = layerEffects.property(effectsNum).name;
        }

        for (var pf = 1; pf < effectsNum; pf++) {
            if (layerEffects.property(pf).name == name + fixName) {
                hasControlName++
                if (!(hasControlName === 0)) {
                    fixName = " [" + hasControlName + "]";
                }
            }
        }
        layerEffects.property(effectsNum).name = name + fixName;

        layer.selected = false;
        return layerEffects.property(effectsNum);

    }

    function isLayerHasEff(layer, data) {

        var layerEffects = layer.property("ADBE Effect Parade");
        var effectsNum = layerEffects.numProperties;

        for (var i = 1; i <= effectsNum; i++) {
            if (data == layerEffects.property(i).name) {
                return true;
            }
        }
        return false;
    }

    function isArrHave(arr, data) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == data) {
                return true;
            }
        }
        return false;
    }

    function doSelectLayers(layers, type) {

        try {

            for (var k = 0; k < layers.length; k++) {
                layers[k].selected = type;
            }

        } catch (err) {

            for (var k = 1; k < layers.length; k++) {
                layers[k].selected = type;
            }

        }

    }

    function getUniqueArray(array) {

        var uniqueArray = [];

        for (i = 0; i < array.length; i++) {

            var isThere = false;

            for (j = 0; j < array.length - 1; j++) {

                if (array[i] == array[j + 1]) {

                    isThere = true;

                }

            }

            if (isThere == false) {

                uniqueArray.push(array[i]);

            } else if (isThere == true) {

                var newIsThere = false;

                for (h = 0; h < uniqueArray.length; h++) {

                    if (array[i] == uniqueArray[h]) {

                        newIsThere = true;

                    }

                }

                if (newIsThere == false) {

                    uniqueArray.push(array[i]);

                }

            }


        }

        return uniqueArray;
    }

    function pasteKeyframes(comp, alt) {
        if (alt === undefined) {
            alt = 0;
        }

        app.beginUndoGroup("Clone Keyframes");
        var time = comp.time;
        var selProps = comp.selectedProperties;
        selProps = getPropsWithKey(selProps);
        var alt2 = alt === 2 ? 1 : 2;
        var earliestTime = getKeyTime(selProps, alt);
        var lastTime = getKeyTime(selProps, alt2);
        var deleteKeys = false;
        if (earliestTime === time && alt !== 2) {
            alert("Sorry we can't clone Keyframes in the same place.\nPlease move playhead and Try again");
            return;
        } else {
            if (lastTime === time && alt == 2) {
                deleteKeys = true;
            }
        }

        var deleteKeysArr = [];
        for (var i = 0; i < selProps.length; i += 1) {
            var prop = selProps[i];
            var maskBezier = checkForRotoBezier(prop);
            var keys = prop.selectedKeys;
            sortKeys(keys);

            var keysArr = getKeysArr(prop, keys);
            deleteKeysArr.push(placeNewKeys(prop, keysArr, earliestTime, time, alt, deleteKeys));

            checkForRotoBezier(prop, maskBezier);
        }

        if (deleteKeysArr[0] !== null) {
            for (var z = 0; z < deleteKeysArr.length; z += 1) {
                deleteKeysAtTimes(deleteKeysArr[z].prop, deleteKeysArr[z].times);
            }
            for (var z = 0; z < deleteKeysArr.length; z += 1) {
                selectKeysAtTimes(deleteKeysArr[z].prop, deleteKeysArr[z].newTimes, true);
            }
        }
        app.endUndoGroup();
    }

    function placeNewKeys(prop, keysArr, earliestTime, time, alt, deleteKeys, off) {
        if (off === undefined) {
            off = 0;
        }

        var newTimes = [];
        var oldTimes = [];
        var keyObjArr = [];
        for (var y = 0; y < keysArr.length; y += 1) {
            keyObjArr.push(getKeyObjCloner(prop, keysArr[y], keysArr.length));
        }
        for (var i = 0; i < keysArr.length; i += 1) {
            var key = keysArr[i];
            if (alt === 2) {
                timeOffset = earliestTime - key;
            } else {
                timeOffset = key - earliestTime;
            }
            var newTime = time + timeOffset + off;
            oldTimes.push(key);
            newTimes.push(newTime);
            prop.setValueAtTime(newTime, keyObjArr[i].value);
        }

        for (var z = 0; z < newTimes.length; z += 1) {
            setKeysFromKeyObj(prop, newTimes[z], keyObjArr[z], alt);
        }

        deselectKeys(prop);
        selectKeysAtTimes(prop, newTimes);
        if (!deleteKeys) {
            selectKeysAtTimes(prop, oldTimes);
            return null;
        } else {
            checkTimesForOverlap(oldTimes, newTimes);
            return {
                prop: prop,
                times: oldTimes,
                newTimes: newTimes
            };
        }
    }

    function deselectKeys(prop) {
        for (var i = 1; i <= prop.numKeys; i += 1) {
            prop.setSelectedAtKey(i, false);
        }
    }

    function checkTimesForOverlap(oldTimes, newTimes) {
        for (var i = 0; i < newTimes.length; i += 1) {
            var time = timeToFrames(newTimes[i]);
            for (var y = 0; y < oldTimes.length; y += 1) {
                if (timeToFrames(oldTimes[y]) === time) {
                    oldTimes.splice(y, 1);
                    break;
                }
            }
        }
    }

    function setKeysFromKeyObj(prop, newTime, keyObj, reversed) {
        var keyIndex = prop.nearestKeyIndex(newTime);
        prop.setInterpolationTypeAtKey(keyIndex, keyObj.inInterpolation, keyObj.outInterpolation);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            if (reversed !== 2) {
                prop.setSpatialTangentsAtKey(keyIndex, keyObj.keyInSpatialTangent, keyObj.keyOutSpatialTangent);
            } else {
                prop.setSpatialTangentsAtKey(keyIndex, keyObj.keyOutSpatialTangent, keyObj.keyInSpatialTangent);
            }
            prop.setSpatialAutoBezierAtKey(keyIndex, keyObj.spatialAutoBezier);
            prop.setSpatialContinuousAtKey(keyIndex, keyObj.spatialContinuous);
            prop.setRovingAtKey(keyIndex, keyObj.keyRoving);
        }
        if (keyObj.inInterpolation == KeyframeInterpolationType.BEZIER || keyObj.outInterpolation == KeyframeInterpolationType.BEZIER) {
            if (reversed !== 2) {
                prop.setTemporalEaseAtKey(keyIndex, keyObj.inEase, keyObj.outEase);
            } else {
                prop.setTemporalEaseAtKey(keyIndex, keyObj.outEase, keyObj.inEase);
            }
            prop.setTemporalAutoBezierAtKey(keyIndex, keyObj.temporalAutoBezier);
            prop.setTemporalContinuousAtKey(keyIndex, keyObj.temporalContinuous);
        }
    }

    function getKeyObjCloner(prop, keyTime, numKeys) {
        var keyObj = {};
        var keyIndex = prop.nearestKeyIndex(keyTime);
        keyObj.value = prop.keyValue(keyIndex);
        keyObj.inInterpolation = prop.keyInInterpolationType(keyIndex);
        keyObj.outInterpolation = prop.keyOutInterpolationType(keyIndex);
        keyObj.inEase = prop.keyInTemporalEase(keyIndex);
        keyObj.outEase = prop.keyOutTemporalEase(keyIndex);
        keyObj.temporalAutoBezier = prop.keyTemporalAutoBezier(keyIndex);
        keyObj.temporalContinuous = prop.keyTemporalContinuous(keyIndex);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            keyObj.keyInSpatialTangent = prop.keyInSpatialTangent(keyIndex);
            keyObj.keyOutSpatialTangent = prop.keyOutSpatialTangent(keyIndex);
            if (prop.numKeys === numKeys) {
                if (keyIndex === 1) {
                    keyObj.keyInSpatialTangent = prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL ? [0, 0, 0] : [0, 0];
                }
                if (keyIndex === numKeys) {
                    keyObj.keyOutSpatialTangent = prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL ? [0, 0, 0] : [0, 0];
                }
                prop.setSpatialTangentsAtKey(keyIndex, keyObj.keyInSpatialTangent, keyObj.keyOutSpatialTangent);
            }
            keyObj.spatialAutoBezier = prop.keySpatialAutoBezier(keyIndex);
            keyObj.spatialContinuous = prop.keySpatialContinuous(keyIndex);
            keyObj.keyRoving = prop.keyRoving(keyIndex);
        }
        return keyObj;
    }

    function sortKeys(keys) {
        keys.sort(function (a, b) {
            return a - b;
        });
    }

    function getKeysArr(prop, keys) {
        var keysArr = [];
        for (var i = keys.length - 1; i >= 0; i--) {
            keysArr.push(prop.keyTime(keys[i]));
        }
        return keysArr;
    }

    function selectKeysAtTimes(prop, times, bool) {
        if (bool === undefined) {
            bool = true;
        }
        for (var x = 0; x < times.length; x += 1) {
            var keyIndex = prop.nearestKeyIndex(times[x]);
            prop.setSelectedAtKey(keyIndex, bool);
        }
    }

    function deleteKeysAtTimes(prop, times) {
        for (var x = 0; x < times.length; x += 1) {
            var keyIndex = prop.nearestKeyIndex(times[x]);
            prop.removeKey(keyIndex);
        }
    }

    function checkForRotoBezier(prop, maskBezier) {
        if (maskBezier === true) {
            prop.parentProperty.rotoBezier = true;
            maskBezier = undefined;
        } else if (prop.propertyValueType === PropertyValueType.SHAPE) {
            if (prop.parentProperty.rotoBezier === true) {
                prop.parentProperty.rotoBezier = false;
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    function getKeyTime(props, alt) {
        var smallestValue = props[0].keyTime(props[0].selectedKeys[0]);
        for (var i = 0; i < props.length; i += 1) {
            var prop = props[i];
            var keyIndicies = sortNumbers(prop.selectedKeys);
            if (alt !== 2) {
                var curKeyTime = props[i].keyTime(keyIndicies[0]);
                if (curKeyTime < smallestValue) {
                    smallestValue = curKeyTime;
                }
            } else {
                var curKeyTime = props[i].keyTime(keyIndicies[keyIndicies.length - 1]);
                if (curKeyTime > smallestValue) {
                    smallestValue = curKeyTime;
                }
            }
        }
        return smallestValue;
    }

    function getPropsWithKey(arr) {
        var props = arr.slice(0);
        for (var i = props.length - 1; i >= 0; i--) {
            if (!(props[i] instanceof Property) || props[i].canVaryOverTime === false || props[i].selectedKeys.length === 0) {
                props.splice(i, 1);
            }
        }
        return props;
    }

    function extrude(depthValue, acceptsLights) {

        var selLayers = selItems("layer");
        if (selLayers === undefined) {
            return;
        }
        var comp = app.project.activeItem;

        app.beginUndoGroup("3D Extrude");

        for (var i = 0; i < selLayers.length; i++) {

            var layer = selLayers[i];
            var layerName = layer.name;
            var layerPos = layer.property("position").value;

            var newNull = comp.layers.addNull();
            newNull.moveBefore(layer);
            newNull.name = "Controller [ " + layerName + " ]";
            newNull.property("position").setValue(layerPos);
            newNull.guideLayer = true;
            newNull.threeDLayer = true;
            var controllerName = "3DExtrude: " + layerName;
            var effController = putEFF(newNull, extrudeFFX, controllerName);
            effController.property(1).setValue([-25]);
            effController.property(5).setValue([30]);

            var precompobj = comp.layers.precompose([layer.index], layerName + " (3D Depth)", true);
            var preComp = comp.layers[newNull.index + 1];
            preComp.shy = true;
            preComp.parent = newNull;
            preComp.threeDLayer = true;
            preComp.collapseTransformation = true;

            precompobj.layer(1).threeDLayer = true;
            precompobj.layer(1).transform.position.expression = '[position[0] + ((index - 1) * comp("' + comp.name + '").layer("' + newNull.name + '").effect("' + controllerName + '")(3)/10), position[1] + ((index - 1) * comp("' + comp.name + '").layer("' + newNull.name + '").effect("' + controllerName + '")(4)/10), ((index - 1) * comp("' + comp.name + '").layer("' + newNull.name + '").effect("' + controllerName + '")(5)/10)];';
            var expoProp = precompobj.layer(1).property("ADBE Effect Parade").addProperty("ADBE Exposure2");
            expoProp.property("ADBE Exposure2-0003").expression = 'comp("' + comp.name + '").layer("' + newNull.name + '").effect("' + controllerName + '")(1)/20';

            precompobj.layer(1).materialOption.acceptsLights.setValue(acceptsLights);

            for (var k = 1; k < parseInt(depthValue); k++) {
                precompobj.layer(1).duplicate();
            }

            precompobj.layer(1).effect.property("ADBE Exposure2").remove();

        }

        app.endUndoGroup();

    }

    function changeInterpolationType(number, isType, isInType, isOutType, inTrans, outTrans) {

        var layers = selItems("layer", 0);
        if (layers === undefined) {
            return;
        }

        app.beginUndoGroup("Easing Keyframes");

        for (var i = 0; i < layers.length; i++) {
            for (var j = 0; j < layers[i].selectedProperties.length; j++) {
                if (layers[i].selectedProperties[j].canVaryOverTime) {
                    for (var k = 0; k < layers[i].selectedProperties[j].selectedKeys.length; k++) {
                        prop = layers[i].selectedProperties[j]
                        if (inTrans) {
                            if (isType) {

                                if (isInType == 1) {
                                    inType = KeyframeInterpolationType.LINEAR;
                                } else if (isInType == 2) {
                                    inType = KeyframeInterpolationType.BEZIER;
                                } else {
                                    inType = KeyframeInterpolationType.HOLD;
                                }

                            } else {
                                inEase = new KeyframeEase(0, number);
                            }
                        } else {
                            inType = prop.keyInInterpolationType(prop.selectedKeys[k]);
                            inEase = new KeyframeEase(prop.keyInTemporalEase(prop.selectedKeys[k])[0].speed, prop.keyInTemporalEase(prop.selectedKeys[k])[0].influence);
                        }

                        if (outTrans) {
                            if (isType) {
                                if (isOutType == 1) {
                                    outType = KeyframeInterpolationType.LINEAR;
                                } else if (isOutType == 2) {
                                    outType = KeyframeInterpolationType.BEZIER;
                                } else {
                                    outType = KeyframeInterpolationType.HOLD;
                                }
                            } else {
                                outEase = new KeyframeEase(0, number);
                            }
                        } else {
                            outType = prop.keyOutInterpolationType(prop.selectedKeys[k]);
                            outEase = new KeyframeEase(prop.keyOutTemporalEase(prop.selectedKeys[k])[0].speed, prop.keyOutTemporalEase(prop.selectedKeys[k])[0].influence);
                        }

                        if (isType) {
                            prop.setInterpolationTypeAtKey(prop.selectedKeys[k], inType, outType);
                        } else {
                            if (!prop.isSpatial && prop.value.length === 3) {
                                layers[i].selectedProperties[j].setTemporalEaseAtKey(prop.selectedKeys[k], [inEase, inEase, inEase], [outEase, outEase, outEase]);
                            } else if (!prop.isSpatial && prop.value.length === 2) {
                                layers[i].selectedProperties[j].setTemporalEaseAtKey(prop.selectedKeys[k], [inEase, inEase], [outEase, outEase]);
                            } else {
                                layers[i].selectedProperties[j].setTemporalEaseAtKey(prop.selectedKeys[k], [inEase], [outEase]);

                            }
                        }
                    }
                }
            }
        }

        app.endUndoGroup();
        return;
    }

    function fixMotionValue(num) {
        num = parseInt(num, 10);
        if (isNaN(num) === true) {
            return 100;
        } else if (num <= 0) {
            num = 0;
        } else {
            if (num > 100) {
                num = 100;
            }
        }
        return num;
    }

    function getUserDataFolder() {
        if (!canWrite()) {
            return null;
        }

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

    function createResourceFile(filename, binaryString, resourceFolder, replaceExisting, binnary) {
        if (!canWrite()) {
            return null
        }

        if (replaceExisting === undefined) {
            replaceExisting = false;
        }
        var myFolder = new Folder(resourceFolder);
        if (!Folder(myFolder).exists) {
            myFolder.create();
        }
        var myFile = new File(resourceFolder + "/" + filename);
        if (myFile.exists && replaceExisting === true) {
            myFile.remove();
        }
        if (!myFile.exists) {
            if (binnary === undefined) {
                myFile.encoding = "BINARY";
            }

            myFile.open("w");
            myFile.write(binaryString);
            myFile.close();
        }
        return myFile;
    }

    function moveAnchorPoint(row, col, ignoreMasks) {

        var curTime = app.project.activeItem.time;
        var theLayers = app.project.activeItem.selectedLayers;

        if (row === 1 && col === 1 && ignoreMasks === 0) {
            var isCenter = true;
            var centerByAE = [];
        }
        for (var num = 0; num < theLayers.length; num += 1) {
            var theLayer = theLayers[num];
            if (theLayer.property("ADBE Transform Group").property("ADBE Position").isTimeVarying == 0 && isCenter) {
                centerByAE.push(theLayer)
            } else {

                var noMasks = true;
                if (ignoreMasks === true) {
                    noMasks = true
                } else {
                    if (theLayer.mask.numProperties !== 0) {
                        for (var i = 1; i <= theLayer.mask.numProperties; i += 1) {
                            if (theLayer.mask(i).maskMode != MaskMode.NONE) {
                                noMasks = false
                            }
                        }
                    }
                }

                if (noMasks) {

                    switch (row) {
                        case 0:
                            x = 0;
                            break;
                        case 1:
                            x = theLayer.sourceRectAtTime(curTime, false).width / 2;
                            break;
                        case 2:
                            x = theLayer.sourceRectAtTime(curTime, false).width;
                            break;
                        default:

                    }
                    switch (col) {
                        case 0:
                            y = 0;
                            break;
                        case 1:
                            y = theLayer.sourceRectAtTime(curTime, false).height / 2;
                            break;
                        case 2:
                            y = theLayer.sourceRectAtTime(curTime, false).height;
                            break;
                        default:

                    }
                    if (theLayer instanceof TextLayer || theLayer instanceof ShapeLayer) {
                        x += theLayer.sourceRectAtTime(curTime, false).left;
                        y += theLayer.sourceRectAtTime(curTime, false).top;
                    }

                } else {

                    var xBounds = Array();
                    var yBounds = Array();
                    var numMasks = theLayer.mask.numProperties;
                    for (var f = 1; f <= numMasks; f += 1) {
                        var numVerts = theLayer.mask(f).maskShape.value.vertices.length;
                        if (theLayer.mask(f).maskMode == MaskMode.NONE) {
                            continue;
                        }
                        for (var j = 0; j < numVerts; j += 1) {
                            var curVerts = theLayer.mask(f).maskShape.valueAtTime(curTime, false).vertices[j];
                            xBounds.push(curVerts[0]);
                            yBounds.push(curVerts[1]);
                        }
                    }
                    xBounds.sort(function (a, b) {
                        return a - b;
                    });
                    yBounds.sort(function (a, b) {
                        return a - b;
                    });
                    var xl = xBounds.shift();
                    var xh = xBounds.pop();
                    var yl = yBounds.shift();
                    var yh = yBounds.pop();
                    if (theLayer instanceof TextLayer || theLayer instanceof ShapeLayer) {
                        var xl2 = theLayer.sourceRectAtTime(curTime, false).left;
                        var xh2 = xl2 + theLayer.sourceRectAtTime(curTime, false).width;
                        var yl2 = theLayer.sourceRectAtTime(curTime, false).top;
                        var yh2 = yl2 + theLayer.sourceRectAtTime(curTime, false).height;
                        if (xl < xl2) {
                            xl = xl2
                        }
                        if (xh > xh2) {
                            xh = xh2
                        }
                        if (yl < yl2) {
                            yl = yl2
                        }
                        if (yh > yh2) {
                            yh = yh2
                        }
                    }
                    switch (row) {
                        case 0:
                            x = xl;
                            break;
                        case 1:
                            x = xl + ((xh - xl) / 2);
                            break;
                        case 2:
                            x = xh;
                            break;
                        default:

                    }
                    switch (col) {
                        case 0:
                            y = yl;
                            break;
                        case 1:
                            y = yl + ((yh - yl) / 2);
                            break;
                        case 2:
                            y = yh;
                            break;
                        default:

                    }
                }
                if (theLayer.anchorPoint.isTimeVarying) {
                    var theComp = app.project.activeItem;
                    theLayer.anchorPoint.setValueAtTime(theComp.time, [x, y]);
                } else {
                    var curAnchor = theLayer.anchorPoint.value;
                    var xMove = (x - curAnchor[0]) * (theLayer.scale.value[0] / 100);
                    var yMove = (y - curAnchor[1]) * (theLayer.scale.value[1] / 100);
                    var posEx = false;
                    if (theLayer.position.expressionEnabled) {
                        theLayer.position.expressionEnabled = false;
                        posEx = true;
                    }
                    var dupLayer = theLayer.duplicate();
                    var oldParent = theLayer.parent;
                    dupLayer.moveToEnd();
                    if (dupLayer.scale.isTimeVarying) {
                        dupLayer.scale.setValueAtTime(app.project.activeItem.time, [100, 100])
                    } else {
                        dupLayer.scale.setValue([100, 100])
                    }
                    theLayer.parent = dupLayer;
                    theLayer.anchorPoint.setValue([x, y]);


                    if (theLayer.position.dimensionsSeparated === false) {
                        
                        if (theLayer.position.isTimeVarying) {

                            var numKeys = theLayer.position.numKeys;
                            for (var k = 1; k <= numKeys; k += 1) {
                                curPos = theLayer.position.keyValue(k);
                                curPos[0] += xMove;
                                curPos[1] += yMove;
                                theLayer.position.setValueAtKey(k, curPos);
                            }

                        }else{

                            curPos = theLayer.position.value;
                            theLayer.position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]);

                        }

                    }else{

                        curPosX = theLayer.property("ADBE Transform Group").property("ADBE Position_0");
                        curPosY = theLayer.property("ADBE Transform Group").property("ADBE Position_1");

                        if (curPosX.isTimeVarying) {

                            var numKeysX = curPosX.numKeys;

                            for (var k = 1; k <= numKeysX; k += 1) {
                                curPos = curPosX.keyValue(k);
                                curPos += xMove;
                                curPosX.setValueAtKey(k, curPos);
                            }

                        }else{

                            curPosX.setValue(curPosX.value + xMove);

                        }

                        if (curPosY.isTimeVarying) {

                            var numKeysY = curPosY.numKeys;

                            for (var k = 1; k <= numKeysY; k += 1) {
                                curPos = curPosY.keyValue(k);
                                curPos += yMove;
                                curPosY.setValueAtKey(k, curPos);
                            }

                        }else{

                            curPosY.setValue(curPosY.value + yMove);

                        }

                    }

                    theLayer.parent = oldParent;
                    if (posEx) {
                        theLayer.position.expressionEnabled = true
                    }
                    dupLayer.remove();
                }
            }
        }
        if (centerByAE.length > 0) {
            doSelectLayers(theLayers, false);
            doSelectLayers(centerByAE, true);
            app.executeCommand(10312);
            doSelectLayers(theLayers, true);
        }
        return;
    }

    function keys(key) {
        var keyState = ScriptUI.environment.keyboardState;

        switch (key) {
            case "alt":
                return keyState.altKey;
                break;
            case "shift":
                return keyState.shiftKey;
                break;
            case "ctrl":
                return keyState.ctrlKey || keyState.metaKey;
                break;
            default:
        }

    }

    function doSelectLayers(layers, type) {

        try {

            for (var k = 0; k < layers.length; k++) {
                layers[k].selected = type;
            }

        } catch (err) {

            for (var k = 1; k < layers.length; k++) {
                layers[k].selected = type;
            }

        }

    }

    function addNullObj(alt, xMatrix, yMatrix) {
        if (xMatrix === undefined && yMatrix === undefined) {
            xMatrix = yMatrix = 0.5;
        }

        var curComp = app.project.activeItem;
        var selLayers = curComp.selectedLayers;
        var time = curComp.time;
        var x = [];
        var y = [];
        var z = [];
        var threeD = true;
        var newNull = curComp.layers.addNull();
        newNull.label = 9;
        newNull.property("ADBE Transform Group").property(1).setValue([50, 50]);
        newNull.inPoint = getFirstInPoint(selLayers);
        newNull.outPoint = getLastInPoint(selLayers);
        if (selLayers.length !== 0) {
            if (selLayers.length === 1) {
                newNull.name = "NULL " + selLayers[0].name;
            }
            var index = selLayers[0].index;
            for (var i = 0; i < selLayers.length; i += 1) {
                var layer = selLayers[i];
                layer.parent = null;
                if (layer.threeDLayer === false) {
                    threeD = false;
                }
                if (layer.index < index) {
                    index = layer.index;
                }
                var trans = layer.property("ADBE Transform Group");
                if (trans.property(2).dimensionsSeparated === true) {
                    x.push(trans.property(3).valueAtTime(time, true));
                    y.push(trans.property(4).valueAtTime(time, true));
                    z.push(trans.property(5).valueAtTime(time, true));
                } else {
                    x.push(trans.property(2).valueAtTime(time, true)[0]);
                    y.push(trans.property(2).valueAtTime(time, true)[1]);
                    z.push(trans.property(2).valueAtTime(time, true)[2]);
                }
            }
            x.sort(function (a, b) {
                return a - b;
            });
            y.sort(function (a, b) {
                return a - b;
            });
            z.sort(function (a, b) {
                return a - b;
            });
            var xMax = x[0];
            var yMax = y[0];
            var zMax = z[0];
            var xMin = x[x.length - 1];
            var yMin = y[y.length - 1];
            var zMin = z[z.length - 1];
            var xDiff = xMax - xMin;
            var yDiff = yMin - yMax;
            var zDiff = zMax - zMin;
            var newx = xMax - (xDiff * xMatrix);
            var newy = yMax + (yDiff * yMatrix);
            var newz = zMin + (zDiff * 0.5);
            if (threeD === false) {
                newNull.property("ADBE Transform Group").property(2).setValue([newx, newy]);
            } else {
                newNull.threeDLayer = true;
                newNull.property("ADBE Transform Group").property(2).setValue([newx, newy, newz]);
            }
            for (var i = 0; i < selLayers.length; i += 1) {
                selLayers[i].parent = newNull;
            }
            if (alt === 0) {
                newNull.moveBefore(curComp.layer(index));
            }
        }

    }

    function getFirstInPoint(layers) {
        var inPoint = layers[0].inPoint;
        for (var i = 1; i < layers.length; i += 1) {
            if (layers[i].inPoint < inPoint) {
                inPoint = layers[i].inPoint;
            }
        }
        return inPoint;
    }

    function getLastInPoint(layers) {
        var outPoint = layers[0].outPoint;
        for (var i = 1; i < layers.length; i += 1) {
            if (layers[i].outPoint > outPoint) {
                outPoint = layers[i].outPoint;
            }
        }
        return outPoint;
    }

    function selItems(items, msg, alt) {
        if (msg === undefined) {
            msg = 1;
        }
        if (alt === undefined) {
            alt = 0;
        }

        var comp = app.project.activeItem;

        if (msg) {
            if (!comp || !(comp instanceof CompItem)) {
                return alert("Please Select Composition First", scriptName);
            }
        }
        if (items === "comp") {
            return comp;
        }

        var layers = comp.selectedLayers;

        if (msg) {
            if (layers.length == 0) {
                return alert("Please Select at Least One Layer First", scriptName);
            }
        }
        if (items === "layer") {
            return layers;
        }

        var selProps = comp.selectedProperties;

        if (msg) {
            if (selProps.length == 0) {
                return alert("Please Select at Least One Property First", scriptName);
            }
        }
        if (items === "prop") {
            if (alt) {

                return getExpDrivenProps(selProps);

            } else {

                return selProps;

            }
        }

    }

    function expressionCode(type, io, num) {

        switch (type) {
            case "loop":
                if (num === undefined) {
                    num = 0;
                }
                var loopType = "Out";
                if (!io) {
                    loopType = "In";
                }

                var exp = "loopOut();";
                switch (num) {
                    case 1:
                        exp = "loop" + loopType + '("pingpong");';
                        return exp;
                        break;
                    case 2:
                        exp = "loop" + loopType + '("offset");';
                        return exp;
                        break;
                    case 3:
                        exp = "loop" + loopType + '("continue");';
                        return exp;
                        break;
                    default:
                        exp = "loop" + loopType + '("cycle");';
                        return exp;
                }

                break;
            case "bounce":
                var exp =
                    "\nn = 0;\nif (numKeys > 0) {\n    n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n > 0) {\n    t = time - key(n).time;\n    v = -velocityAtTime(key(n).time - 0.001) * elastic;\n    vl = length(v);\n    if (value instanceof Array) {\n        vu = (vl > 0) ? normalize(v) : [0, 0, 0];\n    } else {\n        vu = (v < 0) ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = 2 * vl / gravity;\n    tNext = segDur;\n    numberOfBounces = 1;\n    while (tNext < t && numberOfBounces <= bounceMax) {\n        vl *= elastic;\n\n        segDur *= elastic;\n        tCur = tNext;\n        tNext += segDur;\n        numberOfBounces++;\n    }\n   if (numberOfBounces <= bounceMax) {\n        delta = t - tCur;\n        inOutExp = vu * delta * (vl - gravity * delta / 2);\n        if (on_off == 1) {\n            value = value - inOutExp;\n        } else {\n            value = value + inOutExp;\n        }\n    } else {\n        value = value;\n    }\n} else {\n    value = value;\n}";
                return exp;
                break;
            case "elastic":
                var exp =
                    "\nn = 0;\nif (numKeys > 0){\n  n = nearestKey(time).index; \n  if (key(n).time > time){\n    n--;\n  }\n}\nif (n == 0){\n  t = 0;\n} else {\n  t = time - key(n).time;\n}\n\nif (n > 0){\n  v = velocityAtTime(key(n).time - thisComp.frameDuration/10);\n  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\n} else {\n  value;\n}";
                return exp;
                break;
            case "wiggle":
                if (io == 1) {
                    var exp =
                        '\nt = time % loopTime;\nwiggle1 = wiggle(freq, amp, 1, 0.5, t);\nwiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);\nlinear(t, 0, loopTime, wiggle1, wiggle2);';
                } else {
                    var exp =
                        '\nwiggle(freq,amp);';
                }
                return exp;
                break;
            case "marker":
                if (num == 1) {
                    var exp =
                        "n = marker.nearestKey(time).index;\nif(time < marker.key(n).time){ n=n-1;\n}\nif(n==0){ n=1\n}\nt=time-marker.key(n).time+thisProperty.key(1).time;\nthisProperty.valueAtTime(t)";
                } else {
                    var keyNum = io;
                    var exp =
                        "try{\n    if(marker.numKeys>1&&numKeys>1){\n    beginAnim=marker.key(1).time;\n    endAnim=marker.key(2).time;\n    keyStart=key(1).time;\n    keyStartN=key(" +
                        keyNum +
                        ").time;\n    keyEnd=key(" +
                        (keyNum + 1) +
                        ").time;\n    if(time>=beginAnim && time<=endAnim)\n    {if((time-beginAnim)>=(keyStartN-keyStart)){valueAtTime(keyStartN);}\n    else valueAtTime(keyStart+(time-beginAnim));\n    }\n    else if(time>endAnim)\n    {valueAtTime(keyEnd+(time-endAnim));}\n    else if(time<beginAnim) {valueAtTime(keyStart);}\n    else {value;}\n    }else value;\n}catch(err){value;}";
                }
                return exp;
                break;
            case "control":

                if (io === undefined) {
                    io = 1;
                }

                if (io == 2) {

                    var exp = "\n    xV1 = thisProperty.key(1).value[0];\n    xV2 = thisProperty.key(1).value[1];\n    yV1 = thisProperty.key(2).value[0];\n    yV2 = thisProperty.key(2).value[1];\n\n    if (yV1 >> xV1) {\n        fX = linear(value[0], xV1, yV1, nxV1, nyV1);\n    } else {\n        fX = linear(value[0], yV1, xV1, nyV1, nxV1);\n    }\n\n    if (yV2 >> xV2) {\n        fY = linear(value[1], xV2, yV2, nxV2, nyV2);\n    } else {\n        fY = linear(value[1], yV2, xV2, nyV2, nxV2);\n    }\n\n    [fX, fY]\n\n} catch (err) {\n    value = value;\n}";

                } else if (io == 3) {

                    var exp = "        xV3 = thisProperty.key(1).value[2];\n        yV3 = thisProperty.key(2).value[2];\n        isThree = true;\n    } catch (err) {\n        isThree = false;\n    }\n\n    xV1 = thisProperty.key(1).value[0];\n    xV2 = thisProperty.key(1).value[1];\n    yV1 = thisProperty.key(2).value[0];\n    yV2 = thisProperty.key(2).value[1];\n\n    if (yV1 >> xV1) {\n        fX = linear(value[0], xV1, yV1, nxV1, nyV1);\n    } else {\n        fX = linear(value[0], yV1, xV1, nyV1, nxV1);\n    }\n\n    if (yV2 >> xV2) {\n        fY = linear(value[1], xV2, yV2, nxV2, nyV2);\n    } else {\n        fY = linear(value[1], yV2, xV2, nyV2, nxV2);\n    }\n\n    if (isThree) {\n        if (yV3 >>xV3) {\n            fZ = linear(value[2], xV3, yV3, nxV3, nyV3);\n        } else {\n            fZ = linear(value[2], yV3, xV3, nyV3, nxV3);\n        }\n\n        [fX, fY, fZ]\n    } else {\n        [fX, fY]\n    }\n\n} catch (err) {\n    value = value;\n}";

                } else if (io == 4) {

                    var exp = "\n    nxV1 = controllerID(1)[0];\n    nyV1 = controllerID(2)[0];\n    nxV2 = controllerID(1)[1];\n    nyV2 = controllerID(2)[1];\n    nxV3 = controllerID(1)[2];\n    nyV3 = controllerID(2)[2];\n    nxV4 = controllerID(1)[3];\n    nyV4 = controllerID(2)[3];\n\n    xV1 = thisProperty.key(1).value[0];\n    yV1 = thisProperty.key(2).value[0];\n    xV2 = thisProperty.key(1).value[1];\n    yV2 = thisProperty.key(2).value[1];\n    xV3 = thisProperty.key(1).value[2];\n    yV3 = thisProperty.key(2).value[2];\n    xV4 = thisProperty.key(1).value[3];\n    yV4 = thisProperty.key(2).value[3];\n\n    if (yV1 >> xV1) {\n        fX = linear(value[0], xV1, yV1, nxV1, nyV1);\n    } else {\n        fX = linear(value[0], yV1, xV1, nyV1, nxV1);\n    }\n\n    if (yV2 >> xV2) {\n        fY = linear(value[1], xV2, yV2, nxV2, nyV2);\n    } else {\n        fY = linear(value[1], yV2, xV2, nyV2, nxV2);\n    }\n\n    if (yV3 >> xV3) {\n        fZ = linear(value[2], xV3, yV3, nxV3, nyV3);\n    } else {\n        fZ = linear(value[2], yV3, xV3, nyV3, nxV3);\n    }\n\n    if (yV4 >> xV4) {\n        fA = linear(value[3], xV4, yV4, nxV4, nyV4);\n    } else {\n        fA = linear(value[3], yV4, xV4, nyV4, nxV4);\n    }\n\n    [fX, fY, fZ, fA]\n\n\n} catch (err) {\n    value = value;\n}";

                } else {

                    var exp = "\n    firstKey = thisProperty.key(1);\n    secKey = thisProperty.key(2);\n\n\n    if (secKey.value >> firstKey.value) {\n\n        linear(value, firstKey, secKey, firstValue, secValue);\n\n    } else {\n\n        linear(value, secKey, firstKey, secValue, firstValue);\n\n    }\n\n} catch (err) {\n    value = value;\n}";

                }

                return exp;
                break;

            case "lockPos":

                var exp = "xValue = thisComp.width / 2;\nyValue = thisComp.height / 2;\n\n";

                return exp;
                break;

            case "hover":

                if (num === undefined) {
                    num = 1;
                }

                if (num == 4) {

                    var exp = 'var controllerID = thisComp.layer("' + io + '").effect("ColorHover");\n\nvxIN = controllerID(1)[0];\nvxOut = controllerID(2)[0];\n\nvyIN = controllerID(1)[1];\nvyOut = controllerID(2)[1];\n\nvzIN = controllerID(1)[2];\nvzOut = controllerID(2)[2];\n\nvaIN = controllerID(1)[3];\nvaOut = controllerID(2)[3];\n\nhS = controllerID(4);\nvS = controllerID(5);\n\ntry {\n\n    point = controllerID(7).transform.position;\n    shape = thisLayer;\n\n    a = shape.sampleImage(point, [hS, vS])[3];\n\n    xValue = linear(a, 0, 1, vxOut, vxIN);\n    yValue = linear(a, 0, 1, vyOut, vyIN);\n    zValue = linear(a, 0, 1, vzOut, vzIN);\n    aValue = linear(a, 0, 1, vaOut, vaIN);\n\n    [xValue, yValue, zValue, aValue]\n\n} catch (e) {\n\n    value;\n\n}';

                } else if (num == 3) {

                    var exp = 'var controllerID = thisComp.layer("' + io + '").effect("XYZHover");\n\nvxIN = controllerID(1)[0];\nvxOut = controllerID(2)[0];\nvyIN = controllerID(1)[1];\nvyOut = controllerID(2)[1];\nvzIN = controllerID(1)[2];\nvzOut = controllerID(2)[2];\n\nhS = controllerID(4);\nvS = controllerID(5);\n\ntry {\n\n    point = controllerID(7).transform.position;\n    shape = thisLayer;\n\n    a = shape.sampleImage(point, [hS, vS])[3];\n\n    xValue = linear(a, 0, 1, vxOut, vxIN);\n    yValue = linear(a, 0, 1, vyOut, vyIN);\n    zValue = linear(a, 0, 1, vzOut, vzIN);\n\n    [xValue, yValue, zValue]\n\n} catch (e) {\n\n    value;\n\n}';

                } else if (num == 2) {

                    var exp = 'var controllerID = thisComp.layer("' + io + '").effect("XYHover");\n\nvxIN = 0;\nvxOut = 100;\nvyIN = 0;\nvyOut = 100;\n\nhS = 50;\nvS = 50;\n\nvxIN = controllerID(1)[0];\nvxOut = controllerID(2)[0];\nvyIN = controllerID(1)[1];\nvyOut = controllerID(2)[1];\n\nhS = controllerID(4);\nvS = controllerID(5);\n\ntry {\n\n    point = controllerID(7).transform.position;\n    shape = thisLayer;\n\n    a = shape.sampleImage(point, [hS, vS])[3];\n\n    xValue = linear(a, 0, 1, vxOut, vxIN);\n    yValue = linear(a, 0, 1, vyOut, vyIN);\n\n    [xValue, yValue]\n\n} catch (e) {\n\n    value;\n\n}';

                } else {

                    var exp = 'var controllerID = thisComp.layer("' + io + '").effect("XHover");\n\nvIN = controllerID(1);\nvOut = controllerID(2);\nhS = controllerID(4);\nvS = controllerID(5);\n\ntry {\n\n    point = controllerID(7).transform.position;\n    shape = thisLayer;\n\n    a = shape.sampleImage(point, [hS, vS])[3];\n\n    linear(a, 0, 1, vOut, vIN);\n\n} catch (e) {\n\n    value;\n\n}';

                }

                return exp;
                break;

            case "anti":

                var exp = 'function Anticipation_Out(t, b, c, d) {\n  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n}\n\nfunction Anticipation_In(t, b, c, d) {\n  return c * (t /= d) * t * ((s + 1) * t - s) + b;\n}\nfunction Anticipation_InOut(t, b, c, d) {\n  if ((t /= d / 2) < 1)\n    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;\n  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;\n}\n\nfunction Anticipation() {\n  var n = 0;\n  if (numKeys > 0) {\n    n = nearestKey(time).index;\n    if (key(n).time > time) {\n      n--;\n    }\n  }\n\n  try {\n    var key1 = key(n);\n    var key2 = key(n + 1);\n  } catch (e) {\n    return null;\n  }\n\n  var dim = 1;\n  try {\n    key(1)[1];\n    dim = 2;\n    key(1)[2];\n    dim = 3;\n  } catch (e) {}\n\n  t = time - key1.time;\n  d = key2.time - key1.time;\n\n  sX = key1[0];\n  eX = key2[0] - key1[0];\n\n  if (dim >= 2) {\n    sY = key1[1];\n    eY = key2[1] - key1[1];\n\n    if (dim >= 3) {\n      sZ = key1[2];\n      eZ = key2[2] - key1[2];\n    }\n  }\n\n  if (Anticipation_Type == 1) {\n    val1 = Anticipation_Out(t, sX, eX, d);\n  }\n  if (Anticipation_Type == 2) {\n    val1 = Anticipation_In(t, sX, eX, d);\n  }\n  if (Anticipation_Type == 3) {\n    val1 = Anticipation_InOut(t, sX, eX, d);\n  }\n\n  switch (dim) {\n    case 2:\n      if (Anticipation_Type == 1) {\n        val2 = Anticipation_Out(t, sY, eY, d);\n      }\n      if (Anticipation_Type == 2) {\n        val2 = Anticipation_In(t, sY, eY, d);\n      }\n      if (Anticipation_Type == 3) {\n        val2 = Anticipation_InOut(t, sY, eY, d);\n      }\n      break;\n    case 3:\n      if (Anticipation_Type == 1) {\n        val2 = Anticipation_Out(t, sY, eY, d);\n        val3 = Anticipation_Out(t, sZ, eZ, d);\n      }\n      if (Anticipation_Type == 2) {\n        val2 = Anticipation_In(t, sY, eY, d);\n        val3 = Anticipation_In(t, sZ, eZ, d);\n      }\n      if (Anticipation_Type == 3) {\n        val2 = Anticipation_InOut(t, sY, eY, d);\n        val3 = Anticipation_InOut(t, sZ, eZ, d);\n      }\n      break;\n    default:\n  }\n\n  if (time < key1.time || time > key2.time) {\n    return value;\n  } else {\n    switch (dim) {\n      case 1:\n        return val1;\n        break;\n      case 2:\n        return [val1, val2];\n        break;\n      case 3:\n        return [val1, val2, val3];\n        break;\n      default:\n        return null;\n    }\n  }\n}\n\nAnticipation() || value;'

                return exp;
                break;

            case "line":

                var exp = '\n\nvar origPath = thisProperty;\nvar origPoints = origPath.points();\nvar origInTang = origPath.inTangents();\nvar origOutTang = origPath.outTangents();\nvar getNullLayers = [];\nfor (var i = 0; i < nullLayerNames.length; i++) {\n    try {\n        getNullLayers.push(effect(nullLayerNames[i])("ADBE Layer Control-0001"));\n    } catch (err) {\n        getNullLayers.push(null);\n    }\n}\nfor (var i = 0; i < getNullLayers.length; i++) {\n    if (getNullLayers[i] != null && getNullLayers[i].index != thisLayer.index) {\n        origPoints[i] = fromCompToSurface(getNullLayers[i].toComp(getNullLayers[i].anchorPoint));\n    }\n}\ncreatePath(origPoints, origInTang, origOutTang, ';

                return exp;
                break;
            default:
                return alert("Error : Wrong Value to Expression Code");
        }


    }

    function getStartTimeOffset(layer, type) {
        if (type === undefined) {
            type = 0;
        }
        if (type) {
            return layer.outPoint - layer.startTime;
        }
        return layer.inPoint - layer.startTime;
    }

    function arrangeLayersToTime(layers, time, type) {
        if (type === undefined) {
            type = 0;
        }
        for (var i = 0; i < layers.length; i += 1) {
            layers[i].startTime = time - getStartTimeOffset(layers[i], type);
        }
        return layers;
    }

    function arrangeLayerToTime(layer, time, type) {
        if (type === undefined) {
            type = 0;
        }
        layer.startTime = time - getStartTimeOffset(layer, type);
        return layer;
    }

    function arrangeKeysToTime(props, time) {
        var selProps = sortProperties(1, props);
        var keyTimes = [];
        for (var i = 0; i < selProps.length; i += 1) {
            keyTimes.push({
                prop: selProps[i].prop,
                times: []
            });
            var timeOffset = 0;
            if (selProps[i].times[0] <= (time + timeOffset)) {
                start = selProps[i].times.length - 1;
                condition = -1;
                inc = -1;
            } else {
                start = 0;
                condition = selProps[i].times.length;
                inc = 1;
            }
            var keyObjArr = [];
            for (var y = start; y !== condition; y += inc) {
                keyObjArr.push(getKeyObj(selProps[i].prop, selProps[i].times[y], selProps[i].times[0], time, timeOffset));
            }
            for (var y = start; y !== condition; y += inc) {
                moveKey(selProps[i].prop, selProps[i].times[y], selProps[i].times[0], time, timeOffset);
            }
            for (var y = start; y !== condition; y += inc) {
                keyTimes[i].times.push(setInterpolationsAtKeys(selProps[i].prop, keyObjArr[y]));
            }
        }
        selectKeys(keyTimes);
    }

    function getKeyObj(prop, keyTime, firstKeyTime, startTime, keyOffset) {
        var keyObj = {};
        var keyIndex = prop.nearestKeyIndex(keyTime);
        keyObj.value = prop.keyValue(keyIndex);
        keyObj.newTime = (startTime + keyOffset + prop.keyTime(keyIndex)) - firstKeyTime;
        keyObj.inInterpolation = prop.keyInInterpolationType(keyIndex);
        keyObj.outInterpolation = prop.keyOutInterpolationType(keyIndex);
        keyObj.inEase = prop.keyInTemporalEase(keyIndex);
        keyObj.outEase = prop.keyOutTemporalEase(keyIndex);
        keyObj.temporalAutoBezier = prop.keyTemporalAutoBezier(keyIndex);
        keyObj.temporalContinuous = prop.keyTemporalContinuous(keyIndex);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            keyObj.keyInSpatialTangent = prop.keyInSpatialTangent(keyIndex);
            keyObj.keyOutSpatialTangent = prop.keyOutSpatialTangent(keyIndex);
            keyObj.spatialAutoBezier = prop.keySpatialAutoBezier(keyIndex);
            keyObj.spatialContinuous = prop.keySpatialContinuous(keyIndex);
        }
        return keyObj;
    }

    function moveKey(prop, keyTime, firstKeyTime, startTime, keyOffset) {
        var keyIndex = prop.nearestKeyIndex(keyTime);
        var time = (startTime + keyOffset + prop.keyTime(keyIndex)) - firstKeyTime;
        if (timeToFrames(time) !== timeToFrames(keyTime)) {
            prop.setValueAtTime(time, prop.keyValue(keyIndex));
            keyIndex = prop.nearestKeyIndex(keyTime);
            prop.removeKey(keyIndex);
        }
    }

    function setInterpolationsAtKeys(prop, keyObj) {
        var keyIndex = prop.nearestKeyIndex(keyObj.newTime);
        prop.setInterpolationTypeAtKey(keyIndex, keyObj.inInterpolation, keyObj.outInterpolation);
        if (prop.propertyValueType == PropertyValueType.ThreeD_SPATIAL || prop.propertyValueType == PropertyValueType.TwoD_SPATIAL) {
            prop.setSpatialTangentsAtKey(keyIndex, keyObj.keyInSpatialTangent, keyObj.keyOutSpatialTangent);
            prop.setSpatialAutoBezierAtKey(keyIndex, keyObj.spatialAutoBezier);
            prop.setSpatialContinuousAtKey(keyIndex, keyObj.spatialContinuous);
        }
        if (keyObj.inInterpolation == KeyframeInterpolationType.BEZIER || keyObj.outInterpolation == KeyframeInterpolationType.BEZIER) {
            prop.setTemporalEaseAtKey(keyIndex, keyObj.inEase, keyObj.outEase);
            prop.setTemporalAutoBezierAtKey(keyIndex, keyObj.temporalAutoBezier);
            prop.setTemporalContinuousAtKey(keyIndex, keyObj.temporalContinuous);
        }
        var inInt = prop.keyInTemporalEase(keyIndex);
        return keyObj.newTime;
    }

    function sortProperties(order, props) {
        var propsAndTimes = getPropKeyTimes(props);
        propsAndTimes.sort(function (a, b) {
            var first = a.prop.getNum();
            var second = b.prop.getNum();
            return compareArrays(first, second);
        });
        if (order === 2) {
            propsAndTimes.reverse();
        }
        return propsAndTimes;
    }

    function selectKeys(arr) {
        for (var i = 0; i < arr.length; i += 1) {
            for (var x = 0; x < arr[i].times.length; x += 1) {
                var index = arr[i].prop.nearestKeyIndex(arr[i].times[x]);
                arr[i].prop.setSelectedAtKey(index, true);
            }
        }
        false;
    }

    function getPropKeyTimes(props) {
        var propsAndTimes = [];
        var emptyProps = [];
        for (var i = props.length - 1; i >= 0; i--) {
            if (props[i].propertyType !== PropertyType.PROPERTY || props[i].selectedKeys == undefined) {
                emptyProps.push(props[i]);
                continue;
            }
            if (props[i].selectedKeys.length > 0) {
                propsAndTimes.push({
                    prop: props[i],
                    times: getTimesFromKeys(props[i]),
                    roving: getRovingFromKeys(props[i])
                });
            }
            props[i].selected = false;
        }
        for (var i = 0; i < emptyProps.length; i += 1) {
            emptyProps[i].selected = false;
        }
        return propsAndTimes;
    }

    function compareArrays(arr1, arr2) {
        var len = Math.min(arr1.length, arr2.length);
        for (var i = 0; i < len; i += 1) {
            if (arr1[i] > arr2[i]) {
                return 1;
            } else {
                if (arr1[i] < arr2[i]) {
                    return -1;
                }
            }
        }
        if (arr1.length > arr2.length) {
            return 1;
        } else if (arr1.length < arr2.length) {
            return -1;
        } else {
            return 0;
        }
    }

    function getTimesFromKeys(prop) {
        var keys = sortNumbers(prop.selectedKeys, 1);
        var times = [];
        for (var i = 0; i < keys.length; i += 1) {
            times.push(prop.keyTime(keys[i]));
        }
        return times;
    }

    function getRovingFromKeys(prop) {
        var keys = sortNumbers(prop.selectedKeys, 1);
        var roving = [];
        if (!(prop.matchName === "ADBE Position" || prop.matchName === "ADBE Vector Position")) {
            return roving;
        }
        for (var i = 0; i < keys.length; i += 1) {
            if (prop.keyInInterpolationType(keys[i]) === KeyframeInterpolationType.HOLD || prop.keyOutInterpolationType(keys[i]) === KeyframeInterpolationType.HOLD) {
                continue;
            }
            if (prop.keyRoving(keys[i]) === true) {
                prop.setRovingAtKey(keys[i], false);
                roving.push(keys[i]);
            }
        }
        return roving;
    }

    function sortNumbers(arr, order) {
        if (order === undefined || order === null) {
            order = 1;
        }
        if (order === 3) {
            arr.shuffle();
        } else {
            arr.sort(function (a, b) {
                return a - b;
            });
            if (order === 2) {
                arr.reverse();
            }
        }
        return arr;
    }

    function timeToFrames(time) {
        var curComp = app.project.activeItem;
        return Math.round(time / curComp.frameDuration);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function haveSetting(key) { // Have Setting
        return app.settings.haveSetting(scriptName + version, key);
    }

    function saveSetting(key, value) { // Save Setting
        app.settings.saveSetting(scriptName + version, key, value);
    }

    function getSetting(key) { // Get Setting
        return app.settings.getSetting(scriptName + version, key);
    }

    function capButt(propVal, type) {

        if (propVal === undefined) {
            propVal = 1;
        }
        if (type === undefined) {
            type = 1;
        }

        if (type == 1) {
            var match = "ADBE Vector Stroke Line Cap";
        } else {
            var match = "ADBE Vector Stroke Line Join";
        }


        var selectProp = [];
        comp = selItems("comp");
        selectProp = [null];
        if (comp === undefined) {
            return;
        } else {
            if (comp.selectedProperties.length > 0) {
                for (var cb = 0, b = comp.selectedProperties.length; cb < b; cb++) {
                    var a = comp.selectedProperties[cb];
                    if (a.propertyGroup(2).matchName.search(/(ADBE Vector (Graphic)|ADBE Vector (Shape))/)) {
                        selectProp.push(a.propertyGroup(1));
                    } else {
                        selectProp.push(a[cb]);
                    }
                }
            } else {
                if (comp.selectedLayers.length > 0) {
                    for (var cb = 0, b = comp.selectedLayers.length; cb < b; cb++) {
                        selectProp.push(comp.selectedLayers[cb]);
                    }
                } else {
                    for (var cb = 0, b = comp.numLayers; cb < b; cb++) {
                        selectProp.push(comp.layer(cb + 1));
                    }
                }
            }
            app.activeViewer.setActive();
            for (var cb = 1, b = selectProp.length; cb < b; cb++) {
                propertyLoop(selectProp[cb]);
            }
        }

        function propertyLoop(cb) {
            if (cb.matchName == match) {
                cb.setValue(propVal);
            }
            if (cb.propertyType != PropertyType.PROPERTY) {
                for (var b = 1, a = cb.numProperties; b <= a; b++) {
                    propertyLoop(cb.property(b));
                }
            }

        }

        return;

    }

    function getLayerFromProperty(myProp) {
        while (myProp.parentProperty) {
            myProp = myProp.parentProperty;
        }
        return myProp;
    }

    function createIcons(iconsFolder) {

        createResourceFile("scriptLogo.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u008C\x00\x00\x00\x14\b\x06\x00\x00\x00_\u00F5\u00D5\x10\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x074iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T12:43:21+03:00\" xmp:MetadataDate=\"2020-07-27T13:10:05+03:00\" xmp:ModifyDate=\"2020-07-27T13:10:05+03:00\" dc:format=\"image/png\" xmpMM:InstanceID=\"xmp.iid:4bd3e817-6d09-d344-b5a7-2d943f81cc42\" xmpMM:DocumentID=\"xmp.did:ad9baebc-562a-b543-8fb7-12a4de7a4605\" xmpMM:OriginalDocumentID=\"xmp.did:ad9baebc-562a-b543-8fb7-12a4de7a4605\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ad9baebc-562a-b543-8fb7-12a4de7a4605\" stEvt:when=\"2020-07-27T12:43:21+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:995486bd-1fdf-e646-8574-d435906748d4\" stEvt:when=\"2020-07-27T12:50:18+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:4bd3e817-6d09-d344-b5a7-2d943f81cc42\" stEvt:when=\"2020-07-27T13:10:05+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> <photoshop:TextLayers> <rdf:Bag> <rdf:li photoshop:LayerName=\"motioner\" photoshop:LayerText=\"motioner\"/> </rdf:Bag> </photoshop:TextLayers> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>1\u00EFj\u00F2\x00\x00\x01\u00DDIDATh\u00DE\u00ED\u0099\u00D1\u008D\u0084 \x10\u0086m\u0081\x16l\u00C1\x16h\u00C1\x16l\u00C1\x16l\u00C1\x16l\u0081\x16l\u00E0\x7F\u00A0\x05[\u00E0^\u0086\u00CBd\x0E\x10\u00CE\u00DD\u00C4\u0084\u00D9\u00E4Ov\u0097\x11t\u00E6c\x18p\b!\f*U\u00AD\u00D4\t*\x05F\u00A5\u00C0\u00A8\x14\x18\u0095\x02S!\x00\x01\u0080\u00FB\u00BD\u0081\u00C4\x07\u0080\x01p\x01p\u0089\u00B6\x15\u0080\u00A3\u00F6\x00\u00E0\x04\u00B0\x010\u00CCf\u00A7\u00B6\u0092f\u00B2\r\u0085qN\x1A\u00E7\u00A2\u00EFk\u00E6~\u0093}P\u009B\x03\x10\x12\u00F69\u00ED\u00F2Z!\x0F\u00E0\x000\x0E\u00C3\u00D0\r0\x01\u00C0\\\x00f\u0097A \u0088N\x01\u00C9\u00C6\u009Cz\x01\u00B0dk)\u00E0Q\u00D1\u00D1\u00FC\u00BF)\x15\u00EC\u00C28'\u00EBg\u00CC\x00\u00B06\x00#\u00EF'\u00CA&\u0080\u00E1\u00ED\x07{\u00DE\u00A9'`<\u00CF\n\u00CCI\x13\u00B3\u00E1\u0081\u008C\x01[2\u00D7\u00C4L06f\u0080\u00DC8s\u00C2v\u008E \x152\u0086\u00AD\x04&y?w\u00D7\n\x1F\u00B9^\u0080\u0089\u00CB\u00C9\u0096q\u00D2\u00C5\u009D\u00CA\x02\u00B5\x16\u009CkeJo\x05\u00A6r\u009CU\x02\u00C5&@\u0084\u00D6|\x13\x18\x0Ev75\fK\u00ADcb\x06/\"\u0090\x7Fl3N\u00F4\x00\u00FC\x03`n\u00C7\x010\u0092\u00CD!\u00FB`\u00D0:\x05\u00E6\u00F3\u00C0\u008C\u00BC\u00B0\u00A5\u00DA\u00C1\u00C7t/\x02\u0099u\\e\n\u00AF\x05\u00A6v\x1C\t\x05\u00EFc\u00E3\u00D9\u00B3\u00B5\u00E8\u00D5%\u00A9\u00B0K\u00E2\u00E9\u009D9z\u00FA\u00CF\u00CC\x7FC\u0086I\x14\u00AB\u00B6\u00B5\u00E8M\x01#l\u00F6\x1E\u008B^\u00C7~{\u0092\u00DCR\u00BE\u00BD\u0086Y\n\u00C0\x18V\u00CF\u00F8\u00A7KRBW\u009CX=\x02c\u0099\x13L\u00C5\u00EE\u00E5\u00AD\u00BB$\u0097\x018|\u00B2\u0086\u0091\u00C0vypG\u00CB\u00D1|\x13\u00C8\u00EAs\u0098\u0087\u00C0\x18\u0096\u00F1Z\u00CEa\\!\x1B\u00B5\u009C\u00C3,\x155L|\u00E6IOz\u00EB\u0082P<\u00E9}\x02\u00CC\x0BNz}\x050\x11j\u00AF\u00EF\u0092T\u00FA.I\u00A5\u00C0\u00A8\x14\x18\u0095\u00EA^?\u00FF\u00D4+\x0F\u00AC\u00A4D2\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("quickNoteIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DDiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T12:25:10+03:00\" xmp:MetadataDate=\"2020-07-27T12:25:10+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:2bb5d83f-4731-2b40-acae-be7db139f976\" xmpMM:DocumentID=\"xmp.did:ccb0d77f-baf4-c94b-ae7c-dd556e5407d9\" xmpMM:OriginalDocumentID=\"xmp.did:ccb0d77f-baf4-c94b-ae7c-dd556e5407d9\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ccb0d77f-baf4-c94b-ae7c-dd556e5407d9\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2bb5d83f-4731-2b40-acae-be7db139f976\" stEvt:when=\"2020-07-27T12:25:10+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00E1\u00DC\\\u0083\x00\x00\x00\u00EAIDATH\u00C7\u00ED\u00D5\u00AFJ\u00C4A\x10\x00\u00E0_\u00D0\x0B\"\u0088Q\x0FD\u008C\x06\u00E3\x1D\u00FA\x18\n\u0082h\u00BB\u00AE\x0FqI\u00F0\u00AAv1+\u00FEI\u0082O >\u00C0\x07\u00F7\x04b7\u009C\u00DCZ6\u00FC\u00D8 \u00A8\u00B3\x06\u00B9\u00B0a\u00B7|3\u00CC\u00ECL\u0093Rjj\u009Ff\u0086\u00FC\t\u0082>\u00BA\u00D5\x10\u00EC\u00E3\x1A+U\x10\u00EC\u00E0\x15\u00F7\u0098\x0BG\u00B0\u00891\x12\u00CE\u00C3k\u00825<g a\x18\u008A`\t\u008F- \u00E18\f\u00C1\x02n\n`\u0082\u00DD\x10\x04\x1D\\\x16@\u00C2;\u00CEp\u0088\x01\u008E\u00D0\u00FB6\u0082u\u009C\u00B6\"\u009F`\u009A\u00EF\u00D3\u00D6[\u00C2\b\x1B?Az9\u00C2A\u008Ex\u00943(\u00B3\u00BAB'\u00AA\u00BB\u00F6\u00F0Q\x00wX\u008Cl\u00E1\u0093\x02x\u00C2r\u00F4?\x19\u00B6\u0080\u0097\u00AFj\u00F0\x1B\u00E4\"\x03cl\u0085Oa\u00CC\u00E3\x01o\u00D8\u00AE2\u00EA\u00B1\u008A[\x1CT\u00DB'\u00E8\u00A2?[\u00BF\u00FF\x07\u00F9\x04\u00F3\u00CA^]I\u00E86\u0090\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("scriptLancherIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x15iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-02-15T20:31:46+03:00\" xmp:ModifyDate=\"2021-02-15T20:32:40+03:00\" xmp:MetadataDate=\"2021-02-15T20:32:40+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:20e14f59-6252-5c4f-9bf5-843ea5853a6c\" xmpMM:DocumentID=\"xmp.did:20e14f59-6252-5c4f-9bf5-843ea5853a6c\" xmpMM:OriginalDocumentID=\"xmp.did:20e14f59-6252-5c4f-9bf5-843ea5853a6c\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:20e14f59-6252-5c4f-9bf5-843ea5853a6c\" stEvt:when=\"2021-02-15T20:31:46+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00CCM*\u00E0\x00\x00\x01\u00EDIDATH\u0089\u00ED\u00D5\u00BD\u008F\u008DA\x14\x06\u00F0\u00DF\u00E5Z\u009F\u0091\u00F8\u008A[P\u0090\u0098D\u0087(\u0084FhD\u00A9\u0091\u00CDF\u00C2RH\u00C4\u00BF VB4\u00FE\u0080\u00ADd\x0B\u00D9\x12\u008DD\b\u0089J\u00D4\x14N\u00A3 l\x10\u0089\x156\u00D7\u00EEZ\u00C5;o\u00F6\u00BA\x1F\u00AF{\u00C9\u00AA<\u00CDy\u00CF3s\u00E6\u00993\u00E7\u00CC\u00BC\u00B5\u0085\u0085\x05K\u008DeK\u00AE\u00F0_dP\u00D4\u00BB\u0091\x11q\x1EW\u00B0\x05?P\u00D5\x1D5\u00C5f\u00DF\u00E3RJi\u00BCcB\u00B7\u00EE\u008A\u0088\u008F\u00F8\u0082\x07hb-f\u00F2\u00A6V\u00E6\u00EF\u00EF-\x1B]\u008D\u00C3X\u009FR\u00DA\u00DC\u00BE^\u00AF\u00E3\u00DA\u0084\u0087\u00B8\u0081\u00E7\u00B8\u0088g\u0098H)\u009D\u00C6\u00FD,2\u0083\u00C7)\u00A5Q<\u00C9q\x1D\u00A8\u00AA\u00C9W\x1C\u00C4Y$\u009C\u00C2\u00D1<v\b\u00A38\u00973\u0080\u00F9^\x0Bu\u00ADI\x0E\u00D8\u008Eq\u00BC\u00C6g\\\u00C3tD\u00EC\u00CCY\u00BEP\u00D4j*s\x1Bz\t\u00F5\x12\u0099\u00C61\u00EC\u00CF\u0081\u00F5l\u00CB\"\u00CF\u00B5\u00F9u\u00C5QM\x0F\"R\u00C7\x07<\u00CD\u00BB\u00AD\u00B5dX\u00FA\u00CB3W\u00FA\x07\u00B0q\x10\u0091u\u00B8\u008B3%\u0091R\u009A\u008B\u0088m8\u008E{)\u00A57\x11\u00D1\x1A\x7F\x13#\u0083\u0088\u00C0|Ji\u00AEt\"b\x17\u00EE(\u009A\u00E0eD\u009CH)E\u00CBx\u00CF\u00C2WuWyD\"b\u0095\u00A2\u00F0+p\x12C\u00B8\u009A\u00F9\u008E\u00F9\u0083\u0088\u00B4b+\u00F6*\n\u00FE-\u00DB=\u0099\u00FF-\u00FA\x15\x19\u00CAv7ng[k\u00E1\u00FFH\u00A4=\u00F5\u00A6\u00C5;P\x1E\u00D1|\u00E6\u00AB\u00E2*E\u009A~m\u008A}h\u00B4\u00CDid\u00BED]\u00F1\u00CC\u00F4-2\u0086\u00B7\x10\x11C\x18\u00CE\u00FC\x14\u00DEe\x0B\u00C3y\\\u009E?\u00D6m\u00B1^-|\x1Dk\u00F2\u00F7,.(^\u00E2\x1D\x16/\u00DF+\u00C5\u00FB6\u009B\u00E7]V4E\x07\u00BA>\u00F5\u00DD\x10\x11\r\u00DC\u00C2\x11<\u00C2HJi\u00AA:\u00AA@\u00D5el\u00C7'L*~d\u0093\u00D9\u00EF\x0B}g\u00F27\u00F8'\u00FF\u00F8\u009F\x16\u0097\u008FZ%\u0098\u00E5\x16\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("scriptsFolderIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x15iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-02-15T21:05:32+03:00\" xmp:ModifyDate=\"2021-02-15T21:06:23+03:00\" xmp:MetadataDate=\"2021-02-15T21:06:23+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:d3f1e317-47fd-1a41-82ff-accbe7671060\" xmpMM:DocumentID=\"xmp.did:d3f1e317-47fd-1a41-82ff-accbe7671060\" xmpMM:OriginalDocumentID=\"xmp.did:d3f1e317-47fd-1a41-82ff-accbe7671060\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:d3f1e317-47fd-1a41-82ff-accbe7671060\" stEvt:when=\"2021-02-15T21:05:32+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x0F\u00C1.\f\x00\x00\x00\u00AEIDATH\u0089\u00ED\u00941\x0E\u00C20\fE_\x023\u00C7\u00F0\u0080z\x01.\u00C3\u00C2\u00C6%`\u00E1\x060W\u00E2Jl^Y\x11\u0088\x03\u00D00\u00D0\u0081:\u00A5PU\u0091P\u00957~\u00CBz\u008E\u00E2\u00C4\u0085\x10H\u008DOn\u00C8\u0092\u00BF\u0094Lm\u00A0\u00AAk`\x03\u00CC\u0080\u00AA\u008E'\u00C0\r\u00D8\u008B\u00C8\u00AE\u00AF\u00C4\u00D9\x15V\u00D5\x13Pt\u00F4\x1C\u00813\u00E0L\u00EE\u0081\x0BP\u008A\u00C8\u00F5\u00BD\x10\u009D\u0084\u00D7\u00D4],\u00BF\u00D4\u00E7\u00C0\u00CA\u00DA-UK\u00D6\u0087\u0085\rR\\|4\u00E4xV8K\x06K\u0086\u008A\u00A3\u00FE\x14\u00EF\u00E4a\u0083\u00B6\x17\x7F\x00\u00B64\u00FF\u00AE_\u00F0\u00C0\u00BD\u00EEo\x10\u00FD])\x18\u00F7ve\u00C9G\u009E\x11\x02 \u00F8\x15\u00D4\u0080t\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("screenshotIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x15iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-02-15T14:53:05+03:00\" xmp:ModifyDate=\"2021-02-15T14:54:22+03:00\" xmp:MetadataDate=\"2021-02-15T14:54:22+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:39995393-f1c1-9242-81dd-d8cf60ef9699\" xmpMM:DocumentID=\"xmp.did:39995393-f1c1-9242-81dd-d8cf60ef9699\" xmpMM:OriginalDocumentID=\"xmp.did:39995393-f1c1-9242-81dd-d8cf60ef9699\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:39995393-f1c1-9242-81dd-d8cf60ef9699\" stEvt:when=\"2021-02-15T14:53:05+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x1FO\u00D6>\x00\x00\x01\u00C8IDATH\u0089\u00ED\u00D4;hTQ\x10\u00C6\u00F1\u00DF\u00EA\u008A\u00C6X\x18+\x0B\u00EB\u00A9DmD\u00D1X\u0088\u0085MT\x10\x0B+\x0B_`\u009BB\x11\u0082\u00D8\b\u0082\u00C1NEE0(j\u00A5 )\u0085 D0h\x11\u00C5j\u008A\x04\u00C5\u0080\x16\n\u00E2c\u0085\x18b\u00B1'\x18\u00E2]\u00D8-B\u009A\f\\\u00EE\u00CCy\u00CC\u00FF~s\u00CF\u0099\u00DA\u00EC\u00EC\u00AC\u00C5\u00B6\x15\u008BNX\u0086tj\u00F5\u00AA\u00C1\u00CC\u00BC\u0082u\x11q&3\x1Fc+z\u00B1\x17\u00B7p\x1A#\x18\u00C5\u009B\u00888\u009C\u00997\u00F0=\"\u00CE\u00B6\x05A7\u00C6\u008B?\u0082\t40\u0089\u0087\u00E5\u00DD\u00C0\x13\u00BC/\u00EB\u00C6\u00B1\u00A5*Ym\u00C9\u008Epf\x0Egf\x7F'\u00892\u00B3?3\u0087\u00AB\u00E6Z\u0095k3\u00B2E\u00B2\x1El(\u00E1tD|(\u00FE\u00A6\u00B2\u00AFmH/~U\x00\u00BA0\u00A4y\x10j\u00F8\u0096\u0099\u00C7#\u00E2\x15.\u00E2Z\u00A7\u0090I\u008Cef7\u00FA\u00B0\x1A\u00FBp\x00/\u00F0\x19\u00870TN\u00E3\x1F<\u00EB\x04r\x07\x0F0\u0086s\u00E5\u0099\u00C1\x1A\u00BC\u00C4\u00FE\u00A2\u00F4\x12\u00CE\x17\x05u\u00BC\u00C6\u00AEv!'\u008A\x12\u009A\u00A5i\u00E02>\u00E1yD\u00FC\u00CC\u00CC:.\u00E0-\u00D6\u00E2\x14\u00B6w\u00A2d\u00D4\u00BF\x7FR\u00C3\x17\u00DC\u008B\u0088\u00A9\u00CC\u00EC\u00C9\u00CC\u00DBX\u008F\u00AB\x11\u00F1\b2s7vV%k\u00D5VF1P\u00FC\u0099\u00B2\u00AE\u00AB\u00C4Gq\x12G0\u0090\u0099\u00AB\u00E6}p\u00E5\u00A5k\x05y\u0087\u008F\u00F3\u0094\u00CC\u00C1`\n\u00BFK<\x11\x11\u00D3e\u00BC\u00E5\u00AD\u00AE,WD\u00F4\u00CD\x0BW.\u0098{\u009A\u0099\u00C74\u00EF\u00C5\u00DD\x05[k*\u00ACU\u0083\u00BC\u00AE\u00D9\u00F8nb\x1A\x1B1\u0098\u0099_\u00CB\u009EFQ2\u0098\u0099s\u0089\u00F7h*l\x0F\u0082\x1F\u00D8V\u00FC\u00FB\u00D8\u0081\u0083\u009A\u00E5]X\u00969HC\u00B3C\u00FFgK\u00D7 \u0097!K\n\u00F9\x0B\u00A5?\u009Bc\u0092u\u00FA1\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        // createResourceFile("NAEM1.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T12:41:09+03:00\" xmp:MetadataDate=\"2020-07-27T12:41:09+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:bb4a102c-d731-cf46-b318-06d06538aee5\" xmpMM:DocumentID=\"xmp.did:bb4a102c-d731-cf46-b318-06d06538aee5\" xmpMM:OriginalDocumentID=\"xmp.did:bb4a102c-d731-cf46-b318-06d06538aee5\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:bb4a102c-d731-cf46-b318-06d06538aee5\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>{>\u00AC\u00E2\x00\x00\x01oIDATH\u00C7\u00ED\u00D5=H\u00D6Q\x14\u00C7\u00F1\u00C7\u00C7\u0097P7C\u00D3\u0084\b\u00A4\u0087\x14\x12\u00C1hpks\u00B4\u00C1\u00DE\x06wEB\n\\\x1Bz\u00DAl\x12|\x01[\u008A\u00A2)(Z\x1B\x1C\u008C\u0090\u00C0P\x1C>DC\u00D2T)\r\tB\u00E9\u00BF\u00E5\bw+\u00FD\u00FFm\b\u0087\x0B\u00F7\u00FC\u00EE\u00E1|\u00EF\u00BD\u0087\u00DF\u00BD\u00A5,\u00CBJG=J\u00C7\u0090\x7F\x06\u00C1U|\u00C5\u00ABB!(\u00E3\nna\x05Y\u008C{\x18GG\x11\u0090^\u00ECF\u00E1M\u00CCa1\u0081M\x15\x01i\u00C3R\x14\u00BC\u008E\x1At&\u00A0\u00E1\" \u00F5x\u0084mt'\u00FA\u00C3\u0080\u00F4\x1C\x18\u0082\u00B3\u00E8\u00C2\u0089\u0088\u00BB\x03\u0090a\x06\x17q\x03\u00DFB\u00AB\x1E\x06\u00B2\u008C\u00F7\u00E8\u008B\u00F8\x14^\u00E3s\u00D2\u0097\f[\u00F8\u0088\u009B\x7F\u0084\u00C4\x1D\u00D7\u00A1\t\x13IC\u009F\u00A2=r\u00CE\u00E0<\u00A6cm\x03\x17p\x0E\u00E5\u00BF\u0081T\u00B1\x16'\u00D8\u00DF\u00E9\x17\u00EC\u00E1\x03\u00DE\u00E1y\u00E4v\u00E1>F\x0E\u00E4\u0093\u00A4x\u0086y\u009C\f\u00FD\x0EvB\u00FF\u0084\u00FEC;\x1E\x03\u00F8\u00897hD\x1F\x06cm\x01\u00BFp;\u00D7\u00B3\u0082\u00D3Qh6\u00E2'X\u008F\u00F9X\u009Cf(/\u00E4r8\u00FA-Z\u00D1\u0082J\x02\u00DC\u00C3$\x1A\u00F2@$=y\u008C\x1ETp7\u00D1\u00BF\u00E3R\x1E\u00C8(^\u00E2E\x14\u00DC\u00C5\u008F\u0098/\u00E1\x19fQ\u009F\x07RFmx\u00E5Z\u00B2\u00FB\x07h\u008D\u009C\u00E6B\u00FF\x13\u00AC\u0086?z\u008F\u00BF\u00DF\u00FF\x07\u00F2\x1Bu\x16`\u00D6\x1E\u0081\x17 \x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("extrudeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00A8iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:37:09+03:00\" xmp:MetadataDate=\"2020-07-27T14:37:09+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:5770c3ec-6bb0-9d42-874c-b50f0d819b0b\" xmpMM:DocumentID=\"xmp.did:f1a642ef-5bc5-fe4b-9e2f-558dc83b8d0d\" xmpMM:OriginalDocumentID=\"xmp.did:f1a642ef-5bc5-fe4b-9e2f-558dc83b8d0d\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:f1a642ef-5bc5-fe4b-9e2f-558dc83b8d0d\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:6585b921-eac2-db4a-bf38-883b1d56edfe\" stEvt:when=\"2020-07-27T13:39:07+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:5770c3ec-6bb0-9d42-874c-b50f0d819b0b\" stEvt:when=\"2020-07-27T14:37:09+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>g4\u00B2\u00FF\x00\x00\x01kIDATH\u00C7\u00ED\u00D5\u00BDJ\\A\x18\u00C6\u00F1% \u0088\u008A`g\u009A\u00A0\u00A0\u00897b\u0091+\u00C9\x1D\u00E4\x06\u00C4^,\u00A2\u00B2\u00EB\u00BAj!F\u0082\nj#A,\x02\x01;A\u00C9\u00CF/D\u0088\u008D\x16\x12Ep\u00D9\u00DDc\u00F3\u00AE,\u008B\x1A&b\x11\u00D8\u00E2a\u0098\u00C3\u0099\u00F9\u00CF3\u00EF\u00C7\u00E4\u00B2,\u00CB\u00BD\u00B6r-\u00C8\u00FF\x01A]\u009D\u0098D\x19UT\u009AT\u00C5\x1D.p\u0085\u00CDTH7\u00E6\u0090\u00E1;\n(5\u00A9\u0080\x05\u00D4\u00E2\u00BF?)\u0090.\u00CC\u00C4\u00C2\u00E9p\u0094{Do\x02\u0096\u0085\u00AB\u00CB\x14\u00C8\u0097X\u0098a\x1B\u00ABXo\u00D2*~\u0086\u008BY,\u00A2\u009C\x02\u00B9\u00C2\r\u008Ep\u0082\u00B3&\u009D\u00E2<\x0E\u00F1\x03m\u00E1\u00B8\u0096\x02\u00A9`\x05\x1F\u00F0>\u00C6F\r`\x18\u00BF\u00B1\x14W7\u009B\n\u00C9P|\"\x0Eu\u00BD\r\u0097\u00CB\u00FF\n\u00A9a\fS8\u00C4n\u00C4\u00E1$\u00E6\u00CB\u00F8\u0084\u00FD\u0097B\u00A6\u00D1\x1F\u0080-\u008C\u0086\u00C3\u008F\x18\u00C7e\u00C4n\u00F1%\u0090\x02\x061\x1F\x1B\u00EEEQ\x0E\u00E1s\x14\u00E1m\x03\u00A4\u0088,\x05R\u008D4\u009E\u00C2\x0E6\u00B1\x16N\u00CE\"uG\u00F0\x0B_\u00D1\x11n+\u00A9Nf\u00D0\u0083w\u00B1I;z\u00D1\x17\u00DF\u00FBq\x10\u00DD \x1F\x07\u0098L\u0085\u0094\u00FE\u0092]}\x01\u00A9\x17m\t])\u0090;\x1C\u00C7=\x17\x1F\u00E9Yy|\u00C3u\x03\u00A0\x1BI]x#\u0082Z}\u00A6\u00FB\u0096#\u00BB&\x1A{[\u00EBelA\x1Et\x0FG\u00A7n\u0086\u00A3\u00E7\u00A7O\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("lockIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DDiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:15:10+03:00\" xmp:MetadataDate=\"2020-07-27T14:15:10+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:88cfb4fc-0351-6a43-aaeb-4414f201e075\" xmpMM:DocumentID=\"xmp.did:c4b940e3-c8f7-524b-944e-c9c5bf761314\" xmpMM:OriginalDocumentID=\"xmp.did:c4b940e3-c8f7-524b-944e-c9c5bf761314\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:c4b940e3-c8f7-524b-944e-c9c5bf761314\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:88cfb4fc-0351-6a43-aaeb-4414f201e075\" stEvt:when=\"2020-07-27T14:15:10+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x7Ft@\u00DF\x00\x00\x013IDATH\u00C7\u00E5\u00D5\u00BD+Fq\x18\u00C6\u00F1\u00C7\"$\u00E4\u008FP\x16\u00D9\u00AD&/\x13\x7F\u0080\u008DX)\u00B2(\x7F\x00\u00832\u00B1\u00CBN&Y\t\u00B1},\u00DE\u00F2\u00F2\fLO\u00F2\u00DA\u00B1\u00DC\u00EA\u00E9tH\u00E7<\x06\fWw\u00F7u\u00FD:\u00DF\u00BA\x7F/\u00A7\u0094$I\u00E9\u00A7U\u00FA\u00FB\x10T\u00AB\x15\x13\u00D8\u00C3\rv1\u008E\u0096\u00EAuE \u008DX\u00C5\x0B\u009E\u00F1\x10\u00F5\x05+\u0091\x17\u0086,#\u00C1\x1Az\u00D0\x1Eu=\u00FC\u00A5\u00A2\u0090n\u00BCb\x03\u00F5\u00A9\x11\u00D6c\x13o\u00E8*\x02\u0099\u00C2\x13\u0086R\u0080\x0F\r\u00C7\u00E8&\u008B@\x16\u00F1\u0088^4g\u00A87\u00F2\u00C5\u00BC\u0090\x11\u00DC\u00C6\u00DCOq\u0084\u00E3*\x1D\u0085\u009F\u00C4\u0089\x1B\u00C9\x03\u00A9\u00E0\f[\u00D8\u00C6N\u0086\u00B6#?C%\x0F$\u00C1|\u00DC\u0085V\u00B4E\u00CD\u00EA\u00E7\u0091\u00E4\u0085L\x7F\u00B2\u00E1iM\x17\u0081\u00CC\u00A6>\u00D6\u008F\x05\u00F4\u00A5\u00FC\u00D9ZA:p\x1D\u00FEU\u00F45\u0087t\u00E2\"\u00FC\u00F3\u00E8k\x0E\u00A9\u00C3`\u00BCW\x03\u00D1\u00D7\x042\u00F3\u00CD\u008D\u009F)\x02\u0099CC\u00BC\u00B4M\x19j\u008C|./\u00E4\x1Ee\u00EC\u00E3\x00\u0087\x19:\u0088\u00BC\u008C\u00BB<\u00901\u009C\u00C4\u0089\u00BA\u00FCB\u00D7\u00B1n\u00F4\x1F\u00FF\u00E3\x7F\x1D\u00E4\x1D\u00C7\u00EFH\u00EC\u00E82\u00CC\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("linkIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:38:48+03:00\" xmp:MetadataDate=\"2020-07-27T14:38:48+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:160c3119-c9c1-c649-8148-bbc86917eed7\" xmpMM:DocumentID=\"xmp.did:160c3119-c9c1-c649-8148-bbc86917eed7\" xmpMM:OriginalDocumentID=\"xmp.did:160c3119-c9c1-c649-8148-bbc86917eed7\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:160c3119-c9c1-c649-8148-bbc86917eed7\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00A3qz\x19\x00\x00\x00\u00E5IDATH\u00C7\u00ED\u00D4=\x0E\u00820\x18\x06`\u00823a`\u00D0\u00CD\u0095D\u00DC9\u0087\u00A2\f.\u00E2e\u00D4s0x\x01\x17'b<\x05\t\u008B\u0090\u00E8\t\u00FCI\u00D0\u00D4\u0097\u00E4\x1D\x1A\x06\u00FE\x12\x16\u00D3\u00E1I\u00A0\u00FD\u00BE\u00BCmJ\u00D1\u0084\x10Z\u00DF4\x15\u00A2B\u00FE0$\u008E\u00E3)\u00EC\u00E1\b'\u0088`\x07\x06\u00E7\r\u00BEG\u009C?\u00B2\u00DE\u00A9\rA\u00D1\x006\u00F0\x05\x01)\\!\u0083\x03\u0098\u00AC3\u00F9\u009Eq>e\u00FD\x07\x02\u00D0\u00ABB\u0096\u00F0\u0084\u0084\u00CF6\u008C\u00C9*\u00D5Z\u00D2\u009C\u00CD\u00FA\u0084\u00FD^U\u00C8\u0085+\u009AIc.\u00AC(\u00E0N\x03i\u00CC\u0095j=\u00F6\u009F\u00ABB\u00EE\u00F0\u0086\u00A14\x16\u00C2\u008B+,+\u00C6C\u00A9v\u00C4\u00FE[\u0093\u009D\u00CC\u00FB\u00DC\u00C9B:\x13\u00BF\u00E5\u0099\u00F8\u00EC{\u00D4\u009D\u0089\x0Ek\u00C8;~]9\u00FB\u00F5&\u00F7\u00C4\u0081m\u00CB{R\u00D4O\u00D4\u00BFK\u0085\u00A8\u0090n~\\mX\x1F\u009F\u00E2{\u00C6\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("hoverIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:41:25+03:00\" xmp:MetadataDate=\"2020-07-27T14:41:25+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:12fb4137-2889-fe4d-9b2c-a0abe8ffd47f\" xmpMM:DocumentID=\"xmp.did:12fb4137-2889-fe4d-9b2c-a0abe8ffd47f\" xmpMM:OriginalDocumentID=\"xmp.did:12fb4137-2889-fe4d-9b2c-a0abe8ffd47f\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:12fb4137-2889-fe4d-9b2c-a0abe8ffd47f\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\t\u00D3\u00AA\u00D3\x00\x00\x01;IDATH\u00C7\u00ED\u00D5M+\u00E6Q\x18\x07\u00E0g\u00E1\u00FD-\u00C4\x07\u0090\u009A\u0085\u008D=\x1B+)\u00BB\u0099\u0085\u008D\u00BC$|\u0080\u00A1Q6\u0094\u00CD\u00EC\u00ACg3\x1B\x1F\u0082\u00982\u00C8\u0082\x10Q\u00AEH\u00C2,gAS3^\u009A\u00BF\u00CD\u00BDx6\u00E2\u00F1<\x7F%\x16w\u009D\u00C5\u00B9\u00BB\u00EA>\u00BFsN&I\u0092L\u00DA\u0095y[\b\u00DA\u00B1\u0081s\u00CC\u00A2\u00B8\u00A0\bJ0\u0087$\u00EA\x0F:\n\u008DTa\x1F\u00CB\u0098\nd8\rd\x0F\u00F3\u00F8\u008CK\f\u00A5\u0085,`\u00EC%\u0091\u00C1\u00B4\u0091\u00AB\u00B4\u0091/\u00B8\u00C5:\u00A61\u008A.|\u00C8\x17\u00A9\fd\t\x1F\u00B1\u0088\x7FY\u0091\u00FE\u008B\x13|\u00CD\x19A-jP\u008A\x1D\u00AC\u00A1!\u00D0F\u00B4\u00A0\x0738\u00C4]N\bzq\u0084\x03L\u00E0\x18\u00AB\u00A8}`\u00FF\x04\u0092'#\x18\u0089\u00B9\x1Fb+k,?P\u00F7\x002\u0099+\u00D2\u0087\u00FF\u00F1Nu\u00E3S\u009C\u00C9\n\u00EA\x0B\u0082DS\x7F@\u00D0\u008C2\u00B4\u00A2\u00AA`H\x16t\u0083S\u00B4<\u0092\u00C0\u00F1g!\u00D1<\u0080\u00BB\bA\x1B\u008AP\u008E\u008A\u00A8rT\u00E3\x1Bn\u00F3\u00B9'\u00FDq\u00F0\u00BF\u00B1\u0089\u00ED\u0088\u00F4N\u00ACwq\u008D\u0085|?\u00ADN\u00FC\u00C4/\\D(\u00CEc}\u0086\u00EFhz\u00FF\u00E3_\x0Fr\x0F\u00D8\u00B7`\u00A0\u00C1\u00B0\u00A8Y\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("keyControlIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:43:48+03:00\" xmp:MetadataDate=\"2020-07-27T14:43:48+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:9e749d16-6c45-434e-b0a9-9434194487d2\" xmpMM:DocumentID=\"xmp.did:9e749d16-6c45-434e-b0a9-9434194487d2\" xmpMM:OriginalDocumentID=\"xmp.did:9e749d16-6c45-434e-b0a9-9434194487d2\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:9e749d16-6c45-434e-b0a9-9434194487d2\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>!X\u00DAd\x00\x00\x01\x1CIDATH\u00C7\u00ED\u00D5\u00BFJ\u0082a\x18\u0086q]\u00C2\u00B0\u00B4\u00DC\"\x07\u0093:\u0080\u00A6\u0096N :\u0080\u00C6\u00A0\u00A19\u00DA;\u0090\u00FE\x1CC\u00B5\u0084\u00B4\x15T$\u00B86\u00FC\"\u00B7\u00C2\u00A4\u00ADhh\u00B2\u00E5\x11>D\u00E1C+*\x1C.\u00F8xy\u00E0\u0082\u00FBy\u00DF\u00FB\u00CBt:\u009D\u00CCw\u0093\x19K\u00FE\u00AE\x04;\u00E8\u00E0\x0E\u00E5\u0091%\u00A8\u00E1\x14'\u00C11\u009A!ib\x11+q\u009E\u009C;E-\u00AD\u00A4\u008DV\u0082'\u00BC\u0087\u00E4\x1E\x0BX\u00EB\u0099\u00E9\u00D2N+\u00A9\u00A2\u0092`\x1E\u00FB!y\u00C4\x12&zf\u00BATG\u00D9\u00C92\x0Eb7\u00F9\x1F\u00B9](b\x0F\u00DB\u0098\x1Af\u00F1%\u00CCb\u00A6\u0087i\x14\u00E2{+\u00E2{\u00C5*\u00B2q^J+i\u00A0\u008E\u00DB\x01\u00DC\u00E0!$o!\u0099\u00C35\x1A\u00BFJRJ\u00C4S\u00EC\x13\u00DB\u00E8q\u00A5\\|!\u00B1\u00F8\u00FCP\u00B7\x0B\u00EB8\u00C4&\u00B2_\u00DE](\u00E3\"\u00E2\u00A8c2\u00A2\u00AB\u00A4\u00A0\u009AV\u00D2\u00C2GH.\u00E3u\u00EF\u00E2y@\u0095\fU+gx\t\u00C9\x15r\u00D8\u00E8)\u00C3~\u00A4/\u00C8\x10\x1D\u0085\u00E4\x1C\u00B9\u00F1\u009F\u00F1\x7FI>\x01Q\u008BX\u00FD\u0099\x02\u00FF0\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("trimIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:48:52+03:00\" xmp:MetadataDate=\"2020-07-27T14:48:52+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:99567edd-eccf-0742-bbca-2963414f02fa\" xmpMM:DocumentID=\"xmp.did:99567edd-eccf-0742-bbca-2963414f02fa\" xmpMM:OriginalDocumentID=\"xmp.did:99567edd-eccf-0742-bbca-2963414f02fa\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:99567edd-eccf-0742-bbca-2963414f02fa\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00B4\u00E2\x0B}\x00\x00\x01;IDATH\u00C7\u00ED\u00D5\u00BF+\u00C5Q\x18\u00C7\u00F1\u00CB5H.\u00A5ds\u008D,\u00E2\x1F`V\f\x06\x16,\u00CA(\x16\x7F\x00E&e\u00B2HY\u00FD\x05\u00EC\x16?\u008A(\u00F5*%\u00C9\u00AF\tW\u00B1\u00E0k\u00F0(\u00DD\u0094\u008B\u00AFR\u009C:u\u00BE\u00E7<=\u009F\u00D3s>\u00EF\u00E7\u009BI\u0092$\u00F3\u00D33\u00F3/\u00F2\u00FBE\u0090\u00C58\u008Eq\u0081i\u00D4\u00A6-2\u0082\x04\u00DBX\u008B\u00F5|\u00DA\"\u00BB8B\x13*\u00B1\x17\u00DF\r\u00EF%@\x05\u00861\u0087Y\u00B4\u0095\"\u00B2\u00813\u00B4\u00A3\x06\u0087^F}Q\\9:\u00B1\u0089'\x1C\u00A0\x17U\u00A5\u0088\u00F4\u00E1\x01\x05\u009C\u00E0\x1EcE1\u00CDX\u0088R\u009Ec\x12\u00B9O\u00B9\x0B\x03\u00D8\u008F$\x05\u00F4\u00C6~5&\u00C2\x10\t\u0096\u00DF+O\u00C9\x16Fc\u00DC\u00B0\u0080\x1B\u00AC`\u00FD\u008D)\u00BAP\u0096\n'\x18\u008C\u00C4\t\u00AE0\u008A\u00F2T`D\x1ES\u00B8\u008D\u00E4\u008B\u00B1W\u0087~\u00F4|K\x04C\u00E1\u0096$J\u00D5\u00FD\u00E6\u00AC\r\u0097q\u00B6\u00F4\u00A57\u0089[>\u00E2:\u00A8\u00BF\u00C3xQL\u00CB\u00B7\u00DC\x15\u00BE?E+r\x1Fp\u00D2\x11\\=~\u0096\u0093\u009D <_\"\u00F1\u00D9\u00AF\x10\u00FF\u00DA\u00BB\u00B6\u00B0\u00FAS\u00BD\u00EB\u00B5\x0B\u009F\u0085\u00ABfR\u00EF\u00C2\u00FF\x7F\u00C6\u00BF!\u00F2\f\u0089n\\K_jI8\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("markerIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-27T14:50:54+03:00\" xmp:MetadataDate=\"2020-07-27T14:50:54+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:a4fefe36-5ec7-6643-9888-873b87378095\" xmpMM:DocumentID=\"xmp.did:a4fefe36-5ec7-6643-9888-873b87378095\" xmpMM:OriginalDocumentID=\"xmp.did:a4fefe36-5ec7-6643-9888-873b87378095\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:a4fefe36-5ec7-6643-9888-873b87378095\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00BDH\u00E3T\x00\x00\x00\u00E4IDATH\u00C7\u00ED\u00D6\u00BDJCA\x18\u0084\u00E1\x03\u00FE\x05\u00D3z\x05\u00DA\u00E6V\"\u00A60\u0089\u0095\"\u00F666\u0082\u00DEE\u00F0v\u0082\x18\u00CB`\u00FD\u00B4&\u0088\u00BD\x10\x02\x16k\u00F3\u00D9H\u00F0@\u00CE\u00AE\u008D)\u00A6\u00D8\u009Da\u00DF\u0085\u0085\u00F9\u00B6J)U\u00A5Um \u00D9 \u0098`\u008E\u00D9/\u009AG\u00EEf]H\u00C2+\u00A6xY\u00A1i\u00F8\t\u008FM \u00E7ha\x7F\u0085Z\u00B8\u0088\u00DCs\x13\u00C8iM\u00A6\u009F\x032\u00AC\u00C9\u009Cm \x7F\x0E\u00E9\u00D7d\x069 \u0083\u009A\u00CC0\x07d\u0082;t~x\x1D\u00DC\u0087\u00DF\b2\u00C6G\x1C2C/\u00F6{\u00B1N\u00E1\u008Fq\u00BD.\u00A4\u008D\x03\x1C\u00E3\x1D\u008Bx\u00E8\x05\u00DE\u00D0\r\u00BF\u008D\u00AD\u00C6-\u008C\x13,\u00E3\u00F6Kt\u00B3W=\u00F6\u00F0\u00F4]\u0086\u00D8-2O\u00F0\x10\u0090Q\u00B1\u00A1\u0085+|\u00E2\u00B2$\u00E4(\u00E6\u00C8aI\u00C8\x0En\u00B1\u00FD??\x12_Urb\u00D2)\u00A31\u00E2\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("breakIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T15:15:25+03:00\" xmp:ModifyDate=\"2020-07-27T15:19:16+03:00\" xmp:MetadataDate=\"2020-07-27T15:19:16+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:542be61b-b102-f64f-8e9b-2954b659f350\" xmpMM:DocumentID=\"xmp.did:542be61b-b102-f64f-8e9b-2954b659f350\" xmpMM:OriginalDocumentID=\"xmp.did:542be61b-b102-f64f-8e9b-2954b659f350\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:542be61b-b102-f64f-8e9b-2954b659f350\" stEvt:when=\"2020-07-27T15:15:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00E3?\u00E7k\x00\x00\x01\u0094IDATH\u00C7\u00ED\u00D51K\u009BQ\x14\u00C6\u00F1(X\x13Htq(\u00DD\u00D4\u00C5\u00C5\u008E\u00D1n~\u0083~'\u008B\x16\u009C\u00C5\u00EF`\u00D7\u00D2nBk\x02\x19\u00ACi+!\u00F2\u00DB\u00C4\u00D4\u00EE\u00DD\u008A\x0E\u00E9\u00F2\x04\u00C2\u008B\u0081\u00BCo)tp\u00B8p9\u00F7r\u00FF\u00F7<\u00E7\u00B9\u00E7\u00D6\u00C6\u00E3q\u00ED_\u008F\u00DA\x13\u00E4\u00AF x\u0085\x0E\u00EE0\u009A1~\u00A2\u008BvUH\x07\u00F7\u00F8\u0086>\u00BE\x16\u00C6%\u00AE\u00F0\x1B\x1FP\u00AF\x02\u00B9\u00CD\u00E1\u00ABX(\u00AC-a\x19/\u00D0\u00C3\x00\u00CD*\u0090\x1B\\d\u00BE\u00877\u00D8\u00C7[l'\u00DEJ\u00C6\u00DF\u00D1\u00A8\n\u00F9\u0092\u00F9!\u00C6\x19\u00A7\x13i\u00B0\u0082O\x18\u00E29\u009A\x01\u00D7\u00AB@\x0E\u00A6 =l&\u00BE\u0081\u00EB\u00C4\u0087\u00A9\u00D1\x00\u00EF\u00B1S\x16r\u0084w)\u00F6\u00AF\u0089\u009B\x02\x19\u00E5\u00E0\u00B3du\u008E\x07t\u00E7\u0086`\x11/\u00D1\u00C8\u00A1\u00BBx\u0086c\u00BC\u00C6\x16\u00D6#\u00D3*\u00D6\u00E2\u00C8Q\u00A9\u00C2?\u00B2v\x12\u0089Nf\u00AC_\u00E0f\x1E\u00C8(7Z\u00CB\r[\u00B9\u00F1V28NF\u00BB\u00C9\u00B0\u0091\u008C\x17\u00A3\u00C0\\\u0090n\u00B4=\u008F\u00D6g\u00D1\u00FE\u00C7T\u00E1\u00DB\u00A9\u00D1ejv\u0094\u00F8\u00DC\u0090\u009D\u00B8d\x10\u00D7\f#\u00D156\u00B2g3n\u009B8\u00EF\u00A0\x14$\u009B\u00EB\u0091\u00A9\u0099w0LV+S\u00EB\u00A7S\u0090\u00C3\u00D2\u0090\x02\u00B0\u0091\u0097\u00DDA+\u00B1\u00EDt\u0080\u00FDt\u0084\u00BDR\u0085\x7F\x04\u00D2\u008Ct\u00BD\u00F4\u00ACe,\x15\u00F6,\u00C4$}\u00DCV\u0081\u00D4\u00F11]\u00F7*\u00C5.v\u00E6~\x1Cy\u008F\u00CF\u0095>\u00AD\u00B8\u00A9\u0093\x7Fd\u00D6\x1Fs\x17G\u00B6\u009F\u00FE\u00F8\u00FF\x1F\u00F2\x07\u008CYiDw\u00B1\u0099,\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("flipIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T23:28:39+03:00\" xmp:ModifyDate=\"2020-07-27T23:30:32+03:00\" xmp:MetadataDate=\"2020-07-27T23:30:32+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:4d1b2237-b0b1-8a42-b369-68ef70c453ef\" xmpMM:DocumentID=\"xmp.did:4d1b2237-b0b1-8a42-b369-68ef70c453ef\" xmpMM:OriginalDocumentID=\"xmp.did:4d1b2237-b0b1-8a42-b369-68ef70c453ef\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:4d1b2237-b0b1-8a42-b369-68ef70c453ef\" stEvt:when=\"2020-07-27T23:28:39+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>H\u00E8\x0E.\x00\x00\x01\x10IDATH\u00C7\u00ED\u00D5\u00B1N\x02Q\x10\u0085a\bQ\t,\x15\x05\u00F1\u00E9|\x04_\u0082\u00C6Vbb,De\x03\u00C4^K+\x1AJ+\u00F2%V\u00BE\u00C8\u00DA\f\u00C9\u0086d\u00D7\x05\u00AE\u0089\x05\u00C5-nr3\x7F\u00CE\u009C\u00B9gZEQ\u00B4\u00FE\u00FA\u00B4N\u0090\u00A4\x10\u00F4\u00B1\u00C0\x176\u00F8\u00C6\x04\x17)!\x19\u00D6(\u00E2|`\u0094ZI\u0086U\t\u0092\u00EF\u00A3\u00A2)d\u0080O\u00BCa\x1E\u00A0\x17\u00F4RB\u0086\x18\u00E3\x12\u00E7\u00A1\u00A4\u00C0SSEM mtJ\u00F7n\t4E\u00F7 \b\u00AEp\u008B\u00AC\u00C6\u00A7Y\u00D3\u00D6UAn\u00A2\u00C0\x1C\u00FD\x1AP\u00DE\x04T\x05\u00E9\u00E1!\n,\u00ABz\u00BF\u00E3\u00D1\u00B4Jy\u009D\x17]<\u0096@Y\u00CD\u00BBm\u00EB\u00EE\u00F66>\x14=G\u0081\u00D9/\x1E\u00DD\u00E3\u00FA\u00D0\u00E9*+\u00CA\u00CB\u00D3\u0084\x0E\u00DA\u00DB)<* q\u00B6\u00EBQ\u00FC\u009B1\u0086\u00C9RxG\u00D1+\u00DE#\t\x06I\u00A3>\x14\u00E4\u00A5\x1C[U\u00F9t\fd\x14)\u00BC\u0085\u00AC\u0093BB\u00C5$\u00F6\u00C9&\u00F6\u00CB\u00A2\u00EA\u00B3\u009Ev\u00FC\u00FF\u0086\u00FC\x00\u00A3\u00FAP\u0092\r\u0094KJ\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("lineIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T23:41:44+03:00\" xmp:ModifyDate=\"2020-07-27T23:42:31+03:00\" xmp:MetadataDate=\"2020-07-27T23:42:31+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:69204513-24b6-d64a-8d8f-63d503343946\" xmpMM:DocumentID=\"xmp.did:69204513-24b6-d64a-8d8f-63d503343946\" xmpMM:OriginalDocumentID=\"xmp.did:69204513-24b6-d64a-8d8f-63d503343946\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:69204513-24b6-d64a-8d8f-63d503343946\" stEvt:when=\"2020-07-27T23:41:44+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00BE\u009C\x01\u00C0\x00\x00\x01\x1EIDATH\u00C7\u00ED\u00D5?(\u0085a\x14\u00C7\u00F1\x1Be\u00D1-\u00E5O\u00DDb\x11\u009B$u\r\u00D7\u00A4\u00CCF\u00CB-IV\u0093\u00CC\x18mv\u00FFJ\u0099\f\x06\u0083\u00C1Dw\u0093\u00C9\u00A0OV,bP\x06]\u00BC\u0096\u00A3\u00DE\f\u00BA\u00BC\u00F75\u00C8p\u00EA\u00F4<O\u00E7\u00DBs~\u00BF\u00CE)$IR\u00C8;\n\u00FF\u0090_\u0087\u00A0\x03\u00DB\u00A8\u00A1\u0092\x19\u0082\x12FPD7\u00C6\u00B1\u0085$\u00A2\u0096\t\u0082>\u009C\u00E2\x1EG8\u008F\u00C2/)\u00C8fV\u00C8t\u00AAX\u0082\x03T1\u008A)\u00CC\u00A1++\u00A4\u00843\u00BC\u00E2\x18\u00C5\\\u0084G;\u00D6Q\u00C7Xn\u00EE\nmn\u00B1\u008F\u00D6\u00DC,\u008C\u0095\u00D0\u00A5\u009C'd\x00\u00D78l\n\x04\u0083X\u00C3\u00D2\u00A7\u00F3\u00E5\u00D0f\"\x13\x04-\u00D8M\u00D9v\x0F\u008Ba\u00DD\x19<\u00E2\n\u00F3h\u00FB)d\x18w)H=\u0095?\u00E0-\u00F2'\f}\x1B\u0082\u00C9\x00\u00DC\u00C4o\x16\u00D0\u0083^T0\x1Bw\t.\u00D0\u00DF\x10$\u008AT\u00B1\u008Ag\\~\u00E5 \u0094\u00E3\u00EDh\u00C3\u009A`'\u00D5\u008E\x13\u00F46}\u00D4\u00C7\u00B8\u00FE\u0080Ts\u00D9'\u00D1\u00EB\x1A6\u00D0\u00F9\u00BF~\u00FF&\u00E4\x1D\u0083\u00C9[\t\u00F2\u00D2\u0098\u00AC\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("shredIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T23:51:20+03:00\" xmp:ModifyDate=\"2020-07-27T23:52:23+03:00\" xmp:MetadataDate=\"2020-07-27T23:52:23+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:2f63f4d5-f00f-5c4b-b99c-70059b1a9805\" xmpMM:DocumentID=\"xmp.did:2f63f4d5-f00f-5c4b-b99c-70059b1a9805\" xmpMM:OriginalDocumentID=\"xmp.did:2f63f4d5-f00f-5c4b-b99c-70059b1a9805\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:2f63f4d5-f00f-5c4b-b99c-70059b1a9805\" stEvt:when=\"2020-07-27T23:51:20+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x02,\u00D8'\x00\x00\x01\x01IDATH\u00C7\u00ED\u0095\u00C1\n\u0082@\x10\u0086\u0085z\u0091z\u00AE\x0EF\u00D4;\u00F4*\u0081\u00A1$\u00D4\u00A9\u00C7\u00E8\u00D2\x13x\t\u00E9T$\x1E\u0084\n\u00C2\u00DC\u00FE\u0081\u009FXb#F\f\n<|\f\u00CE\x0E~\u00BB\u00EB\u00EC\u00EA\x19c\u00BCo\u00E3\u00B5\u0092\u00FF\u0090$I2\x01G`\u00C0\x1D\u0094\u008C\x17pb\u00B4\u00F3\u0086\u00F5\x13\u008D$\x03;0'!\u0098\u0081\r_\u00B8\u00E1sh\u00D5H\u00FDI#\u0091\x17\u0085\u008E\u00FC\x10\\%:\u00C6Dh4\u0092\u00EA\u0083d\u00E0\x18\x0B\u00EAH\"G~D\u00C9\x14\u00F4@\u00DFb-\u00DF\u00A8\t\u0089\u00AC\u00E4\x06r\u0090\u0082\u00BD\u00C5Y\u00F2Ml\u0097O\u00C9\x16\u00C4`\x05\u0096\u008C\"-\u00B4\u0092\x05\u00E8Zt\u00D8\u00DAW\u00C6\u00CE\u00CB\u00B8\u00D4W\x1AI\u00C1\u0099\u00D93\u008D\u00B9\x02Y\u0089\u00FF\u00A6\u00BBT\u0092\u009C{l\u00EFy\u00CA\u00FC\u00EDM\x0BGZI\u00C9n\u00B1\u00BB\u00A7\u00C7\u00AE\u0092\u00ED\x1A5!\u0091\u00C3\x188\u00F2\u0083\x0F\u0087\u00B1\u00FA\u00B9\x13_\u00F7\u00EE\u00CA\u00B4\u00B7\u00F0Ay\x0BK\u00FD\u00B8\u00FD3\u00B6\u0092'\x0Fyjx\u00DASah\u0090\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("arrangeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\u00BBIDATHK\u00ED\u00D3\u00BD\r\u00C20\x10\x05`\u009B\x01h)`\x00K\x14\u0094l\u00C0(\x1E\u00C0\u00E3D\u009E\u0086\n\x16\u00B0\\SQ\u00B3\u0080y!'7\u00B1\u00FC\u0083\x13Dq\u009F\u00F4\u00E4\u00F8R\u009C\u00E4\u00D3\t\u00C6ZI:\u0093\u00BC\u00F7[\x1CW\u00E4\u00F4)L^\u00C8E)u\u009F\u00AEm\u00B2\rGh\u00BA\u00C7qC\x0EHW\u00B3jhzD\x1E\u00C8\u0099J\u00EB\b!\u00C4XkwT\u00EE\u00B2\u00A13IJ\x19\u00E3\u009C{R\u00B9K\u00B6a\x0B<wH\u0085~G\u008B5\u00AC\u00F5\u00F3\u0086\u00D5\u008C1\u00B3\u00E7\u00F9Fi\u00F1c\u0093a\x18\u0084\u00D6\u009Ani\u00D8\u00CF\u00E2^\u00F3\f\u00A3\u00D5f\u0098\u00DA\u009DQa\u0086\x12\u00F3\u00A3\u00CF<\u009Ea\u00B4\u00D4\f\x19\u00FBwB\u00BC\x01\u009C\u00FCMoFs\u00ABP\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("arrangeBtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\u00ADIDATHKc\x18\x05\u00A3\u0080T\u00C0\b\u00A5\u00B1\x02uuu> u\b\u0088\u00F5\u00C1\x02\x10\u00F0\t\u0088\u00DDn\u00DE\u00BCy\x12\u00C2%\r\u00E0\u00B5\x10\x04\u0080\u0096J\x03\u00A9\x13@,\x03\u00C4\x14YF4\x00Z\u00AA\r\u00C4\u008F\u0080\u00D8\x1C*D\x1B\u00F0\u00FF\u00FF\x7F8\u008E\u008C\u008C\x14\u0087\nS\x04\u0098\u00A04V\u00C0\u00C8\u00C8\b\u00C7\u0092\u0092\u0092/\u00A0\u00C2\x14\x01\u0082q\b\x03EEE\u00FF\u00B7n\u00DD\n\u00E5\u00A1\x02`\u009C\x12m\x0E^\x1F\u00D2\x02\u00D0\u00DDB\u00A2\x01(H\u00A1L\u008A\x00U\u00E2\x10\x1B\u00C0\x15\u00AF\u00A3q\b\x07\u0083>\x0E\u0091\x00#0>\u00A1\u00CC\u00D18D\x02\u00D4\u008A\u00C3Q0\n\x06;``\x00\x00\u00FCy6\x0BM]g\u0095\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("orderIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00OIDATHKc\x18\x05\u00A3`\u00D0\x03F(\u008D\x17\u00DC\u00B8q\u00E3?\u0094\u0089\x17hhh\x104\u008F\tJ\u00D3\r\u00D0\u00DDB\u00BA\x03\u00ACaN\u00CD8C\x07\u00A3qHu@r\x1C\u0080\x00%q<\x1A\u0087T\x07D\u00C5\u00E1hY:\nF\u00C1(\u00A0\x0000\x00\x00\u00E1\u00D6\x10\x15]\u009D\u00BE\u0091\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("orderBtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T11:20:09+03:00\" xmp:ModifyDate=\"2020-07-28T11:22:09+03:00\" xmp:MetadataDate=\"2020-07-28T11:22:09+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:4a55676d-3722-6e4c-a5d6-c1635dc03d56\" xmpMM:DocumentID=\"xmp.did:4a55676d-3722-6e4c-a5d6-c1635dc03d56\" xmpMM:OriginalDocumentID=\"xmp.did:4a55676d-3722-6e4c-a5d6-c1635dc03d56\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:4a55676d-3722-6e4c-a5d6-c1635dc03d56\" stEvt:when=\"2020-07-28T11:20:09+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>f\u00F9\u00F1\x00\x00\x00\x00CIDATH\u00C7\u00ED\u00D51\x0E\x00 \bC\u00D1\u00DE\u00FF\u0084\u00DC\u00A6\u00CEn\bD\x1D>I\u00E7\u0097\u00A6\x03\u00B2\u00AD\u009B\x11 `\x0B<\u00BD\u0088p&\u0080\u00E3W\x06\u00B3\u008D\x00\u00FF\u00D9\u00B0\u00DA\b\u00F0\u00DD\u0086S\u008D\x00\u00F9\u00F8\u0080\u0080[\x16u\u00DE\u00F4Q\u009F\x19\u00F4\u00B1\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("orderBtnIIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00PIDATHKc\x18\x05\u00A3`\u00D0\x03F(\r\x067n\u00DC\u00F8\x0Fe\u00E2\x05\x1A\x1A\x1A(\u00FAH\x01LP\u009An\u0080\u00EE\x16\u00D2\x1D\u00E0\u008D\x0BZ\u00C4\u00E9h\x1CR\x1D\u0090\u0094\u009F\u00A8\x11\u00A7\u00A3qHu@v\u0099\b\x02\u00E4\u00C4\u00E9h\x1C\u008E\u0082Q0\u00E2\x00\x03\x03\x00\u00E1\u00D6\x10\x15\u00A6\u00DE\u00E9Y\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("orderBtnDownIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1C\b\x06\x00\x00\x00r\r\u00DF\u0094\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T11:19:55+03:00\" xmp:ModifyDate=\"2020-07-28T11:53:24+03:00\" xmp:MetadataDate=\"2020-07-28T11:53:24+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:ae57ce45-bf91-294a-a172-8544c54a8c5e\" xmpMM:DocumentID=\"xmp.did:ae57ce45-bf91-294a-a172-8544c54a8c5e\" xmpMM:OriginalDocumentID=\"xmp.did:ae57ce45-bf91-294a-a172-8544c54a8c5e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ae57ce45-bf91-294a-a172-8544c54a8c5e\" stEvt:when=\"2020-07-28T11:19:55+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00EAA6C\x00\x00\x00IIDATH\u00C7\u00ED\u00D5Q\x06\x00@\bE\u00D1\u00F6\u00BF\u00C2v\u00F3\u00FA\u00CF\fIb\u00C6\u008D\u00F7\u0099#E&\u00C96c\u0080\u0080#`.wW%\u00B9\x0F\u00F0\nv\u00AB\fV'\x1A\u009B\u00F0\x7Fp}\u0087\u00DD+\u00CD\x01|o\u0087\u0080||@\u00C0c\x02\u0094@\u00FCTW\u0094%\u00F4\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("sequenceIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T13:45:39+03:00\" xmp:ModifyDate=\"2020-07-28T13:51:24+03:00\" xmp:MetadataDate=\"2020-07-28T13:51:24+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:95d5f0a3-7888-554a-8f6b-d4df16df2fd3\" xmpMM:DocumentID=\"xmp.did:95d5f0a3-7888-554a-8f6b-d4df16df2fd3\" xmpMM:OriginalDocumentID=\"xmp.did:95d5f0a3-7888-554a-8f6b-d4df16df2fd3\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:95d5f0a3-7888-554a-8f6b-d4df16df2fd3\" stEvt:when=\"2020-07-28T13:45:39+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F0\u008C6\u00ED\x00\x00\x013IDATH\u00C7\u00ED\u00D6?J\x03a\x10\x05\u00F0\u00A0\x16\u00C6\u0088\u00F1\x1C\u00E2\x1F\x10\x14=\u008D\u0095H\u00B0\x11BL\x1B\u00E2!\u00EC=\u0083\u00BDz\x00\x15\u0093\u00EA\u00A7B\x14%\u0090F\u00EDDQc\u00E1\x14)\x16\u00C9\u00EE&\u008D\u00B8\u00F0\u00D8\u0085\u00F7\u0086\u00C77\u00B33\u00F3\x15\u00FA\u00FD~a\u00DC(\u00FC\u009B\u008C\u00C4\x04\u00BB\u00B8F\x17\x0F\u00BF\u00A0\x1B\u00BA\n&\u00D3\u009A<\u00A3\u0087s\\\u00E02\x01\x17\u00C1\u00F7B\u00BF\u009C\u00D6\u00A4\u008F\x06\u00A6Q\u00C4L\x02\u008A\u00C17B\u00BF\u0099\u00C5\u00A4>L\u00CEQ\x0F\u00FDF\x16\u0093&f\u0087@3\u00AB\u00C9g\u00E4\u00FA\nm\u00B4\x12\u00D0\x0E\u00BE\x17\u00FA\u00D4&\x1F\u00E8\u00E0\x04\u00A78K\u00C0i\u00F0\u009D\u00D0gJ\u00D7\x01\u00E6P\u00C6|\x02\u00CA\u00C1\x1F\u00E4\u00A9Im\u00C8\u00C2\u00D7\u00F2\u0098\u008C\u00FD$ik\u00F2\u0095\u00A5O\u0086\u00F9\u00BBZ\u00C1?\u00E1\x05\u008B\x11[\x1AU\u009FLc\x02%TQ\u0089\u00B8\u009D0\u00DE\u00CB\u00DD\u00F1Q\u0093\u00CD\u00F8\u009E\u0089\u00F7V\u00C4\u00DDa?\u00F3\u00EC\x1A\u00E0\x1Bx\u00C7\u00F6\u0080\u00C1\u00BB\u009Fg5\u00EF\x14>\u00C4\x14\u00D6b\u00C4\u00BF\u00E1\b\u00AFa\u00B0\u0094\u00A6\u00F0\u0095\u0084}\u00F2\u0088{TC\u00B3\u0080\u00DB8\u00F5\rV\u00C6\u00B2\x19\u00B1\u0082c\u00AC\u008Fm\u00FDb2)E\x7F\u00F3\"\u00F1\r\x1B.c\u00A6?\x0Fy\u00B5\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("sequenceBtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T13:48:55+03:00\" xmp:ModifyDate=\"2020-07-28T14:00:13+03:00\" xmp:MetadataDate=\"2020-07-28T14:00:13+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:00d9c3b3-0a76-d546-8756-f744fb53375e\" xmpMM:DocumentID=\"xmp.did:00d9c3b3-0a76-d546-8756-f744fb53375e\" xmpMM:OriginalDocumentID=\"xmp.did:00d9c3b3-0a76-d546-8756-f744fb53375e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:00d9c3b3-0a76-d546-8756-f744fb53375e\" stEvt:when=\"2020-07-28T13:48:55+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>3\"\u00E1\u00E0\x00\x00\x01;IDATH\u00C7\u00ED\u00D6\u00BB.DQ\x18\u00C5\u00F1\u0089\u0089\u00CB\u0088{\u00A2\u00F3\x02\x1A\u009D\u00C4\u00A5\u00F1\bJ\u00A5v\u00D0\u008A\u0088\u0082\f\u00D1\u00E9<\u0081DT\x1EA\f=\u00C2D\u00E2\u00A7\u0099\u0082Lr\x12\u0089\x17 \u00A3\u00F9$\u008AC\u00CE\u00CC\x1C\u008D(V\u00B5V\u00F2\u00CF\u00FE.{\u00EFB\u00B3\u00D9,\u00FC\u00B6\n\u00FF\u0090\\ X\u00C5#\x1Ax\u00FAA\u008D\u00C8\u0095Ql\x15\u00F2\u008A\x04W\u00B8\u00C6M\u008A\u00AE\u00C3O\"?\u00D5*\u00A4\u0089\x1D\u00F4\u00A1\u0084\u00FE\x14\u0095\u00C2\u00DF\u0089\u00FCl;\u0090\u008D,5\u00C7F\u00E4g\u00DA\u0081T0\u0090A\u0095v!\u00EFQ\u00EB[\u00D4p\u0097\u00A2Z\u00F8I\u00E4[\u0086\u00BC\u00A1\u008EsTq\u0091\u00A2j\u00F8\u00F5\u00C8\u00B7U\u00AE]\fa\x18#)\x1A\x0E\x7F\u00BF\u0093\u00C6\u00AFgl\u00FC\x1C\u00F60\u0091\u00F7IF1\x10\u00D9\u00EE\x18\u0080b\u00DE=\u00B9\u00C4!z\u00B0\u00843L\u00E6=]\u00F78\n\u00C8v\u009C|>\u00EF=\x19D\x7Fd\u00B7:Y\u00C6\u00AC\x1B\u00BF\x19\u00F9\u00E9\u00BC\u00EE\u00AE\u00AE\u00F0\u008B1\x10\u00A5/w\u00D7\x02z1\u00DA\u00E9-|\u008E)ta-\u00BC\u00E7\u0080<\u0084\u00BF\u0098\x15R\u00FE\u00E6=Ip\u0082q\u008C\u00E14\x00\u009FZ\u00F9\x1C\u00ED\u00DC^\u00C6(\u00E71^\u00B0\u00FCk\u00CFo\u00F4\u00E2\x00c\x7F\u00FB#\u00F1\x01\u00D0\u0087]\u00BE\u00AC\u00D4\u0093W\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("renameIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T11:12:54+03:00\" xmp:ModifyDate=\"2020-07-28T22:24:27+03:00\" xmp:MetadataDate=\"2020-07-28T22:24:27+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:1cc625e0-818b-1340-9531-e02af9336edb\" xmpMM:DocumentID=\"xmp.did:1cc625e0-818b-1340-9531-e02af9336edb\" xmpMM:OriginalDocumentID=\"xmp.did:1cc625e0-818b-1340-9531-e02af9336edb\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1cc625e0-818b-1340-9531-e02af9336edb\" stEvt:when=\"2020-07-28T11:12:54+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>D\f5a\x00\x00\x01\x01IDATH\u00C7\u00ED\u00D5?J\x03Q\x10\u00C7\u00F1\r\u009A\u0088\u0085\u0085\u008D\u00A8X$\u0088\u00B1P/\u00E1\t\u00EC\u00BC\u008B`\u00A36\u0082`!\u00B1\u00B7\u00F1\x00\u00A6P\u0082'\b\u00B6\u008B|\u00BA\u00AC6\u009E\"k3\u0091\u00C5B7\u00D1-\u0094-\u0086\u00F7\x18\u00E6\u00F1\u00E57\u00FF^\u0092\u00E7yR\u00B5%5\u00A4\u0086\u00FC3\b:\u00B8\u00C6\x00\x0FS\u00D8 \u00DEu\u00CA@\u00FA\x18\u00E3\x05Y\u009C\u00DF\u00D9$n\u008C~\x19\u00C8\b)v\u00D0\u00C5v\t\u00EBF|\u008AQ\x19H\u0086\u00E1,\u00B9\u00C7\x10YY%Oh\x16|\r\u00CC\u00A3\u00F1\x05\u00A0\x19\u00EFfS\u0082U\\\u00E0\x12k\u00BF\u00A5$\u00C5\x1EV\u00C2\u00B7\u00857\u00E4\u00D1E\u00EB\u00E1_\u00C2n\u00D4e\u00AA\u009AL\u00BA\u00EB\x15\u00CF\u00D8\u00C7\x02\u008E\x03\u00F2\x01B\x0B\u00BDO\u00DDuW\x06\u00D2.\u00CC\u00C9c\u00DC\u00971\u0087\u00D3\x02\u00E8\x1E\x1B\u0091\u00CA\u009B\u0088\u00ED\u00A1\u00FD\u00E3\u0089\u00C7I\x01tU\u00D9Z\u00C1y\x14\u00F9\x00G\u00D8\u00AC\x02\u00D2\u008Ab\u00DF\u0086\u00A2\u00C3\u00CA\x16$\u00CE\"}\u008B\u00F5\x7F\u00F2\u00B7 \u00EF\u00E0Y\\\x1AG\u00A7\u00CA\u00E7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("doRenameIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-28T22:42:15+03:00\" xmp:MetadataDate=\"2020-07-28T22:42:15+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:1592d307-621a-9a48-afb9-a16b99140b12\" xmpMM:DocumentID=\"xmp.did:1592d307-621a-9a48-afb9-a16b99140b12\" xmpMM:OriginalDocumentID=\"xmp.did:1592d307-621a-9a48-afb9-a16b99140b12\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1592d307-621a-9a48-afb9-a16b99140b12\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u008D>\u00F5\u00D9\x00\x00\x00\u00ABIDATH\u00C7\u00ED\u00D4=\x0E\u0082`\f\u0080a\x16\u00AF\u00E0M\\\u009CTP1z\x04\u008F\u00EB%\u009E\u00D1\u00C9\x18\u00FF%1&\x0E\u00B8|\u0083\u008B\n\n\t\x03C\u00D7\u00BEm\u00DF\u00B6Q\u009E\u00E7Q\u00DD\x11\u00B5\u0090\x16\u00D2|\b\u00E6X\u00A1W\x0B\x04S\\\u00F1@\u00BFr\b\u00C6\u00B8\u00E0\u0080\u00B8\u00F2q\x05\u00C0\x01;$\u0095;A\u008As\x18SRZ<:\u00E8~\x01d\u00B8}\x03|\u0082,\u00B1\u00C6\u00E2\u0083\u0083\u00E3;\x07E!)6\u00D8b\u00F6\u00C6A\u00FC\u00F7\u009D`\u0088}\u00A8:\u00C6\u00E0\u00C5A\\\u00D91b\x12\x12\u00DF\u0083\u0083\u00AC\u0088\u0083\u00D2\u00DB\x15::\u00FD\u00D2A\u00A9\x15\u00C6\bi\u00FB\u0085[H\u00F3 O\u00B2mS\u0094a\u00FE\n\u00A7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("serializeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-28T22:50:56+03:00\" xmp:MetadataDate=\"2020-07-28T22:50:56+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:19b09984-ba8f-c74b-b9ca-221e25f3a21f\" xmpMM:DocumentID=\"xmp.did:19b09984-ba8f-c74b-b9ca-221e25f3a21f\" xmpMM:OriginalDocumentID=\"xmp.did:19b09984-ba8f-c74b-b9ca-221e25f3a21f\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:19b09984-ba8f-c74b-b9ca-221e25f3a21f\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?><\u00D6z\u00F1\x00\x00\x00\u00CCIDATH\u00C7\u00ED\u00D4\u00BD\x0E\u00C1P\x18\u0080\u00E1\u008E\x16\x03n\u00A2n\u00C1\u00CF\x05\u0088\x18$&\tqA\u00D8\u00EDz\x11$6\u0093\u008DA\u00D2;h\t1a \u00C7\u00DB\u00E4\x1B\x1A\u0089\u008F\u00A86\u0091\u009C\u00E1I\u0093\u00F6\u00B4\u00EF\u00E9\u00CF\u00A9c\u008Cq\u00D2\u00E6\u00D8\u0088\u008Dd\x13\u00F1}\u00BF\u008C1\u00E6\u0098}!:o\x04W\u008Bx\u00B8\u00E3\u008C#\x0E\u00B1\u00EDI\u00F6k\u00AE\u00B8E\u00D7\u00D1\"\u0081\fj\u00A3\u008B>z\x18\u00A0\u0083:\u00AA/T\u00D0\u0090I\x06Zd'\u00B3\u00AEa\u0085\r\u00D6\u00D8b\u0082\u009C\u00F6\u00EC9\u009E\u00C7%\u00BA\u008E\x16\t\u00B1G\x0B\u00E6\u00C9\x12\u00C57\u0091\u0092D\u00C2O\"M\x19\x1C\u008F,P\u00F8e$\u00D5;\u00C9\u00E4\u009Dd\u00F2uy\x12I\u00BAN\u00A6Z\u00C4\u0095\x15\u009Bd\u00C5\x0F\u00D5\x15o\u00FF\u00C26\u00F2\x7F\u0091\x07\u0083nt\u00A2\x0F\u00BF\t\x1E\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("serializeTypeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-28T22:51:04+03:00\" xmp:MetadataDate=\"2020-07-28T22:51:04+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:bd777c49-4083-614a-b7bc-e59c66f51eec\" xmpMM:DocumentID=\"xmp.did:bd777c49-4083-614a-b7bc-e59c66f51eec\" xmpMM:OriginalDocumentID=\"xmp.did:bd777c49-4083-614a-b7bc-e59c66f51eec\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:bd777c49-4083-614a-b7bc-e59c66f51eec\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>L\x16\u00A4\u00F2\x00\x00\x00\u00C8IDATH\u00C7\u00ED\u00D4=\n\u00C20\x18\u0080\u00E1\u008E.\x0E\u00EA%\u00EA\x15\u00FC9\u0080\u0088\u0083\u00E0$(\x1EH\u00DD\u00DD\u00ED!\x14\u00DC\u009C\u00BA\u00E9 \u00F4\x06\u00B5\u00A28U\x07%\u00BE\u0085\fR\u00F0+\u00D8\x1A\x102<t(\u00E9K\u00D2~u\u0094R\u00CE\u00AF96b#f\"A\x10\u00D41\u00C7\x1A\u00AB/$\u00EBfp\u00A5\u0088\u0087\x07\u00EE\u00883\\q\u00C6\u00E5\u00ED\x1A\u00EB\u00F5\u009E\x14\t\u00F1D\x07\r4?hc\u0080\tF\x18c\u0088\u00BE\u008E\u0084R$\u00C2\re\u00E9\u008C\u00B9_\u00C2\x02\x07\u00EC\u00B0\u0087\u008F\u0096\u00DEU$E\u008E:R\u00CB\u0088T\u00B1\u0085J\u00E9\u00E1\u0094<\u00A7\u0088H\x05\u009BT Y\u00D7-2\u0092k'F\u00DE\u0089\u0091\u00AF\u00AB\u00A89YJ\x11WOl\u009E\u0089\u009F\u008A\x13o\u00FF\u00C26\u00F2\x7F\u0091\x17\u00D4\u00E7t\u00A1\u00EA\u00C6\u00E7k\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("serialize_BtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T23:14:32+03:00\" xmp:ModifyDate=\"2020-07-28T23:16:50+03:00\" xmp:MetadataDate=\"2020-07-28T23:16:50+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:5ece2f24-61d9-1b4c-b173-8324a678175e\" xmpMM:DocumentID=\"xmp.did:5ece2f24-61d9-1b4c-b173-8324a678175e\" xmpMM:OriginalDocumentID=\"xmp.did:5ece2f24-61d9-1b4c-b173-8324a678175e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:5ece2f24-61d9-1b4c-b173-8324a678175e\" stEvt:when=\"2020-07-28T23:14:32+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x1A\u0081\x1C\x18\x00\x00\x00\u00D1IDATH\u00C7\u00ED\u00D4\u00BD\n\u0082P\x18\u00C6q\u00C7\x16\u0087\u00F2&\u00EC\x0E\u00C2hjjo-\u00BA\u00A0jo\u00CF\u008B(hkm\u00A8!\u00F0\x0ET(\x1A\u00C2\"\n\u00FB\x1Fx\x079\u00C4\x19\u00CC\u0084\u00E0\f?\x04y\x1F\x1E\u00BF^\u009D<\u00CF\u009D_sl\u0089-\u00A9\u00A7$\u008A\u00A26\u00E6XcU\u0082\u00CA\u00CD\u00E0\u009BJB<qGVp\u00C5\x19\u00A7\u00C2\u00F1\u00A2\u00CDd\u0092S\u00F9\u00D0T\x12\u00E3\u0085\x01\x02tE\x1F#\u008C\u00E58\u00C1\x10\u00BD\u00C2L 9\u0095\u008FM%)np?<\u00C6\x1D\x0E\u00D8\u00E3\u0088\x05\x1A\u00DA\u009C+\u00F9\u00D4T\u0092\u00C8\u0090\u00A7\u009DWW\u0099k\u00B6his\u009E\u00E4\u00932%\x1D<\u00B4\u0092\r\u009AU\u0096Tz'\u00B5\u00BC\u0093Z\u00BE\u00AE\u00AA\u00F6di*\u00F1ec\u00BF\u00D9\u00F8\u00A9q\u00E3\u00ED_\u00D8\u0096\u00FC_\u00C9\x1B\u00E0\u00E1r\u00A2V\u0081\u00F6I\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("doRename_BtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-28T23:22:16+03:00\" xmp:MetadataDate=\"2020-07-28T23:22:16+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:689b3848-4792-e84d-86c3-d2ba2efc7458\" xmpMM:DocumentID=\"xmp.did:689b3848-4792-e84d-86c3-d2ba2efc7458\" xmpMM:OriginalDocumentID=\"xmp.did:689b3848-4792-e84d-86c3-d2ba2efc7458\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:689b3848-4792-e84d-86c3-d2ba2efc7458\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>%\u00C8.\u00A9\x00\x00\x01\x0FIDATH\u00C7\u00ED\u00D4\u00BDJ\x03Q\x10\u0086\u00E1\u00C4\u00BFd7!\n)\u0082\u0085`gg/\u00D8\u00DBx'\u00DE\u0086\u00E0E\b\u0089\u0089\u0089F\u00F02\x14l-\u009F\u00DA\x0BY\u009BY8,\u00E6\u0087\x04!\u00C5\x16\x07\u00F6\f\u00B3\u00F3\u009E\u00F3}3\u00A7Q\x14E\u00E3\u00BFW\u00A3\u0086\u00D4\u0090\u00DD\u0084\u00E0\f\x17h&\u00B1\x01.\u00D1\u00DB\x1A\u0082C\u00BC\u00E0\u00AB,\u0088#\u00BC\u00E1\x03\u00B7[A\u0090a\u0082\x02\u00EF\u00B1\u00EFb\x1A\u00B1\x19\u00AE6\u0086T\x00\u00AF\u00B1\u00CF\u0093\u00D8\x04\u00F9\u00C6\u009E\u00A0\x13\u00A7,B\u00AA6\u00F6\u00F1\x1C\u00B1\x11\u00DA\x0B\u008D\u008F\u00E4~5\t=t\u00E2\u00FB>\u008AM\u00D1\u008CUJ4Dkiw\u00E1&\f\u009B'E;\u00F8\f\u00DD\u00BB8\u00C7\x03Z!Q\t\x18W%Z\x04\u00B9N\u00AE=\u00C11N*f\u00E6\u0091\u009BWr\u00F3\u00B5\u00E7$N>J~\u00CE\u00A2-\x1F\x13\u00D0\x00O\u00CB<X9\u008Caf\t\u009Ac\x0F\x07\u00A1y\u0081\u009FU\x1E\u00AC5\u00F1\u00A1\u00FF\f\u00DF8MZw\u009Cx\u0090m\u00FD\u00ACD\u00A7\u00F5\u00FF\u0080\u00DF\u00A1[\u00BF\u00C25d7 \u00BF\"\u00DDI\x05\u0094\u00D5l\u00EE\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("rename_BtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T23:59:07+03:00\" xmp:ModifyDate=\"2020-07-28T23:59:36+03:00\" xmp:MetadataDate=\"2020-07-28T23:59:36+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:db582601-15fe-3f48-b50e-a03049edb7b5\" xmpMM:DocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\" xmpMM:OriginalDocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:db582601-15fe-3f48-b50e-a03049edb7b5\" stEvt:when=\"2020-07-28T23:59:07+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>L\u00F9MU\x00\x00\x00\u009AIDATH\u00C7\u00ED\u00D41\x0E\x01A\x14\x06\u00E0\u0089\u00D2a\u0090(\\\u00C2\t\x14\"j\u00CA\x15N\u00E5\x00.\u00E0\n_D(\u00B4\n\r\u008Dd4[\u0088D6dv)\u00A6\u00F8\u00EB/o\u00DE\u00FC/\u00C4\x18C\u00DD\t\x19\u00C9\u00C8o\x11\u00F4q\u00C0\x1A\u00ED\u00E4\b\u00BA8\"b\u0089VR\x04\x1D\u00ECK\u00A0H\u00FE\\\u00E8a\u0087;\u00E6\u00C9w\u0082A\u00B9\u0083\u0088-\u00C6\u0098`Z\u0091\u00D1'\u00C8\u00A6\x04\"\u00CE\u00B8\u00E0Z\u0091\x1BN\u00FF5I#;y\u00F3\u00BB\x16\u00B5\u0095\u00F1\u00A5'\u00AB\u00E4=i\u00AC\u00F1O\u00D0\f\u00C3\u00DA&\u00C9\u00A7>#_\u00E5\x01\u00EB\u00FEW\x07qa\u00B6\x18\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("loopOutIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DDiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-30T11:46:04+03:00\" xmp:ModifyDate=\"2020-07-30T11:52:30+03:00\" xmp:MetadataDate=\"2020-07-30T11:52:30+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:2895003e-8ffa-d841-a077-31b1b293f09f\" xmpMM:DocumentID=\"xmp.did:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\" xmpMM:OriginalDocumentID=\"xmp.did:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\" stEvt:when=\"2020-07-30T11:46:04+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2895003e-8ffa-d841-a077-31b1b293f09f\" stEvt:when=\"2020-07-30T11:52:30+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00E6\u00DC\rG\x00\x00\x01lIDATH\u00C7\u00ED\u00D4\u00CDJ\x02Q\x18\u00C6q\u00B1Y\u00E8J\u00A8\u00A8E\x10D\x04\x11.\u00DAE\u0085Tf\u00EB\\\u00F6I\u00CB\u00A8\u0085\u00A8P\u00D92\u00BB\u0088\u00CA\x1B\u00E8\x12\u00F2\x06Z\u00968\u0091\u00E1-\u00B4\b\u00E9\u009BZL\u00FF\u0081'8\fglU\x10\u00CC\u00E2\u0087\x1E\u00CF{\u00E6\u0099\u00F1\u009Cwb\u009E\u00E7\u00C5~[,\n\u0089B\u00FE.\u00A4\u00DDn;XD\ru\u009C!\u008B\u00B8\u00A5.g\u00D4\u00D5T\u00E7t\r\u00A1\u00A0\x07\x15\u00BC\u00E0\x03\u00AF\u00FA|F\u00C1\u00A8K\u00E2P\u00F3\u009FxS\u009D\u00BF\u00EE\u00C0\u00BF\u008E5\u0084\u0089\u0094\x16z\u00B8\u00C2&\u00C6\u00B1\u0082\x1B\u00FD^T\u00ED\u0092\u00C6\u00FE\u00EF;\u00C8`[\u00EB<\x05\u00A5l!e\u00DC\u00C3E?F\u00B0\u008By\u008C\u00E9\x02\u00EF\u0098F\x1F\u008E1\x1A\u00F8'\x06p\u00AB\u00EB\u0094m!\u00AE\u00EEb\x19\u00BD\u00B8\u00D4\u00F8\x11y\u00A4\u00F1\u0080\x16\x12a\u009B\u00CC\u00DC\u00AA\u00D6\u00B9\u00B6\u0090\u008E&\u00871\u00AB\u00EF\u00DF\u00CEUS\u00D5\u00B8\u00DA%$\u00AD\u009A\u008E-\u00A4\u00A9\u00C9\u00BC\u00E5I6T\u0093\u00C0\u009D\u009Eh*$dM\u00EB\u009A\u00B6\u0090R\u00C8\u009E\u00CCa\x12G\u00DA\u008B\x19\u00EDM\x03C\u0081\u0080AcOJa\u00A7\u00AB\u00A2\u00BB\u00B8\u00C6\x16&\u00B0n<eN\u00B5E\u008D[:U\x19\u009D\u00B2F\u00D7\u00D3e\u00F4\u00C9\u00BE\u00D1'\u00C1\u00F3\u009F4j\x0Bx\n\u00D4\u00F9\u00FD\u00B4\x17\u00DA'\u0081N\u00CE\u00AA\u00D3/p\u00AA7\u0080\x13\u00A8\u008B\u00EBx\u009F\u00A8\u00E3\u00FD\u00BA\u0085\x1F;>z\x0BG!\u00FF/\u00E4\x0BR\u00A0_\x06\u00DB\u009BM\u00FC\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("loopInIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00A8iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-30T11:46:04+03:00\" xmp:ModifyDate=\"2020-07-30T11:54:33+03:00\" xmp:MetadataDate=\"2020-07-30T11:54:33+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:ab9ff810-8e1e-bf41-a341-6bab634a2a3b\" xmpMM:DocumentID=\"xmp.did:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\" xmpMM:OriginalDocumentID=\"xmp.did:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:d3a3b2ad-1cd1-8043-81c3-54bbda3622ae\" stEvt:when=\"2020-07-30T11:46:04+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2895003e-8ffa-d841-a077-31b1b293f09f\" stEvt:when=\"2020-07-30T11:52:30+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:ab9ff810-8e1e-bf41-a341-6bab634a2a3b\" stEvt:when=\"2020-07-30T11:54:33+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>:z\x18\u00B5\x00\x00\x01oIDATH\u00C7\u00ED\u00D4\u00BDJ\u00C3P\x18\u00C6\u00F1P\x1D\u00ECTP\u00D1A\x10D\x04\u0091\x0En\u00A2R\u00D4\u00B6\u00CEv\u00F4\x13G\u00D1A\u00DA\u0082ZG\u00EBE\u00F8q\x03^\u0082\u00DE\u0080\u00A3\u0096F\u00AC\u00E4\x16\x1C\u00A4\u00F8\u00D1\u008A\x0E\u00F1\x1Fx\x02!\u009E\u00D8IA\u00C8\u00F0#='o\u00F2\u00E4p\u00CE[\u00CBu]\u00EB\u00B7YqH\x1C\u00F2w!\u008E\u00E3t#\u008Bs\\\u00E9\u009A\u00F7\u00E6Cu\t\u00D5\u009D\x05\u00EAr\u00E1\u00BAo!\x14t\u00E1\x00o\u00F8@\x1B\u009Fh\u00E1\x10\u00C9@\u00ED.^U\u00D7\u00D2\u00D5{\u00AE\u00E2\u00BD\u00C7\x18\u00C2\u008D\u0094\x02\\\u00DC`\x0B\x19l\u00E3N\u00F3\u008B\u00AA-j\u00EC\u00CD/c\x1C\x1Bz\u00CE\u00D5\x07\u00A5L!e<\u00E2\x1E\x03\u00A1\x15\u008E\u00E2\x18}\u0098\u00C6\u00BB^8\u0086y\u00EC`\x04\u00FD\u00B0\u00F5\u009E\u00B2)\u00C4\u00D6W\u00ACDm \u00F7z\u00D0\u00C0\x13\u00D2(\u00E0Y\u00CF]\u00A3\x17K\x1A\u00DB\u00A6\u0090\u00A6n\u00A6\x7F\b\u00A9\u00AA\u00A6\u00AA\u00F1\u0085\u00C6\u00BEY\f\u00EBw\u00D3\x14R\u00D7\u00CD\u00D5\u0088\u0080)\u00AD\u00E0\u00C1[\u0091\u00E6\u00D6\r+)h\\7\u0085\u0094\x02{2\x18\n\x18BM{1\u00A3\u00BD9\u00C2$\u00E6\"\u00F6\u00A4\u00D4\u00E9t\u00D5t\u00AA2:e\r\u00CD\x17U\u009B\u00F7\u00BF\x16k\u0098\u00C0&n5_1\u009E\u00AE@\u009F\u00EC\x05\u00CE\x7F[\u00D7\x17\u00AF/\x02uIC?\u00F9}\u00B2\x1F\u00D9'\u00A1\u008E_\u00C0\u00A9:\u00F9D\u00C74a\u00A8\u00CB\u00A9\u00EER\u009D\u009F\u00ED\u00D8\u00F1\u00F1\u00BFp\x1C\u00F2\u00FFB\u00BE\x00\x1F\u00A8_\x06\u00B9Q\u00B3\u00A7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("keyControl_BtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00A8iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-26T22:04:58+03:00\" xmp:ModifyDate=\"2020-07-30T13:27:21+03:00\" xmp:MetadataDate=\"2020-07-30T13:27:21+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:a60b3a24-9e8a-864d-8c92-d2356864e52c\" xmpMM:DocumentID=\"xmp.did:9e749d16-6c45-434e-b0a9-9434194487d2\" xmpMM:OriginalDocumentID=\"xmp.did:9e749d16-6c45-434e-b0a9-9434194487d2\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:9e749d16-6c45-434e-b0a9-9434194487d2\" stEvt:when=\"2020-07-26T22:04:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:4393088d-46fa-b545-9b23-589f3d6a2cab\" stEvt:when=\"2020-07-30T13:20:05+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:a60b3a24-9e8a-864d-8c92-d2356864e52c\" stEvt:when=\"2020-07-30T13:27:21+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00D6\u00CB\u00FD.\x00\x00\x01 IDATH\u00C7\u00ED\u00D5M+Da\x1C\u0086\u00F1\x19$\u009A1/vJ\u00E2\u0097\u00B7\u00B2\u00B2\u00B2\u00F1\x05\u00E4\x03X*\x0Bk\u00D9\u00FB\"\u00F8\f\u00CCF\u0093\x1D\u0085\u00A8\u00D9\u00DA\u00C8\u00EC\u0088\u00C9\u008E,\u00AC\u00C6\u00E6?5M&\u00A7y)dqu:OO]u\u00DFw\u00E7\u00A4\u00EA\u00F5z\u00AA\u00DF\u00A4\u00FE%\u00BFW\u0082\x1D\u00D4q\u008B\u00C9\u00AE%(\u00A3\u0084\u00E3\u00E0\b\u00D5\u0090T1\u008B\u00958o\u00BEWB9\u00A9\u00A4\u0086\u00A7&\x1E\u00F1\x1E\u0092;\u00CC`\u00AD\u00E5N\u0083ZR\u00C9\x12\x160\x1FO8\f\u00C9\x03\u00E60\u008C\u00A9\x16`\u00B1\u009BN\u0096\u00B1\x1F\u00DDd0\u0080!\fb\u00A0\u00A3\u00E2\u00B1\u008E\x03l\"\u00DD\u00F3ua\x12g\x11\u00CF\rF1\u0086\u00E9\x04H*y\u00C2GH\u00CE#\u00FF]<\u00B7)\u00BB\u00A3\u00E2O\u00F0\x12\u0092\x0B\u008C`\u00A3e\u00AE_\u0091|\u00C2!j\u00AC\u00E9\x14#\x7F\u00F7\u00DB\u0085\x1C\u00F6\u00B0\u008Dl'\u00EB\u00CA\u00C5\u009A\x1A\u00E4\u0082L\u00BC\x17\u00B0\x15q\u00BEb\x15\u00E98\x1FO*\u00A9\u00C4t\u00AF\u00DBp\u0085\u00FB\u0090\u00BC\u0085d\x02\u0097\u00A8\u00FC(I\x11yd#\u00A6|\x13\u0085o\u00E2*\u00F6\u00AB\u00F8\u00CC\u00FF\u00EF\u00B7g|\x02\x16\x1F\u00C3\u00FF\u008B\u00AEK\u00CC\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("cloneIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00A\x00\x00\x00\x19\b\x06\x00\x00\x00n*C\u00DF\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x01sIDATX\u0085\u00ED\u0095\u00D1q\u00830\f\u0086\u00BF\u00F4\u00BA@\u0086\u0088\x16\u00A0#\u0084\x11\u0092\x11\u00C8\b\u00C9\b\u00C9\be\u00842\x02Y!\x0B(;\u0094\x11\u00E8\u0083\u00E5\x0B%`\u00D3^\x1F\u00FA\u00A0\u00EF\u008E\u00C3\u0087\u00E5_F\u0096dp\x1C\u00C7q\x1C\u00C7\u0099f\u00953P\u00D5\x1Dp\x04\n\u00A0\x03\x1A\u00E0$\"\u00DD\u00C8\u00AE\u00B7a)\"\u00D7\u0084\u00DE\x16\u00A8\u0080\u009D}j\u0080zj\u00CD@\u00F3 \"u\u00CA\u008F\u00E9\u00B6\x13.\u0093\u00FB\x01xIM\u009A\u00F0\x07!\x00\x00k\u00FB\u0081\u00F7\u00D4\u00BA\u008C^\u00CB#\x00\u00D8\u00B8\u00B5\u00B99\u00CE\u00AAZ$\u00E6\u00C7\\\x07O\u0097\u00B1\u00E553_\u00D9\u00BB\x01\x0E\u0084 \u009Cm\u00FC\x1B\u00A2\u00DE\r(m\u00DC\x12\u0082\\\x116=\u00C5\u009A\x10\u00A8\u00B7%ND\u00A4\x04\u00E8\u00FB>g\n\u00E4\u0083\x10O\u00AC\u00B6\u00F4\u00EF\u0080\u00FD\"\u00E5\u00B4\u00DE%\u0096\u0093\u00AA^\b\u00D9\u00B6\u009B]\x15X\u009B]\x16Um\x01\u00EE\u00F7;\u009B\u00CD\u00A6\u00CC\u00D9\u00E7\u0082\u00F0_\u00B8\x11\u00B2eiI\u00A4J\u00EB\u0089\\\x10\x1A\u00C2\tU\u00AAzcP\x0E\u00E3\u00C6\u00B8\u0090\u00A8wT\u00D5\u0098\u00FA\u00C7\u00C1\u00DC\x1C'\u00F3\u00BB(\b\"\u00B2\u0082\u00BF+\u0087\u009A\u00B0\u00E9\u00F8\f\u0099+\u008B\u00B3\u00AA\u00C6\x005\u00B1\u00AB\u008F\u00F4\n\u00E0s\u00C2W\u008A\u0092G\u00FFH2,\x07\u00EC\u00F6I\u00D9'o\x07\u00BBZ\u00F6\u0084t\u0084\u00D0\x13j\u00D2\u008D\u00B1 \u00A4\u00E3\u0096\u00909c\u00BD\u0092\u00EF\u00A7\u00DE\u00B0\u00E0\x1A\u00B3\u00CC;\u00B0\u00A0\u00DB\x0F\u00FC?\u00ED\u00C1q\x1C\u00C7q\x1C\u00C7\u00F9!_\u00F3m\u0085!:\x10\u00F5\u00CB\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("bounceIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00A\x00\x00\x00\x19\b\x06\x00\x00\x00n*C\u00DF\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x01\u00B1IDATX\u0085\u00ED\u0095\u00D1m\u0083@\f\u0086\x7F\u00AA.\u0090\u008E\x10\t/p+\u00E4FHFHG #\u00C0\ba\u0084f\u0084\u00B0\x02\x0B8\x12#\u0094\x11\u00DA\u0087\u00F35\u00CE\u00F5\b\u00A0\u00AAo\u00FE\u00A4\x13$>\u00EC\x1F\u009Fm\x00\u00C30\f\u00C30\u008C<\u00C5\u0094\u0081\u0099w\x00\u00AE\x19\u00D3\x05\u00C0;\x11\u008Dj\u00DF\x11\u00C0^\u00D9[\"\u00EA\u0094\u00AF/\u00B9\u00F5D\u00D4i\u00DFDT\u00A8\u00DF\u00A3\u00EC\u00E9\u00D3=\u00CAW%\u00F1\u00B6\x00\x06\u0089\u00D5$q4\u00A7h\u009F\u00E2\u00E5\u0099Q\u00D1\u00C9\u0082\u00BCl%A\u00A3\u00D0\u00BD\u00DA\u00BB\x07p\x15\u00DBZ6\x00\u00CE\u00CC\u00BC\u00C9\x19%\x015B\x02 \u00D7Z\u00FE\u00D7\u00F4J\u00F38\x17tQ\x12\u0088\u00C8\x13\u0091\u00C7=\x11Q\u00C4Q\x05}\u0093\u00D5'\u00B6\u00B58\u00E4+\x10\u0090\u00E4#\u009Cn\x01\u00C0CU\u0082\u00E2T\u0096\u00A5\u0097\u00D5\u00CE\x05|]\u00A2Je\u00DA\u00C9\u00F5\"\u00D7X\x01\u008Dj\u008F\x06\u00C0\x07\x1E\u00ABc-\x0E\u00E1\u00C4\u00B5\u0086\x1DB\u00A5 \u00BE\u00B4\u00B4\\\u00F7\u00EBi\u00A0\u00BE\u00DDn\u00B1\x02N\u00B8\x1FL\u0096EIH\x04\u008DQ\u00CC?\u00D1#$\u00C1\u00CDm|\u0082~vV\u00EB\u00D2v(\u00A4\u00FC\x0E\u00E24&%VD\u00C5\u00CC\x1B\u00E9\u00E5*\u00B1\x01a\u0080iq.\u00F9_s@\u00A6\u008F\u00E5\u00D4c\u00B5\u00FD\u00CC$f>g|\u00F8\u00B2,\x0BY\u00B9Jy`i;\u00C4\x1E\u008D\u00B3 \u008Al\x11\u00CA\u00DE\x01\u00F8L\x1Ek\u0093\u00FB\x1Aa\u0088\u00D5\x13{\x00\x00D40\u00B3G\u0098\x0B\u00E9)69?\u00CC<$sA\u00B7C\u008F\u00D0\x12\u0093,\u00FD:\u00ECdm\u00C5\u00E9A\x04w\b\u00C3I\u009F\u00FA\x05\u00F2)T/\u00D6\u0088\u0090x\u00F2\x03\u009E|\u00BA\u0088(+|\u0085\x1F\u00A74\u00FF\u00A5\u00AD\f\u00C30\f\u00C30\u008Co<;\u00B2\u00B4\u0084\u00BE\x17\u00C7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("elasticIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00A\x00\x00\x00\x19\b\x06\x00\x00\x00n*C\u00DF\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x01\u00B1IDATX\u0085\u00ED\u0095\u00E1\u00AD\u00DA0\x14\u0085\u00BFWu\u0081\u00AC@\u00A5\u00B3\x00\x1D!\u008C\x10F\u00A0#\u0094\x11x#4#\u0090\x11`\u0084\u00B2\u00C0\u0089\u00C4\b\u00CD\b\u00F4G\u00AE\u008By\u0082\u0090\u00A2\u00AA\u00BF\u00FCIQl_\u00E7\u00FA\u00E6\u00F8\u00FA\x1A\n\u0085B\u00A1P(\x14\u00EE\u00F36e\u00B4}\u00B93\u00BC\u0095\u00F4n\u00BB\x06\x0E\x00\u0092\x1E\u00FA\u00B1\u00FD\x03\u00D8D\u00F7\u008B\u00A4sf[\x02\u00DF\u0081&\u0086\u008E@+\u00A9{\u00B06\u00C0J\u00D21\u00B3\u00AF$\x1D\u00C3_\x13\u00FE\u0096\u00C0\x00t\x11\u00EF0\u00F5\u009F\u009F\u00A7\u008C\x19\u00A7pJ\u00F6\u009EK\u00F3\u00A1\u00FD\u009E\u00F5\u00F7\u00C0\x028\u0087\u00DF\u009AQ\b\u00B2w\u00FD!\u0086\u00BB\u00EB\u00C7\u00A6\u00EC\u00B3\u00A1\u008AQ\u00FC\nXO\x058W\u0084mR\u00FBo\u00B0\u009D\u0082Hl\b\x11\"\x0B\x161\u00FEU\u00D2\x10\u00F3O\x00\u0092V1/\u00ED\u00F8\u00B3\x18R\u00B6u\u00C0\u00B7Xw\x17\u00EDI\u00E6\u008A\u00B0\u00B3\u009Dv`+\u00E94\u00F3\u00BB\u0094\x05m\x04\u00B9\u00B0]\u00DF\u00F9\u0099\u009D\u00EDNR;\u00D3\u00EF\u00E4Z\u0091\u00FE\u00C3\u00E5r\u0099\u00CC\u0080\u00C4\u00A7\u0099\x0B,\x19\u00D3\u00B2\u00E6vg\x1Fb{\u00C15\u0095[\u00AE\u00E9\u00DD\x00\u0084\u0090]\u008Cm\u0080\u0083\u00ED_\u0091\r\u00FF\u0095\u00B9\"\u00AC$\u00BD\u00C53\u00F7X\u00E4\u00B5\u00E0'WA\x1A\u00DB\x15\u0080\u00A45\u00E3ym\x19\u00EBB\u00C5X\u00D8^\u00E1\u008F\u00A0\u00B6+\u00DB\u008B\u00BE\u00EF\u00F7}\u00DF?\u00DD\u00B4W\u008E\u00C3I\u00D267\u00DA>d\u00DDt\\\u00D2\u008E\u00E6E5eRc\u00BBc\x14g\u00E0\u00B6\u00E0\u009Dy\u008D\u0096Q\u00F8\u00F4\u00E4\u00FC\u0093\u00C2\u00B8|b\u00AF\u00B3v\x15WU*z\u00EBt-f\u00D7\u00E5\u0086\u00F1x\x1Cc^\u00CD(B\x0B\u00DC\b<\u0097\u00B86\u00D7\u00DC\u00B9\"_\u00F1W(\x14\n\u0085B\u00A1P\b~\x03WZ\u00B1J\u008D\u00A7\rM\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("linecapIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00\u00C4IDAT8\u008D\u00ED\u0092!\x0E\u00C2@\x10E\x1F\u00A4iUek\u00A8\u00C25!\u00B4\u00A0p5\u0095\u00BD\x008\fp\x04\u00B8A\u008F\u00C0\r\u00B8@\u00F1\u00B8\u00FA\x06\u008D\x02\u0083\u00C5\u00A10-\u00D9nvi\x01\t/\u00D9d\u00E6g\u00E6m\u00B2Y\u00F8\u00F3-\x1D9\u00E8gEU\u009A\u00C0\n\u0098\x02\u00832;\x02;`\x0B\u00DC\x01N\u00C9\u00B0\u00B6oh.\u00EA\x01\x19\x10J\u00F9\u00A4<s \x01.\u00F2bW!352\u0091\x10\u00D8\x03V\x1B\u00E1\u00B2AV\x11\x00\u008B6\u00C2\u0099\u00D8D\u008EM\x1E\u00FB\u00E4\u00B1O\u00E4\u00D8/gu\u00C2\u00B1\u00D8\u00A4\u0081\u0087k\x19\u00B8\u0096A\x1Ax\u00F2\u00EC\u00A8\u008D\u00D0Td\u0080\u00E2K\u00B4|\u00C3\x1A\u009B\u00E2\u00FC\u00AC\u00D7B\u00AD\u00A3Qx\u00B8\u00DE\u0094\u00F5\u00C7\u00C2w\u00F9\x0B\x7F\u0081\x07\u00C1\u00D7\x1C\u00EF\u00D2\u00E0\u00AEN\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("linejoinIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00_IDAT8\u008Dc`\x18\u00EC\u0080\x11]@i\u00CB\u00A5\u00FF\u00E8bw\u00BDu\x19\x18\x18\x18\x18\u0094\u00B7^\u00C60\u00E0\u009E\u008F\x1E\u008A\x19L\u00D4s\u00DB\u00A8\u0081t3\u00D0^\u0094\x17+\u009Bl\x03;\u00F4e\u00B0\u00B2\u00C96\x10\x19`$Zr\f\u00AC\u00BC\u00F4\x04\u00CE\u00AE@b\u0093m\u00E0\u0081W\u009F\u00B1\u00B2\u00C96\u0090T0j\u00E0H\x00\x00\u00AB<\x13 \u00E6\u00E2\x01\u00FD\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("easeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00\u0087IDAT8\u008D\u00ED\u00921\n\u00C2@\x10E\u00DF\u0084T\x01\u00AFfk\u00B1\u00E7\u00B3\u00F0\x02i\x02\u00B9\u0094\u00A5\u009Ag\x13A\u00D6]Y\u00C1*\u00E4\u00C3\u00C0\u00B0\u00C3\x7F\u00FCa\x07vm_QzTO@\x0F\u009C+\u00BE\x04\x10\x11\u00B5\u00F9\x07pT\x1FjR\u00C9*\u00AD\u00B3\u00A99\u00B6:\u00A8s\x01\u00FA\u0082\u00CD\u00EA\u00F0\x0B\u00F0\x1DzS\u008F9L-z\u00BB\x06~\x07\x1C\u0080+\u00B04\u00A7\u00CA\x12\u00FE}\u00E5\u00A9\u00E1S\u00C6\u0092\u00B7v6im\u00BF\u009D\u00CD=\".\u00CD)wmHO\u00C1\u0087\u00B7b3\x0B\u0099>\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("easeInIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00eIDAT8\u008Dc`\x18\x05\u00A3\u0080\u00E1\u00FF\u00FF\u00FF*\u00FF\u00FF\u00FF\u00CF\u00FE\u00FF\u00FF?\x03\fSj`\u00DF\x7F\b\u00A8\u00A0\u0096\u0081\u00CC\u00FF\u00FF\u00FF_\n5\u00B4\u008C\x1A\x06\u00A2\x1B\u009A\u0089O=\x13\u0091\u00E6\u00FEe``\u00B8\ne[S\u00C3\u0085\x15P\u00D7-\u00FD\u00FF\u00FF?3\u00A5\x06\u0096 \x1BF\u008D0t\u00FA\u00FF\u00FF\u00FFl\u0098a\x14\x1B8\n\u0086\x01\x00\x00F\u00B4v\u0082\u00A9\u00EDPE\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("easeOutIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00mIDAT8\u008D\u00ED\u00CF\u00A1\r\u00C2P\x14\u0085\u00E1\x13\x04\u00E2\u00F9'\u0098\x03\u0081g\r\u0086a$6`\u0089\u00EEP_KB\u00BE\u00CAV4i\u00F2Z\x05\u00FD\u0093k\u00BF\u009C\u009B\x1C\u00FDy\u0098_\u00C1\x13\u00E7=\u00C0\u00827\u00BE\u00B8o\x05\u00E7\u00D8\x03\u00CD\u00DE\"\u00B6\x06\u009EV\u00CC\u0092\u00A4&\u00F9$\u00E9\u00DB\u00A7M\x0B\u0083\u008A\x0E\x03n[_^B\u00AF{\u0080\u00C1\x05/\u00D4\u00F6\u0089G\u00BF\u00D1\b\u008C\u00B3\u008BS\u0093\u0098Y\u00B9\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("storeEaseIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00`IDAT8\u008Dc`\x18\x05\u00C3\x1F0\u00C2\x187o\u00DE\u00FCO\u00ACZl@]]\u009D\u0081\u0081\u0081\u0081\u0081\u0089B\x07a8\x02\u00D9@F\x1C\u00AE\u00C0%\u008E\u00D5P\x16\x1C\x06\u00FCGb\u00E3t\r\u009A\x1C#\u00BA\x0B\u00A9\x02\u00B0\u00B9\u00F0?\x1A\x1B\u00E6Jl\u00DE\u00C6\u00F0\t\x0B\x16I\u0082\u009A\u00D0\x00\u008A8\u00A5^\u00C6\u009B\u0094F\u00C1p\x05\x00\x068\x0E\x19\x10w\u00E1u\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("importEaseIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00`IDAT8\u008D\u00ED\u0090Q\x0E\u00C0 \bC\u00CB\u00B2\u00BBp\u00FF\u00E3p\x1A\u00F6eR\f\u008E\u0099\u00FD\u00A9\u00EF\u008B\u00A8-\u00AD\u00C0a}\u00A4\rfV\u00BD\u00F5\u00B7KU\x15\x00\u00B8\u00FE\u0098dT\u0086l*\u00A0FD8\u00BF?\u00A6q\x12I\u00B7d:\u00E1\x14\u009C0\u00AB\u0093%\u00F1n\x0E:6\x1C\u00D1\x04\u00A3/\tK\u00AB\u00CAY\u00EA\u00C3\u00F6<\u00E5\u00C9\x0E\x19<D\x19%\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("addNullIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-03T22:10:04+03:00\" xmp:ModifyDate=\"2020-08-03T22:11:37+03:00\" xmp:MetadataDate=\"2020-08-03T22:11:37+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:ed2a3f7d-8790-b741-98a8-274f36788a2f\" xmpMM:DocumentID=\"xmp.did:ed2a3f7d-8790-b741-98a8-274f36788a2f\" xmpMM:OriginalDocumentID=\"xmp.did:ed2a3f7d-8790-b741-98a8-274f36788a2f\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ed2a3f7d-8790-b741-98a8-274f36788a2f\" stEvt:when=\"2020-08-03T22:10:04+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>3\u00D6\x1B\x15\x00\x00\x00\u00F4IDATH\u00C7\u00ED\u00D5AJ\u00C3P\x10\u00C6\u00F1\u0082\x14\x02\u0081\u00D6\x1BX\x0F\x10\u00D1@\u00CF\u0091.\u00EC)\u00EA\x15\u00EA]\u008C\u0097i\u00E8\t~\u008B\u00F6\x12.\\\u00B8\u0088\u009B)d\u00D3\u009AW\r\u00A8t1<\x1E\u00F3\u0085?\u00F3\u00E6\u009B\u00C9\u00A8m\u00DB\u00D1\u00D01\u00BA@\u00FE\x06\x04Oh\u00B0A\u008D\u00E9\x11\u00DDu\u00E47\u00A1_\u00A5@\u00B6h#>p\u008F9\u0096\u00C8\u00E2\u009C\u00E3!\u00F2\x07\u00ED6\x05\u00D2t>|G\u0081\nk\u00E4qV\u00B8\u008B\u00FCA\u00DB\u00A4@j\u00BCE\u00ECp\u0083+\u008C#?\u008E\u00FB\f\u00FB\u008E\u00B6N\u0081L\u00E2)\n\u00CCN55@E\u00E8'I\u00EEB\u0089E\x1F\u00F7`\u00812\u00D9\u00C2\u00D1\u00DC\u00F5\u00E1\u0089N\u00E8\u00C6\u00A1[\u009E\x03\u00C9\u0090\u00F7\u00AC$G\u00F6k+)Q\u00F5\u00AC\u00A4J\u00EE\t\u00A6\t\u00EE\u00BA=\u00CB]x\u00EDx\x7F?\u00D4\u009C|5\u00F1\u00CFq/\u00BE3\u00F1\u00C7v\u00D7\u00E3O\u00EE\u00AEUg\x0B\u00BF\f\u00B2\u0085/\x7F\u00C6\u00FF\x0F\u00F9\x04awO\u00D2Q\u00AD\u00CFn\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("wiggleIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-02T23:16:58+03:00\" xmp:ModifyDate=\"2020-08-02T23:17:25+03:00\" xmp:MetadataDate=\"2020-08-02T23:17:25+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:945e1142-d235-9643-93f5-a40b4aec0716\" xmpMM:DocumentID=\"xmp.did:945e1142-d235-9643-93f5-a40b4aec0716\" xmpMM:OriginalDocumentID=\"xmp.did:945e1142-d235-9643-93f5-a40b4aec0716\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:945e1142-d235-9643-93f5-a40b4aec0716\" stEvt:when=\"2020-08-02T23:16:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00A9\u00BB\x1D\u00A6\x00\x00\x01\u00D2IDATH\u00C7\u00ED\u00D5\u00BFK\u00D5Q\x18\u00C7q\u00AF\u00D7\u00A1\u00A1\u00F4\u00D2\u00E0b\u00EDbX&\u0085A\u00F4\u0083\u00A0\x7F@j\u008C\x10\tZ\u008A(p*\u00EA.\r\u00859\u00A9-\u008DA\u00FF@\u0083\u00B9U\u008258\x05\u00F2Zj\u0093thK\u00C9\u00D2\u00DB\u00D0g\u00B8|\u00E9~\u00BB\u00F6c\b\u00FC\u00C2wx\u00CEs\u009E\u00F3~\u00CE\u00F3\u009C\u00F39\x1D\u008DF\u00A3\u00E3_\u00FF\x1D\u00BB\u0090\u00BF\x0EA\x05=\x18\u00C05\u00BC\u00C0\x02\u0086\u00FF\b\u0082*\x0E\u00E3\x02\u00A6\u00F1\x01\u008D\u00FCk\u00D8\u00C2\x13T\x7F\x0B\u0082.\u00DC\u00CCb\rl\u00E35&q\x11\u00FDx\x1E\x7F\u00AD)\u00AE\u00E7g\u00D0V\u0090}x\u0095\u00C5\u00C7\u00B2\u00A3\u00EE\u00F8\u00FAp\x05\u00CBI`(\u00E3u\u00BCm\u0086\u00FE\n\u00D2\u0089\u00D9@\x0Ea\x18\u00F7\u00FD\u00F86\u00F1\x05\u00EB\u00F1O$f2\u00D0\u00E3;\u00E9\u00C9x\u00EA\u00BE\u009D\u00E0\u00CFx\u0087g\u00B8\u008Cs\u00E9\u00D3B\u00E6\u008F\u00E2+n\u00A3\u00AB\x14\u0082\u00DE\u009C\u00A6#X\u00C1*n\u00E1<\u00F6\x17\u00E6\u00CEc\x035\x1C\u00C0{,\x16KV\x04La\t#i\u00FE\"VKv[O\u00F6\u00A3\u00B1\u00E7\x02=Q\x06y\u0098\u00D2\u00DC\u008D=\u0093EN\u00B5\u0080\u009C\u008E\x7F:\u00F6\u00BD\u00C4?(\u0083\u008C$\u0093\u00B9B\u009D\u00EB%\u00BB\u00F9\u0098\x1Dw%~\tSe\u0090\x1A\u00DE\u00A4\u00B6}\u00B170_\u0098\u00B7\x07'q=\u0090\u0095\u00F4\u00B0\u0082\u00DE\u00D2\u00D3\u0095l\u00EE\x14\u00EA\u00BC\u0090St\x06\u0097\u00F04\u00D9~jR\u0080o\x18o\u00FB\u00C6\u00E3X\x02\x1F\u00C5\u009E\u00C81^\u00CF\u00FD\u00D8L\u00E6\u008Fq\x16\u0083\u00F1\u00CF\u00A2\u00B3]H-7\u00B7\x1E{(\u00D0e\\\u00C5\u00C1\u008CwG\t\u00C6\x02y\u0089\u00BD\u00EDB\u00AA\u00E8)@\u00D7\u00A2U\u00FD\u00D1\u00AE\u00C9h\u00D9v\u0093`\u00DEh%\u0096\u00ED\u00C8|5j\u00BB\u00D5$\u0098\u008D\u00F4i:*=\u00D8\u00AAT;yO\u008E&\u00F3\u00F9\u00BC'\x03Q\u00DC\u00CA\u00EE\u00F3\u00FB\x7FB\u00BE\x03H\u00B8`O\u00C7\u00B6\u00D5\x11\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("selSimilarIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-03T19:55:56+03:00\" xmp:ModifyDate=\"2020-08-03T19:56:57+03:00\" xmp:MetadataDate=\"2020-08-03T19:56:57+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:80a0b56c-e8d3-1a4e-9e23-479c45a7a42d\" xmpMM:DocumentID=\"xmp.did:80a0b56c-e8d3-1a4e-9e23-479c45a7a42d\" xmpMM:OriginalDocumentID=\"xmp.did:80a0b56c-e8d3-1a4e-9e23-479c45a7a42d\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:80a0b56c-e8d3-1a4e-9e23-479c45a7a42d\" stEvt:when=\"2020-08-03T19:55:56+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00E1S\r)\x00\x00\x01\nIDATH\u00C7\u00ED\u00D5\u00BD.\u0084A\x14\u00C6\u00F17\u0088\u00A5\u00E7\x02(t\x12\u008DH\u00B6\u00D7\u0089F\x16\r\u00D7\u00C1n\u00AB\x10+\u00D1iD!J\u0085F\u00C4\u00C7\x05\u00B8\x03\u00F2K$\u00A2\x10%\u008276\u00C2\u00ABp\u008A\u008D\u00A8vw\x14\u00B2\u0093\u009Cbf\u0092\u00F9\u009F3\u00F3\u009Cg\u00B2\u00A2(\u00B2\u00D4\u0091u!\x1D\u0081`\x14\u00FB\u00B8B\x15\u00A5\x14\u0090s\u00E4\u00BEG\u0081Z\nH\u0081m\f\u00E1\x01\u00A7\x18\u00EC4\u00E4\x06\u00D7\u00D8A\x03\u00BB\u00E8\u00EB4d\x01/Q\u00D1\x05\u00C6\u0092\u00A8\x0B\u00F5\u0080,%\u00930\u00D6\x03r\u00F0\x17\u0090\x06*)!\x1F\x119\u00E6\u00D0\u00D3\u00B4?\u0089\x15\u00CC\u00A2\u00BFU\u00C8\x06\u009E\u00B0\u008A\u00DB&YOa9\u00C0\u009F\u00B1^o\u00E7\u00E1sL`\x1C\u0087q`\u0081W\u00DCEuGxn\x15\u00B2\u00897\u0094c>\u0080il\u00E1\x1E\u008F\u0098\u00C1qK\x10,F\u00B6\u00BF\u00F6\t\u00E6\u00E3*\u00DF#\u0091z\u0092\u008EG\x19k\u00A8\u00A0\u00B7\x1D\u00EF\x1A\x0E\u00EF:K\u00E1]'?\\\u00B8\u009A\u00C2\u0085G\u00B0\u0087\u00CB\u00E8\u0085R\u00F7\u00FB\u00FD?\u0090/r\x19`\u00A2\u009D\r\u00FDm\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("BL.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00<IDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\u00F4\x1F\u00CA\u0084\x01\u00B8\x1C1\u0080\u00DBz\x1D\u0098f\x02\u0093T\x04\u00A3\x06R\x0EF\r\u00A4\x1C\fm\x03Ay\u009B\x14\f\x06#0\f\x07;``\x00\x00)\u00F7\x10\x14\u00DB\x15m\x11\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("BM.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00DIDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\x04ea\u0080\u00FFP\x1A\x06\u00E0z\u0090\x01\u00B7\u00F5:0\u00CD\x04&\u00A9\bF\r\u00A4\x1C\u008C\x1AH9\x18Z\x06\u0082\u00F2,6\u008C\x0E\u00B0\u00A9\x01a0\x18\u0081a8\u00D8\x01\x03\x03\x00q\u0097\x10\x14\u00C5\u00A5\u00DF\u00E0\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("BR.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00<IDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\x04e\x11\r\u00FECi0\u00E0\u00B6^\x076\u008B\t\u00CC\u00A3\"\x185\u0090r0j \u00E5`h\x19\b\u00CA\u009B\u00A4`\u00AC`\x04\u0086\u00E1`\x07\f\f\x00\u00B97\x10\x14\x13\u00FB\u00B5N\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("ML.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00EIDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\u00F4\x1F\u00CA\u0084\x01\u00B8\x1C1\u0080\u00DBz\x1D\u0098f\x02\u0093T\x04\u00A3\x06R\x0E\u00F0\x19\b\u008AuR0\x18\u008C\u0086!\n\x00\u00E5\x14R0\x18\u008C\u0086!\u00E5\u0080\u00EA\x06\x0Ev\u00C0\u00C0\x00\x00\u00F8\u0081\x10 \u00CE\u009B\u00EE\u00CD\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("MM.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00HIDAT8\u008Dc`\x18\u00EC\u0080\x11\u00C6\u00F8z4\u00E8?%\x06q[\u00AFcd````\u00A2\u00D4E\u00E8`\u00F0\x1B\u00C8\u0082G\u008E\x11\u008F\x1C\x03\x03\x03\x03\u00D60\x1F\u00FC^\x1E5p\x10\x1A\u0088/\x1D\u0092\u0095\u00B7\x07\u00BF\u0097\u00A9n\u00E0\u00E0\x07\x00\u00D4T\x06#K\u0094f\r\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("MR.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00EIDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\x04e\x11\r\u00FECi0\u00E0\u00B6^\x076\u008B\t\u00CC\u00A3\"\x185\u0090r\u0080l (\u00D6H\u00C1X\u00C1\b\x0FCPJ'\x05c\x05#<\f\u00A9\x02\u00A8n\u00E0`\x07\f\f\x00\u0088\u0090\x10 v1\u00C2\u0090\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("TL.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x01sRGB\x00\u00AE\u00CE\x1C\u00E9\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00\tpHYs\x00\x00\x0E\u00C3\x00\x00\x0E\u00C3\x01\u00C7o\u00A8d\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x009IDAT8Oc\x18\u00F4\u0080\x11J3|=\x1A\u00F4\x1F\u00CA$\x0Bp[\u00AF\x03\u009B\u00C5\x04\u00E6Q\x11\fm\x03AaB\n\x06\u0083\u00D10\u00A4\x1C\u008C\x1AH9\x18\u0081\x06\x0Ev\u00C0\u00C0\x00\x00\u00FF\u00CC\x04,\u00D5p!e\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("TM.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00@IDAT8\u008Dc`\x18\u00EC\u0080\x11\u00C6\u00F8z4\u00E8?%\x06q[\u00AFcd````\u00A2\u00D4E\u00E8`\u00F0\x1B\u00C8\u0082\u00C4f\u00C4\u00A1\x06=lq\u00A9c``\x18\n^\x1E5p\u00D4\u00C0ai\u00E0\u00E0\x07\x00$u\x05#\u00FB\u00E8-\u0093\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("TR.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x00=IDAT8\u008Dc`\x18\u00EC\u0080\x11\u00C6\u00F8z4\u00E8?%\x06q[\u00AFcd````\u00A2\u00D4E\u00E8`\u00F0\x1B\u00C8\u0082\u00C4f\u00C4\u00A9\n;\u00C0\x1A\u00E6\u0083\u00DF\u00CB\u00A3\x06\u008E\x1A8,\r\x1C\u00FC\x00\x00\bS\x05\"\u0097\u009B\x07\u009C\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("addColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-30T23:31:34+03:00\" xmp:ModifyDate=\"2020-07-30T23:33:31+03:00\" xmp:MetadataDate=\"2020-07-30T23:33:31+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:038900d4-074f-5546-b70f-9e1cc7e89cbe\" xmpMM:DocumentID=\"xmp.did:038900d4-074f-5546-b70f-9e1cc7e89cbe\" xmpMM:OriginalDocumentID=\"xmp.did:038900d4-074f-5546-b70f-9e1cc7e89cbe\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:038900d4-074f-5546-b70f-9e1cc7e89cbe\" stEvt:when=\"2020-07-30T23:31:34+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00AA]\u00EA\u00CD\x00\x00\x00\u0087IDATH\rc\u00F8\u00FF\u00FF?\x03\u00AD1\u00C3\u00A8%C\u00DB\u0092\u009B7o\u00BA\x02\u00F1+ \u00CE\u00A1\u00A5%>@\u00FC\x07\u0088\u00CBhi\u0089\u00F7\u00A8%\u00A4X\u00E2\x01\u00B5$\u009FbK\u0080\u0086\u00C4\x03q*\x10\u00A7 \u00E18 \u009E\x04\u00C4\u00FF\u0080x\x15\x10G\u00A3\u00C9\u0083\u00D4\u00A7\u0092b\u00C9\x1B \u00FE\x05\u00C4\u00DF\u00D1\u00F0O \u00FE\u008FG\u00EE\u00CF\u00E0\u00F2\t]\u00E2\u0084@f\u00FC\x0B\u00C4%\u00A3\u0096\x10c\u0089/\u00D4\u0092RZZ\u00E2\x06\u00C4\u00AF\u00818{\u00B4\u00D2\x1A\u00B5\u0084 \x06\x00\u009B\u00C6X\u00C4\x14>\u00B3k\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("loadColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-01T01:49:11+03:00\" xmp:ModifyDate=\"2020-08-01T01:49:37+03:00\" xmp:MetadataDate=\"2020-08-01T01:49:37+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:25c8c975-7384-d24d-a169-bf929d6fdb23\" xmpMM:DocumentID=\"xmp.did:25c8c975-7384-d24d-a169-bf929d6fdb23\" xmpMM:OriginalDocumentID=\"xmp.did:25c8c975-7384-d24d-a169-bf929d6fdb23\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:25c8c975-7384-d24d-a169-bf929d6fdb23\" stEvt:when=\"2020-08-01T01:49:11+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x02\x15]`\x00\x00\x01\x19IDATH\u00C7\u00ED\u00D5\u00BFJ\u00C2a\x14\u00C6q\x07'\u00A1\x06\u00D7f\u00C1\u00C15D\u00A2\u00A9!p\u00D3I\x07'\u00BD\x05\x07\u00AFA\u0082n \u00BB\u0091\u00F0\n\u00FA3)|\u00C0I\u009D\x1B\u00D3\b\u00B3\u00E5\x04\u00F2\u00CB\u00E0g\u00E2\x12\x0E\u0087\u00C3y\u009Es\u00F8\u00C2\u00FB\u00BE\u00877\u00B3^\u00AF3\u0087\u008E\u00CC\x11r0\b\u00EAxB\u00FD\u0090\u0090\x0E>\u00D09$\u00A4\u008D7\u00B4\u00F7\u0082 \u008F.n\u00D0\u00C7-z8E+ \u00AD\u00A8{\u00E1\u00F7\u00A3\u00BF\u008B|\x1A\u00C8\x00+,\u00B1\u00C0;\u00C68C3 \u00CD\u00A8\u00C7\u00E1/\u00A2\x7F\u0085\u00FB4\u0090)&\u00B8B\x05\u0097(\u0085\u00D7\bH#\u00EAR\u00F8\u0095\u00E8\u009F`\u009A\x062\u00C73\u00B2\x1BZ\x11\u00D7q,\u00CB\u00C8\u00D7(n\u00F4dcn\u009E\x062\u00C3\x0Br\x1BZ\x19\u00A38\u0096\u00CF\u00C8#\u00947zr17\u00FB\x13$\u00F4\x1A^\u00B1\u008E\\K\u00F8\u00FBC\u00C2\u00AB\u00E2\x11\u00D5-\u00DEN\u0090\x1Fw\u0092\u00F0O~\u00D1w\u00BA\u0093\u00E4\u00EB\u00BAH\u00C4\u00F9\x16m\u00E7\u00D7u\u0097\u00D8\u0093\u00B4\u00F1\u00BD'\u00834\u0090B,\u00E4\x10\x0F;\u00C40\u00E6\n\u00C7\u00FF\u00E4\b\u00F9g\u0090/~\u00A8b\u00EF\u00F9\u00FE'<\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("updateColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-01T01:49:01+03:00\" xmp:ModifyDate=\"2020-08-01T01:50:42+03:00\" xmp:MetadataDate=\"2020-08-01T01:50:42+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:40fd38f4-8d9d-eb4d-8b3a-8c243ba1473e\" xmpMM:DocumentID=\"xmp.did:40fd38f4-8d9d-eb4d-8b3a-8c243ba1473e\" xmpMM:OriginalDocumentID=\"xmp.did:40fd38f4-8d9d-eb4d-8b3a-8c243ba1473e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:40fd38f4-8d9d-eb4d-8b3a-8c243ba1473e\" stEvt:when=\"2020-08-01T01:49:01+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F5\u0095AC\x00\x00\x01\x11IDATH\u00C7\u00ED\u00D5\u00BFJ\u0082a\x14\u00C7q\r'G\u00D7\u00A6\x06\u00AF\u00C0A$\u009A\u00C2\u00C5M\u00A1\u00C1M\u00C4+\b\u00BA\u008A\x10\u00BC\u0081\u00ECF\u00C2+\u00E8\u00CF\u00A4\u00F0\x01'un\u00CC\"\u00CC\u0096\u00D3\"o\u00F8\u00BE\u00A5K9\x1C\x0E\u00E7\u00F9\u009D\u00F3|\x1F8\u00E7\u00F0\u00E4\u00D6\u00EBun\u00DF\u0096\u00FB\u009F\x104p\u008F\u00C6^ h\u00E2\x19\u00EB\u00F0\u00CD\u009DBP\u00C5\x18K|\u0084\x1F\u00A3\u00BAK\u00C8\t\u00EA\u00B8\u00C6k\u00F8:N~\x04A\tW\u00E8\u00C7e\x03\\\"\u008F\x0B\u00BC\u0084\u00CF\u00C7\u00F9 \u00F2\u00FAQWJ\x03\x19b\x15/^\u00E2\r\x13\x1C\u00A3\x1D\u0090v\u00C4\u0093\u00D0\u0097\u0091\u00BF\u00C2m\x1A\u00C8\fS\u009C\u00A3\u00863Tp\u0084N@:\x11WB\u00AFE\u00FE\x14\u00B34\u0090\x05\x1EQH\u00D0\u00BA\x01\u00E9&h\u0085\u00A8[\u00A4\u0081\u00CC\u00F1\u0084b\u0082\u00D6\u00C3;z\tZ1\u00EA\u00E6\u00BF\u0085\u00B4\u00F0\u0080\u00D6\u00DE [\u00C6<\x13\u00E4\u00DB\u009El\u0081d\u00EA\u00C9\u00E6t\u009D\u00A6\u00B0\u00CC\u00D3u\u00B3\u00B1'i\u00EDkO\u0086i \u00E5X\u00C8\x11\u00EE2\u00D8(\u00EA\u00CA\u0087O\u00EB\x00\u00F9c\u0090O\u00DE\x1CbLOW\u00E4\u00D6\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("reloadColorJSONIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\fiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-01T00:17+03:00\" xmp:ModifyDate=\"2020-08-01T00:17:39+03:00\" xmp:MetadataDate=\"2020-08-01T00:17:39+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:4a297ce5-35b7-dd49-9724-4f0a1e6097a5\" xmpMM:DocumentID=\"xmp.did:4a297ce5-35b7-dd49-9724-4f0a1e6097a5\" xmpMM:OriginalDocumentID=\"xmp.did:4a297ce5-35b7-dd49-9724-4f0a1e6097a5\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:4a297ce5-35b7-dd49-9724-4f0a1e6097a5\" stEvt:when=\"2020-08-01T00:17+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u0095k\f\u00B7\x00\x00\x01DIDATH\u00C7\u00ED\u00D5;J\x03Q\x14\x06\u00E0\u00A4P0\x1A\x15A\u0097\u00A0\u0085\n>6ag\x13\x14\u00C1.\x1Bp\x05\x16\u0082\x0F\\\u0087X\u00F8\u00E8\x14\x13\u00B5t\ti>\x10lD\x10E\u00914Z\u008D\u00CD\t\fA2\u00DE\u00C2BH1\u00CD\u00DC3\u00F7\u009Bs\u00E7\u00DE\x7FJY\u0096\u0095\u00FE\u00FA*\u00F5\u0091\u00FF\u0087`\x1Ck8\u00C7\x13\u00BE\u00F0\u0088S\u00D4P\u00CD\u00D5\x0E&#X\u00C2-2\u00BC\u00E3\x12G\u00B8\u00C2G\u00DCo`\x16\x038LB\u00B0\u008C\u0087\u0098h'&\x1A\u008A\u00B1\n\u00E6\u00B0\x1F\u00E3-\\\u00A0\u00FDk$\u0096\u00E8&&X/\u00E8\u00B6\x1Eu\x19\u00DER\u0090\u00B5N\x07\x05\u00C0$\u008Es\u00C8g\nr\u008E\x17L\u00F7\x00\u00CA\u00D8\u00C4\x1D\u00AE\u00A3\u00F3\u00B3\x14\u00E4\x05\u00CD\u00CE7\u00E8\x01Ma\x02c\x18A%\x05\u00D9\u00C6j\u00CAY\u00C0\n\u00B6R\u0090\n\u00AA\u00F1\u0086\x13\u0098*\x00*\u00B1\\\u00CF)\u00C8Y<t\x1Dk\u00BE\u0089r\x0Fd\x06\u00AF8MA>s;\u00E6\x18\u0093\x05\u009D\u00ECFm-\x05y\u00CB!\u00F5\x02`#\u00EA\u00AE\u00F2\x11\u00F3\x1B\u00A4\x1D'\u00B8\x15\x13\x1C`\x1E\u00C3]'~/\u00C6\u00EF\u00B1\u0098\x14\u00908\u008C,\u009A\u008Dl\u00CA\x02n\u00FC\u0090]M,$\u00A7p>Mc\u0097\u00D5p\x12\u00E9\u00DB\u009D\u00C2\u00A3\u00FD\u009FV\x1F\u00F9\u00F1\u00FA\x06\u00D7CZ\u00A70ao\u00B1\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("hideColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-31T15:39:55+03:00\" xmp:ModifyDate=\"2020-07-31T15:40:06+03:00\" xmp:MetadataDate=\"2020-07-31T15:40:06+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:e6cb10f9-01d4-354d-ad64-fdeea928b0fa\" xmpMM:DocumentID=\"xmp.did:e6cb10f9-01d4-354d-ad64-fdeea928b0fa\" xmpMM:OriginalDocumentID=\"xmp.did:e6cb10f9-01d4-354d-ad64-fdeea928b0fa\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:e6cb10f9-01d4-354d-ad64-fdeea928b0fa\" stEvt:when=\"2020-07-31T15:39:55+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F7\u00C9\u00EC\u00AB\x00\x00\x00\u00A3IDATH\u00C7\u00ED\u00D3I\n\u00C2@\x10\u0085\u00E1\u00AC\u0082\x1A\u00DC\u0089[O\u00E7\x15\x04\x0F#8 N\x07\u00C8I\u0084|;\u0087\u0083\u00C4\u0085%d\u00A91\u0082\u008Bnx\x14\u00FD\x1A\u00EA\u00EF\u00AE\u00AA\u00CE\u00EA\u00BA\u00CE~\u00AD,A\x12$A\u00FE\x1C\u0082\x19\u00AE\u00A8<\u00D7\x05w\u00DC\"^\u00C2\u00AF\u00C2\u009B\u00B7\u0081\u008CpD\x1D*\u00B1\u00C6>b\u00D98;a\u00DC\u00AA\\\u00C8\u00B1\u008AD\x07\f\u00C3/\u00B0\r\x7F\u008B\u00FC\u00AB\u009E\u00A0\u0087e$\\a\u0082E\u00EC7\x18t\u00D2\u00F8\u00B8\u00F9\u00EBE\u00E7\x06\u00A0\u00E8t\u00BA\x02\u00B4\t\u00C0\u00EEU\u00BA\u00CEG\x18}L\u00DF)Q\u00FA\u00F1\t\u0092 \u009F\u00E9\x01\u00B7\u00CEU\x1C\u00D1M\u0088\u008B\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("showColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0E\u00C4\x00\x00\x0E\u00C4\x01\u0095+\x0E\x1B\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-31T15:39:38+03:00\" xmp:ModifyDate=\"2020-07-31T15:40:16+03:00\" xmp:MetadataDate=\"2020-07-31T15:40:16+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:15c40dcc-70c3-f840-96ba-0c779e0db3d7\" xmpMM:DocumentID=\"xmp.did:15c40dcc-70c3-f840-96ba-0c779e0db3d7\" xmpMM:OriginalDocumentID=\"xmp.did:15c40dcc-70c3-f840-96ba-0c779e0db3d7\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:15c40dcc-70c3-f840-96ba-0c779e0db3d7\" stEvt:when=\"2020-07-31T15:39:38+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>t*\u00D2y\x00\x00\x00\u00A0IDATH\u00C7\u00ED\u00D41\n\u00C2@\x10\x05\u00D0T\u00A2h@[\u00CF\u00E7\x1D\x04\u00CFb\x11\u0095@P\x0F\u00E0I\u0084g\u00A59\u0085\u00DD\u00DAl\x11\u0082\u0085\u00C5.6[L3\u00CDc\u00E6\u00EFl\x15B\u00A8rWU\u0090\u0082\u00FC\\Xb\u009B\r\u00C1\x14g\u00BC\u00B2 \u0098\u00E0\u0080\u0080Gr\x04s\x1C#\u00F0\u0086\u00A4H\x04\u009A\b\\q\u00C33\x19\u0082\u00C5`E\r\u00EA8Q\u009F\x12\u00D9D\u00E0\u008Eu\u00ECu\u00A9\u0091\x1Am\u0084\u00F6\u0083l\u00FA\u00D4\u0099\u00D48E\u00A8K\u009E\u00C9(\u00FC6\u00DB\u00EB\x1A\u00DDI\u009B\u00EDN\x06\u00D0\f\u0097\u00E4\u0099|\u0081V\u00D8\u0095\u00AF\u00BE \u00FFG>*\"U\x0E\b\u008B\x11\u0080\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("swapColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00A5iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-02-15T11:56:50+03:00\" xmp:ModifyDate=\"2021-02-15T12:02:17+03:00\" xmp:MetadataDate=\"2021-02-15T12:02:17+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:eb0ccb8d-908c-1a4f-9f83-2052680c0121\" xmpMM:DocumentID=\"xmp.did:eb0ccb8d-908c-1a4f-9f83-2052680c0121\" xmpMM:OriginalDocumentID=\"xmp.did:eb0ccb8d-908c-1a4f-9f83-2052680c0121\"> <photoshop:DocumentAncestors> <rdf:Bag> <rdf:li>xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78</rdf:li> </rdf:Bag> </photoshop:DocumentAncestors> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:eb0ccb8d-908c-1a4f-9f83-2052680c0121\" stEvt:when=\"2021-02-15T11:56:50+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\t\u00EC\u00E2p\x00\x00\x01\u008AIDATH\u0089\u00ED\u00D5\u00B1K\u0095a\x14\u00C7\u00F1\u00CF\u00BD\u00B7\u00BCK\u00CB\u00CD%\u00A4\u00A5\u00CD\u00C9I\u00DC\u00AA!ph\x0F)HR\x12\x07A\x107\u0089\u00A8\u00AD\u00A1\u00A1!\u009A\u0082\u00A6\x10\x17\u0097\\BQ\u00A1)\u00FF\x00\u00F1B(\u0082\u0083\u0092\x10\u0084\u00E8\u008D\u00DB\u00AD\u0086\u00F7\u00B9$\u008F\u00EF\u00BD\u00EF{-\x1B\u00C2\x03/<<\u00E7<\u00E7{\u00CE\u00EF</O\u00A1Z\u00AD:k+\u009E9\u00E1\x1C\u00D2\u00A9]\u00C8\u00F0_\u00C1\x0B\f\u00E0G\u00E4+\u00E2\x13&\u00B1\u00F1'\u0090\x07\x18j\u00E3\u00BF\u0086)\u008C\u00B7K\u0092%\u00D7\u00E5\f?tg\x05dAb\u0089Z\u00C5\x14Qj\x15\u0090%W\x1E\u00BB\u0089\u00A5\u0090k\x13\u00CFD3\u00FA\x1B\u0090\u00B2D\u00D6\x12\u00EE\u00A3\x07\u0083\u009D@\n9 \x1F0\x16`\u00EF\u00D0\x1B\x07dA\u00BE\u00E7\u0080|\u00C5nX\u00D7\u00F03\x0EH\x1B|\x19]a\u00BD\u0088m|\u00C3\x11\u00EA\u00C7\u00E05|\u00C6B\u00D8\u00BB\x18\u00F2\u009D\u0080\u00A4u\u00F2<T\u00F7\x18\u00AB\u00B8\u008D>\u00C9-\u00BA\u0085\x11\u00BC\u00C12\u00B6\u00B0\u00D6\u00A2\u00C3\u00B6\u0090\u00BB\u00A1\u00C2'h`=|\u00CDj\u0087\u00B1\u0082\u00B9\u00E8\\=tqb\u008Ei\u0090C\x1C\u00F8-\u00CD4\u00E6C\u00D5M)\u00FB%2\u0096CL#\u00ECW\u00E4\u0094\u00AB\u008E\u00AB\u0098\u0090\u00CC\u00E2!\u00EE\u0084\x0E?b'\u0080\u00A7S\u00CE6\u00F0*\x0F\u00E45\x1E\u00E1e\u00B4?\u0086\x19\u00DC\u00C3\r\u00C9\x7Fq\u00BC\u00EA\"\u00F60\x1B',\u00A4<\u00BF%\\\u00C7%\u00C9\u00B0\u009F\u00E2\x0BFC\x17\x1D[Z'\r\u00C9\u00ADjZ\x05\u00EF\u00B1\x7F\x1A@+HloO\u009B\u00BCi\u00FF\u00CF\u00F3\u00FBO \u00BF\x00\u00E9\x0EO\x04\u00D3\u008B.\u00C3\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("backReverseIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00AAiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c006 79.164753, 2021/02/15-11:52:13        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T23:59:07+03:00\" xmp:ModifyDate=\"2021-06-21T22:10:53+03:00\" xmp:MetadataDate=\"2021-06-21T22:10:53+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:fe51cb35-0af7-b847-823d-38acccd5fc30\" xmpMM:DocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\" xmpMM:OriginalDocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:db582601-15fe-3f48-b50e-a03049edb7b5\" stEvt:when=\"2020-07-28T23:59:07+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:3625ad2e-e587-2f40-8e72-4af9353e0fe0\" stEvt:when=\"2020-08-08T13:14:34+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:fe51cb35-0af7-b847-823d-38acccd5fc30\" stEvt:when=\"2021-06-21T22:10:53+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.3 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x17\u00EC\u00EC,\x00\x00\x00\u00FCIDATH\u0089\u00ED\u00D41J\x03Q\x10\x06\u00E0/\u00A2\u00E0-T\u00D0)U\u00B0\u00C8A<\u0082\u00AD\b\"\"\u0082\u00A5UJ\x03\x1EA\x04Q\u00B0\u00F1\x0EZi;6\u00F1\x00\u00F6\u00A9\u008C\u00C5\u00AE \u0092Mvc\u0084 \u0099rY\u00F8\u00DE?\u00EF\u00CD\u00B4\x06\u0083\u0081\u00BF\u00AE\u0085?\x17\u00E6\u00C8L\"\u008Bu\x7F\u00CC\u00CC}\u00F4\u00F0\x10\x11\x1FM\u0090ZI2s\x07G\u00D8\u00C3r\x13\u00A0\x16\u0092\u0099[\u00B8\u00C5*\u009E\u00D0o\u008A\u008ClWfn\u00E2\x0E+8\u0089\u0088NS`$\u0092\u0099\u00DB\u00B8)\u0081\u0083\u0088\u00E8N\x02@k\u00D8Z\u00C9\u00CC6\u00AE\x15-z\u00C4\u00A5\u00A2\u00B5\u00E3\u00DA\u00DB\u008F\u0088\u00AB\u009F\x1F\u00AB\u0092\u009C\u0097\x00l\u00A0\u008B\u00A5q\x07\u00C6;j#gX/\u00A1W\r\u0092\f\u00D5\u00AB\u00B6\u00F0\u00B7;Y\u00C3\u00E1o\u00EE\u00A4\u00F2d\x11\u00F1\u008C]\u00BC\u00E1\"3\u008F'E*\u0093|U9'\u00F7\u008AWv\u008A\u00CE\u00D4'>\"^\x14\u0089zh\u009B`\u00E2\u00C7&\u0099F\u00FD\u009FU?Gf\x0F\u00F9\x04#`H\u00ED\u00EA\u00A5\u00A5\u0088\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("backIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DDiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-28T23:59:07+03:00\" xmp:ModifyDate=\"2020-08-08T13:14:34+03:00\" xmp:MetadataDate=\"2020-08-08T13:14:34+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:3625ad2e-e587-2f40-8e72-4af9353e0fe0\" xmpMM:DocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\" xmpMM:OriginalDocumentID=\"xmp.did:db582601-15fe-3f48-b50e-a03049edb7b5\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:db582601-15fe-3f48-b50e-a03049edb7b5\" stEvt:when=\"2020-07-28T23:59:07+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:3625ad2e-e587-2f40-8e72-4af9353e0fe0\" stEvt:when=\"2020-08-08T13:14:34+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u009CHq\u0089\x00\x00\x00\u0093IDATH\u00C7\u00ED\u00D41\x0E\x01A\x14\x06\u00E0\u0089\u00D2a\u0090(\\\u00C2\t\x14\"j\u00CA\x15N\u00E5\x00.\u00E0\n_DV\u00A1Uhh$\u00A3\u0099~m1k\u008B)\u00FE\u00FA\u00CB\u009B7\u00FF\x0B1\u00C6\u0090;\u00A1 \x05\u00E9\x0F\u0082!\u008E\u00A81\u00CD\u0085\f\u00B0G\u00C4\r\u00E3l\u00CF\u0085*AW\u008C\u00B2\u00ED\x04[|p\u00C1\u00A4\x15\u0082\x05\u00D6\rYa\u0089s\u009A\u00A8\u00C6\u00AC\rr\u00C7\x1B\u00AF\u0086<\u00F1HH\u00C4\u00A9_\u0093t\u00B2\u0093\x1F\u0081]\u00B6\u00DF\u0095zr\u00C8\u00DA\u0093.\x1B?\u00C7\u00A6\\\u00E1\u0082\u00FC\x1F\u00F9\x02&\u008EW\x07\x10\x19\u0095\\\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("bigLogoIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00C8\x00\x00\x00P\b\x06\x00\x00\x00\\m:\u00B0\x00\x00\x01KiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"/>\n </rdf:RDF>\n</x:xmpmeta>\n<?xpacket end=\"r\"?>\u009E\x1C`\u00EF\x00\x00\x0E\u0091IDATx\u009C\u00ED\u009Dy\u00D8\x1D\u00D3\x1D\u00C7?\x15Bl\u00B1Tme\u008AtT\tF\u00AD\u008F-<3h\u00C4VKk\u00E9D\u00F1\u00A4\u00D6Z\x1Ejy\u00AA\u00A8])\u00DAP\u00B5\x1B\x12\u00DBS[D\u00C9\fbI\u00B5\u0094\u0089\u00A5\u00E8\re\u00ECU\u0084\u0092HD\u0092\u00FEq\u00CE\u00E5\u00BE7\u00EF\u00CC9sg\u00E6\u00DE\t\u00E7\u00F3<\u00F7\u00C9\u00FB\u00BEs\u00E6wN\u00EE\u00BD\u00DF\u00999\u00BF\u00F3;\u00BF\x1F\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\fZ|\u00A3\n\u00A3\r\u00C7_\x0E\x18\u0096\u00F3\u00B4i\u00C0G\u00C0\u00DB\u00C0\u00ABv\x1C\u00CC\u00A9\u00A8\u009F\u00CFe?\x1F\x00S\u00EC8\u0098\u0096\u00F3\u00FC\u00AC\u00B1\u00B8\u00C0F\u00C0\u009A\u00C0J\u00C0@yx:\u00F0:\u00F0\x02\u00F0\x18\u00F0`Y\u00FD\x1A\u00AA\u00A5*\u0081l\rL,`\u00E2C`\x02p-p\u00AF\x1D\x07sS\u00FA\x19\x06<X\u00A0\u009F9\u00C0\u0093\u00C0-\u00C0Uv\x1CL\u00CDk\u00A0\u00E1\u00F8\u009B\x00'\x01;\u00A1\u00FF~~\n\u00DC\x00\u009Cm\u00C7\u00C1+y\u00FB4t\u008F\u00BA\n\u00A4\u0095'\u0080Qv\x1CL\u00EE\u00A7\u009Fa\x14\x13H+\u009F\x00\u00A7\x00\x17\u00A6\t\u00B2\u00AD\u00EF\u00A5\u0080\u00D1\u00C0\u00BE\x05\u00FA\u009C\x05\u009C\x05\u009Ci\u00C7\u00C1\u00AC\x02v\f\x15\u00B1@\u00AF\x07\u00A0\u00C1F\u00C0\u00DF\x1A\u008E\u00BF{\u00C5\u00FD,\x0E\\\x00\u00DC\u00DEp\u00FC\u0085\u00B3\x1A6\x1C\x7F-\u00C4\u009D\u00A7\u00888\x00\x16B\u0088\u00F2\u00BE\u0086\u00E3\x0F.h\u00CBP\x01\u00F3\u0083@\x00\x16\x06nl8\u00FEV]\u00E8k\x17\u00E0\u00AA\u00B4\u0083\r\u00C7_\x03q\u00D7Z\u00BD\u00C4>\u00B7\x01&4\x1C\x7F\u00F1\x12m\x1AJ`~\x11\b\u0088\u00AB\u00EDu\r\u00C7\x1F\u00A8lY\u009C}\x1B\u008E\u00FF\u00A3\u00F6?6\x1C\x7FQ`\x1C\u00B0|\x05}n\f\\]\u0081]C\x01\u00E6'\u0081\x00|\x07\u00D8\u00AFK}\u00FD\u00AA\u009F\u00BF\u00FD\x06X\u00AB\u00C2>\u00F7l8\u00FE^\x15\u00DA7\u00E4\u00A4W\x02\u0099\u0086x\u00ACh\u00BE\u00B6\x03N\x04\u00DE\u00D187\u00EF\x17\u00E8\u00DC\u00B6\u00BE~\n\u00DC\u00ABq\u009E\u00D3p\u00FC!\u00CD_\x1A\u008E\u00BF*\u00F0\x0B\u008D\u00F3f\"\u00E62\u00EB\x03\u008B \u00E66\u00C3\u0080\u009B5\u00C7{V\u00C3\u00F1\x17\u00D4l;\x0FV\x18\r\u00EA\u00F4\\\r\u00DB\u008BYaT\u0089cG\u00DA\u00AFl\u00EC\u009D\u00D2\u00F1\x07Q\u0090\u00CF\u00ED8\u0098\u00D8\u00F6\u00B7\u00B0\u00E1\u00F8c\x10k\x05\u008Be\u009C\u00BBI\u00CE\u00BE^\u00EC\u00A7\u00AF\x1B\x1A\u008E\x7F=\u00EA\u00BB\u00D1\u00A6\u00C0K\u00F2\u00E7Q\u0088\u00C7\u00BC,\u00A6\x02\u00DB\u00DBq\u00F0D\u00CB\u00DFf\x02\x0F\x01\x0F5\x1C\x7F\x1C\x10\u0090}aZ\x03\x18\x0E\u00DC\u00A5\u00E8k\x1E\u00AC0:\x048\u00C6\n\u00A3m\x12\u00CF}#\u00EF\u00F9\n\u00DB\u0083\x11\u00AE\u00F7\u00A7\u00AC0:4\u00F1\\\u00A5\u00A7/\u00A7\u00FDm\u00811V\x18\u00ED\u009Ax\u00EE\u00DF\u00CB\u00B4]\u0084Z=b\u00D9q\u00F0:0^\u00D1l\u00A9\u0086\u00E3g\tH\u0097?i\u00B4Y\u00B1\u00E5\u00E7=5\u00DA\x1F\u00D8&\u008E>\u00D8q0\x068G\u00C3\u008EN_}\u0090\u00E2\u00B8\x14\x18\x02L\u00B4\u00C2\u00E8\u00DBymd\u00D8n\u008Acc\u00E0`\u00E0\u00D22\u00EF$R\x1Cw\x03+\x00\x13\u00AC0\u00CA{\x11\u00AC\u008CZ\tD\u00F2\u00B1F\x1B\u00D5\u0095\\\u0087\u00E9\x1Am\x16\x04h8\u00FE\u008A\u0080\u00ADh\u00FB\u00A4\x1D\x07\u00B7k\u00D8\u00FC-b\u00CD%\u008B\\\u00DE\u00BA\x16q4Y\u0083\u0092D\u00D2&\u008E&\u00A5\u0089\u00A4E\x1C\u00CD\u00C7\u00AB%\u00A9\u0091Hj%\x10\u00F9\u00EC\u00AD\u00FAr|f\u00C7\u00C1\u0087%t\u00B7\u008DF\u009B\x0F\u00E4\u00BF:\x13\u00F3;t:\u0095cW-n\u00AE\u00DAp\u00FC%t\u00EC\u00F5#\u008E&\u0085E\u0092\"\u008E&\u0085E\u00D2\u008F8\u009A\u00D4F$\u00B5\x11\u0088\\_\u00B8\t\u00F8\u00AE\u00A2\u00E9s\x05\u00FBY\u00B4\u00E1\u00F8\x07\x02\u00A7k4\x7FZ\u00FE\u00BB\u009C\u008E\u00E9\x1C\u00C3xQ\u00A3\u00CD\u00B2\u00AA\x06\x19\u00E2h\u00D2\u00B1H\x14\u00E2h\u00D2\u00B1H2\u00C4\u00D1\u00A4\x16\"\u00E9\u00D5$}p\u00C3\u00F1[\u00EF\x02\x03\x10\u00DE\x1E\x1DTs\u0094v.m8\u00FEE-\u00BF/.\u00FBS\u00F1.\"\u00CC\x05\u00D2?\u00C4V\u00F2\x04\x1F~\u00AA\u00D1&s5_z|\u008E\u00D1\u00B0\u00B3\x06\u00F0c\u0084g-\x0F[\x00\x1Bj\u00B4\u00DB\x03\x11.\u00F3zN\u00FBG\u00A3~_\u0097\x04\u008E\x00z6i\u00EF\u00E5\x1Ddp\u00CBKW\x1C3\u0080+r\u00F63\u00A8\u00AD/\x1Dq\u0080\u0088\u00C9\u009A-\x7F\u00FE \u00B3\u00A5\u00E0[9\u00C6\u00A4\u00B3\u00D0\u0098)\u00B8\u00C4s?E<&\u00BE\u00AC\u00B0sn\u00E2\u00B9y\u00C5A\u00E2\u00B9\u00E3\x01\x1F\x11\u00D0\u0099\u00C6{\u00C0\u00B6\u0089\u00E7\u00E6\x15\x07\b\u00D1\u00AA\x1E5\u00C7\x01\x07t`\u00BB4j\u00F3\u0088\u00A5\u00C9\u00E9\u00D2\u00D3U5\u00CF\x02\u00ADw\u009D\u00D74\u00CE\u00D9\"\u0087\u00FD\u00CD\x14\u00C7g\x02o\u00A9\u008CHW\u00EE0\u00D2Ern\u00E2\u00B9'\u00E4\x18W\u00BB\u00FD1\u00A4\u008B\u00A4)\u008Eg;\u00B4=\x1D\x18A\u00BAH\u00C6\x01{$\u009E\u00FBY'\u00F6\u00CBb~\x12\u00C8\u00F5\u00C0\u00D9]\u00E8\u00E7\x15`\u00B8\x1D\x073Z\u00FE\u00F6\x02\u00EA\u00C7\u00A2\u00DDe\u0084o&\r\u00C7\u00DF\x14XW\u00D1l\u00B2\u00CE~\x18\u00C8\x14I!q\u00B4\u00D8\u00EFO$\u0085\u00C4\u00D1b;M$\u00B5\x10\x07\u00CC\x1F\x02\u0099\u0085\b\u00FB\x18\u00A9\x13\u0086^\u0090\u00DB\u0080\u008D\u00EC8\u00E8\u00B3\u00C8f\u00C7\u00C1L\u00D4\u008F\x03\u0083\u0081\u00D1\r\u00C7O\u009D\u00B0\u00CAX\u00AE\u00CB4\u00C6q\u008FF\u009B/\u00E8G$\u00A5\u0088\u00A3\u00C5~\u00ABHJ\x11G\u008B\u00EDv\u0091\u00D4F\x1CPo\u0081LCD\u00D5\u00AEc\u00C7\u00C1\u0099]\x10\u00C7\u00C7\u00C0av\x1C\u00BC\u009Fr\u00FC\x1A\r\x1B\u00FB\x02\u00D77\x1C\x7F\u0099\u00F6\x032l\u00E5~`=\u0085\u008D\u00B9\u00C0\x18\u008D\u00BE\u00FA\u00D0\"\u0092c\u00CB\x14G\u008B\u00FD1\u00C0>\u0094(\u008E\x16\u00DBM\u0091\u009CJ\u008D\u00C4\x01\u00BD\u00DB05\x1Bx\u00B4\u00E5\u00F7\u0099\u00880\u008D\u00A9\bo\u00C8?\u0080G\u00EC8\u00C8|\u00AC\u00D1\u00DC0\x15\x02\u00CF\x03\u00AB\x02\u00BB)\u00DA\u00DEc\u00C7\u00C1\u008E)}-\u0080\u0098\u009B|_a\x03\u0084\u00D8\u00C6\u00CB~\x17\x066@l\u00C7\u00D5Y\u00E0\u00BC\u00D1\u008E\u0083}4\u00DA\x19\u00BA@\u00AF\u00DC\u00BC\u009F\u00D8q0\u00ACK}\u008D\u00B5\u00E3\u00E0\u00DA\u0086\u00E3\x0F\x00\x1E!{\u0082<\u00BC\u00E1\u00F8\x07\u00D8q0O\u00D8\u00B9\x1D\x07s\x1A\u008E\x7F\x04\u00E2.\u00A0b\t\u00E0'\x1D\u008C\u00F5#\u00E0\u00D8\x0E\u00CE3TD\u009D\x1F\u00B1JE\u00BAlG\u00A2\u009El_$#w\u00FB\u00B3\u00F1\x00pF\u00D9cka\u00A4\x1D\x07J\u00EF\u0095\u00A1{|m\x04\x02`\u00C7\u00C1\x14D\u0082\u0085,\u0096\x00\u00AE\u00CD\u0098l\u00FF\x1A\u00BD\u0089v\x1E\u00E6\x00\u0087\u00DAqpg\u00C9v\r\x05\u00F9Z\tDr1\u00EA\u0084\x12\u00DB\x00\u0087\u00F5w\u00C0\u008E\u0083\u00B9v\x1C\x1C\x02\x1C\u008FH!T\u0094\u00A9\u00C0nv\x1C\u00FC\u00B1\x04[\u0086\u0092\u00F9\u00DA\tDz\u00C3\x0E@\x1D\x1Ar^\u00C3\u00F1S\u00E3\u00C2\u00EC88\x0F\u0091P\u00E2\u0091\x0E\u0087\u00D2\u00F4V\r\u00B5\u00E3 \u00F7\u00DE\x0FCw\u00A8J \u00CD\u00E4lY\u00AFn\u00F53\u008F\u00CBP\u00E6\u00A2:F\u00E3\u00BC\u008B\u00B3\u00D65\u00EC8\u0098l\u00C7\u00C1V\u00C0\u00E6\b7\u00B0NHJ\u0082\u0088\u008BZ\u00D3\u008E\u0083\u00FD\u00EC8xS\u00EB\x7Fj\u00E8\t\u0095m\u009F\u00FC:\"]\u00C1\u00DFC\u00B8\u0082W\x06\u0096F\u0088\u00B8\u00E9\u00BE\u009El\u00C7\u0081N\u00D8\u008A\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00A1\x15\u00E3\u00C5\x02\u00AC0\x1A\x02\u00AC\x03\u00AC\u0082\u00F0<\u0081\u00F0<\u00BD\x01<\u009Bx\u00EEKi\u00E7~\u0095\u00B0\u00C2hI\u00C46\u00DB\u00D5\x11{\u00E2\x07!2\u00B0\u00BC\x0BL\x01\u00E2\u00C4sg\u00A4[\u00F8\u00EAQ\u0089@\u00AC0\u00F2\u0081\u00DF\u00A7\x1C\u00BE'\u00F1\u00DC\u008E\u00A3U\u00AD0\u00BA\t\u00D8!\u00E5\u00F0\u00D8\u00C4s\x0F\u00D5\u00B4\u00B3\x1E\"\x19\u00DC\u00AE\u0088b7Y\u00BC\u0085H\u00E4vy\u00E2\u00B9\u00B1\u00C2n\u0082\u00D8\x1BR\x05\u0087&\u009E;\u00D6\n\u00A3\x13\x00UH\u00FB\u00BA\u0089\u00E7*]\u00CA29\u00C3\u00FE\u00C0\u00DE\u0088\x04\rY\u00DF\u0089Y\u00C0\x03\u0088\u00CDk\u00B7\u00EA\u0084\u00A5[a\u00B4#\u00E9\u00E1\u00FB\u00D3\x01/\u00F1\u00DC\x7F*l\u008C\x01\u00FA\u008D\u00B2\u0096\u00EC\u0098x\u00EE$\u00D5X:\u00A1\u00AAh\u00DE\u0081\u00A4\x7FI\u00F6\u00B6\u00C2\u00E8\u00FA\u00C4s\u00FF\u0092\u00D7\u00A8\x15F\u00DB!\u00F62\u00A7\u00B1\u00A8\u0086\u008D!\u00C0\u00EF\x10\x05otY\t\u0091\u00C1\u00E3`+\u008C\u00EE\x06\u008EI<wJJ\u00DB\u00E6\u00DE\u00F7*h&\u00EE^D\u00A3\u008F\u00CCE`+\u008C\x16BD\x0E\u009F\u0080H\u008E\u00A0\u00C3B\u00C0\u00F6\u00F2u\u00B6\x15F'\u00CA}\"\u00AAs\u00D2\u00C6:\x18\x18o\u0085\u00D1\u00C6\u0089\u00E7\u00BE\u009Bac\u00B1\f\x1BPaTz\u00AFBMF[a\u00B4H\u009E\x13\u00AC0\x1AH\u00FA]I\u00D7\u00C6H\u00E0\x19\u00F2\u0089\u00A3\u009D\x11\u00C0\u00D3V\x18\u00F54\u0099@\x11\u00AC0Z\r\u0091\u00B1\u00E5,\u00F4\u00C5\u00D1\u00CE*\u00C0\rV\x18\u00DD)\x1F\u00CD:\x1E\x0Ep\u009B\u00FC|kG\u00AF\x04\u00B2:\u00EA\u00A8\u00DAv\u008EF\u00D4\u00FE\u00EB\b\u00F9Xr-z)|T\f\x02\u00AE\u00B2\u00C2\u00E8\u00D4\x12lu\x15+\u008C\u0086\x02\u008F\u00A3\u00DE\u00D9\u00A8\u00CB\u00CE\u00C0\u00A3V\x18\u00E9\u00E4\x0EKcs\u00E0\u00F2\u0092\u00C6S*\u00BD\fV<\u00DE\n#U\u00928\x00\u00AC0Z\u0099\u00FE\u00CB\x11ha\u0085\u00D1(\u00AAI\u00F8p\u008AL\u00DE6_`\u0085\u00D1J\u0088\x1D\u0096\u00DF,\u00D9\u00F4P\u00E0n+\u008C2sy)\x18i\u0085\u00D1/\u00CB\x1APY\u00F4R \x03\u00C9\u00CE\n\u00D8\u00CA\x05\u00E8\u00E7\u00CE\u00EA\u0083\x15Fk\x03\x7F\u00E8\u00E4\\M.\u0096W\u00E5Z#\u00B3\x1F\u00DE@5\u00C5\x7F@L\u00F0\u00CF*h\u00E3l+\u008Cv)c0e\u00D1\u00AB-\u00B7M\\+\u008C\u00F6J<\u00F7\u0096\u00B4\x06V\x18mM\u00F6\u00C4\\\u00C5h\u00BE\u009C\u00DCf1\x03Q7\u00E4\x19D(\u00FAP\u00E0\u0087\u00A8\x1F\u00C9\x16B\bp\u0098\u00FC\u00FDQ\u00D2\u00C5<\x04\x11\u00C4\u0098\u00C5C\x19\u00C7t\u00EA\u00A7\u00A4\u00B1\x17z\u00F9\u0088\x01&#\u00B6\x16OE\u008Cw\x07`5\u008D\u00F3\u008E\u00B4\u00C2\u00E8\u00AA\u00C4s\u009F\u00EFl\u0088,\u0080(\u0081\u00B0y\u00E2\u00B9O+[w\u0081^\x0B\x04\u00E0B+\u008C\u00EEM<\u00F7\x7F\u00ED\x07\u00AC0Z\x10\u00B8\u00A4S\u00C3V\x18m\u008A^\x1D\u00F5\t\u00C0\x01\u0089\u00E7\u00F6\t=\u00B7\u00C2hE\u00E0JD\u00BD\u008E,\u00B6\u0096\x1F\u00EA\u00A4\u00C4sGd\u008C\u00E7\"\u00E0\u00C8,C\u0089\u00E7\u00EA\u008C\u00B7\x13t\x1EQ\u00DF\x07\u00FC\u00C4s\u00FB\u00A4\x1D\u00B2\u00C2h\x00p\b\u00C2\u00FB\u0097\u0095xb\x00\u00C2+\u00E6w:H\u0084\u00C7\u00EA.\u00E9\u00D9\u00FAO\x01;\u00A5P\u0087\rS+\x01\u00A7\u00A5\x1C;\x1CX;\u0087\u00ADv\u00C1\u00FFL\u00E3\u009C\x07\u0080\u00E1\u00ED\u00E2\x00H<\u00F7m\u00C4$4\u00D4\u00B0\u00A3\u00D3WO\u00B0\u00C2hC\u00C4Bh\x163\x00\u00B7]\x1C\x00\u0089\u00E7\u00CEN<w4b\u00BDD\u00C5\u00EEV\x18\x15\u00AD\u00DF\u00B2*p{\u00C19M)\u00D4A \x00G\u00C8\u0085\u00BB/\u00B0\u00C2hy\u00D2\u0085\u0093F\u00FB\u00A3\u00CD\u00F6\u008A\u00F6\u00B3\u0081\u009F'\u009E;;\u00AD\u0081<v\u0090l\u009BE\u00DA\u00E2e\x1D\u00D0\x19\u00DB\u00F9\u0089\u00E7\u00CES\u008B\u00BE\u0095\u00C4s\u00C7\x02\u00F7)\u00EC,\nl\u00A9;\u00B0\f6\x03\u00AE\u00AE\u00B2\u00E4\u009B\x0Eu\x11\u00C8\x00\u00E0\u00B2\u00B67\u00E3<:\u00F7\u00D1c\u0085\u00D1\u00B2\b\x1F{\x16\u00F7\u00EB\u0084\u0091\u00C8\x15i\u00D5\x17ce)\u00EA:\u00F2\x03\u008D6\u00BAI\u00C1u\x12Vl\u00A4iK\u00C5>\u0088\u00DA\u0095=\u00A3.\x02\x01Q\x0F\u00F0 \x00+\u008C6\u00A3\u00D8s,\u00E8M*\x1FU7\u00F9\u0082\u00BF\u0096\u00D4g/\u00E87\u008DQ\x0Bo\u00EA\u0084\u00A5Ht\u00DE\x07\u00D5\u0085)\x0Fg\u0092\u00BF.ei\u00D4I \x00\u00E7\u00C8\u00AB\u00B0\u00AE\u00FB7\x0B\x1D\u00B7pVxC;:\x13\u00C6\\\u00D1\x01]D\u0095T[\u00FB}P\u0084\u00844)\u00B2\u00B2\u00DE\x1F+\u0094lO\u009B:x\u00B1ZY\x06\u0098\u0084(\u00FAR\u0094Y\x1Am\u00F2L&kW\u00A28\x07\u00AA\b\\\u00ED\u00FF\u009Bf\u00A9\u00E6\u00AFL\u00C4o\u00AF\u00EE Y\u0099<\u00B2\u00C4\u0091\u00A7\u00BA\u0094\u00CE\u0095.O\u00E8\u008AN\u009D\u00C2\u00B7s\u00D8\u00EB&\u00FFU\x1C\u00B7r\u00C4\u00C6\u00E9\u00BCg\u00EFi\u00DAj\u00D2\u00B1+\u00BFjz%\u0090\u00E3\u00D0\u00BB\u00C2\u00B7\u00F2\x1A\u00F9Vj_A$\u00C5\u00CEb\u0084\\k\u00C9D\u00B6\u00C9\n\u00B7\x06\u0091&\u00E8\x15\u00CD\u00B1u\u009B\x17\x14\u00C7\x07!\u0092k\u00EB\u00B0k\t\u00FD\u00B5s2\u00F0\u00E7\u009C\u00E7t\u0085^\t\u00E4\x05\u0084\u0097*\x0F\u00C7\u00A2W\u00BA\x19\u0080\u00C4s?G<\u00AEe\u00D1\fcW1\n\u00F5D\u00F7\u00B1:\u00A5\u00EDoc\u00A2F\u009B\u00D3d\b|*r~xxI\u00FD\u00B52\x17\u00E1\u0094\u00C9\u00DCk\u00D3\x0Bz9I?\x03\u00F8\u00B7f\u00DB(\u00F1\u00DC[;\u00E8#5\u0084\u00A5\u0085\u00F3\u00AD0J]'\u00B0\u00C2\u00C8C\u00AF\x00\u00A6N_\u00BD\u00E2\x1E\u00D4\x17\u0097\r\u0080+\u00D2\u00EE\u00A8V\x18-\r\u00DC\u008E\u00BA\u00FA\u00EE\u00D3\x19{eR\u00915Bv\u00A6X8M\u00E9\u00F4l\u0092\u009Ex\u00EE\f\x19\t\u00ABZ_\u00F8\u009C/\u00C33\u00F2\u00D6G\x1F\u0083p\x13f}\u00A8\x0B#\"Q\u00AFA\x14\u00ECi\u00C6\x00\r\x05\x0E\u0094/U\u00E1\u00CF\u008F\u00E8\u00A0\u00E8M\u00B7H<\u00F7c+\u008C\u00AEC\u0084\u008Bd1\x12X\u00CF\n\u00A3s\x10\x11\x06\x1F b\u00B1F \u00B6'\u00A8\u00E2\u00C8\u00A0om\u00C7\u00BC\u00E3|C\x06+N\u00A4&N\u0091\u009E\u00BAy\x13\u00CF\u009D\x00\u00DC\u00AChvQ\u00A7\u00C1o\u0089\u00E7~\x02\u00FCF\u00A3\u00E9\x00\u00C4\x1A\u00CCc\u0088+\u00EDtD\u00E9\u00E1Q\u00E8U\u00C5==\u00F1\u00DC\u00B2\u00D2\u00A9V\u00C5\x19\u00C0<\u00F1n\u00FD\u00B0>\u00A2^\u00FD\u00BB\u0088\u008BS\u0082\u0098D\u00EB\u0088\u00E39D\u00C4p\u00C7$\u009E\u00FB85\n\u00DB\u00A9\u00C3:\u00C8Q\u00A4\x7Fp\u00EF\x00\u00A7\x17\u00B4\x7F\t\u00F0pA\x1BYLBd\u008C\u00AF5\u0089\u00E7\u00BE\u0085\u00A89^\x15\u009F\x01\u00FB\u00CB\u00B9_!\x12\u00CF\u00BD\u0099\u00FCaF\u0095\u00D0s\u0081$\u009E\u00FB\x0E\u00E9\u00E1\x04\u00C7\u00F5\x17\u00E5\u009B\u00D3\u00FElD\u00A8\u00B7\u00AA\u009Ex'\u00BC\u008C\u00A8\u00A9WF\x19\u0084\u00CAI<7\u00A0\u009A\u008Dcs\x10\u00E2x\u00B2D\u009B\u00A7Q\u0083y]\u00CF\x05\"\u00B9\f\u00B1G\u00BA\u0095I\u0094\u00F4\\/\u00C3\u00A6\u00B7\u00A6\\/\u00C9d`\u0098\x14\u00F8|C\u00E2\u00B9'Qn\u0095\u00AC\u0099\u00C0\u00DE\u0089\u00E7\u00DEX\u00A2M\x12\u00CF\u009D\u008Bx\u00D4*St\u00B9\u00A9\u0085@\x12\u00CF\u009D\u0083\u00F0\u00C3\u00AF\u00D6\u00F2\x1A.\u00DF\u00A4\u00B2\u00FAx\x13\u00B1\u00F7\u00F9b\u00FA\u00D6\u00FC\u00CE\u00CB\\\u00C4\x06\u00A9\u00CDee\u00D9\u00F9\u008E\u00C4sOFL\u00BC\u008B.lN\x066\u00CD\u00DA\u00F0V\x04\u00E9\u00D9\u00DA\u0089\u00EC\u0085\u00E5J\u00A9M\u00A8\u0089|\u0094*\u00F48\u00A5\u00D1\u00C7\u00A7\u00C0QV\x18]\u0089\u00F0\u00CA\u00EC\u0081^\u00E5Y\x10\x0B\u009B\u00B7\x01g\u0096]\x06\u00B9\x17$\u009E;^\u00E6\x048\x1C17\u00D1\u0099\u00847y\x16\u00B1y*\u0090\x17\u00B7\u00CAH<\u00F7m+\u008CvF\x04\u0096v\u00DD\u00B3U\u0095@\x1E&\u00DB\x13\u00D1i\u008D\u008C\u00F7\u00CA\u00B0\u009Bx\u00EEs\u00C0>V\x18\x1D\u008EX!\u00DF\x12\u00E1\u00D6]\u008D/\x03\x0Eg\x00\u00AF\"\u00B6\u00E0N\x02\u00C6%\u009E\u00ABS '\u008B\u00B1\u0088\u00ABnQ\u00EE@\u008C-\x0Be\u00B8G\u00E2\u00B9\u00D3\u0080s\u00AD0:\x1Fqw\u00DD\x0E\u0091Yq\b_&v\u0098\u0083\u00B8\u00D3LAx\u00F6\u00C6'\u009E\u00FBL\u008E\u00B1>\u0085\u00DA+\u0095\u00B9F\u0093x\u00EESV\x18m\u008B\u00A8\u00BD\u00D2\x1F\u00FF\u00CA1\x1E\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x06\u0083\u00C1`0\x18\f\x1D\u00F3\x7F<Bx@Y\u00B1\u008E\u008D\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("scriptLogo.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u008C\x00\x00\x00\x14\b\x06\x00\x00\x00_\u00F5\u00D5\x10\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\b(iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-07-27T12:43:21+03:00\" xmp:MetadataDate=\"2020-08-07T22:33:24+03:00\" xmp:ModifyDate=\"2020-08-07T22:33:24+03:00\" dc:format=\"image/png\" xmpMM:InstanceID=\"xmp.iid:8d02153a-d4b6-b849-b135-ff1591e86adf\" xmpMM:DocumentID=\"xmp.did:ad9baebc-562a-b543-8fb7-12a4de7a4605\" xmpMM:OriginalDocumentID=\"xmp.did:ad9baebc-562a-b543-8fb7-12a4de7a4605\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:ad9baebc-562a-b543-8fb7-12a4de7a4605\" stEvt:when=\"2020-07-27T12:43:21+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:995486bd-1fdf-e646-8574-d435906748d4\" stEvt:when=\"2020-07-27T12:50:18+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:8d02153a-d4b6-b849-b135-ff1591e86adf\" stEvt:when=\"2020-08-07T22:33:24+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> <xmpMM:Ingredients> <rdf:Bag> <rdf:li stRef:linkForm=\"ReferenceStream\" stRef:filePath=\"cloud-asset://cc-api-storage.adobe.io/assets/adobe-libraries/afd89432-3f56-42db-bbd2-bd72e4825212;node=b8a434f6-494f-4fed-ba93-ffd91fa9df99\" stRef:DocumentID=\"uuid:3b96b5b6-1c96-4a08-9fc1-06837f935e8b\"/> </rdf:Bag> </xmpMM:Ingredients> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00B8r\x0B\u00B3\x00\x00\x03\u009DIDATh\u00DE\u00ED\u0099KH\u0094Q\x14\u00C7\u00C7\u0099\x1AS'SS\n\x19\u00CB\u00C2\u00C0\u0082\u00C26%=d0\u008C\u00C0\n)\u00A3\u00C0\n*r!F\u00D2\u00A2\u00C7\"\u0095\"\x0B*\u008A\u0088\u0082\"\u00CA\u00A2v\u0081\u009B\br\x15\u0095\u00A2n$\u00A1\u0087\u00B5\u00D0\x1E\u00F60\u00CA\"&Km\u00FA\x1F8_\x1C\x0Ew$!\u00E7\u0093\u00E1~\u00F0\u00C3\u00B9\u00E7\u00DCo\x1C8\u00BF9s\u00EF\u00FD<\u00DD\x05\u00DB\u00BD \u00A0\u00F0{\u00F8\u00C2\u00EB\x04C>\u0099\u00EE\u00F3\u00A8\u008B\u00E7N\x05\u0099 \x03$zbxE\"\x11\u00CB8CE\u00CE\x05\x11\x03\u00ED \x0F\u00A4E\u00C9\x7F\x03\u00D5B\u0096\"\u00D0k\u0098w\x0B\u00A4Xa\u00E2S\u0098\u00EF \u00AC\u00A4\u0091\u00C2\f\u0081\x01%D\b\u00CCS\u00F7\u00BD\x07?\u00C4\u00F8\u00B6\x15&>\u0085\u00A1\u00E2\u00FBA\u0097\u0088\u00C9|\x13w\u0093]\"\u00D6\x00.\u008A\u00F1Q\u009E\u0093\x05^\u0088x\u00BES\u00D8\u00D9\u00F7\u009A\x13\u00C0yPa*<\u00E2y\u00E0.\u00C8\u008A\u0092\u00AF\x05\x07\u00AD0\u00EE\x0BS\x03\u00CA\u00C1G\u00D1Qf\u008A\u00FCC\u00B0\n\u00DC\x10\u00B1\u00FD\u00A0U\u008C\u00D3\u00C5\u00CFT\u00AD\u0088o\x11\x05?\x03\"`\x04lP2\u00E4\u00807\u009C\u00EF\x02\x01\u0095\u00AF\u00E3\x1C\u00B1\u00D7\n3q\u00D60\u00C4\u0085Q\u00D60D?\u00C8\x06\u00CD\u00A6N\u00C2\u00F7;\u00F1\u00F5\u00A2\u00E8\u00C5 \f^\u0082\u00A0\x12\u00C2\x0Fn\u00B2\x10'\f\u00DDe)\u00F8\n\u00FA\u00C1B+\u008C\u00BB\u00C2\u00D0\u00DA\u00A3\x07\u00B4q\u00B7\u00F1)a\u00C2\u00BC\u00D8u\u00C6\u00EBX\u008C}\"F\u00DD\u00A6\x04T\u0081A\u00B16JS\u0085/\u00D2\u00B2\u0088\u009C\x0Fl\u008E\u00B6VAn\u0089\u0096\u00C5\n\u00E3\u00D2\x1A\u00C6\u00B0U\u0096\u00C24\u0081\u00C5\u00FCSE\u00E3N0\x19$\u00F1\x029Z'\u00AA\u00B4\u008B\u00DE\u00F8\x11&\u00C8]\u0085(4\b\u0093*\u00F2\u00978vH\u00C4\u00AA8\u0096\x02\u008E\u0083>\u0096d\x04<\x02\u00A5\u00F6\x1C&\u008E\u0084\x19\u008F\u008B\x0F\u00F6|\u009E\x18_\u00B6\u00A0\x13\\\x18\u00AC#Rh\u00BD\u00F1?\u008B\u008E\u00F7K$\u00AC0\x13T\x18\x14\u00A7\x10\u00F4\u0080' S\x15o#\u00E7\u0088\x05\x1C\u009B\u00C6\u00DB\u00E2\x0F\u00BC\u0093\x19\x06\x0F@\t\u00E7k\u00C4=&\u00CA\u00C4\u00EB\x1A\u00BE\u00C7\x0B\u00F6\u0080gb\u00CB\u00FC\x14T\u00D3\u0099\u008Dz\u00DFng\u00C1K\u009FI\u00BCW\u00BE-hl\u0084\t\u0089\"]\x11\u00B2$\u0083^\u0091+\u00A03\x11\u00F0X\u00C44[A\u00FD(y\u00A2B\u00BC\u00AE\u00E7\u00FFuu\u0094\u00F9\u0097y\u008E|_\x12d\x06\x7F&'\u00B6\u00C8\x164\u00F6\u00C2\x10\u00CB\u00B9@\u00C7T\u009C\u008AsX\u008C\u00EFSW\u00E1o\u00FE\x10\u00C7\u00BE\u00F0<\u00EA\"\u0095bn\x1B\u00C7\u00CA\u00B8k\u00FD\x15\x06\u00AC\x14\u00E3\u00D7\u00A0\x1Cl\x02oE\u00BC\u00D0 b\x0B\u009F\u00C9Xa\\\x16\u0086NW\u00E7\u0083\u009F\x06aZ\u00C48Gt\u00A3F\x11/\u00E6X\u00AE\u00885\u0089\u00B9eJ\u0098\x06\u00D9\u00A1\u00C4\u00BC\x1D\"~$J\u00E7j\u00B7\u00C2\u00B8+\u00CC0\u00FF\u00FD\u00C4\x7F\u00C3J\u0098N1\u009E\"\u008A{J\u00C4K\u00C7(\u00CCY1^#\u00E6\u00AD\x15\u00F1\u0093J\u0098\u00B0A\x1E+\u008C\x0B\u00C2\u009CV\u00F2\u00D4)a\u00AE\u008B\u00F1\x01.l6x%\u00E2\u00B3\u00C6(\u00CCN9\u00CF\u00D9%\u0081;\"\u00BEM\t\u00B3\x1B|\u00B6\u00C2\u00B8/L@\x14\u00FF\u009C*\u00EE2\u00DA\u009D\u0080A\x11\u00EBS\u00E3F!\u00C6\u00BF\n\u0093\u00C4\u00CF\u0094\u009C\x18\u00890 \u00C6\u00CF\u00A9\u009B)aB\u00CC/+\u008C\u008B\u00C2pAWpq\u00D2UqC\u009C_\r\u00DE\u00A9o\u00F7op\u008DvVc\x15\u0086csA\u0087\u00E1g\u00A6\x15\u00CC1\u00EC\u0092\u009C\u00CFRi\u0085\u0089\u00BD0\u00D4\u00FE\u0083\u00A6\x07\u0081\u00FC\u00ED\x0F2\u0089\"N\u00E7&\u00A9tn\x032\u00E8\t\u00B3\u00E1^/w\u00AC\u0080Z\u00EFL\x12q\u00BF\u00BA\u0087\u00B6\u00F2\u00D3\u0099d\u00C3Sl\u00E7>\u009F:<\u00A4\u0098\u00D7\x16t\u00FC\u00F9\x03\x16\u00ADKyH\u00EE)\u00F0\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("faceIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:12+03:00\" xmp:ModifyDate=\"2020-08-08T19:27:16+03:00\" xmp:MetadataDate=\"2020-08-08T19:27:16+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\" xmpMM:DocumentID=\"xmp.did:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\" xmpMM:OriginalDocumentID=\"xmp.did:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\" stEvt:when=\"2020-08-08T19:25:12+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>^?\u00CE\u00FA\x00\x00\x01\bIDATH\u00C7\u00ED\u00D5\u00BFJ\u00C3P\x14\x07\u00E0\x14\x17\u00C1\u00CD\u00D9\u00DDE\u00C4\u00CD\u00CD\u00C1\u0097\u00F0\r\u00AC\u00D0'\x10\x14|\n\u00B7J\u008Bo\u00A0\u009B8\u00F9\x00U\\\u00E4\x03\u00A9\u0093\u0082Z\u00FF\u0080\u0093`\x1A\u0097\x13)\u00C5\x14b\u00D3A\u00C8\u00F0[n.\u00F7#\u00E7\u00E6\u009C$Y\u0096%\u00B3NR#\u00FF\x03\u00C1\x0E\u009E\u0090!\u00C5\u00D7\u0084\u00A4\u00B1\u00EF\x11\u00CD2\u00C8\x00}\x1CE:\x13\u0092\u00EF\u00E9cP\x06\u00C9\u00D0)S\u0092\x00\u00B32\u00C8\u00B0\bA\x03-\\\u00E1\x1E\u00A7#\u00C8\u00B0,\u00D2-x\u00D6\u008A7\u00CD\u00D3\u008B\u00F5n\u0095\u00C8y\x1C~\u0081-l\u00CC\x02\u00B9\fd\x7Fl}:\x04sX\u00C5&n\x039\u00C6:\u00D6\u00AAB\x16p6v\x17yN\u00AAB\u00E6\u00D1\u00C6\x03>\u00E3\u00F0w\u00DCa\u00B7*\u00A4\u0081%\u00AC\u00E0&\u0090C,cq\x1A\u00A4\u00A8Oz\u0081\u00EC\u00FD\u00D2\u008C\u00C3J:~\u00E4\u00EB:\u0098\u00B6\u00E3_\nfW\x1Bo\u0081\\G\u00C9\u00FE<\u00BB\u009A1U\u00C7\u00A7p\u008AW<\u00E3#\u00CA::\u0085\u00B7\u00EB?c\u008D\u00FC\u00E4\x1B\\\u008F|~\u00D2\u00CA\u0081\x0E\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("faceColoredIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:12+03:00\" xmp:ModifyDate=\"2021-01-28T16:44:53+03:00\" xmp:MetadataDate=\"2021-01-28T16:44:53+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:7bbd2bf5-c3ba-8648-a253-6cda053252c9\" xmpMM:DocumentID=\"xmp.did:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\" xmpMM:OriginalDocumentID=\"xmp.did:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:f195db61-cbfe-2c4f-ad4c-bb1ba509566e\" stEvt:when=\"2020-08-08T19:25:12+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:7bbd2bf5-c3ba-8648-a253-6cda053252c9\" stEvt:when=\"2021-01-28T16:44:53+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u0087e+e\x00\x00\x01sIDATH\u0089\u00ED\u00D5\u00B1K\u00DE@\x18\u00C7\u00F1O\u00B4\u0083\u008B\u0093\u00B5C&Ep\u00A9\u0099\u00BBI\u00A7\u00E2\u00D2AgA,\b\u00C5\x7F \u00E0\u00A0Pt\b8\u00EA\u00D0\u00A5t*\u00B8\u00BB\x15'\x07\u009DD\u00C8\u00E4R\u0084J\u00A4\u00D2\x16\u00DAE\x14\u00F4\u00ED\u0090\u00B3\u00E8K\x12c\u00A9\u0093\u00FE\u0096\u00CB=w\u00CF}\u00EF\u009E{\u009EK\u00D4\u00E9t\u00DC\u00B7z\u00EE\u009D\u00F0\b\u00B9\u00AB\u009ET\x19\u00E34\x7F\u008Bw\x18\u00C4%\u009A\u00B2#Rn\u00F6\x04\u008BE\u0096\u00BCo\x05\u00C12~c3\u00F4\u009BN|\x19\u00DA\u0097XAk\u00C8\x006\u008B,y\u00D3\u00B0\u00F8\r\u00C5i\u00FE\x113Ucu\u0090\u00DA\u00F0\u00C4i\x1Ea\x1Es\u00CAp\u00EE\x15Y\u00F2\u00BA\u00C9\u00AF\x0EB\x19\u00EB*\u00CDc\u00EDZ\u00FF\u00DB-\u00F3\x1B!u\u009A\f\u00ED6\u00D6q|\u009B\u00C3\u00BF@\x06B\u00FB\u00B9\u00C8\u0092\u008D6\x0E\u00AD q\u009A\u00F7\u00E29\u009E\u00A2?\u0098G\u00E34\x7F\u0081\u00B3\"K\u00F6\u009B\u00FC\u00DB\x16c\x1FV\u00B1\u0085\u0091`\u009B\u00C6\u00AE\u00B2\u009E\x1A\u00D5\x16r\u0081\u00AF\u00CA\u00F8\u009F\x07\u00DB/\x1Cb\u00E7\x7FA\u00CE\u00B0\u0084W\u00F8\x12l\u009F0\u00A1\u00A2\u00F8\u00BA\u00D5t'\x7Fs\u00BE\u00C8\u0092\x0E\u008Ep\x14\u00A7\u00F9\u00E9\u0095\u00B9\u00C8\u0092\u0083\u00AA\u00F9\u00DD\u00AA;Im\u00CE_\x1B\u00AB\u00DA`\u00A5_\u00DDI~b<N\u00F3\x0F]\u009B\u00B9\u00C0P\u00F8\u009E\u008A\u00D3\u00FC\u00992)`\x1C?\u00EE\x02YPf\u00CD\u00AC\u009B\u00AFp\u00A4\u00BC\u00F0\u00EF\x18\u00C6X\x18\u00BBz\u0085\x17\u00AA\x16\u008B\x1E\u00FF\u00F1\x0F\x13\u00F2\x07`7V>z[#E\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("instaIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:18+03:00\" xmp:ModifyDate=\"2020-08-08T19:27:07+03:00\" xmp:MetadataDate=\"2020-08-08T19:27:07+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:cb6bb46f-6557-ac45-8aff-126305a6cb89\" xmpMM:DocumentID=\"xmp.did:cb6bb46f-6557-ac45-8aff-126305a6cb89\" xmpMM:OriginalDocumentID=\"xmp.did:cb6bb46f-6557-ac45-8aff-126305a6cb89\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:cb6bb46f-6557-ac45-8aff-126305a6cb89\" stEvt:when=\"2020-08-08T19:25:18+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00D1\u00C8c\x1F\x00\x00\x012IDATH\u00C7\u00ED\u00D5\u00BB.\x04q\x14\u00C7\u00F1m\\:[S\u00EDJ\u00DC\u00DF\x06-\u00A2G'\x1E\u0080\u00F5\x00\u00EE\nv{*\u00D1\u00E2\x19\x04\u00C9\u00A7\u0096HVK\u00B7\u00ECh\u008E\u00E4\x1F\u00D9\u0090\u00BF !\u008A\u0093\u00999\u00FF\u00DF\u00E4;\u00E7:\u00A5\u00A2(J\u00DFm\u00A5\x7F\u00C8\u00EF\u0081`\x10[\u00B8G\x1BO\x1D\u00AC\x1D\u00E7[\u00A8fAP\u00C5\r\n\u009C\u00E1\x10\u00F5\x0Ev\u0080\u0093\u00D0]\u00A3\u0092\x03\u00D9\u008B\x17\x17\u00D0\u00F7N\u00B4]X\u00C1~\u00E8wr \u00F78GO\u00E2\u009B\u00C0:\u008EP\u00C30\x06p\u0089e\u009C\u00A2\u0099\x03)PO\u009E\u00E7\u00F1\x1C5\u00B8Mj4\u008B~tGJ\u008B\x1CH\x1B\u008D\u00B8\x1F\u00C7c\u00E4|\x12cq\u00BD\u00C6\x03\u0086B\u00D7@\u00FB\u00B3\u0090u\u00B40\u00F5F3\x1D\u00FE\u00DAW@\u008Eq\u00F7\u00FA\u00C5\u0089f(\u00FC\u00C7?\x11\u00C9\u00DAW@F#\u00F7iM\u00A6\u0092\u009A\u008C|\x16\u00F2\u00B6\u00BB\u00E6\u0092\t\x7F\u00ED\u00AE\x16f\x12M=\u00B7\u00BB:\u00CD\u00C98\u00D6bNV1\u0096\u009C\u00F5\u00E2\"wNv#\u009AE\u0094\u00DF[~(c)\u00F4\u00DB9\u0090J\u00E4\u00FC\u00A3\u00DDu\x18\x11\x17\u00B8\u00CA\u00DA]\u00C9\u0092\u00DCD\u00F3\u0083-\u00DC\u00C4F\u00F6\x16\u00FE\u00FF3\u00FE}\u00C8\x0Bj\u0088pP\x1D\u00F48i\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("instaColoredIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:18+03:00\" xmp:ModifyDate=\"2021-01-28T16:47:52+03:00\" xmp:MetadataDate=\"2021-01-28T16:47:52+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:0fb273ac-63d2-4247-82e0-e5e4d4743e99\" xmpMM:DocumentID=\"xmp.did:cb6bb46f-6557-ac45-8aff-126305a6cb89\" xmpMM:OriginalDocumentID=\"xmp.did:cb6bb46f-6557-ac45-8aff-126305a6cb89\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:cb6bb46f-6557-ac45-8aff-126305a6cb89\" stEvt:when=\"2020-08-08T19:25:18+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:0fb273ac-63d2-4247-82e0-e5e4d4743e99\" stEvt:when=\"2021-01-28T16:47:52+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>s\u0092@&\x00\x00\x02\u00B7IDATH\u0089\u00ED\u00951\u0088TW\x14\u0086\u00BFs\u00EFuvg\u00DE\u00DBuXw\u008C\"dW\u0083+\u00AB\u0092\x14\tb\x17\u00BBXhB\x02\u00DB$)\u0082\u0092\"\u0090(((\u00D8\u00A8\u00A0\u00A5\b&\u0084@R\u00E8\x1A,\u0094\u0090\"\u0082\u009D\u00DA\u00A4J\u0095\u0080\u00EB\u00C6\"a\u008AM\u0082#d\u00DE\u00CC\u00E8\u00CE\u00BAs\u00EE\u00B1x\x1B\x14}\u008B#\u00C4F<p\u008A\u00CB\u00F99\x1F\u00FF\u00E1\u00DEs\u00C5\u00CCx\u00DE\u00E1\u009E;\u00E1%\u00E4Y#,WX\u00907_S\u0092\x03J:\u00A5\u00A4\u00A3J\x1A\u0095\x14e\u0088H\u0082\u0092\u00A0T\\\u00A4r'2p\u00C9(\u009D\u009A\u00B0w\u00FF(\u00EA%E\u00B7KelCd\u00F0r\u00A4<\x19I\u00AE)i]I%\u0087\u00E4 %!\u0092F\u00A5R\u008B\u0094wE\x06g\"\x03\u00BB&\u00EC\u00BD?\u00FBr\u00E2\u00DC\u00FCa\u0089qR\u0088\u00FB\u00848]\u00B6\u009F\u00B3\"\u00DD_rl\x05\u00E8A!\u00FE\r\u00F1S\u0088\u0087\u0080\u00CF\u00FAr\u00C2P\u00F5\u00B6uW\u00DC\u00B0^i\u00A7\u00B3\u00B9\x05\u0080\u00AEl\u00DB\u00AA$\x1FE\u0092\u008D\u00CA\u00D0-%=\u00A7\u00A4\x1De\u00E8\u008A\u0092|\u00AF$oG*o\u00AD\u00B7=\u00AF\u00F4\u00E5\u0084\u00E1\u00C5\u009Ax\u00ABK\u00B3\u00B1\u0090\u008Fo|\u008F\u00A7\u00FC\u00AD\u00A0\u00A2\u00E8\x1C\u00C4\x0F@\x0F\u0081\u00EE\x05\u00DD\tzG\u00D0IEW\x17N\u00A6\x10RUcxQ\x00(\u008Flqt\u00CF8\u00EE\u00CD::S\u009E\u00D6;\u0081l*\u0090\u00FD\x1E\u00C8\u00BE\nd\u00E9Z;y\u00DF\u00D3r\u009EV\u00E1\u00FA(v2\u00A2\x10\u0096\u00F4\u00E9\u00E2\u00C7\u00E2l\u00C0u\u00E3Q\u00AF\u00F5\x1F\u0096\x143\u00F3\u00B2\u00DD\tzA\u00D0O\u0080#\u0081&\u0082\x16\u00B6+\u0086\u008C\u00C6\u0087\u0095\u0095\u00BD\t\u00BC5\u00C4\u00D9o\u008FJ<\u009D_\u0085\u00D8\x00\u00DD\u00947\u00CA\u0096\u0085\x14\u008Fk\u00D4rP\u00EE\u00EA\x16\u00D5^\u008D\u00E1\u00C5\u00D7\x1F\u0083\u00BC\u00E1i\u00D7\x02\u00AD\u00D9\u00FC\u009C\u00E1)\u00BC\u0084\u00CB9\u00E1\u00E1\u00B8V\u00C5i\u0082}\u008E\u00E78\u00AFV\u008CN\u00B8\u00C9|\u00D8\u00EC(\x1D\x03\u00EBB<\u00FF4'\u00CBA\u0084@N\u00B9\u00D2\u00BB\u00C9\u00EE\u00F0\x05^\u00BF#\u00D8%<sx['\u00CE\u00D4u\u00E3^\u00AF\u00F5%'m\x03\u0095\u00FE!#4\b\u008Cq\u00DC\rp4.\u00F0S\u00EF,\u00EF\u00FB_\b|\u0088\u00B7Mx\u009B\u00C5\u00DB\x05\u00B9\u00FB\u00EF\f@\u0094u\u0083\u008E\u00C1q\u0088\u00B7\x0B\u00FB\u0099\u00D9\u0093\u00F9\u00A3|c\u00D3b\u00F6\u00A5\u00EC\u00B3\x13R-\u00D4\u00FC\u0097+\u0087\u00ABVZ\u00B5?\u00B2\u00C6z\u008C}]\u00A4)~\u00F1W\u00DDz\u00EEr\u00996\u009Biq\u008D\u008C:M\u0084&\u00D0\u0094<3\u0081\u00CC\x1Bm7N'\u00EC`>\u00DC\u00B0ni\u00B7\u00D8?O\u00EC\u00AEb\b\u00C0u\u00B7\u0081{\x1C\u00A0\u00CD\x14mjd\u00C4\x1C\u00F2\b\u00A8)\u008E\u0096k\u00D0\u00F2\x17\u00E9\u00F8\u00D34\u00DA\u00FDo\u00E1\u00FF;^\u009C\u009F\u00F1\u00C5\u0081<\x00\x14\u0092^e\u0088\tT$\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("youtubeIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:25+03:00\" xmp:ModifyDate=\"2020-08-08T19:26:55+03:00\" xmp:MetadataDate=\"2020-08-08T19:26:55+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:0fc13148-18d3-454e-89bc-f1e757a99b78\" xmpMM:DocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\" xmpMM:OriginalDocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:0fc13148-18d3-454e-89bc-f1e757a99b78\" stEvt:when=\"2020-08-08T19:25:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>i\x18$\u00AA\x00\x00\x01\rIDATH\u00C7\u00ED\u00D5=\x0B\u0082@\x18\x07p\x1Br({\x19\u009Aj\u00E8\u0083\u00B4\u00B5\u00F5\x01Z\u009B\u00FC\x0Em\u008DB/\u00AB~\u0084\u00A4\u00AFQK\u0084\x11\u00D8\u00A4\x0E\u00B55\x14AD\u00B4\u0088\u00F6\u00BFx\x02\x11\u00B3#\u00F0&\u0087\x1F\u00C8\u00DD=\u00FD\u00F3z\u00EE\u0092\u00C20\u0094\u00B2&\u00E5!y\u00C8\u009B\u00E38\x15\u0098\u00C2\x16N\u00F0\u0080\x00\u00C2\x04\x01\u00CD\u00B3u\x16L@\u00E1\tQ\u00E9\x03\\X\u0080\x0E3\u00D0`\x14\u00A1\u00D1\u00B8N\u00EB\\\u00AASyBL8C\x07\u008APH\u00DB\n6O\u00EB\u00D8\u00FA\x0B\u00CCyBV\u00E0A36\u00DE\u0080vJX\u008B\u00EA\u0096<!{\u00B0\u00A1\x16\x1B\u00EF\u00C1\x06\u0086PM\u00A8\u00ABS\u009D\u00CD\x13\u00C2\u00BE\u00CD\x0EJ\u00B1\u00F1.<i\u00DF\u00D7\u00D0\u008Fn%\u009E\u00CBT\u00E7\u00F1\u0084\x1C\u00A9S\u00E4\u0084\u0090k\u00A4\u00B3n0\u0088\u00CC\u00CB\u00D4\u0091\x07\x11o\u00E2\u00F2\u0084\u00D8\"~\x13!\u00DDeR\u00BFgzN\u00E2'\u00DE\u00F8q\u00E2\u008D\x7FN\u00BCBw\u0090Ew\u00D2\x1D\u00FC/w\u0097O\u00F3\u009F\u00BBk\u00CC\x1A \u00FF?\u00C9C\u00C4\u0085\u00BC\x00\x01\u00B8b\u00D0\u00AB\u00E0\x06\u00F7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("youtubeColoredIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:25+03:00\" xmp:ModifyDate=\"2021-01-28T16:39:23+03:00\" xmp:MetadataDate=\"2021-01-28T16:39:23+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:85ced5dc-b738-bc49-a1c9-8e8c791d1ec4\" xmpMM:DocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\" xmpMM:OriginalDocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:0fc13148-18d3-454e-89bc-f1e757a99b78\" stEvt:when=\"2020-08-08T19:25:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:85ced5dc-b738-bc49-a1c9-8e8c791d1ec4\" stEvt:when=\"2021-01-28T16:39:23+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>|\u00E2?;\x00\x00\x01\u009EIDATH\u0089\u00ED\u00D5\u00BFjTQ\x10\x06\u00F0\u00DFDW\x13\x13%\u0092\x14\x16\u0082ZXZX\u0088E\u009E#`c\x17\u009F\u00C1W\u00D0\u00F8\x00\x16\x06,\x04-\u00C4\x17\x10\u00B4\x17#\x16\u0096\x16*\x04\u00B6\u00C8\u008A\u00FFX7\u00BAk\u00C6bOd\u00F7\u00EE\u0089l\u0093B\u00C9\u00C0p/3\u00DF7\u00DF\u009Cs\u00EE\u009C\x1B\u0099\u00E9\u00A0m\u00E6\u00C0\x15\x0EE\u00FE\x11\u0091\u0088\u0093\"\u00EE\u0088x%\u00A2-\u00A2+bWDV|\u00B7\u00E4\u00DB\"6E\u00AC\u008BX\u0098(9\u00F1\tG\u00AC\u00E1\x1E\u00DE\u00E25:\u00E8\u00E1'vF\u0090\u00B38\u00869,\u00E32.\u00E2\u0086\u00CC\u008D\u00B1\u009A\u00999\u00EE<J\u00B6\u0093\u0095\u00A4\u0095\u00A5\u0091}\u009D(\u00B8\u0095\u00A4\u0093<lbjgr\x16\u009F\u00F1Nf\u00DF\u00DER#\u0096E\u009C\u009B@\x0F+\u00F5\u00F1\x1E\u009F\n\x7F\u00CCj\"\u008Be{\u00BA\u008D\u00F8\x15<\x16qS\u00C4\u00A9\n\u00AF[x\u008B\u00D3\u0088\u00CC\u00E2\x17\u00FA\u008D\u00F8\x0F\\\u00C2-<\x15\u00B1*\"F\u00F2\u00FD\u00C2\u009B\u009BF\u00A4U\u00C0\u0083J\u00AEW\u009EW\u00B1\u0081\u00EB\r\u0091]\x1C\u009DF\u00A4\u008F#5\u00F0H\u0097/\u00B0\u0086\x07\u008D\u00E6fL\u00EE@\u00B5P\u00AF\u0088\u00B4\x1A\u00F1\u00E3x\u0083'\u00B8+\u00F3k#\u00DF*\u00BC\u009DF\u00BC*\u00F2\x05g0_\u00DE\u00F7\u00EC%Ve~\u00A8p\x14\u00FC\x1C\u00DA\u00CDDm\u00BB\u00B6p\x1A\x17D\u00B4\u00FE\x1Cnf\u00A7*\x10\x11\"Z8_x[\u00D3\u00AC\u00E4\x19\u00AE\u00E1\u00BE\u00E1\u00C4\x7F\x14\u00F1\u00DD\u00FE\x13\x7F\x02K\u0086\x13\u00BF\u0084\u00E7\x13\x15+\x13\u00BC\u0090\u00AC'\u009BI;\u00F9\u0096\f\u0092\u00AC\u00F8\u00A0\u00E4\u00DB\x05\x7F;\u0099o\u00D6\u009C\u00BC\u00BB\x0E\u00C0\u00FE\u00E7\u00FF\u00C9\u00A1\u00C8_\u00EC7\u00AA\u00EC\u00D5'\x18n$~\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("envatoIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00DEiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:25+03:00\" xmp:ModifyDate=\"2021-01-28T16:22:43+03:00\" xmp:MetadataDate=\"2021-01-28T16:22:43+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:5aefccef-754e-7147-a178-496799d479b9\" xmpMM:DocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\" xmpMM:OriginalDocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:0fc13148-18d3-454e-89bc-f1e757a99b78\" stEvt:when=\"2020-08-08T19:25:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:5aefccef-754e-7147-a178-496799d479b9\" stEvt:when=\"2021-01-28T16:22:43+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>07\u00B3\u00F5\x00\x00\x01%IDATH\u0089\u00E5\u00D5\u00B1+\u0084a\x1C\x07\u00F0\u00CF\u009D\u00CB%%\u00ABc\u00B3\u00B8E\x11\u00F1\x17H\u00CA\u00AE\u0094\u00C1``\u00B1\x19\u00EC\u00C4\u00CA\u00AE,\x16\x0B#\n\x7F\u0085.\u008BM\x06\u008A\u00A2S\u00BA3\u00DC;\\\u00BA{\u00EFy^\u00DD\u00C2w\u00FA\u00F5\u00FC\u009E\u00F7\u00FD<\u00BD\u00FD\u00DE\u009E\\\u00A5R\u00D1\u00ED\u00E4\u00BB.\u00FC{$\u008F\x15\\\u00E3\x1DU\u00CC\u00A5=P\u0088\x04\u0086q\u008A\u00D9\x1F\u00EB\u00BB\u00B8H;UhJ\u00B8m\x01\u00C0$\u00C6~\u008B\u00F4\u00E2\f\u00A3){\u00E6\u00B3 k('\u00F5\x16\u00A6:\x1Cd&\x16\x19\u00C7!\u009E0\u0098 \u009DRn\u00D7h\u0087l\u00E3\x03/XB\x7F\x00Rj\u00D7h5]\x05,&u\x0E\x0B\x01\x00\f\u00C4 #\u00E8K\u00EA2&\x02\u0091j\u00BBF\u00AB\u00CFUl\u00AA\u00D71\x14\u0088\u00BC\u00C6 \x0F\u00F8J\u00EA\r\u00F4\x04\"w1\u00C8'.\x03_\u00DC\u009C\u00AB\x18\x04\u00F6#\u0081g\x1C\u00C5\"78\b\x04\u00EAXM\u00A0(\x046\u00B1\u0083Z\u00CA\u009E7,\u00E3<\u00ED\x14iHM\u00E3\u00A7\u009C\u00C61\x1E\u0093\u00F5:\u00EE\u00B1\u00A71\u00E2'i\x00\u00E42\u00DC\u00F1E\u008D\u00E1\bN\u0096K+\n\u00C8\u008AD\u00E7\u00EF \u00DFq\u00B6/P|\u0085a\x12\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("envatoColoredIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00ABiTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T19:25:25+03:00\" xmp:ModifyDate=\"2021-01-28T16:31:06+03:00\" xmp:MetadataDate=\"2021-01-28T16:31:06+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:2858ec9b-c993-b74d-8dcb-73f2494012d3\" xmpMM:DocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\" xmpMM:OriginalDocumentID=\"xmp.did:0fc13148-18d3-454e-89bc-f1e757a99b78\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:0fc13148-18d3-454e-89bc-f1e757a99b78\" stEvt:when=\"2020-08-08T19:25:25+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:5aefccef-754e-7147-a178-496799d479b9\" stEvt:when=\"2021-01-28T16:22:43+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:2858ec9b-c993-b74d-8dcb-73f2494012d3\" stEvt:when=\"2021-01-28T16:31:06+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00A87{\x7F\x00\x00\x01qIDATH\u0089\u00DD\u0095?/\x04A\x18\u0087\u009F=\x17\"\x125G\u00A7\u00BAF\x10\u00C1\x17\u0090\u0088{\u00A9%4\x14\nrK\u00A7\u00D0\u0093(\u00C7\x07\u00F0\x05D\u00C2\u00BD\u00D5Q\u0088Z\u00A3\u00A2P(Dw\x12\n!\x11\u00A3\u00B8\u00BD\u00E4\u00EC\u00ED\u00DC\u00CE\x16\u00A7\u00B8_2\u00C9\u00BB\u00FB\u00DBy\u009Fy\u00E7\u00CFN`\u00AD\u00A5\u00D3\u00CAu\u009C\u00D0U\u0090|\u00FCE\x10\x04m;\x18\u0095\x1C\u00B0\x06\u00AC\x033@\x0F\u00B0\x1C\u008AV]\u00EB\u00DB\x02I\x01\u008C\x00\u00A7\u00C0\\\u00CC:\x04\u00AA\u00AE~A\u009C\u00EE\u00AA\u00C4\u00A8\x14\u0080\x1B`\u00CC\u0091\u00ABX.U\x1E\u0092\f\u00AF51*\u00BD\u00C0y\x1B\x00\u00C0\u0082\u00CBpB\u008C\u00CA\u00A6Q)F\u008F{\u00C0t\u00CAXf]F\u00E2t\x19\u0095q\u00E0\x16\x18\x02~\u0080g` \x05rW.U&\u0092\fW%\u00FB\u00C0G(\u00FA\n\u00ACx\x00\x00\n.\u00A3ew\x19\u0095<\u00B0\x14\u00C5\x01\u00B0\u00E8\x01\x00\x18\u00F4\u0086\x00\u00A3@\x7F\x14\x17\u0081IO\u00C8\u00A7\u00CBH\u009A\u00AE\u00BE\u00A6x\x0B\x18\u00F6\u0084\u00BCe\u0081<\x01\u00DFQ\u00BCM\u00FDD\u00FB\u00E8\u00DE\x1B\x12\u008A~\x01\u0097\u009E\u0089\u009Bu\u00E5\r\u0089t\u0094\x11P\x03N2AB\u00D1k\u00E0\u00D8\x13`\u0081\u008DP\u00B4\u0096\t\x12i\x178\u00A0~\x18]z\x07VC\u00D1\u008Bv\u00A3H\u00FDA\x1A\u0095)`\x07\u0098\u00A7\u00BE\u00D3,\u00F0\b\u009C\x01&\x14}i|\u00EB\u00BC\u00CA\u00AD\u00B5\x7FZ\u009A\u008CJ\u009F\u00CB\u008B\u00E7j\u00B4\u0096J:\u00A1\u00EE\u00B9\u00E3\u00FF\x05\u00F2\x0B\u00DFzx\u00B8/\u008At\u00FD\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("contactUsIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T20:42:22+03:00\" xmp:ModifyDate=\"2020-08-08T20:43:15+03:00\" xmp:MetadataDate=\"2020-08-08T20:43:15+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:aec3a1d7-bdcb-5247-9fbd-bd34fee8a3a9\" xmpMM:DocumentID=\"xmp.did:aec3a1d7-bdcb-5247-9fbd-bd34fee8a3a9\" xmpMM:OriginalDocumentID=\"xmp.did:aec3a1d7-bdcb-5247-9fbd-bd34fee8a3a9\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:aec3a1d7-bdcb-5247-9fbd-bd34fee8a3a9\" stEvt:when=\"2020-08-08T20:42:22+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\x18\u00B4\u00A9\u00B2\x00\x00\x01\x1FIDATH\u00C7\u00ED\u00D5\u00CD*\u0084Q\x1C\u00C0\u00E1i\u0084\u00A2$[7`\u00E5\x16\u00D8`!!\u00CA\u008E\u00C8\x05\u00D8\"5e;\u00D7 \u00E6NX\u0089\u0099\x14)\x0F\u00C5\u00F8\u00C8\u009A\u00F2\u00B50^\u009B\u00A3&M\u009C\u0099\u00F1\u0096\u00C5,~\u00BBsz\u00FA\u009FN\u00E7d\u0092$\u00C9\u00A4]\u00A6\u0085\u00FC\x7F\x04\x13\u00B8\u00C0\x07*x\u008F\u00A8\x12\u00D6\u009Fc<\x069\u00C2\x03v\u00B0\u0085\u00ED\u0088\u00B6P\u00C0#J1\u00C8-\u008A\u00C8\u00D6s$hC\t\u00D71H\x19\u0087_\b\u00DA\u00D1\u00F5C\u00EDUH\x11\u0097\u00B1H\u00B1js\x1E\u00A78\u00AE\u00D1)\u00F2a]G\u00D8w\u00D5\b\u0092\u00C3\x1Evk\u00B4\u0087\\\x15Rjt\u0092Nt\u00D7\u00A8\x07\u00BD\u00E8\u00FA\u008644\u00C9\x14\u00D6\u00B0\x1AZ\u00C7\n\u00FA\u00BF\u00EDk\u00EA\u00B8\nx\u00C6S\u00E8\x05w\x18\u00FAKd\x10\u00A3\x18\t\u008Da\x18}\u00CD \u00D78\u00AC\u00F7\u00E9@\u00B6\x1E\u00E4\x127\u0098\u00C34f~i\x16\u0093\x18\u00C0>\u00CA1\u00C8&\u00DE\u0090\u00D4\u00D99\u00EEq\x16\u0083t\u0084\t\u0096\u00B1\x14\u00D1\"6\u00C2\u0085Hp\u0092\u00DAS\u008F\x05\u00BC\u00E2\"\u00D5\u00FF$L\x7F\u00906\u0092\u00C5|\u00EB\u008Fo\u00AAO\u00B6Ef\x18#SVW\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("aboutIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\x12iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop CC (Windows)\" xmp:CreateDate=\"2020-08-08T21:49:58+03:00\" xmp:ModifyDate=\"2020-08-08T21:50:20+03:00\" xmp:MetadataDate=\"2020-08-08T21:50:20+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:de96b2fa-1107-e447-adcc-1427b3cced83\" xmpMM:DocumentID=\"xmp.did:de96b2fa-1107-e447-adcc-1427b3cced83\" xmpMM:OriginalDocumentID=\"xmp.did:de96b2fa-1107-e447-adcc-1427b3cced83\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:de96b2fa-1107-e447-adcc-1427b3cced83\" stEvt:when=\"2020-08-08T21:49:58+03:00\" stEvt:softwareAgent=\"Adobe Photoshop CC (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00A6\u00CC\u00FD\u00D1\x00\x00\x00\u00B6IDATH\u00C7\u00ED\u00D5;\n\x021\x14\x05\u00D0\u00E9\u00DD\u0082\u00D5\u00EC\u00C4\u00C2\x1D\b\u00D6\u0083\u00DFU\u00896\u00B6\u00AE\u00E7 \u00D8+ZY\u0088\u00A0\u00C6&Z\u008DB`\"\bS\u00DC&yp p_\u008A\x10B\u0091;E\u008B\u00FC\x07\u00829\x0E\b\u00B8\u00E3\u00F6%\u00F78\u00B7\u00C7,\x059b\u0087E\u00CC\u00F2K^3;\x1CS\u0090\u0080e\u00CA\u0093D0\u00A4 \u008F:\x04}l\u00D0\u00FF\u0080<R\u0091U\u00CD\u00F9\x10[\fk\u00EEVM!\x1Dt\u00D1\u00C9\u0089\u0094\x18\u00A0\u00CC\u0089T8\u00A3\u00CA\u0089\u008Cq\u00C58'2\u00C2\x05\u00A3\u009C\u00C8$\u00B6|\u00D2\x14R\u00D7\u0093\x1E\u00D6\u00E85\u00D1\u0093\u009F4\u00FE\u00F4\u008B\u00DD5\u008B[5u\x0BO\u00DB\u009F\u00B1E\u00DEy\x02\u0091\u00F1p\u00E6G\u00FB\x19\u00E7\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("useCodeColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00A5iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-01-28T16:58:11+03:00\" xmp:ModifyDate=\"2021-01-28T17:00:25+03:00\" xmp:MetadataDate=\"2021-01-28T17:00:25+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\" xmpMM:DocumentID=\"xmp.did:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\" xmpMM:OriginalDocumentID=\"xmp.did:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\"> <photoshop:DocumentAncestors> <rdf:Bag> <rdf:li>xmp.did:4a55676d-3722-6e4c-a5d6-c1635dc03d56</rdf:li> </rdf:Bag> </photoshop:DocumentAncestors> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\" stEvt:when=\"2021-01-28T16:58:11+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00DF\u00AC\u00A4\x1E\x00\x00\x01oIDATH\u0089\u00ED\u00D6?H\u0095a\x14\u00C7\u00F1\u00CFk\u00DE!0\x11\u00A7\nT\u00FCG\u0093k45T8\x186\u00AA\u0083P\u0093NN\u00E2\"A\u0088CC[mM\r\u00E2\u00D0\\M\u00A9S\u00B5\u00DF\x10_A)$\u00B0\u0086Fq\x10\u00BD\x0E\u00CF\u0091n\u00FA\u00C2}\u0085.4\u00DC\u00B3<<\u00E79\u00BF\u00F3\u00E5\u00FC\u009E\u0087\u00977\u00CB\u00F3\\\u00B3\u00A3\u00AD\u00E9\u0084\x16\u00A4\x05ij\u00B4\x17\u00E4\u00FA\u00B1\u0080!\u009C\\\u00A2W\x1Bv\u00F0\x02\u00DF\x1AA^\u00E2!~\u00A0\u0086\u00AC\x04\u00E0\u00AC\u00EE\x01z0\u00DE\b2\u0082-L\u00E0\u00E8\x12\u0090\n\u00DE\u0086\u00FE\u00AF(\u0082d8\u00C0f\u0089\u00E6\u00E7\u00E3\x00\x1De 5\u00C9\u00DF\u008A4\u00C9Y\\\u00C7}\u00DC\u00C26>\u00E2W\u00DDy%t\u00B52\u0090L\u00BA\u00F0z\u00C0=\u00BC\u00C6\x00\x0Eq\x15\u00BB\u0098\u00C1F\u00D4\x1C\u0085\u00EE\u0082\u00BDEO\u00B8\u0086N\f\u0087\u00A0\x0F+\x18\u00C4\u009AtWk\u00D2\u00EB[Ao\u00D4\r\u0087\u00EE\u00C2$E\u0090\u00AF\u0092%\u008B\u00B8\u0082)\u00DC@\x15\x1F\u00F0>\u00D6*nb2\u00EA\u009E\u0086\u00AEz\u00BEa\u0091]s\u00F8\u008D\x1C\u00C7\u00B8\u008D=LK\u00AF\x0E^Iw\u00F2\x0Ew\u00A2.\u00C7\x1B,\u0095\u0081|\u00C7\u0093\u00BA\u00FDOt\u00E1qL\u00B0\u008E\u00BB\x18\u008B\u00FC\u00BEd\u00D1\u00F3\u0082^(\u00F7YY\u0095\u00BC\u009E\u00C7,\u00BAc\u009D\u008F\u00FCj\u00A3\x06e \u009F\u00FC\u00B1`T\u009Ad4\u00F6\u00CF\u00F0\u00F9_@\x04\u00E4\x11\u00BE\u00E0Z\u00AC\u00E3X.#\u00CEZ?\x12\u00FF\x1D\u00E4\x14\x04\x13LH\u00D7\u0088i\x14\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("notUseCodeColorIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x015iCCPAdobe RGB (1998)\x00\x00(\u0091\u0095\u008F\u00BFJ\u00C3P\x14\u0087\u00BF\x1BE\u00C5\u00A1V\b\u00E2\u00E0p'QPl\u00D5\u00C1\u008CI[\u008A X\u00ABC\u0092\u00ADIC\u0095\u00D2$\u00DC\\\u00FF\u00F4!\x1C\u00DD:\u00B8\u00B8\u00FB\x04N\u008E\u0082\u0083\u00E2\x13\u00F8\x06\u008AS\x07\u0087\b\u00C1\u00A9\u00F4\u009B\u00BE\u00F3\u00E3p8?0*v\u00DDi\x18e\x18\u00C4Z\u00B5\u009B\u008Et=_\u00CE\u00BF2\u00C7\f\x00t\u00C2,\u00B5[\u00AD#\u00808\u0089#\u00FE#\u00E0\u00E7\x03\x01\u00F0\u00B6m\u00D7\u009D\x06\u00D3\u00B1\x18\u00A6J\x03c`\u00B7\x1Be!\u0088\n\u00D0\u00BF\u00D6\u00A9\x061\x02\u00CC\u00A0\u009Fj\x10\u008F\u0080\u00A9\u00CE\u00DA5\x10\u00CF@\u00A9\u0097\u00FB;P\nr\u00FF\x04J\u00CA\u00F5|\x10\u00DF\u0080\u00D9s=\x1F\u008C\x05\u00C0\fr_\x03L\x1D\u00DDh\u0080Z\u0092\x0E\u00D5E\u00EF\\\u00CB\u00AAeY\u00D2\u00EE&A$O\u0087\u0099\u008E\x06\u0099<\u008C\u00C3D\u00A5\u0089\u00EA\u00E8\u00A8\x0B\u00E4\u00FF\x01\u00B0\u009C/\u00B6\u009B\u008E\u00DC\u00A8Z\u00D6\u00C1\u00E6\u0094\u00BD'\u00E2z\u00BE\u00CC\u00ED\u00EB\x04\x01\u0088\u0095\u0097\"+\b/\u00D5\u00D5\u009F\nco\u00F2\\\u00DC\x18\u00AD\u00C2\u00F1\x03\u00CC\u008E\u008Bl\u00FF\x16\u00EE\u00B7`\u00E9\u00AE\u00C8\u00D6\u00ABP\u00DE\u0081\u00A7\u00D1/\u00C2\u00B3O\u00FE{\u00B2\u00A5E\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06riTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c003 79.164527, 2020/10/15-17:48:32        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.1 (Windows)\" xmp:CreateDate=\"2021-01-28T16:58:11+03:00\" xmp:ModifyDate=\"2021-01-28T17:02:47+03:00\" xmp:MetadataDate=\"2021-01-28T17:02:47+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"Adobe RGB (1998)\" xmpMM:InstanceID=\"xmp.iid:398f5745-a12a-6f41-ab73-699d345fa168\" xmpMM:DocumentID=\"xmp.did:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\" xmpMM:OriginalDocumentID=\"xmp.did:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\"> <photoshop:DocumentAncestors> <rdf:Bag> <rdf:li>xmp.did:4a55676d-3722-6e4c-a5d6-c1635dc03d56</rdf:li> </rdf:Bag> </photoshop:DocumentAncestors> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1a2741c5-28f7-7943-bcb2-f7f475af4c3f\" stEvt:when=\"2021-01-28T16:58:11+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:398f5745-a12a-6f41-ab73-699d345fa168\" stEvt:when=\"2021-01-28T17:02:47+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.1 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F9^\u00D0\x11\x00\x00\x00\u00E9IDATH\u0089\u00ED\u00D5=J\u00C4@\x14\x00\u00E0/q\u00D7-\u00C4\u00DAF\x05A\x18\x1Boa'\u00B6\x1E\u00C3\u00CESl\u00E71\u00AC\x15\x0F\"\"\x0F\x04\x0B\u00EDlD\u00B4pe\u008D\u00C5&\u00B8\x1B\u00C4d\u0085\u0080E^\u00F9\u00E6\u00E7\u009B\u00997\u00CCdEQ\u00E8:\u00F2\u00CE\u0085\x1E\u00E9\u0091NcPOD\u00C4\x0EN\u00B1\u008B\u00CF%\u00E6\u00CAq\u0087qJ\u00E9\u00FEW\x04g8\u00C4#\nd-\u0080\u00AA\u00DF\x01\u00B6p\u00D4\u0084\u00EC\u00E3\x16\u00C7\u00F8\u00A8!\u00D5\u00F3P\u0087\x0B\fq^\u008E_\u0088\u009F\u00907<\u00A5\u0094n\x1A\u00D7_\u008B\u0088x\u00C6\u00A8\r\u00B2\u0081QD\u00AC\u00A4\u0094\u00A6s\x13\f15\u00DBE\u008E,\u00A54\u0099k\x1F`\x1Bkm\u0090W\u00BCc/\"\u00AA\u00E3Z/\u00F3\x0B\u00AFiD\u00ACb\u00E2\u00FB\u00B8^\u00CA\u00854\"\u00D7f\u0085\u00BF\u00B2|\u00E17q\u00D9\x069\u00C1\u0083\u00BF]\u00E1\x0B\u008C\u00EB\rY\u00FF\u009F\u00F4H\u008F\u00FC\x0F\u00E4\x0BOQ?\u00D1\u00E08\x13\u008D\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
        createResourceFile("pluginBtnIcon.png", "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x05\u00A6iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 6.0-c006 79.164753, 2021/02/15-11:52:13        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 22.3 (Windows)\" xmp:CreateDate=\"2021-06-27T20:27:14+03:00\" xmp:ModifyDate=\"2021-06-27T20:29:10+03:00\" xmp:MetadataDate=\"2021-06-27T20:29:10+03:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" photoshop:ICCProfile=\"sRGB IEC61966-2.1\" xmpMM:InstanceID=\"xmp.iid:83fd6fea-4857-d04c-8032-c69d70b7a367\" xmpMM:DocumentID=\"xmp.did:83fd6fea-4857-d04c-8032-c69d70b7a367\" xmpMM:OriginalDocumentID=\"xmp.did:83fd6fea-4857-d04c-8032-c69d70b7a367\"> <photoshop:DocumentAncestors> <rdf:Bag> <rdf:li>xmp.did:d3f1e317-47fd-1a41-82ff-accbe7671060</rdf:li> </rdf:Bag> </photoshop:DocumentAncestors> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:83fd6fea-4857-d04c-8032-c69d70b7a367\" stEvt:when=\"2021-06-27T20:27:14+03:00\" stEvt:softwareAgent=\"Adobe Photoshop 22.3 (Windows)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>=\u009A\x0B\u00FD\x00\x00\x00\u00C6IDATH\u0089\u00ED\u00D41\u008A\x02A\x10\u0085\u00E1O\u00D1\u00D4\u00C8\u00C0p\x11L\u00F5\x04\x06\u00A6\u0082x\u0092\u0085\u00BD\u0081^\u00C1@<\u0085\u0089\u00C7\u0099\u00C0\x0B\x18\u0099\b.\u00AC\x18l\x07\u0083\u0096\u00A2\u008C\x13(\u00F3\u00A0i\u00BA^\x15\x7FCWu-\u00CB2e\u00AB^:\u00A1\u0082\u00BC\x1Dd\u008C\x1D\u008E8\u00E0\x17340O\u00E7C\u00F2w)?T\u00E3\x0E\u00A4\u0083\u00F6E\u00EC+\u00B77\u00D3\u0092\u00F2:\u00CF@\u00BA\u00F8\u00C10\u00F0FX\u00A3\x1Fx\u00DF\x18`\u0081m\u00DE\u00A8\x05\u00C3\u00B8\u00C1\u00E4\u00D6\u00AD\x1E\u00D0\x06\u00D3| z\u0093^\x01@X\x1FA\u00FE\nBN\u008F@^\u00AE\nR\x18R\x14|U_Fw]\u00D5G\x13\u00BF\u00F2\u00FFG\u00B5\x04\u00EDxGu\u00EC\u00B1\u00BC4\u00A2\u0089\x7F\u00B9>\u00BB\u00BB*\u00C8M\u009D\x01\u0089\u00C2\x1F\u00A4\u0093\u00B8D#\x00\x00\x00\x00IEND\u00AEB`\u0082", iconsFolder.toString(), true);
    }

    function getPropPath(myProp) {

        var allPath = [];

        while (myProp.parentProperty) {
            allPath.push(myProp.name);
            myProp = myProp.parentProperty;
        }

        return allPath.reverse();
    }

    //  Functions End


    var w = buildUI(thisObj);


}

function canWrite() {
    if (app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY")) {
        return true;
    }
    alert(scriptName + ' requires access to write files.\n' + 'To allow, please go to Preferences > General and check off "Allow Scripts to Write Files and Access Network" to resolve.');
    return false;
}

function getAEVersion(){
    try{
        var aeBuildName = app.buildName;
        var xPlace = aeBuildName.search("x");
        var AEVerString = aeBuildName.slice(0, xPlace);
        return parseFloat(AEVerString);
    }catch(e){
        return -1;
    }
}