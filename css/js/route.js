// ======================================
// تحميل بيانات المسار
// ======================================

const routeNumber = document.getElementById("routeNumber");
const routeName = document.getElementById("routeName");

const startMission = document.getElementById("startMission");
const historyBtn = document.getElementById("historyBtn");
const backBtn = document.getElementById("backBtn");

// ======================================
// عرض البيانات
// ======================================

window.onload = function () {

    const number = localStorage.getItem("routeNumber");
    const name = localStorage.getItem("routeName");

    if (!number || !name) {

        window.location.href = "plan.html";
        return;

    }

    routeNumber.textContent = number;
    routeName.textContent = name;

};

// ======================================
// بدء المسار
// ======================================

startMission.onclick = function () {

    const startTime = new Date();

    localStorage.setItem(
        "missionStart",
        startTime.toISOString()
    );

    window.location.href = "mission.html";

};

// ======================================
// سجل المسار
// ======================================

historyBtn.onclick = function () {

    window.location.href = "history.html";

};

// ======================================
// رجوع
// ======================================

backBtn.onclick = function () {

    window.location.href = "plan.html";

};
