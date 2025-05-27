async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    
    // Show user message
    chatbox.innerHTML += `<div class="message"><strong>You:</strong> ${input.value}</div>`;
    
    // Send to backend
    const response = await fetch("https://YOUR-RENDER-APP.onrender.com/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ message: input.value })
    });
    
    const data = await response.json();
    
    // Show bot response
    chatbox.innerHTML += `<div class="message"><strong>Bot:</strong> ${data.response}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
    input.value = "";
}
