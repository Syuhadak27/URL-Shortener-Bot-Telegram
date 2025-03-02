const TOKEN = 'TOKEN BOT TELEGRAM'; //token dari bot father
const BASE_URL = `https://api.telegram.org/bot${TOKEN}/`;

function setWebhook() {
  const url = 'ISI_URL_HASIL_DEPLOY';
  const response = UrlFetchApp.fetch(`${BASE_URL}setWebhook?url=${url}`);
  Logger.log(response.getContentText());
}

function doPost(e) {
  const update = JSON.parse(e.postData.contents);
  
  if (update.message) {
    const chatId = update.message.chat.id;
    const text = update.message.text;

    if (text === '/start') {
      sendMessage(chatId, "<b>Bot Active ✅</b>\nKirimkan tautan panjang Anda, saya akan memberikan tautan pendek Anda ");
    } else if (isValidUrl(text)) {
      shortenUrl(chatId, text); 
    //} else if (isValidUrl(text)) {
      //try {
        //const shortUrl = shortenUrl(text);
        //sendMessage(chatId, `Ini adalah tautan pendek anda:\n\n<code>${shortUrl}</code>\n`);
        
      //} catch (error) {
        sendMessage(chatId, `Error: ${error}`);
      //}
    } else {
      sendMessage(chatId, "⚠️ <b>Maaf, hanya menerima tautan saja!</b>😉");
    }
  }
}



function sendMessage(chatId, text) {
  const url = `${BASE_URL}sendMessage`;
  const payload = {
    chat_id: chatId,
    text: text,
    parse_mode: "HTML" 
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
}


function isValidUrl(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}

function shortenUrl(chatId, url) {
  if (!isValidUrl(url)) {
    sendMessage(chatId, "Yeah salah😔😔 \nMasukkan tautan benar");
    return;
  }

  try {
    // Shorten dengan OUO.io
    var ouoApiUrl = "http://ouo.io/api/FpJjStwk?s=" + encodeURIComponent(url); //ganti api key dari akunmu jika mau
    var ouoResponse = UrlFetchApp.fetch(ouoApiUrl);
    var ouoShortUrl = (ouoResponse.getResponseCode() == 200) ? ouoResponse.getContentText() : "Gagal mendapatkan OUO link";

    // Shorten dengan TinyURL
    var tinyApiKey = 'ncl9UbBlsLrDGK2M0FZOfFW5hdO7aVV2b39SjW8DXxRYj7QNK4pVIg0kyYhq';  ////ganti api key dari akunmu jika mau
    var tinyRequestOptions = {
      method: 'POST',
      contentType: 'application/json',
      payload: JSON.stringify({ url: url })
    };
    var tinyResponse = UrlFetchApp.fetch(`https://api.tinyurl.com/create?api_token=${tinyApiKey}`, tinyRequestOptions);
    var tinyJsonResponse = JSON.parse(tinyResponse.getContentText());
    var tinyShortUrl = tinyJsonResponse.data?.tiny_url || "Gagal mendapatkan TinyURL link";

    // Mengirim hasil ke pengguna
    var message = `✅ <b>Tautan pendek Anda</b>:\n\n🔗 OUO: <code>${ouoShortUrl}</code>\n🔗 TinyURL: <code>${tinyShortUrl}</code>`;
    sendMessage(chatId, message);
    
  } catch (e) {
    sendMessage(chatId, "Pasti yang kamu masukkan bukan tautan, hanya bisa tautan.");
  }
}

