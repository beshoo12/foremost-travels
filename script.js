// 🔒 تأمين بيانات الاتصال لمنع التلاعب من جهة العميل (Client-Side Parameter Manipulation)
const APP_SECURE_CONFIG = Object.freeze({
    // الرقم مكتوب بنظام Base64 عشان ميكونش صريح في الكود للبرامج الآلية
    // "OTY1NjU4NjU4MDg=" هي فك شفرة "96565865808"
    whatsappNumber: atob("OTY1NjU4NjU4MDg="),
    companyName: "FOREMOST Travels"
});

// متغير دمي (Dummy) لتوافق الكود القديم إن وجد
const COMPANY_NUMBER = APP_SECURE_CONFIG.whatsappNumber;
const COMPANY_NAME = APP_SECURE_CONFIG.companyName;

function getSafeVal(e) {
    const t = document.getElementById(e);
    return t ? t.value.trim() : ""
}
const Validator = {
    validateFullName: function (e, t, a) {
        return !e || 2 > e.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"
        } : !t || 2 > t.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0633\u0637 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"
        } : !a || 2 > a.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"
        } : {
            isValid: !0
        }
    },
    validateEmail: function (e) {
        return e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? {
            isValid: !0
        } : {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D"
        }
    },
    validatePhone: function (e) {
        return !e || 10 > e.replace(/\D/g, "").length ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 10 \u0623\u0631\u0642\u0627\u0645"
        } : {
            isValid: !0
        }
    },
    validatePassport: function (e, t) {
        return !e || 6 > e.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D"
        } : t ? {
            isValid: !0
        } : {
            isValid: !1,
            message: "\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062C\u0648\u0627\u0632 \u0645\u0637\u0644\u0648\u0628"
        }
    },
    validateDate: function (e, t) {
        if (!e) return {
            isValid: !1,
            message: `⚠️ ${t} مطلوب`
        };
        const a = new Date(e);
        return isNaN(a.getTime()) ? {
            isValid: !1,
            message: `⚠️ ${t} غير صحيح`
        } : {
            isValid: !0
        }
    },
    validateDestination: function (e, t) {
        return !e || 2 > e.length ? {
            isValid: !1,
            message: `⚠️ ${t} يجب أن يكون على الأقل حرفين`
        } : {
            isValid: !0
        }
    },
    validatePassengers: function (e, t, a) {
        const i = parseInt(e || 0) + parseInt(t || 0) + parseInt(a || 0);
        return 0 === i ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u064A\u062C\u0628 \u062A\u062D\u062F\u064A\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646"
        } : 9 < i ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"
        } : 20 < i ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0628\u0627\u0634\u0631\u0629"
        } : 0 === parseInt(e || 0) && 0 < parseInt(t || 0) ? {
            isValid: !1,
            message: "\u26A0\uFE0F \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0647\u0646\u0627\u0643 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0634\u062E\u0635 \u0628\u0627\u0644\u063A \u0648\u0627\u062D\u062F"
        } : {
            isValid: !0
        }
    }
};
document.addEventListener("DOMContentLoaded", function () {
  function T() {
        const origin = getSafeVal("trOrigin") || "غير محدد",
              dest = getSafeVal("trDest") || "غير محدد",
              date = getSafeVal("trDate") || "غير محدد",
              time = getSafeVal("trTime") || "غير محدد",
              seatType = getSafeVal("trSeatType") || "غير محدد";
              
        // قراءة درجة القطار من أزرار الـ Radio
        const trClassInput = document.querySelector('input[name="trClass"]:checked');
        const trClass = trClassInput ? trClassInput.nextElementSibling.innerText.trim() : "غير محدد";

        // قراءة أعداد المسافرين
        const adults = getSafeVal("tAdults") || "0",
              kids = getSafeVal("tKids") || "0",
              infants = getSafeVal("tInfants") || "0",
              totalPassengers = parseInt(adults) + parseInt(kids) + parseInt(infants);

        // قراءة الخدمات الإضافية
        const extraServices = [];
        if (document.getElementById('trMealService')?.checked) extraServices.push("وجبات على القطار");
        if (document.getElementById('trWiFi')?.checked) extraServices.push("إنترنت (WiFi)");
        if (document.getElementById('trLuggage')?.checked) extraServices.push("أمتعة إضافية");

        return `🚆 *نوع الخدمة:* رحلة قطار 🚆\n\n` +
               `📍 *مسار الرحلة:* ${origin} ➡️ ${dest}\n` +
               `📅 *التاريخ:* ${date}\n` +
               `🕒 *الوقت المفضل:* ${time}\n` +
               `🎫 *درجة القطار:* ${trClass}\n` +
               `💺 *نوع المقاعد:* ${seatType}\n\n` +
               `👥 *المسافرين (${totalPassengers}):*\n` +
               `• بالغين: ${adults} | أطفال: ${kids} | رضع: ${infants}\n\n` +
               `🎁 *الخدمات الإضافية المطلوبة:*\n` + 
               `${extraServices.length > 0 ? "• " + extraServices.join("\n• ") : "• لا يوجد"}`;
    }

    function a() {
        const e = new Date,
            t = ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"][e.getDay()],
            a = ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"][e.getMonth()],
            i = e.getDate(),
            n = e.getFullYear();
        let l = e.getHours(),
            d = e.getMinutes(),
            s = e.getSeconds();
        const r = 12 <= l ? "\u0645" : "\u0635";
        l %= 12, l = l ? l : 12, d = 10 > d ? "0" + d : d, s = 10 > s ? "0" + s : s;
        const o = `${l}:${d}:${s} ${r}`,
            c = document.getElementById("date-time");
        c && (c.innerHTML = `
                <span class="date-part">
                    <i class="fas fa-calendar-alt me-1"></i> ${`${t}، ${i}${a}${n}`}
                </span>
                <span class="mx-2">|</span>
                <span class="time-part">
                    <i class="fas fa-clock me-1"></i> ${o}
                </span>
            `)
    }

    function i(e, t) {
        const a = document.getElementById(e);
        if (!a) return !0;
        const i = document.getElementById(`${e}-error`);
        let n = !0,
            l = "";
        switch (e) {
            case "fName":
            case "mName":
            case "lName":
                (!t || 2 > t.length) && (n = !1, l = "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646");
                break;
            case "uEmail":
                t && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) || (n = !1, l = "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
                break;
            case "uPassportNum":
                (!t || 6 > t.length) && (n = !1, l = "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
                break;
            case "hCity":
            case "trOrigin":
            case "trDest":
            case "carPickLoc":
            case "carDropLoc":
            case "pkgDest":
                (!t || 2 > t.length) && (n = !1, l = "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646")
        }
        return n ? (a.classList.remove("is-invalid"), a.classList.add("is-valid"), i && (i.textContent = "")) : (a.classList.remove("is-valid"), a.classList.add("is-invalid"), i && (i.textContent = l)), n
    }

    function n() {
        const e = parseInt(z.value) || 0,
            t = parseInt(J.value) || 0,
            a = parseInt(Q.value) || 0,
            i = e + t + a;
        if (9 < i) return Swal.fire({
            icon: "warning",
            title: "\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",
            text: "\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",
            confirmButtonText: "\u062D\u0633\u0646\u0627\u064B",
            confirmButtonColor: "#0F2854",
            iconColor: "#C5A059"
        }), z.value = Math.min(e, 9), J.value = 0, void(Q.value = 0);
        if (0 === i) return void(U.style.display = "none");
        U.style.display = "flex";
        let n = "<h6 class=\"text-primary fw-bold border-bottom pb-2 mb-2 w-100\"><i class=\"far fa-calendar-alt me-2\"></i> \u062A\u0648\u0627\u0631\u064A\u062E \u0645\u064A\u0644\u0627\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646 (\u0645\u0637\u0644\u0648\u0628)</h6>";
        for (let t = 1; t <= e; t++) n += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (المسافر رقم ${t})</label>
            <input type="text" class="form-control dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
        for (let e = 1; e <= t; e++) n += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل رقم ${e})</label>
            <input type="text" class="form-control dob-picker child-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
        for (let e = 1; e <= a; e++) n += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع رقم ${e})</label>
            <input type="text" class="form-control dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
        U.innerHTML = n; 
        d(); 
    if(typeof l === "function") { l(); }
    }

    function L() {
        const e = document.getElementById("trOrigin")?.value?.trim(),
            t = document.getElementById("trDest")?.value?.trim(),
            a = document.getElementById("trDate")?.value?.trim(),
            i = document.getElementById("tAdults")?.value || "0",
            n = document.getElementById("tKids")?.value || "0",
            l = document.getElementById("tInfants")?.value || "0";
        if (!e) return { isValid: !1, message: "⚠️ محطة الانطلاق مطلوبة" };
        if (!t) return { isValid: !1, message: "⚠️ محطة الوصول مطلوبة" };
        if (!a) return { isValid: !1, message: "⚠️ تاريخ الرحلة مطلوب" };
        if (e === t) return { isValid: !1, message: "⚠️ محطة الانطلاق والوصول يجب أن تكونا مختلفتين" };
        const d = Validator.validatePassengers(i, n, l, "قطارات");
        if (!d.isValid) return d;
        const s = document.querySelectorAll("#train-dynamic-dob-container input.train-dob-picker");
        for (let x of s)
            if (!x.value) return { isValid: !1, message: "⚠️ جميع تواريخ الميلاد مطلوبة" };
        return { isValid: !0, message: "" }
    }

    function d() {
        const e = new Date,
            t = e.getFullYear();
        "undefined" != typeof flatpickr && (flatpickr(".adult-dob", {
            dateFormat: "Y-m-d",
            maxDate: new Date(t - 12, e.getMonth(), e.getDate()),
            minDate: new Date(t - 100, 0, 1),
            disableMobile: !0,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                    longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                },
                months: {
                    shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                    longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                }
            }
        }), flatpickr(".child-dob", {
            dateFormat: "Y-m-d",
            maxDate: new Date(t - 2, e.getMonth(), e.getDate()),
            minDate: new Date(t - 12, e.getMonth(), e.getDate()),
            disableMobile: !0,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                    longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                },
                months: {
                    shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                    longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                }
            }
        }), flatpickr(".infant-dob", {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: new Date(t - 2, e.getMonth(), e.getDate()),
            disableMobile: !0,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                    longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                },
                months: {
                    shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                    longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                }
            }
        }))
    }

    function s(e) {
        const t = document.getElementById("roomCountDisplay");
        t && (t.textContent = e)
    }

    function r() {
        const e = document.getElementById("hCheckIn").value,
            t = document.getElementById("hCheckOut").value;
        if (e && t) {
            const a = new Date(e),
                i = new Date(t),
                n = Math.abs(i - a),
                l = Math.ceil(n / 86400000);
            0 < l ? (document.getElementById("stayDuration").style.display = "block", document.getElementById("nightsCount").textContent = l, 90 < l && Swal.fire({
                icon: "warning",
                title: "\u0645\u062F\u0629 \u0637\u0648\u064A\u0644\u0629",
                text: "\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u062A\u064A \u062D\u062F\u062F\u062A\u0647\u0627 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B\u060C \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F\u061F",
                confirmButtonText: "\u0646\u0639\u0645\u060C \u0645\u062A\u0623\u0643\u062F",
                cancelButtonText: "\u062A\u0639\u062F\u064A\u0644",
                showCancelButton: !0
            })) : document.getElementById("stayDuration").style.display = "none"
        }
    }

    function o() {
        const e = document.getElementById("hCheckIn").value,
            t = document.getElementById("hCheckOut").value;
        if (!e) return document.getElementById("hCheckIn").classList.add("is-invalid"), !1;
        if (document.getElementById("hCheckIn").classList.remove("is-invalid"), !t) return document.getElementById("hCheckOut").classList.add("is-invalid"), !1;
        document.getElementById("hCheckOut").classList.remove("is-invalid");
        const a = new Date(e),
            i = new Date(t);
        return !(i <= a) || (Swal.fire({
            icon: "error",
            title: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E",
            text: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062E\u0631\u0648\u062C \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u062E\u0648\u0644"
        }), !1)
    }

    function c() {
        document.querySelectorAll("input[name=\"hotelStars\"]").forEach(e => {
            e.addEventListener("change", function () {
                document.getElementById("starLabel").textContent = `${this.value} ${{1:"\u0646\u062C\u0645\u0629 (\u0627\u0642\u062A\u0635\u0627\u062F\u064A)",2:"\u0646\u062C\u0645\u062A\u064A\u0646 (\u062C\u064A\u062F)",3:"3 \u0646\u062C\u0648\u0645 (\u062C\u064A\u062F \u062C\u062F\u0627\u064B)",4:"4 \u0646\u062C\u0648\u0645 (\u0645\u0645\u062A\u0627\u0632)",5:"5 \u0646\u062C\u0648\u0645 (\u0641\u0627\u062E\u0631)"}[this.value]}`, document.getElementById("starLabel").classList.add("text-warning", "fw-bold")
            })
        })
    }

    function g() {
        const e = parseInt(document.getElementById("hAdults").value) || 0,
            t = parseInt(document.getElementById("hKids").value) || 0,
            a = parseInt(document.getElementById("hInfants").value) || 0,
            i = e + t + a,
            n = document.getElementById("hotel-dynamic-dob-container");
        if (9 < i) return Swal.fire({
            icon: "warning",
            title: "\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",
            text: "\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0644\u062D\u062C\u0632 \u0627\u0644\u0641\u0646\u062F\u0642\u064A. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",
            confirmButtonText: "\u062D\u0633\u0646\u0627\u064B",
            confirmButtonColor: "#0F2854",
            iconColor: "#C5A059"
        }), document.getElementById("hAdults").value = Math.min(e, 9), document.getElementById("hKids").value = 0, void(document.getElementById("hInfants").value = 0);
        if (0 < i) {
            n.style.display = "flex";
            let l = "<div class=\"row g-3 w-100\">";
            for (let t = 1; t <= e; t++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${t})</label>
                    <input type="text" class="form-control hotel-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            for (let e = 1; e <= t; e++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${e})</label>
                    <input type="text" class="form-control hotel-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            for (let e = 1; e <= a; e++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${e})</label>
                    <input type="text" class="form-control hotel-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            if (l += "</div>", n.innerHTML = l, "undefined" != typeof flatpickr) {
                const e = new Date,
                    t = e.getFullYear();
                flatpickr(".hotel-dob-picker", {
                    dateFormat: "Y-m-d",
                    maxDate: "today",
                    minDate: new Date(t - 100, 0, 1),
                    disableMobile: !0,
                    locale: {
                        firstDayOfWeek: 6,
                        weekdays: {
                            shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                            longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                        },
                        months: {
                            shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                            longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                        }
                    }
                })
            }
        } else n.style.display = "none"
    }

    function u() {
        const e = parseInt(document.getElementById("tAdults").value) || 0,
            t = parseInt(document.getElementById("tKids").value) || 0,
            a = parseInt(document.getElementById("tInfants").value) || 0,
            i = e + t + a,
            n = document.getElementById("train-dynamic-dob-container");
        if (9 < i) return Swal.fire({
            icon: "warning",
            title: "\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",
            text: "\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0642\u0637\u0627\u0631. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",
            confirmButtonText: "\u062D\u0633\u0646\u0627\u064B",
            confirmButtonColor: "#0F2854",
            iconColor: "#C5A059"
        }), document.getElementById("tAdults").value = Math.min(e, 9), document.getElementById("tKids").value = 0, void(document.getElementById("tInfants").value = 0);
        if (0 < i) {
            n.style.display = "flex";
            let l = "<div class=\"row g-3 w-100\">";
            for (let t = 1; t <= e; t++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${t})</label>
                    <input type="text" class="form-control train-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            for (let e = 1; e <= t; e++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${e})</label>
                    <input type="text" class="form-control train-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            for (let e = 1; e <= a; e++) l += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${e})</label>
                    <input type="text" class="form-control train-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
            if (l += "</div>", n.innerHTML = l, "undefined" != typeof flatpickr) {
                const e = new Date,
                    t = e.getFullYear();
                flatpickr(".train-dob-picker", {
                    dateFormat: "Y-m-d",
                    maxDate: "today",
                    minDate: new Date(t - 100, 0, 1),
                    disableMobile: !0,
                    locale: {
                        firstDayOfWeek: 6,
                        weekdays: {
                            shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                            longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                        },
                        months: {
                            shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                            longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                        }
                    }
                })
            }
        } else n.style.display = "none"
    }

    function m() {
        const e = parseInt(document.getElementById("pkgDuration").value) || 1,
            t = document.getElementById("pkgBudget").value,
            a = document.getElementById("pkgFlightClass").value,
            i = document.getElementById("pkgHotelLevel").value;
        let n = 0;
        "\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629" === t ? n = 50 : "\u0645\u062A\u0648\u0633\u0637\u0629" === t ? n = 100 : "VIP" === t ? n = 250 : "\u0645\u0641\u062A\u0648\u062D\u0629" === t ? n = 500 : void 0, "\u0628\u064A\u0632\u0646\u0633" === a && (n *= 1.5), i.includes("5") && (n *= 2), "\u0645\u0646\u062A\u062C\u0639\u0627\u062A" === i && (n *= 3);
        const l = n * e,
            d = document.getElementById("packageEstimate");
        d && (d.textContent = `~${Math.round(l)} د.ك للفرد`, d.style.display = "block")
    }

    function y(e) {
        const t = te.find(t => t.id === e);
        if (!t) return;
        const a = `مرحباً 👋

        
أريد حجز باقة: *${t.title}*
السعر: *${t.price}*
المدة: *${t.duration}*

الرجاء التواصل معي للتفاصيل والتأكيد.

مع تحياتي،
عميل فورموست 🛫`,
            i = `https://wa.me/${"96565865808"}?text=${encodeURIComponent(a)}`;
        window.open(i, "_blank")
    }

    function v(e) {
        const t = te.find(t => t.id === e);
        if (!t) return;
        const a = `
        <div class="modal fade" id="packageModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${t.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    
                    <div class="modal-body">
                        <!-- الصورة -->
                        <div class="modal-image-container mb-4">
                            <img src="${t.img}" alt="${t.title}" class="img-fluid rounded">
                            <div class="image-info">
                                <span class="modal-price">${t.price}</span>
                                <span class="modal-duration">${t.duration}</span>
                            </div>
                        </div>
                        
                        <!-- الوصف -->
                        <div class="mb-4">
                            <h6 class="section-title">وصف الرحلة</h6>
                            <p>${t.desc}</p>
                        </div>
                        
                        <!-- ما تتضمنه الباقة -->
                        <div class="mb-4">
                            <h6 class="section-title">تشمل الباقة</h6>
                            <div class="included-items">
                                ${t.includes.map(e=>`<div class="item"><i class="fas fa-check text-success"></i><span>${e}</span></div>`).join("")}
                            </div>
                        </div>
                        
                        <!-- البرنامج اليومي -->
                        <div class="mb-4">
                            <h6 class="section-title">البرنامج اليومي</h6>
                            <div class="daily-program">
                                <div class="day">
                                    <strong>اليوم الأول:</strong> الوصول والاستقبال في المطار، النقل إلى الفندق، وقت حر.
                                </div>
                                <div class="day">
                                    <strong>اليوم الثاني:</strong> جولات سياحية في المعالم الرئيسية.
                                </div>
                                <div class="day">
                                    <strong>الأيام التالية:</strong> جولات واستكشاف حسب البرنامج.
                                </div>
                                <div class="day">
                                    <strong>اليوم الأخير:</strong> وقت حر للتسوق، النقل إلى المطار، المغادرة.
                                </div>
                            </div>
                        </div>
                        
                        <!-- ملاحظات -->
                        <div class="notes">
                            <h6 class="section-title">ملاحظات هامة</h6>
                            <ul>
                                <li>الأسعار قابلة للتغيير حسب الموسم</li>
                                <li>يشترط وجود جواز سفر ساري المفعول</li>
                                <li>التأمين الصحي مشمول في الباقة</li>
                                <li>إمكانية التعديل على البرنامج حسب الرغبة</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn-close-modal" data-bs-dismiss="modal">
                            <i class="fas fa-times"></i> إغلاق
                        </button>
                        <button class="btn-share" data-id="${t.id}">
                            <i class="fas fa-share-alt"></i> مشاركة
                        </button>
                        <button class="btn-whatsapp-modal" data-id="${t.id}">
                            <i class="fab fa-whatsapp"></i> احجز عبر واتساب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
        document.getElementById("packageModal") && document.getElementById("packageModal").remove(), document.body.insertAdjacentHTML("beforeend", a);
        const i = new bootstrap.Modal(document.getElementById("packageModal"));
        i.show(), document.querySelector(".btn-whatsapp-modal").addEventListener("click", function () {
            y(e), i.hide()
        }), document.querySelector(".btn-share").addEventListener("click", function () {
            f(t)
        }), document.getElementById("packageModal").addEventListener("hidden.bs.modal", function () {
            this.remove()
        })
    }

    function f(e) {
        navigator.share ? navigator.share({
            title: e.title,
            text: `اكتشف هذه الباقة الرائعة من فورموست للسياحة: ${e.desc} - السعر: ${e.price}`,
            url: window.location.href
        }) : navigator.clipboard.writeText(window.location.href).then(() => {
            alert("\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0628\u0627\u0642\u0629!")
        })
    }

    function h(e, t) {
        const i = document.getElementById(e),
            n = document.getElementById(t);
        i && n && (i.addEventListener("input", function () {
            const e = this.value.toLowerCase().trim();
            if (n.innerHTML = "", "undefined" == typeof oe || 0 === oe.length || 2 > e.length) return void n.classList.remove("active");
            const t = oe.filter(t => t.iata_code && t.iata_code.toLowerCase().includes(e) || t.city && t.city.toLowerCase().includes(e) || t.country && t.country.toLowerCase().includes(e) || t.name && t.name.toLowerCase().includes(e)).slice(0, 10);
            0 < t.length ? (n.classList.add("active"), t.forEach(t => {
                const e = document.createElement("li");
                e.innerHTML = `
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">${t.city}, ${t.country}</span>
                                <small class="text-muted" style="font-size: 0.8rem;">
                                    <i class="fas fa-plane-departure me-1"></i> ${t.name}
                                </small>
                            </div>
                            <span class="iata-badge bg-primary text-white shadow-sm" style="padding: 4px 8px; border-radius: 6px;">${t.iata_code}</span>
                        </div>
                    `, e.addEventListener("click", a => {
                    a.stopPropagation(), i.value = `${t.city} (${t.iata_code})`, n.classList.remove("active"), n.innerHTML = ""
                }), n.appendChild(e)
            })) : n.classList.remove("active")
        }), document.addEventListener("click", t => {
            t.target !== i && t.target !== n && n.classList.remove("active")
        }))
         // [استخدم الدالة الجديدة هنا]
        i.addEventListener("blur", function() {
            validateLocationInputWithToast(i, t);
        });
    }

    function p(e, t) {
        const a = document.getElementById(e),
            i = document.getElementById(t);
        if (!a || !i) return;
        let n;
        a.addEventListener("input", function () {
            clearTimeout(n);
            const e = this.value.trim();
            return 2 > e.length ? (i.classList.remove("active"), void(i.innerHTML = "")) : void(n = setTimeout(() => {
                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${e}&addressdetails=1&limit=10&accept-language=ar,en`).then(e => e.json()).then(e => {
                    i.innerHTML = "", 0 < e.length ? (i.classList.add("active"), e.forEach(e => {
                        const t = document.createElement("li");
                        let n = e.name || e.display_name.split(",")[0],
                            l = e.address.country || "",
                            d = e.address.state || e.address.region || e.address.city || "";
                        t.innerHTML = `
                                    <div class="d-flex align-items-center">
                                        <div class="bg-light rounded-circle p-2 me-2 text-danger">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">${n}</span>
                                            <small class="text-muted" style="font-size: 0.75rem;">
                                                ${d?d+"\u060C ":""} ${l}
                                            </small>
                                        </div>
                                    </div>
                                `, t.addEventListener("click", t => {
                            t.stopPropagation(), a.value = `${n}، ${l}`, i.classList.remove("active"), i.innerHTML = "", i.style.display = "none", setTimeout(() => i.style.display = "", 200)
                        }), i.appendChild(t)
                    })) : i.classList.remove("active")
                }).catch(e => {
                    console.log("Search Error:", e), i.classList.remove("active")
                })
            }, 300))
        }), document.addEventListener("click", function (t) {
            t.target !== a && t.target !== i && (i.classList.remove("active"), i.innerHTML = "")
        })
          // [استخدم الدالة الجديدة هنا]
    a.addEventListener("blur", function() {
        validateLocationInputWithToast(a, t);
    });
    }

    function E(e) {
        Swal.fire({
            title: "\u26A0\uFE0F \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
            text: e,
            icon: "error",
            confirmButtonText: "\u062A\u0635\u062D\u064A\u062D",
            confirmButtonColor: "#dc3545"
        })
    }

    function I(e, t) {
        e.innerHTML = t, e.disabled = !1
    }

    function B() {
        const e = document.getElementById("fFrom").value.trim(),
            t = document.getElementById("fTo").value.trim(),
            a = document.getElementById("fDepart").value.trim(),
            i = document.getElementById("fAdults").value,
            n = document.getElementById("fKids").value,
            l = document.getElementById("fInfants").value;
        if (!e) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u0629 \u0645\u0637\u0644\u0648\u0628"
        };
        if (!t) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0645\u0643\u0627\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0645\u0637\u0644\u0648\u0628"
        };
        if (!a) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631 \u0645\u0637\u0644\u0648\u0628"
        };
        const d = Validator.validatePassengers(i, n, l, "\u0637\u064A\u0631\u0627\u0646");
        if (!d.isValid) return d;
        const s = document.querySelectorAll("#dynamic-dob-container input.dob-picker");
        for (let e of s)
            if (!e.value) return {
                isValid: !1,
                message: "\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"
            };
        return {
            isValid: !0,
            message: ""
        }
    }

    function b() {
        const e = document.getElementById("hCity").value.trim(),
            t = document.getElementById("hCheckIn").value.trim(),
            a = document.getElementById("hCheckOut").value.trim(),
            i = document.getElementById("hAdults").value,
            n = document.getElementById("hKids").value,
            l = document.getElementById("hInfants").value;
        if (!e) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0627\u0644\u0648\u062C\u0647\u0629 \u0627\u0644\u0641\u0646\u062F\u0642\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"
        };
        if (!t) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0637\u0644\u0648\u0628"
        };
        if (!a) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0637\u0644\u0648\u0628"
        };
        const d = Validator.validatePassengers(i, n, l, "\u0641\u0646\u0627\u062F\u0642");
        if (!d.isValid) return d;
        const s = document.querySelectorAll("#hotel-dynamic-dob-container input.hotel-dob-picker");
        for (let e of s)
            if (!e.value) return {
                isValid: !1,
                message: "\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"
            };
        return {
            isValid: !0,
            message: ""
        }
    }

    function L() {
        const e = document.getElementById("trOrigin").value,
            t = document.getElementById("trDest").value,
            a = document.getElementById("trDate").value,
            i = document.getElementById("tAdults").value,
            n = document.getElementById("tKids").value,
            l = document.getElementById("tInfants").value;
        if (!e) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0645\u0637\u0644\u0648\u0628\u0629"
        };
        if (!t) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629"
        };
        if (!a) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u062D\u0644\u0629 \u0645\u0637\u0644\u0648\u0628"
        };
        if (e === t) return {
            isValid: !1,
            message: "\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0648\u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646\u0627 \u0645\u062E\u062A\u0644\u0641\u062A\u064A\u0646"
        };
        const d = Validator.validatePassengers(i, n, l, "\u0642\u0637\u0627\u0631\u0627\u062A");
        if (!d.isValid) return d;
        const s = document.querySelectorAll("#train-dynamic-dob-container input.train-dob-picker");
        for (let e of s)
            if (!e.value) return {
                isValid: !1,
                message: "\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"
            };
        return {
            isValid: !0,
            message: ""
        }
    }

    function k() {
        const e = document.getElementById("carPickLoc").value,
            t = document.getElementById("carDropLoc").value,
            a = document.getElementById("carPickDate").value,
            i = document.getElementById("carDropDate").value,
            n = document.getElementById("carPickTime").value,
            l = document.getElementById("carDropTime").value,
            d = [];
        return e || d.push("\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0645\u0637\u0644\u0648\u0628"), t || d.push("\u0645\u0648\u0642\u0639 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0645\u0637\u0644\u0648\u0628"), a || d.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0645\u0637\u0644\u0648\u0628"), i || d.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0645\u0637\u0644\u0648\u0628"), 0 < d.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F " + d.join("\u060C ")
        } : {
            isValid: !0,
            message: ""
        }
    }

    function D() {
        const e = document.getElementById("pkgDest").value,
            t = document.getElementById("pkgDate").value,
            a = document.getElementById("pkgDuration").value,
            i = [];
        return (!e || 2 > e.length) && i.push("\u0627\u0644\u0648\u062C\u0647\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"), t || i.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631 \u0645\u0637\u0644\u0648\u0628"), (!a || 1 > parseInt(a)) && i.push("\u0627\u0644\u0645\u062F\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644"), 0 < i.length ? {
            isValid: !1,
            message: "\u26A0\uFE0F " + i.join("\u060C ")
        } : {
            isValid: !0,
            message: ""
        }
    }

    function C() {
        const e = document.querySelector("input[name=\"flightType\"]:checked"),
            t = e ? e.value : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            a = document.getElementById("fFrom").value.trim(),
            i = document.getElementById("fTo").value.trim(),
            n = document.getElementById("fDepart").value.trim(),
            l = document.getElementById("fReturnDate").value.trim() || "\u0644\u0627 \u064A\u0648\u062C\u062F",
            d = document.getElementById("fClass").value,
            s = document.getElementById("fAdults").value,
            r = document.getElementById("fKids").value,
            o = document.getElementById("fInfants").value,
            c = parseInt(s) + parseInt(r) + parseInt(o);
        return `✈️ *نوع الرحلة:* ${t}
🗺️ *المسار الأساسي:* ${a} ⬅️ ${i}
📅 *تاريخ الذهاب:* ${n}
📅 *تاريخ العودة:* ${"\u0630\u0647\u0627\u0628 \u0648\u0639\u0648\u062F\u0629"===t?l:"\u0644\u0627 \u064A\u0648\u062C\u062F"}
💺 *درجة التذكرة:* ${d}

👥 *تفاصيل المسافرين:*
• 👨‍💼 البالغين (+12 سنة): ${s} مسافر
• 👶 الأطفال (2-11 سنة): ${r} مسافر
• 🍼 الرضع (0-2 سنة): ${o} مسافر
• ✅ *الإجمالي:* ${c} مسافر`
    }

    function S() {
        const e = document.getElementById("hCity").value.trim(),
            t = document.getElementById("hCheckIn").value.trim(),
            a = document.getElementById("hCheckOut").value.trim(),
            i = document.getElementById("hRooms").value,
            n = document.getElementById("hRoomType").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            l = document.getElementById("hBoardType").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            d = document.querySelector("input[name=\"hotelStars\"]:checked"),
            s = d ? `${d.value} نجوم` : "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            r = document.getElementById("hAdults").value,
            o = document.getElementById("hKids").value,
            c = document.getElementById("hInfants").value,
            g = parseInt(r) + parseInt(o) + parseInt(c);
        return `🏨 *الوجهة:* ${e||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}
📅 *فترة الإقامة:* ${t||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"} ➡️ ${a||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}
🏢 *عدد الغرف:* ${i} غرفة
🛏️ *نوع الغرفة:* ${n}
🍽️ *نوع الإقامة:* ${l}
⭐ *تصنيف الفندق:* ${s}

👥 *تفاصيل المسافرين:*
• البالغين: ${r} مسافر
• الأطفال: ${o} مسافر
• الرضع: ${c} مسافر
• إجمالي المسافرين: ${g}`
    }

    function A() {
        const e = document.getElementById("carPickLoc").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            t = document.getElementById("carDropLoc").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            a = document.getElementById("carPickDate").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            i = document.getElementById("carPickTime").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            n = document.getElementById("carDropDate").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            l = document.getElementById("carDropTime").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            d = document.getElementById("carCategory").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            s = document.getElementById("carDriverAge").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";
        return `🚗 *نوع الخدمة:* تأجير سيارة
📍 *موقع الاستلام:* ${e}
📅 *تاريخ/وقت الاستلام:* ${a} - ${i}
📍 *موقع التسليم:* ${t}
📅 *تاريخ/وقت التسليم:* ${n} - ${l}
🎯 *فئة السيارة:* ${d}
👨‍✈️ *عمر السائق:* ${s}`
    }

    function x() {
        const e = document.getElementById("pkgDest").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            t = document.getElementById("pkgDate").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            a = document.getElementById("pkgDuration").value || "1",
            i = document.querySelector("input[name=\"pkgType\"]:checked")?.value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            n = document.getElementById("pkgBudget").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            l = document.getElementById("pkgFlightClass").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            d = document.getElementById("pkgHotelLevel").value || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            s = document.getElementById("incFlight")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627",
            r = document.getElementById("incHotel")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627",
            o = document.getElementById("incCar")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627",
            c = document.getElementById("incTransfers")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627",
            g = document.getElementById("incVisa")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627",
            u = document.getElementById("incGuide")?.checked ? "\u0646\u0639\u0645" : "\u0644\u0627";
        return `🎁 *نوع الرحلة:* ${i}
📍 *الوجهة:* ${e}
📅 *تاريخ السفر:* ${t}
⏱️ *المدة:* ${a} ليالي
💰 *الميزانية:* ${n}

✈️ *تذاكر الطيران:* ${s} (${l})
🏨 *الفنادق:* ${r} (${d})
🚗 *سيارة خاصة:* ${o}
🚐 *استقبال وتوديع:* ${c}
📋 *تأشيرات:* ${g}
👨‍🏫 *مرشد سياحي:* ${u}`
    }

    function M(e, t, a, i, n, l, d, maskedPassport, passportExp) {
    return `🌍 *طلب حجز جديد - FOREMOST TRAVELS* 🌍

═════════════════════════════════════════

👤 *البيانات الشخصية للمسؤول عن الحجز:*
• الاسم الكامل: ${e}
• الجنسية: ${t}
• رقم الهاتف: ${a}
• البريد الإلكتروني: ${i}
• رقم الجواز: ${maskedPassport} 🔒 (تم إخفاء باقي الرقم للأمان، يرجى كتابتة مرة اخرى)
• انتهاء الجواز: ${passportExp}

═════════════════════════════════════════
${n} *تفاصيل الحجز (${window.currentService}):*
${l}

═════════════════════════════════════════

📝 *ملاحظات إضافية:* ${d || "لا يوجد"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*FOREMOST TRAVELS - رحلتك بلمسة فاخرة*
📞 للاستفسار: +965 6586 5808
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*يرجى الرد بأفضل الأسعار والتفاصيل المطلوبة.* 🌹
*نتمنى لكم رحلة سعيدة!* ✈️🏨🚗`;
}

    function V() {
        const e = document.querySelector(".tab-pane.active");
        if (e) {
            const e = document.getElementById("formProgress");
            e && (e.style.width = `${50}%`, e.setAttribute("aria-valuenow", 50), e.textContent = `${50}%`)
        }
    }
    console.log("\u2705 \u0635\u0641\u062D\u0629 \u0641\u0648\u0631\u0645\u0648\u0633\u062A \u062C\u0627\u0647\u0632\u0629!");
    const w = document.getElementById("bgVideo"),
        F = ["./Foremost.mp4", "./0206_1_.mp4"];
    let q = 0;
    if (w) {
        function e() {
            q++, q >= F.length && (q = 0);
            const e = F[q];
            console.log(`🔄 جاري الانتقال للفيديو: ${e}`), w.src = "", w.src = e, w.load();
            const t = w.play();
            void 0 !== t && t.then(() => {
                console.log(`✅ تم تشغيل الفيديو بنجاح`)
            }).catch(e => {
                console.error(`❌ المتصفح منع التشغيل التلقائي:`, e)
            })
        }
        console.log("\uD83C\uDFAC \u062A\u0645 \u062A\u0647\u064A\u0626\u0629 \u0645\u0634\u063A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u062E\u0644\u0641\u064A"), w.muted = !0, w.playsInline = !0, w.addEventListener("ended", function () {
            console.log("\u23F9\uFE0F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0646\u062A\u0647\u0649."), e()
        }), w.addEventListener("error", function () {
            console.error("\uD83D\uDEAB \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 (\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0645\u0633\u0627\u0631):", w.error), e()
        })
    }
    const P = document.getElementById("hamburgerBtn"),
        H = document.getElementById("mobileNav"),
        O = document.getElementById("closeNavBtn"),
        N = document.querySelectorAll(".mob-link");

    // وظيفة فتح/إغلاق المنيو
    function t() {
        if (H && P) {
            H.classList.toggle("active");
            P.classList.toggle("active");
        }
    }

    // ربط الأحداث بالأزرار
    if (P) P.addEventListener("click", t);
    if (O) O.addEventListener("click", t);
    
    // إغلاق المنيو عند الضغط على أي رابط
    N.forEach(e => {
        e.addEventListener("click", () => {
            if (H && P) {
                H.classList.remove("active");
                P.classList.remove("active");
            }
        });
    });

    // إغلاق المنيو عند الضغط في أي مكان فاضي برا القائمة
    if (H) {
        H.addEventListener("click", a => {
            if (a.target === H) t();
        });
    }
    
    const _ = document.querySelector(".typewriter-text");
    if (_) {
        const e = _.getAttribute("data-text");
        if (e) {
            function t() {
                a < e.length && (_.innerHTML += e.charAt(a), a++, setTimeout(t, .3))
            }
            let a = 0;
            _.innerHTML = "", setTimeout(t, .3)
        }
    }
    const K = document.querySelectorAll(".stat-number");
    K.forEach(e => {
            const t = parseInt(e.getAttribute("data-count"));
            let a = 0;
            const i = () => {
                    a < t ? (a += t / 100, e.textContent = Math.floor(a).toLocaleString(), setTimeout(i, 20)) : e.textContent = t.toLocaleString()
                },
                n = new IntersectionObserver(e => {
                    e.forEach(e => {
                        e.isIntersecting && (i(), n.unobserve(e.target))
                    })
                });
            n.observe(e)
        }),
        function () {
            function e() {
                if (0 === n) {
                    if (0 === i) {
                        if (0 === a) return void(t.textContent = "\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0639\u0631\u0636");
                        a--, i = 59
                    } else i--;
                    n = 59
                } else n--;
                t.textContent = `${a.toString().padStart(2,"0")}:` + `${i.toString().padStart(2,"0")}:` + `${n.toString().padStart(2,"0")}`
            }
            const t = document.getElementById("offerTimer");
            if (!t) return;
            let a = 2,
                i = 15,
                n = 30;
            setInterval(e, 1e3)
        }(), document.querySelectorAll("a[href^=\"#\"]").forEach(e => {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                const e = this.getAttribute("href");
                if ("#" !== e) {
                    const t = document.querySelector(e);
                    t && window.scrollTo({
                        top: t.offsetTop - 80,
                        behavior: "smooth"
                    })
                }
            })
        });
    const Y = document.querySelector(".airplane-flying");
    if (Y) {
        function e() {
            t = (t + .5) % 200, Y.style.transform = `translateX(${t}%)`, requestAnimationFrame(e)
        }
        let t = -100;
        setTimeout(e, 2e3)
    }
    const j = document.querySelector(".globe-rotation i");
    if (j) {
        function e() {
            t += .2, j.style.transform = `rotate(${t}deg)`, requestAnimationFrame(e)
        }
        let t = 0;
        e()
    }
    document.addEventListener("DOMContentLoaded", function () {
        function e() {
            n < i.length && (a.textContent += i.charAt(n), n++, setTimeout(e, 100))
        }
        const t = document.querySelectorAll(".stat-number");
        t.forEach(e => {
            const t = parseInt(e.getAttribute("data-count"));
            let a = 0;
            const i = setInterval(() => {
                a += t / (2e3 / 16), a >= t && (a = t, clearInterval(i)), e.textContent = Math.floor(a).toLocaleString()
            }, 16)
        });
        const a = document.querySelector(".typewriter-text"),
            i = a.getAttribute("data-text");
        let n = 0;
        setTimeout(e, 500)
    });
    new Typed(".auto-type", {
        strings: ["Foremost Travel and Tourism ", "\u0641\u0648\u0631\u0645\u0648\u0633\u062A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631", "\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A\u0629", " \u0623\u062C\u0645\u0644 \u0648\u062C\u0647\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645", "\u062E\u062F\u0645\u0629 VIP \u0645\u0645\u064A\u0632\u0629"],
        typeSpeed: 60,
        backSpeed: 40,
        startDelay: 500,
        backDelay: 2e3,
        loop: !0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0
    });
    setInterval(a, 1e3), a();
    let R;
    window.currentService = "\u0637\u064A\u0631\u0627\u0646", window.setService = function (e) {
        window.currentService = e, console.log("\u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629:", e);
        const t = {
            طيران: "\u2708\uFE0F \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0645 \u0641\u064A \u062E\u062F\u0645\u0629 \u062D\u062C\u0632 \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0641\u0627\u062E\u0631\u0629",
            فنادق: "\uD83C\uDFE8 \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0641\u0646\u062F\u0642\u064A\u0629 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
            قطارات: "\uD83D\uDE86 \u0631\u062D\u0644\u0627\u062A \u0642\u0637\u0627\u0631\u0627\u062A \u0641\u0627\u062E\u0631\u0629 \u0639\u0628\u0631 \u0623\u0648\u0631\u0648\u0628\u0627 \u0648\u0627\u0644\u0639\u0627\u0644\u0645",
            سيارات: "\uD83D\uDE97 \u0627\u062D\u062C\u0632 \u0623\u0641\u0636\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0628\u0623\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0641\u0633\u064A\u0629",
            "باقة شاملة": "\uD83C\uDF81 \u0635\u0645\u0645 \u0631\u062D\u0644\u0629 \u0623\u062D\u0644\u0627\u0645\u0643 \u0645\u0639 \u062E\u0628\u0631\u0627\u0626\u0646\u0627"
        };
        t[e] && Swal.fire({
            title: t[e],
            icon: "info",
            timer: 2e3,
            showConfirmButton: !1,
            position: "top-end",
            toast: !0
        })
    }, "undefined" != typeof flatpickr && flatpickr("#uDob", {
        dateFormat: "Y-m-d",
        maxDate: "today",
        minDate: new Date(new Date().getFullYear() - 100, 0, 1),
        disableMobile: !0,
        locale: {
            firstDayOfWeek: 6,
            weekdays: {
                shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
            },
            months: {
                shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
            }
        }
    });
    window.setService = function (e) {
        window.currentService = e;
        console.log("الخدمة المختارة:", e);
        const messages = {
            طيران: "✈️ مرحباً بكم في خدمة حجز الطيران الفاخرة",
            فنادق: "🏨 استمتع بأفضل العروض الفندقية حول العالم",
            "عمرة مميزة": "🕋 عمرة مباركة بمعايير فاخرة - خطوات من الحرم",
            قطارات: "🚆 رحلات قطارات فاخرة عبر أوروبا والعالم",
            سيارات: "🚗 احجز أفضل السيارات بأسعار تنافسية",
            "باقة شاملة": "🎁 صمم رحلة أحلامك مع خبرائنا"
        };
        if (messages[e]) {
            Swal.fire({
                title: messages[e],
                icon: "info",
                timer: 2000,
                showConfirmButton: !1,
                position: "top-end",
                toast: !0,
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                color: "white",
                customClass: {
                    popup: 'swal2-toast'
                }
            })
        }
    };
    const W = document.querySelector("#uPhone");
    window.intlTelInput && W && (R = window.intlTelInput(W, {
        initialCountry: "kw",
        preferredCountries: ["kw", "sa", "eg", "qa", "ae"],
        separateDialCode: !0,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
    }));
    ["fName", "mName", "lName", "uEmail", "uPassportNum", "hCity", "trOrigin", "trDest", "carPickLoc", "carDropLoc", "pkgDest"].forEach(e => {
        const t = document.getElementById(e);
        t && (t.addEventListener("blur", function () {
            i(e, this.value)
        }), t.addEventListener("input", function () {
            0 === this.value.length && this.classList.remove("is-valid", "is-invalid")
        }))
    });
    const G = document.getElementById("uNationality");
    if (G) {
        let t = document.createElement("ul");
        t.className = "autocomplete-list", G.parentNode.appendChild(t), G.parentNode.style.position = "relative";
        let a = [];
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,translations").then(e => e.json()).then(e => {
            a = e.map(e => ({
                nameAr: e.translations.ara ? e.translations.ara.common : e.name.common,
                nameEn: e.name.common.toLowerCase(),
                flag: e.flags.svg
            })).sort((e, t) => e.nameAr.localeCompare(t.nameAr, "ar"))
        }).catch(e => console.log("Error loading nationalities:", e)), G.addEventListener("input", function () {
            const e = this.value.toLowerCase().trim();
            if (t.innerHTML = "", 1 > e.length) return void t.classList.remove("active");
            const n = a.filter(t => t.nameAr.includes(e) || t.nameEn.includes(e));
            0 < n.length ? (t.classList.add("active"), n.slice(0, 5).forEach(e => {
                const a = document.createElement("li");
                a.style.display = "flex", a.style.alignItems = "center", a.style.cursor = "pointer", a.style.padding = "10px", a.style.borderBottom = "1px solid #eee", a.innerHTML = `
                        <img src="${e.flag}" style="width: 25px; height: 18px; margin-left: 10px; border-radius: 2px; object-fit: cover;">
                        <span style="font-weight: bold; color: #0F2854;">${e.nameAr}</span>
                    `, a.addEventListener("click", function () {
                    G.value = e.nameAr, t.classList.remove("active"), t.innerHTML = "", i("uNationality", e.nameAr)
                }), t.appendChild(a)
            })) : t.classList.remove("active")
        }), document.addEventListener("click", function (a) {
            a.target !== G && t.classList.remove("active")
        })
    }
    const z = document.getElementById("fAdults"),
        J = document.getElementById("fKids"),
        Q = document.getElementById("fInfants"),
        U = document.getElementById("dynamic-dob-container");
    z && J && Q && (z.addEventListener("change", n), J.addEventListener("change", n), Q.addEventListener("change", n), n());
    const X = document.querySelectorAll("input[name=\"flightType\"]"),
        Z = document.getElementById("addRouteBtnContainer"),
        $ = document.getElementById("returnDateContainer"),
        ee = document.getElementById("multi-city-container");
    if (X.forEach(e => {
            e.addEventListener("change", function () {
                if ("\u0648\u062C\u0647\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629" === this.value) {
                    Z.style.display = "block", $.style.display = "none";
                    const e = document.getElementById("fReturnDate");
                    e && (e.value = "")
                } else Z.style.display = "none", ee.innerHTML = "", $.style.display = "\u0630\u0647\u0627\u0628 \u0648\u0639\u0648\u062F\u0629" === this.value ? "block" : "none"
            })
        }), window.addFlightRow = function () {
            const e = document.querySelectorAll(".route-card").length + 2,
                t = Math.floor(1e5 * Math.random()),
                a = `fFrom_${t}`,
                i = `fTo_${t}`,
                n = `res_fFrom_${t}`,
                l = `res_fTo_${t}`,
                d = `date_${t}`,
                s = document.createElement("div");
            s.className = "route-card shadow-sm mt-3 position-relative p-3 border rounded bg-light animate__animated animate__fadeIn", s.innerHTML = `
            <button type="button" class="btn-remove-route" onclick="this.parentElement.remove()" style="position: absolute; top: -10px; left: -10px; background: #dc3545; color: #fff; border-radius: 50%; width: 25px; height: 25px; border: none; z-index:10;">
                <i class="fas fa-times"></i>
            </button>
            <h6 class="text-primary small fw-bold mb-3">✈️ رحلة رقم ${e}</h6>
            <div class="row g-3 align-items-end">
                <div class="col-md-4 position-relative">
                    <label class="form-label small text-muted">من (مطار)</label>
                    <input type="text" class="form-control airport-search" id="${a}" placeholder="كود المطار" autocomplete="off">
                    <ul class="autocomplete-list shadow-lg" id="${n}"></ul>
                </div>
                <div class="col-md-4 position-relative">
                    <label class="form-label small text-muted">إلى (مطار)</label>
                    <input type="text" class="form-control airport-search" id="${i}" placeholder="كود المطار" autocomplete="off">
                    <ul class="autocomplete-list shadow-lg" id="${l}"></ul>
                </div>
                <div class="col-md-4">
                    <label class="form-label small text-muted">تاريخ الرحلة</label>
                    <input type="text" class="form-control date-picker new-date" id="${d}" placeholder="التاريخ">
                </div>
            </div>
        `, document.getElementById("multi-city-container").appendChild(s), "undefined" != typeof flatpickr && flatpickr(`#${d}`, {
                minDate: "today",
                dateFormat: "Y-m-d",
                locale: "ar",
                disableMobile: "true"
            }), window.setupAirportSearchGlobal ? (window.setupAirportSearchGlobal(a, n), window.setupAirportSearchGlobal(i, l)) : console.error("\u274C \u062F\u0627\u0644\u0629 \u0627\u0644\u0628\u062D\u062B \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0627\u0645!")
        }, window.changeRoomCount = function (e) {
            const t = document.getElementById("hRooms");
            if (!t) return;
            let a = parseInt(t.value) || 1,
                i = a + e;
            1 <= i && 10 >= i && (t.value = i, s(i))
        }, document.getElementById("hCheckIn")?.addEventListener("change", function () {
            r(), o()
        }), document.getElementById("hCheckOut")?.addEventListener("change", function () {
            r(), o()
        }), document.getElementById("hAdults")?.addEventListener("change", g), document.getElementById("hKids")?.addEventListener("change", g), document.getElementById("hInfants")?.addEventListener("change", g), c(), r(), g(), document.getElementById("tAdults")?.addEventListener("change", u), document.getElementById("tKids")?.addEventListener("change", u), document.getElementById("tInfants")?.addEventListener("change", u), u(), document.getElementById("carPickDate")?.addEventListener("change", function () {
            const e = document.getElementById("carDropDate");
            if (e && this.value) {
                const t = new Date(this.value);
                if (t.setDate(t.getDate() + 1), "undefined" != typeof flatpickr) {
                    const t = flatpickr(e, {
                        minDate: this.value,
                        dateFormat: "Y-m-d",
                        disableMobile: !0
                    });
                    t.set("minDate", this.value)
                }
            }
        }), document.getElementById("pkgDuration")?.addEventListener("input", m), document.getElementById("pkgBudget")?.addEventListener("change", m), document.getElementById("pkgFlightClass")?.addEventListener("change", m), document.getElementById("pkgHotelLevel")?.addEventListener("change", m), "undefined" != typeof Swiper && document.querySelector(".royalSwiper")) {
        const e = document.querySelector(".autoplay-timer circle"),
            t = document.querySelector(".autoplay-timer span"),
            a = new Swiper(".royalSwiper", {
                spaceBetween: 30,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                loop: !0,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                navigation: {
                    nextEl: ".royal-next-btn",
                    prevEl: ".royal-prev-btn"
                },
                pagination: {
                    el: ".royal-dots",
                    clickable: !0
                },
                on: {
                    autoplayTimeLeft(a, i, n) {
                        e && t && (e.style.setProperty("--progress", 1 - n), t.textContent = Math.ceil(i / 1e3) + "s")
                    }
                }
            })
    }



    // =========================================
