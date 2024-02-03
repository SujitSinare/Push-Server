const webpush = require("web-push");

//console.log(webpush.generateVAPIDKeys());

const publicKey =
  "BM5l3YqTaemxPP0-O0Z1triMXQvwZWjFt2uvW9cnVuyb1CIvlQ5Z7mQwKLinzIWwsVOOogD9NiagzJp8AxbAkMM";
const privateKey = "x3Z_SKzxhdkgIag9g5BooMob5nplce8UbCAqF1qM0dc";

const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fWAlb32WZ2Y:APA91bGGfDn2RFNagQVW7ZLu3jZz3aJPvIH1DLH6_3bi86ahy4uUUVs5kdRI1B_IgQ1hVvRc5drcAYhh0XudX57SkjXg4tKDoYWWLCi34Cbmykb7J_RypcloY5jIwIk73KEN555jpWfe",
  expirationTime: null,
  keys: {
    p256dh:
      "BPDfqX71bLkx5cmky2zR4yBgU6SLdjKNGs5GI8x7Esd8_G5hu6QVTC-Bdw8qo8EnNPk3n2IHZFJW3aTkoPELLq4",
    auth: "-XMpnLz0i_ZvuMJX4vmpRQ",
  },
};

webpush.setVapidDetails("mailto:sujitsinare@ymail.com", publicKey, privateKey);

const payload = {
  notification: {
    data: { url: "https://www.google.com" },
    title: "Push Notification Test",
    vibrate: [100, 50, 100],
  },
};

webpush.sendNotification(sub, JSON.stringify(payload));
