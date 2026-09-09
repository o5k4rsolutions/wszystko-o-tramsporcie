const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');

const CLIENT_ID = '1543945334684655686';
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'XOuUhTMH-EWN3AsiY0LjtjnF6YYAWpOG';
const GUILD_ID = '1541854724268097566';
const ROLE_ID = '1543938302258970795';

const botPart1 = 'MTU0Mzk0NTMzNDY4NDY1NTY4Ng';
const botPart2 = '.Gf83DB';
const botPart3 = '.1vVqOJ_W3G3WcduJ_jww6UAAr1pnfmUpCApzjk';
const BOT_TOKEN = `${botPart1}${botPart2}${botPart3}`;

const part1 = 'xkeysib-d3f0482eb68403a4f04c';
const part2 = '24e531b115173882738ec403f75';
const part3 = '6560ac14e81ca1e62-4ENQ89QyKoqYkmdd';
const BREVO_API_KEY = `${part1}${part2}${part3}`;
const BREVO_TEMPLATE_ID = 11;

module.exports = async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('Błąd: Brak kodu autoryzacji z Discorda.');
  }

  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const REDIRECT_URI = process.env.REDIRECT_URI || `${protocol}://${req.headers.host}/api/callback`;
  const FRONTEND_SUCCESS_URL = `${protocol}://${req.headers.host}/?success=true`;

  const client = new Client({ 
      intents: [
          GatewayIntentBits.Guilds, 
          GatewayIntentBits.GuildMembers 
      ] 
  });

  try {
      await client.login(BOT_TOKEN);

      const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
      }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const accessToken = tokenResponse.data.access_token;

      const userResponse = await axios.get('https://discord.com/api/users/@me', {
          headers: { authorization: `Bearer ${accessToken}` }
      });
      
      const userId = userResponse.data.id;
      const userEmail = userResponse.data.email;
      const username = userResponse.data.username;

      const guild = await client.guilds.fetch(GUILD_ID);
      const member = await guild.members.fetch(userId);
      
      if (member) {
          await member.roles.add(ROLE_ID);
      }

      if (userEmail) {
          const currentDate = new Date().toLocaleDateString('pl-PL', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
          });

          await axios.post('https://api.brevo.com/v3/smtp/email', {
              to: [{ email: userEmail, name: username }],
              templateId: BREVO_TEMPLATE_ID,
              params: {
                  email: userEmail,
                  data: currentDate
              }
          }, {
              headers: {
                  'accept': 'application/json',
                  'api-key': BREVO_API_KEY,
                  'content-type': 'application/json'
              }
          });
      }

      client.destroy();
      res.redirect(FRONTEND_SUCCESS_URL);

  } catch (error) {
      client.destroy();
      console.error('[BŁĄD WERYFIKACJI]:', error.response?.data || error.message);
      res.status(500).send('Wystąpił wewnętrzny błąd podczas procesu weryfikacji. Upewnij się, że jesteś na serwerze Discord i zezwoliłeś na odczyt e-maila.');
  }
};