// ✈️ نظام رحلات الطيران المباشر (من الصور)
// =========================================
document.addEventListener("DOMContentLoaded", function () {
    const directFlights = [
        {
            destination: "القاهرة",
            country: "مصر",
            frequency: "رحلات يومية (Daily)",
            image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=90&w=800", // يفضل تغيره لصورك
            tag: "طيران الجزيرة"
        },
        {
            destination: "دبي",
            country: "الإمارات",
            frequency: "رحلات يومية (Daily)",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=90&w=800",
            tag: "طيران مباشر"
        },
        {
            destination: "إسطنبول",
            country: "تركيا",
            frequency: "4 أيام بالأسبوع",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=90&w=800",
            tag: "مباشر لـ IST / SAW"
        },
        {
            destination: "عمان",
            country: "الأردن",
            frequency: "الإثنين، الثلاثاء، السبت",
            image: "https://images.unsplash.com/photo-1552750955-4c0eb6612716?q=90&w=800",
            tag: "طيران الجزيرة"
        },
        {
            destination: "بيروت",
            country: "لبنان",
            frequency: "الجمعة والأحد",
            image: "https://images.unsplash.com/photo-1562635957-c3132fc4ed23?q=90&w=800",
            tag: "طيران مباشر"
        },
        {
            destination: "مومباي",
            country: "الهند",
            frequency: "رحلات يومية (Daily)",
            image: "https://images.unsplash.com/photo-1529253355930-ddbe42f988d0?q=90&w=800",
            tag: "طيران مباشر"
        },
        {
            destination: "دلهي",
            country: "الهند",
            frequency: "4 أيام بالأسبوع",
            image: "https://images.unsplash.com/photo-1587474260580-589f36f33221?q=90&w=800",
            tag: "طيران مباشر"
        },
        {
            destination: "كوتشي",
            country: "الهند",
            frequency: "3 أيام بالأسبوع",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=90&w=800",
            tag: "طيران مباشر"
        }
    ];

    const container = document.getElementById("directFlightsContainer");
    
    if (container) {
        directFlights.forEach((flight, index) => {
            const delay = index * 0.1;
            const html = `
                <div class="col-lg-3 col-md-6 col-sm-12 animate__animated animate__fadeInUp" style="animation-delay: ${delay}s;">
                    <div class="flight-card-pro">
                        <div class="airline-tag"><i class="fas fa-plane text-primary me-1"></i> ${flight.tag}</div>
                        <img src="${flight.image}" alt="${flight.destination}" class="flight-card-img" loading="lazy">
                        
                        <div class="flight-card-content text-right">
                            <h3 class="flight-dest-name">${flight.destination}</h3>
                            <div class="flight-frequency">
                                <i class="far fa-calendar-alt"></i> ${flight.frequency}
                            </div>
                            
                            <div class="flight-details-hidden">
                                <div class="flight-badge">
                                    <i class="fas fa-map-marker-alt text-warning me-1"></i> من: مطار الكويت (KWI)
                                </div>
                                <button class="btn-flight-whatsapp" onclick="bookDirectFlight('${flight.destination}')">
                                    <i class="fab fa-whatsapp"></i> استفسر واحجز
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }

    // دالة إرسال الاستفسار الخاص بالطيران المباشر للواتساب
    window.bookDirectFlight = function(destination) {
        const whatsappNum = typeof COMPANY_NUMBER !== 'undefined' ? COMPANY_NUMBER : "96565865808";
        const message = `✈️ *استفسار عن طيران مباشر* ✈️\n\nمرحباً فورموست،\nأرغب في الاستفسار عن تفاصيل وأسعار رحلات الطيران المباشر من مطار الكويت إلى: *${destination}*\n\nيرجى تزويدي بأوقات الرحلات المتاحة وأفضل الأسعار. شكراً 🌹`;
        
        window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
    };
});

    const te = [{
            id: 1,
            title: "العمرة المميزة 🇸🇦",
            price: "79 د.ك",
            img: "./images/79c082a17b5b8d4b8cece700fa344199.avif",
            desc: "عمرة مميزة مع فندق 5 نجوم على بعد خطوات من الحرم المكي، نقل متميز.",
            duration: "٣ أيام",
            category: "عمرة",
            featured: !0,
            includes: ["تذكرة طيران", "فندق ٥ نجوم", "نقل فاخر", "مرشد ديني", "وجبات فاخرة"]
        }, {
            id: 2,
            title: "\u0645\u0635\u0631 | \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \uD83C\uDDEA\uD83C\uDDEC",
            price: "220 \u062F.\u0643",
            img: "./images/4079546d89edfdbd8329278d08e215e4.avif",
            desc: "\u0631\u062D\u0644\u0629 \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E \u0645\u0635\u0631: \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u0645\u062A\u062D\u0641 \u0627\u0644\u0645\u0635\u0631\u064A \u0627\u0644\u0643\u0628\u064A\u0631 \u0648\u0646\u0647\u0631 \u0627\u0644\u0646\u064A\u0644.",
            duration: "\u0667 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629", "\u0646\u0642\u0644 \u062E\u0627\u0635", "\u0645\u0631\u0634\u062F \u0633\u064A\u0627\u062D\u064A"]
        }, {
            id: 3,
            title: "\u062C\u062F\u0629 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \uD83C\uDDF8\uD83C\uDDE6",
            price: "180 \u062F.\u0643",
            img: "./images/0577f84053ebd78f9b59615b09cf6ed8.avif",
            desc: "\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u062C\u062F\u0629 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u0643\u0648\u0631\u0646\u064A\u0634 \u0645\u0639 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0623\u0635\u064A\u0644\u0629.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0645\u0645\u062A\u0627\u0632", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0628\u0644\u062F\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0645\u062D\u0644\u064A"]
        }, {
            id: 4,
            title: "\u0627\u0644\u0628\u062D\u0631\u064A\u0646 | \u0627\u0644\u0645\u0646\u0627\u0645\u0629 \uD83C\uDDE7\uD83C\uDDED",
            price: "160 \u062F.\u0643",
            img: "./images/3eb425504b4a144cc29688fad03837dd.avif",
            desc: "\u0632\u064A\u0627\u0631\u0629 \u0634\u062C\u0631\u0629 \u0627\u0644\u062D\u064A\u0627\u0629 \u0648\u0645\u062A\u062D\u0641 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u0648\u0637\u0646\u064A \u0648\u062C\u0633\u0631 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062F.",
            duration: "\u0663 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0627\u064A\u0629 \u0623\u0633\u0628\u0648\u0639",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629", "\u0639\u0634\u0627\u0621 \u0641\u064A \u0645\u0637\u0639\u0645 \u062F\u0648\u0627\u0631", "\u0646\u0642\u0644 \u062E\u0627\u0635"]
        }, {
            id: 5,
            title: "\u0639\u064F\u0645\u0627\u0646 | \u0645\u0633\u0642\u0637 \uD83C\uDDF4\uD83C\uDDF2",
            price: "280 \u062F.\u0643",
            img: "./images/5ad4c5b24b6f42e38a4f5db91ed57a05.avif",
            desc: "\u0627\u0643\u062A\u0634\u0641 \u0645\u0633\u0642\u0637 \u0628\u064A\u0646 \u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0634\u0648\u0627\u0637\u0626\u060C \u0645\u0639 \u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0645\u0646\u062A\u062C\u0639 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0628\u0627\u0644", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0639\u0645\u0627\u0646\u064A"]
        }, {
            id: 6,
            title: "\u062F\u0628\u064A | \u0627\u0644\u0623\u0628\u0631\u0627\u062C \uD83C\uDDE6\uD83C\uDDEA",
            price: "190 \u062F.\u0643",
            img: "./images/photo-1512453979798-5ea266f8880c.avif",
            desc: "\u062A\u062C\u0631\u0628\u0629 \u062F\u0628\u064A \u0628\u064A\u0646 \u0628\u0631\u062C \u062E\u0644\u064A\u0641\u0629 \u0648\u062F\u0628\u064A \u0645\u0648\u0644 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0628\u0631\u062C \u062E\u0644\u064A\u0641\u0629", "\u062C\u0648\u0644\u0627\u062A \u062A\u0633\u0648\u0642", "\u0639\u0634\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0627\u0644\u0641\u0627\u062E\u0631\u0629"]
        }, {
            id: 7,
            title: "\u062A\u0631\u0643\u064A\u0627 | \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \uD83C\uDDF9\uD83C\uDDF7",
            price: "320 \u062F.\u0643",
            img: "./images/photo-1524231757912-21f4fe3a7200.avif",
            desc: "\u0631\u062D\u0644\u0629 \u0628\u064A\u0646 \u0622\u064A\u0627 \u0635\u0648\u0641\u064A\u0627 \u0648\u0627\u0644\u0645\u0633\u062C\u062F \u0627\u0644\u0623\u0632\u0631\u0642 \u0648\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0636\u064A\u0642 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631.",
            duration: "\u0666 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u062A\u0631\u0643\u064A\u0629"]
        }, {
            id: 8,
            title: "\u0627\u0644\u0645\u0627\u0644\u062F\u064A\u0641 \uD83C\uDDF2\uD83C\uDDFB",
            price: "850 \u062F.\u0643",
            img: "./images/photo-1514282401047-d79a71a590e8.avif",
            desc: "\u0625\u0642\u0627\u0645\u0629 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0641\u064A\u0644\u0627 \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0621 \u0645\u0639 \u0634\u0627\u0637\u0626 \u062E\u0627\u0635 \u0648\u0623\u0646\u0634\u0637\u0629 \u0628\u062D\u0631\u064A\u0629.",
            duration: "\u0668 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", "\u0641\u064A\u0644\u0627 \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0621", "\u0625\u0642\u0627\u0645\u0629 \u0634\u0627\u0645\u0644\u0629", "\u0623\u0646\u0634\u0637\u0629 \u0628\u062D\u0631\u064A\u0629", "\u0645\u0633\u0627\u062C \u0633\u0628\u0627"]
        }, {
            id: 9,
            title: "\u0627\u0644\u064A\u0648\u0646\u0627\u0646 | \u0633\u0627\u0646\u062A\u0648\u0631\u064A\u0646\u064A \uD83C\uDDEC\uD83C\uDDF7",
            price: "720 \u062F.\u0643",
            img: "./images/photo-1570077188670-e3a8d69ac5ff.avif",
            desc: "\u0625\u0642\u0627\u0645\u0629 \u0641\u064A \u0641\u0646\u062F\u0642 \u0643\u0647\u0641\u064A \u0645\u0639 \u0625\u0637\u0644\u0627\u0644\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0628\u062D\u0631 \u0625\u064A\u062C\u0629.",
            duration: "\u0667 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0643\u0647\u0641\u064A \u0641\u0627\u062E\u0631", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629", "\u0639\u0634\u0627\u0621 \u0631\u0648\u0645\u0627\u0646\u0633\u064A", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0632\u0631"]
        }, {
            id: 10,
            title: "\u0634\u0631\u0645 \u0627\u0644\u0634\u064A\u062E \uD83C\uDDEA\uD83C\uDDEC",
            price: "250 \u062F.\u0643",
            img: "./images/photo-1590523741831-ab7e8b8f9c7f.avif",
            desc: "\u0627\u0633\u062A\u062C\u0645\u0627\u0645 \u0641\u064A \u0623\u0641\u0636\u0644 \u0645\u0646\u062A\u062C\u0639\u0627\u062A \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u062D\u0645\u0631 \u0645\u0639 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u063A\u0648\u0635 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0645\u0646\u062A\u062C\u0639 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u063A\u0648\u0635", "\u0646\u0642\u0644 \u062E\u0627\u0635", "\u0648\u062C\u0628\u0627\u062A \u0634\u0627\u0645\u0644\u0629"]
        }, {
            id: 11,
            title: "\u0628\u0627\u0631\u064A\u0633 | \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062D\u0628 \uD83C\uDDEB\uD83C\uDDF7",
            price: "550 \u062F.\u0643",
            img: "./images/photo-1502602898657-3e91760cbb34.avif",
            desc: "\u0631\u0648\u0645\u0627\u0646\u0633\u064A\u0629 \u0628\u0631\u062C \u0625\u064A\u0641\u0644 \u0648\u0634\u0648\u0627\u0631\u0639 \u0628\u0627\u0631\u064A\u0633 \u0645\u0639 \u062A\u062C\u0627\u0631\u0628 \u062B\u0642\u0627\u0641\u064A\u0629 \u0648\u0641\u0646\u064A\u0629 \u0644\u0627 \u062A\u0646\u0633\u0649.",
            duration: "\u0666 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0628\u0648\u062A\u064A\u0643", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u062A\u0627\u062D\u0641", "\u062C\u0648\u0644\u0629 \u0646\u0647\u0631 \u0627\u0644\u0633\u064A\u0646", "\u0639\u0634\u0627\u0621 \u0641\u064A \u0628\u0631\u062C \u0625\u064A\u0641\u0644"]
        }, {
            id: 12,
            title: "\u0644\u0646\u062F\u0646 | \u0627\u0644\u0639\u0627\u0635\u0645\u0629 \uD83C\uDDEC\uD83C\uDDE7",
            price: "480 \u062F.\u0643",
            img: "./images/photo-1513635269975-59663e0ac1ad.avif",
            desc: "\u0632\u064A\u0627\u0631\u0629 \u0642\u0635\u0631 \u0628\u0627\u0643\u0646\u062C\u0647\u0627\u0645 \u0648\u0639\u064A\u0646 \u0644\u0646\u062F\u0646 \u0648\u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u064A \u0623\u0643\u0633\u0641\u0648\u0631\u062F \u0633\u062A\u0631\u064A\u062A.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u0639\u0627\u0644\u0645", "\u0628\u0637\u0627\u0642\u0629 \u0645\u062A\u0631\u0648", "\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629"]
        }, {
            id: 13,
            title: "\u0628\u0631\u0634\u0644\u0648\u0646\u0629 \uD83C\uDDEA\uD83C\uDDF8",
            price: "420 \u062F.\u0643",
            img: "./images/photo-1583422409516-2895a77efded.avif",
            desc: "\u0641\u0646\u0648\u0646 \u063A\u0627\u0648\u062F\u064A \u0648\u0634\u0648\u0627\u0637\u0626 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0648\u062B\u0642\u0627\u0641\u0629 \u0643\u0627\u062A\u0627\u0644\u0648\u0646\u064A\u0627 \u0627\u0644\u0623\u0635\u064A\u0644\u0629.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632", "\u062A\u0630\u0627\u0643\u0631 \u0633\u0627\u063A\u0631\u0627\u062F\u0627 \u0641\u0627\u0645\u064A\u0644\u064A\u0627", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u064A \u0627\u0644\u0642\u0648\u0637\u064A", "\u062A\u0630\u0648\u0642 \u0627\u0644\u062A\u0627\u0628\u0627\u0633"]
        }, {
            id: 14,
            title: "\u0631\u0648\u0645\u0627 | \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062E\u0627\u0644\u062F\u0629 \uD83C\uDDEE\uD83C\uDDF9",
            price: "460 \u062F.\u0643",
            img: "./images/photo-1552832230-c0197dd311b5.avif",
            desc: "\u0631\u062D\u0644\u0629 \u0639\u0628\u0631 \u0627\u0644\u0632\u0645\u0646 \u0628\u064A\u0646 \u0627\u0644\u0643\u0648\u0644\u0648\u0633\u064A\u0648\u0645 \u0648\u0627\u0644\u0641\u0627\u062A\u064A\u0643\u0627\u0646 \u0648\u0646\u0648\u0627\u0641\u064A\u0631 \u062A\u0631\u064A\u0641\u064A.",
            duration: "\u0666 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u062A\u0627\u062D\u0641", "\u062C\u0648\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A"]
        }, {
            id: 15,
            title: "\u0623\u0628\u0648\u0638\u0628\u064A \uD83C\uDDE6\uD83C\uDDEA",
            price: "210 \u062F.\u0643",
            img: "./images//6ec9b4d47cd78c7b215e5ab973d767c0.avif",
            desc: "\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0645\u0633\u062C\u062F \u0627\u0644\u0634\u064A\u062E \u0632\u0627\u064A\u062F \u0648\u0645\u062A\u062D\u0641 \u0627\u0644\u0644\u0648\u0641\u0631 \u0623\u0628\u0648\u0638\u0628\u064A \u0648\u062C\u0632\u064A\u0631\u0629 \u064A\u0627\u0633.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0641\u0631\u0627\u0631\u064A\u062C", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062C\u062F \u0627\u0644\u0643\u0628\u064A\u0631", "\u0646\u0642\u0644 \u062E\u0627\u0635"]
        }, {
            id: 16,
            title: "\u0627\u0644\u0634\u0627\u0631\u0642\u0629 \uD83C\uDDE6\uD83C\uDDEA",
            price: "170 \u062F.\u0643",
            img: "./images//3eb425504b4a144cc29688fad03837dd.avif",
            desc: "\u0639\u0627\u0635\u0645\u0629 \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641\u0647\u0627 \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0633\u0648\u0642\u0647\u0627 \u0627\u0644\u062A\u0631\u0627\u062B\u064A.",
            duration: "\u0663 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0641", "\u062C\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062A\u0631\u0627\u062B\u064A", "\u0639\u0631\u0648\u0636 \u062B\u0642\u0627\u0641\u064A\u0629"]
        }, {
            id: 17,
            title: "\u0627\u0644\u0639\u064A\u0646 \uD83C\uDDE6\uD83C\uDDEA",
            price: "190 \u062F.\u0643",
            img: "./images/pexels-shane-hao-1271834262-23914732.avif",
            desc: "\u0648\u0627\u062D\u0627\u062A \u062E\u0636\u0631\u0627\u0621 \u0648\u062C\u0628\u0644 \u062D\u0641\u064A\u062A \u0645\u0639 \u062A\u062C\u0627\u0631\u0628 \u0637\u0628\u064A\u0639\u064A\u0629 \u0648\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0641\u0631\u064A\u062F\u0629.",
            duration: "\u0663 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0648\u0627\u062D\u0629", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u062D\u062F\u064A\u0642\u0629 \u0627\u0644\u0645\u0627\u0626\u064A\u0629", "\u062A\u0644\u0641\u0631\u064A\u0643 \u062C\u0628\u0644 \u062D\u0641\u064A\u062A", "\u0646\u0642\u0644 \u062E\u0627\u0635"]
        }, {
            id: 18,
            title: "\u0645\u0627\u0644\u064A\u0632\u064A\u0627 | \u0643\u0648\u0627\u0644\u0627\u0644\u0645\u0628\u0648\u0631 \uD83C\uDDF2\uD83C\uDDFE",
            price: "380 \u062F.\u0643",
            img: "./images/photo-1596422846543-75c6fc197f07.avif",
            desc: "\u0623\u0628\u0631\u0627\u062C \u0628\u062A\u0631\u0648\u0646\u0627\u0633 \u0648\u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0648\u0627\u0644\u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u062E\u0644\u0627\u0628\u0629.",
            duration: "\u0666 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0623\u0628\u0631\u0627\u062C", "\u062C\u0648\u0644\u0627\u062A \u062A\u0633\u0648\u0642", "\u0631\u062D\u0644\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062C\u0632\u0631"]
        }, {
            id: 19,
            title: "\u062A\u0627\u064A\u0644\u0627\u0646\u062F | \u0628\u0627\u0646\u0643\u0648\u0643 \uD83C\uDDF9\uD83C\uDDED",
            price: "320 \u062F.\u0643",
            img: "./images/photo-1563492065599-3520f775eeed.avif",
            desc: "\u0645\u0639\u0627\u0628\u062F \u0630\u0647\u0628\u064A\u0629 \u0648\u0623\u0633\u0648\u0627\u0642 \u0639\u0627\u0626\u0645\u0629 \u0648\u062A\u062C\u0627\u0631\u0628 \u0633\u064A\u0627\u062D\u064A\u0629 \u0644\u0627 \u062A\u0646\u062A\u0647\u064A.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0645\u063A\u0627\u0645\u0631\u0627\u062A",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0628\u062F", "\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0631\u064A\u0629", "\u062A\u062F\u0644\u064A\u0643 \u062A\u0627\u064A\u0644\u0627\u0646\u062F\u064A"]
        }, {
            id: 20,
            title: "\u0628\u0627\u0644\u064A | \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627 \uD83C\uDDEE\uD83C\uDDE9",
            price: "680 \u062F.\u0643",
            img: "./images/daaf881461295630396e2b76b4bcc514.avif",
            desc: "\u062C\u0646\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621 \u0645\u0639 \u0641\u064A\u0644\u0627\u062A \u062E\u0627\u0635\u0629 \u0648\u0634\u0648\u0627\u0637\u0626 \u062E\u0644\u0627\u0628\u0629 \u0648\u062B\u0642\u0627\u0641\u0629 \u0628\u0627\u0644\u064A\u0646\u064A\u0629 \u0623\u0635\u064A\u0644\u0629.",
            duration: "\u0668 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u064A\u0644\u0627 \u062E\u0627\u0635\u0629", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0628\u062F", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629", "\u062C\u0644\u0633\u0627\u062A \u0633\u0628\u0627"]
        }, {
            id: 21,
            title: "\u0633\u0648\u064A\u0633\u0631\u0627 | \u062C\u0628\u0627\u0644 \u0627\u0644\u0623\u0644\u0628 \uD83C\uDDE8\uD83C\uDDED",
            price: "890 \u062F.\u0643",
            img: "./images/photo-1506905925346-21bda4d32df4.avif",
            desc: "\u062A\u0632\u0644\u062C \u0641\u064A \u062C\u0628\u0627\u0644 \u0627\u0644\u0623\u0644\u0628 \u0627\u0644\u0633\u0648\u064A\u0633\u0631\u064A\u0629 \u0645\u0639 \u0625\u0637\u0644\u0627\u0644\u0627\u062A \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629 \u0644\u0627 \u0645\u062B\u064A\u0644 \u0644\u0647\u0627.",
            duration: "\u0667 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", "\u0645\u0646\u062A\u062C\u0639 \u062C\u0628\u0644\u064A", "\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u062A\u0632\u0644\u062C", "\u0631\u062D\u0644\u0627\u062A \u0642\u0637\u0627\u0631 \u062C\u0628\u0644\u064A", "\u0639\u0634\u0627\u0621 \u0641\u064A \u0627\u0644\u0642\u0645\u0645"]
        }, {
            id: 22,
            title: "\u0646\u064A\u0648\u064A\u0648\u0631\u0643 \uD83C\uDDFA\uD83C\uDDF8",
            price: "950 \u062F.\u0643",
            img: "./images/photo-1496442226666-8d4d0e62e6e9.avif",
            desc: "\u062A\u0627\u064A\u0645\u0632 \u0633\u0643\u0648\u064A\u0631 \u0648\u062A\u0645\u062B\u0627\u0644 \u0627\u0644\u062D\u0631\u064A\u0629 \u0648\u0628\u0631\u0648\u0633\u0628\u0643\u062A \u0628\u0627\u0631\u0643 \u0645\u0639 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0646\u0627\u0645.",
            duration: "\u0668 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062A\u0630\u0627\u0643\u0631 \u0628\u0631\u062C \u0627\u0644\u062D\u0631\u064A\u0629", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u062A\u0627\u062D\u0641", "\u0639\u0631\u0636 \u0628\u0631\u0648\u062F\u0648\u0627\u064A"]
        }, {
            id: 23,
            title: "\u0641\u064A\u0646\u064A\u0633\u064A\u0627 \uD83C\uDDEE\uD83C\uDDF9",
            price: "580 \u062F.\u0643",
            img: "./images/photo-1514890547357-a9ee288728e0.avif",
            desc: "\u0631\u0648\u0645\u0627\u0646\u0633\u064A\u0629 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u062C\u0646\u062F\u0648\u0644 \u0645\u0639 \u0641\u0646\u0648\u0646 \u0639\u0635\u0631 \u0627\u0644\u0646\u0647\u0636\u0629 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0627\u0644\u0641\u0631\u064A\u062F\u0629.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0642\u0646\u0627\u0629", "\u062C\u0648\u0644\u0629 \u062C\u0646\u062F\u0648\u0644", "\u0632\u064A\u0627\u0631\u0629 \u0642\u0635\u0631 \u0627\u0644\u062F\u0648\u062C", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A"]
        }, {
            id: 24,
            title: "\u0628\u0631\u0627\u063A \uD83C\uDDE8\uD83C\uDDFF",
            price: "340 \u062F.\u0643",
            img: "./images//0577f84053ebd78f9b59615b09cf6ed8.avif",
            desc: "\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0623\u0628\u0631\u0627\u062C \u0627\u0644\u0630\u0647\u0628\u064A\u0629 \u0648\u0627\u0644\u062C\u0633\u0648\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u0642\u0644\u0639\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u062A\u0627\u0631\u064A\u062E\u064A", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0642\u0644\u0639\u0629", "\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0631\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0628\u064A\u0631\u0629 \u0627\u0644\u062A\u0634\u064A\u0643\u064A\u0629"]
        }, {
            id: 25,
            title: "\u0631\u064A\u0648 \u062F\u064A \u062C\u0627\u0646\u064A\u0631\u0648 \uD83C\uDDE7\uD83C\uDDF7",
            price: "750 \u062F.\u0643",
            img: "./images/photo-1483729558449-99ef09a8c325.avif",
            desc: "\u062A\u0645\u062B\u0627\u0644 \u0627\u0644\u0645\u0633\u064A\u062D \u0627\u0644\u0641\u0627\u062F\u064A \u0648\u0634\u0648\u0627\u0637\u0626 \u0643\u0648\u0628\u0627\u0643\u0627\u0628\u0627\u0646\u0627 \u0648\u0643\u0648\u0631\u0643\u0648\u0641\u0627\u062F\u0648.",
            duration: "\u0667 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0645\u063A\u0627\u0645\u0631\u0627\u062A",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645", "\u062A\u0644\u0641\u0631\u064A\u0643 \u0643\u0648\u0631\u0643\u0648\u0641\u0627\u062F\u0648", "\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0634\u0648\u0627\u0637\u0626", "\u0639\u0631\u0648\u0636 \u0627\u0644\u0633\u0627\u0645\u0628\u0627"]
        }, {
            id: 26,
            title: "\u062A\u0627\u064A\u0644\u0627\u0646\u062F | \u0628\u0648\u0643\u064A\u062A \uD83C\uDDF9\uD83C\uDDED",
            price: "410 \u062F.\u0643",
            img: "./images/082ca6738f3248b4c0a6f2dd6695fae8.avif",
            desc: "\u0634\u0648\u0627\u0637\u0626 \u0628\u0648\u0643\u064A\u062A \u0627\u0644\u0630\u0647\u0628\u064A\u0629 \u0645\u0639 \u062C\u0648\u0644\u0627\u062A \u0625\u0644\u0649 \u062C\u0632\u0631 \u0641\u064A \u0641\u064A \u0648\u0641\u0627\u064A \u0648\u0641\u0627\u064A \u0627\u0644\u063A\u0627\u0631\u0642\u0629.",
            duration: "\u0666 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629",
            featured: !0,
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0645\u0646\u062A\u062C\u0639 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0637\u0626", "\u0631\u062D\u0644\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062C\u0632\u0631", "\u062C\u0648\u0644\u0627\u062A \u0628\u0627\u0644\u0642\u0648\u0627\u0631\u0628", "\u062A\u062F\u0644\u064A\u0643 \u062A\u0627\u064A\u0644\u0627\u0646\u062F\u064A"]
        }, {
            id: 27,
            title: "\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u0645\u0627\u0646\u0634\u0633\u062A\u0631 \u26BD",
            price: "440 \u062F.\u0643",
            img: "./images/4b0f141ea7f7af0a1b50ad266c05a640.avif",
            desc: "\u0639\u0627\u0635\u0645\u0629 \u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u064A\u0629.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u0631\u064A\u0627\u0636\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645", "\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0644\u0639\u0628 \u0623\u0648\u0644\u062F \u062A\u0631\u0627\u0641\u0648\u0631\u062F", "\u0632\u064A\u0627\u0631\u0629 \u0645\u062A\u062D\u0641 \u0627\u0644\u0639\u0644\u0648\u0645", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A"]
        }, {
            id: 28,
            title: "\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u0644\u064A\u0641\u0631\u0628\u0648\u0644 \uD83C\uDFB5",
            price: "420 \u062F.\u0643",
            img: "./images/7259276ac64180c5d336a8a5eac14841.avif",
            desc: "\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0628\u064A\u062A\u0644\u0632 \u0627\u0644\u0623\u0633\u0637\u0648\u0631\u064A\u0629 \u0648\u0627\u0644\u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A \u0645\u0639 \u0627\u0644\u062A\u0631\u0627\u062B \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A \u0627\u0644\u0641\u0631\u064A\u062F.",
            duration: "\u0664 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632", "\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0633\u0627\u0631 \u0627\u0644\u0628\u064A\u062A\u0644\u0632", "\u0632\u064A\u0627\u0631\u0629 \u0645\u062A\u062D\u0641 \u0627\u0644\u0628\u064A\u062A\u0644\u0632", "\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u064A\u0631\u0633\u064A\u0633\u0627\u064A\u062F"]
        }, {
            id: 29,
            title: "\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u064A\u0648\u0631\u0643 \uD83C\uDFF0",
            price: "380 \u062F.\u0643",
            img: "./images/6aa9b7922b0307ffa843427c5ab283f3.avif",
            desc: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0639\u062A\u064A\u0642\u0629 \u0645\u0639 \u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u064A\u0648\u0631\u0643 \u0645\u064A\u0646\u0633\u062A\u0631 \u0648\u0627\u0644\u0623\u0633\u0648\u0627\u0631 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629 \u0648\u0627\u0644\u0637\u0631\u0642\u0627\u062A \u0627\u0644\u0636\u064A\u0642\u0629.",
            duration: "\u0663 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629",
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u062A\u0631\u0627\u062B\u064A", "\u0632\u064A\u0627\u0631\u0629 \u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u064A\u0648\u0631\u0643", "\u062C\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0631 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629", "\u062A\u0630\u0648\u0642 \u0627\u0644\u0634\u0627\u064A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A"]
        }, {
            id: 30,
            title: "\u0627\u0633\u0628\u0627\u0646\u064A\u0627 | \u0645\u062F\u0631\u064A\u062F \uD83C\uDDEA\uD83C\uDDF8",
            price: "470 \u062F.\u0643",
            img: "./images/photo-1543785734-4b6e564642f8.avif",
            desc: "\u0639\u0627\u0635\u0645\u0629 \u0625\u0633\u0628\u0627\u0646\u064A\u0627 \u0627\u0644\u0646\u0627\u0628\u0636\u0629 \u0628\u0627\u0644\u062D\u064A\u0627\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641 \u0628\u0631\u0627\u062F\u0648 \u0627\u0644\u0634\u0647\u064A\u0631\u0629 \u0648\u0642\u0635\u0631 \u0627\u0644\u0645\u0644\u0643\u064A.",
            duration: "\u0665 \u0623\u064A\u0627\u0645",
            category: "\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",
            featured: !0,
            includes: ["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646", "\u0641\u0646\u062F\u0642 \u0641\u064A \u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u062F\u064A\u0646\u0629", "\u062A\u0630\u0627\u0643\u0631 \u0645\u062A\u062D\u0641 \u0628\u0631\u0627\u062F\u0648", "\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0642\u0635\u0631 \u0627\u0644\u0645\u0644\u0643\u064A", "\u0639\u0631\u0636 \u0641\u0644\u0627\u0645\u0646\u0643\u0648", "\u062A\u0630\u0648\u0642 \u0627\u0644\u062A\u0627\u0628\u0627\u0633"]
        }],
        ae = document.getElementById("allInclusiveContainer");
    if (ae) {
        const e = te.filter(e => e.featured),
            t = te.filter(e => !e.featured),
            a = [...e, ...t];
        ae.innerHTML = a.map(e => `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="package-card-simple" data-id="${e.id}">
                
                <div class="package-image-simple">
                    <img 
                        src="${e.img}" 
                        alt="${e.title}" 
                        loading="lazy"           
                        decoding="async"         
                        width="400"              
                        height="250"             
                        style="aspect-ratio: 400/250; object-fit: cover;"
                        onerror="this.src='https://placehold.co/400x250?text=No+Image'"
                    >
                    
                    ${e.featured?"<div class=\"featured-simple\">\u0645\u0645\u064A\u0632\u0629</div>":""}
                    <div class="price-simple">${e.price}</div>
                    <div class="duration-simple">${e.duration}</div>
                </div>
                
                <div class="package-content-simple">
                    <div class="category-simple">${e.category}</div>
                    <h3 class="title-simple">${e.title}</h3>
                    <p class="description-simple">${e.desc}</p>
                    
                    <div class="package-buttons">
                        <button class="btn-details" data-id="${e.id}">
                            <i class="fas fa-eye"></i> التفاصيل
                        </button>
                        <button class="btn-whatsapp" data-id="${e.id}">
                            <i class="fab fa-whatsapp"></i> واتساب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join("")
    }
    document.addEventListener("click", function (t) {
        if (t.target.closest(".btn-details")) {
            const e = t.target.closest(".btn-details"),
                a = parseInt(e.getAttribute("data-id"));
            v(a)
        }
        if (t.target.closest(".btn-whatsapp")) {
            const e = t.target.closest(".btn-whatsapp"),
                a = parseInt(e.getAttribute("data-id"));
            y(a)
        }
    });
    const ie = document.createElement("style");
    ie.textContent = `
/* تصميم البطاقات البسيط */
.package-card-simple {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 15px rgba(15, 40, 84, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    border: 1px solid #f0f0f0;
}

.package-card-simple:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(15, 40, 84, 0.15);
}

/* الصورة */
.package-image-simple {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.package-image-simple img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.package-card-simple:hover .package-image-simple img {
    transform: scale(1.05);
}

.featured-simple {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(135deg, #D4AF37, #FFD700);
    color: #0F2854;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: bold;
    z-index: 2;
}

.price-simple {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(15, 40, 84, 0.9);
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1.1rem;
}

.duration-simple {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    backdrop-filter: blur(5px);
}

/* المحتوى */
.package-content-simple {
    padding: 20px;
}

.category-simple {
    color: #4988C4;
    font-size: 0.8rem;
    margin-bottom: 8px;
    font-weight: 500;
    display: inline-block;
    background: rgba(73, 136, 196, 0.1);
    padding: 4px 12px;
    border-radius: 12px;
}

.title-simple {
    color: #0F2854;
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
    line-height: 1.4;
}

.description-simple {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 20px;
    height: 70px;
    overflow: hidden;
}

/* الأزرار */
.package-buttons {
    display: flex;
    gap: 10px;
}

.btn-details {
    background: #0F2854;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-details:hover {
    background: #1C4D8D;
    transform: translateY(-2px);
}

.btn-whatsapp {
    background: #25D366;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-2px);
}

/* تصميم المودال */
.modal-content {
    border-radius: 15px;
    border: none;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
    background: #0F2854;
    color: white;
    border-bottom: none;
    padding: 20px 25px;
}

.modal-title {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0;
}

.btn-close {
    filter: invert(1);
    opacity: 0.8;
}

.modal-body {
    padding: 25px;
}

.modal-image-container {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.modal-image-container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.image-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(15, 40, 84, 0.9), transparent);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-price {
    color: #FFD700;
    font-size: 2rem;
    font-weight: bold;
}

.modal-duration {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    font-weight: 500;
}

.section-title {
    color: #0F2854;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f0f0f0;
}

.included-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    background: #f8f9fa;
    border-radius: 8px;
}

.daily-program {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
}

.day {
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
    color: #555;
}

.day:last-child {
    border-bottom: none;
}

.notes ul {
    margin: 0;
    padding-left: 20px;
    color: #666;
}

.notes li {
    margin-bottom: 8px;
}

/* أزرار المودال */
.modal-footer {
    border-top: 1px solid #eee;
    padding: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn-close-modal {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    color: #666;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-close-modal:hover {
    background: #e9ecef;
}

.btn-share {
    background: #6c757d;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-share:hover {
    background: #5a6268;
}

.btn-whatsapp-modal {
    background: #25D366;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-whatsapp-modal:hover {
    background: #128C7E;
}

/* تنسيق للأجهزة المحمولة */
@media (max-width: 768px) {
    .package-image-simple {
        height: 180px;
    }
    
    .description-simple {
        height: auto;
    }
    
    .package-buttons {
        flex-direction: column;
    }
    
    .included-items {
        grid-template-columns: 1fr;
    }
    
    .modal-dialog {
        margin: 10px;
    }
    
    .modal-footer {
        flex-direction: column;
    }
    
    .btn-close-modal,
    .btn-share,
    .btn-whatsapp-modal {
        width: 100%;
        justify-content: center;
    }
}

/* فلتر الباقات */
#packagesFilter {
    margin-bottom: 30px;
    text-align: center;
}

.filter-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
}

.filter-btn {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    color: #666;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover {
    background: #e9ecef;
}

.filter-btn.active {
    background: #0F2854;
    color: white;
    border-color: #0F2854;
}
    
`, document.head.appendChild(ie), document.addEventListener("DOMContentLoaded", function () {
        if (ae) {
            ae.insertAdjacentHTML("beforebegin", "\n            <div class=\"row mb-4\" id=\"packagesFilter\">\n                <div class=\"col-12\">\n                    <h4 class=\"text-center mb-3\" style=\"color: #0F2854;\">\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0631\u062D\u0644\u062A\u0643</h4>\n                    <div class=\"filter-buttons\">\n                        <button class=\"filter-btn active\" data-filter=\"all\">\u0627\u0644\u0643\u0644</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0639\u0645\u0631\u0629\">\u0639\u0645\u0631\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u062D\u062C\">\u062D\u062C</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u062F\u064A\u0646\u064A\u0629\">\u062F\u064A\u0646\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629\">\u062B\u0642\u0627\u0641\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629\">\u0633\u064A\u0627\u062D\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629\">\u0641\u0627\u062E\u0631\u0629</button>\n                    </div>\n                </div>\n            </div>\n        "), document.querySelectorAll(".filter-btn").forEach(e => {
                e.addEventListener("click", function () {
                    document.querySelectorAll(".filter-btn").forEach(e => e.classList.remove("active")), this.classList.add("active");
                    const e = this.getAttribute("data-filter"),
                        t = document.querySelectorAll(".package-card-simple");
                    t.forEach(t => {
                        const a = parseInt(t.closest("[data-id]")?.getAttribute("data-id") || t.getAttribute("data-id")),
                            i = te.find(e => e.id === a);
                        i && ("all" === e ? t.style.display = "block" : t.style.display = i.category === e ? "block" : "none")
                    })
                })
            })
        }
    });
    const ne = document.getElementById("packageModal"),
        le = ne ? new bootstrap.Modal(ne) : null;
    document.addEventListener("click", function (t) {
        if (t.target && t.target.classList.contains("view-details-btn")) {
            t.preventDefault();
            const e = t.target.getAttribute("data-index"),
                a = te[e];
            if (a && le) {
                const e = document.getElementById("pkgModalTitle"),
                    t = document.getElementById("pkgModalDesc"),
                    i = document.getElementById("pkgModalPrice"),
                    n = document.getElementById("pkgModalImg"),
                    l = document.getElementById("pkgModalBtn");
                e && (e.innerText = a.title), t && (t.innerText = a.desc), i && (i.innerText = a.price), n && (n.src = a.img), l && l.setAttribute("data-offer", a.title), le.show()
            }
        }
        if (t.target && ("pkgModalBtn" === t.target.id || t.target.closest("#pkgModalBtn"))) {
            const e = "pkgModalBtn" === t.target.id ? t.target : t.target.closest("#pkgModalBtn"),
                a = e.getAttribute("data-offer");
            window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent("\uD83D\uDC4B \u0645\u0631\u062D\u0628\u0627\u064B *Foremost Travels*\u060C\n\n\u0623\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u062D\u062C\u0632:\n"+`🌟*${a}*🌟\n\n`+`يرجى تزويدي بالتفاصيل المتاحة.\n`+`شكراً لكم.🌹`)}`, "_blank")
        }
        if (t.target && (t.target.classList.contains("btn-royal-book") || t.target.closest(".btn-royal-book"))) {
            const e = t.target.classList.contains("btn-royal-book") ? t.target : t.target.closest(".btn-royal-book"),
                a = e.getAttribute("data-deal");
            window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent("\uD83D\uDC51 *\u0637\u0644\u0628 \u062D\u062C\u0632 \u0639\u0631\u0636 \u062E\u0627\u0635 (Limited)* \uD83D\uDC51\n-----------------------\n\u0623\u0646\u0627 \u0645\u0647\u062A\u0645 \u062C\u062F\u0627\u064B \u0628\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0627\u0644\u064A:\n"+`📌*${a}*\n\n`+`هل العرض ما زال متاحاً؟ يرجى الرد.`)}`, "_blank")
        }
    });
    const de = document.querySelectorAll("input[name=\"flightType\"]"),
        se = document.getElementById("fReturnDate"),
        re = document.getElementById("fReturnDateLabel");
    if (se && de.forEach(e => e.addEventListener("change", function () {
            "\u0630\u0647\u0627\u0628 \u0641\u0642\u0637" === this.value ? (se.style.visibility = "hidden", re.style.visibility = "hidden", se.style.pointerEvents = "none", re.style.pointerEvents = "none", se.value = "") : (se.style.visibility = "visible", se.style.pointerEvents = "auto", re.style.visibility = "visible", re.style.pointerEvents = "auto")
        })), "undefined" != typeof flatpickr) {
        const e = {
            minDate: "today",
            dateFormat: "Y-m-d",
            disableMobile: !0,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
                    longhand: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
                },
                months: {
                    shorthand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
                    longhand: ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
                }
            }
        };
        flatpickr(".date-picker", e);
        const t = flatpickr("#fReturnDate", e);
        flatpickr("#fDepart", {
            ...e,
            onChange: function (e, a) {
                t && (t.set("minDate", a), t.selectedDates[0] < e[0] && t.clear())
            }
        }), flatpickr("#hCheckIn", {
            ...e,
            onChange: function (e, t) {
                const a = flatpickr("#hCheckOut");
                a && a.set("minDate", t)
            }
        }), flatpickr("#hCheckOut", e), flatpickr("#trDate", e), flatpickr("#carPickDate", e), flatpickr("#carDropDate", e), flatpickr("#pkgDate", e)
    }
    let oe = [];
    const arabicAirports = [{
        "city": "الكويت",
        "country": "الكويت",
        "name": "مطار الكويت الدولي",
        "iata_code": "KWI"
    }, {
        "city": "القاهرة",
        "country": "مصر",
        "name": "مطار القاهرة الدولي",
        "iata_code": "CAI"
    }, {
        "city": "سوهاج",
        "country": "مصر",
        "name": "مطار سوهاج الدولي",
        "iata_code": "HMB"
    }, {
        "city": "الاسكندرية",
        "country": "مصر",
        "name": "مطار برج العرب الدولي",
        "iata_code": "HBE"
    }, {
        "city": "شرم الشيخ",
        "country": "مصر",
        "name": "مطار شرم الشيخ الدولي",
        "iata_code": "SSH"
    }, {
        "city": "دبي",
        "country": "الإمارات",
        "name": "مطار دبي الدولي",
        "iata_code": "DXB"
    }, {
        "city": "الشارقة",
        "country": "الإمارات",
        "name": "مطار الشارقة الدولي",
        "iata_code": "SHJ"
    }, {
        "city": "أبوظبي",
        "country": "الإمارات",
        "name": "مطار زايد الدولي",
        "iata_code": "AUH"
    }, {
        "city": "جدة",
        "country": "السعودية",
        "name": "مطار الملك عبدالعزيز الدولي",
        "iata_code": "JED"
    }, {
        "city": "الرياض",
        "country": "السعودية",
        "name": "مطار الملك خالد الدولي",
        "iata_code": "RUH"
    }, {
        "city": "المدينة المنورة",
        "country": "السعودية",
        "name": "مطار الأمير محمد بن عبدالعزيز الدولي",
        "iata_code": "MED"
    }, {
        "city": "الدمام",
        "country": "السعودية",
        "name": "مطار الملك فهد الدولي",
        "iata_code": "DMM"
    }, {
        "city": "الدوحة",
        "country": "قطر",
        "name": "مطار حمد الدولي",
        "iata_code": "DOH"
    }, {
        "city": "البحرين",
        "country": "البحرين",
        "name": "مطار البحرين الدولي",
        "iata_code": "BAH"
    }, {
        "city": "مسقط",
        "country": "عُمان",
        "name": "مطار مسقط الدولي",
        "iata_code": "MCT"
    }, {
        "city": "عمان",
        "country": "الأردن",
        "name": "مطار الملكة علياء الدولي",
        "iata_code": "AMM"
    }, {
        "city": "بيروت",
        "country": "لبنان",
        "name": "مطار رفيق الحريري الدولي",
        "iata_code": "BEY"
    }, {
        "city": "بغداد",
        "country": "العراق",
        "name": "مطار بغداد الدولي",
        "iata_code": "BGW"
    }, {
        "city": "اربيل",
        "country": "العراق",
        "name": "مطار اربيل الدولي",
        "iata_code": "EBL"
    }, {
        "city": "الخرطوم",
        "country": "السودان",
        "name": "مطار الخرطوم الدولي",
        "iata_code": "KRT"
    }, {
        "city": "الغردقة",
        "country": "مصر",
        "name": "مطار الغردقة الدولي",
        "iata_code": "HRG"
    }, {
        "city": "الأقصر",
        "country": "مصر",
        "name": "مطار الأقصر الدولي",
        "iata_code": "LXR"
    }, {
        "city": "أسوان",
        "country": "مصر",
        "name": "مطار أسوان الدولي",
        "iata_code": "ASW"
    }, {
        "city": "مرسى علم",
        "country": "مصر",
        "name": "مطار مرسى علم الدولي",
        "iata_code": "RMF"
    }, {
        "city": "العلمين",
        "country": "مصر",
        "name": "مطار العلمين الدولي",
        "iata_code": "DBB"
    }, {
        "city": "طابا",
        "country": "مصر",
        "name": "مطار طابا الدولي",
        "iata_code": "TCP"
    }, {
        "city": "سفنكس",
        "country": "مصر",
        "name": "مطار سفنكس الدولي",
        "iata_code": "SPX"
    }, {
        "city": "برج العرب",
        "country": "مصر",
        "name": "مطار برج العرب الدولي",
        "iata_code": "HBE"
    }, {
        "city": "شرم الشيخ",
        "country": "مصر",
        "name": "مطار شرم الشيخ الدولي",
        "iata_code": "SSH"
    }, {
        "city": "الغردقة",
        "country": "مصر",
        "name": "مطار الغردقة الدولي",
        "iata_code": "HRG"
    }, {
        "city": "مرسى مطروح",
        "country": "مصر",
        "name": "مطار مرسى مطروح الدولي",
        "iata_code": "MUH"
    }, {
        "city": "المنصورة",
        "country": "مصر",
        "name": "مطار المنصورة الدولي",
        "iata_code": "لم يتم التعيين"
    }, {
        "city": "اسطنبول",
        "country": "تركيا",
        "name": "مطار اسطنبول",
        "iata_code": "IST"
    }, {
        "city": "اسطنبول",
        "country": "تركيا",
        "name": "مطار صبيحة كوكجن",
        "iata_code": "SAW"
    }, {
        "city": "أنطاليا",
        "country": "تركيا",
        "name": "مطار أنطاليا",
        "iata_code": "AYT"
    }, {
        "city": "بودروم",
        "country": "تركيا",
        "name": "مطار بودروم",
        "iata_code": "BJV"
    }, {
        "city": "ازمير",
        "country": "تركيا",
        "name": "مطار ازمير",
        "iata_code": "ADB"
    }, {
        "city": "دالامان",
        "country": "تركيا",
        "name": "مطار دالامان",
        "iata_code": "DLM"
    }, {
        "city": "طرابزون",
        "country": "تركيا",
        "name": "مطار طرابزون",
        "iata_code": "TZX"
    }, {
        "city": "انقرة",
        "country": "تركيا",
        "name": "مطار انقرة",
        "iata_code": "ESB"
    }, {
        "city": "لندن",
        "country": "بريطانيا",
        "name": "مطار هيثرو",
        "iata_code": "LHR"
    }, {
        "city": "لندن",
        "country": "بريطانيا",
        "name": "مطار جاتويك",
        "iata_code": "LGW"
    }, {
        "city": "باريس",
        "country": "فرنسا",
        "name": "مطار شارل ديجول",
        "iata_code": "CDG"
    }, {
        "city": "روما",
        "country": "إيطاليا",
        "name": "مطار ليوناردو دافنشي",
        "iata_code": "FCO"
    }, {
        "city": "ميلانو",
        "country": "إيطاليا",
        "name": "مطار مالبينسا",
        "iata_code": "MXP"
    }, {
        "city": "برشلونة",
        "country": "إسبانيا",
        "name": "مطار برشلونة",
        "iata_code": "BCN"
    }, {
        "city": "مدريد",
        "country": "إسبانيا",
        "name": "مطار مدريد",
        "iata_code": "MAD"
    }, {
        "city": "امستردام",
        "country": "هولندا",
        "name": "مطار سخيبول",
        "iata_code": "AMS"
    }, {
        "city": "فرانكفورت",
        "country": "ألمانيا",
        "name": "مطار فرانكفورت",
        "iata_code": "FRA"
    }, {
        "city": "ميونخ",
        "country": "ألمانيا",
        "name": "مطار ميونخ",
        "iata_code": "MUC"
    }, {
        "city": "جنيف",
        "country": "سويسرا",
        "name": "مطار جنيف",
        "iata_code": "GVA"
    }, {
        "city": "زيورخ",
        "country": "سويسرا",
        "name": "مطار زيورخ",
        "iata_code": "ZRH"
    }, {
        "city": "فيينا",
        "country": "النمسا",
        "name": "مطار فيينا",
        "iata_code": "VIE"
    }, {
        "city": "بروكسل",
        "country": "بلجيكا",
        "name": "مطار بروكسل",
        "iata_code": "BRU"
    }, {
        "city": "اثينا",
        "country": "اليونان",
        "name": "مطار اثينا",
        "iata_code": "ATH"
    }, {
        "city": "بودابست",
        "country": "المجر",
        "name": "مطار بودابست",
        "iata_code": "BUD"
    }, {
        "city": "كوبنهاغن",
        "country": "الدنمارك",
        "name": "مطار كوبنهاغن",
        "iata_code": "CPH"
    }, {
        "city": "ستوكهولم",
        "country": "السويد",
        "name": "مطار ستوكهولم أرلاندا",
        "iata_code": "ARN"
    }, {
        "city": "أوسلو",
        "country": "النرويج",
        "name": "مطار أوسلو غاردرموين",
        "iata_code": "OSL"
    }, {
        "city": "هلسنكي",
        "country": "فنلندا",
        "name": "مطار هلسنكي فانتا",
        "iata_code": "HEL"
    }, {
        "city": "جدة",
        "country": "السعودية",
        "name": "مطار الملك عبدالعزيز الدولي",
        "iata_code": "JED"
    }, {
        "city": "الرياض",
        "country": "السعودية",
        "name": "مطار الملك خالد الدولي",
        "iata_code": "RUH"
    }, {
        "city": "المدينة المنورة",
        "country": "السعودية",
        "name": "مطار الأمير محمد بن عبدالعزيز الدولي",
        "iata_code": "MED"
    }, {
        "city": "الدمام",
        "country": "السعودية",
        "name": "مطار الملك فهد الدولي",
        "iata_code": "DMM"
    }, {
        "city": "أبها",
        "country": "السعودية",
        "name": "مطار أبها الدولي",
        "iata_code": "AHB"
    }, {
        "city": "الطائف",
        "country": "السعودية",
        "name": "مطار الطائف الدولي",
        "iata_code": "TIF"
    }, {
        "city": "بريدة",
        "country": "السعودية",
        "name": "مطار الأمير نايف بن عبدالعزيز الدولي",
        "iata_code": "ELQ"
    }, {
        "city": "تبوك",
        "country": "السعودية",
        "name": "مطار الأمير سلطان بن عبدالعزيز الدولي",
        "iata_code": "TUU"
    }, {
        "city": "حائل",
        "country": "السعودية",
        "name": "مطار حائل الدولي",
        "iata_code": "HAS"
    }, {
        "city": "الباحة",
        "country": "السعودية",
        "name": "مطار الملك سعود بن عبدالعزيز",
        "iata_code": "ABT"
    }, {
        "city": "جازان",
        "country": "السعودية",
        "name": "مطار الملك عبدالله بن عبدالعزيز",
        "iata_code": "GIZ"
    }, {
        "city": "نجران",
        "country": "السعودية",
        "name": "مطار نجران الإقليمي",
        "iata_code": "EAM"
    }, {
        "city": "الخرج",
        "country": "السعودية",
        "name": "مطار الأمير سلمان بن عبدالعزيز",
        "iata_code": "AKH"
    }, {
        "city": "القريات",
        "country": "السعودية",
        "name": "مطار القريات المحلي",
        "iata_code": "URY"
    }, {
        "city": "عرعر",
        "country": "السعودية",
        "name": "مطار عرعر المحلي",
        "iata_code": "RAE"
    }, {
        "city": "رفحاء",
        "country": "السعودية",
        "name": "مطار رفحاء المحلي",
        "iata_code": "RAH"
    }, {
        "city": "الدوادمي",
        "country": "السعودية",
        "name": "مطار الدوادمي المحلي",
        "iata_code": "DWD"
    }, {
        "city": "وادي الدواسر",
        "country": "السعودية",
        "name": "مطار وادي الدواسر المحلي",
        "iata_code": "WAE"
    }, {
        "city": "بيشة",
        "country": "السعودية",
        "name": "مطار بيشة المحلي",
        "iata_code": "BHH"
    }, {
        "city": "الوجه",
        "country": "السعودية",
        "name": "مطار الوجه المحلي",
        "iata_code": "EJH"
    }, {
        "city": "العلا",
        "country": "السعودية",
        "name": "مطار العلا الدولي",
        "iata_code": "ULH"
    }, {
        "city": "نيوم",
        "country": "السعودية",
        "name": "مطار نيوم",
        "iata_code": "NUM"
    }, {
        "city": "الاحساء",
        "country": "السعودية",
        "name": "مطار الاحساء الدولي",
        "iata_code": "HOF"
    }, {
        "city": "مدريد",
        "country": "إسبانيا",
        "name": "مطار مدريد باراخاس",
        "iata_code": "MAD"
    }, {
        "city": "برشلونة",
        "country": "إسبانيا",
        "name": "مطار برشلونة إل برات",
        "iata_code": "BCN"
    }, {
        "city": "بالما دي مايوركا",
        "country": "إسبانيا",
        "name": "مطار بالما دي مايوركا",
        "iata_code": "PMI"
    }, {
        "city": "مالقة",
        "country": "إسبانيا",
        "name": "مطار مالقة كوستا ديل سول",
        "iata_code": "AGP"
    }, {
        "city": "أليكانتي",
        "country": "إسبانيا",
        "name": "مطار أليكانتي إلتشي",
        "iata_code": "ALC"
    }, {
        "city": "إيبيزا",
        "country": "إسبانيا",
        "name": "مطار إيبيزا",
        "iata_code": "IBZ"
    }, {
        "city": "لانزاروت",
        "country": "إسبانيا",
        "name": "مطار لانزاروت",
        "iata_code": "ACE"
    }, {
        "city": "لاس بالماس",
        "country": "إسبانيا",
        "name": "مطار غران كناريا",
        "iata_code": "LPA"
    }, {
        "city": "تنريفي",
        "country": "إسبانيا",
        "name": "مطار تنريفي الجنوبي",
        "iata_code": "TFS"
    }, {
        "city": "تنريفي",
        "country": "إسبانيا",
        "name": "مطار تنريفي الشمالي",
        "iata_code": "TFN"
    }, {
        "city": "فوينتيفنتورا",
        "country": "إسبانيا",
        "name": "مطار فوينتيفنتورا",
        "iata_code": "FUE"
    }, {
        "city": "منوركا",
        "country": "إسبانيا",
        "name": "مطار منوركا",
        "iata_code": "MAH"
    }, {
        "city": "إشبيلية",
        "country": "إسبانيا",
        "name": "مطار إشبيلية",
        "iata_code": "SVQ"
    }, {
        "city": "بلباو",
        "country": "إسبانيا",
        "name": "مطار بلباو",
        "iata_code": "BIO"
    }, {
        "city": "فالنسيا",
        "country": "إسبانيا",
        "name": "مطار فالنسيا",
        "iata_code": "VLC"
    }, {
        "city": "خيرونا",
        "country": "إسبانيا",
        "name": "مطار خيرونا كوستا برافا",
        "iata_code": "GRO"
    }, {
        "city": "سانتياغو دي كومبوستيلا",
        "country": "إسبانيا",
        "name": "مطار سانتياغو",
        "iata_code": "SCQ"
    }, {
        "city": "مرسية",
        "country": "إسبانيا",
        "name": "مطار مرسية",
        "iata_code": "RMU"
    }, {
        "city": "جرانادا",
        "country": "إسبانيا",
        "name": "مطار جرانادا",
        "iata_code": "GRX"
    }, {
        "city": "جيريز دي لا فرونتيرا",
        "country": "إسبانيا",
        "name": "مطار جيريز",
        "iata_code": "XRY"
    }, {
        "city": "المرية",
        "country": "إسبانيا",
        "name": "مطار المرية",
        "iata_code": "LEI"
    }, {
        "city": "اوڤييدو",
        "country": "إسبانيا",
        "name": "مطار أستورياس",
        "iata_code": "OVD"
    }, {
        "city": "فايادوليذ",
        "country": "إسبانيا",
        "name": "مطار فايادوليذ",
        "iata_code": "VLL"
    }, {
        "city": "سرقسطة",
        "country": "إسبانيا",
        "name": "مطار سرقسطة",
        "iata_code": "ZAZ"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن هيثرو",
        "iata_code": "LHR"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن جاتويك",
        "iata_code": "LGW"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن ستانستيد",
        "iata_code": "STN"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن لوتون",
        "iata_code": "LTN"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن ساوث إند",
        "iata_code": "SEN"
    }, {
        "city": "لندن",
        "country": "إنجلترا",
        "name": "مطار لندن سيتي",
        "iata_code": "LCY"
    }, {
        "city": "مانشستر",
        "country": "إنجلترا",
        "name": "مطار مانشستر",
        "iata_code": "MAN"
    }, {
        "city": "برمنغهام",
        "country": "إنجلترا",
        "name": "مطار برمنغهام",
        "iata_code": "BHX"
    }, {
        "city": "ليفربول",
        "country": "إنجلترا",
        "name": "مطار ليفربول جون لينون",
        "iata_code": "LPL"
    }, {
        "city": "نيوكاسل",
        "country": "إنجلترا",
        "name": "مطار نيوكاسل",
        "iata_code": "NCL"
    }, {
        "city": "ليدز",
        "country": "إنجلترا",
        "name": "مطار ليدز برادفورد",
        "iata_code": "LBA"
    }, {
        "city": "برستل",
        "country": "إنجلترا",
        "name": "مطار برستل",
        "iata_code": "BRS"
    }, {
        "city": "نوتنغهام",
        "country": "إنجلترا",
        "name": "مطار نوتنغهام إيست ميدلاندز",
        "iata_code": "EMA"
    }, {
        "city": "شيفيلد",
        "country": "إنجلترا",
        "name": "مطار مدينة شيفيلد",
        "iata_code": "لم يتم التعيين"
    }, {
        "city": "دونكاستر",
        "country": "إنجلترا",
        "name": "مطار دونكاستر شيفيلد",
        "iata_code": "DSA"
    }, {
        "city": "ساوثهامبتون",
        "country": "إنجلترا",
        "name": "مطار ساوثهامبتون",
        "iata_code": "SOU"
    }, {
        "city": "بورنموث",
        "country": "إنجلترا",
        "name": "مطار بورنموث",
        "iata_code": "BOH"
    }, {
        "city": "نورويتش",
        "country": "إنجلترا",
        "name": "مطار نورويتش",
        "iata_code": "NWI"
    }, {
        "city": "هامبرسايد",
        "country": "إنجلترا",
        "name": "مطار هامبرسايد",
        "iata_code": "HUY"
    }, {
        "city": "إكستر",
        "country": "إنجلترا",
        "name": "مطار إكستر",
        "iata_code": "EXT"
    }, {
        "city": "نيوكواي",
        "country": "إنجلترا",
        "name": "مطار نيوكواي كورنوال",
        "iata_code": "NQY"
    }, {
        "city": "لاندس إند",
        "country": "إنجلترا",
        "name": "مطار لاندس إند",
        "iata_code": "LEQ"
    }, {
        "city": "كامبريدج",
        "country": "إنجلترا",
        "name": "مطار كامبريدج",
        "iata_code": "CBG"
    }, {
        "city": "دورهام",
        "country": "إنجلترا",
        "name": "مطار دورهام تيز فالي",
        "iata_code": "MME"
    }, {
        "city": "بانكوك",
        "country": "تايلاند",
        "name": "مطار سوفارنابومي",
        "iata_code": "BKK"
    }, {
        "city": "بوكيت",
        "country": "تايلاند",
        "name": "مطار بوكيت",
        "iata_code": "HKT"
    }, {
        "city": "كوالالمبور",
        "country": "ماليزيا",
        "name": "مطار كوالالمبور",
        "iata_code": "KUL"
    }, {
        "city": "لانكاوي",
        "country": "ماليزيا",
        "name": "مطار لانكاوي",
        "iata_code": "LGK"
    }, {
        "city": "سنغافورة",
        "country": "سنغافورة",
        "name": "مطار شانغي",
        "iata_code": "SIN"
    }, {
        "city": "دلهي",
        "country": "الهند",
        "name": "مطار انديرا غاندي",
        "iata_code": "DEL"
    }, {
        "city": "مومباي",
        "country": "الهند",
        "name": "مطار تشاتراباتي شيفاجي",
        "iata_code": "BOM"
    }, {
        "city": "جزر المالديف",
        "country": "المالديف",
        "name": "مطار فيلانا الدولي",
        "iata_code": "MLE"
    }, {
        "city": "دبي",
        "country": "الإمارات",
        "name": "مطار دبي الدولي",
        "iata_code": "DXB"
    }, {
        "city": "ابوظبي",
        "country": "الإمارات",
        "name": "مطار زايد الدولي",
        "iata_code": "AUH"
    }, {
        "city": "الدوحة",
        "country": "قطر",
        "name": "مطار حمد الدولي",
        "iata_code": "DOH"
    }, {
        "city": "مسقط",
        "country": "عمان",
        "name": "مطار مسقط الدولي",
        "iata_code": "MCT"
    }, {
        "city": "بيونغيانغ",
        "country": "كوريا الشمالية",
        "name": "مطار بيونغيانغ",
        "iata_code": "FNJ"
    }, {
        "city": "نيويورك",
        "country": "الولايات المتحدة",
        "name": "مطار جون إف كينيدي",
        "iata_code": "JFK"
    }, {
        "city": "لوس أنجلوس",
        "country": "الولايات المتحدة",
        "name": "مطار لوس أنجلوس",
        "iata_code": "LAX"
    }, {
        "city": "ميامي",
        "country": "الولايات المتحدة",
        "name": "مطار ميامي",
        "iata_code": "MIA"
    }, {
        "city": "سان فرانسيسكو",
        "country": "الولايات المتحدة",
        "name": "مطار سان فرانسيسكو",
        "iata_code": "SFO"
    }, {
        "city": "تورونتو",
        "country": "كندا",
        "name": "مطار تورونتو بيرسون",
        "iata_code": "YYZ"
    }, {
        "city": "فانكوفر",
        "country": "كندا",
        "name": "مطار فانكوفر",
        "iata_code": "YVR"
    }, {
        "city": "مدينة مكسيكو",
        "country": "المكسيك",
        "name": "مطار بينيتو خواريز",
        "iata_code": "MEX"
    }, {
        "city": "كانكون",
        "country": "المكسيك",
        "name": "مطار كانكون",
        "iata_code": "CUN"
    }, {
        "city": "سيدني",
        "country": "أستراليا",
        "name": "مطار سيدني",
        "iata_code": "SYD"
    }, {
        "city": "ملبورن",
        "country": "أستراليا",
        "name": "مطار ملبورن",
        "iata_code": "MEL"
    }, {
        "city": "الدار البيضاء",
        "country": "المغرب",
        "name": "مطار محمد الخامس",
        "iata_code": "CMN"
    }, {
        "city": "مراكش",
        "country": "المغرب",
        "name": "مطار مراكش",
        "iata_code": "RAK"
    }, {
        "city": "تونس",
        "country": "تونس",
        "name": "مطار تونس قرطاج",
        "iata_code": "TUN"
    }, {
        "city": "جربة",
        "country": "تونس",
        "name": "مطار جربة جرجيس",
        "iata_code": "DJE"
    }, {
        "city": "الجزائر",
        "country": "الجزائر",
        "name": "مطار هواري بومدين",
        "iata_code": "ALG"
    }, {
        "city": "طرابلس",
        "country": "ليبيا",
        "name": "مطار طرابلس",
        "iata_code": "TIP"
    }, {
        "city": "الخرطوم",
        "country": "السودان",
        "name": "مطار الخرطوم",
        "iata_code": "KRT"
    }, {
        "city": "جوهانسبرغ",
        "country": "جنوب أفريقيا",
        "name": "مطار أو آر تامبو",
        "iata_code": "JNB"
    }, {
        "city": "كيب تاون",
        "country": "جنوب أفريقيا",
        "name": "مطار كيب تاون",
        "iata_code": "CPT"
    }, {
        "city": "الرباط",
        "country": "المغرب",
        "name": "مطار الرباط",
        "iata_code": "RBA"
    }, {
        "city": "طنجة",
        "country": "المغرب",
        "name": "مطار طنجة",
        "iata_code": "TNG"
    }, {
        "city": "اكادير",
        "country": "المغرب",
        "name": "مطار اكادير المسيرة",
        "iata_code": "AGA"
    }, {
        "city": "فاس",
        "country": "المغرب",
        "name": "مطار فاس",
        "iata_code": "FEZ"
    }];
    fetch("https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json").then(e => e.json()).then(e => {
        const englishAirports = e.filter(airport => airport.iata_code && airport.iata_code.length === 3);
        oe = [...arabicAirports, ...englishAirports];
        console.log(`✅ تم تحميل ${oe.length} مطار (عربي وإنجليزي) بنجاح!`)
    }).catch(e => console.error("⚠️ خطأ في تحميل قاعدة بيانات المطارات:", e));
    window.setupAirportSearchGlobal = h;
    h("fFrom", "results-fFrom");
    h("fTo", "results-fTo");
    p("hCity", "results-hCity");
    p("trOrigin", "results-trOrigin");
    p("trDest", "results-trDest");
    p("carPickLoc", "results-carPickLoc");
    p("carDropLoc", "results-carDropLoc");
    p("pkgDest", "results-pkgDest");
   // =========================================
