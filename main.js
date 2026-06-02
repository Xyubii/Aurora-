let currentProg = 0;

function startQuiz(subjectKey) {
    const data = AuroraDatabase[subjectKey];
    const app = document.getElementById("app-area");
    
    app.innerHTML = `
        <div class="progress-container"><div id="progress-bar"></div></div>
        <h3>${data.title}</h3>
        <p>${data.questions[0].q}</p>
        ${data.questions[0].a.map((opt, i) => `<button class="btn" onclick="check(${i}, ${data.questions[0].correct})">${opt}</button>`).join('')}
    `;
}

function check(sel, corr) {
    if (sel === corr) {
        currentProg += 50;
        document.getElementById("progress-bar").style.width = currentProg + "%";
        alert("إجابة صحيحة! أحسنت.");
    } else {
        alert("إجابة خاطئة، حاول مرة أخرى.");
    }
}
