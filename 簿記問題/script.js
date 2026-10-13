
const chapters = [

  // ===== チャプター1 =====
  [
    { name: "主人公", text: "やばい、働きたい会社、簿記の資格が必要みたい…" },
    { name: "主人公", text: "どうしよう…" },
    { name: "？？？", text: "お困りかい？" },
    { name: "主人公", text: "あ、あなたは？" },
    { name: "妖精", text: "私は…簿記の妖精さ" },
    { name: "主人公", text: "簿記の妖精…？" },
    { name: "妖精", text: "そう、君が簿記の資格を取れるように手助けするために来たんだ" },
    { name: "主人公", text: "え、でもどうやって…？" },
    { name: "妖精", text: "まずは簿記の勉強を始めることだね" },
    { name: "主人公", text: "でも、簿記って難しそう…" },
    { name: "妖精", text: "大丈夫、私がついているから安心して！" },
    { name: "主人公", text: "ありがとう！" },
    { name: "妖精", text: "じゃあ、早速勉強を始めよう！" },
    { name: "主人公", text: "ところで簿記って何？" },
    { name: "妖精", text: "え？嘘、知らずにそこの会社受けようとしたの？" },
    { name: "主人公", text: "いやぁーだって仕事探しって設備とかサポート体制で決めるじゃん！！" },
    { name: "妖精", text: "まぁ確かにね…でもいい会社見つけたら働くにあたって必要な資格とかって見てこなかったの？" },
    { name: "主人公", text: "見たよもちろん！！やってないだけ！！" },
    { name: "妖精", text: "何してんの？" },
    { name: "主人公", text: "いやぁ…なんか面白くなさそうで…" },
    { name: "妖精", text: "はぁ…ついてきなさい！ビシバシと簿記の勉強するわよ！！" },
    { name: "主人公", text: "いやだぁぁぁぁ！" },
    { name: "妖精", text: "はい、てことで今回は、日商簿記3級の勉強をしていくよ" },
    { name: "主人公", text: "いやだぁ" },
    { name: "妖精", text: "つべこべ言わずやる!!" },
    { name: "主人公", text: "はぁ、でところで簿記って何？" },
    { name: "妖精", text: "そこからか…教えましょう" },
    { name: "妖精", text: "簿記は、お金の出入りを記録するルールのことだよ。" },
    { name: "主人公", text: "家計簿みたいなもの？" },
    { name: "妖精", text: "そう！家計簿の会社版だと思ってくれればいいよ。" },
    { name: "妖精", text: "「いくら入って、いくら出て、いくら残ったか」を記録すると、会社の調子が分かるんだ。" },
    { name: "主人公", text: "じゃあ資格を取るとどうなるの？" },
    { name: "妖精", text: "会社の数字が読めるようになるよ。経理だけじゃなくて、営業や企画の仕事でも役に立つんだ。" },
    { name: "主人公", text: "なるほど、だから簿記の資格が必要なんだね。" }
  ],   // ← 章の終わりに「,」

  // ===== チャプター2 =====
  [
    { name: "妖精", text: "次は「貸借対照表」。会社の「持ち物」と「そのお金の出どころ」をまとめた表だよ。" },
    { name: "主人公", text: "持ち物と、お金の出どころ…？" },
    { name: "妖精", text: "たとえば、100万円分の持ち物（現金や商品）があるお店があるとするね。これを「資産」って呼ぶよ。" },
    { name: "主人公", text: "その100万円は、どこから来たの？" },
    { name: "妖精", text: "40万円は銀行から借りて、60万円は自分で出したとしよう。" },
    { name: "妖精", text: "借りたお金は返さなきゃいけないから「負債」。自分で出したお金は「純資産」だよ。" },
    { name: "妖精", text: "資産100万円 ＝ 負債40万円 ＋ 純資産60万円。この形でまとめた表が、貸借対照表なんだ。" },
    { name: "主人公", text: "なるほど、貸借対照表は会社の財産と負債を示す表なんだね。" },
    { name: "妖精", text: "そう！この表を見ることで、会社の財政状況を把握できるんだ。" },
    { name: "主人公", text: "少しわかってきたよ!" },
    { name: "妖精", text: "良かった！" }

  ],

  // ===== チャプター3 =====

  [
    { name: "妖精", text: "よし、次は損益計算書について学ぼう！" },
    { name: "主人公", text: "逃げようかな…(これもまた難しそうね…)" },
    { name: "妖精", text: "心の声と言ってること逆なってるよ" },
    { name: "主人公", text: "あ、やべっ…" },
    { name: "妖精", text: "ちゃんとやろうね？(無言の圧)" },
    { name: "主人公", text: "あ、はい…" },
    { name: "妖精", text: "よろしい" },
    { name: "妖精", text: "損益計算書は、「いくら稼いで、いくら使って、結局いくら儲かったか」をまとめた表だよ。" },
    { name: "主人公", text: "儲けの計算てこと？" },
    { name: "妖精", text: "そう。たとえば、お店で50万円分の商品が売れたとするね。この「売上」が、稼いだお金だよ。" },
    { name: "妖精", text: "稼いだお金のことを「収益」って呼ぶんだ。売上は、その代表だよ。" },
    { name: "妖精", text: "でも、家賃や給料で30万円使ったとしよう。使ったお金は「費用」って呼ぶよ。" },
    { name: "主人公", text: "稼いだのが50万円で、使ったのが30万円…" },
    { name: "妖精", text: "50万円 − 30万円 ＝ 20万円。この20万円が「利益」、本当の儲けだよ。" },
    { name: "妖精", text: "もし使ったお金のほうが多かったら、マイナスになる。それを「赤字」って言うんだ。" },
    { name: "主人公", text: "なるほど、儲けは「収益 − 費用」なんだね！" }
  ]
];
let chapterNo = 0;                 // いま何章目か（0から始まる）
let lines = chapters[chapterNo];   // いまの章のセリフ
let i = 0;                         // いま何番目のセリフか