// كود الإرسال بعد إزالة بيانات الجواز من الرابط
// =========================================
const ce = document.getElementById("megaBookingForm");
if (ce) {
    console.log("✅ تم العثور على نموذج الحجز");
    ce.addEventListener("submit", function (t) {
        t.preventDefault();
        console.log("✅ زر الإرسال تم الضغط عليه!");

          // [التحقق من جميع حقول الأماكن مع Toast]
        if (!validateAllLocationInputs(true)) {
            // لو فى أخطاء، نوقف الإرسال
            return;
        }
        
        const e = this.querySelector("button[type=\"submit\"]"),
              a = e.innerHTML;
        e.innerHTML = "<i class=\"fas fa-spinner fa-spin me-2\"></i> جاري الإرسال...", e.disabled = !0;
        
        const i = document.getElementById("fName").value.trim(),
              n = document.getElementById("mName").value.trim(),
              l = document.getElementById("lName").value.trim(),
              d = document.getElementById("uEmail").value.trim();
              
        let s = "";
        if (typeof R !== 'undefined' && R && R.isValidNumber()) {
            s = R.getNumber();
        } else {
            const phoneInput = document.querySelector("#uPhone");
            s = phoneInput ? phoneInput.value : "";
        }
        
        // جلب رقم الجواز وتاريخ الانتهاء من الفورم
        const r = document.getElementById("uPassportNum").value.trim(),
              o = document.getElementById("uPassportExp").value.trim(),
              c = document.getElementById("uNationality").value.trim(),
              g = document.getElementById("uNotes").value.trim();
              
        // التشييكات (Validation)
        const u = Validator.validateFullName(i, n, l);
        if (!u.isValid) return E(u.message), void I(e, a);
        
        const m = Validator.validateEmail(d);
        if (!m.isValid) return E(m.message), void I(e, a);
        
        const y = Validator.validatePhone(s);
        if (!y.isValid) return E(y.message), void I(e, a);
        
        // تشييك الجواز (شغال عادي عشان يتأكد إن العميل دخله صح)
        const v = Validator.validatePassport(r, o);
        if (!v.isValid) return E(v.message), void I(e, a);
        
        if (!c || 2 > c.length) return E("⚠️ الجنسية مطلوبة"), void I(e, a);
        
        let f = { isValid: !0, message: "" };
       switch (window.currentService) {
            case "طيران": f = B(); break;
            case "فنادق": f = b(); break;
            case "قطارات": f = L(); break;
            case "سيارات": f = k(); break;
            case "باقة شاملة": f = D(); break;
            case "عمرة مميزة":
            case "عمرة":
                if (typeof validateUmrahForm === "function") { f = validateUmrahForm(); }
                else if (typeof validateUmrah === "function") { f = validateUmrah(); }
                break;
        }
        
        if (!f.isValid) return E(f.message || "⚠️ هناك خطأ في بيانات الخدمة المختارة"), void I(e, a);
        
        let h = "", p = "✈️";
        if ("طيران" === window.currentService) { p = "✈️"; h = C(); }
        else if ("فنادق" === window.currentService) { p = "🏨"; h = S(); }
        else if ("قطارات" === window.currentService) { p = "🚆"; h = T(); }
        else if ("سيارات" === window.currentService) { p = "🚗"; h = A(); }
        else if ("باقة شاملة" === window.currentService) { p = "🎁"; h = x(); }
        
        // 🔒 السر هنا: تشفير رقم الجواز قبل ما يتبعت للواتساب
        const maskedPassport = r.length > 3 ? r.substring(0, 2) + "******" : "****";
        
        // بناء الرسالة النهائية وبعتنا الـ maskedPassport بدل الـ r العادي
        const V = M(`${i} ${n} ${l}`, c, s, d, p, h, g, maskedPassport, o);
        
        console.log("📱 جاري فتح واتساب...");
        const w = `https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent(V)}`;
        
        setTimeout(() => {
            window.open(w, "_blank");
            I(e, a);
            Swal.fire({
                title: "✅ تم الإرسال بنجاح!",
                text: "سيتم التواصل معك قريباً عبر الواتساب",
                icon: "success",
                confirmButtonText: "حسناً",
                confirmButtonColor: "#0F2854"
            });
        }, 1e3);
    });
} document.getElementById("hCheckIn")?.addEventListener("change", function () {
        r(), o()
    }), document.getElementById("hCheckOut")?.addEventListener("change", function () {
        r(), o()
    }), document.getElementById("hAdults")?.addEventListener("change", g), document.getElementById("hKids")?.addEventListener("change", g), document.getElementById("hInfants")?.addEventListener("change", g), c(), r(), g(), document.getElementById("tAdults")?.addEventListener("change", u), document.getElementById("tKids")?.addEventListener("change", u), document.getElementById("tInfants")?.addEventListener("change", u), u(), z && J && Q && (z.addEventListener("change", n), J.addEventListener("change", n), Q.addEventListener("change", n), n()), document.querySelectorAll(".form-control").forEach(e => {
        e.addEventListener("focus", function () {
            this.parentElement.classList.add("focused")
        }), e.addEventListener("blur", function () {
            this.value || this.parentElement.classList.remove("focused")
        })
    }), document.querySelectorAll("input, select, textarea").forEach(e => {
        e.addEventListener("change", V), e.addEventListener("input", V)
    });
    const ge = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function () {
        400 < window.scrollY ? (ge.style.display = "block", setTimeout(() => {
            ge.classList.add("show")
        }, 10)) : (ge.classList.remove("show"), setTimeout(() => {
            ge.classList.contains("show") || (ge.style.display = "none")
        }, 400))
    }), ge.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
});
const bottomBar = document.querySelector('.floating-fab-container');
const footer = document.querySelector('footerm');
if (bottomBar && footer) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const isModalOpen = document.body.classList.contains('modal-open');
            if (entry.isIntersecting) {
                bottomBar.classList.add('hide-bar')
            } else if (!isModalOpen) {
                bottomBar.classList.remove('hide-bar')
            }
        })
    }, {
        threshold: 0.1
    });
    observer.observe(footer)
}
document.addEventListener('show.bs.modal', function () {
    if (bottomBar) bottomBar.classList.add('hide-bar');
});
document.addEventListener('hidden.bs.modal', function () {
    if (bottomBar && footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = (footerRect.top < window.innerHeight);
        if (!isFooterVisible) {
            bottomBar.classList.remove('hide-bar')
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const nameInputs = ['fName', 'mName', 'lName'];
    nameInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function () {
                if (/[^a-zA-Z\s]/.test(this.value)) {
                    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
                    Swal.fire({
                        toast: !0,
                        position: 'top-end',
                        icon: 'warning',
                        title: 'يرجى الكتابة باللغة الإنجليزية فقط (مطابق للجواز)',
                        showConfirmButton: !1,
                        timer: 2000
                    })
                }
                this.value = this.value.toUpperCase()
            })
        }
    });
    loadAirportsData();
    initUmrahAirportSearch();
    setupUmrahPassengerControls();
    setupUmrahDatePickers();
    updateUmrahDuration()
});
let airportsData = [];
async function loadAirportsData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json');
        const data = await response.json();
        airportsData = data.filter(airport => airport.iata_code && airport.iata_code.length === 3 && airport.city && airport.country);
        console.log(`✅ تم تحميل ${airportsData.length} مطار حول العالم`);
        window.airportsData = airportsData;
        initUmrahAirportSearch()
    } catch (error) {
        console.error('❌ خطأ في تحميل بيانات المطارات:', error);
        airportsData = [{
            iata_code: 'KWI',
            city: 'Kuwait City',
            country: 'Kuwait',
            name: 'Kuwait International Airport'
        }, {
            iata_code: 'JED',
            city: 'Jeddah',
            country: 'Saudi Arabia',
            name: 'King Abdulaziz International Airport'
        }, {
            iata_code: 'MED',
            city: 'Medina',
            country: 'Saudi Arabia',
            name: 'Prince Mohammad Bin Abdulaziz Airport'
        }, {
            iata_code: 'RUH',
            city: 'Riyadh',
            country: 'Saudi Arabia',
            name: 'King Khalid International Airport'
        }, {
            iata_code: 'DMM',
            city: 'Dammam',
            country: 'Saudi Arabia',
            name: 'King Fahd International Airport'
        }, {
            iata_code: 'DXB',
            city: 'Dubai',
            country: 'UAE',
            name: 'Dubai International Airport'
        }, {
            iata_code: 'AUH',
            city: 'Abu Dhabi',
            country: 'UAE',
            name: 'Abu Dhabi International Airport'
        }, {
            iata_code: 'DOH',
            city: 'Doha',
            country: 'Qatar',
            name: 'Hamad International Airport'
        }, {
            iata_code: 'BAH',
            city: 'Manama',
            country: 'Bahrain',
            name: 'Bahrain International Airport'
        }, {
            iata_code: 'MCT',
            city: 'Muscat',
            country: 'Oman',
            name: 'Muscat International Airport'
        }, {
            iata_code: 'CAI',
            city: 'Cairo',
            country: 'Egypt',
            name: 'Cairo International Airport'
        }, {
            iata_code: 'AMM',
            city: 'Amman',
            country: 'Jordan',
            name: 'Queen Alia International Airport'
        }, {
            iata_code: 'BEY',
            city: 'Beirut',
            country: 'Lebanon',
            name: 'Beirut–Rafic Hariri International Airport'
        }];
        window.airportsData = airportsData;
        initUmrahAirportSearch()
    }
}

