import socketIO from "socket.io";

export const SocketConnection = (io: socketIO.Server) => {
    io.on("connection", function (socket: SocketIO.Socket): void {
        console.log(`socket with id ${socket.id} is connected`);

        const room = socket.handshake.query.room;

        socket.join(room, async () => {
            const roomData = io.sockets.adapter.rooms[room];

            if (roomData.length === 1) {
                socket.emit("player-number", 1);
            } else if (roomData.length === 2) {
                socket.emit("player-number", 2);
                io.to(room).emit("start-game");
            } else if (roomData.length > 2) {
                socket.disconnect();
            }
        });

        socket.on("leave-room", () => {
            socket.leave(room);
            io.to(room).emit("user-leave");
            socket.disconnect();
        });

        socket.on("disconnect", () => {
            socket.leave(room);
            io.to(room).emit("user-leave");
        });
    });
};
