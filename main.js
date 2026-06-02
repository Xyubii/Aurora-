// main.js - محرك المنصة الذكي
document.addEventListener("DOMContentLoaded", () => {
    console.log("Aurora Engine Loaded!");
});

// دالة عرض الأسئلة بناءً على المادة المختارة
function startQuiz(subjectKey) {
    const subject = AuroraDatabase[subjectKey];
    if (!subject) return;

    const quizArea = document.getElementById("quiz-container");
    const randomIndex = Math.floor(Math.random() * subject.questions.length);
    const q = subject.questions[randomIndex];

    quizArea.innerHTML = `
        <h3>${subject.title} - اختبار سريع</h3>
        <p>${q.q}</p>
        <div id="options">
            ${q.a.map((opt, i) => `<button class="btn" onclick="checkAnswer(${i}, ${q.correct}, '${subjectKey}')">${opt}</button>`).join('')}
        </div>
        <div id="feedback" style="margin-top:15px; font-weight:bold;"></div>
    `;
}

// دالة تصحيح الإجابة
function checkAnswer(selected, correct, subjectKey) {
    const feedback = document.getElementById("feedback");
    if (selected === correct) {
        feedback.style.color = "var(--accent-color)";
        feedback.innerText = "✅ إجابة صحيحة! أحسنت.";
    } else {
        feedback.style.color = "var(--danger-color)";
        feedback.innerText = "❌ إجابة خاطئة. حاول مرة أخرى.";
    }
}

// محرك البحث الذكي (للملفات والمحتوى)
function searchContent() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const results = [];

    // البحث في الـ PDFs
    for (let key in AuroraDatabase) {
        AuroraDatabase[key].pdfs.forEach(pdf => {
            if (pdf.title.toLowerCase().includes(query)) {
                results.push(`📄 ${pdf.title}`);
            }
        });
    }

    alert(results.length > 0 ? "وجدنا: \n" + results.join("\n") : "لم نجد ملفات بهذا الاسم.");
}
