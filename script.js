// complete the code
const statusDiv = document.getElementById("status");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const disconnectButton = document.getElementById("disconnect-button");
const notificationsDiv = document.getElementById("notifications");
const wsUrl = "wss://socketsbay.com/wss/v2/1/demo/";
let socket;

const displayNotification = (message) => {};

const connectWebSocket = () => {
	socket = new WebSocket(wsUrl);
	socket.onopen=()=>{
		messageInput.disabled=false;
		console.log("Connented")
	}
};

sendButton.addEventListener("click", () => {});

disconnectButton.addEventListener("click", () => {});

connectWebSocket();
