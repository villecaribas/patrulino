window.patrulinows = (function () {

    var url = "ws://" + ip + "/ws";
    var statusCon = false;
    var ws = statusCon ? ws : new WebSocket(url);
    var res = "";

    ws.onopen = function (evt) {
        console.log("Conexao aberta ...");
        statusCon = true;
    };

    ws.onmessage = function (evt) {
        console.log("Dado recebido ... :" + evt.data);
        res = evt.data;
    };

    ws.onclose = function (evt) {
        console.log("Connection closed.");
        statusCon = false;
    };

    return {
        //Metodos e variaveis PUBLICAS
        enviar: function (msg) {
            console.log("--> " + msg);
            if (statusCon) {
                ws.send(msg);
            }
        },

        opened: function () {
            console.log("Conexao esta: " + statusCon);
            return statusCon;
        },

        leia: function () {
            return res;
        },

        fechar: function () {
            statusCon = false;
            ws.close();
        }

    };
})();

//return window.patrulinows.opened();
