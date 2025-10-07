# Luento 4
---------------------------------

## 🤖 Webhook
Node.js Express palvelin, joka välittää halutun viestin Discordiin Webhookin kautta. Kun palvelimelle lähetetään POST-pyyntö osoitteeseen /notify, se välittää viestin suoraan linkitetylle Discord-kanavalle. 

## 💬 Websocket
Palvelin vastaanottaa viestejä selaimelta ja lähettää ne takaisin ”echo”-vastauksena. HTML:llä tehdyllä sivulla on ”send”- nappi, johon voi kirjoittaa haluamansa viestin, mikä näkyy käyttäjälle sivulla.

## 📈  Fetch
Projekti hakee lämpötiladataa ThingSpeakista ja näyttää sen selaimessa. Siinä käytetään fetch()-funktiota, jolla saadaan noudettua JSON-muotoista dataa, josta poimitaan aikaleima ja lämpötila jokaisesta mittauksesta. 
## 📊 WeatherChart

Tämä ohjelma hakee lämpötiladataa ThingSpeakista ja näyttää sen Google Chart -kaaviona selaimessa. 

<img width="940" height="677" alt="image" src="https://github.com/user-attachments/assets/c920bf20-48af-44cd-a832-fae8b4c8b7a1" />
