// ===============================
// عناصر الصفحة
// ===============================

const planInput = document.getElementById("planNumber");
const searchButton = document.getElementById("searchButton");
const errorMessage = document.getElementById("errorMessage");

// ===============================
// حركة الرقم أثناء الكتابة
// ===============================

planInput.addEventListener("input", () => {

    planInput.style.transform = "scale(1.06)";

    setTimeout(() => {

        planInput.style.transform = "scale(1)";

    },150);

});

// ===============================
// عند الضغط على بحث
// ===============================

searchButton.addEventListener("click", () => {

    const number = planInput.value.trim();

    errorMessage.textContent = "";

    // التحقق من الإدخال

    if(number===""){

        errorMessage.textContent="يرجى إدخال رقم الخطة";

        planInput.focus();

        return;

    }

    // هل الخطة موجودة؟

    if(!plans[number]){

        errorMessage.textContent="رقم الخطة غير موجود";

        planInput.classList.add("shake");

        setTimeout(()=>{

            planInput.classList.remove("shake");

        },500);

        return;

    }

    // حفظ البيانات

    localStorage.setItem("planNumber",number);

    localStorage.setItem("routeNumber",plans[number].number);

    localStorage.setItem("routeName",plans[number].route);

    // الانتقال

    window.location.href="route.html";

});
