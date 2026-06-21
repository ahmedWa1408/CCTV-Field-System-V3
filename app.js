// =======================
// عناصر الصفحات
// =======================

const welcomePage = document.getElementById("welcomePage");
const planPage = document.getElementById("planPage");
const routePage = document.getElementById("routePage");

const startBtn = document.getElementById("startBtn");
const searchBtn = document.getElementById("searchBtn");
const backBtn = document.getElementById("backBtn");

const missionBtn = document.getElementById("missionBtn");
const historyBtn = document.getElementById("historyBtn");

const planNumber = document.getElementById("planNumber");
const routeName = document.getElementById("routeName");

// =======================
// بدء التطبيق
// =======================

startBtn.onclick = function () {

    welcomePage.classList.add("hidden");

    planPage.classList.remove("hidden");

};

// =======================
// البحث عن الخطة
// =======================

searchBtn.onclick = function () {

    const number = planNumber.value.trim();

    if (number === "") {

        alert("يرجى إدخال رقم الخطة");

        return;

    }

    if (!plans[number]) {

        alert("رقم الخطة غير موجود");

        return;

    }

    routeName.textContent = plans[number].route;

    planPage.classList.add("hidden");

    routePage.classList.remove("hidden");

};

// =======================
// رجوع
// =======================

backBtn.onclick = function () {

    routePage.classList.add("hidden");

    planPage.classList.remove("hidden");

};

// =======================
// بدء المسار
// =======================

missionBtn.onclick = function () {

    localStorage.setItem("planNumber", planNumber.value);

    localStorage.setItem("routeName", routeName.textContent);

    window.location.href = "mission.html";

};

// =======================
// السجل
// =======================

historyBtn.onclick = function () {

    localStorage.setItem("planNumber", planNumber.value);

    window.location.href = "history.html";

};
