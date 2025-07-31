const form = document.getElementById('feedback-form');
const input = document.getElementById('feedback-input');
const list = document.getElementById('feedback-list');

// Helper to format time ago
function timeAgo(ts) {
  const secs = Math.floor((Date.now() - ts) / 1000);
  if (secs < 60) return "just now";
  const mins = Math.floor(secs / 60);
  if (mins < 60) return mins + " min ago";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + " hr ago";
  return new Date(ts).toLocaleDateString();
}

// Render feedback list
async function loadFeedback() {
  const res = await fetch('/api/feedback');
  const feedback = await res.json();
  list.innerHTML = '';
  feedback.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'feedback-msg';
    div.textContent = msg.message;
    const t = document.createElement('div');
    t.className = 'time';
    t.textContent = timeAgo(msg.timestamp);
    div.appendChild(t);
    list.appendChild(div);
  });
}

// Submit feedback
form.addEventListener('submit', async e => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;
  await fetch('/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: msg })
  });
  input.value = '';
  loadFeedback();
});

loadFeedback();
setInterval(loadFeedback, 10000); // auto-refresh every 10 secs