function initUmrahAirportSearch() {
    const umrahFromInput = document.getElementById('umrahFrom');
    const umrahFromResults = document.getElementById('results-umrahFrom');
    if (!umrahFromInput || !umrahFromResults) return;
    let searchTimeout;
    umrahFromInput.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm.length < 2) {
            umrahFromResults.innerHTML = '';
            umrahFromResults.classList.remove('active');
            return
        }
        searchTimeout = setTimeout(() => {
            searchUmrahAirports(searchTerm, umrahFromResults, umrahFromInput)
        }, 300)
    });
    document.addEventListener('click', function (event) {
        if (!umrahFromInput.contains(event.target) && !umrahFromResults.contains(event.target)) {
            umrahFromResults.classList.remove('active')
        }
    });
    umrahFromInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const firstResult = umrahFromResults.querySelector('li');
            if (firstResult) {
                firstResult.click()
            }
        }
    })
      umrahFromInput.addEventListener('blur', function() {
        validateLocationInputWithToast(umrahFromInput, 'results-umrahFrom');
    });
}

function searchUmrahAirports(searchTerm, resultsContainer, inputElement) {
    if (!window.airportsData || window.airportsData.length === 0) {
        resultsContainer.innerHTML = '<li class="text-muted p-3">جاري تحميل بيانات المطارات...</li>';
        resultsContainer.classList.add('active');
        return
    }
    const filteredAirports = window.airportsData.filter(airport => {
        return (airport.iata_code && airport.iata_code.toLowerCase().includes(searchTerm)) || (airport.city && airport.city.toLowerCase().includes(searchTerm)) || (airport.name && airport.name.toLowerCase().includes(searchTerm)) || (airport.country && airport.country.toLowerCase().includes(searchTerm))
    }).slice(0, 8);
    displayUmrahAirportResults(filteredAirports, resultsContainer, inputElement)
}

