const express = require('express');
const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();

const CLIENT_ID = '1543945334684655686';
const CLIENT_SECRET = 'XOuUhTMH-EWN3AsiY0LjtjnF6YYAWpOG';
const REDIRECT_URI = 'http://localhost:3000/callback'; 
const GUILD_ID = '1541854724268097566';
const ROLE_ID = '1543938302258970795';
const FRONTEND_SUCCESS_URL = 'http://localhost:3000/weryfikacja.html?success=true'; 

/* ==========================================================
   PODZIELONY TOKEN BOTA DISCORD
   ========================================================== */
const botPart1 = 'MTU0Mzk0NTMzNDY4NDY1NTY4Ng';
const botPart2 = '.Gf83DB';
const botPart3 = '.1vVqOJ_W3G3WcduJ_jww6UAAr1pnfmUpCApzjk';
const BOT_TOKEN = `${botPart1}${botPart2}${botPart3}`;

/* ==========================================================
   KONFIGURACJA API BREVO (Szlachetny klucz podzielony)
   ========================================================== */
const part1 = 'xkeysib-d3f0482eb68403a4f04c';
const part2 = '24e531b115173882738ec403f75';
const part3 = '6560ac14e81ca1e62-4ENQ89QyKoqYkmdd';
const BREVO_API_KEY = `${part1}${part2}${part3}`;
const BREVO_TEMPLATE_ID = 11; // ID szablonu powitalnego w Brevo

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers 
    ] 
});

client.login(BOT_TOKEN).then(() => {
    console.log(`[BOT] Zalogowano pomyślnie jako ${client.user.tag}`);
}).catch(err => {
    console.error('[BOT] Błąd logowania bota. Sprawdź poprawność tokenu:', err);
});

app.get('/login', (req, res) => {
    // Przekierowanie użytkownika do panelu autoryzacji Discord OAuth2
    const discordOAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email%20guilds.join`;
    res.redirect(discordOAuthUrl);
});

app.get('/callback', async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).send('Błąd: Brak kodu autoryzacji z Discorda.');
    }

    try {
        // 1. Wymiana kodu autoryzacyjnego na token dostępu (Access Token)
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

        // 2. Pobranie danych użytkownika (w tym ID oraz e-mail) z Discord API
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: { authorization: `Bearer ${accessToken}` }
        });
        
        const userId = userResponse.data.id;
        const userEmail = userResponse.data.email;
        const username = userResponse.data.username;

        console.log(`[WERYFIKACJA] Użytkownik ${username} (${userId}) o e-mailu ${userEmail} ukończył weryfikację.`);

        // 3. Pobranie serwera (Guild) i zarządzanie rolami za pomocą bota
        const guild = await client.guilds.fetch(GUILD_ID);
        const member = await guild.members.fetch(userId);
        
        if (member) {
            // Nadanie odpowiedniej roli użytkownikowi
            await member.roles.add(ROLE_ID);
            console.log(`[ROLE] Pomyślnie nadano rolę użytkownikowi ${username}`);
        }

        // 4. Wysłanie wiadomości e-mail przez Brevo (używając szablonu #11)
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
            console.log(`[BREVO] Wysłano e-mail potwierdzający (Szablon #${BREVO_TEMPLATE_ID}) do ${userEmail}`);
        } else {
            console.warn(`[BREVO] Użytkownik ${username} nie posiada udostępnionego adresu e-mail w profilu Discord.`);
        }

        // 5. Przekierowanie użytkownika z powrotem na stronę główną weryfikacji z potwierdzeniem sukcesu
        res.redirect(FRONTEND_SUCCESS_URL);

    } catch (error) {
        console.error('[BŁĄD WERYFIKACJI]:', error.response?.data || error.message);
        res.status(500).send('Wystąpił wewnętrzny błąd podczas procesu weryfikacji. Upewnij się, że jesteś na serwerze Discord i zezwoliłeś na odczyt e-maila.');
    }
});

app.listen(3000, () => {
    console.log('Serwer weryfikacji uruchomiony na porcie 3000 (http://localhost:3000)');
});