const nameBox = document.getElementById("name");
const text = document.getElementById("text");
const win = document.getElementById("window");
const speedBtn = document.getElementById("speedBtn");
const pauseBtn = document.getElementById("pauseBtn");
const skipStoryBtn = document.getElementById("skipStoryBtn");
const quizPanel = document.getElementById("quizPanel");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const quizResult = document.getElementById("quizResult");
const quizHintButton = document.getElementById("quizHintButton");
const quizHint = document.getElementById("quizHint");
const nextChapterBtn = document.getElementById("nextChapterBtn");
const tutorialPanel = document.getElementById("tutorialPanel");
const tutorialName = document.getElementById("tutorialName");
const tutorialText = document.getElementById("tutorialText");
const tutorialWindow = document.getElementById("tutorialWindow");
const tutorialChoices = document.getElementById("tutorialChoices");
const tutorialFeedback = document.getElementById("tutorialFeedback");
const tutorialGuide = document.getElementById("tutorialGuide");
let tutorialIndex = 0;
let tutorialQuizAnswered = false;
let quizActive = false;
let quizIndex = 0;
let correctAnswers = 0;
let storyTimer = null;
let typewriterTimer = null;
let storySpeed = 0;
let isStoryPaused = false;
let isStoryAutoPlaying = false;
let isTyping = false;
let currentStoryText = "";
let typedCharacters = 0;

