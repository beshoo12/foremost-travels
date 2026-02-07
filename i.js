// ==========================================
// 🔥 الإعدادات الأساسية
// ==========================================
const COMPANY_NUMBER = "96565865808";
const COMPANY_NAME = "FOREMOST Travels";

// دالة مساعدة للحصول على القيم بأمان
function getSafeVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

// ==========================================
// 🔍 نظام التحقق الشامل (Validation System)
// ==========================================
const Validator = {
    // تحقق من الاسم الكامل
    validateFullName: function(fName, mName, lName) {
        if (!fName || fName.length < 2) {
            return { isValid: false, message: "⚠️ الاسم الأول يجب أن يكون على الأقل حرفين" };
        }
        if (!mName || mName.length < 2) {
            return { isValid: false, message: "⚠️ الاسم الأوسط يجب أن يكون على الأقل حرفين" };
        }
        if (!lName || lName.length < 2) {
            return { isValid: false, message: "⚠️ الاسم الأخير يجب أن يكون على الأقل حرفين" };
        }
        return { isValid: true };
    },

    // تحقق من البريد الإلكتروني
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return { isValid: false, message: "⚠️ البريد الإلكتروني غير صحيح" };
        }
        return { isValid: true };
    },

    // تحقق من رقم الهاتف
    validatePhone: function(phone) {
        if (!phone || phone.replace(/\D/g, '').length < 10) {
            return { isValid: false, message: "⚠️ رقم الهاتف يجب أن يكون على الأقل 10 أرقام" };
        }
        return { isValid: true };
    },

    // تحقق من الجواز
    validatePassport: function(passNum, passExp) {
        if (!passNum || passNum.length < 6) {
            return { isValid: false, message: "⚠️ رقم الجواز غير صحيح" };
        }
        if (!passExp) {
            return { isValid: false, message: "⚠️ تاريخ انتهاء الجواز مطلوب" };
        }
        return { isValid: true };
    },

    // تحقق من التاريخ
    validateDate: function(dateStr, fieldName) {
        if (!dateStr) {
            return { isValid: false, message: `⚠️ ${fieldName} مطلوب` };
        }
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return { isValid: false, message: `⚠️ ${fieldName} غير صحيح` };
        }
        return { isValid: true };
    },

    // تحقق من الوجهة
    validateDestination: function(destination, fieldName) {
        if (!destination || destination.length < 2) {
            return { isValid: false, message: `⚠️ ${fieldName} يجب أن يكون على الأقل حرفين` };
        }
        return { isValid: true };
    },

// تحقق من عدد المسافرين (محدثة)
validatePassengers: function(adults, kids, infants, service) {
    const total = parseInt(adults || 0) + parseInt(kids || 0) + parseInt(infants || 0);
    
    if (total === 0) {
        return { isValid: false, message: "⚠️ يجب تحديد عدد المسافرين" };
    }
    
    // تحقق من الحد الأقصى 9 مسافرين لكل الخدمات
    if (total > 9) {
        return { isValid: false, message: "⚠️ أقصى عدد مسموح به هو 9 مسافرين لكل الخدمات" };
    }
    
    // تحقق عام لجميع الخدمات (للاستفسارات الكبيرة)
    if (total > 20) {
        return { isValid: false, message: "⚠️ العدد كبير جداً، يرجى التواصل معنا مباشرة" };
    }
    
    if (parseInt(adults || 0) === 0 && parseInt(kids || 0) > 0) {
        return { isValid: false, message: "⚠️ يجب أن يكون هناك على الأقل شخص بالغ واحد" };
    }
    
    return { isValid: true };
}

};

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ صفحة فورموست جاهزة!");



    // ==========================================
    // 🎥 كود تشغيل الفيديو (Playlist System)
    // ==========================================
    const videoElement = document.getElementById('bgVideo');
    
    // قائمة الفيديوهات
    const videoPlaylist = [
        "./Foremost.mp4", 
        "./0206_1_.mp4"   // اسم الفيديو الثاني بتاعك
    ];

    let currentVideoIndex = 0;

    if (videoElement) {
        console.log("🎬 تم تهيئة مشغل الفيديو الخلفي");

        // إعدادات إجبارية لضمان التشغيل التلقائي
        videoElement.muted = true;
        videoElement.playsInline = true;
        
        // دالة الانتقال للفيديو التالي
        function playNextVideo() {
            currentVideoIndex++;
            
            // لو وصلنا لآخر القائمة، نرجع للأول
            if (currentVideoIndex >= videoPlaylist.length) {
                currentVideoIndex = 0;
            }

            const nextVideo = videoPlaylist[currentVideoIndex];
            console.log(`🔄 جاري الانتقال للفيديو: ${nextVideo}`);

            // تكنيك التفريغ والتحميل لضمان التشغيل
            videoElement.src = ""; 
            videoElement.src = nextVideo; 
            videoElement.load(); 

            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log(`✅ تم تشغيل الفيديو بنجاح`);
                })
                .catch(error => {
                    console.error(`❌ المتصفح منع التشغيل التلقائي:`, error);
                });
            }
        }

        // 1. عند انتهاء الفيديو الحالي -> شغل اللي بعده
        videoElement.addEventListener('ended', function() {
            console.log("⏹️ الفيديو انتهى.");
            playNextVideo();
        });

        // 2. عند حدوث خطأ (مثل الاسم غلط) -> تخطى وشغل اللي بعده
        videoElement.addEventListener('error', function(e) {
            console.error("🚫 خطأ في تحميل ملف الفيديو (تأكد من الاسم والمسار):", videoElement.error);
            playNextVideo(); 
        });
    }

    // ==========================================
    // 📱 تشغيل قائمة الموبايل (Hamburger Menu)
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const mobileLinks = document.querySelectorAll('.mob-link');

    // دالة فتح/غلق القائمة
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    }

    // تشغيل عند الضغط على الزر
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    // الإغلاق عند الضغط على زر X
    if (closeNavBtn) {
        closeNavBtn.addEventListener('click', toggleMenu);
    }

    // الإغلاق عند الضغط على أي رابط (عشان يروح للقسم)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });

    // الإغلاق عند الضغط خارج القائمة (على الخلفية المظلمة)
    if (mobileNav) {
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                toggleMenu();
            }
        });
    }
    
// ==========================================
// ⌨️ تأثير الكتابة الآلي (Safe Version)
// ==========================================
const typewriterText = document.querySelector('.typewriter-text');

// 1. نتأكد إن العنصر موجود
if (typewriterText) {
    const text = typewriterText.getAttribute('data-text');

    // 2. نتأكد إن النص موجود جواه
    if (text) {
        let index = 0;
        
        // تفريغ النص في البداية (اختياري)
        typewriterText.innerHTML = ''; 

        function typeWriter() {
            if (index < text.length) {
                typewriterText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 0.300);
            }
        }
        
        // تشغيل الدالة بعد ثانية
        setTimeout(typeWriter, 0.3000);
    }
}
    
    // عدادات الإحصائيات المتحركة
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toLocaleString();
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // تشغيل العد عند التمرير
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
    
    // مؤtimer العرض
    function updateOfferTimer() {
        const timerElement = document.getElementById('offerTimer');
        if (!timerElement) return;
        
        let hours = 2;
        let minutes = 15;
        let seconds = 30;
        
        function tick() {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        timerElement.textContent = 'انتهى العرض';
                        return;
                    }
                    hours--;
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }
            
            timerElement.textContent = 
                `${hours.toString().padStart(2, '0')}:` +
                `${minutes.toString().padStart(2, '0')}:` +
                `${seconds.toString().padStart(2, '0')}`;
        }
        
        setInterval(tick, 1000);
    }
    
    updateOfferTimer();
    
    // تأثير التمرير السلس للأزرار
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تأثير التحليق للطائرة
    const airplane = document.querySelector('.airplane-flying');
    if (airplane) {
        let pos = -100;
        function flyPlane() {
            pos = (pos + 0.5) % 200;
            airplane.style.transform = `translateX(${pos}%)`;
            requestAnimationFrame(flyPlane);
        }
        setTimeout(flyPlane, 2000);
    }
    
    // تأثير التدوير للكرة الأرضية
    const globe = document.querySelector('.globe-rotation i');
    if (globe) {
        let rotation = 0;
        function rotateGlobe() {
            rotation += 0.2;
            globe.style.transform = `rotate(${rotation}deg)`;
            requestAnimationFrame(rotateGlobe);
        }
        rotateGlobe();
    }






// مؤثرات الأرقام العدادية
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // مدة العد بالمللي ثانية
        const increment = target / (duration / 16); // 60 إطار في الثانية
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
    
    // مؤثر الكتابة للنص
    const typewriterText = document.querySelector('.typewriter-text');
    const text = typewriterText.getAttribute('data-text');
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // بدء الكتابة بعد تأخير بسيط
    setTimeout(typeWriter, 500);
});





/* ==========================================
   ⌨️ تأثير الكتابة التلقائية (Typewriter Effect)
   ========================================== */
