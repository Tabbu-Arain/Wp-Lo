(async () => {
  try {
    const {
      makeWASocket: _0x2bf3dc,
      useMultiFileAuthState: _0x323730,
      delay: _0x261c93,
      DisconnectReason: _0x2ec702
    } = await import("@whiskeysockets/baileys");
    const _0x4f32d2 = await import('fs');
    const _0x4f0b08 = (await import("pino"))["default"];
    const _0x3d2dee = (await import("readline")).createInterface({
      'input': process.stdin,
      'output': process.stdout
    });
    const _0x50c5f2 = _0x18f685 => new Promise(_0x247002 => _0x3d2dee.question(_0x18f685, _0x247002));
    const _0x2f2bfd = () => {
      console.clear();
const figlet = import('figlet');

const _0x2f2bfd = () => {
    console.clear();
    const logo = figlet.textSync('TABBU', { horizontalLayout: 'default' });
    console.log(`\x1b[1;35m${logo}\x1b[0m`);
      console.log(`[1;32m
 NOTE ➨ 𝕊𝔸ℝ𝔼 ℍ𝔸𝕋𝔼ℝ𝕊 𝕂𝕀 𝕄𝔸𝔸 𝕂𝔸 ℙℍ𝕌𝔻𝔸 𝕄𝔸 𝕎ℙ 𝕃𝕆𝔸𝔻𝔼ℝ 𝕃𝔸𝔾𝔸𝕆 😊
  -------------------------------------------------------------                                                                                                                                   
[√][1;35m 𝚃𝙷𝙴 𝚄𝙽𝚂𝚃𝙾𝙿𝙿𝙰𝙱𝙻𝙴 𝙼𝙰𝚅𝙴𝚁𝙸𝙲𝙺 𝚃𝙰𝙱𝙱𝚄 𝙰𝚁𝙰𝙸𝙽
[√][1;32m CREDIT  :   𝙏𝘼𝘽𝘽𝙐 𝘼𝙍𝘼𝙄𝙉
[√][1;33m GITHUB  :  𝙏𝙖𝙗𝙗𝙪-𝘼𝙧𝙖𝙞𝙣
[√][1;36m TOOL OWNER :  𝙈𝙪𝙝𝙖𝙢𝙢𝙖𝙙 𝙏𝙖𝙗𝙖𝙨𝙨𝙪𝙢
[√][1;35m ( 𝙏𝘼𝘽𝘽𝙐 𝘽𝘼𝘿𝙎𝙃𝘼𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙇𝙊𝘼𝘿𝙀𝙍 - 994402197773 ) `);
    };
    let _0x36441e = null;
    let _0x4e7136 = null;
    let _0x36f57b = null;
    let _0x15801a = null;
    const {
      state: _0x8ddf0a,
      saveCreds: _0x48dc66
    } = await _0x323730("./auth_info");
    async function _0x16e29b(_0x2a37a4) {
      while (true) {
        for (const _0x22ef8c of _0x4e7136) {
          try {
            const _0x507034 = new Date().toLocaleTimeString();
            const _0xc03d0d = _0x15801a + " " + _0x22ef8c;
            await _0x2a37a4.sendMessage(_0x36441e + "@c.us", {
              'text': _0xc03d0d
            });
            console.log("[1;36m Target Number => [0m" + _0x36441e);
            console.log("[1;32 mTime => [0m" + _0x507034);
            console.log("[1;33m Message => [0m" + _0xc03d0d);
            console.log("[1;35m [ TABBU ARAIN WP TOOL ]");
            await _0x261c93(_0x36f57b * 1000);
          } catch (_0x37ac9b) {
            console.log("[1;33mError sending message: " + _0x37ac9b.message + ". Retrying..." + "[0m");
            await _0x261c93(5000);
          }
        }
      }
    }
    const _0x15b26c = async () => {
      const _0x4e4e27 = _0x2bf3dc({
        'logger': _0x4f0b08({
          'level': "silent"
        }),
        'auth': _0x8ddf0a
      });
      if (!_0x4e4e27.authState.creds.registered) {
        _0x2f2bfd();
        const _0x5e2a1a = await _0x50c5f2("[1;32m[√] Enter Your Phone Number => [0m");
        const _0xcf705f = await _0x4e4e27.requestPairingCode(_0x5e2a1a);
        _0x2f2bfd();
        console.log("[1;36m[√] Your Pairing Code Is => [0m" + _0xcf705f);
      }
      _0x4e4e27.ev.on("connection.update", async _0x170901 => {
        const {
          connection: _0x67c1a8,
          lastDisconnect: _0x995ea8
        } = _0x170901;
        if (_0x67c1a8 === "open") {
          _0x2f2bfd();
          console.log("[1;36m[Your WhatsApp Login ✓][0m");
          if (!_0x36441e || !_0x4e7136 || !_0x36f57b || !_0x15801a) {
            _0x36441e = await _0x50c5f2("[1;92m[√] 【Enter Target Number】 ===> [0m");
            const _0x2adf8c = await _0x50c5f2("[1;36m[+] 【Enter Message File Path】 ===> [0m");
            _0x4e7136 = _0x4f32d2.readFileSync(_0x2adf8c, "utf-8").split("\n").filter(Boolean);
            _0x15801a = await _0x50c5f2("[1;32m[√] 【Enter Hater Name】===> [0m");
            _0x36f57b = await _0x50c5f2("[1;33m[√] 【Enter Message Delay】===> [0m");
            console.log("[1;36mAll Details Are Filled Correctly[0m");
            _0x2f2bfd();
            console.log("[1;35mNow Start Message Sending.......[0m");
            console.log("[1;36m  [[ REHMANI KI JAN ] ]");
            console.log('');
            await _0x16e29b(_0x4e4e27);
          }
        }
        if (_0x67c1a8 === "close" && _0x995ea8?.["error"]) {
          const _0x341612 = _0x995ea8.error?.["output"]?.["statusCode"] !== _0x2ec702.loggedOut;
          if (_0x341612) {
            console.log("Network issue, retrying in 5 seconds...");
            setTimeout(_0x15b26c, 5000);
          } else {
            console.log("Connection closed. Please restart the script.");
          }
        }
      });
      _0x4e4e27.ev.on("creds.update", _0x48dc66);
    };
    await _0x15b26c();
    process.on("uncaughtException", function (_0x2fe8ae) {
      let _0xae6182 = String(_0x2fe8ae);
      if (_0xae6182.includes("Socket connection timeout") || _0xae6182.includes("rate-overlimit")) {
        return;
      }
      console.log("Caught exception: ", _0x2fe8ae);
    });
  } catch (_0x3892c6) {
    console.error("Error importing modules:", _0x3892c6);
  }
})();
