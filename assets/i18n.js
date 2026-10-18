// Español (en el HTML) / inglés. Se recuerda la elección; por defecto, el idioma del navegador.
(function () {
  var EN = {
    "nav.features": "Features",
    "nav.gallery": "Gallery",
    "nav.install": "Install",
    "nav.support": "Support",
    "hero.tag": "A native Nintendo 3DS port built from the Paper Mario 64 decompilation. No emulation: the game runs directly on the console, on both screens.",
    "hero.download": "Download",
    "hero.how": "How to install",
    "hero.note": "You need <strong>your own copy</strong> of the game (Paper Mario, N64, USA version). No ROMs or Nintendo content are distributed here.",
    "features.title": "Features",
    "f1.t": "Native and smooth",
    "f1.d": "The game code compiled for the 3DS processor. A stable 30 fps, even on an Old 3DS.",
    "f2.t": "Touch screen",
    "f2.d": "Badges, items, map, spirits and stats always at hand on the bottom screen. Swap partners with a single tap.",
    "f3.t": "Touch battles",
    "f3.d": "The original command wheel responds to touch, and you pick your target by tapping its picture.",
    "f4.t": "Save states",
    "f4.d": "Three slots with a thumbnail and date, so you can save and come back at any moment.",
    "f5.t": "Mod menu",
    "f5.d": "Infinite coins, god mode, max HP/FP/BP, fast run, one-hit KO and more. Turn them off and everything goes back to how it was.",
    "f6.t": "3D and more options",
    "f6.d": "Optional stereoscopic 3D, dark mode, image filter, configurable Z button, Skip/Auto in cutscenes and menus in English or Spanish.",
    "gallery.title": "Gallery",
    "g1": "Gameplay with a real-time touch panel",
    "g2": "Interactive touch battles",
    "g3": "Settings, mod menu and save states",
    "g4": "Mod menu",
    "install.title": "Installation",
    "s1.t": "Get your 3DS ready",
    "s1.d": "You need a console with custom firmware (Luma3DS). If you don't have it yet, follow the community guide: <a href=\"https://3ds.hacks.guide/\" rel=\"noopener\">3ds.hacks.guide</a>.",
    "s2.t": "Dump your cartridge",
    "s2.d": "Dump the ROM of <strong>your own</strong> Paper Mario cartridge (N64, USA version) in <code>.z64</code> format. To check it is the right one, its SHA-1 must be:",
    "s3.t": "Copy it to the SD card",
    "s3.d": "Name it <code>baserom.z64</code> and copy it to <code>sdmc:/3ds/papermario/baserom.z64</code> (create the folder if it doesn't exist).",
    "s4.t": "Install the port",
    "s4.d": "<strong>Recommended:</strong> install <code>papermario.cia</code> with FBI and launch it from the HOME Menu. You can also copy <code>papermario.3dsx</code> to <code>sdmc:/3ds/</code> and open it from the Homebrew Launcher, but audio runs lighter with the CIA.",
    "qr.t": "Install with a QR code from FBI",
    "qr.d": "With the console online, open <strong>FBI</strong> &rarr; <strong>Remote Install</strong> &rarr; <strong>Scan QR Code</strong> and point the camera at this code. FBI downloads and installs the latest <code>papermario.cia</code>. You still need your <code>baserom.z64</code> on the SD card (step 3).",
    "install.download": "Download the latest version",
    "q1": "Why do I need my own ROM?",
    "a1": "The port contains no graphics, music or text from the game: it reads them from your ROM at startup. That way nothing from Nintendo is distributed.",
    "q2": "Does it work with the European or Japanese version?",
    "a2": "Not yet. Only the USA version (code NMQE). If you use another one, the port tells you when it starts.",
    "q3": "Which consoles does it run on?",
    "a3": "It was developed and tested on an Old 3DS XL; it also runs on New 3DS/2DS. Luma3DS is required.",
    "q4": "Where is my game saved?",
    "a4": "In <code>sdmc:/3ds/papermario/save.flash</code>; save states go in <code>state1.bin</code>–<code>state3.bin</code> and settings in <code>config.ini</code>, in the same folder. Save states stop working after updating the port; your normal save does not.",
    "q5": "Can I use my save from an emulator?",
    "a5": "There is no importer yet; it's an idea for future versions.",
    "q6": "I found a bug, what should I do?",
    "a6": "Report it on <a href=\"https://github.com/ChrZazueta/PaperRPG-3DS/issues\" rel=\"noopener\">GitHub Issues</a> with a photo or video and the place where it happened.",
    "support.title": "Support the project",
    "support.d": "The port is free and will stay free. If you enjoy it and want to buy me a coffee, it's hugely appreciated. ☕",
    "legal": "PaperRPG Dual Screen is a non-profit fan project, not affiliated with Nintendo, Intelligent Systems or any of their subsidiaries. Paper Mario and Nintendo 3DS are trademarks of their respective owners. No ROMs or copyrighted content are distributed: every user must use a legal copy of their own cartridge.",
    "credits": "Based on the Paper Mario decompilation by <a href=\"https://github.com/pmret/papermario\" rel=\"noopener\">pmret</a>. Built with <a href=\"https://devkitpro.org\" rel=\"noopener\">devkitPro</a>, libctru and citro3d. Port by <a href=\"https://github.com/ChrZazueta\" rel=\"noopener\">ChrZazueta</a>."
  };

  var ES = {};
  var button = document.getElementById("lang");
  var nodes = document.querySelectorAll("[data-i18n], [data-i18n-html]");

  // Guarda el texto en español del HTML para poder volver a él
  nodes.forEach(function (el) {
    var key = el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
    ES[key] = el.hasAttribute("data-i18n-html") ? el.innerHTML : el.textContent;
  });

  function apply(lang) {
    var dict = lang === "en" ? EN : ES;

    nodes.forEach(function (el) {
      var html = el.hasAttribute("data-i18n-html");
      var key = el.getAttribute(html ? "data-i18n-html" : "data-i18n");

      if (dict[key] === undefined) return;
      if (html) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    button.textContent = lang === "en" ? "ES" : "EN";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");

  if (lang === "en") apply("en");
  button.addEventListener("click", function () {
    apply(document.documentElement.lang === "en" ? "es" : "en");
  });
})();
