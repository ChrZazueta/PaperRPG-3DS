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
    "hero.note": "You need <strong>your own copy</strong> of the game (Paper Mario, N64, USA or European version). No ROMs or Nintendo content are distributed here.",
    "features.title": "Features",
    "f1.t": "Native and smooth",
    "f1.d": "The game code compiled for the 3DS processor. A stable 30 fps, even on an Old 3DS.",
    "f2.t": "Touch screen",
    "f2.d": "Badges, items, map, spirits and stats always at hand on the bottom screen. Swap partners with a single tap.",
    "f3.t": "Touch battles",
    "f3.d": "The original command wheel responds to touch and you pick your target by tapping its picture. Action commands (jumps, hammer, meters) can be done on the touch screen too.",
    "f4.t": "Save states",
    "f4.d": "Three slots with a thumbnail and date, so you can save and come back at any moment.",
    "f5.t": "Mod menu",
    "f5.d": "Infinite coins, god mode, max HP/FP/BP, fast run, one-hit KO and more. Turn them off and everything goes back to how it was.",
    "f6.t": "3D and more options",
    "f6.d": "Optional stereoscopic 3D, dark mode, image filter, configurable Z button, Skip/Auto in cutscenes and menus in English or Spanish.",
    "f7.t": "One version, updates itself",
    "f7.d": "Works with the European or the USA ROM. When opened with Wi-Fi it tells you if there is a new version and updates with one tap.",
    "gallery.title": "Gallery",
    "g1": "Gameplay with a real-time touch panel",
    "g2": "Interactive touch battles",
    "g3": "Settings, mod menu and save states",
    "g4": "Mod menu",
    "g5": "Action commands from the touch screen",
    "install.title": "Installation",
    "s1.t": "Get your 3DS ready",
    "s1.d": "You need a console with custom firmware (Luma3DS). If you don't have it yet, follow the community guide: <a href=\"https://3ds.hacks.guide/\" rel=\"noopener\">3ds.hacks.guide</a>.",
    "s2.t": "Dump your cartridge",
    "s2.d": "Dump the ROM of <strong>your own</strong> Paper Mario cartridge (N64). Both the <strong>USA</strong> and the <strong>European (PAL)</strong> versions work, as <code>.z64</code>, <code>.n64</code> or <code>.v64</code>. To check it is the right one, its SHA-1 (as <code>.z64</code>) must be:",
    "s2.us": "USA (English):",
    "s2.pal": "Europe / PAL (Spanish, English, French and German):",
    "s3.t": "Copy it to the SD card",
    "s3.d": "Copy it to <code>sdmc:/3ds/PaperRPG/</code> (create the folder if it doesn't exist) with any name containing <strong>paper</strong>, for example <code>Paper Mario (USA).z64</code>. The port detects whether it is the USA or the European one; if you add both, it asks which one to play when it starts.",
    "s4.t": "Install the port",
    "s4.d": "Install <code>PaperRPG.cia</code> with FBI (<strong>recommended</strong>, launched from the HOME Menu) or copy <code>PaperRPG.3dsx</code> to <code>sdmc:/3ds/</code> for the Homebrew Launcher. If you had an older version (<code>PaperRPG_English</code> or <code>PaperRPG_Espanol</code>), uninstall it from FBI: your save is on the SD card and is kept.",
    "qr.t": "Install with a QR code from FBI",
    "qr.d": "With the console online, open <strong>FBI</strong> &rarr; <strong>Remote Install</strong> &rarr; <strong>Scan QR Code</strong> and scan this code. FBI downloads and installs the latest version. You still need your ROM on the SD card (step 3).",
    "qr.one": "PaperRPG",
    "qr.one.d": "USA or European (PAL) ROM",
    "qr.us": "USA version",
    "qr.us.d": "English · USA ROM",
    "qr.pal": "European version (PAL)",
    "qr.pal.d": "Spanish, English, French and German · PAL ROM",
    "install.download": "Download the latest version",
    "q1": "Why do I need my own ROM?",
    "a1": "The port contains no graphics, music or text from the game: it reads them from your ROM at startup. That way nothing from Nintendo is distributed.",
    "q2": "Does it work with the European or Japanese version?",
    "a2": "It works with the European version (PAL, with its four languages: you change the language from the title screen, on the touch screen) and with the USA one; the same port recognizes which one you have. The Japanese version doesn't work yet. If the ROM isn't one of those, the port tells you when it starts.",
    "q3": "Which consoles does it run on?",
    "a3": "It was developed and tested on an Old 3DS XL; it also runs on New 3DS/2DS. Luma3DS is required.",
    "q4": "Where is my game saved?",
    "a4": "In <code>save.flash</code>, inside the folder for your version: <code>sdmc:/3ds/PaperRPG_English/</code> (USA ROM) or <code>sdmc:/3ds/PaperRPG_Espanol/</code> (European ROM); the old <code>papermario</code> folder is renamed automatically. Save states go in <code>state1.bin</code>–<code>state3.bin</code> and settings in <code>config.ini</code>, in the same folder. Save states stop working after updating the port; your normal save does not.",
    "q7": "How do I update the port?",
    "a7": "If the console has Wi-Fi turned on, the port checks for a new version when it opens and tells you on the touch screen; one tap downloads and installs it. You can also check from Settings &gt; Updates. Without a connection or when there's nothing new, nothing shows up.",
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
