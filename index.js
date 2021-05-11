const RPC = require('discord-rpc');// how this works lol
const rpc = new RPC.Client({
    transport: "ipc" // don't know what this does, I just read documentation
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Line 1", // text under Application name
        state: "Line 2", // text under details 
        startTimestamp: new Date(), // If you want to show how long the status has been running, if you don't want it, put // infront of the line or just delete this line
        largeImageKey: "discord", //must match images in the application
        largeImageText: "Text 1", // This is the text above the large image
        smallImageKey:"github", //must match images in the application
        smallImageText: "Text 2", // this is the text above the small image
                buttons: [
            { label: "Text1", url: "URL1" }, //ex. { label: "My Dev Discord Server", url: "https://discord.gg/46HQ9rJ" },
            { label: "Text2", url: "URL2" } // ex. { label: "My Main Discord", url: "https://discord.gg/cEhU6VF" },
        ]
    });
    console.log("Rich Presence is now active"); // lets you know it worked
})

rpc.login({
    clientId: "Enter your client ID here" //https://discord.com/developers/applications
})
