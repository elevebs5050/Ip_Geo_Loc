* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Inter, "Segoe UI", sans-serif;
  background: linear-gradient(160deg, #081120 0%, #111b2d 42%, #0f172a 100%);
  color: #e2edf9;
}

.shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 18px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7dd3fc;
  font-size: 0.72rem;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.12);
  border: 1px solid rgba(125, 211, 252, 0.4);
  color: #dbeafe;
  white-space: nowrap;
}

.dot {
  width: 10px;
  height: 10px;
  background: #34d399;
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(52, 211, 153, 0.8);
}

.layout {
  display: grid;
  grid-template-columns: minmax(280px, 290px) minmax(0, 1fr);
  gap: 20px;
}

.panel {
  background: rgba(15, 23, 42, 0.74);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.45);
  padding: 22px;
  backdrop-filter: blur(10px);
}

.search-panel h2,
.results-panel h2,
.history-panel h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #bfdbfe;
}

input,
textarea,
button {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.85);
  color: #edf6ff;
  padding: 12px 14px;
  font-size: 0.98rem;
}

textarea {
  margin-top: 14px;
  min-height: 150px;
  resize: vertical;
}

.button-row {
  display: flex;
  gap: 12px;
  margin-top: 14px;
}

button {
  cursor: pointer;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  border: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.35);
}

button.secondary {
  background: rgba(148, 163, 184, 0.15);
  border: 1px solid rgba(148, 163, 184, 0.25);
}

.result-state {
  background: rgba(15, 23, 42, 0.7);
  border: 1px dashed rgba(148, 163, 184, 0.28);
  border-radius: 14px;
  padding: 18px;
  color: #cbd5e1;
}

.hidden { display: none; }

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.metric-card {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 16px;
}

.metric-card span {
  display: block;
  color: #93c5fd;
  margin-bottom: 8px;
  font-size: 0.8rem;
}

.metric-card strong {
  font-size: 1.05rem;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.detail-box {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  padding: 16px;
}

.detail-box h3,
.provider-section h3 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #dbeafe;
}

.detail-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.detail-box li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

.detail-box li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.detail-box span {
  color: #93c5fd;
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
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.provider-row.header {
  background: rgba(37, 99, 235, 0.18);
  color: #dbeafe;
  font-weight: 700;
}

.history-panel {
  margin-top: 24px;
}

.history-list {
  display: grid;
  gap: 10px;
}

.history-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.history-item strong {
  font-size: 0.96rem;
}

.history-item span {
  color: #cbd5e1;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .button-row {
    flex-direction: column;
  }
}
