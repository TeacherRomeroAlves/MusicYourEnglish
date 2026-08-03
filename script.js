const wordBank = document.getElementById("word-bank");
const dropZones = document.querySelectorAll(".drop-zone");
const checkBtn = document.getElementById("check-btn");  
const resetBtn = document.getElementById("reset-btn");
const feedback = document.getElementById("feedback");
const iconBank = document.getElementById("icon-bank");
const inlineDropZones = document.querySelectorAll(".inline-drop-zone");
const resetStanzaBtn = document.getElementById("reset-stanza-btn");
const lyricWordBank = document.getElementById("lyric-word-bank");
const wordDropZones = document.querySelectorAll(".word-drop-zone");
const resetChorusBtn = document.getElementById("reset-chorus-btn");
const choiceSlots = document.querySelectorAll(".choice-slot");
const resetChoiceBtn = document.getElementById("reset-choice-btn");
const checkAllBtn = document.getElementById("check-all-btn");
const finalFeedback = document.getElementById("final-feedback");
const orderBank = document.getElementById("order-bank");
const orderDropZones = document.querySelectorAll(".order-drop-zone");
const resetOrderBtn = document.getElementById("reset-order-btn");
const lyricInputs = document.querySelectorAll(".lyric-input");
const resetInputsBtn = document.getElementById("reset-inputs-btn");
const resetStanzaTypingBtn = document.getElementById("reset-stanza-typing-btn");
const studentNameInput = document.getElementById("student-name");
const studentClassInput = document.getElementById("student-class");
const studentWritingInput = document.getElementById("student-writing");
const wordCountValue = document.getElementById("word-count-value");
const reportSection = document.querySelector(".report-section");
const reportSongTitle = document.getElementById("report-song-title");
const reportStudentName = document.getElementById("report-student-name");
const reportStudentClass = document.getElementById("report-student-class");
const reportDate = document.getElementById("report-date");
const reportScore = document.getElementById("report-score");
const reportPrompt = document.getElementById("report-prompt");
const reportWriting = document.getElementById("report-writing");
const saveReportBtn = document.getElementById("save-report-btn");
const shareReportBtn = document.getElementById("share-report-btn");
let reportExportCard = document.querySelector(".report-export");

let draggedCard = null;
let draggedIcon = null;
let draggedLyricWord = null;

function shuffleArray(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function attachCardEvents(card) {
  card.addEventListener("dragstart", () => {
    draggedCard = card;
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
}

document.querySelectorAll(".word-card").forEach(attachCardEvents);

function attachIconEvents(icon) {
  icon.addEventListener("dragstart", () => {
    draggedIcon = icon;
    icon.classList.add("dragging");
  });

  icon.addEventListener("dragend", () => {
    icon.classList.remove("dragging");
  });
}

document.querySelectorAll(".icon-card").forEach(attachIconEvents);

function attachLyricWordEvents(word) {
  word.addEventListener("dragstart", () => {
    draggedLyricWord = word;
    word.classList.add("dragging");
  });

  word.addEventListener("dragend", () => {
    word.classList.remove("dragging");
  });
}

document.querySelectorAll(".lyric-word-card").forEach(attachLyricWordEvents);

function findEmptyWordSlot() {
  if (!wordBank) {
    return null;
  }

  return Array.from(wordBank.querySelectorAll(".word-slot")).find(
    (slot) => !slot.querySelector(".word-card")
  );
}

function shuffleWordBank() {
  if (!wordBank) {
    return;
  }

  const slots = Array.from(wordBank.querySelectorAll(".word-slot"));
  const cards = shuffleArray(
    slots
      .map((slot) => slot.querySelector(".word-card"))
      .filter(Boolean)
  );

  slots.forEach((slot, index) => {
    slot.innerHTML = "";

    if (cards[index]) {
      slot.appendChild(cards[index]);
    }
  });
}

function shuffleContainerChildren(container, selector) {
  if (!container) {
    return;
  }

  const items = shuffleArray(Array.from(container.querySelectorAll(selector)));
  items.forEach((item) => {
    container.appendChild(item);
  });
}

function placeCard(zone, card) {
  const existingCard = zone.querySelector(".word-card");

  if (existingCard) {
    const emptySlot = findEmptyWordSlot();
    if (emptySlot) {
      emptySlot.appendChild(existingCard);
    }
  }

  zone.appendChild(card);
  card.classList.add("placed-card");
}

if (wordBank) {
  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");

      if (!draggedCard) {
        return;
      }

      placeCard(zone, draggedCard);
      feedback.textContent = "";
      feedback.className = "feedback";
    });
  });

  wordBank.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  wordBank.addEventListener("drop", (event) => {
    event.preventDefault();

    if (!draggedCard) {
      return;
    }

    const emptySlot = findEmptyWordSlot();
    if (emptySlot) {
      emptySlot.appendChild(draggedCard);
    }
    draggedCard.classList.remove("placed-card");
    feedback.textContent = "";
    feedback.className = "feedback";
  });
}

