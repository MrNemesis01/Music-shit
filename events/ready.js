module.exports = async (client) => {

let serverIn = client.guilds.cache.size;
let prefix = process.env.PREFIX;

  console.log(`[API] Logged in as ${client.user.username}`);
  client.user.setActivity(` ${prefix}help || ${serverIn} Guilds`, {
    type: "LISTENING",
  });
};