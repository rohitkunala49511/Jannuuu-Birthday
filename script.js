(() => {
  "use strict";

  const photoPaths = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg"];
  const photoCaptions = [
    "One of the memories I will always keep close to my heart.",
    "Some moments become special simply because they are with you.",
    "A beautiful memory with my favorite person.",
    "Every little moment with you means more than words can explain.",
    "A memory I wish I could relive a thousand times."
  ];
  const wishes = [
    "Wishing you endless happiness in this beautiful new chapter of your life. ❤️",
    "May all your dreams come true this year. ✨",
    "May your 18th year be as beautiful as your heart. 💖",
    "Keep smiling, because your smile is precious to me. 🥹",
    "May you always be surrounded by love and happiness. 🌸",
    "Wishing you success in everything you do. 🤍",
    "May this year bring you countless unforgettable memories. ✨",
    "May your heart always find peace, comfort, and the love you deserve. 🫶🏻"
  ];
  const appreciation = [
    "I love the way you make even my simplest days feel special just by being a part of them.",
    "I love your smile, because it has the power to make my mood better without you even realising it.",
    "I love the way you talk to me, because your words always bring me a kind of comfort I cannot explain.",
    "I love how naturally we became close friends, without forcing anything, just by being ourselves.",
    "I love your presence, because being around you makes me feel peaceful and happy.",
    "I love the way you understand me, even when I struggle to explain what is going on in my mind.",
    "I love your little habits, your expressions, and all those tiny things that make you uniquely you.",
    "I love how your happiness matters to me more than my own sometimes.",
    "I love the way I can be completely myself around you without pretending to be someone else.",
    "I love our conversations, whether they are about something important or just random little things.",
    "I love how you have become someone I naturally think about throughout my day.",
    "I love the way you make me feel important, even through the smallest gestures.",
    "I love your caring nature and the way you make the people around you feel special.",
    "I love the bond we share, because it feels different from every other friendship in my life.",
    "Most of all, I love you for being Jahnavi — not because you are perfect, but because there is something about you that makes you irreplaceable to me. ❤️"
  ];
  const games = [
    { id: "heart", icon: "💗", name: "Heart Catcher", desc: "Catch a shower of hearts and collect a little reminder of how loved you are." },
    { id: "memory", icon: "✨", name: "Star Memory", desc: "Follow the constellation, remember its rhythm, and let your focus shine." },
    { id: "collector", icon: "🎁", name: "Birthday Wish Collector", desc: "Gather every floating wish for the year ahead." },
    { id: "puzzle", icon: "🧩", name: "Cosmic Puzzle", desc: "Slide the star tiles back into their proper constellation." },
    { id: "hidden", icon: "🔍", name: "Find the Hidden Heart", desc: "Search the starfield for the heart tucked away just for you." },
    { id: "shooting", icon: "🌠", name: "Shooting Star Catcher", desc: "Tap the stars as they streak across your sky. You have 30 seconds." },
    { id: "quiz", icon: "💌", name: "Birthday Quiz", desc: "A tiny quiz about wishes, happy days, and your brilliant next chapter." },
    { id: "maker", icon: "💖", name: "Wish Maker", desc: "Create a little birthday card from the things I wish for you." }
  ];
  const quizQuestions = [
    { question: "What belongs in your eighteenth year?", options: ["Big dreams and brave beginnings", "Only busy days", "No room for fun", "Saving every smile for later"], answer: 0, note: "Absolutely. I hope you make room for every dream you have. ✨" },
    { question: "What do you deserve on your birthday?", options: ["A little more homework", "All the love, laughter, and cake", "A quiet inbox", "A year without adventures"], answer: 1, note: "Correct. Today and always, you deserve all the good things. 🎂" },
    { question: "A good year is made of…", options: ["Perfect plans only", "Small joys, kind people, and new memories", "Never trying anything new", "Keeping every wish secret"], answer: 1, note: "Yes. I hope the small joys find you every single day. 💖" },
    { question: "What should you remember when a goal feels far away?", options: ["You can take it one step at a time", "You have to do it all at once", "Your dreams can wait forever", "You should stop believing"], answer: 0, note: "That's it. I'll always be cheering for each step you take. 🌟" }
  ];
  const gameEndQuotes = [
    "Whatever your dreams look like, I hope you keep reaching for them. I will always be cheering for you. 🌟",
    "You make ordinary days feel brighter. I hope this year gives some of that brightness right back to you. ✨",
    "Our friendship is one of the parts of my life I am most grateful for. Wherever life takes us, I will treasure it. 🫂",
    "You deserve a future full of kind people, peaceful days, brave choices, and goals that make you proud. 💫",
    "Whenever you need someone in your corner, remember that I am here, believing in you and wishing you well. 💖",
    "May every new chapter bring you closer to the life you want, while leaving room for laughter along the way. 🌸"
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const wishGrid = $("#wish-grid");
  wishes.forEach((wish, index) => {
    const item = document.createElement("article");
    item.className = "wish-balloon-card reveal";
    const button = document.createElement("button");
    button.className = "wish-balloon";
    button.type = "button";
    button.setAttribute("aria-label", `Pop birthday wish balloon ${index + 1}`);
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = `<span class="balloon-shape"><span class="balloon-shine"></span><span class="balloon-number">${String(index + 1).padStart(2, "0")}</span><span class="balloon-prompt">POP ME</span></span><span class="balloon-string" aria-hidden="true"></span>`;
    const message = document.createElement("p");
    message.className = "wish-reveal";
    message.hidden = true;
    message.textContent = wish;
    button.addEventListener("click", () => {
      if (button.classList.contains("popped")) return;
      button.classList.add("popped");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", `Birthday wish ${index + 1} revealed`);
      message.hidden = false;
    });
    item.append(button, message);
    wishGrid.append(item);
  });

  const countdownTarget = new Date(2027, 10, 5, 6, 30, 0).getTime();
  function updateCountdown() {
    const remaining = countdownTarget - Date.now();
    if (remaining <= 0) {
      $(".countdown").innerHTML = '<strong class="birthday-now">Your birthday universe is here ✨</strong>';
      $("#countdown-note").textContent = "May your eighteenth year be your brightest yet.";
      return;
    }
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    $("#days").textContent = String(days).padStart(3, "0");
    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#minutes").textContent = String(minutes).padStart(2, "0");
    $("#seconds").textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  let quoteIndex = 0;
  const quoteText = $("#quote-text");
  function showQuote(index) {
    quoteText.classList.add("fade-out");
    window.setTimeout(() => {
      quoteText.textContent = appreciation[index];
      $("#quote-count").textContent = `${String(index + 1).padStart(2, "0")} / ${String(appreciation.length).padStart(2, "0")}`;
      quoteText.classList.remove("fade-out");
    }, 180);
  }
  showQuote(quoteIndex);
  $("#next-quote").addEventListener("click", () => {
    if (quoteIndex >= appreciation.length - 1) {
      showToast("Every one of these words is true. Thank you for being you. 💖");
      return;
    }
    quoteIndex += 1;
    showQuote(quoteIndex);
  });

  const letterText = `My dearest Jannuuu,\n\nHappiest birthday to the girl I love the most; the one with the prettiest soul; the one who understands me even when I don't say a word; the one who is caring, sweet, strong and unbelievably beautiful. ❤\n\nYou are not just a person to me, you are an emotion, a feeling, a blessing that my life will always be thankful for. I honestly don't know how to start or how to put thousands of emotions into just one paragraph, because you don't deserve just a paragraph — you deserve thousands of books written about how amazing you truly are. ❤❤❤❤\n\nYou have brought so much happiness, laughter and warmth into my life. You are not only my friend, you are my family, my safe place and my source of endless joy. I pray that this year brings you unlimited love, success, peace and everything your heart desires.\n\nI believe in your goals, your strength, and the kind and beautiful person you are. I hope you keep choosing the things that make you feel alive, keep growing into everything you dream of being, and remember that you never have to do it all alone. I will always be here to listen, celebrate your wins, and remind you how capable you are.\n\nNo matter where life takes us, I will always be grateful that I got to know you. I promise to keep wishing the best for you, to stand beside you through the changing chapters, and to treasure the friendship that feels like family to me.\n\nStay happy always, Jannuuu. Keep smiling, keep shining, and never forget how deeply loved and appreciated you are.\n\nWith all my love,\nYour favorite person 💖`;
  $("#open-letter").addEventListener("click", () => {
    const scene = $("#letter-scene");
    if (scene.classList.contains("opened")) return;
    scene.classList.add("opened");
    $("#letter-intro").textContent = "A little piece of my heart, written just for you.";
    const letterCopy = $("#letter-copy");
    const lines = letterText.split("\n");
    lines.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line || " ";
      letterCopy.append(paragraph);
    });
    $("#letter-paper").setAttribute("aria-hidden", "false");
    $("#open-letter").textContent = "Your letter is open 💖";
    window.setTimeout(() => $("#letter-paper").focus({ preventScroll: true }), 500);
  });

  const lightbox = $("#lightbox");
  let currentPhoto = 0;
  function showPhoto(index) {
    currentPhoto = (index + photoPaths.length) % photoPaths.length;
    $("#lightbox-image").src = photoPaths[currentPhoto];
    $("#lightbox-image").alt = `Jannuuu birthday memory ${currentPhoto + 1}`;
    $("#lightbox-caption").textContent = photoCaptions[currentPhoto];
  }
  $$(".memory-card").forEach((card) => card.addEventListener("click", () => {
    showPhoto(Number(card.dataset.photo));
    lightbox.showModal();
  }));
  $("#lightbox-close").addEventListener("click", () => lightbox.close());
  $("#lightbox-prev").addEventListener("click", () => showPhoto(currentPhoto - 1));
  $("#lightbox-next").addEventListener("click", () => showPhoto(currentPhoto + 1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
    if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
  });

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  const birthdayAudio = $("#birthday-audio");
  birthdayAudio.volume = 0.7;
  if (window.matchMedia("(max-width: 767px)").matches) {
    birthdayAudio.play().catch(() => {
      // Mobile browsers may block audible autoplay until a user gesture.
    });
  }

  const arcadeGrid = $("#arcade-grid");
  games.forEach((game, index) => {
    const card = document.createElement("article");
    card.className = "game-card reveal";
    card.innerHTML = `<div class="game-card-top"><span class="game-icon">${game.icon}</span><span class="game-number">0${index + 1} / 08</span></div><div><h3>${game.name}</h3><p>${game.desc}</p></div><button type="button" data-game="${game.id}">Play game <span aria-hidden="true">→</span></button>`;
    arcadeGrid.append(card);
  });

  const panel = $("#game-panel");
  const gameContent = $("#game-content");
  let activeGame = null;
  let animationFrame = 0;
  let gameTimers = [];
  let gameCleanup = null;
  let gameScore = 0;
  function after(ms, callback) {
    const timer = window.setTimeout(callback, ms);
    gameTimers.push(timer);
    return timer;
  }
  function stopGame() {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    gameTimers.forEach(window.clearTimeout);
    gameTimers = [];
    if (gameCleanup) gameCleanup();
    gameCleanup = null;
  }
  function closeGame() {
    stopGame();
    activeGame = null;
    panel.hidden = true;
    gameContent.replaceChildren();
  }
  $("#close-game").addEventListener("click", closeGame);
  $("#back-to-arcade").addEventListener("click", closeGame);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && activeGame) closeGame(); });

  function gameScaffold(game, instruction) {
    gameContent.innerHTML = `<p class="game-intro">${instruction}</p><div class="game-status" id="game-status" role="status"></div><div id="game-play-area"></div>`;
    $("#game-eyebrow").textContent = `GAME ${String(games.findIndex((item) => item.id === game.id) + 1).padStart(2, "0")} · YOUR BIRTHDAY UNIVERSE`;
    $("#game-title").textContent = `${game.icon} ${game.name}`;
  }
  function status(message) { const element = $("#game-status"); if (element) element.textContent = message; }
  function gameEnding(message, quoteIndex) {
    status(message);
    let quote = $(".game-heartfelt", gameContent);
    if (!quote) { quote = document.createElement("p"); quote.className = "game-heartfelt"; gameContent.append(quote); }
    quote.textContent = gameEndQuotes[quoteIndex % gameEndQuotes.length];
  }
  function openGame(id) {
    closeGame();
    activeGame = id;
    panel.hidden = false;
    const game = games.find((item) => item.id === id);
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    launchGame(game);
  }
  arcadeGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-game]");
    if (button) openGame(button.dataset.game);
  });

  function launchGame(game) {
    const instructions = {
      heart: "Move your basket with ← / → or A / D. On a phone, drag your finger across the playfield. Catch ten hearts to finish.",
      memory: "Watch the stars light up, then repeat the exact sequence. Each round adds one more star.",
      collector: "Tap each floating birthday wish to gather all eight. Every one carries a hope for your year ahead.",
      puzzle: "Tap a tile beside the empty space to slide it. The puzzle starts in a solvable arrangement every time.",
      hidden: "Tap around the starfield to find the hidden heart. The warmer the spot, the closer you are.",
      shooting: "Tap the shooting stars to collect them before the 30-second sky closes.",
      quiz: "A small birthday quiz about lovely things I hope the year brings you. No wrong answer can take away a wish.",
      maker: "Choose a birthday wish, add a short note, and create a card you can copy and share."
    };
    gameScaffold(game, instructions[game.id]);
    const area = $("#game-play-area");
    if (game.id === "heart") startHeartGame(area);
    if (game.id === "memory") startMemoryGame(area);
    if (game.id === "collector") startCollectorGame(area);
    if (game.id === "puzzle") startPuzzleGame(area);
    if (game.id === "hidden") startHiddenGame(area);
    if (game.id === "shooting") startShootingGame(area);
    if (game.id === "quiz") startQuizGame(area);
    if (game.id === "maker") startWishMaker(area);
  }

  function startHeartGame(area) {
    gameScore = 0;
    area.innerHTML = '<canvas class="game-canvas" id="heart-canvas" aria-label="Heart catcher playfield"></canvas><div class="game-toolbar"><span class="game-score">Hearts: <b id="heart-score">0</b> / 10</span><button class="small-button" id="heart-replay" type="button">Replay</button></div>';
    const canvas = $("#heart-canvas");
    const context = canvas.getContext("2d");
    const state = { width: 0, height: 0, ratio: 1, basket: 0.5, hearts: [], lastSpawn: 0, lastTime: 0, running: true, keys: new Set() };
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      state.ratio = Math.min(window.devicePixelRatio || 1, 2);
      state.width = bounds.width; state.height = bounds.height;
      canvas.width = Math.round(bounds.width * state.ratio); canvas.height = Math.round(bounds.height * state.ratio);
      context.setTransform(state.ratio, 0, 0, state.ratio, 0, 0);
    }
    function pointer(event) { const rect = canvas.getBoundingClientRect(); state.basket = Math.max(.07, Math.min(.93, (event.clientX - rect.left) / rect.width)); }
    canvas.addEventListener("pointermove", pointer);
    canvas.addEventListener("pointerdown", pointer);
    const keyDown = (event) => { if (["ArrowLeft", "ArrowRight", "a", "d", "A", "D"].includes(event.key)) { state.keys.add(event.key.toLowerCase()); event.preventDefault(); } };
    const keyUp = (event) => state.keys.delete(event.key.toLowerCase());
    document.addEventListener("keydown", keyDown); document.addEventListener("keyup", keyUp);
    gameCleanup = () => { state.running = false; canvas.removeEventListener("pointermove", pointer); canvas.removeEventListener("pointerdown", pointer); document.removeEventListener("keydown", keyDown); document.removeEventListener("keyup", keyUp); window.removeEventListener("resize", resize); };
    window.addEventListener("resize", resize); resize();
    function draw(timestamp) {
      if (!state.running || activeGame !== "heart") return;
      const delta = Math.min((timestamp - (state.lastTime || timestamp)) / 1000, .04); state.lastTime = timestamp;
      if (state.keys.has("arrowleft") || state.keys.has("a")) state.basket -= delta * .8;
      if (state.keys.has("arrowright") || state.keys.has("d")) state.basket += delta * .8;
      state.basket = Math.max(.07, Math.min(.93, state.basket));
      if (timestamp - state.lastSpawn > 720) { state.hearts.push({ x: Math.random() * (state.width - 30) + 15, y: -12, speed: 90 + Math.random() * 75 }); state.lastSpawn = timestamp; }
      context.clearRect(0, 0, state.width, state.height);
      state.hearts = state.hearts.filter((heart) => {
        heart.y += heart.speed * delta;
        context.font = "22px serif"; context.textAlign = "center"; context.fillText("💖", heart.x, heart.y);
        const basketX = state.basket * state.width;
        if (heart.y > state.height - 42 && heart.y < state.height - 9 && Math.abs(heart.x - basketX) < 47) {
          gameScore += 1; $("#heart-score").textContent = String(gameScore); return false;
        }
        return heart.y < state.height + 30;
      });
      const x = state.basket * state.width;
      context.shadowBlur = 17; context.shadowColor = "#70eaff"; context.fillStyle = "#77e6fa"; context.beginPath(); context.roundRect(x - 43, state.height - 31, 86, 13, 7); context.fill(); context.shadowBlur = 0;
      context.strokeStyle = "rgba(255,141,222,.8)"; context.lineWidth = 2; context.beginPath(); context.arc(x, state.height - 29, 34, Math.PI, 0); context.stroke();
      if (gameScore >= 10) { state.running = false; gameEnding("You caught 10 hearts, but you deserve a universe full of love! 💖", 0); return; }
      animationFrame = window.requestAnimationFrame(draw);
    }
    animationFrame = window.requestAnimationFrame(draw);
    $("#heart-replay").addEventListener("click", () => openGame("heart"));
  }

  function startMemoryGame(area) {
    area.innerHTML = '<div class="game-toolbar"><span class="game-score">Round: <b id="memory-round">1</b></span><button class="small-button" id="memory-start" type="button">Start constellation</button></div><div class="memory-board" id="memory-board"></div><div class="game-toolbar"><button class="small-button" id="memory-replay" type="button">Replay</button></div>';
    const board = $("#memory-board");
    for (let index = 0; index < 16; index += 1) { const button = document.createElement("button"); button.className = "memory-star"; button.type = "button"; button.textContent = "✦"; button.setAttribute("aria-label", `Star ${index + 1}`); button.dataset.index = String(index); board.append(button); }
    let sequence = []; let inputIndex = 0; let accepting = false; let round = 1;
    function flash(index) { const button = board.children[index]; button.classList.add("active"); after(380, () => button.classList.remove("active")); }
    function playSequence() {
      accepting = false; inputIndex = 0;
      status("Watch the constellation…");
      sequence.forEach((star, index) => after(550 + index * 650, () => flash(star)));
      after(650 + sequence.length * 650, () => { accepting = true; status("Your turn. Follow the stars!"); });
    }
    function nextRound() {
      round += 1;
      if (round > 8) { gameEnding("You completed the whole constellation! May your future be full of bright beginnings. ✨", 1); accepting = false; return; }
      $("#memory-round").textContent = String(round);
      sequence.push(Math.floor(Math.random() * 16));
      after(650, playSequence);
    }
    function onClick(event) {
      const target = event.target.closest(".memory-star");
      if (!target || !accepting) return;
      const index = Number(target.dataset.index); flash(index);
      if (index !== sequence[inputIndex]) { accepting = false; status("Almost! Every star gets another chance. Try this constellation again."); sequence = []; round = 1; $("#memory-round").textContent = "1"; return; }
      inputIndex += 1;
      if (inputIndex === sequence.length) nextRound();
    }
    board.addEventListener("click", onClick);
    $("#memory-start").addEventListener("click", () => { gameTimers.forEach(window.clearTimeout); gameTimers = []; sequence = [Math.floor(Math.random() * 16)]; round = 1; $("#memory-round").textContent = "1"; playSequence(); });
    $("#memory-replay").addEventListener("click", () => openGame("memory"));
    gameCleanup = () => board.removeEventListener("click", onClick);
  }

  function startCollectorGame(area) {
    const collectorWishes = ["A year of brave beginnings ✨", "Peace for your heart 🫶", "Dreams that find their way 💫", "A thousand reasons to smile 😊", "People who cherish you 🫂", "Goals you feel proud of 🌟", "Little joys every day 🌸", "The love you deserve 💖"];
    area.innerHTML = '<div class="game-toolbar"><span class="game-score">Collected: <b id="collector-score">0</b> / 8</span><button class="small-button" id="collector-replay" type="button">Replay</button></div><div class="collector-scene" id="collector-scene"></div>';
    const scene = $("#collector-scene"); let count = 0;
    collectorWishes.forEach((wish) => {
      const token = document.createElement("button"); token.type = "button"; token.className = "wish-token"; token.textContent = wish;
      token.addEventListener("click", () => { if (token.classList.contains("collected")) return; token.classList.add("collected"); count += 1; $("#collector-score").textContent = String(count); if (count === collectorWishes.length) gameEnding("Every wish I collected is a little reminder of how much happiness I wish for you. 💖", 2); });
      scene.append(token);
    });
    $("#collector-replay").addEventListener("click", () => openGame("collector"));
  }

  function startPuzzleGame(area) {
    area.innerHTML = '<div class="puzzle-board" id="puzzle-board" aria-label="Three by three sliding puzzle"></div><div class="game-toolbar"><button class="small-button" id="puzzle-shuffle" type="button">Shuffle</button><button class="small-button" id="puzzle-restart" type="button">Restart</button><button class="small-button" id="puzzle-replay" type="button">Replay</button></div>';
    const board = $("#puzzle-board"); let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; let moves = 0;
    function draw() {
      board.replaceChildren();
      tiles.forEach((tile, index) => {
        const button = document.createElement("button"); button.type = "button"; button.className = tile === 0 ? "puzzle-tile empty" : "puzzle-tile"; button.textContent = tile === 0 ? "" : ["✦", "♡", "✧", "☾", "💖", "☼", "✧", "✦"][tile - 1]; button.setAttribute("aria-label", tile === 0 ? "Empty space" : `Move tile ${tile}`); button.dataset.index = String(index); board.append(button);
      });
    }
    function neighbors(index) { const row = Math.floor(index / 3), col = index % 3; return [row > 0 ? index - 3 : -1, row < 2 ? index + 3 : -1, col > 0 ? index - 1 : -1, col < 2 ? index + 1 : -1].filter((value) => value >= 0); }
    function isSolved() { return tiles.every((tile, index) => tile === (index + 1) % 9); }
    function move(index) { const empty = tiles.indexOf(0); if (!neighbors(empty).includes(index)) return; [tiles[index], tiles[empty]] = [tiles[empty], tiles[index]]; moves += 1; draw(); if (isSolved()) gameEnding(`Constellation restored in ${moves} moves! Just like you, every piece belongs. ✨`, 3); }
    function shuffle() { tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; let previous = -1; for (let step = 0; step < 100; step += 1) { const empty = tiles.indexOf(0); const options = neighbors(empty).filter((index) => index !== previous); const choice = options[Math.floor(Math.random() * options.length)]; [tiles[empty], tiles[choice]] = [tiles[choice], tiles[empty]]; previous = empty; } moves = 0; status("A fresh, solvable constellation is ready."); draw(); }
    board.addEventListener("click", (event) => { const tile = event.target.closest(".puzzle-tile:not(.empty)"); if (tile) move(Number(tile.dataset.index)); });
    $("#puzzle-shuffle").addEventListener("click", shuffle);
    $("#puzzle-restart").addEventListener("click", () => { tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; moves = 0; status("Back to the beginning. You can do it!"); draw(); });
    $("#puzzle-replay").addEventListener("click", () => openGame("puzzle"));
    shuffle();
  }

  function startHiddenGame(area) {
    area.innerHTML = '<div class="search-scene" id="search-scene" aria-label="Tap to search the cosmic scene"><span class="hidden-heart" id="hidden-heart">♥</span></div><div class="game-toolbar"><span class="game-score">Searches: <b id="search-count">0</b></span><button class="small-button" id="hidden-replay" type="button">Try again</button></div>';
    const scene = $("#search-scene"); const hiddenHeart = $("#hidden-heart"); let searchCount = 0;
    for (let index = 0; index < 35; index += 1) { const star = document.createElement("span"); star.className = "search-decoration"; star.textContent = index % 4 === 0 ? "✧" : "·"; star.style.left = `${Math.random() * 96}%`; star.style.top = `${Math.random() * 94}%`; star.style.fontSize = `${10 + Math.random() * 16}px`; scene.append(star); }
    const target = { x: 14 + Math.random() * 72, y: 18 + Math.random() * 62 };
    function locate(event) {
      const bounds = scene.getBoundingClientRect(); const x = (event.clientX - bounds.left) / bounds.width * 100; const y = (event.clientY - bounds.top) / bounds.height * 100; const distance = Math.hypot((x - target.x) * .8, y - target.y); searchCount += 1; $("#search-count").textContent = String(searchCount);
      if (distance < 7) { hiddenHeart.style.display = "block"; hiddenHeart.style.left = `${target.x}%`; hiddenHeart.style.top = `${target.y}%`; gameEnding("You found the heart hidden among the stars. It was always meant for you. 💖", 4); scene.removeEventListener("pointerdown", locate); }
      else if (distance < 20) status("A little warmer… you’re getting closer! ✨");
      else if (distance < 34) status("The stars are pointing you in the right direction…");
      else status("Not quite there yet. Try another part of the sky!");
    }
    scene.addEventListener("pointerdown", locate);
    $("#hidden-replay").addEventListener("click", () => openGame("hidden"));
    gameCleanup = () => scene.removeEventListener("pointerdown", locate);
  }

  function startShootingGame(area) {
    area.innerHTML = '<canvas class="game-canvas" id="shooting-canvas" aria-label="Shooting star catcher playfield"></canvas><div class="game-toolbar"><span class="game-score">Stars: <b id="shooting-score">0</b></span><span class="game-score">Time: <b id="shooting-time">30</b>s</span><button class="small-button" id="shooting-start" type="button">Start sky</button><button class="small-button" id="shooting-replay" type="button">Replay</button></div>';
    const canvas = $("#shooting-canvas"); const context = canvas.getContext("2d");
    const state = { width: 0, height: 0, ratio: 1, stars: [], running: false, lastTime: 0, lastSpawn: 0, pointer: null, score: 0, deadline: 0 };
    function resize() { const rect = canvas.getBoundingClientRect(); state.ratio = Math.min(window.devicePixelRatio || 1, 2); state.width = rect.width; state.height = rect.height; canvas.width = rect.width * state.ratio; canvas.height = rect.height * state.ratio; context.setTransform(state.ratio, 0, 0, state.ratio, 0, 0); }
    function pointer(event) { const rect = canvas.getBoundingClientRect(); state.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }; }
    canvas.addEventListener("pointerdown", pointer); window.addEventListener("resize", resize); resize();
    function finish() { state.running = false; gameEnding(state.score >= 20 ? `You caught ${state.score} stars! May every one of your dreams find its way to you. 🌠` : `The sky is resting. You caught ${state.score} stars, and I still wish you a whole galaxy of good things. 💖`, 5); }
    function draw(timestamp) {
      if (!state.running || activeGame !== "shooting") return;
      const delta = Math.min((timestamp - (state.lastTime || timestamp)) / 1000, .04); state.lastTime = timestamp;
      const left = Math.max(0, Math.ceil((state.deadline - performance.now()) / 1000)); $("#shooting-time").textContent = String(left);
      if (left <= 0) { finish(); return; }
      if (timestamp - state.lastSpawn > 480) { state.stars.push({ x: Math.random() * (state.width - 34) + 17, y: -15, speed: 80 + Math.random() * 100, drift: (Math.random() - .5) * 55, size: 12 + Math.random() * 8 }); state.lastSpawn = timestamp; }
      context.clearRect(0, 0, state.width, state.height);
      state.stars = state.stars.filter((star) => {
        star.x += star.drift * delta; star.y += star.speed * delta; context.font = `${star.size}px serif`; context.textAlign = "center"; context.shadowColor = "#81e8ff"; context.shadowBlur = 12; context.fillStyle = "#fff3ff"; context.fillText("✦", star.x, star.y); context.shadowBlur = 0;
        if (state.pointer && Math.hypot(star.x - state.pointer.x, star.y - state.pointer.y) < star.size + 18) { state.pointer = null; state.score += 1; $("#shooting-score").textContent = String(state.score); return false; }
        return star.y < state.height + 24;
      });
      state.pointer = null;
      animationFrame = window.requestAnimationFrame(draw);
    }
    function start() { state.score = 0; state.stars = []; state.running = true; state.lastTime = 0; state.deadline = performance.now() + 30000; $("#shooting-score").textContent = "0"; status("The sky is open. Catch as many as you can!"); animationFrame = window.requestAnimationFrame(draw); }
    $("#shooting-start").addEventListener("click", start);
    $("#shooting-replay").addEventListener("click", () => openGame("shooting"));
    gameCleanup = () => { state.running = false; canvas.removeEventListener("pointerdown", pointer); window.removeEventListener("resize", resize); };
  }

  function startQuizGame(area) {
    area.innerHTML = '<div class="quiz-card" id="quiz-card"></div><div class="game-toolbar"><button class="small-button" id="quiz-replay" type="button">Replay quiz</button></div>';
    const card = $("#quiz-card"); let questionIndex = 0; let correct = 0;
    function showQuestion() {
      if (questionIndex >= quizQuestions.length) { card.innerHTML = `<h4>You got ${correct} of ${quizQuestions.length} birthday wishes right.</h4><p class="game-intro">The real answer is that you deserve every bit of happiness life has to offer. I believe in you, I am proud of you, and I will always be in your corner. 💖</p>`; gameEnding("Happy eighteenth, Jannuuu. Keep becoming everything you dream of being. ✨", 0); return; }
      const item = quizQuestions[questionIndex];
      card.innerHTML = `<p class="eyebrow">QUESTION ${questionIndex + 1} / ${quizQuestions.length}</p><h4>${item.question}</h4><div class="quiz-options"></div>`;
      const options = $(".quiz-options", card);
      item.options.forEach((option, index) => { const button = document.createElement("button"); button.type = "button"; button.className = "quiz-option"; button.textContent = option; button.addEventListener("click", () => { if (index === item.answer) correct += 1; status(item.note); $$("button", options).forEach((choice) => { choice.disabled = true; }); questionIndex += 1; after(1250, showQuestion); }); options.append(button); });
    }
    showQuestion();
    $("#quiz-replay").addEventListener("click", () => openGame("quiz"));
  }

  function startWishMaker(area) {
    area.innerHTML = `<form class="wish-form" id="wish-form"><label for="wish-choice">Choose a wish<select id="wish-choice">${["May your dreams come true, one beautiful step at a time. ✨", "May you find peace, joy, and people who see how special you are. 💖", "May your courage carry you toward everything you want to become. 🌟", "May our friendship keep growing through every chapter ahead. 🫂", "May laughter, good health, and little adventures find you all year. 🌸"].map((wish, index) => `<option value="${index}">${wish}</option>`).join("")}</select></label><label for="wish-message">Add a short personal note<textarea id="wish-message" maxlength="120" placeholder="A little message for Jannuuu…"></textarea></label><div class="game-toolbar"><button class="small-button" type="submit">Make my wish card ✨</button><button class="small-button" id="maker-replay" type="button">Start over</button></div></form><div id="wish-output"></div>`;
    const form = $("#wish-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const option = $("#wish-choice").selectedOptions[0].textContent;
      const personal = $("#wish-message").value.trim();
      const card = document.createElement("article"); card.className = "generated-wish";
      const title = document.createElement("p"); title.textContent = "For Jannuuu, with all my heart 💖";
      const body = document.createElement("p"); body.textContent = `${option}${personal ? ` ${personal}` : " I will always be cheering for you."}`;
      const copy = document.createElement("button"); copy.type = "button"; copy.className = "small-button"; copy.textContent = "Copy birthday wish";
      copy.addEventListener("click", async () => { try { await navigator.clipboard.writeText(`${title.textContent}\n${body.textContent}`); showToast("Your birthday wish is copied and ready to share. ✨"); } catch (_) { showToast("Clipboard access is unavailable in this browser."); } });
      card.append(title, body, copy); $("#wish-output").replaceChildren(card); status("A little birthday wish, made just for her. 💌");
    });
    $("#maker-replay").addEventListener("click", () => { form.reset(); $("#wish-output").replaceChildren(); status(""); });
  }

  $("#make-wish").addEventListener("click", () => {
    const assembly = $("#cake-assembly"); const candles = $("#candles"); const button = $("#make-wish");
    if (candles.classList.contains("flames-out")) return;
    assembly.classList.add("still");
    $("#cake-state").textContent = "Your wish is on its way, carried by a little stardust. ✨";
    after(650, () => {
      candles.classList.add("flames-out");
      $$(".candle", candles).forEach((candle) => { const smoke = document.createElement("i"); smoke.className = "smoke"; candle.append(smoke); });
      $("#cake-wishes").innerHTML = ["May your dreams come true.", "May happiness always find you.", "May your smile never fade.", "May this year be your most beautiful chapter yet."].map((wish) => `<span class="cake-wish">${wish}</span>`).join("");
      $("#cake-state").textContent = "Wish made. The candles are out, but your light keeps shining. 💖";
      button.textContent = "Your wish is in the stars ✨";
      button.disabled = true;
    });
  });

  function celebrate() {
    const field = $("#confetti-field");
    field.replaceChildren();
    for (let index = 0; index < 75; index += 1) {
      const piece = document.createElement("i"); piece.className = "confetti"; piece.style.left = `${Math.random() * 100}%`; piece.style.animationDelay = `${Math.random() * 1.4}s`; piece.style.animationDuration = `${2.5 + Math.random() * 2}s`; field.append(piece);
    }
    const finale = $("#finale"); finale.classList.remove("celebrating"); void finale.offsetWidth; finale.classList.add("celebrating");
  }
  $("#celebrate-again").addEventListener("click", celebrate);
  celebrate();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((element) => revealObserver.observe(element));
})();