if (checkBtn) {
  checkBtn.addEventListener("click", () => {
    const vocabResults = getDropZoneResults(dropZones, ".word-card");

    if (vocabResults.placed < vocabResults.total) {
      feedback.textContent = `You matched ${vocabResults.correct} of ${vocabResults.total} correctly so far. Finish the remaining boxes and try again.`;
      feedback.className = "feedback warning";
      return;
    }

    if (vocabResults.correct === vocabResults.total) {
      feedback.textContent = "Excellent. All answers are correct.";
      feedback.className = "feedback success";
      return;
    }

    feedback.textContent = `Nice try. You got ${vocabResults.correct} of ${vocabResults.total} correct. Move the words and check again.`;
    feedback.className = "feedback warning";
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".word-card");
    cards.forEach((card) => {
      const emptySlot = findEmptyWordSlot();
      if (emptySlot) {
        emptySlot.appendChild(card);
      }
      card.classList.remove("placed-card");
    });

    shuffleWordBank();
    feedback.textContent = "Activity reset.";
    feedback.className = "feedback";
  });
}

document.querySelectorAll(".speak-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const word = button.dataset.speak;

    if (!("speechSynthesis" in window)) {
      feedback.textContent = "Your browser does not support pronunciation audio on this page.";
      feedback.className = "feedback warning";
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.92;

    window.speechSynthesis.speak(utterance);
  });
});

function placeIcon(zone, icon) {
  const existingIcon = zone.querySelector(".icon-card");

  if (existingIcon) {
    iconBank.appendChild(existingIcon);
  }

  zone.appendChild(icon);
}

if (iconBank) {
  inlineDropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");

      if (!draggedIcon) {
        return;
      }

      placeIcon(zone, draggedIcon);
    });
  });

  iconBank.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  iconBank.addEventListener("drop", (event) => {
    event.preventDefault();

    if (!draggedIcon) {
      return;
    }

    iconBank.appendChild(draggedIcon);
  });
}

if (resetStanzaBtn) {
  resetStanzaBtn.addEventListener("click", () => {
    const icons = document.querySelectorAll(".icon-card");
    icons.forEach((icon) => {
      iconBank.appendChild(icon);
    });

    shuffleContainerChildren(iconBank, ".icon-card");
  });
}

function placeLyricWord(zone, word) {
  const existingWord = zone.querySelector(".lyric-word-card");

  if (existingWord) {
    lyricWordBank.appendChild(existingWord);
  }

  zone.appendChild(word);
}

function placeOrderCard(zone, card) {
  const existingCard = zone.querySelector(".order-card");

  if (existingCard) {
    existingCard.classList.remove("used");
    orderBank.appendChild(existingCard);
  }

  zone.appendChild(card);
  card.classList.add("used");
}

function returnOrderCard(card) {
  card.classList.remove("used");
  orderBank.appendChild(card);
}

if (lyricWordBank) {
  wordDropZones.forEach((zone) => {
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");

      if (!draggedLyricWord) {
        return;
      }

      placeLyricWord(zone, draggedLyricWord);
    });
  });

  lyricWordBank.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  lyricWordBank.addEventListener("drop", (event) => {
    event.preventDefault();

    if (!draggedLyricWord) {
      return;
    }

    lyricWordBank.appendChild(draggedLyricWord);
  });
}

if (resetChorusBtn) {
  resetChorusBtn.addEventListener("click", () => {
    const words = document.querySelectorAll(".lyric-word-card");
    words.forEach((word) => {
      lyricWordBank.appendChild(word);
    });

    shuffleContainerChildren(lyricWordBank, ".lyric-word-card");
  });
}

function renderChoiceSlot(slot) {
  const answer = slot.dataset.answer;
  const options = JSON.parse(slot.dataset.options).map((option) =>
    option.replace("&apos;", "'")
  );
  const shuffledOptions = shuffleArray(options);
  const group = document.createElement("span");

  group.className = "choice-group";

  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    button.dataset.value = option;
    button.dataset.correct = String(option === answer);
    button.textContent = option;

    button.addEventListener("click", () => {
      group.querySelectorAll(".choice-btn").forEach((choiceButton) => {
        choiceButton.classList.remove("selected");
      });

      button.classList.add("selected");
    });

    group.appendChild(button);
  });

  slot.innerHTML = "";
  slot.appendChild(group);
}

if (choiceSlots.length > 0) {
  choiceSlots.forEach(renderChoiceSlot);
}

if (resetChoiceBtn) {
  resetChoiceBtn.addEventListener("click", () => {
    choiceSlots.forEach(renderChoiceSlot);
  });
}

