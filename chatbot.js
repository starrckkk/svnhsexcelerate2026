// chatbot.js
document.addEventListener('DOMContentLoaded', () => {

    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // Use techniquesData from techniques.js
    const techniques = techniquesData.map(t => ({
        title: t.title,
        content: t.content,
        fullText: (t.title + " " + t.content).toLowerCase()
    }));

    function getRelevantTechniques(message) {
        const query = message.toLowerCase().replace(/[^\w\s]/g,'');
        const queryWords = query.split(/\s+/);

        const scored = techniques.map(t => {
            let score = 0;
            queryWords.forEach(word => {
                if (t.fullText.includes(word)) score += 1;
            });
            return { ...t, score };
        }).filter(t => t.score > 0)
          .sort((a, b) => b.score - a.score);

        if (scored.length === 0) {
            return "Sorry, no matching technique found. Try keywords like 'formula', 'pivot', 'chart', etc.";
        }

        return scored.slice(0, 3).map(t => `<strong>${t.title}:</strong><br>${t.content}`).join('<hr>');
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        chatMessages.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const reply = getRelevantTechniques(message);
        chatMessages.innerHTML += `<p><strong>AI:</strong> ${reply}</p>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

});