var typed = new Typed('.auto-type', {
    // 📝 الجمل اللي عايزها تظهر ورا بعض
    strings: [
        "Foremost Travel and Tourism ", 
        "فورموست للسياحة والسفر", 
        "أفضل الأسعار التنافسية", 
        " أجمل وجهات العالم", 
        "خدمة VIP مميزة"
    ],
    typeSpeed: 60,   // سرعة الكتابة (كل ما الرقم قل بقى أسرع)
    backSpeed: 40,   // سرعة المسح
    startDelay: 500, // تأخير بسيط قبل ما يبدأ
    backDelay: 2000, // يستنى قد إيه بعد ما يخلص الجملة قبل ما يمسحها
    loop: true,      // يفضل يعيد الكلام علطول ولا يقف؟ (true = يعيد)
    showCursor: true, // إظهار مؤشر الكتابة |
    cursorChar: '|',  // شكل المؤشر
    autoInsertCss: true, // يظبط الـ CSS أوتوماتيك
    
});








    // ==========================================
    // 🕒 تحديث الوقت والتاريخ العربي المباشر
    // ==========================================
    function updateDateTime() {
        const now = new Date();
        
        const daysArabic = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        const dayName = daysArabic[now.getDay()];
        
        const monthsArabic = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];
        const monthName = monthsArabic[now.getMonth()];
        
        const day = now.getDate();
        const year = now.getFullYear();
        
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        const ampm = hours >= 12 ? 'م' : 'ص';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        const dateStr = `${dayName}، ${day} ${monthName} ${year}`;
        const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;
        
        const dateTimeElement = document.getElementById('date-time');
        if (dateTimeElement) {
            dateTimeElement.innerHTML = `
                <span class="date-part">
                    <i class="fas fa-calendar-alt me-1"></i> ${dateStr}
                </span>
                <span class="mx-2">|</span>
                <span class="time-part">
                    <i class="fas fa-clock me-1"></i> ${timeStr}
                </span>
            `;
        }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    let iti;

    // ============================================================
    // 1. تتبع الخدمة الحالية
    // ============================================================
    window.currentService = 'طيران';
    window.setService = function(serviceName) { 
        window.currentService = serviceName;
        console.log("الخدمة المختارة:", serviceName);
        
        // إظهار رسالة ترحيبية للخدمة الجديدة
        const serviceMessages = {
            'طيران': '✈️ مرحباً بكم في خدمة حجز الطيران الفاخرة',
            'فنادق': '🏨 استمتع بأفضل العروض الفندقية حول العالم',
            'قطارات': '🚆 رحلات قطارات فاخرة عبر أوروبا والعالم',
            'سيارات': '🚗 احجز أفضل السيارات بأسعار تنافسية',
            'باقة شاملة': '🎁 صمم رحلة أحلامك مع خبرائنا'
        };
        
        if (serviceMessages[serviceName]) {
            Swal.fire({
                title: serviceMessages[serviceName],
                icon: 'info',
                timer: 2000,
                showConfirmButton: false,
                position: 'top-end',
                toast: true
            });
        }
    };

    // ============================================================
    // 🛠️ 2. إصلاح تاريخ الميلاد وإضافة التحقق
    // ============================================================
    if (typeof flatpickr !== 'undefined') {
        flatpickr("#uDob", {
            dateFormat: "Y-m-d",
            maxDate: "today",
            minDate: new Date(new Date().getFullYear() - 100, 0, 1),
            disableMobile: true,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                    longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                months: {
                    shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                    longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                }
            }
        });
    }

    // ==========================================
    // 3. تشغيل مكتبة الأعلام مع تحسينات
    // ==========================================
    const phoneInput = document.querySelector("#uPhone");
    if (window.intlTelInput && phoneInput) {
        iti = window.intlTelInput(phoneInput, {
            initialCountry: "kw",
            preferredCountries: ["kw", "sa", "eg", "qa","ae"],
            separateDialCode: true,
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
        });
    }

    function validatePhoneNumber() {
        if (iti) {
            if (!iti.isValidNumber()) {
                phoneInput.classList.add('is-invalid');
                phoneInput.classList.remove('is-valid');
                return false;
            } else {
                phoneInput.classList.remove('is-invalid');
                phoneInput.classList.add('is-valid');
                return true;
            }
        }
        return false;
    }

    // ==========================================
    // 🔧 نظام التحقق من الحقول في الوقت الحقيقي
    // ==========================================
    function validateField(fieldId, value) {
        const field = document.getElementById(fieldId);
        if (!field) return true;
        
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        let isValid = true;
        let errorMessage = '';
        
        switch(fieldId) {
            case 'fName':
            case 'mName':
            case 'lName':
                if (!value || value.length < 2) {
                    isValid = false;
                    errorMessage = 'يجب أن يكون على الأقل حرفين';
                }
                break;
                
            case 'uEmail':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value || !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'البريد الإلكتروني غير صحيح';
                }
                break;
                
            case 'uPassportNum':
                if (!value || value.length < 6) {
                    isValid = false;
                    errorMessage = 'رقم الجواز غير صحيح';
                }
                break;
                
            case 'hCity':
            case 'trOrigin':
            case 'trDest':
            case 'carPickLoc':
            case 'carDropLoc':
            case 'pkgDest':
                if (!value || value.length < 2) {
                    isValid = false;
                    errorMessage = 'يجب أن يكون على الأقل حرفين';
                }
                break;
        }
        
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
            if (errorElement) errorElement.textContent = '';
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            if (errorElement) errorElement.textContent = errorMessage;
        }
        
        return isValid;
    }

    // إضافة مستمعات الأحداث للتحقق في الوقت الحقيقي
    const validationFields = [
        'fName', 'mName', 'lName', 'uEmail', 'uPassportNum',
        'hCity', 'trOrigin', 'trDest', 'carPickLoc', 'carDropLoc', 'pkgDest'
    ];
    
    validationFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                validateField(fieldId, this.value);
            });
            
            field.addEventListener('input', function() {
                if (this.value.length === 0) {
                    this.classList.remove('is-valid', 'is-invalid');
                }
            });
        }
    });

    // ============================================================
    // 🌍 4. API الجنسيات مع تحسينات
    // ============================================================
    const nationalityInput = document.getElementById('uNationality');
    
    if (nationalityInput) {
        let natList = document.createElement('ul');
        natList.className = 'autocomplete-list';
        nationalityInput.parentNode.appendChild(natList);
        nationalityInput.parentNode.style.position = 'relative';

        let allNationalities = [];

        fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations')
            .then(res => res.json())
            .then(data => {
                allNationalities = data.map(country => ({
                    nameAr: country.translations.ara ? country.translations.ara.common : country.name.common,
                    nameEn: country.name.common.toLowerCase(),
                    flag: country.flags.svg
                })).sort((a, b) => a.nameAr.localeCompare(b.nameAr, 'ar'));
            })
            .catch(err => console.log("Error loading nationalities:", err));

        nationalityInput.addEventListener('input', function() {
            const val = this.value.toLowerCase().trim();
            natList.innerHTML = '';

            if (val.length < 1) {
                natList.classList.remove('active');
                return;
            }

            const matches = allNationalities.filter(n => 
                n.nameAr.includes(val) || n.nameEn.includes(val)
            );

            if (matches.length > 0) {
                natList.classList.add('active');
                
                matches.slice(0, 5).forEach(nat => {
                    const li = document.createElement('li');
                    li.style.display = "flex";
                    li.style.alignItems = "center";
                    li.style.cursor = "pointer";
                    li.style.padding = "10px";
                    li.style.borderBottom = "1px solid #eee";
                    
                    li.innerHTML = `
                        <img src="${nat.flag}" style="width: 25px; height: 18px; margin-left: 10px; border-radius: 2px; object-fit: cover;">
                        <span style="font-weight: bold; color: #0F2854;">${nat.nameAr}</span>
                    `;

                    li.addEventListener('click', function() {
                        nationalityInput.value = nat.nameAr;
                        natList.classList.remove('active');
                        natList.innerHTML = '';
                        validateField('uNationality', nat.nameAr);
                    });

                    natList.appendChild(li);
                });
            } else {
                natList.classList.remove('active');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (e.target !== nationalityInput) {
                natList.classList.remove('active');
            }
        });
    }

    // ============================================================
    // 🔥 5. تواريخ ميلاد المسافرين الديناميكية (مُحسّن)
    // ============================================================
    const adultsSelect = document.getElementById('fAdults');
    const kidsSelect = document.getElementById('fKids');
    const infantsSelect = document.getElementById('fInfants');
    const container = document.getElementById('dynamic-dob-container');

  function renderDynamicDates() {
    const adultsCount = parseInt(adultsSelect.value) || 0;
    const kidsCount = parseInt(kidsSelect.value) || 0;
    const infantsCount = parseInt(infantsSelect.value) || 0;
    const total = adultsCount + kidsCount + infantsCount;
    
    // التحقق من الحد الأقصى 9 مسافرين لكل الخدمات
    if (total > 9) {
        Swal.fire({
            icon: 'warning',
            title: 'حد المسافرين',
            text: 'عذراً، أقصى عدد مسموح به هو 9 مسافرين لكل الخدمات. يرجى تقليل العدد.',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#0F2854',
            iconColor: '#C5A059'
        });
        // إعادة تعيين القيم
        adultsSelect.value = Math.min(adultsCount, 9);
        kidsSelect.value = 0;
        infantsSelect.value = 0;
        return;
    }
    
    if (total === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'flex';
    
    const titleHTML = `<h6 class="text-primary fw-bold border-bottom pb-2 mb-2 w-100"><i class="far fa-calendar-alt me-2"></i> تواريخ ميلاد المسافرين (مطلوب)</h6>`;
    let inputsHTML = titleHTML;

    for (let i = 1; i <= adultsCount; i++) {
        inputsHTML += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (المسافر رقم ${i})</label>
            <input type="text" class="form-control dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
    }

    for (let i = 1; i <= kidsCount; i++) {
        inputsHTML += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل رقم ${i})</label>
            <input type="text" class="form-control dob-picker child-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
    }

    for (let i = 1; i <= infantsCount; i++) {
        inputsHTML += `
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع رقم ${i})</label>
            <input type="text" class="form-control dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;
    }

    container.innerHTML = inputsHTML;
    activateCalendars();
    addDobValidation();
}

    function addDobValidation() {
        const dobInputs = document.querySelectorAll('.dob-picker');
        dobInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (!this.value) {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            });
        });
    }

    function activateCalendars() {
        const today = new Date();
        const currentYear = today.getFullYear();

        if (typeof flatpickr !== 'undefined') {
            flatpickr(".adult-dob", {
                dateFormat: "Y-m-d",
                maxDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
                minDate: new Date(currentYear - 100, 0, 1),
                disableMobile: true,
                locale: {
                    firstDayOfWeek: 6,
                    weekdays: {
                        shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                        longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    months: {
                        shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    }
                }
            });

            flatpickr(".child-dob", {
                dateFormat: "Y-m-d",
                maxDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
                minDate: new Date(currentYear - 12, today.getMonth(), today.getDate()),
                disableMobile: true,
                locale: {
                    firstDayOfWeek: 6,
                    weekdays: {
                        shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                        longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    months: {
                        shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    }
                }
            });

            flatpickr(".infant-dob", {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: new Date(currentYear - 2, today.getMonth(), today.getDate()),
                disableMobile: true,
                locale: {
                    firstDayOfWeek: 6,
                    weekdays: {
                        shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                        longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    months: {
                        shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    }
                }
            });
        }
    }

    if(adultsSelect && kidsSelect && infantsSelect) {
        adultsSelect.addEventListener('change', renderDynamicDates);
        kidsSelect.addEventListener('change', renderDynamicDates);
        infantsSelect.addEventListener('change', renderDynamicDates);
        renderDynamicDates();
    }

    // ============================================================
    // 6. مراقبة تغيير نوع الرحلة
    // ============================================================
    const flightInputs = document.querySelectorAll('input[name="flightType"]');
    const addBtn = document.getElementById('addRouteBtnContainer');
    const returnContainer = document.getElementById('returnDateContainer');
    const multiContainer = document.getElementById('multi-city-container');

    flightInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'وجهات متعددة') {
                addBtn.style.display = 'block';
                returnContainer.style.display = 'none';
                const retInput = document.getElementById('fReturnDate');
                if(retInput) retInput.value = '';
            } else {
                addBtn.style.display = 'none';
                multiContainer.innerHTML = '';
                if (this.value === 'ذهاب وعودة') returnContainer.style.display = 'block';
                else returnContainer.style.display = 'none';
            }
        });
    });

 
    // ============================================================
    // 7. دالة إضافة وجهات متعددة جديدة
    // ============================================================
   window.addFlightRow = function() {
        const currentRoutes = document.querySelectorAll('.route-card').length + 2;
        // توليد ID عشوائي عشان مايتكررش
        const randomID = Math.floor(Math.random() * 100000);
        
        const fromID = `fFrom_${randomID}`;
        const toID = `fTo_${randomID}`;
        const resFromID = `res_fFrom_${randomID}`;
        const resToID = `res_fTo_${randomID}`;
        const dateID = `date_${randomID}`;

        const div = document.createElement('div');
        div.className = 'route-card shadow-sm mt-3 position-relative p-3 border rounded bg-light animate__animated animate__fadeIn';
        
        div.innerHTML = `
            <button type="button" class="btn-remove-route" onclick="this.parentElement.remove()" style="position: absolute; top: -10px; left: -10px; background: #dc3545; color: #fff; border-radius: 50%; width: 25px; height: 25px; border: none; z-index:10;">
                <i class="fas fa-times"></i>
            </button>
            <h6 class="text-primary small fw-bold mb-3">✈️ رحلة رقم ${currentRoutes}</h6>
            <div class="row g-3 align-items-end">
                <div class="col-md-4 position-relative">
                    <label class="form-label small text-muted">من (مطار)</label>
                    <input type="text" class="form-control airport-search" id="${fromID}" placeholder="كود المطار" autocomplete="off">
                    <ul class="autocomplete-list shadow-lg" id="${resFromID}"></ul>
                </div>
                <div class="col-md-4 position-relative">
                    <label class="form-label small text-muted">إلى (مطار)</label>
                    <input type="text" class="form-control airport-search" id="${toID}" placeholder="كود المطار" autocomplete="off">
                    <ul class="autocomplete-list shadow-lg" id="${resToID}"></ul>
                </div>
                <div class="col-md-4">
                    <label class="form-label small text-muted">تاريخ الرحلة</label>
                    <input type="text" class="form-control date-picker new-date" id="${dateID}" placeholder="التاريخ">
                </div>
            </div>
        `;

        document.getElementById('multi-city-container').appendChild(div);

        // 🔥 1. تشغيل التقويم للخانة الجديدة
        if (typeof flatpickr !== 'undefined') {
            flatpickr(`#${dateID}`, { 
                minDate: "today", 
                dateFormat: "Y-m-d", 
                locale: "ar", 
                disableMobile: "true" 
            });
        }

        // 🔥 2. تشغيل البحث للخانات الجديدة (باستخدام الدالة العالمية)
        if (window.setupAirportSearchGlobal) {
            window.setupAirportSearchGlobal(fromID, resFromID);
            window.setupAirportSearchGlobal(toID, resToID);
        } else {
            console.error("❌ دالة البحث غير موجودة في النطاق العام!");
        }
    };

    // ==========================================
    // 🏨 نظام الفنادق الكامل (مُحسّن جداً)
    // ==========================================

    // 1. دالة تغيير عدد الغرف
    window.changeRoomCount = function(change) {
        const roomsInput = document.getElementById('hRooms');
        if (!roomsInput) return;
        
        let currentValue = parseInt(roomsInput.value) || 1;
        let newValue = currentValue + change;
        
        if (newValue >= 1 && newValue <= 10) {
            roomsInput.value = newValue;
            updateRoomCountDisplay(newValue);
        }
    };

    // 2. تحديث عرض عدد الغرف
    function updateRoomCountDisplay(count) {
        const display = document.getElementById('roomCountDisplay');
        if (display) {
            display.textContent = count;
        }
    }

    // 3. حساب مدة الإقامة
    function calculateStayDuration() {
        const checkIn = document.getElementById('hCheckIn').value;
        const checkOut = document.getElementById('hCheckOut').value;
        
        if (checkIn && checkOut) {
            const start = new Date(checkIn);
            const end = new Date(checkOut);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays > 0) {
                document.getElementById('stayDuration').style.display = 'block';
                document.getElementById('nightsCount').textContent = diffDays;
                
                // التحقق من المدة
                if (diffDays > 90) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'مدة طويلة',
                        text: 'المدة التي حددتها طويلة جداً، هل أنت متأكد؟',
                        confirmButtonText: 'نعم، متأكد',
                        cancelButtonText: 'تعديل',
                        showCancelButton: true
                    });
                }
            } else {
                document.getElementById('stayDuration').style.display = 'none';
            }
        }
    }

    // 4. إضافة التحقق من تواريخ الفنادق
    function validateHotelDates() {
        const checkIn = document.getElementById('hCheckIn').value;
        const checkOut = document.getElementById('hCheckOut').value;
        
        if (!checkIn) {
            document.getElementById('hCheckIn').classList.add('is-invalid');
            return false;
        } else {
            document.getElementById('hCheckIn').classList.remove('is-invalid');
        }
        
        if (!checkOut) {
            document.getElementById('hCheckOut').classList.add('is-invalid');
            return false;
        } else {
            document.getElementById('hCheckOut').classList.remove('is-invalid');
        }
        
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        
        if (end <= start) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ في التواريخ',
                text: 'تاريخ الخروج يجب أن يكون بعد تاريخ الدخول'
            });
            return false;
        }
        
        return true;
    }

    // 5. تفعيل النجوم
    function setupHotelStars() {
        document.querySelectorAll('input[name="hotelStars"]').forEach(star => {
            star.addEventListener('change', function() {
                const labels = {
                    '1': 'نجمة (اقتصادي)',
                    '2': 'نجمتين (جيد)',
                    '3': '3 نجوم (جيد جداً)',
                    '4': '4 نجوم (ممتاز)',
                    '5': '5 نجوم (فاخر)'
                };
                document.getElementById('starLabel').textContent = `${this.value} ${labels[this.value]}`;
                document.getElementById('starLabel').classList.add('text-warning', 'fw-bold');
            });
        });
    }

   function renderHotelDob() {
    const adults = parseInt(document.getElementById('hAdults').value) || 0;
    const kids = parseInt(document.getElementById('hKids').value) || 0;
    const infants = parseInt(document.getElementById('hInfants').value) || 0;
    const total = adults + kids + infants;
    const container = document.getElementById('hotel-dynamic-dob-container');
    
    // التحقق من الحد الأقصى 9 مسافرين للفنادق
    if (total > 9) {
        Swal.fire({
            icon: 'warning',
            title: 'حد المسافرين',
            text: 'عذراً، أقصى عدد مسموح به هو 9 مسافرين للحجز الفندقي. يرجى تقليل العدد.',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#0F2854',
            iconColor: '#C5A059'
        });
        // إعادة تعيين القيم
        document.getElementById('hAdults').value = Math.min(adults, 9);
        document.getElementById('hKids').value = 0;
        document.getElementById('hInfants').value = 0;
        return;
    }
    
    if (total > 0) {
        container.style.display = 'flex';
        let html = '<div class="row g-3 w-100">';
        
        for (let i = 1; i <= adults; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${i})</label>
                    <input type="text" class="form-control hotel-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        for (let i = 1; i <= kids; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${i})</label>
                    <input type="text" class="form-control hotel-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        for (let i = 1; i <= infants; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${i})</label>
                    <input type="text" class="form-control hotel-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        html += '</div>';
        container.innerHTML = html;
        
        // تفعيل التقويم
        if (typeof flatpickr !== 'undefined') {
            const today = new Date();
            const currentYear = today.getFullYear();
            
            flatpickr(".hotel-dob-picker", {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: new Date(currentYear - 100, 0, 1),
                disableMobile: true,
                locale: {
                    firstDayOfWeek: 6,
                    weekdays: {
                        shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                        longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    months: {
                        shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    }
                }
            });
        }
    } else {
        container.style.display = 'none';
    }
}

    // تفعيل نظام الفنادق
    document.getElementById('hCheckIn')?.addEventListener('change', function() {
        calculateStayDuration();
        validateHotelDates();
    });
    
    document.getElementById('hCheckOut')?.addEventListener('change', function() {
        calculateStayDuration();
        validateHotelDates();
    });
    
    document.getElementById('hAdults')?.addEventListener('change', renderHotelDob);
    document.getElementById('hKids')?.addEventListener('change', renderHotelDob);
    document.getElementById('hInfants')?.addEventListener('change', renderHotelDob);
    
    setupHotelStars();
    calculateStayDuration();
    renderHotelDob();

    // ==========================================
    // 🚆 نظام القطارات (مُحسّن جداً)
    // ==========================================

    // التحقق من بيانات القطارات
    function validateTrainData() {
        const origin = document.getElementById('trOrigin').value;
        const dest = document.getElementById('trDest').value;
        const date = document.getElementById('trDate').value;
        
        if (!origin) {
            document.getElementById('trOrigin').classList.add('is-invalid');
            return false;
        }
        
        if (!dest) {
            document.getElementById('trDest').classList.add('is-invalid');
            return false;
        }
        
        if (!date) {
            document.getElementById('trDate').classList.add('is-invalid');
            return false;
        }
        
        if (origin === dest) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ في المحطات',
                text: 'محطة الانطلاق ومحطة الوصول يجب أن تكونا مختلفتين'
            });
            return false;
        }
        
        return true;
    }



    function renderTrainDob() {
    const adults = parseInt(document.getElementById('tAdults').value) || 0;
    const kids = parseInt(document.getElementById('tKids').value) || 0;
    const infants = parseInt(document.getElementById('tInfants').value) || 0;
    const total = adults + kids + infants;
    const container = document.getElementById('train-dynamic-dob-container');
    
    // التحقق من الحد الأقصى 9 مسافرين للقطارات
    if (total > 9) {
        Swal.fire({
            icon: 'warning',
            title: 'حد المسافرين',
            text: 'عذراً، أقصى عدد مسموح به هو 9 مسافرين لرحلات القطار. يرجى تقليل العدد.',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#0F2854',
            iconColor: '#C5A059'
        });
        // إعادة تعيين القيم
        document.getElementById('tAdults').value = Math.min(adults, 9);
        document.getElementById('tKids').value = 0;
        document.getElementById('tInfants').value = 0;
        return;
    }
    
    if (total > 0) {
        container.style.display = 'flex';
        let html = '<div class="row g-3 w-100">';
        
        for (let i = 1; i <= adults; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${i})</label>
                    <input type="text" class="form-control train-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        for (let i = 1; i <= kids; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${i})</label>
                    <input type="text" class="form-control train-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        for (let i = 1; i <= infants; i++) {
            html += `
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${i})</label>
                    <input type="text" class="form-control train-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;
        }
        
        html += '</div>';
        container.innerHTML = html;
        
        // تفعيل التقويم
        if (typeof flatpickr !== 'undefined') {
            const today = new Date();
            const currentYear = today.getFullYear();
            
            flatpickr(".train-dob-picker", {
                dateFormat: "Y-m-d",
                maxDate: "today",
                minDate: new Date(currentYear - 100, 0, 1),
                disableMobile: true,
                locale: {
                    firstDayOfWeek: 6,
                    weekdays: {
                        shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                        longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                    },
                    months: {
                        shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                        longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                    }
                }
            });
        }
    } else {
        container.style.display = 'none';
    }
}

    document.getElementById('tAdults')?.addEventListener('change', renderTrainDob);
    document.getElementById('tKids')?.addEventListener('change', renderTrainDob);
    document.getElementById('tInfants')?.addEventListener('change', renderTrainDob);
    
    renderTrainDob();
  

    // ==========================================
    // 🚗 نظام تأجير السيارات (مُحسّن جداً)
    // ==========================================

    // التحقق من بيانات السيارات
    function validateCarData() {
        const pickLoc = document.getElementById('carPickLoc').value;
        const dropLoc = document.getElementById('carDropLoc').value;
        const pickDate = document.getElementById('carPickDate').value;
        const dropDate = document.getElementById('carDropDate').value;
        const pickTime = document.getElementById('carPickTime').value;
        const dropTime = document.getElementById('carDropTime').value;
        
        const errors = [];
        
        if (!pickLoc) {
            document.getElementById('carPickLoc').classList.add('is-invalid');
            errors.push('موقع الاستلام مطلوب');
        }
        
        if (!dropLoc) {
            document.getElementById('carDropLoc').classList.add('is-invalid');
            errors.push('موقع التسليم مطلوب');
        }
        
        if (!pickDate) {
            document.getElementById('carPickDate').classList.add('is-invalid');
            errors.push('تاريخ الاستلام مطلوب');
        }
        
        if (!dropDate) {
            document.getElementById('carDropDate').classList.add('is-invalid');
            errors.push('تاريخ التسليم مطلوب');
        }
        
        if (pickDate && dropDate) {
            const pickDateTime = new Date(pickDate + 'T' + (pickTime || '00:00'));
            const dropDateTime = new Date(dropDate + 'T' + (dropTime || '00:00'));
            
            if (dropDateTime <= pickDateTime) {
                errors.push('تاريخ/وقت التسليم يجب أن يكون بعد تاريخ/وقت الاستلام');
            }
            
            const diffHours = (dropDateTime - pickDateTime) / (1000 * 60 * 60);
            if (diffHours < 3) {
                errors.push('مدة التأجير يجب أن تكون على الأقل 3 ساعات');
            }
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    // إضافة مستمعات الأحداث للسيارات
    document.getElementById('carPickDate')?.addEventListener('change', function() {
        const dropDate = document.getElementById('carDropDate');
        if (dropDate && this.value) {
            const pickDate = new Date(this.value);
            pickDate.setDate(pickDate.getDate() + 1);
            
            if (typeof flatpickr !== 'undefined') {
                const dropPicker = flatpickr(dropDate, {
                    minDate: this.value,
                    dateFormat: "Y-m-d",
                    disableMobile: true
                });
                dropPicker.set('minDate', this.value);
            }
        }
    });

    // ==========================================
    // 🎁 نظام الباقات الشاملة (مُحسّن جداً)
    // ==========================================

    // التحقق من بيانات الباقة
    function validatePackageData() {
        const dest = document.getElementById('pkgDest').value;
        const date = document.getElementById('pkgDate').value;
        const duration = document.getElementById('pkgDuration').value;
        
        const errors = [];
        
        if (!dest || dest.length < 2) {
            document.getElementById('pkgDest').classList.add('is-invalid');
            errors.push('الوجهة مطلوبة');
        }
        
        if (!date) {
            document.getElementById('pkgDate').classList.add('is-invalid');
            errors.push('تاريخ السفر مطلوب');
        }
        
        if (!duration || parseInt(duration) < 1) {
            document.getElementById('pkgDuration').classList.add('is-invalid');
            errors.push('المدة يجب أن تكون يوم واحد على الأقل');
        }
        
        if (parseInt(duration) > 90) {
            errors.push('المدة طويلة جداً، يرجى التواصل معنا مباشرة');
        }
        
        // التحقق من الميزانية
        const budget = document.getElementById('pkgBudget').value;
        if (budget === 'اقتصادية' && parseInt(duration) > 30) {
            errors.push('لا يمكن حجز باقة اقتصادية لأكثر من 30 يوم');
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    // حساب تكلفة الباقة التقديرية
    function calculatePackageEstimate() {
        const duration = parseInt(document.getElementById('pkgDuration').value) || 1;
        const budget = document.getElementById('pkgBudget').value;
        const flightClass = document.getElementById('pkgFlightClass').value;
        const hotelLevel = document.getElementById('pkgHotelLevel').value;
        
        let basePrice = 0;
        
        switch(budget) {
            case 'اقتصادية':
                basePrice = 50;
                break;
            case 'متوسطة':
                basePrice = 100;
                break;
            case 'VIP':
                basePrice = 250;
                break;
            case 'مفتوحة':
                basePrice = 500;
                break;
        }
        
        if (flightClass === 'بيزنس') basePrice *= 1.5;
        if (hotelLevel.includes('5')) basePrice *= 2;
        if (hotelLevel === 'منتجعات') basePrice *= 3;
        
        const totalEstimate = basePrice * duration;
        
        const estimateElement = document.getElementById('packageEstimate');
        if (estimateElement) {
            estimateElement.textContent = `~${Math.round(totalEstimate)} د.ك للفرد`;
            estimateElement.style.display = 'block';
        }
    }

    // إضافة مستمعات الأحداث للباقة
    document.getElementById('pkgDuration')?.addEventListener('input', calculatePackageEstimate);
    document.getElementById('pkgBudget')?.addEventListener('change', calculatePackageEstimate);
    document.getElementById('pkgFlightClass')?.addEventListener('change', calculatePackageEstimate);
    document.getElementById('pkgHotelLevel')?.addEventListener('change', calculatePackageEstimate);

    // ============================================================
    // 8. تشغيل السلايدر الملكي
    // ============================================================
    if (typeof Swiper !== 'undefined' && document.querySelector('.royalSwiper')) {
        const progressCircle = document.querySelector(".autoplay-timer circle");
        const progressContent = document.querySelector(".autoplay-timer span");

        const royalSwiper = new Swiper(".royalSwiper", {
            spaceBetween: 30,
            effect: "fade",
            fadeEffect: { crossFade: true },
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".royal-next-btn",
                prevEl: ".royal-prev-btn"
            },
            pagination: {
                el: ".royal-dots",
                clickable: true
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    if (progressCircle && progressContent) {
                        progressCircle.style.setProperty("--progress", 1 - progress);
                        progressContent.textContent = Math.ceil(time / 1000) + "s";
                    }
                }
            }
        });
    }

   // ============================================================
// 9. بيانات الباقات الشاملة (محدثة بصور واقعية)
// ============================================================
const packages = [
    { 
        id: 1,
        title: "العمرة المميزة 🇸🇦", 
        price: "350 د.ك", 
        img: "./images/79c082a17b5b8d4b8cece700fa344199.avif", 
        desc: "عمرة مميزة مع فندق 5 نجوم على بعد خطوات من الحرم المكي، نقل متميز، ومرشد ديني.",
        duration: "١٠ أيام",
        category: "عمرة",
        featured: true,
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "نقل فاخر", "مرشد ديني", "وجبات فاخرة"]
    },
    { 
        id: 2,
        title: "مصر | الأهرامات 🇪🇬", 
        price: "220 د.ك", 
        img: "./images/4079546d89edfdbd8329278d08e215e4.avif", 
        desc: "رحلة إلى تاريخ مصر: الأهرامات والمتحف المصري الكبير ونهر النيل.",
        duration: "٧ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "جولات سياحية", "نقل خاص", "مرشد سياحي"]
    },
    { 
        id: 3,
        title: "جدة التاريخية 🇸🇦", 
        price: "180 د.ك", 
        img: "./images/0577f84053ebd78f9b59615b09cf6ed8.avif", 
        desc: "استكشاف جدة التاريخية والكورنيش مع تجربة المأكولات السعودية الأصيلة.",
        duration: "٤ أيام",
        category: "رحلات سياحية",
        includes: ["تذكرة طيران", "فندق ممتاز", "جولات في البلدة القديمة", "رحلات بحرية", "تذوق الطعام المحلي"]
    },
    { 
        id: 4,
        title: "البحرين | المنامة 🇧🇭", 
        price: "160 د.ك", 
        img: "./images/3eb425504b4a144cc29688fad03837dd.avif", 
        desc: "زيارة شجرة الحياة ومتحف البحرين الوطني وجسر الملك فهد.",
        duration: "٣ أيام",
        category: "رحلات نهاية أسبوع",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "جولات سياحية", "عشاء في مطعم دوار", "نقل خاص"]
    },
    { 
        id: 5,
        title: "عُمان | مسقط 🇴🇲", 
        price: "280 د.ك", 
        img: "./images/5ad4c5b24b6f42e38a4f5db91ed57a05.avif", 
        desc: "اكتشف مسقط بين الجبال والشواطئ، مع جولات في الأسواق التقليدية.",
        duration: "٥ أيام",
        category: "رحلات طبيعية",
        includes: ["تذكرة طيران", "منتجع ٥ نجوم", "جولات في الجبال", "رحلات بحرية", "تذوق الطعام العماني"]
    },
    { 
        id: 6,
        title: "دبي | الأبراج 🇦🇪", 
        price: "190 د.ك", 
        img: "./images/photo-1512453979798-5ea266f8880c.avif", 
        desc: "تجربة دبي بين برج خليفة ودبي مول وأفضل المطاعم العالمية.",
        duration: "٤ أيام",
        category: "رحلات سياحية",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "تذاكر برج خليفة", "جولات تسوق", "عشاء في المطاعم الفاخرة"]
    },
    { 
        id: 7,
        title: "تركيا | إسطنبول 🇹🇷", 
        price: "320 د.ك", 
        img: "./images/photo-1524231757912-21f4fe3a7200.avif", 
        desc: "رحلة بين آيا صوفيا والمسجد الأزرق وجولة في مضيق البوسفور.",
        duration: "٦ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "جولات في المعالم التاريخية", "رحلات بحرية", "تذوق المأكولات التركية"]
    },
    { 
        id: 8,
        title: "المالديف 🇲🇻", 
        price: "850 د.ك", 
        img: "./images/photo-1514282401047-d79a71a590e8.avif", 
        desc: "إقامة فاخرة في فيلا فوق الماء مع شاطئ خاص وأنشطة بحرية.",
        duration: "٨ أيام",
        category: "رحلات فاخرة",
        includes: ["تذكرة طيران درجة رجال الأعمال", "فيلا فوق الماء", "إقامة شاملة", "أنشطة بحرية", "مساج سبا"]
    },
    { 
        id: 9,
        title: "اليونان | سانتوريني 🇬🇷", 
        price: "720 د.ك", 
        img: "./images/photo-1570077188670-e3a8d69ac5ff.avif", 
        desc: "إقامة في فندق كهفي مع إطلالة بانورامية على بحر إيجة.",
        duration: "٧ أيام",
        category: "رحلات شهر عسل",
        includes: ["تذكرة طيران", "فندق كهفي فاخر", "رحلات بحرية", "عشاء رومانسي", "جولات في الجزر"]
    },
    { 
        id: 10,
        title: "شرم الشيخ 🇪🇬", 
        price: "250 د.ك", 
        img: "./images/photo-1590523741831-ab7e8b8f9c7f.avif", 
        desc: "استجمام في أفضل منتجعات البحر الأحمر مع أنشطة الغوص والاسترخاء.",
        duration: "٥ أيام",
        category: "رحلات بحرية",
        includes: ["تذكرة طيران", "منتجع ٥ نجوم", "جولات غوص", "نقل خاص", "وجبات شاملة"]
    },
    { 
        id: 11,
        title: "باريس | مدينة الحب 🇫🇷", 
        price: "550 د.ك", 
        img: "./images/photo-1502602898657-3e91760cbb34.avif", 
        desc: "رومانسية برج إيفل وشوارع باريس مع تجارب ثقافية وفنية لا تنسى.",
        duration: "٦ أيام",
        category: "رحلات شهر عسل",
        includes: ["تذكرة طيران", "فندق بوتيك", "تذاكر المتاحف", "جولة نهر السين", "عشاء في برج إيفل"]
    },
    { 
        id: 12,
        title: "لندن | العاصمة 🇬🇧", 
        price: "480 د.ك", 
        img: "./images/photo-1513635269975-59663e0ac1ad.avif", 
        desc: "زيارة قصر باكنجهام وعين لندن والتسوق في أكسفورد ستريت.",
        duration: "٥ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق ٤ نجوم", "تذاكر المعالم", "بطاقة مترو", "جولات سياحية"]
    },
    { 
        id: 13,
        title: "برشلونة 🇪🇸", 
        price: "420 د.ك", 
        img: "./images/photo-1583422409516-2895a77efded.avif", 
        desc: "فنون غاودي وشواطئ البحر المتوسط وثقافة كاتالونيا الأصيلة.",
        duration: "٥ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق في المركز", "تذاكر ساغرادا فاميليا", "جولات في الحي القوطي", "تذوق التاباس"]
    },
    { 
        id: 14,
        title: "روما | المدينة الخالدة 🇮🇹", 
        price: "460 د.ك", 
        img: "./images/photo-1552832230-c0197dd311b5.avif", 
        desc: "رحلة عبر الزمن بين الكولوسيوم والفاتيكان ونوافير تريفي.",
        duration: "٦ أيام",
        category: "رحلات تاريخية",
        includes: ["تذكرة طيران", "فندق ٤ نجوم", "تذاكر المتاحف", "جولات تاريخية", "تذوق المطبخ الإيطالي"]
    },
    { 
        id: 15,
        title: "أبوظبي 🇦🇪", 
        price: "210 د.ك", 
        img: "./images//6ec9b4d47cd78c7b215e5ab973d767c0.avif", 
        desc: "استكشاف مسجد الشيخ زايد ومتحف اللوفر أبوظبي وجزيرة ياس.",
        duration: "٤ أيام",
        category: "رحلات سياحية",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "تذاكر الفراريج", "زيارة المسجد الكبير", "نقل خاص"]
    },
    { 
        id: 16,
        title: "الشارقة 🇦🇪", 
        price: "170 د.ك", 
        img: "./images//3eb425504b4a144cc29688fad03837dd.avif", 
        desc: "عاصمة الثقافة العربية مع متاحفها الفنية وسوقها التراثي.",
        duration: "٣ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق ٤ نجوم", "زيارة المتاحف", "جولة في السوق التراثي", "عروض ثقافية"]
    },
    { 
        id: 17,
        title: "العين 🇦🇪", 
        price: "190 د.ك", 
        img: "./images/pexels-shane-hao-1271834262-23914732.avif", 
        desc: "واحات خضراء وجبل حفيت مع تجارب طبيعية وتاريخية فريدة.",
        duration: "٣ أيام",
        category: "رحلات طبيعية",
        includes: ["تذكرة طيران", "فندق واحة", "زيارة الحديقة المائية", "تلفريك جبل حفيت", "نقل خاص"]
    },
    { 
        id: 18,
        title: "ماليزيا | كوالالمبور 🇲🇾", 
        price: "380 د.ك", 
        img: "./images/photo-1596422846543-75c6fc197f07.avif", 
        desc: "أبراج بتروناس والتسوق في الأسواق التقليدية والحدائق الخلابة.",
        duration: "٦ أيام",
        category: "رحلات سياحية",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "تذاكر الأبراج", "جولات تسوق", "رحلات إلى الجزر"]
    },
    { 
        id: 19,
        title: "تايلاند | بانكوك 🇹🇭", 
        price: "320 د.ك", 
        img: "./images/photo-1563492065599-3520f775eeed.avif", 
        desc: "معابد ذهبية وأسواق عائمة وتجارب سياحية لا تنتهي.",
        duration: "٥ أيام",
        category: "رحلات مغامرات",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "جولات في المعابد", "رحلات نهرية", "تدليك تايلاندي"]
    },
    { 
        id: 20,
        title: "بالي | إندونيسيا 🇮🇩", 
        price: "680 د.ك", 
        img: "./images/daaf881461295630396e2b76b4bcc514.avif", 
        desc: "جنة الاسترخاء مع فيلات خاصة وشواطئ خلابة وثقافة بالينية أصيلة.",
        duration: "٨ أيام",
        category: "رحلات شهر عسل",
        includes: ["تذكرة طيران", "فيلا خاصة", "جولات في المعابد", "رحلات بحرية", "جلسات سبا"]
    },
    { 
        id: 21,
        title: "سويسرا | جبال الألب 🇨🇭", 
        price: "890 د.ك", 
        img: "./images/photo-1506905925346-21bda4d32df4.avif", 
        desc: "تزلج في جبال الألب السويسرية مع إطلالات بانورامية لا مثيل لها.",
        duration: "٧ أيام",
        category: "رحلات فاخرة",
        includes: ["تذكرة طيران درجة رجال الأعمال", "منتجع جبلي", "تذاكر التزلج", "رحلات قطار جبلي", "عشاء في القمم"]
    },
    { 
        id: 22,
        title: "نيويورك 🇺🇸", 
        price: "950 د.ك", 
        img: "./images/photo-1496442226666-8d4d0e62e6e9.avif", 
        desc: "تايمز سكوير وتمثال الحرية وبروسبكت بارك مع تجربة المدينة التي لا تنام.",
        duration: "٨ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران درجة رجال الأعمال", "فندق ٥ نجوم", "تذاكر برج الحرية", "جولات في المتاحف", "عرض برودواي"]
    },
    { 
        id: 23,
        title: "فينيسيا 🇮🇹", 
        price: "580 د.ك", 
        img: "./images/photo-1514890547357-a9ee288728e0.avif", 
        desc: "رومانسية القنوات والجندول مع فنون عصر النهضة والهندسة المعمارية الفريدة.",
        duration: "٥ أيام",
        category: "رحلات شهر عسل",
        includes: ["تذكرة طيران", "فندق قناة", "جولة جندول", "زيارة قصر الدوج", "تذوق المطبخ الإيطالي"]
    },
    { 
        id: 24,
        title: "براغ 🇨🇿", 
        price: "340 د.ك", 
        img: "./images//0577f84053ebd78f9b59615b09cf6ed8.avif", 
        desc: "مدينة الأبراج الذهبية والجسور التاريخية والقلعة الملكية.",
        duration: "٤ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق تاريخي", "جولات في القلعة", "رحلات نهرية", "تذوق البيرة التشيكية"]
    },
    { 
        id: 25,
        title: "ريو دي جانيرو 🇧🇷", 
        price: "750 د.ك", 
        img: "./images/photo-1483729558449-99ef09a8c325.avif", 
        desc: "تمثال المسيح الفادي وشواطئ كوباكابانا وكوركوفادو.",
        duration: "٧ أيام",
        category: "رحلات مغامرات",
        includes: ["تذكرة طيران", "فندق ٥ نجوم", "تلفريك كوركوفادو", "جولات في الشواطئ", "عروض السامبا"]
    },
    { 
        id: 26,
        title: "تايلاند | بوكيت 🇹🇭", 
        price: "410 د.ك", 
        img: "./images/082ca6738f3248b4c0a6f2dd6695fae8.avif", 
        desc: "شواطئ بوكيت الذهبية مع جولات إلى جزر في في وفاي وفاي الغارقة.",
        duration: "٦ أيام",
        category: "رحلات بحرية",
        featured: true,
        includes: ["تذكرة طيران", "منتجع على الشاطئ", "رحلات إلى الجزر", "جولات بالقوارب", "تدليك تايلاندي"]
    },
    { 
        id: 27,
        title: "انجلترا | مانشستر ⚽", 
        price: "440 د.ك", 
        img: "./images/4b0f141ea7f7af0a1b50ad266c05a640.avif", 
        desc: "عاصمة كرة القدم الإنجليزية مع متاحف الصناعة والثقافة العمالية.",
        duration: "٤ أيام",
        category: "رحلات رياضية",
        includes: ["تذكرة طيران", "فندق ٤ نجوم", "جولة في ملعب أولد ترافورد", "زيارة متحف العلوم", "تذوق المطبخ البريطاني"]
    },
    { 
        id: 28,
        title: "انجلترا | ليفربول 🎵", 
        price: "420 د.ك", 
        img: "./images/7259276ac64180c5d336a8a5eac14841.avif", 
        desc: "مدينة البيتلز الأسطورية والميناء التاريخي مع التراث الموسيقي الفريد.",
        duration: "٤ أيام",
        category: "رحلات ثقافية",
        includes: ["تذكرة طيران", "فندق في المركز", "جولة في مسار البيتلز", "زيارة متحف البيتلز", "رحلات بحرية في الميرسيسايد"]
    },
    { 
        id: 29,
        title: "انجلترا | يورك 🏰", 
        price: "380 د.ك", 
        img: "./images/6aa9b7922b0307ffa843427c5ab283f3.avif", 
        desc: "المدينة العتيقة مع كاتدرائية يورك مينستر والأسوار الرومانية والطرقات الضيقة.",
        duration: "٣ أيام",
        category: "رحلات تاريخية",
        includes: ["تذكرة طيران", "فندق تراثي", "زيارة كاتدرائية يورك", "جولة في الأسوار الرومانية", "تذوق الشاي الإنجليزي التقليدي"]
    },
    { 
        id: 30,
        title: "اسبانيا | مدريد 🇪🇸", 
        price: "470 د.ك", 
        img: "./images/photo-1543785734-4b6e564642f8.avif", 
        desc: "عاصمة إسبانيا النابضة بالحياة مع متاحف برادو الشهيرة وقصر الملكي.",
        duration: "٥ أيام",
        category: "رحلات ثقافية",
        featured: true,
        includes: ["تذكرة طيران", "فندق في مركز المدينة", "تذاكر متحف برادو", "زيارة القصر الملكي", "عرض فلامنكو", "تذوق التاباس"]
    }

];


// ============================================================
// دالة عرض الباقات في الصفحة (تصميم بسيط + تحسين السيو)
// ============================================================
const destContainer = document.getElementById('allInclusiveContainer');

if (destContainer) {
    // 1. تجهيز البيانات
    const featuredPackages = packages.filter(pkg => pkg.featured);
    const regularPackages = packages.filter(pkg => !pkg.featured);
    const allPackages = [...featuredPackages, ...regularPackages];
    
    // 2. الرسم (مع تحسين الصورة)
    destContainer.innerHTML = allPackages.map((pkg, index) => `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="package-card-simple" data-id="${pkg.id}">
                
                <div class="package-image-simple">
                    <img 
                        src="${pkg.img}" 
                        alt="${pkg.title}" 
                        loading="lazy"           
                        decoding="async"         
                        width="400"              
                        height="250"             
                        style="aspect-ratio: 400/250; object-fit: cover;"
                        onerror="this.src='https://placehold.co/400x250?text=No+Image'"
                    >
                    
                    ${pkg.featured ? '<div class="featured-simple">مميزة</div>' : ''}
                    <div class="price-simple">${pkg.price}</div>
                    <div class="duration-simple">${pkg.duration}</div>
                </div>
                
                <div class="package-content-simple">
                    <div class="category-simple">${pkg.category}</div>
                    <h3 class="title-simple">${pkg.title}</h3>
                    <p class="description-simple">${pkg.desc}</p>
                    
                    <div class="package-buttons">
                        <button class="btn-details" data-id="${pkg.id}">
                            <i class="fas fa-eye"></i> التفاصيل
                        </button>
                        <button class="btn-whatsapp" data-id="${pkg.id}">
                            <i class="fab fa-whatsapp"></i> واتساب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================
// دالة الحجز عبر واتساب
// ============================================================
function bookViaWhatsApp(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    // نص رسالة واتساب
    const message = `مرحباً 👋

أريد حجز باقة: *${pkg.title}*
السعر: *${pkg.price}*
المدة: *${pkg.duration}*

الرجاء التواصل معي للتفاصيل والتأكيد.

مع تحياتي،
عميل فورموست 🛫`;

    const whatsappNumber = "96565865808";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
}

// ============================================================
// دالة عرض تفاصيل الباقة (مودال)
// ============================================================
function showPackageDetails(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    // إنشاء مودال التفاصيل
    const modalHTML = `
        <div class="modal fade" id="packageModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${pkg.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    
                    <div class="modal-body">
                        <!-- الصورة -->
                        <div class="modal-image-container mb-4">
                            <img src="${pkg.img}" alt="${pkg.title}" class="img-fluid rounded">
                            <div class="image-info">
                                <span class="modal-price">${pkg.price}</span>
                                <span class="modal-duration">${pkg.duration}</span>
                            </div>
                        </div>
                        
                        <!-- الوصف -->
                        <div class="mb-4">
                            <h6 class="section-title">وصف الرحلة</h6>
                            <p>${pkg.desc}</p>
                        </div>
                        
                        <!-- ما تتضمنه الباقة -->
                        <div class="mb-4">
                            <h6 class="section-title">تشمل الباقة</h6>
                            <div class="included-items">
                                ${pkg.includes.map(item => `
                                    <div class="item">
                                        <i class="fas fa-check text-success"></i>
                                        <span>${item}</span>
                                    </div>
                                `).join('')}
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
                        <button class="btn-share" data-id="${pkg.id}">
                            <i class="fas fa-share-alt"></i> مشاركة
                        </button>
                        <button class="btn-whatsapp-modal" data-id="${pkg.id}">
                            <i class="fab fa-whatsapp"></i> احجز عبر واتساب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // إضافة المودال للصفحة
    if (document.getElementById('packageModal')) {
        document.getElementById('packageModal').remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // عرض المودال
    const modal = new bootstrap.Modal(document.getElementById('packageModal'));
    modal.show();
    
    // إضافة أحداث للأزرار في المودال
    document.querySelector('.btn-whatsapp-modal').addEventListener('click', function() {
        bookViaWhatsApp(packageId);
        modal.hide();
    });
    
    document.querySelector('.btn-share').addEventListener('click', function() {
        sharePackage(pkg);
    });
    
    // تنظيف عند الإغلاق
    document.getElementById('packageModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// ============================================================
// دالة مشاركة الباقة
// ============================================================
function sharePackage(pkg) {
    if (navigator.share) {
        navigator.share({
            title: pkg.title,
            text: `اكتشف هذه الباقة الرائعة من فورموست للسياحة: ${pkg.desc} - السعر: ${pkg.price}`,
            url: window.location.href
        });
    } else {
        // نسخ الرابط
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('تم نسخ رابط الباقة!');
        });
    }
}

// ============================================================
// إضافة أحداث النقر
// ============================================================
document.addEventListener('click', function(e) {
    // زر التفاصيل
    if (e.target.closest('.btn-details')) {
        const btn = e.target.closest('.btn-details');
        const packageId = parseInt(btn.getAttribute('data-id'));
        showPackageDetails(packageId);
    }
    
    // زر واتساب
    if (e.target.closest('.btn-whatsapp')) {
        const btn = e.target.closest('.btn-whatsapp');
        const packageId = parseInt(btn.getAttribute('data-id'));
        bookViaWhatsApp(packageId);
    }
});

// ============================================================
// إضافة CSS للتصميم الجديد
// ============================================================
const style = document.createElement('style');
style.textContent = `
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
`;

document.head.appendChild(style);

// ============================================================
// إضافة فلتر للباقات
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // إضافة قسم الفلتر إذا كان موجوداً
    if (destContainer) {
        const filterHTML = `
            <div class="row mb-4" id="packagesFilter">
                <div class="col-12">
                    <h4 class="text-center mb-3" style="color: #0F2854;">اختر نوع رحلتك</h4>
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all">الكل</button>
                        <button class="filter-btn" data-filter="عمرة">عمرة</button>
                        <button class="filter-btn" data-filter="حج">حج</button>
                        <button class="filter-btn" data-filter="رحلات دينية">دينية</button>
                        <button class="filter-btn" data-filter="رحلات ثقافية">ثقافية</button>
                        <button class="filter-btn" data-filter="رحلات سياحية">سياحية</button>
                        <button class="filter-btn" data-filter="رحلات فاخرة">فاخرة</button>
                    </div>
                </div>
            </div>
        `;
        
        destContainer.insertAdjacentHTML('beforebegin', filterHTML);
        
        // إضافة أحداث الفلتر
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // تحديث الأزرار النشطة
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const cards = document.querySelectorAll('.package-card-simple');
                
                cards.forEach(card => {
                    const packageId = parseInt(card.closest('[data-id]')?.getAttribute('data-id') || card.getAttribute('data-id'));
                    const pkg = packages.find(p => p.id === packageId);
                    
                    if (!pkg) return;
                    
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        card.style.display = pkg.category === filter ? 'block' : 'none';
                    }
                });
            });
        });
    }
});

    // ============================================================
    // 10. منطق المودال الذكي
    // ============================================================
    const modalEl = document.getElementById('packageModal');
    const myModal = modalEl ? new bootstrap.Modal(modalEl) : null;

    document.addEventListener('click', function(e) {
        if(e.target && e.target.classList.contains('view-details-btn')) {
            e.preventDefault();
            const index = e.target.getAttribute('data-index');
            const pkg = packages[index];

            if(pkg && myModal) {
                const titleEl = document.getElementById('pkgModalTitle');
                const descEl = document.getElementById('pkgModalDesc');
                const priceEl = document.getElementById('pkgModalPrice');
                const imgEl = document.getElementById('pkgModalImg');
                const btnEl = document.getElementById('pkgModalBtn');

                if(titleEl) titleEl.innerText = pkg.title;
                if(descEl) descEl.innerText = pkg.desc;
                if(priceEl) priceEl.innerText = pkg.price;
                if(imgEl) imgEl.src = pkg.img;
                if(btnEl) btnEl.setAttribute('data-offer', pkg.title);

                myModal.show();
            }
        }

        if(e.target && (e.target.id === 'pkgModalBtn' || e.target.closest('#pkgModalBtn'))) {
            const btn = e.target.id === 'pkgModalBtn' ? e.target : e.target.closest('#pkgModalBtn');
            const offerName = btn.getAttribute('data-offer');
            
            const msg = `👋 مرحباً *Foremost Travels*،\n\n` +
                        `أرغب في الاستفسار عن حجز:\n` +
                        `🌟 *${offerName}* 🌟\n\n` +
                        `يرجى تزويدي بالتفاصيل المتاحة.\n` +
                        `شكراً لكم. 🌹`;
            
            window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        if(e.target && (e.target.classList.contains('btn-royal-book') || e.target.closest('.btn-royal-book'))) {
            const btn = e.target.classList.contains('btn-royal-book') ? e.target : e.target.closest('.btn-royal-book');
            const dealName = btn.getAttribute('data-deal');
            
            const msg = `👑 *طلب حجز عرض خاص (Limited)* 👑\n` +
                        `-----------------------\n` +
                        `أنا مهتم جداً بالعرض التالي:\n` +
                        `📌 *${dealName}*\n\n` +
                        `هل العرض ما زال متاحاً؟ يرجى الرد.`;
            
            window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        }
    });

    // ============================================================
    // 11. إخفاء/إظهار حقل العودة
    // ============================================================
    const flightInput = document.querySelectorAll('input[name="flightType"]');
    const retField = document.getElementById('fReturnDate');
    const retFieldlabel = document.getElementById('fReturnDateLabel');
    if(retField) {
        flightInput.forEach(input => input.addEventListener('change', function(){
            if(this.value === 'ذهاب فقط'){
                retField.style.visibility = 'hidden';
                retFieldlabel.style.visibility = 'hidden';
                retField.style.pointerEvents = 'none';
                retFieldlabel.style.pointerEvents = 'none';
                retField.value = '';
            } else {
                retField.style.visibility = 'visible';
                retField.style.pointerEvents = 'auto';
                retFieldlabel.style.visibility = 'visible';
                retFieldlabel.style.pointerEvents = 'auto';
            }
        }));
    }

    // ==========================================
    // 12. تشغيل التقويم الذكي
    // ==========================================
    if (typeof flatpickr !== 'undefined') {
        const commonConfig = {
            minDate: "today",
            dateFormat: "Y-m-d",
            disableMobile: true,
            locale: {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                    longhand: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                months: {
                    shorthand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                    longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                }
            }
        };

        flatpickr(".date-picker", commonConfig);
        const returnPicker = flatpickr("#fReturnDate", commonConfig);

        flatpickr("#fDepart", {
            ...commonConfig,
            onChange: function(selectedDates, dateStr) {
                if (returnPicker) {
                    returnPicker.set("minDate", dateStr);
                    if(returnPicker.selectedDates[0] < selectedDates[0]){
                        returnPicker.clear();
                    }
                }
            }
        });
        
        // إضافة التقويم للفنادق
        flatpickr("#hCheckIn", {
            ...commonConfig,
            onChange: function(selectedDates, dateStr) {
                const checkOutPicker = flatpickr("#hCheckOut");
                if (checkOutPicker) {
                    checkOutPicker.set("minDate", dateStr);
                }
            }
        });
        
        flatpickr("#hCheckOut", commonConfig);
        flatpickr("#trDate", commonConfig);
        flatpickr("#carPickDate", commonConfig);
        flatpickr("#carDropDate", commonConfig);
        flatpickr("#pkgDate", commonConfig);
    }

    // ==========================================
    // 13. API المطارات العالمي
    // ==========================================
    let globalAirportsDB = [];

    fetch('https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json')
        .then(response => response.json())
        .then(data => {
            globalAirportsDB = data.filter(port => port.iata_code && port.iata_code.length === 3);
            console.log(`✅ تم تحميل ${globalAirportsDB.length} مطار حول العالم بنجاح!`);
        })
        .catch(err => console.error("⚠️ خطأ في تحميل قاعدة بيانات المطارات:", err));

    // ==========================================
    // 14. محرك البحث للمطارات
    // ==========================================
   function setupAirportSearch(inputId, resultsId) {
        const input = document.getElementById(inputId);
        const results = document.getElementById(resultsId);
        
        // أمان: لو العنصر مش موجود، اخرج
        if(!input || !results) return;

        input.addEventListener('input', function() {
            const val = this.value.toLowerCase().trim();
            results.innerHTML = '';
            
            // لو الداتا لسه مجتش أو الكلام قليل
            if(typeof globalAirportsDB === 'undefined' || globalAirportsDB.length === 0 || val.length < 2) { 
                results.classList.remove('active'); 
                return; 
            }

            const matches = globalAirportsDB.filter(a => 
                (a.iata_code && a.iata_code.toLowerCase().includes(val)) || 
                (a.city && a.city.toLowerCase().includes(val)) || 
                (a.country && a.country.toLowerCase().includes(val)) ||
                (a.name && a.name.toLowerCase().includes(val))
            ).slice(0, 10); 
            
            if(matches.length > 0) {
                results.classList.add('active');
                matches.forEach(a => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">${a.city}, ${a.country}</span>
                                <small class="text-muted" style="font-size: 0.8rem;">
                                    <i class="fas fa-plane-departure me-1"></i> ${a.name}
                                </small>
                            </div>
                            <span class="iata-badge bg-primary text-white shadow-sm" style="padding: 4px 8px; border-radius: 6px;">${a.iata_code}</span>
                        </div>
                    `;
                    
                    li.addEventListener('click', (e) => {
                        e.stopPropagation();
                        input.value = `${a.city} (${a.iata_code})`;
                        results.classList.remove('active');
                        results.innerHTML = ''; // تنظيف
                    });
                    results.appendChild(li);
                });
            } else {
                results.classList.remove('active');
            }
        });

        // إغلاق القائمة عند الضغط خارجها
        document.addEventListener('click', (e) => {
            if(e.target !== input && e.target !== results) {
                results.classList.remove('active');
            }
        });
    }

    // 🔥🔥🔥 الخطوة المهمة جداً: جعل الدالة عالمية (Global) 🔥🔥🔥
    // عشان نقدر ننادي عليها من دالة إضافة الوجهة
    window.setupAirportSearchGlobal = setupAirportSearch;


    // ==========================================
    // 2. تفعيل البحث للخانات الأساسية (الأولى)
    // ==========================================
    setupAirportSearch('fFrom', 'results-fFrom');
    setupAirportSearch('fTo', 'results-fTo');
    setupAirportSearch('pkgFlightFrom', 'results-pkgFlightFrom');
    // لو عندك خانات تانية في الصفحة شغلها هنا
    






    // ============================================================
    // 🌍 محرك بحث المدن والمناطق (عالمي + عربي/إنجليزي)
    // ============================================================
    
    function setupGlobalCitySearch(inputId, resultsId) {
        const input = document.getElementById(inputId);
        const results = document.getElementById(resultsId);
        
        // أمان: لو العنصر مش موجود اخرج
        if(!input || !results) return;

        let timeout; // عشان نتحكم في سرعة الكتابة (Debounce)

        input.addEventListener('input', function() {
            // 1. تنظيف التايمر القديم عشان ميبعتش طلبات كتير
            clearTimeout(timeout);
            
            const val = this.value.trim();
            
            // لو الكلام أقل من حرفين، امسح القائمة واخرج
            if (val.length < 2) { 
                results.classList.remove('active'); 
                results.innerHTML = '';
                return; 
            }

            // 2. استنى 300 مللي ثانية (عشان المتصفح يرتاح) وبعدين ابحث
            timeout = setTimeout(() => {
                
                // رابط الـ API السحري
                // q=${val}: الكلمة اللي كتبتها
                // addressdetails=1: هات تفاصيل العنوان (عشان نعرف البلد)
                // limit=10: هات 10 نتايج بس
                // accept-language=ar,en: النتايج تطلع بالعربي الأول، ولو مفيش يبقى إنجليزي
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${val}&addressdetails=1&limit=10&accept-language=ar,en`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        results.innerHTML = ''; // تنظيف القائمة القديمة
                        
                        if (data.length > 0) {
                            results.classList.add('active'); // إظهار القائمة
                            
                            // فلترة النتايج (عشان نستبعد الحاجات الغريبة)
                            data.forEach(item => {
                                const li = document.createElement('li');
                                
                                // تظبيط شكل العرض (اسم المدينة - الدولة)
                                // بنفصل الاسم الطويل عشان ناخذ أول جزء بس (المدينة)
                                let mainName = item.name || item.display_name.split(',')[0];
                                
                                // بنحاول نجيب اسم الدولة والمدينة بذكاء
                                let country = item.address.country || "";
                                let region = item.address.state || item.address.region || item.address.city || "";
                                
                                // تصميم النتيجة داخل القائمة
                                li.innerHTML = `
                                    <div class="d-flex align-items-center">
                                        <div class="bg-light rounded-circle p-2 me-2 text-danger">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">${mainName}</span>
                                            <small class="text-muted" style="font-size: 0.75rem;">
                                                ${region ? region + '، ' : ''} ${country}
                                            </small>
                                        </div>
                                    </div>
                                `;
                                
                                // 🔥🔥 اللحظة الحاسمة: عند الضغط 🔥🔥
                                li.addEventListener('click', (e) => { 
                                    e.stopPropagation(); // منع أي تداخل
                                    
                                    // 1. حط الاسم في الخانة (اسم المدينة + الدولة)
                                    input.value = `${mainName}، ${country}`;
                                    
                                    // 2. اخفي القائمة فوراً
                                    results.classList.remove('active'); 
                                    results.innerHTML = '';
                                    results.style.display = 'none'; // زيادة تأكيد
                                    
                                    // رجع الخاصية display بعد لحظة عشان تشتغل المرة الجاية
                                    setTimeout(() => results.style.display = '', 200);
                                });
                                
                                results.appendChild(li);
                            });
                        } else {
                            results.classList.remove('active');
                        }
                    })
                    .catch(err => {
                        console.log('Search Error:', err);
                        results.classList.remove('active');
                    });
            }, 300);
        });

        // 🔥 إغلاق القائمة عند الضغط في أي مكان خارجها 🔥
        document.addEventListener('click', function(e) {
            if (e.target !== input && e.target !== results) {
                results.classList.remove('active');
                results.innerHTML = '';
            }
        });
    }

    // ==========================================
    // 🚀 تشغيل البحث لكل الخانات (ماعدا الطيران)
    // ==========================================
    
    // 1. فنادق 🏨
    setupGlobalCitySearch('hCity', 'results-hCity');

    // 2. قطارات 🚆
    setupGlobalCitySearch('trOrigin', 'results-trOrigin'); // محطة الانطلاق
    setupGlobalCitySearch('trDest', 'results-trDest');     // محطة الوصول

    // 3. سيارات 🚗
    setupGlobalCitySearch('carPickLoc', 'results-carPickLoc'); // استلام
    setupGlobalCitySearch('carDropLoc', 'results-carDropLoc'); // تسليم

    // 4. الباقة الشاملة 🎁
    setupGlobalCitySearch('pkgDest', 'results-pkgDest');



    // ==========================================
    // 🚀 15. المحرك الرئيسي: إرسال الطلب إلى واتساب
    // ==========================================
    const megaForm = document.getElementById('megaBookingForm');

    if(megaForm) {
        console.log("✅ تم العثور على نموذج الحجز");
        
        megaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("✅ زر الإرسال تم الضغط عليه!");
            
            // إضافة تأثير التحميل
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> جاري الإرسال...';
            submitBtn.disabled = true;
            
            // --- أ. التحقق من البيانات الشخصية ---
            const fName = document.getElementById('fName').value.trim();
            const mName = document.getElementById('mName').value.trim();
            const lName = document.getElementById('lName').value.trim();
            const fullName = `${fName} ${mName} ${lName}`;

            const email = document.getElementById('uEmail').value.trim();
            
            // سحب الرقم بالكود الدولي
            let fullPhone = "";
            if (iti && iti.isValidNumber()) {
                fullPhone = iti.getNumber();
            } else {
                const phoneInput = document.querySelector("#uPhone");
                fullPhone = phoneInput ? phoneInput.value : "";
            }

            const passNum = document.getElementById('uPassportNum').value.trim();
            const passExp = document.getElementById('uPassportExp').value.trim();
            const nationality = document.getElementById('uNationality').value.trim();
            const notes = document.getElementById('uNotes').value.trim();

            // التحقق الأساسي
            const nameValidation = Validator.validateFullName(fName, mName, lName);
            if (!nameValidation.isValid) {
                showError(nameValidation.message);
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            const emailValidation = Validator.validateEmail(email);
            if (!emailValidation.isValid) {
                showError(emailValidation.message);
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            const phoneValidation = Validator.validatePhone(fullPhone);
            if (!phoneValidation.isValid) {
                showError(phoneValidation.message);
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            const passportValidation = Validator.validatePassport(passNum, passExp);
            if (!passportValidation.isValid) {
                showError(passportValidation.message);
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            if (!nationality || nationality.length < 2) {
                showError("⚠️ الجنسية مطلوبة");
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            // --- ب. التحقق من تفاصيل الخدمة حسب النوع ---
            let serviceValidation = { isValid: true, message: '' };
            
            switch(window.currentService) {
                case 'طيران':
                    serviceValidation = validateFlightData();
                    break;
                case 'فنادق':
                    serviceValidation = validateHotelServiceData();
                    break;
                case 'قطارات':
                    serviceValidation = validateTrainServiceData();
                    break;
                case 'سيارات':
                    serviceValidation = validateCarServiceData();
                    break;
                case 'باقة شاملة':
                    serviceValidation = validatePackageServiceData();
                    break;
            }

            if (!serviceValidation.isValid) {
                showError(serviceValidation.message || "⚠️ هناك خطأ في بيانات الخدمة المختارة");
                resetSubmitBtn(submitBtn, originalBtnText);
                return;
            }

            // --- ج. تجميع تفاصيل الخدمة ---
            let serviceDetails = "";
            let emoji = "✈️";
            
            if (window.currentService === 'طيران') {
                emoji = "✈️";
                serviceDetails = getFlightDetails();
            } 
            else if (window.currentService === 'فنادق') {
                emoji = "🏨";
                serviceDetails = getHotelDetails();
            }
            else if (window.currentService === 'قطارات') {
                emoji = "🚆";
                serviceDetails = getTrainDetails();
            }
            else if (window.currentService === 'سيارات') {
                emoji = "🚗";
                serviceDetails = getCarDetails();
            }
            else if (window.currentService === 'باقة شاملة') {
                emoji = "🎁";
                serviceDetails = getPackageDetails();
            }

            // --- د. صياغة الرسالة النهائية ---
            const finalMessage = formatFinalMessage(
                fullName, nationality, fullPhone, email,
                emoji, serviceDetails, notes
            );

            console.log("📱 جاري فتح واتساب...");
            
            // --- هـ. فتح الواتساب ---
            const whatsappUrl = `https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
            
            // تأخير بسيط لرؤية تأثير التحميل
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                resetSubmitBtn(submitBtn, originalBtnText);
                
                // إظهار رسالة نجاح
                Swal.fire({
                    title: '✅ تم الإرسال بنجاح!',
                    text: 'سيتم التواصل معك قريباً عبر الواتساب',
                    icon: 'success',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor: '#0F2854'
                });
            }, 1000);
        });
    }

    // ==========================================
    // 🔧 دوال المساعدة
    // ==========================================

    function showError(message) {
        Swal.fire({
            title: '⚠️ خطأ في البيانات',
            text: message,
            icon: 'error',
            confirmButtonText: 'تصحيح',
            confirmButtonColor: '#dc3545'
        });
    }

    function resetSubmitBtn(btn, originalText) {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }

    // ==========================================
    // 🔍 دوال التحقق لكل خدمة
    // ==========================================

    function validateFlightData() {
        const from = document.getElementById('fFrom').value.trim();
        const to = document.getElementById('fTo').value.trim();
        const date = document.getElementById('fDepart').value.trim();
        const adults = document.getElementById('fAdults').value;
        const kids = document.getElementById('fKids').value;
        const infants = document.getElementById('fInfants').value;
        
        if (!from) {
            return { isValid: false, message: "⚠️ مكان المغادرة مطلوب" };
        }
        
        if (!to) {
            return { isValid: false, message: "⚠️ مكان الوصول مطلوب" };
        }
        
        if (!date) {
            return { isValid: false, message: "⚠️ تاريخ السفر مطلوب" };
        }
        
        const passengerValidation = Validator.validatePassengers(adults, kids, infants, 'طيران');
        if (!passengerValidation.isValid) {
            return passengerValidation;
        }
        
        // التحقق من تاريخ الميلاد للمسافرين
        const dobInputs = document.querySelectorAll('#dynamic-dob-container input.dob-picker');
        for (let input of dobInputs) {
            if (!input.value) {
                return { isValid: false, message: "⚠️ جميع تواريخ الميلاد مطلوبة" };
            }
        }
        
        return { isValid: true, message: '' };
    }

    function validateHotelServiceData() {
    const city = document.getElementById('hCity').value.trim();
    const checkIn = document.getElementById('hCheckIn').value.trim();
    const checkOut = document.getElementById('hCheckOut').value.trim();
    const adults = document.getElementById('hAdults').value;
    const kids = document.getElementById('hKids').value;
    const infants = document.getElementById('hInfants').value;
    
    if (!city) {
        return { isValid: false, message: "⚠️ الوجهة الفندقية مطلوبة" };
    }
    
    if (!checkIn) {
        return { isValid: false, message: "⚠️ تاريخ الدخول مطلوب" };
    }
    
    if (!checkOut) {
        return { isValid: false, message: "⚠️ تاريخ الخروج مطلوب" };
    }
    
    const passengerValidation = Validator.validatePassengers(adults, kids, infants, 'فنادق');
    if (!passengerValidation.isValid) {
        return passengerValidation;
    }
    
    // التحقق من تاريخ الميلاد للمسافرين
    const dobInputs = document.querySelectorAll('#hotel-dynamic-dob-container input.hotel-dob-picker');
    for (let input of dobInputs) {
        if (!input.value) {
            return { isValid: false, message: "⚠️ جميع تواريخ الميلاد مطلوبة" };
        }
    }
    
    return { isValid: true, message: '' };
}