const quizQuestionsForChapter2 = [
  {
    question: "銀行から借りたお金は、貸借対照表のどれにあたるでしょう？",
    choices: ["資産", "負債", "純資産"],
    answer: "負債",
    hint: "返さなきゃいけないお金は、どれだったかな？",
    explanation: "借りたお金は返す必要があるから「負債」だよ。"
  },
  {
    question: "資産・負債・純資産の関係として、正しいのはどれ？",
    choices: ["資産 ＝ 負債 ＋ 純資産", "負債 ＝ 資産 ＋ 純資産", "純資産 ＝ 資産 ＋ 負債"],
    answer: "資産 ＝ 負債 ＋ 純資産",
    hint: "持ち物は、借りたお金と自分のお金でまかなっているよね。",
    explanation: "資産は、負債と純資産を合わせた金額に、必ず一致するよ。"
  },
  {
    question: "最後の問題！資産が200万円、負債が50万円のとき、純資産はいくら？",
    choices: ["50万円", "150万円", "250万円"],
    answer: "150万円",
    hint: "資産から負債を引くと、純資産が求まるよ。",
    explanation: "200万円 − 50万円 ＝ 150万円。純資産は、資産から負債を引いた額だよ。"
  }
];

const chapter3QuizQuestions = [
  {
    question: "損益計算書は、何をまとめた表でしょう？",
    choices: ["会社の儲けとその原因", "会社の住所", "社員の出勤時間"],
    answer: "会社の儲けとその原因",
    hint: "損益計算書は、会社のお金のもうけに関係する表だよ。",
    explanation: "損益計算書は、収益・費用・利益をまとめた表です。"
  },
  {
    question: "50万円の収益から30万円の費用を引くと、利益はいくらでしょう？",
    choices: ["20万円", "30万円", "80万円"],
    answer: "20万円",
    hint: "利益は、収益から費用を引いて求めるよ。",
    explanation: "収益50万円 − 費用30万円 ＝ 利益20万円です。"
  },
  {
    question: "稼いだお金を表す言葉はどれでしょう？",
    choices: ["収益", "費用", "負債"],
    answer: "収益",
    hint: "使ったお金ではなく、入ってきたお金を表す言葉だよ。",
    explanation: "稼いだお金は収益、使ったお金は費用と呼びます。"
  }
];

let quizQuestions = quizQuestionsForChapter2;
let quizNextChapter = 2;

const tutorialLines = [
  { name: "妖精", text: "まず遊び方を説明するね。画面の下をクリックすると、お話が進むよ。" },
  { name: "妖精", text: "お話の途中で問題が出るから、答えを選んでね。間違えてもヒントが出るから安心して！" },
  {
    name: "妖精",
    text: "練習してみよう！簿記を教える先生は、だーれだ？",
    quiz: {
      choices: ["猫", "妖精", "ロボット"],
      answer: 1,
      hint: "今、あなたに話しかけているのは誰かな？",
      explain: "そう、わたしだよ！"
    }
  },
  { name: "妖精", text: "右上の「チャプター選択」から、好きな章にいつでも戻れるよ。" },
  { name: "妖精", text: "それじゃあ、はじめよう！" }
];

function showTutorialLine() {
  const line = tutorialLines[tutorialIndex];
  tutorialName.textContent = line.name;
  tutorialText.textContent = line.text;
  tutorialChoices.replaceChildren();
  tutorialFeedback.textContent = "";
  tutorialQuizAnswered = false;

  if (line.quiz) {
    tutorialChoices.classList.remove("hidden");
    tutorialGuide.textContent = "答えを選んでね";
    line.quiz.choices.forEach((choice, choiceIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        tutorialQuizAnswered = true;
        if (choiceIndex === line.quiz.answer) {
          tutorialFeedback.textContent = line.quiz.explain;
          tutorialGuide.textContent = "画面をクリックして続ける";
        } else {
          tutorialFeedback.textContent = `ヒント：${line.quiz.hint}`;
          tutorialGuide.textContent = "もう一度答えを選んでね";
          tutorialQuizAnswered = false;
        }
      });
      tutorialChoices.appendChild(button);
    });
  } else {
    tutorialChoices.classList.add("hidden");
    tutorialGuide.textContent = "画面をクリックして進む";
  }
}

