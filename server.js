import WebSocket, { WebSocketServer } from "ws";

const server = new WebSocketServer({ port:3000 });


server.on('connection', ws => {
    ws.on('message', function message(data, isBinary){
        if (data.toString() === 'exit') {
            ws.close();
        }else {
            server.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN){
                    client.send(data.toString());
                }
            });
        }
        // server.clients.forEach(client => {
        //     if (client.readyState === WebSocket.OPEN){
        //         client.send(data, { binary: isBinary });
        //     }
        // });
    });
    ws.send('Добро пожаловать в Xiver!');
});