function validateTrainServiceData() {
    const origin = document.getElementById('trOrigin').value;
    const dest = document.getElementById('trDest').value;
    const date = document.getElementById('trDate').value;
    const adults = document.getElementById('tAdults').value;
    const kids = document.getElementById('tKids').value;
    const infants = document.getElementById('tInfants').value;
    
    if (!origin) {
        return { isValid: false, message: "⚠️ محطة الانطلاق مطلوبة" };
    }
    
    if (!dest) {
        return { isValid: false, message: "⚠️ محطة الوصول مطلوبة" };
    }
    
    if (!date) {
        return { isValid: false, message: "⚠️ تاريخ الرحلة مطلوب" };
    }
    
    if (origin === dest) {
        return { isValid: false, message: "⚠️ محطة الانطلاق ومحطة الوصول يجب أن تكونا مختلفتين" };
    }

    const passengerValidation = Validator.validatePassengers(adults, kids, infants, 'قطارات');
    if (!passengerValidation.isValid) {
        return passengerValidation;
    }

    // التحقق من تاريخ الميلاد للمسافرين
    const dobInputs = document.querySelectorAll('#train-dynamic-dob-container input.train-dob-picker');
    for (let input of dobInputs) {
        if (!input.value) {
            return { isValid: false, message: "⚠️ جميع تواريخ الميلاد مطلوبة" };
        }
    }
    
    return { isValid: true, message: '' };
}




   function validateCarServiceData() {
    const pickLoc = document.getElementById('carPickLoc').value;
    const dropLoc = document.getElementById('carDropLoc').value;
    const pickDate = document.getElementById('carPickDate').value;
    const dropDate = document.getElementById('carDropDate').value;
    const pickTime = document.getElementById('carPickTime').value;
    const dropTime = document.getElementById('carDropTime').value;
    
    const errors = [];
    
    if (!pickLoc) errors.push('موقع الاستلام مطلوب');
    if (!dropLoc) errors.push('موقع التسليم مطلوب');
    if (!pickDate) errors.push('تاريخ الاستلام مطلوب');
    if (!dropDate) errors.push('تاريخ التسليم مطلوب');
    
    if (errors.length > 0) {
        return { 
            isValid: false, 
            message: "⚠️ " + errors.join('، ') 
        };
    }
    
    return { isValid: true, message: '' };
}