function displayUmrahAirportResults(airports, resultsContainer, inputElement) {
    if (airports.length === 0) {
        resultsContainer.innerHTML = `
            <li class="text-muted p-3">
                <i class="fas fa-search me-2"></i>
                لم يتم العثور على مطارات مطابقة للبحث
            </li>`;
        resultsContainer.classList.add('active');
        return
    }
    resultsContainer.innerHTML = airports.map(airport => `
        <li class="airport-result-item p-3 border-bottom" 
            data-value="${airport.city} (${airport.iata_code})"
            data-iata="${airport.iata_code}"
            data-city="${airport.city}"
            data-country="${airport.country}">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <span class="d-block fw-bold text-dark mb-1">${airport.city}, ${airport.country}</span>
                    <small class="text-muted">
                        <i class="fas fa-plane-departure me-1"></i>
                        ${airport.name}
                    </small>
                </div>
                <span class="badge bg-primary px-3 py-2">${airport.iata_code}</span>
            </div>
        </li>
    `).join('');
    resultsContainer.classList.add('active');
    resultsContainer.querySelectorAll('.airport-result-item').forEach(item => {
        item.addEventListener('click', function () {
            const city = this.getAttribute('data-city');
            const iata = this.getAttribute('data-iata');
            const country = this.getAttribute('data-country');
            inputElement.value = `${city} (${iata})`;
            inputElement.setAttribute('data-iata', iata);
            inputElement.setAttribute('data-city', city);
            inputElement.setAttribute('data-country', country);
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
            resultsContainer.classList.remove('active');
            resultsContainer.innerHTML = '';
            showInputConfirmation('تم اختيار المطار بنجاح')
        })
    })
}

