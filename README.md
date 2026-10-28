document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lookup-form');
  const ipInput = document.getElementById('ip-input');
  const bulkButton = document.getElementById('bulk-button');
  const bulkInput = document.getElementById('bulk-input');
  const resultState = document.getElementById('result-state');
  const resultContent = document.getElementById('result-content');
  const signalBadge = document.getElementById('signal-badge');

  const renderHistory = (items) => {
    const list = document.getElementById('history-list');
    if (!list) return;

    if (!items || items.length === 0) {
      list.innerHTML = '<div class="history-item"><strong>No activity</strong><span>Scans will appear here.</span></div>';
      return;
    }

    list.innerHTML = items.slice(0, 10).map((item) => `
      <div class="history-item">
        <strong>${item.ip || 'Unknown IP'}</strong>
        <span>${item.country || 'Unknown'} · ${item.city || 'Unknown city'} · ${item.proxy_risk || 'Low'} risk</span>
      </div>
    `).join('');
  };

  const loadHistory = async () => {
    try {
      const response = await fetch('/api/history');
      const result = await response.json();
      if (result.success) renderHistory(result.data);
    } catch (error) {
      // ignore
    }
  };

  const setFields = (data) => {
    const summary = data.summary || data;
    const traffic = data.traffic_profile || {};

    document.getElementById('country-value').textContent = data.country || summary.country || 'N/A';
    document.getElementById('region-value').textContent = data.region || summary.region || 'N/A';
    document.getElementById('city-value').textContent = data.city || summary.city || 'N/A';
    document.getElementById('risk-value').textContent = traffic.risk || data.proxy_risk || 'Low';
    document.getElementById('isp-value').textContent = data.isp || summary.isp || 'N/A';
    document.getElementById('confidence-value').textContent = data.confidence || summary.confidence || 'Low';

    document.getElementById('ip-value').textContent = data.ip || 'N/A';
    document.getElementById('family-value').textContent = data.ip_family || 'N/A';
    document.getElementById('asn-value').textContent = data.asn || 'N/A';
    document.getElementById('asn-org-value').textContent = data.asn_org || 'N/A';
    document.getElementById('hostname-value').textContent = data.hostname || 'N/A';
    document.getElementById('network-value').textContent = data.network || 'N/A';

    document.getElementById('country-full-value').textContent = `${data.country_flag || '🌍'} ${data.country || 'N/A'}`;
    document.getElementById('timezone-value').textContent = data.timezone || 'N/A';
    document.getElementById('coords-value').textContent = summary.coordinates || 'N/A';
    document.getElementById('proxy-value').textContent = data.proxy_risk || 'Low';
    document.getElementById('profile-value').textContent = traffic.profile || 'Mixed network profile';
    document.getElementById('threat-score-value').textContent = `${traffic.score || 0}/100`;
    document.getElementById('notes-value').textContent = data.notes || 'Location intelligence is ready for review.';

    const providerEntries = data.providers || {};
    const rows = ['<div class="provider-row header"><span>Provider</span><span>Country</span><span>Region</span><span>City</span><span>ISP</span></div>'];

    Object.entries(providerEntries).forEach(([provider, providerData]) => {
      if (providerData && !providerData.error) {
        rows.push(`
          <div class="provider-row">
            <span>${provider}</span>
            <span>${providerData.country || 'N/A'}</span>
            <span>${providerData.region || 'N/A'}</span>
            <span>${providerData.city || 'N/A'}</span>
            <span>${providerData.isp || 'N/A'}</span>
          </div>
        `);
      }
    });

    document.getElementById('provider-table').innerHTML = rows.join('');
    resultState.classList.add('hidden');
    resultContent.classList.remove('hidden');
    signalBadge.textContent = data.confidence || 'Scanned';
    signalBadge.className = `badge ${data.confidence === 'High' ? 'badge-green' : 'badge-neutral'}`;
    loadHistory();
  };

  const onLookupError = (message) => {
    resultState.classList.remove('hidden');
    resultContent.classList.add('hidden');
    resultState.innerHTML = `<p>${message}</p>`;
    signalBadge.textContent = 'Awaiting input';
    signalBadge.className = 'badge badge-neutral';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const ip = ipInput.value.trim();
    if (!ip) {
      onLookupError('Please enter an IP address to scan.');
      return;
    }

    try {
      const response = await fetch('/api/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        onLookupError(result.error || 'Lookup failed.');
        return;
      }
      setFields(result.data);
    } catch (error) {
      onLookupError('The backend is unavailable or the lookup failed.');
    }
  });

  bulkButton.addEventListener('click', async () => {
    const ips = bulkInput.value.trim();
    if (!ips) {
      onLookupError('Add one or more IPs to the bulk scan panel.');
      return;
    }

    try {
      const response = await fetch('/api/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ips })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        onLookupError(result.error || 'Bulk lookup failed.');
        return;
      }

      const firstValid = result.data.find((item) => item && !item.error) || result.data[0];
      if (firstValid) {
        setFields(firstValid);
      } else {
        onLookupError('No valid IPs were returned from the bulk scan.');
      }
    } catch (error) {
      onLookupError('Bulk scan failed.');
    }
  });

  loadHistory();
});