function validatePackageServiceData() {
    const dest = document.getElementById('pkgDest').value;
    const date = document.getElementById('pkgDate').value;
    const duration = document.getElementById('pkgDuration').value;
    
    const errors = [];
    
    if (!dest || dest.length < 2) errors.push('الوجهة مطلوبة');
    if (!date) errors.push('تاريخ السفر مطلوب');
    if (!duration || parseInt(duration) < 1) errors.push('المدة يجب أن تكون يوم واحد على الأقل');
    
    if (errors.length > 0) {
        return { 
            isValid: false, 
            message: "⚠️ " + errors.join('، ') 
        };
    }
    
    return { isValid: true, message: '' };
}




    // تفعيل نظام الفنادق
document.getElementById('hCheckIn')?.addEventListener('change', function() {
    calculateStayDuration();
    validateHotelDates();
});

document.getElementById('hCheckOut')?.addEventListener('change', function() {
    calculateStayDuration();
    validateHotelDates();
});

document.getElementById('hAdults')?.addEventListener('change', renderHotelDob);
document.getElementById('hKids')?.addEventListener('change', renderHotelDob);
document.getElementById('hInfants')?.addEventListener('change', renderHotelDob);

setupHotelStars();
calculateStayDuration();
renderHotelDob();

// تفعيل نظام القطارات
document.getElementById('tAdults')?.addEventListener('change', renderTrainDob);
document.getElementById('tKids')?.addEventListener('change', renderTrainDob);
document.getElementById('tInfants')?.addEventListener('change', renderTrainDob);

