(() => {
  const D = window.DECK;
  const $ = selector => document.querySelector(selector);
  const deck = $('#deck');
  const stage = $('#stage');
  $('.bg-video').src = D.video;
  $('#team').textContent = D.teamName;

  function fitDeck() {
    deck.style.setProperty('--deck-scale', Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
  }
  window.addEventListener('resize', fitDeck);
  document.addEventListener('fullscreenchange', fitDeck);
  fitDeck();

  const team = `${D.teamName} - ${D.team.join(' - ')}`;
  const bullets = items => `<ul class="bullets">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  const slides = [
    ['From human ideas to machine action', true, `
      <section class="hero hero-grid">
        <div class="cover-copy">
          <div class="eyebrow cover-kicker">Computer Science / Class XI</div>
          <div class="cover-rule"></div>
          <h1 class="title">From human ideas<br><span>to machine action</span></h1>
          <p class="subtitle">Code is human thought written down.<br>Language translators turn it into silicon reality.</p>
          <p class="teamline">Unit 1: Software Concepts and Language Translators<br><b>${team}</b></p>
        </div>
        <aside class="cover-index"><b>01</b><span>Software concepts<br>and translators</span><small>LECTURE NOTES</small></aside>
      </section>`],
    ['Software is the bridge', false, `
      <section class="content two-col">
        <div><div class="eyebrow">01 / Bridge human and hardware</div><h2 class="title">Software is the bridge between us and hardware</h2>
        ${bullets(['Computer hardware understands only machine language: 1s and 0s.','We write instructions in English-like programming languages.','Software bridges this gap so humans can communicate with hardware.'])}</div>
        <div class="visual-card"><div class="stack"><div>Hardware: CPU, memory, devices</div><div>System software: manages the computer</div><div>Programming tools and translators</div><div>Application software: helps users work</div></div></div>
        <div class="big-num">01</div>
      </section>`],
    ['Language levels', false, `
      <section class="content two-col">
        <div><div class="eyebrow">02 / Levels of language</div><h2 class="title">Easier to write, further from the machine</h2>
        <p class="subtitle">A programming language can be low-level or high-level. The closer it is to the CPU, the more difficult it is for people to write and debug.</p></div>
        <div class="ladder">
          <div class="ladder-row"><b>1. Machine language</b><code>10110000 00000101<br>1s and 0s; directly executed; difficult to debug.</code></div>
          <div class="ladder-row"><b>2. Assembly language</b><code>ADD R1, R2<br>English-like symbols; specific to one CPU type.</code></div>
          <div class="ladder-row"><b>3. High-level language</b><code>print(2 + 3)<br>C++, Java, Python; machine independent.</code></div>
        </div>
      </section>`],
    ['Source code to object code', false, `
      <section class="content"><div class="eyebrow">03 / Translation</div><h2 class="title">A translator turns source code into object code</h2>
      <p class="subtitle"><b>Source code</b> is human-readable code written in a high-level language or assembly mnemonics. <b>Object code</b> is machine-runnable binary output.</p>
      <div class="flow"><div class="box">Source code<br><small>human-readable instructions</small></div><div class="arrow">-&gt;</div><div class="box translator">Language translator<br><small>checks syntax and transforms code</small></div><div class="arrow">-&gt;</div><div class="box">Object code<br><small>machine-runnable output</small></div></div>
      <div class="statement">The three distinct translators are the <b>assembler</b>, <b>compiler</b>, and <b>interpreter</b>.</div><div class="mini-facts"><span><b>Fun fact:</b> the CPU does not read Python, C++, or English. It ultimately runs binary instructions.</span><span><b>Remember:</b> source code is for people; object code is for the machine.</span></div></section>`],
    ['The assembler', false, `
      <section class="content two-col"><div><div class="eyebrow">04 / Translator type 01</div><h2 class="title">The assembler translates assembly language</h2>
      ${bullets(['An assembler converts symbolic mnemonics such as <b>ADD R1, R2</b> into machine instructions.','Every microprocessor has its own instruction set architecture (ISA).','An assembler for Intel x86 cannot assemble code for an ARM phone processor.'])}</div>
      <div class="visual-card"><div class="flow" style="margin:0"><div class="box">ADD R1, R2</div><div class="arrow">-&gt;</div><div class="box translator">ASSEMBLER</div><div class="arrow">-&gt;</div><div class="box">1010 1100</div></div><p class="statement" style="font-size:21px;margin-top:35px">Critical limitation: assembly code is hardware-dependent. Its output is not portable to another CPU.</p></div></section>`],
    ['Assembler in the real world', false, `
      <section class="content image-case"><div class="eyebrow">04A / Real-world use</div><h2 class="title">Assembly speaks directly to hardware</h2><p class="subtitle">Assemblers are useful when a program must work very close to a processor: embedded systems, device drivers, boot code, and microcontrollers.</p><figure class="large-screen"><img src="${D.assets.arduino}" alt="Arduino microcontroller board"><figcaption>Arduino board: a microcontroller-based system. Low-level code is often used where memory, speed, and direct hardware control matter.</figcaption></figure><div class="fact-row"><span>Fun fact: CPU instructions such as ADD and MOV are represented as binary patterns.</span><span>Each processor family has its own instruction set.</span></div></section>`],
    ['The compiler', false, `
      <section class="content"><div class="eyebrow">05 / Translator type 02</div><h2 class="title">The compiler translates the whole program at once</h2>
      <div class="three"><article class="concept"><h3>Step 1</h3><p><b>Batch parsing</b><br>It translates all source code in one go.</p></article><article class="concept cmp"><h3>Step 2</h3><p><b>Execution</b><br>If syntax rules are followed, the computer executes the translated code.</p></article><article class="concept int"><h3>Step 3</h3><p><b>After translation</b><br>The compiler is no longer needed to run the program.</p></article></div>
      <div class="statement">Everyday analogy: a compiler is like a tailor who turns all fabric into a complete suit in advance, ready to wear.</div></section>`],
    ['Compiler in the real world', false, `
      <section class="content image-case"><div class="eyebrow">05A / Real-world use</div><h2 class="title">A compiler builds an executable program</h2><p class="subtitle">For C and C++, a common compiler command is GCC. It reads a source file, reports errors, and creates a runnable output file.</p><figure class="large-screen"><img src="${D.assets.gcc}" alt="GCC compiling a C program in a terminal"><figcaption>Example workflow: write main.c, run gcc main.c, then run the generated program from the terminal.</figcaption></figure><div class="fact-row"><span>Fun fact: one compiler can report several syntax errors after scanning the program.</span><span>Compiled programs usually start faster because translation happened earlier.</span></div></section>`],
    ['Ice breaker: compiler history', false, `
      <section class="content fact-slide"><div class="eyebrow">Fast fact / History break</div><div class="fact-year">1952</div><h2 class="title">The word "compiler" has a history</h2><p class="subtitle">Grace Hopper and her team developed the A-0 compiling routine for the UNIVAC computer. It is an early compiler-related system and one of the foundations of automatic programming.</p><div class="fact-grid"><div><b>Grace Hopper</b><span>Computer scientist and programming pioneer.</span></div><div><b>A-0 system</b><span>Documented in 1952 as a compiling routine.</span></div><div><b>Why it matters</b><span>It helped make programming easier than hand-writing every machine instruction.</span></div></div><p class="source-note">Class fact source: Smithsonian National Museum of American History.</p></section>`],
    ['The interpreter', false, `
      <section class="content"><div class="eyebrow">06 / Translator type 03</div><h2 class="title">The interpreter translates one line at a time</h2>
      <div class="three"><article class="concept"><h3>1. Read</h3><p>Grabs the current line of source instructions.</p></article><article class="concept cmp"><h3>2. Check</h3><p>Verifies syntax rules. If there is an error, execution stops immediately.</p></article><article class="concept int"><h3>3. Execute</h3><p>Converts the verified line and runs it on the CPU.</p></article></div>
      <div class="statement">4. Repeat: it moves to the next line until the script ends. Because no permanent object-code file is saved, the interpreter is needed every time the program runs.</div></section>`],
    ['Translator comparison', false, `
      <section class="content"><div class="eyebrow">07 / Comparison</div><h2 class="title">Assembler vs compiler vs interpreter</h2>
      <table class="table"><thead><tr><th>Feature</th><th>Assembler</th><th>Compiler</th><th>Interpreter</th></tr></thead><tbody>
      <tr><td>Input</td><td>Assembly language</td><td>High-level language</td><td>High-level language</td></tr>
      <tr><td>How it translates</td><td>Whole program</td><td>Whole program at once</td><td>One line at a time</td></tr>
      <tr><td>Needed again to run?</td><td>No</td><td>No</td><td>Yes, every time</td></tr>
      <tr><td>Portability of output</td><td>Not portable; CPU specific</td><td>Machine code produced</td><td>Not applicable; runs live</td></tr>
      </tbody></table><div class="statement">Key takeaway: compilers front-load work to create standalone speed; interpreters translate on-the-fly for immediate feedback.</div></section>`],
    ['Exam notes: core definitions', false, `
      <section class="content notes-slide"><div class="eyebrow">Exam-ready notes / 01</div><h2 class="title">Definitions to write down</h2><div class="definition-grid"><article><b>Source code</b><p>The human-readable program written by a programmer in a high-level language or assembly language.</p></article><article><b>Object code</b><p>The machine-language output produced by a translator, ready for a CPU to execute.</p></article><article><b>Language translator</b><p>System software that converts source code into machine code.</p></article><article><b>Assembler</b><p>A translator that converts assembly-language mnemonics into machine code for a specific CPU.</p></article></div><div class="write-note">Write this rule: source code is written by people; object code is executed by the computer.</div></section>`],
    ['Exam notes: key differences', false, `
      <section class="content notes-slide"><div class="eyebrow">Exam-ready notes / 02</div><h2 class="title">Translator differences to remember</h2><div class="definition-grid"><article><b>Assembler</b><p>Input: assembly language. Output: CPU-specific machine code. Main point: not portable.</p></article><article><b>Compiler</b><p>Translates the whole program before it runs. Reports errors after scanning. Not needed later.</p></article><article><b>Interpreter</b><p>Translates one line at a time. Stops at the first error. Needed every time the program runs.</p></article><article><b>Application software</b><p>Programs created to help users complete tasks, such as writing, browsing, editing images, or school management.</p></article></div><div class="write-note">Exam tip: use the words whole program, one line at a time, and needed at run time.</div></section>`],
    ['Exam notes: licences', false, `
      <section class="content notes-slide"><div class="eyebrow">Exam-ready notes / 03</div><h2 class="title">Software licence definitions</h2><div class="definition-grid"><article><b>FOSS</b><p>Free and open-source software. Its source code can be studied, modified, and shared.</p></article><article><b>Freeware</b><p>Software that is free to use but whose source code is not available to users.</p></article><article><b>Proprietary software</b><p>Software owned and controlled by a copyright holder; users usually need permission or a licence to use it.</p></article><article><b>Memory clue</b><p>Freeware means free price. FOSS means free access to the source code.</p></article></div><div class="write-note">Important: free to use does not automatically mean open source.</div></section>`],
    ['Application software', false, `
      <section class="content"><div class="eyebrow">08 / User tasks</div><h2 class="title">Application software serves what users need</h2><p class="subtitle">It works on top of system software to give people ready-made or tailor-made programs for their tasks.</p>
      <div class="software-types"><article><h3>General purpose</h3><p>Ready-made for a wide audience, like a ready-made garment.</p><p><b>Examples:</b> LibreOffice Calc, Photoshop, GIMP, Firefox.</p></article><article><h3>Customised</h3><p>Tailor-made for one organisation, like a tailor-made garment.</p><p><b>Examples:</b> school management or accounting software.</p></article></div>
      <div class="screen-strip"><figure><img src="${D.assets.excel}" alt="LibreOffice Calc spreadsheet"><figcaption>LibreOffice Calc: spreadsheet application</figcaption></figure><figure><img src="${D.assets.gimp}" alt="GIMP image editor"><figcaption>GIMP: image-editing application</figcaption></figure><figure><img src="${D.assets.firefox}" alt="Firefox browser"><figcaption>Firefox: web browser application</figcaption></figure></div>
      <p class="screen-note">Examples in real interfaces: spreadsheets organise data, image editors modify pictures, and browsers access web pages.</p></section>`],
    ['LibreOffice Calc', false, `
      <section class="content image-case"><div class="eyebrow">09 / General-purpose example</div><h2 class="title">LibreOffice Calc</h2><p class="subtitle">A spreadsheet application used to organise data, perform calculations, and create charts.</p><figure class="large-screen"><img src="${D.assets.excel}" alt="LibreOffice Calc spreadsheet interface"><figcaption>Real application interface: rows, columns, cells, formula bar, and worksheet tabs.</figcaption></figure></section>`],
    ['GIMP image editor', false, `
      <section class="content image-case"><div class="eyebrow">10 / General-purpose example</div><h2 class="title">GIMP image editor</h2><p class="subtitle">An application used to edit photographs and graphics with tools, layers, brushes, and colour controls.</p><figure class="large-screen"><img src="${D.assets.gimp}" alt="GIMP image-editing interface"><figcaption>Real application interface: editing canvas in the centre, tools on the left, and layers on the right.</figcaption></figure></section>`],
    ['Firefox browser', false, `
      <section class="content image-case"><div class="eyebrow">11 / General-purpose example</div><h2 class="title">Firefox web browser</h2><p class="subtitle">A browser application used to access websites, search for information, and work with online services.</p><figure class="large-screen"><img src="${D.assets.firefox}" alt="Firefox browser interface"><figcaption>Real application interface: tabs, address bar, navigation controls, search, and shortcuts.</figcaption></figure></section>`],
    ['Software licences', false, `
      <section class="content"><div class="eyebrow">12 / Who controls the code?</div><h2 class="title">Free, freeware or proprietary?</h2><p class="subtitle">A software licence tells us who can access, modify, and distribute the program's source code.</p>
      <div class="licence-visuals"><article><img src="${D.assets.ubuntu}" alt="Ubuntu desktop"><div><b>Free and open source (FOSS)</b><p>Source code is available to study, modify, and improve. Examples: Ubuntu, Python, Firefox.</p></div></article><article><img src="${D.assets.freeware}" alt="Skype desktop application"><div><b>Freeware</b><p>Free to use, but the source code is not available. Examples: Skype and Adobe Reader.</p></div></article><article><img src="${D.assets.windows}" alt="Windows desktop"><div><b>Proprietary</b><p>Purchased from a copyright holder who controls the code. Examples: Windows and Tally.</p></div></article></div>
      <div class="statement">Remember: free to use does not always mean open source.</div></section>`],
    ['FOSS: Ubuntu example', false, `
      <section class="content image-case"><div class="eyebrow">Licence example / FOSS</div><h2 class="title">Ubuntu: free and open source</h2><p class="subtitle">Ubuntu is an example of FOSS. Its code can be studied, changed, and redistributed under its open-source licences.</p><figure class="large-screen"><img src="${D.assets.ubuntu}" alt="Ubuntu desktop interface"><figcaption>Ubuntu desktop: a FOSS operating system. Its interface and code can be used as a learning example for open-source software.</figcaption></figure></section>`],
    ['Freeware: Skype example', false, `
      <section class="content image-case"><div class="eyebrow">Licence example / Freeware</div><h2 class="title">Skype: free to use, not open source</h2><p class="subtitle">Freeware is software available without a purchase price, while its source code remains controlled by its owner.</p><figure class="large-screen"><img src="${D.assets.freeware}" alt="Skype desktop application interface"><figcaption>Skype interface: users can use the program, but they do not receive its source code to study or modify.</figcaption></figure><div class="fact-row"><span>Freeware describes the price: free to use.</span><span>It does not give permission to change the software's source code.</span></div></section>`],
    ['Proprietary: Windows example', false, `
      <section class="content image-case"><div class="eyebrow">Licence example / Proprietary</div><h2 class="title">Windows: proprietary software</h2><p class="subtitle">Proprietary software is controlled by its copyright owner. Users receive permission to use it through a licence, not ownership of its source code.</p><figure class="large-screen"><img src="${D.assets.windows}" alt="Windows 11 desktop interface"><figcaption>Windows desktop: a proprietary operating system. Microsoft controls the source code and licensing terms.</figcaption></figure></section>`],
    ['Quick knowledge check', false, `
      <section class="content quiz-slide"><div class="eyebrow">13 / Check your learning</div><h2 class="title">Quick knowledge check</h2><p class="subtitle"></p><div id="quiz-card" class="quiz-card"></div></section>`],
    ['Thank you', true, `
      <section class="thank"><div class="eyebrow">Class XI / Computer Science</div><h2 class="title">Thank you</h2><p class="subtitle">Questions and discussion</p><p class="teamline">${team}</p></section>`]
  ];

  slides.forEach(([name, video, html], index) => {
    stage.insertAdjacentHTML('beforeend', `<article class="slide ${video ? 'video-slide' : ''}" data-index="${index}">${html}</article>`);
  });

  const quiz = [
    { q: 'Which translator converts assembly mnemonics into machine instructions?', a: 1, options: ['Interpreter', 'Assembler', 'Compiler', 'Debugger'], note: 'An assembler translates assembly language for a particular processor instruction set.' },
    { q: 'Which translator must be available each time a program runs?', a: 2, options: ['Assembler', 'Compiler', 'Interpreter', 'Text editor'], note: 'An interpreter translates and executes code live, one line at a time.' },
    { q: 'Which licence allows users to study and modify source code?', a: 0, options: ['FOSS', 'Freeware', 'Proprietary', 'Trialware'], note: 'FOSS makes source code available for study, modification, and sharing.' },
    { q: 'A school-management system is normally which kind of application software?', a: 3, options: ['System software', 'General-purpose software', 'Translator', 'Customised software'], note: 'It is created for the requirements of a specific organisation.' },
    { q: 'Why is assembly-language output not portable?', a: 1, options: ['It is too slow', 'It is built for a specific CPU instruction set', 'It contains no binary code', 'It cannot be saved'], note: 'Different CPU families, such as x86 and ARM, understand different machine instructions.' },
    { q: 'What is the main advantage of a compiler after translation?', a: 0, options: ['The executable can run without the compiler', 'It interprets each line again', 'It needs no source code to compile', 'It only works with assembly'], note: 'The compiler produces translated output that can be executed later.' }
  ];
  let quizIndex = 0;
  let quizScore = 0;
  function renderQuiz() {
    const card = $('#quiz-card');
    if (!card) return;
    if (quizIndex >= quiz.length) {
      card.innerHTML = `<div class="quiz-progress">COMPLETE</div><h3>${quizScore} / ${quiz.length}</h3><p>${quizScore === quiz.length ? 'Excellent. You have mastered the key ideas.' : 'Good effort. Use the explanation slides to review any missed idea.'}</p><button class="quiz-next" data-quiz-reset>Try again</button>`;
      return;
    }
    const item = quiz[quizIndex];
    card.innerHTML = `<div class="quiz-progress">QUESTION ${quizIndex + 1} OF ${quiz.length}</div><h3>${item.q}</h3><div class="quiz-options">${item.options.map((option, index) => `<button data-quiz-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>`).join('')}</div><p class="quiz-feedback"></p>`;
  }
  renderQuiz();

  let current = Math.max(0, Math.min(slides.length - 1, (Number(location.hash.slice(1)) || 1) - 1));
  let locked = false;
  $('#progress').innerHTML = slides.map((_, index) => `<button class="dot" data-go="${index}" aria-label="Slide ${index + 1}"></button>`).join('') + '<span class="counter"></span>';

  function show(index) {
    if (locked || index < 0 || index >= slides.length) return;
    locked = true;
    current = index;
    document.querySelectorAll('.slide').forEach((slide, n) => slide.classList.toggle('active', n === index));
    document.querySelectorAll('.dot').forEach((dot, n) => dot.classList.toggle('active', n === index));
    $('#slide-name').textContent = slides[index][0];
    $('.counter').textContent = `${String(index + 1).padStart(2, '0')} / ${slides.length}`;
    const videoSlide = slides[index][1];
    deck.classList.toggle('video-active', videoSlide);
    ['#slide-name', '#team', '#hint', '.counter'].forEach(selector => $(selector).classList.toggle('video-ui', videoSlide));
    location.hash = index + 1;
    setTimeout(() => { locked = false; }, 450);
  }

  $('#prev').onclick = () => show(current - 1);
  $('#next').onclick = () => show(current + 1);
  $('#full').onclick = () => document.fullscreenElement ? document.exitFullscreen() : deck.requestFullscreen();
  document.addEventListener('click', event => { const dot = event.target.closest('[data-go]'); if (dot) show(Number(dot.dataset.go)); });
  document.addEventListener('click', event => {
    const answer = event.target.closest('[data-quiz-answer]');
    const reset = event.target.closest('[data-quiz-reset]');
    if (reset) { quizIndex = 0; quizScore = 0; renderQuiz(); return; }
    if (!answer) return;
    const item = quiz[quizIndex];
    const selected = Number(answer.dataset.quizAnswer);
    const correct = selected === item.a;
    if (correct) quizScore += 1;
    document.querySelectorAll('[data-quiz-answer]').forEach(button => {
      button.disabled = true;
      if (Number(button.dataset.quizAnswer) === item.a) button.classList.add('correct');
      else if (button === answer) button.classList.add('wrong');
    });
    $('.quiz-feedback').innerHTML = `${correct ? 'Correct. ' : 'Not quite. '}${item.note}<button class="quiz-next" data-quiz-next>Next question</button>`;
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('[data-quiz-next]')) return;
    quizIndex += 1;
    renderQuiz();
  });
  document.addEventListener('keydown', event => {
    if (['ArrowRight', ' ', 'PageDown'].includes(event.key)) { event.preventDefault(); show(current + 1); }
    else if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
    else if (event.key === 'Home') show(0);
    else if (event.key === 'End') show(slides.length - 1);
    else if (event.key.toLowerCase() === 'f') $('#full').click();
  });
  let touchStart = 0;
  document.addEventListener('touchstart', event => { touchStart = event.changedTouches[0].screenX; });
  document.addEventListener('touchend', event => { const delta = event.changedTouches[0].screenX - touchStart; if (Math.abs(delta) > 60) show(current + (delta < 0 ? 1 : -1)); });
  show(current);
})();