function findNextEmptyOrderZone() {
  return Array.from(orderDropZones).find(
    (zone) => !zone.querySelector(".order-card")
  );
}

if (orderBank) {
  document.querySelectorAll(".order-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("used")) {
        returnOrderCard(card);
        return;
      }

      const nextZone = findNextEmptyOrderZone();

      if (!nextZone) {
        return;
      }

      placeOrderCard(nextZone, card);
    });
  });
}

if (resetOrderBtn) {
  resetOrderBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".order-card");
    cards.forEach((card) => {
      card.classList.remove("used");
      orderBank.appendChild(card);
    });

    shuffleContainerChildren(orderBank, ".order-card");
  });
}

lyricInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const maxLength = Number(input.getAttribute("maxlength")) || 2;
    input.value = input.value.slice(0, maxLength);

    const syncKey = input.dataset.syncKey;

    if (syncKey) {
      document
        .querySelectorAll(`.lyric-input[data-sync-key="${syncKey}"]`)
        .forEach((linkedInput) => {
          if (linkedInput !== input) {
            linkedInput.value = input.value;
          }
        });
    }
  });
});

if (resetInputsBtn) {
  resetInputsBtn.addEventListener("click", () => {
    lyricInputs.forEach((input) => {
      input.value = "";
    });
  });
}

if (resetStanzaTypingBtn) {
  resetStanzaTypingBtn.addEventListener("click", () => {
    lyricInputs.forEach((input) => {
      if (input.classList.contains("sync-input")) {
        input.value = "";
      }
    });
  });
}

shuffleWordBank();
shuffleContainerChildren(iconBank, ".icon-card");
shuffleContainerChildren(lyricWordBank, ".lyric-word-card");
shuffleContainerChildren(orderBank, ".order-card");

function getDropZoneResults(zones, selector) {
  let correct = 0;
  let placed = 0;

  zones.forEach((zone) => {
    const item = zone.querySelector(selector);

    if (item) {
      placed += 1;
    }

    if (item && item.dataset.word === zone.dataset.match) {
      correct += 1;
    }
  });

  return {
    correct,
    placed,
    total: zones.length,
  };
}

function getChoiceResults() {
  let correct = 0;
  let answered = 0;

  choiceSlots.forEach((slot) => {
    const selectedButton = slot.querySelector(".choice-btn.selected");

    if (selectedButton) {
      answered += 1;
    }

    if (selectedButton && selectedButton.dataset.correct === "true") {
      correct += 1;
    }
  });

  return {
    correct,
    placed: answered,
    total: choiceSlots.length,
  };
}

function getOrderResults() {
  let correct = 0;
  let placed = 0;

  orderDropZones.forEach((zone) => {
    const card = zone.querySelector(".order-card");

    if (card) {
      placed += 1;
    }

    if (card && card.dataset.line === zone.dataset.match) {
      correct += 1;
    }
  });

  return {
    correct,
    placed,
    total: orderDropZones.length,
  };
}

function getInputResults() {
  let correct = 0;
  let answered = 0;

  lyricInputs.forEach((input) => {
    const value = input.value.trim().toLowerCase();
    const answer = input.dataset.answer.trim().toLowerCase();

    if (value) {
      answered += 1;
    }

    if (value === answer) {
      correct += 1;
    }
  });

  return {
    correct,
    placed: answered,
    total: lyricInputs.length,
  };
}

function collectSongResults() {
  const resultGroups = [];

  if (inlineDropZones.length > 0) {
    resultGroups.push(getDropZoneResults(inlineDropZones, ".icon-card"));
  }

  if (wordDropZones.length > 0) {
    resultGroups.push(getDropZoneResults(wordDropZones, ".lyric-word-card"));
  }

  if (choiceSlots.length > 0) {
    resultGroups.push(getChoiceResults());
  }

  if (orderDropZones.length > 0) {
    resultGroups.push(getOrderResults());
  }

  if (lyricInputs.length > 0) {
    resultGroups.push(getInputResults());
  }

  return resultGroups.reduce(
    (summary, result) => ({
      correct: summary.correct + result.correct,
      placed: summary.placed + result.placed,
      total: summary.total + result.total,
    }),
    { correct: 0, placed: 0, total: 0 }
  );
}