function showInputConfirmation(message) {
    const toast = Swal.mixin({
        toast: !0,
        position: 'top-end',
        showConfirmButton: !1,
        timer: 2000,
        timerProgressBar: !0,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    toast.fire({
        icon: 'success',
        title: message
    })
}

function setupUmrahPassengerControls() {
    const adultsSelect = document.getElementById('uAdults');
    const kidsSelect = document.getElementById('uKids');
    const infantsSelect = document.getElementById('uInfants');

    function updateUmrahPassengers() {
        const adults = parseInt(adultsSelect.value) || 0;
        const kids = parseInt(kidsSelect.value) || 0;
        const infants = parseInt(infantsSelect.value) || 0;
        const total = adults + kids + infants;
        console.log(`🔄 تحديث عدد المسافرين للعمرة: ${adults} بالغين، ${kids} أطفال، ${infants} رضع`);
        if (total > 9) {
            Swal.fire({
                icon: 'warning',
                title: 'حد المسافرين',
                text: 'عذراً، الحد الأقصى للمسافرين هو 9 أشخاص لكل خدمة. يرجى تقليل العدد.',
                confirmButtonText: 'حسناً',
                confirmButtonColor: '#0F2854',
                iconColor: '#C5A059'
            });
            adultsSelect.value = Math.min(adults, 9);
            kidsSelect.value = 0;
            infantsSelect.value = 0;
            updateUmrahPassengers();
            return
        }
        const dobContainer = document.getElementById('umrah-dynamic-dob-container');
        if (total > 0) {
            dobContainer.style.display = 'block';
            setTimeout(() => {
                generateUmrahDOBFields(adults, kids, infants)
            }, 100)
        } else {
            dobContainer.style.display = 'none'
        }
    }
    adultsSelect.addEventListener('change', updateUmrahPassengers);
    kidsSelect.addEventListener('change', updateUmrahPassengers);
    infantsSelect.addEventListener('change', updateUmrahPassengers);
    updateUmrahPassengers()
}

function generateUmrahDOBFields(adults, kids, infants) {
    const container = document.getElementById('umrah-dynamic-dob-container');
    if (!container) {
        console.error('❌ لم يتم العثور على حاوية تواريخ الميلاد للعمرة');
        return
    }
    let html = `
        <div class="row g-3 w-100">
            <h6 class="text-primary fw-bold border-bottom pb-2 mb-3 w-100">
                <i class="far fa-calendar-alt me-2"></i> تواريخ ميلاد المعتمرين (مطلوب)
            </h6>
    `;
    for (let i = 1; i <= adults; i++) {
        html += `
            <div class="col-md-4">
                <label class="small fw-bold text-muted">تاريخ ميلاد المعتمر ${i} (بالغ)</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fas fa-user"></i>
                    </span>
                    <input type="text" 
                           class="form-control umrah-dob-picker adult-dob" 
                           id="umrahAdultDob${i}"
                           placeholder="اختر التاريخ" 
                           required
                           readonly>
                </div>
                <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
            </div>
        `
    }
    for (let i = 1; i <= kids; i++) {
        html += `
            <div class="col-md-4">
                <label class="small fw-bold text-muted">تاريخ ميلاد الطفل ${i}</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fas fa-child"></i>
                    </span>
                    <input type="text" 
                           class="form-control umrah-dob-picker child-dob" 
                           id="umrahChildDob${i}"
                           placeholder="اختر التاريخ" 
                           required
                           readonly>
                </div>
                <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
            </div>
        `
    }
    for (let i = 1; i <= infants; i++) {
        html += `
            <div class="col-md-4">
                <label class="small fw-bold text-muted">تاريخ ميلاد الرضع ${i}</label>
                <div class="input-group">
                    <span class="input-group-text">
                        <i class="fas fa-baby"></i>
                    </span>
                    <input type="text" 
                           class="form-control umrah-dob-picker infant-dob" 
                           id="umrahInfantDob${i}"
                           placeholder="اختر التاريخ" 
                           required
                           readonly>
                </div>
                <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
            </div>
        `
    }
    html += '</div>';
    container.innerHTML = html;
    setTimeout(setupUmrahDOBDatePickers, 200)
}

function setupUmrahDOBDatePickers() {
    if (typeof flatpickr === 'undefined') {
        console.error('❌ مكتبة flatpickr غير محملة');
        setTimeout(setupUmrahDOBDatePickers, 200);
        return
    }
    const today = new Date();
    const currentYear = today.getFullYear();
    const arabicLocale = {
        firstDayOfWeek: 6,
        weekdays: {
            shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        months: {
            shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
        }
    };
    const adultPickers = document.querySelectorAll('.umrah-dob-picker.adult-dob');
    adultPickers.forEach(picker => {
        flatpickr(picker, {
            dateFormat: 'Y-m-d',
            maxDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
            minDate: new Date(currentYear - 100, 0, 1),
            disableMobile: !0,
            locale: arabicLocale,
            onChange: function (selectedDates, dateStr) {
                if (dateStr) {
                    this.element.classList.add('is-valid');
                    this.element.classList.remove('is-invalid')
                }
            }
        })
    });
    const childPickers = document.querySelectorAll('.umrah-dob-picker.child-dob');
    childPickers.forEach(picker => {
        flatpickr(picker, {
            dateFormat: 'Y-m-d',
            maxDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
            minDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
            disableMobile: !0,
            locale: arabicLocale,
            onChange: function (selectedDates, dateStr) {
                if (dateStr) {
                    this.element.classList.add('is-valid');
                    this.element.classList.remove('is-invalid')
                }
            }
        })
    });
    const infantPickers = document.querySelectorAll('.umrah-dob-picker.infant-dob');
    infantPickers.forEach(picker => {
        flatpickr(picker, {
            dateFormat: 'Y-m-d',
            maxDate: 'today',
            minDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
            disableMobile: !0,
            locale: arabicLocale,
            onChange: function (selectedDates, dateStr) {
                if (dateStr) {
                    this.element.classList.add('is-valid');
                    this.element.classList.remove('is-invalid')
                }
            }
        })
    });
    console.log(`✅ تم إعداد ${adultPickers.length + childPickers.length + infantPickers.length} تقويم لتواريخ الميلاد`)
}
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        setupUmrahPassengerControls();
        if (document.getElementById('umrahDepart') && typeof flatpickr !== 'undefined') {
            const arabicLocale = {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                    longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                months: {
                    shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                    longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                }
            };
            flatpickr('#umrahDepart', {
                minDate: 'today',
                dateFormat: 'Y-m-d',
                disableMobile: !0,
                locale: arabicLocale
            });
            const minReturnDate = new Date();
            minReturnDate.setDate(minReturnDate.getDate() + 7);
            flatpickr('#umrahReturn', {
                minDate: minReturnDate,
                dateFormat: 'Y-m-d',
                disableMobile: !0,
                locale: arabicLocale
            })
        }
    }, 500)
});
document.addEventListener('DOMContentLoaded', function () {
    const umrahTabBtn = document.querySelector('button[data-bs-target="#umrah-tab"]');
    const umrahTab = document.getElementById('umrah-tab');
    if (umrahTabBtn) {
        umrahTabBtn.addEventListener('click', function () {
            setTimeout(() => {
                setupUmrahPassengerControls()
            }, 300)
        })
    }
    if (typeof bootstrap !== 'undefined') {
        const tabEl = document.querySelector('#pills-tab button[data-bs-target="#umrah-tab"]');
        if (tabEl) {
            tabEl.addEventListener('shown.bs.tab', function () {
                console.log('🔄 تبويب العمرة ظهر، جاري تهيئة التحكم في المسافرين...');
                setTimeout(setupUmrahPassengerControls, 100)
            })
        }
    }
});
console.log('✅ تم تحميل إصلاحات قسم العمرة بنجاح');





