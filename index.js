const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Line 1",
        state: "Line 2",
        startTimestamp: new Date(),
        largeImageKey: "discord", //must match images in the application
        largeImageText: "Text 1",
        smallImageKey:"github", //must match images in the application
        smallImageText: "Text 2",
                buttons: [
            { label: "Text1", url: "URL1" },
            { label: "Text2", url: "URL2" }
        ]
    });
    console.log("Rich Presence is now active");
})

rpc.login({
    clientId: "Enter your client ID here" //https://discord.com/developers/applications
})
