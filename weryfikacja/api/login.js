module.exports = (req, res) => {
  const CLIENT_ID = '1543945334684655686';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const REDIRECT_URI = process.env.REDIRECT_URI || `${protocol}://${req.headers.host}/api/callback`;
  
  const discordOAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email%20guilds.join`;
  
  res.writeHead(302, { Location: discordOAuthUrl });
  res.end();
};
