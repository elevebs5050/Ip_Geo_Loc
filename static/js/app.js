:root {
  --bg-0: #07111f;
  --bg-1: #0d1a2b;
  --panel: rgba(13, 24, 39, 0.86);
  --panel-strong: rgba(18, 29, 46, 0.96);
  --border: rgba(148, 163, 184, 0.2);
  --line: rgba(125, 211, 252, 0.14);
  --text: #e5f0ff;
  --muted: #9eb4cb;
  --cyan: #67e8f9;
  --blue: #60a5fa;
  --violet: #a78bfa;
  --gold: #fbbf24;
  --green: #34d399;
  --red: #f87171;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Segoe UI", Inter, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(103,232,249,0.14), transparent 22%),
    linear-gradient(140deg, var(--bg-0) 0%, var(--bg-1) 52%, #0b1020 100%);
  color: var(--text);
}

body {
  padding: 24px 18px 48px;
}

.shell {
  max-width: 1320px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--cyan);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.1rem, 3vw, 3rem);
  letter-spacing: -0.04em;
}

.topbar h1 {
  text-shadow: 0 0 18px rgba(103,232,249,0.25);
}

.status-pill,
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.78);
  color: var(--text);
  font-size: 0.77rem;
}

.dots {
  display: inline-block;
}

.dot {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 16px rgba(52,211,153,0.9);
}

.main-grid {
  display: grid;
  grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);
  gap: 20px;
}

.panel {
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(8, 14, 24, 0.92));
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 18px 38px rgba(2, 7, 18, 0.38);
  padding: 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.06rem;
}

.badge-green { color: var(--green); border-color: rgba(52,211,153,0.35); }
.badge-neutral { color: var(--muted); border-color: rgba(148,163,184,0.2); }

label {
  display: block;
  margin-bottom: 8px;
  color: #d8e9ff;
  font-size: 0.9rem;
}

input, textarea, button {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 12px;
  color: var(--text);
  background: rgba(7, 12, 18, 0.8);
  padding: 12px 13px;
  font-size: 0.96rem;
}

input:focus, textarea:focus {
  outline: 1px solid rgba(96, 165, 250, 0.62);
  box-shadow: 0 0 0 3px rgba(96,165,250,0.12);
}

textarea {
  margin-top: 14px;
  min-height: 170px;
  resize: vertical;
}

.button-row {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}

button {
  cursor: pointer;
  border: none;
  background: linear-gradient(135deg, var(--blue), var(--cyan));
  color: #06111c;
  font-weight: 700;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 32px rgba(96, 165, 250, 0.35);
}

button.secondary {
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid rgba(148,163,184,0.22);
  color: var(--text);
}

.result-state {
  border: 1px dashed rgba(148,163,184,0.3);
  border-radius: 14px;
  background: rgba(11, 17, 28, 0.65);
  padding: 14px 16px;
  color: var(--muted);
  min-height: 60px;
}

.result-content {
  margin-top: 16px;
}

.hidden { display: none; }

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.metric-card {
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(13, 16, 24, 0.86);
}

.metric-card span {
  display: block;
  font-size: 0.76rem;
  color: var(--muted);
  margin-bottom: 8px;
}

.metric-card strong {
  font-size: 1.1rem;
}

.accent-blue { border-color: rgba(96,165,250,0.3); }
.accent-cyan { border-color: rgba(103,232,249,0.3); }
.accent-gold { border-color: rgba(251,191,36,0.3); }
.accent-red { border-color: rgba(248,113,113,0.3); }
.accent-violet { border-color: rgba(167,139,250,0.3); }
.accent-green { border-color: rgba(52,211,153,0.3); }

.intel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}

.intel-box,
.summary-box,
.provider-section {
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(10, 18, 30, 0.8);
  padding: 14px 16px;
}

.intel-box h3,
.summary-box h3,
.provider-section h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 0.98rem;
  color: #dcecff;
}

.intel-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.intel-box li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
  padding-bottom: 8px;
}

.intel-box li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.intel-box span {
  color: var(--muted);
}

.summary-box {
  margin-bottom: 18px;
}

.summary-box p {
  margin: 0;
  color: var(--text);
  line-height: 1.6;
}

.provider-table {
  display: grid;
  gap: 8px;
}

.provider-row {
  display: grid;
  grid-template-columns: 90px 1fr 1fr 1fr 1fr;
  gap: 12px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(18, 28, 40, 0.9);
  border: 1px solid rgba(148,163,184,0.14);
  font-size: 0.9rem;
}

.provider-row.header {
  background: rgba(96,165,250,0.1);
  color: #dbeafe;
  font-weight: 700;
}

.history-panel {
  margin-top: 22px;
}

.history-list {
  display: grid;
  gap: 10px;
}

.history-item {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(148,163,184,0.15);
  background: rgba(11, 18, 30, 0.8);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.history-item strong {
  font-size: 0.96rem;
}

.history-item span {
  color: var(--muted);
  font-size: 0.82rem;
}

@media (max-width: 980px) {
  .main-grid {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  body {
    padding: 20px 14px 36px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .provider-row {
    grid-template-columns: 1fr 1fr;
  }
}