function openTutorial() {
  tutorialIndex = 0;
  tutorialPanel.classList.remove("hidden");
  document.getElementById("tutorialCloseBtn").classList.add("hidden");
  document.getElementById("title-section").classList.add("hidden");
  tutorialFeedback.textContent = "";
  showTutorialLine();
}

tutorialWindow.addEventListener("click", () => {
  const line = tutorialLines[tutorialIndex];
  if (line.quiz && !tutorialQuizAnswered) {
    return;
  }
  if (tutorialIndex < tutorialLines.length - 1) {
    tutorialIndex += 1;
    showTutorialLine();
  } else {
    tutorialGuide.textContent = "体験終了！ホームに戻ってゲームを始めよう";
    document.getElementById("tutorialCloseBtn").classList.remove("hidden");
  }
});

document.getElementById("how-to-play-btn").addEventListener("click", openTutorial);

document.getElementById("tutorialCloseBtn").addEventListener("click", () => {
  tutorialPanel.classList.add("hidden");
  document.getElementById("title-section").classList.remove("hidden");
});

function showQuizQuestion() {
  const currentQuestion = quizQuestions[quizIndex];
  quizProgress.textContent = `第${quizIndex + 1}問 / ${quizQuestions.length}問　正解数：${correctAnswers}問`;
  quizQuestion.textContent = currentQuestion.question;
  quizResult.textContent = "";
  quizHint.textContent = "";
  quizHintButton.classList.remove("hidden");
  quizHintButton.disabled = false;
  nextChapterBtn.classList.add("hidden");
  quizChoices.replaceChildren();

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => answerQuiz(choice));
    quizChoices.appendChild(button);
  });
}

function answerQuiz(choice) {
  const currentQuestion = quizQuestions[quizIndex];
  const isCorrect = choice === currentQuestion.answer;

  quizResult.textContent = isCorrect
    ? `正解！${currentQuestion.explanation}`
    : `不正解です。${currentQuestion.explanation}`;
  quizHint.textContent = "";
  quizHintButton.classList.add("hidden");
  if (isCorrect) {
    correctAnswers += 1;
  }
  quizIndex += 1;
  quizChoices.replaceChildren();

  if (quizIndex === quizQuestions.length) {
    quizProgress.textContent = `結果：${correctAnswers} / ${quizQuestions.length}問 正解`;
    quizQuestion.textContent = correctAnswers >= 2
      ? "2問以上正解しました。次へ進めます。"
      : "次へ進むには、2問以上正解する必要があります。";
    nextChapterBtn.textContent = correctAnswers < 2
      ? "もう一度挑戦"
      : quizNextChapter === 2
        ? "チャプター3へ"
        : "ホームへ";
    nextChapterBtn.classList.remove("hidden");
    return;
  }

  nextChapterBtn.textContent = "次の問題へ";
  nextChapterBtn.classList.remove("hidden");
}

quizHintButton.addEventListener("click", () => {
  const currentQuestion = quizQuestions[quizIndex];
  quizHint.textContent = `ヒント：${currentQuestion.hint}`;
});

function show() {
  nameBox.textContent = lines[i].name;
  currentStoryText = lines[i].text;
  typedCharacters = 0;
  isTyping = true;
  text.textContent = "";
  startTypewriter();
}

function stopStoryTimer() {
  if (storyTimer !== null) {
    clearTimeout(storyTimer);
    storyTimer = null;
  }
}

function stopTypewriter() {
  if (typewriterTimer !== null) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }
}

function finishTyping() {
  stopTypewriter();
  typedCharacters = currentStoryText.length;
  text.textContent = currentStoryText;
  isTyping = false;
  scheduleStoryAdvance();
}