renderTrainDob();

// تفعيل نظام الطيران
if(adultsSelect && kidsSelect && infantsSelect) {
    adultsSelect.addEventListener('change', renderDynamicDates);
    kidsSelect.addEventListener('change', renderDynamicDates);
    infantsSelect.addEventListener('change', renderDynamicDates);
    renderDynamicDates();
}
    // ==========================================
    // 📝 دوال جمع تفاصيل الخدمات
    // ==========================================

    function getFlightDetails() {
        const typeEl = document.querySelector('input[name="flightType"]:checked');
        const type = typeEl ? typeEl.value : "غير محدد";
        
        const from = document.getElementById('fFrom').value.trim();
        const to = document.getElementById('fTo').value.trim();
        const date = document.getElementById('fDepart').value.trim();
        const retDate = document.getElementById('fReturnDate').value.trim() || "لا يوجد";
        const cls = document.getElementById('fClass').value;
        
        const adults = document.getElementById('fAdults').value;
        const kids = document.getElementById('fKids').value;
        const infants = document.getElementById('fInfants').value;
        const totalPassengers = parseInt(adults) + parseInt(kids) + parseInt(infants);
        
        return `✈️ *نوع الرحلة:* ${type}
🗺️ *المسار الأساسي:* ${from} ⬅️ ${to}
📅 *تاريخ الذهاب:* ${date}
📅 *تاريخ العودة:* ${type === 'ذهاب وعودة' ? retDate : "لا يوجد"}
💺 *درجة التذكرة:* ${cls}

👥 *تفاصيل المسافرين:*
• 👨‍💼 البالغين (+12 سنة): ${adults} مسافر
• 👶 الأطفال (2-11 سنة): ${kids} مسافر
• 🍼 الرضع (0-2 سنة): ${infants} مسافر
• ✅ *الإجمالي:* ${totalPassengers} مسافر`;
    }

    function getHotelDetails() {
        const city = document.getElementById('hCity').value.trim();
        const checkIn = document.getElementById('hCheckIn').value.trim();
        const checkOut = document.getElementById('hCheckOut').value.trim();
        const rooms = document.getElementById('hRooms').value;
        const roomType = document.getElementById('hRoomType').value || "غير محدد";
        const boardType = document.getElementById('hBoardType').value || "غير محدد";
        
        const starsInput = document.querySelector('input[name="hotelStars"]:checked');
        const stars = starsInput ? `${starsInput.value} نجوم` : "غير محدد";
        
        const adults = document.getElementById('hAdults').value;
        const kids = document.getElementById('hKids').value;
        const infants = document.getElementById('hInfants').value;
        const totalPassengers = parseInt(adults) + parseInt(kids) + parseInt(infants);
        
        return `🏨 *الوجهة:* ${city || "غير محدد"}
📅 *فترة الإقامة:* ${checkIn || "غير محدد"} ➡️ ${checkOut || "غير محدد"}
🏢 *عدد الغرف:* ${rooms} غرفة
🛏️ *نوع الغرفة:* ${roomType}
🍽️ *نوع الإقامة:* ${boardType}
⭐ *تصنيف الفندق:* ${stars}

👥 *تفاصيل المسافرين:*
• البالغين: ${adults} مسافر
• الأطفال: ${kids} مسافر
• الرضع: ${infants} مسافر
• إجمالي المسافرين: ${totalPassengers}`;
    }

    function getTrainDetails() {
        const from = document.getElementById('trOrigin').value || "غير محدد";
        const to = document.getElementById('trDest').value || "غير محدد";
        const date = document.getElementById('trDate').value || "غير محدد";
        const time = document.getElementById('trTime').value || "غير محدد";
        const trainClass = document.getElementById('trClass').value || "غير محدد";

        const adults = document.getElementById('tAdults').value;
        const kids = document.getElementById('tKids').value;
        const infants = document.getElementById('tInfants').value;
        const totalPassengers = parseInt(adults) + parseInt(kids) + parseInt(infants);

        return `🚆 *نوع الخدمة:* رحلة قطار
📍 *من:* ${from}
📍 *إلى:* ${to}
📅 *التاريخ:* ${date}
🕒 *الوقت المفضل:* ${time}
🎫 *درجة القطار:* ${trainClass}`;
    }

    function getCarDetails() {
        const pLoc = document.getElementById('carPickLoc').value || "غير محدد";
        const dLoc = document.getElementById('carDropLoc').value || "غير محدد";
        const pDate = document.getElementById('carPickDate').value || "غير محدد";
        const pTime = document.getElementById('carPickTime').value || "غير محدد";
        const dDate = document.getElementById('carDropDate').value || "غير محدد";
        const dTime = document.getElementById('carDropTime').value || "غير محدد";
        const carType = document.getElementById('carCategory').value || "غير محدد";
        const driver = document.getElementById('carDriverAge').value || "غير محدد";
        
        return `🚗 *نوع الخدمة:* تأجير سيارة
📍 *موقع الاستلام:* ${pLoc}
📅 *تاريخ/وقت الاستلام:* ${pDate} - ${pTime}
📍 *موقع التسليم:* ${dLoc}
📅 *تاريخ/وقت التسليم:* ${dDate} - ${dTime}
🎯 *فئة السيارة:* ${carType}
👨‍✈️ *عمر السائق:* ${driver}`;
    }

    function getPackageDetails() {
        const dest = document.getElementById('pkgDest').value || "غير محدد";
        const date = document.getElementById('pkgDate').value || "غير محدد";
        const dur = document.getElementById('pkgDuration').value || "1";
        const pkgType = document.querySelector('input[name="pkgType"]:checked')?.value || "غير محدد";
        const budget = document.getElementById('pkgBudget').value || "غير محدد";
        const flightClass = document.getElementById('pkgFlightClass').value || "غير محدد";
        const hotelLevel = document.getElementById('pkgHotelLevel').value || "غير محدد";
        
        const incFlight = document.getElementById('incFlight')?.checked ? "نعم" : "لا";
        const incHotel = document.getElementById('incHotel')?.checked ? "نعم" : "لا";
        const incCar = document.getElementById('incCar')?.checked ? "نعم" : "لا";
        const incTransfers = document.getElementById('incTransfers')?.checked ? "نعم" : "لا";
        const incVisa = document.getElementById('incVisa')?.checked ? "نعم" : "لا";
        const incGuide = document.getElementById('incGuide')?.checked ? "نعم" : "لا";
        
        return `🎁 *نوع الرحلة:* ${pkgType}
📍 *الوجهة:* ${dest}
📅 *تاريخ السفر:* ${date}
⏱️ *المدة:* ${dur} ليالي
💰 *الميزانية:* ${budget}

✈️ *تذاكر الطيران:* ${incFlight} (${flightClass})
🏨 *الفنادق:* ${incHotel} (${hotelLevel})
🚗 *سيارة خاصة:* ${incCar}
🚐 *استقبال وتوديع:* ${incTransfers}
📋 *تأشيرات:* ${incVisa}
👨‍🏫 *مرشد سياحي:* ${incGuide}`;
    }

    function formatFinalMessage(fullName, nationality, fullPhone, email, emoji, serviceDetails, notes) {
        return `🌍 *طلب حجز جديد - FOREMOST TRAVELS* 🌍

═════════════════════════════════════════

👤 *البيانات الشخصية للمسؤول عن الحجز:*
• الاسم الكامل: ${fullName}
• الجنسية: ${nationality}
• رقم الهاتف: ${fullPhone}
• البريد الإلكتروني: ${email}

═════════════════════════════════════════
${emoji} *تفاصيل الحجز (${window.currentService}):*
${serviceDetails}

═════════════════════════════════════════

📝 *ملاحظات إضافية:* ${notes || "لا يوجد"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*FOREMOST TRAVELS - رحلتك بلمسة فاخرة*
📞 للاستفسار: +965 6586 5808
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*يرجى الرد بأفضل الأسعار والتفاصيل المطلوبة.* 🌹
*نتمنى لكم رحلة سعيدة!* ✈️🏨🚗`;
    }

    // ==========================================
    // 🎯 تحسينات إضافية لتجربة المستخدم
    // ==========================================

    // إضافة تأثيرات للمساعدة
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // إضافة مؤشر التقدم
    function updateProgress() {
        const currentTab = document.querySelector('.tab-pane.active');
        if (currentTab) {
            const progress = 50; // يمكن حساب النسبة المئوية حسب الحقول المملوءة
            const progressBar = document.getElementById('formProgress');
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
                progressBar.setAttribute('aria-valuenow', progress);
                progressBar.textContent = `${progress}%`;
            }
        }
    }

    // تحديث التقدم عند تغيير الحقول
    document.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('change', updateProgress);
        field.addEventListener('input', updateProgress);
    });


// ============================================================
// زر الصعود للأعلى (Updated with Smooth Class)
// ============================================================
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', function() {
    // لما ننزل 400 بكسل
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block"; // تأكد إنه موجود في الـ DOM
        // تأخير بسيط عشان الأنيميشن يشتغل
        setTimeout(() => {
            scrollBtn.classList.add("show");
        }, 10);
    } else {
        scrollBtn.classList.remove("show");
        // نستنى الأنيميشن يخلص قبل ما نخفيه
        setTimeout(() => {
            if (!scrollBtn.classList.contains("show")) {
                scrollBtn.style.display = "none";
            }
        }, 400);
    }
});

scrollBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

 

});