function getWordCount(text) {
  const trimmed = text.trim();

  if (!trimmed) {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

function getReportData() {
  const songTitle = reportSection?.dataset.songTitle || "Song lesson";
  const studentName = studentNameInput?.value.trim() || "Not added yet";
  const studentClass = studentClassInput?.value.trim() || "Not added yet";
  const writing = studentWritingInput?.value.trim() || "No answer yet.";
  const prompt = studentWritingInput?.dataset.prompt || "";
  const wordCount = getWordCount(studentWritingInput?.value || "");
  const dateText = new Date().toLocaleDateString();
  const results = collectSongResults();
  const scoreText =
    results.total > 0 && results.placed === results.total
      ? `${results.correct} / ${results.total}`
      : "Not checked yet";

  return {
    songTitle,
    studentName,
    studentClass,
    writing,
    prompt,
    wordCount,
    dateText,
    scoreText,
  };
}

function ensureReportExportCard() {
  if (!reportSection) {
    return null;
  }

  // If the page already has a visible report card, use that and skip
  // creating a second hidden copy for printing.
  if (document.getElementById("student-report")) {
    return null;
  }

  if (!reportExportCard) {
    reportExportCard = document.createElement("article");
    reportExportCard.className = "report-card report-export";
    reportSection.appendChild(reportExportCard);
  }

  return reportExportCard;
}

function updateReport() {
  if (!reportSection) {
    return;
  }

  const {
    songTitle,
    studentName,
    studentClass,
    writing,
    prompt,
    wordCount,
    dateText,
    scoreText,
  } = getReportData();

  if (reportSongTitle) {
    reportSongTitle.textContent = songTitle;
  }

  if (reportStudentName) {
    reportStudentName.textContent = studentName;
  }

  if (reportStudentClass) {
    reportStudentClass.textContent = studentClass;
  }

  if (reportDate) {
    reportDate.textContent = dateText;
  }

  if (reportPrompt) {
    reportPrompt.textContent = prompt;
  }

  if (reportWriting) {
    reportWriting.textContent = writing;
  }

  if (wordCountValue) {
    wordCountValue.textContent = String(wordCount);
  }

  if (reportScore) {
    reportScore.textContent = scoreText;
  }

  const exportCard = ensureReportExportCard();

  if (exportCard) {
    exportCard.innerHTML = `
      <p class="report-kicker">Student Report</p>
      <h3>${songTitle}</h3>
      <p class="report-meta"><strong>Name:</strong> ${studentName}</p>
      <p class="report-meta"><strong>Class:</strong> ${studentClass}</p>
      <p class="report-meta"><strong>Date:</strong> ${dateText}</p>
      <p class="report-meta"><strong>Song score:</strong> ${scoreText}</p>
      <p class="report-meta"><strong>Word count:</strong> ${wordCount}</p>
      <div class="report-divider"></div>
      <p class="report-meta"><strong>Homework prompt:</strong></p>
      <p class="report-text">${prompt}</p>
      <p class="report-meta"><strong>Student answer:</strong></p>
      <p class="report-text">${writing}</p>
    `;
  }
}

if (checkAllBtn) {
  checkAllBtn.addEventListener("click", () => {
    const results = collectSongResults();
    const totalCorrect = results.correct;
    const totalAnswered = results.placed;
    const totalItems = results.total;

    if (totalAnswered < totalItems) {
      finalFeedback.textContent = `You got ${totalCorrect} of ${totalItems} correct so far. Some answers are still missing, so finish the whole song and check again.`;
      finalFeedback.className = "feedback warning";
      updateReport();
      return;
    }

    if (totalCorrect === totalItems) {
      finalFeedback.textContent = `Excellent. All ${totalItems} answers are correct.`;
      finalFeedback.className = "feedback success";
      updateReport();
      return;
    }

    finalFeedback.textContent = `Nice work. You got ${totalCorrect} of ${totalItems} correct. Listen again and try adjusting the answers that are not right yet.`;
    finalFeedback.className = "feedback warning";
    updateReport();
  });
}

[studentNameInput, studentClassInput, studentWritingInput].forEach((field) => {
  field?.addEventListener("input", updateReport);
});

if (saveReportBtn) {
  saveReportBtn.addEventListener("click", () => {
    updateReport();
    document.body.classList.add("print-report-mode");
    window.print();
    setTimeout(() => {
      document.body.classList.remove("print-report-mode");
    }, 300);
  });
}

if (shareReportBtn) {
  shareReportBtn.addEventListener("click", async () => {
    updateReport();
    const reportData = getReportData();

    const shareText = [
      `Music Your English`,
      `Song: ${reportData.songTitle}`,
      `Student: ${reportData.studentName}`,
      `Class: ${reportData.studentClass}`,
      `Date: ${reportData.dateText}`,
      `Score: ${reportData.scoreText}`,
      `Word count: ${reportData.wordCount}`,
      `Prompt: ${reportData.prompt}`,
      `Answer: ${reportData.writing}`,
    ].join("\n");

    if (navigator.share) {
      try {
        await navigator.share({
          title: reportData.songTitle || "Music Your English",
          text: shareText,
        });
        return;
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      alert("Report copied. You can now paste it into WhatsApp, email, or another app.");
    } catch (error) {
      alert("Sharing is not available in this browser.");
    }
  });
}

updateReport();