function startTypewriter() {
  stopTypewriter();
  if (isStoryPaused) {
    return;
  }

  const typeNextCharacter = () => {
    if (isStoryPaused || !isTyping) {
      return;
    }

    typedCharacters += 1;
    text.textContent = currentStoryText.slice(0, typedCharacters);
    if (typedCharacters >= currentStoryText.length) {
      isTyping = false;
      scheduleStoryAdvance();
      return;
    }

    typewriterTimer = setTimeout(typeNextCharacter, 50 / storySpeed);
  };

  typewriterTimer = setTimeout(typeNextCharacter, 50 / storySpeed);
}

function scheduleStoryAdvance() {
  stopStoryTimer();
  if (!isStoryAutoPlaying || isStoryPaused || quizActive) {
    return;
  }

  storyTimer = setTimeout(advanceStory, 2500 / storySpeed);
}

function advanceStory() {
  if (quizActive || isStoryPaused) {
    return;
  }

  if (isTyping) {
    finishTyping();
    return;
  }

  if (i < lines.length - 1) {
    i += 1;
    show();
    return;
  }

  if (chapterNo === 1 || chapterNo === 2) {
    startQuiz();
    return;
  }

  if (chapterNo < chapters.length - 1) {
    chapterNo += 1;
    lines = chapters[chapterNo];
    i = 0;
    show();
  }
}

function startStoryTimer() {
  if (storySpeed === 0) {
    isStoryAutoPlaying = false;
    stopStoryTimer();
    return;
  }

  isStoryAutoPlaying = true;
  if (!isTyping) {
    scheduleStoryAdvance();
  }
}

function updateStorySpeed() {
  const labels = {
    0: "2倍速",
    1: "手動",
    2: "3倍速",
    3: "通常速度"
  };
  speedBtn.textContent = labels[storySpeed];
  speedBtn.setAttribute("aria-pressed", String(storySpeed !== 0));
  if (storySpeed === 0) {
    isStoryAutoPlaying = false;
    stopStoryTimer();
    if (!isStoryPaused) {
      startTypewriter();
    }
    return;
  }

  if (!isStoryPaused) {
    startStoryTimer();
    startTypewriter();
  }
}

function updateStoryPause() {
  pauseBtn.textContent = isStoryPaused ? "再生" : "一時停止";
  pauseBtn.setAttribute("aria-pressed", String(isStoryPaused));
  if (isStoryPaused) {
    stopStoryTimer();
    stopTypewriter();
  } else {
    startTypewriter();
    if (isStoryAutoPlaying) {
      scheduleStoryAdvance();
    }
  }
}

function startQuiz() {
  stopStoryTimer();
  stopTypewriter();
  isStoryAutoPlaying = false;
  quizActive = true;
  quizIndex = 0;
  correctAnswers = 0;
  quizQuestions = chapterNo === 1
    ? quizQuestionsForChapter2
    : chapter3QuizQuestions;
  quizNextChapter = chapterNo === 1 ? 2 : null;
  quizResult.textContent = "";
  nextChapterBtn.classList.add("hidden");
  showQuizQuestion();
  win.classList.add("hidden");
  quizPanel.classList.remove("hidden");
}

function skipStory() {
  if (chapterNo === 0) {
    chapterNo = 1;
    lines = chapters[chapterNo];
    i = 0;
  }

  startQuiz();
}

skipStoryBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  stopStoryTimer();
  skipStory();
});

speedBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  storySpeed = storySpeed === 0
    ? 2
    : storySpeed === 2
      ? 3
      : storySpeed === 3
        ? 1
        : 0;
  updateStorySpeed();
});

pauseBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  isStoryPaused = !isStoryPaused;
  updateStoryPause();
});

win.addEventListener("click", () => {
  if (quizActive) {
    return;
  }

  advanceStory();
});

document.addEventListener("keydown", (event) => {
  if (quizActive ||
      win.classList.contains("hidden") ||
      event.target instanceof HTMLButtonElement ||
      !["Enter", " "].includes(event.key)) {
    return;
  }

  event.preventDefault();
  advanceStory();
});