// =========================================
// دالة عرض Toast Notifications (الرسايل المنبثقة)
// =========================================
function showValidationToast(message, type = 'warning') {
    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    toast.fire({
        icon: type,
        title: `${icons[type]} ${message}`,
        background: type === 'error' ? '#dc3545' : 
                    type === 'success' ? '#28a745' : 
                    type === 'warning' ? '#ffc107' : '#17a2b8',
        color: type === 'warning' ? '#000' : '#fff',
        iconColor: 'white'
    });
}

// =========================================
// دالة التحقق القوي جداً من أن المستخدم اختار من القائمة
// =========================================
// =========================================
// دالة التحقق من الحقول (تم حل مشكلة الحظر)
// =========================================
function validateLocationInput(inputElement, resultsListId, showToast = false) {
    const currentValue = inputElement.value.trim();
    const errorDivId = inputElement.id + '-error';
    let errorDiv = document.getElementById(errorDivId);

    // إنشاء عنصر الخطأ إذا لم يكن موجوداً
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = errorDivId;
        errorDiv.className = 'invalid-feedback';
        inputElement.parentNode.appendChild(errorDiv);
    }

    // الحصول على اسم الحقل (للاستخدام فى الرسالة)
    const fieldLabels = {
        'fFrom': 'مكان المغادرة',
        'fTo': 'مكان الوصول',
        'hCity': 'الوجهة الفندقية',
        'trOrigin': 'محطة الانطلاق',
        'trDest': 'محطة الوصول',
        'carPickLoc': 'موقع الاستلام',
        'carDropLoc': 'موقع التسليم',
        'pkgDest': 'الوجهة السياحية',
        'umrahFrom': 'مدينة المغادرة'
    };
    const fieldName = fieldLabels[inputElement.id] || 'هذا الحقل';

    // التحقق: إذا كان الحقل فارغاً أو أقل من حرفين
    if (currentValue === '' || currentValue.length < 2) {
        if (inputElement.hasAttribute('required')) {
            inputElement.classList.remove('is-valid');
            inputElement.classList.add('is-invalid');
            errorDiv.textContent = `⚠️ ${fieldName} مطلوب`;
            if (showToast) {
                showValidationToast(`${fieldName} مطلوب`, 'warning');
            }
        } else {
            inputElement.classList.remove('is-invalid', 'is-valid');
            errorDiv.textContent = '';
        }
        return false;
    }

    // طالما الحقل مكتوب فيه كلام (سواء اختار من القائمة أو كتب بإيده عربي/إنجليزي)، نعتبره صحيح
    inputElement.classList.remove('is-invalid');
    inputElement.classList.add('is-valid');
    errorDiv.textContent = '';
    return true;
}


// =========================================
// دالة التحقق من جميع الحقول مرة واحدة (مع Toast)
// =========================================
// =========================================
// دالة التحقق من الحقول المطلوبة للخدمة الحالية فقط (تم الإصلاح)
// =========================================
function validateAllLocationInputs(showToast = true) {
    // نحدد الحقول اللي هتتفحص بناءً على الخدمة المفتوحة حالياً فقط
    let activeFields = [];

    switch (window.currentService) {
        case "طيران":
            activeFields = [
                { id: 'fFrom', resultsId: 'results-fFrom' },
                { id: 'fTo', resultsId: 'results-fTo' }
            ];
            break;
        case "فنادق":
            activeFields = [
                { id: 'hCity', resultsId: 'results-hCity' }
            ];
            break;
        case "قطارات":
            activeFields = [
                { id: 'trOrigin', resultsId: 'results-trOrigin' },
                { id: 'trDest', resultsId: 'results-trDest' }
            ];
            break;
        case "سيارات":
            activeFields = [
                { id: 'carPickLoc', resultsId: 'results-carPickLoc' },
                { id: 'carDropLoc', resultsId: 'results-carDropLoc' }
            ];
            break;
        case "باقة شاملة":
            activeFields = [
                { id: 'pkgDest', resultsId: 'results-pkgDest' }
            ];
            break;
        case "عمرة مميزة":
        case "عمرة":
            activeFields = [
                { id: 'umrahFrom', resultsId: 'results-umrahFrom' }
            ];
            break;
        default:
            activeFields = []; 
    }

    let allValid = true;
    let firstInvalidField = null;
    let errorMessages = [];

    // أسماء الحقول لعرضها في رسالة الخطأ
    const fieldLabels = {
        'fFrom': 'مكان المغادرة',
        'fTo': 'مكان الوصول',
        'hCity': 'الوجهة الفندقية',
        'trOrigin': 'محطة الانطلاق',
        'trDest': 'محطة الوصول',
        'carPickLoc': 'موقع الاستلام',
        'carDropLoc': 'موقع التسليم',
        'pkgDest': 'الوجهة السياحية',
        'umrahFrom': 'مدينة المغادرة'
    };

    // فحص الحقول المطلوبة للخدمة الحالية فقط
    for (let field of activeFields) {
        const inputElement = document.getElementById(field.id);
        if (inputElement) {
            // التحقق إذا كان الحقل فارغ أو لم يتم الاختيار من القائمة
            const isValid = validateLocationInput(inputElement, field.resultsId, false); 
            if (!isValid) {
                allValid = false;
                if (!firstInvalidField) {
                    firstInvalidField = inputElement;
                }
                errorMessages.push(`• ${fieldLabels[field.id] || field.id}`);
            }
        }

    // عرض رسالة الخطأ المجمعة وتوجيه المستخدم لأول حقل به خطأ
    if (!allValid && showToast) {
        const message = `الرجاء تصحيح البيانات التالية:\n${errorMessages.join('\n')}`;
        showValidationToast(message, 'error');
        
        if (firstInvalidField) {
            setTimeout(() => {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }, 500);
        }
    }

    return allValid;
}

    if (!allValid && showToast) {
        // عرض رسالة واحدة مجمعة لكل الأخطاء
        const message = `الرجاء تصحيح البيانات التالية:\n${errorMessages.join('\n')}`;
        showValidationToast(message, 'error');
        
        // التمرير لأول حقل خطأ
        if (firstInvalidField) {
            setTimeout(() => {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }, 500);
        }
    }

    return allValid;
}

