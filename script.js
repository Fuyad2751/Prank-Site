// ============================================
// ১. ভাইরাস কাউন্ট (ফেক)
// ============================================
let virusCount = 0;
const countDisplay = document.getElementById('count');

setInterval(() => {
    virusCount += Math.floor(Math.random() * 100);
    countDisplay.textContent = virusCount;
    if (virusCount > 1000000) virusCount = 0;
}, 1000);

// ============================================
// ২. পালানো বাটন
// ============================================
const runawayBtn = document.getElementById('runaway-btn');

runawayBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - runawayBtn.offsetWidth;
    const maxY = window.innerHeight - runawayBtn.offsetHeight;
    
    runawayBtn.style.position = 'fixed';
    runawayBtn.style.left = Math.random() * maxX + 'px';
    runawayBtn.style.top = Math.random() * maxY + 'px';
});

// ============================================
// ৩. ইনফিনিটি পপআপ
// ============================================
function fakePopup() {
    const messages = [
        "আপনার কম্পিউটার হ্যাক হয়েছে! 😈",
        "সব ফাইল ডিলিট হবে! 💀",
        "বাঁচতে চাইলে পাঁচবার ক্লিক করুন! 🖱️",
        "শেষ সতর্কবার্তা! ⚡",
        "ঠাট্টা! তুমি প্র্যাঙ্কড হয়েছো! 😂"
    ];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            alert(messages[Math.floor(Math.random() * messages.length)]);
        }, i * 500);
    }
}

// ============================================
// ৪. ফেক প্রগ্রেস বার (কখনো শেষ হবে না)
// ============================================
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
let width = 0;

setInterval(() => {
    if (width >= 95) {
        width = 95;
        progressText.textContent = 'সিস্টেম হ্যাং! রিস্টার্ট প্রয়োজন!';
    } else {
        width += Math.random() * 3;
        progress.style.width = width + '%';
        progressText.textContent = Math.floor(width) + '% সম্পন্ন';
    }
}, 500);

// ============================================
// ৫. পেজ ছাড়ার সময় মজার মেসেজ
// ============================================
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = 'সাবধান! ভাইরাস অ্যাক্টিভেট হবে!';
});

// ============================================
// ৬. কনসোলে ফানি মেসেজ
// ============================================
console.log("হ্যাকার মোড অ্যাক্টিভেটেড! 😎");
console.log("তোমার ব্রাউজার এখন আমার নিয়ন্ত্রণে!");
console.log(`
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    YOU'VE BEEN HACKED! 😈
`);

// ============================================
// ৭. ব্লু স্ক্রিন সারপ্রাইজ (১৫ সেকেন্ড পরে)
// ============================================
setTimeout(() => {
    document.body.innerHTML = `
        <div style="background: #0000aa; color: white; height: 100vh; 
                    font-family: 'Courier New', monospace; padding: 50px;
                    text-align: center; display: flex; flex-direction: column;
                    justify-content: center; align-items: center;">
            <h1 style="font-size: 80px;">:(</h1>
            <p style="font-size: 24px;">আপনার পিসি একটি সমস্যার সম্মুখীন হয়েছে</p>
            <p style="font-size: 18px;">এরর কোড: 0x000000F4 (PRANK_VIRUS_DETECTED)</p>
            <div style="margin-top: 50px; font-size: 36px; animation: blink 0.5s infinite;">
                ████████████████ 0% সম্পূর্ণ
            </div>
            <p style="margin-top: 30px; color: yellow; font-size: 24px;">
                ঠাট্টা! তুমি প্র্যাঙ্কড হয়েছো! 😂😂😂
            </p>
        </div>
    `;
}, 15000);

// ============================================
// ৮. ফেক টার্মিনাল (হ্যাকার স্টাইল)
// ============================================
const terminal = document.getElementById('terminal');
const commands = [
    "C:\\> hacking_initiated.exe",
    "C:\\> bypassing_firewall.dll...",
    "C:\\> downloading_ram.exe (100%)",
    "C:\\> deleting_system32... 45%",
    "C:\\> installing_virus.exe [████████░░] 80%",
    "C:\\> ERROR: FBI_TRACKING_FAILED",
    "C:\\> access_granted: ADMIN RIGHTS",
    "C:\\> আপনার পিসি এখন আমার নিয়ন্ত্রণে 😈"
];

let cmdIndex = 0;
setInterval(() => {
    if (cmdIndex < commands.length) {
        terminal.innerHTML += commands[cmdIndex] + "<br>";
        terminal.scrollTop = terminal.scrollHeight;
        cmdIndex++;
    }
}, 1500);

// ============================================
// ৯. ইমোজি বৃষ্টি (মাউস ট্রেইল)
// ============================================
const emojis = ['😂', '🤣', '💀', '👻', '🎃', '😈', '💩', '🔥', '⚡', '🌟'];

document.addEventListener('mousemove', (e) => {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: ${Math.random() * 30 + 10}px;
        pointer-events: none;
        z-index: 9999;
        animation: emojiFall 2s linear forwards;
    `;
    document.body.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), 2000);
});

// ============================================
// ১০. ভূমিকম্প ইফেক্ট (প্রতি ২০ সেকেন্ডে)
// ============================================
function earthquakeEffect() {
    document.body.style.animation = 'earthquake 0.5s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

setInterval(earthquakeEffect, 20000);

// ============================================
// ১১. গেম ওভার স্ক্রিন (৩০ সেকেন্ড পরে)
// ============================================
setTimeout(() => {
    const gameOverScreen = document.createElement('div');
    gameOverScreen.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.95); z-index: 99999;
                    display: flex; flex-direction: column; 
                    justify-content: center; align-items: center;">
            <h1 style="font-size: 80px; color: red; animation: blink 0.3s infinite;">
                GAME OVER
            </h1>
            <p style="color: white; font-size: 24px;">আপনার স্কোর: -999999</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="padding: 15px 30px; font-size: 20px; margin-top: 30px;
                           cursor: pointer;">
                আবার চেষ্টা করুন
            </button>
        </div>
    `;
    document.body.appendChild(gameOverScreen);
}, 30000);