const chapterTitles = [
  "チャプター1：簿記とは？",
  "チャプター2：貸借対照表って何？",
  "チャプター3：損益計算書"
];                                        // chapters と同じ順番・同じ数にする

const menu = document.getElementById("chapterMenu");
const list = document.getElementById("chapterList");

chapterTitles.forEach((title, n) => {     // 章の数だけボタンを作る
  const b = document.createElement("button");
  b.textContent = title;
  b.addEventListener("click", () => {
    stopStoryTimer();
    stopTypewriter();
    isStoryAutoPlaying = false;
    isStoryPaused = false;
    pauseBtn.textContent = "一時停止";
    pauseBtn.setAttribute("aria-pressed", "false");
    chapterNo = n;
    lines = chapters[n];                  // 選んだ章のセリフに入れ替える
    i = 0;
    tutorialPanel.classList.add("hidden");
    quizActive = false;
    correctAnswers = 0;
    quizPanel.classList.add("hidden");
    quizResult.textContent = "";
    nextChapterBtn.classList.add("hidden");
    show();
    menu.classList.add("hidden");         // 一覧を閉じる
    menuButton.setAttribute("aria-expanded", "false");
    document.getElementById("title-section").classList.add("hidden");
    win.classList.remove("hidden");
  });
  list.appendChild(b);
});

document.getElementById("start-btn").addEventListener("click", () => {
  stopStoryTimer();
  stopTypewriter();
  isStoryAutoPlaying = false;
  isStoryPaused = false;
  pauseBtn.textContent = "一時停止";
  pauseBtn.setAttribute("aria-pressed", "false");
  chapterNo = 0;
  lines = chapters[chapterNo];
  i = 0;
  quizActive = false;
  correctAnswers = 0;
  quizPanel.classList.add("hidden");
  show();
  document.getElementById("title-section").classList.add("hidden");
  win.classList.remove("hidden");
});
const menuButton = document.getElementById("menu-btn");

menuButton.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menuButton.setAttribute("aria-expanded", "true");
});

document.getElementById("closeBtn").addEventListener("click", () => {
  menu.classList.add("hidden");
  menuButton.setAttribute("aria-expanded", "false");
});

document.getElementById("homeBtn").addEventListener("click", () => {
  stopStoryTimer();
  stopTypewriter();
  menu.classList.add("hidden");
  menuButton.setAttribute("aria-expanded", "false");
  document.getElementById("title-section").classList.remove("hidden");
  win.classList.add("hidden");
  quizPanel.classList.add("hidden");
  tutorialPanel.classList.add("hidden");
  quizActive = false;
});

const chartModal = document.getElementById("chartModal");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("copy", (event) => {
  event.preventDefault();
});

document.addEventListener("cut", (event) => {
  event.preventDefault();
});

document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) &&
      ["c", "x", "a", "s", "u"].includes(event.key.toLowerCase())) {
    event.preventDefault();
  }
});

document.getElementById("chart").addEventListener("click", () => {
  chartModal.classList.remove("hidden");
});

document.getElementById("chartCloseBtn").addEventListener("click", () => {
  chartModal.classList.add("hidden");
});

nextChapterBtn.addEventListener("click", () => {
  if (quizIndex < quizQuestions.length) {
    showQuizQuestion();
    return;
  }

  if (correctAnswers < 2) {
    quizIndex = 0;
    correctAnswers = 0;
    showQuizQuestion();
    return;
  }

  if (quizNextChapter === null) {
    quizActive = false;
    quizPanel.classList.add("hidden");
    document.getElementById("title-section").classList.remove("hidden");
    nextChapterBtn.classList.add("hidden");
    return;
  }

  chapterNo = quizNextChapter;
  lines = chapters[chapterNo];
  i = 0;
  quizActive = false;
  quizPanel.classList.add("hidden");
  quizResult.textContent = "";
  nextChapterBtn.classList.add("hidden");
  win.classList.remove("hidden");
  show();
});