// =========================================
// دالة للتحقق الفردى مع Toast (للاستخدام فى onblur)
// =========================================
function validateLocationInputWithToast(inputElement, resultsListId) {
    return validateLocationInput(inputElement, resultsListId, true);
}

function setupUmrahDOBDatePickers() {
    if (typeof flatpickr === 'undefined') {
        console.error('❌ لم يتم تحميل مكتبة flatpickr');
        setTimeout(setupUmrahDOBDatePickers, 100);
        return
    }
    const today = new Date();
    const currentYear = today.getFullYear();
    const arabicLocale = {
        firstDayOfWeek: 6,
        weekdays: {
            shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        months: {
            shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
        }
    };
    flatpickr('.umrah-dob-picker.adult-dob', {
        dateFormat: 'Y-m-d',
        maxDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
        minDate: new Date(currentYear - 100, 0, 1),
        disableMobile: !0,
        locale: arabicLocale,
        onOpen: function (selectedDates, dateStr, instance) {
            instance.element.classList.remove('is-invalid')
        },
        onChange: function (selectedDates, dateStr, instance) {
            if (dateStr) {
                instance.element.classList.add('is-valid');
                instance.element.classList.remove('is-invalid')
            }
        }
    });
    flatpickr('.umrah-dob-picker.child-dob', {
        dateFormat: 'Y-m-d',
        maxDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
        minDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
        disableMobile: !0,
        locale: arabicLocale,
        onOpen: function (selectedDates, dateStr, instance) {
            instance.element.classList.remove('is-invalid')
        },
        onChange: function (selectedDates, dateStr, instance) {
            if (dateStr) {
                instance.element.classList.add('is-valid');
                instance.element.classList.remove('is-invalid')
            }
        }
    });
    flatpickr('.umrah-dob-picker.infant-dob', {
        dateFormat: 'Y-m-d',
        maxDate: 'today',
        minDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
        disableMobile: !0,
        locale: arabicLocale,
        onOpen: function (selectedDates, dateStr, instance) {
            instance.element.classList.remove('is-invalid')
        },
        onChange: function (selectedDates, dateStr, instance) {
            if (dateStr) {
                instance.element.classList.add('is-valid');
                instance.element.classList.remove('is-invalid')
            }
        }
    });
    console.log('✅ تم إعداد تقويمات تواريخ الميلاد للعمرة')
}

function setupUmrahDatePickers() {
    if (typeof flatpickr === 'undefined') {
        console.error('❌ لم يتم تحميل مكتبة flatpickr');
        setTimeout(setupUmrahDatePickers, 100);
        return
    }
    const arabicLocale = {
        firstDayOfWeek: 6,
        weekdays: {
            shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
        },
        months: {
            shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
        }
    };
    const departPicker = flatpickr('#umrahDepart', {
        minDate: 'today',
        dateFormat: 'Y-m-d',
        disableMobile: !0,
        locale: arabicLocale,
        onChange: function (selectedDates, dateStr) {
            if (dateStr) {
                this.element.classList.add('is-valid');
                this.element.classList.remove('is-invalid');
                const minReturnDate = new Date(selectedDates[0]);
                minReturnDate.setDate(minReturnDate.getDate() + 7);
                if (returnPicker) {
                    returnPicker.set('minDate', minReturnDate);
                    if (returnPicker.selectedDates[0] && returnPicker.selectedDates[0] < minReturnDate) {
                        returnPicker.clear()
                    }
                }
                updateUmrahDuration()
            }
        },
        onOpen: function () {
            this.element.classList.remove('is-invalid')
        }
    });
    const minReturnDate = new Date();
    minReturnDate.setDate(minReturnDate.getDate() + 7);
    const returnPicker = flatpickr('#umrahReturn', {
        minDate: minReturnDate,
        dateFormat: 'Y-m-d',
        disableMobile: !0,
        locale: arabicLocale,
        onChange: function (selectedDates, dateStr) {
            if (dateStr) {
                this.element.classList.add('is-valid');
                this.element.classList.remove('is-invalid');
                updateUmrahDuration()
            }
        },
        onOpen: function () {
            this.element.classList.remove('is-invalid')
        }
    });
    console.log('✅ تم إعداد تقويمات التواريخ للعمرة')
}

function updateUmrahDuration() {
    const departDate = document.getElementById('umrahDepart')?.value;
    const returnDate = document.getElementById('umrahReturn')?.value;
    const makkahNights = parseInt(document.getElementById('makkahNights')?.value) || 0;
    const madinahNights = parseInt(document.getElementById('madinahNights')?.value) || 0;
    if (departDate && returnDate) {
        const start = new Date(departDate);
        const end = new Date(returnDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 7) {
            Swal.fire({
                icon: 'warning',
                title: 'مدة العمرة',
                text: 'الحد الأدنى لمدة العمرة هو 7 أيام. يرجى اختيار تاريخ عودة مناسب.',
                confirmButtonText: 'حسناً',
                confirmButtonColor: '#0F2854'
            })
        }
    }
    const totalNights = makkahNights + madinahNights;
    const nightsDisplay = document.getElementById('umrahTotalNights');
    if (nightsDisplay) {
        nightsDisplay.textContent = `${totalNights} ليلة`
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('makkahNights')?.addEventListener('change', updateUmrahDuration);
    document.getElementById('madinahNights')?.addEventListener('change', updateUmrahDuration);
    const nightsHtml = `
        <div class="alert alert-info mt-3">
            <i class="fas fa-moon me-2"></i>
            <strong>المدة الإجمالية:</strong> 
            <span id="umrahTotalNights">0 ليلة</span>
            (مكة: <span id="makkahNightsDisplay">4</span> ليالي + 
            المدينة: <span id="madinahNightsDisplay">0</span> ليالي)
        </div>
    `;
    const nightsContainer = document.querySelector('#madinahNights').closest('.col-md-6');
    if (nightsContainer) {
        nightsContainer.insertAdjacentHTML('afterend', nightsHtml);
        document.getElementById('makkahNights').addEventListener('change', function () {
            document.getElementById('makkahNightsDisplay').textContent = this.value;
            updateUmrahDuration()
        });
        document.getElementById('madinahNights').addEventListener('change', function () {
            document.getElementById('madinahNightsDisplay').textContent = this.value;
            updateUmrahDuration()
        });
        document.getElementById('makkahNightsDisplay').textContent = document.getElementById('makkahNights').value;
        document.getElementById('madinahNightsDisplay').textContent = document.getElementById('madinahNights').value;
        updateUmrahDuration()
    }

    function validateUmrahForm() {
        const from = document.getElementById('umrahFrom').value.trim();
        const depart = document.getElementById('umrahDepart').value.trim();
        const returnDate = document.getElementById('umrahReturn').value.trim();
        const adults = parseInt(document.getElementById('uAdults').value) || 0;
        const kids = parseInt(document.getElementById('uKids').value) || 0;
        const infants = parseInt(document.getElementById('uInfants').value) || 0;
        const total = adults + kids + infants;
        const errors = [];
        if (!from || from.length < 2) {
            errors.push('مدينة المغادرة مطلوبة');
            document.getElementById('umrahFrom').classList.add('is-invalid')
        } else {
            document.getElementById('umrahFrom').classList.remove('is-invalid')
        }
        if (!depart) {
            errors.push('تاريخ المغادرة مطلوب');
            document.getElementById('umrahDepart').classList.add('is-invalid')
        } else {
            document.getElementById('umrahDepart').classList.remove('is-invalid')
        }
        if (!returnDate) {
            errors.push('تاريخ العودة مطلوب');
            document.getElementById('umrahReturn').classList.add('is-invalid')
        } else {
            document.getElementById('umrahReturn').classList.remove('is-invalid')
        }
        if (depart && returnDate) {
            const start = new Date(depart);
            const end = new Date(returnDate);
            if (end <= start) {
                errors.push('تاريخ العودة يجب أن يكون بعد تاريخ المغادرة')
            }
            const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            if (diffDays < 7) {
                errors.push('الحد الأدنى لمدة العمرة هو 7 أيام')
            }
        }
        if (total === 0) {
            errors.push('يجب تحديد عدد المعتمرين')
        }
        if (total > 9) {
            errors.push('الحد الأقصى للمسافرين هو 9 أشخاص')
        }
        const dobInputs = document.querySelectorAll('#umrah-dynamic-dob-container input[required]');
        let dobErrors = !1;
        dobInputs.forEach(input => {
            if (!input.value) {
                input.classList.add('is-invalid');
                dobErrors = !0
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid')
            }
        });
        if (dobErrors) {
            errors.push('جميع تواريخ الميلاد مطلوبة')
        }
        if (errors.length > 0) {
            return {
                isValid: !1,
                message: '⚠️ ' + errors.join('\n• ')
            }
        }
        return {
            isValid: !0,
            message: ''
        }
    }
   

    function getUmrahDetails() {
        const from = document.getElementById('umrahFrom').value.trim() || "غير محدد";
        const to = document.getElementById('umrahTo').value.trim() || "غير محدد";
        const depart = document.getElementById('umrahDepart').value.trim() || "غير محدد";
        const returnDate = document.getElementById('umrahReturn').value.trim() || "غير محدد";
        const makkahNights = document.getElementById('makkahNights').value || "غير محدد";
        const madinahNights = document.getElementById('madinahNights').value || "0";
        const flightClass = document.querySelector('input[name="umrahClass"]:checked')?.value || "اقتصادية";
        const hotelClass = document.querySelector('input[name="umrahHotel"]:checked')?.value || "4 نجوم";
        const adults = document.getElementById('uAdults').value || "0";
        const kids = document.getElementById('uKids').value || "0";
        const infants = document.getElementById('uInfants').value || "0";
        const mahram = document.getElementById('uMahram').value || "غير محدد";
        const totalTravelers = parseInt(adults) + parseInt(kids) + parseInt(infants);
        const services = [];
        if (document.getElementById('includeZiyarat')?.checked) services.push("زيارة المعالم");
        if (document.getElementById('includeTransport')?.checked) services.push("نقل داخلي");
        if (document.getElementById('includeGuide')?.checked) services.push("مرشد ديني");
        if (document.getElementById('includeMeals')?.checked) services.push("وجبات مميزة");
        const specialRequests = document.getElementById('umrahRequests').value.trim() || "لا يوجد";
        return `🕋 *تفاصيل حجز العمرة المميزة* 🕋

🗺️ *المسار:*
• من: ${from}
• إلى: ${to}

📅 *التواريخ:*
• تاريخ المغادرة: ${depart}
• تاريخ العودة: ${returnDate}

🌙 *مدة الإقامة:*
• ليالي مكة المكرمة: ${makkahNights} ليلة
• ليالي المدينة المنورة: ${madinahNights} ليلة

✈️ *تفاصيل الطيران:*
• درجة الطيران: ${flightClass}

🏨 *تفاصيل الإقامة:*
• فئة الفنادق: ${hotelClass}

👥 *تفاصيل المعتمرين:*
• البالغين (+12 سنة): ${adults} معتمر
• الأطفال (2-11 سنة): ${kids} معتمر
• الرضع (0-2 سنة): ${infants} معتمر
• الإجمالي: ${totalTravelers} معتمر
• النساء في محرم: ${mahram}

🌟 *الخدمات الإضافية المطلوبة:*
${services.length > 0 ? services.map(s => `• ${s}`).join('\n') : "• لا يوجد خدمات إضافية"}

📋 *طلبات خاصة:*
${specialRequests}`
    }

    function validateUmrah() {
        const from = document.getElementById('umrahFrom').value.trim();
        const depart = document.getElementById('umrahDepart').value.trim();
        const returnDate = document.getElementById('umrahReturn').value.trim();
        const adults = parseInt(document.getElementById('uAdults').value) || 0;
        const kids = parseInt(document.getElementById('uKids').value) || 0;
        const infants = parseInt(document.getElementById('uInfants').value) || 0;
        if (!from) return {
            isValid: !1,
            message: "⚠️ مدينة المغادرة مطلوبة"
        };
        if (!depart) return {
            isValid: !1,
            message: "⚠️ تاريخ المغادرة مطلوب"
        };
        if (!returnDate) return {
            isValid: !1,
            message: "⚠️ تاريخ العودة مطلوب"
        };
        if (depart && returnDate) {
            const start = new Date(depart);
            const end = new Date(returnDate);
            if (end <= start) return {
                isValid: !1,
                message: "⚠️ تاريخ العودة يجب أن يكون بعد تاريخ المغادرة"
            };
            const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            if (diffDays < 7) return {
                isValid: !1,
                message: "⚠️ الحد الأدنى لمدة العمرة هو 7 أيام"
            }
        }
        const total = adults + kids + infants;
        if (total === 0) return {
            isValid: !1,
            message: "⚠️ يجب تحديد عدد المعتمرين"
        };
        if (total > 9) return {
            isValid: !1,
            message: "⚠️ الحد الأقصى للمسافرين هو 9 أشخاص"
        };
        const dobInputs = document.querySelectorAll('#umrah-dynamic-dob-container input[required]');
        for (let input of dobInputs) {
            if (!input.value) return {
                isValid: !1,
                message: "⚠️ جميع تواريخ الميلاد مطلوبة"
            }
        }
        return {
            isValid: !0,
            message: ""
        }
    }

   // 2. دالة رسالة العمرة (فيها برضه التشفير)
function createUmrahWhatsAppMessage() {
    const fullName = document.getElementById('fName').value.trim() + " " + document.getElementById('mName').value.trim() + " " + document.getElementById('lName').value.trim();
    const nationality = document.getElementById('uNationality').value.trim();
    const phone = document.getElementById('uPhone').value.trim();
    const email = document.getElementById('uEmail').value.trim();
    const passportRaw = document.getElementById('uPassportNum').value.trim();
    const passportExp = document.getElementById('uPassportExp').value.trim();
    const notes = document.getElementById('uNotes').value.trim() || "لا يوجد";
    
    // تشفير رقم الجواز (يأخذ أول حرفين أو 3 والباقي نجوم)
    const maskedPass = passportRaw.length > 3 ? passportRaw.substring(0, 2) + "******" : "****";

    return `🕋 *طلب حجز عمرة مميزة - FOREMOST TRAVELS* 🕋

─────────────────────────────

${getUmrahDetails()}

─────────────────────────────

👤 *البيانات الشخصية للمعتمر:*
• الاسم الكامل: ${fullName}
• الجنسية: ${nationality}
• رقم الهاتف: ${phone}
• البريد الإلكتروني: ${email}
• رقم الجواز: ${maskedPass} 🔒 (باقي الرقم محجوب للخصوصية، يرجى طلبه من العميل)
• انتهاء الجواز: ${passportExp}

─────────────────────────────

📝 *ملاحظات إضافية:* ${notes}

─────────────────────────────
*FOREMOST TRAVELS*
─────────────────────────────
📞 للاستفسار: +965 6586 5808
📧 sales@foremost-travel.com
─────────────────────────────

*يرجى الرد بأفضل الأسعار والتفاصيل المطلوبة للعمرة.*
*نتمنى لكم عمرة مباركة ومقبولة إن شاء الله!* 🕋🤲`;
}

    const vipForm = document.getElementById("vipForm");
    const inputField = document.getElementById("vipContactInput");

    if (!vipForm || !inputField) return;

    vipForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputVal = inputField.value.trim();

        // Email Regex أقوى
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

        // Phone Regex (من 10 لـ 15 رقم - يبدأ اختياري بـ +)
        const phoneRegex = /^\+?[0-9]{10,15}$/;

        // تحقق
        if (emailRegex.test(inputVal)) {
            successMessage();
        } else if (phoneRegex.test(inputVal)) {
            successMessage();
        } else {
            errorMessage();
        }

    });

    function successMessage() {
        Swal.fire({
            title: "تم الانضمام للنخبة!",
            text: "سيتم إرسال أحدث العروض الحصرية إليك قريباً.",
            icon: "success",
            confirmButtonColor: "#0F2854"
        });
        vipForm.reset();
    }

    function errorMessage() {
        Swal.fire({
            title: "صيغة غير صحيحة!",
            text: "يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف (10-15 رقم).",
            icon: "error",
            confirmButtonColor: "#d33"
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const umrahTabBtn = document.querySelector('button[data-bs-target="#umrah-tab"]');
        if (umrahTabBtn) {
            umrahTabBtn.addEventListener('click', function () {
                setTimeout(() => {
                    const adults = document.getElementById('uAdults');
                    const kids = document.getElementById('uKids');
                    const infants = document.getElementById('uInfants');
                    if (adults && kids && infants) {
                        const updatePassengers = () => {
                            const total = parseInt(adults.value) + parseInt(kids.value) + parseInt(infants.value);
                            const dobContainer = document.getElementById('umrah-dynamic-dob-container');
                            if (total > 0 && dobContainer) {
                                dobContainer.style.display = 'block';
                                generateUmrahDOBFields(parseInt(adults.value), parseInt(kids.value), parseInt(infants.value))
                            } else if (dobContainer) {
                                dobContainer.style.display = 'none'
                            }
                        };
                        adults.addEventListener('change', updatePassengers);
                        kids.addEventListener('change', updatePassengers);
                        infants.addEventListener('change', updatePassengers);
                        updatePassengers()
                    }
                }, 300)
            })
        }

        document.addEventListener("DOMContentLoaded", function () {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.attributeName === "class") {
                        const isModalOpen = document.body.classList.contains('modal-open');
                        const floatingBtns = document.querySelector('.floating-fab-container');
                        if (floatingBtns) {
                            if (!isModalOpen) {
                                floatingBtns.style.setProperty('display', 'flex', 'important');
                                floatingBtns.style.setProperty('opacity', '1', 'important');
                                floatingBtns.style.setProperty('visibility', 'visible', 'important');
                                floatingBtns.classList.remove('d-none')
                            } else {
                                floatingBtns.style.setProperty('display', 'none', 'important')
                            }
                        }
                    }
                })
            });
            observer.observe(document.body, {
                attributes: !0
            })
        })
    });
    console.log('✅ تم تحميل إصلاحات العمرة المميزة بنجاح')
})

// =========================================
// ✈️ نظام رحلات الطيران (Trendy 2026 Design)
// =========================================
setTimeout(() => {
    const trendyFlights = [
        { destination: "القاهرة", country: "مصر", image: "./images/cairo.jpeg?v=1", tag: "يومياً ✈️" },
        { destination: "دبي", country: "الإمارات", image: "./images/dubai.jpeg?v=1", tag: "أكثر مبيعاً 🔥" },
        { destination: "إسطنبول", country: "تركيا", image: "./images/istanbul.jpeg?v=1", tag: "مباشر لـ IST" },
        { destination: "عمان", country: "الأردن", image: "./images/amman.jpeg?v=1", tag: "طيران الجزيرة" },
        { destination: "بيروت", country: "لبنان", image: "./images/beirut.jpeg?v=1", tag: "رحلات ويكند" },
        { destination: "مومباي", country: "الهند", image: "./images/mumbai.jpeg?v=1", tag: "طيران مباشر" },
        { destination: "دلهي", country: "الهند", image: "./images/delhi.jpeg?v=1", tag: "طيران مباشر" },
        { destination: "كوتشي", country: "الهند", image: "./images/kochi.jpeg?v=1", tag: "طيران مباشر" }
    ];

    const container = document.getElementById("trendyFlightsContainer");
    
    if (container) {
        trendyFlights.forEach((flight, index) => {
            const delay = index * 0.1;
            
            const html = `
                <div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeInUp" style="animation-delay: ${delay}s;">
                    <div class="trendy-flight-card">
                        
                        <div class="trendy-poster-area">
                            <div class="trendy-tag">${flight.tag}</div>
                            <div class="poster-blur-bg" style="background-image: url('${flight.image}');"></div>
                            <img src="${flight.image}" alt="${flight.destination}" class="poster-main-img" loading="lazy">
                        </div>
                        
                        <div class="trendy-info-area text-right">
                            <h3 class="trendy-dest">${flight.destination}</h3>
                            <div class="trendy-country">
                                <i class="fas fa-map-marker-alt text-danger"></i> ${flight.country}
                            </div>
                            
                            <button class="btn-trendy-whatsapp" onclick="bookTrendyFlight('${flight.destination}', '${flight.country}')">
                                <i class="fab fa-whatsapp fa-lg"></i> حجز واستفسار
                            </button>
                        </div>
                        
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
}, 500);

// دالة حجز الواتساب
window.bookTrendyFlight = function(destination, country) {
    const whatsappNum = typeof COMPANY_NUMBER !== 'undefined' ? COMPANY_NUMBER : "96565865808";
    const message = `✨ *طلب حجز طيران مباشر* ✨\n\nمرحباً فورموست،\nشاهدت عروض الطيران المباشر وأرغب في السفر إلى: *${destination} (${country})*\n\nيرجى تزويدي بالمواعيد وأفضل الأسعار المتاحة. شكراً 🌹`;
    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
};
