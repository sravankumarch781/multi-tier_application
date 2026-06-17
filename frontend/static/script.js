async function updateStatus() {
  const statusText = document.getElementById('statusText');
  const statusLabel = document.getElementById('statusLabel');
  const backendValue = document.getElementById('backendValue');
  const dbValue = document.getElementById('dbValue');

  statusText.textContent = 'Checking services...';
  statusLabel.className = '';

  try {
    const response = await fetch('/api/');
    const data = await response.json();

    backendValue.textContent = 'Online';
    dbValue.textContent = data.db === 'ok' ? 'Connected' : 'Unavailable';

    if (data.db === 'ok') {
      statusText.textContent = 'All systems are up';
      statusLabel.classList.add('status-ok');
    } else {
      statusText.textContent = 'Backend up, database issue';
      statusLabel.classList.add('status-error');
    }
  } catch (error) {
    backendValue.textContent = 'Offline';
    dbValue.textContent = 'No connection';
    statusText.textContent = 'Unable to reach backend';
    statusLabel.classList.add('status-error');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateStatus();
});
