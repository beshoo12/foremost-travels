const COMPANY_NUMBER="96565865808",COMPANY_NAME="FOREMOST Travels";function getSafeVal(e){const t=document.getElementById(e);return t?t.value.trim():""}const Validator={validateFullName:function(e,t,a){return!e||2>e.length?{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"}:!t||2>t.length?{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0633\u0637 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"}:!a||2>a.length?{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646"}:{isValid:!0}},validateEmail:function(e){return e&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?{isValid:!0}:{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D"}},validatePhone:function(e){return!e||10>e.replace(/\D/g,"").length?{isValid:!1,message:"\u26A0\uFE0F \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 10 \u0623\u0631\u0642\u0627\u0645"}:{isValid:!0}},validatePassport:function(e,t){return!e||6>e.length?{isValid:!1,message:"\u26A0\uFE0F \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D"}:t?{isValid:!0}:{isValid:!1,message:"\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062C\u0648\u0627\u0632 \u0645\u0637\u0644\u0648\u0628"}},validateDate:function(e,t){if(!e)return{isValid:!1,message:`⚠️ ${t} مطلوب`};const a=new Date(e);return isNaN(a.getTime())?{isValid:!1,message:`⚠️ ${t} غير صحيح`}:{isValid:!0}},validateDestination:function(e,t){return!e||2>e.length?{isValid:!1,message:`⚠️ ${t} يجب أن يكون على الأقل حرفين`}:{isValid:!0}},validatePassengers:function(e,t,a){const i=parseInt(e||0)+parseInt(t||0)+parseInt(a||0);return 0===i?{isValid:!1,message:"\u26A0\uFE0F \u064A\u062C\u0628 \u062A\u062D\u062F\u064A\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646"}:9<i?{isValid:!1,message:"\u26A0\uFE0F \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A"}:20<i?{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0628\u0627\u0634\u0631\u0629"}:0===parseInt(e||0)&&0<parseInt(t||0)?{isValid:!1,message:"\u26A0\uFE0F \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0647\u0646\u0627\u0643 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u0634\u062E\u0635 \u0628\u0627\u0644\u063A \u0648\u0627\u062D\u062F"}:{isValid:!0}}};document.addEventListener("DOMContentLoaded",function(){function t(){H.classList.toggle("active"),P.classList.toggle("active")}function a(){const e=new Date,t=["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0627\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"][e.getDay()],a=["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"][e.getMonth()],i=e.getDate(),n=e.getFullYear();let l=e.getHours(),d=e.getMinutes(),s=e.getSeconds();const r=12<=l?"\u0645":"\u0635";l%=12,l=l?l:12,d=10>d?"0"+d:d,s=10>s?"0"+s:s;const o=`${l}:${d}:${s} ${r}`,c=document.getElementById("date-time");c&&(c.innerHTML=`
                <span class="date-part">
                    <i class="fas fa-calendar-alt me-1"></i> ${`${t}، ${i} ${a} ${n}`}
                </span>
                <span class="mx-2">|</span>
                <span class="time-part">
                    <i class="fas fa-clock me-1"></i> ${o}
                </span>
            `)}function i(e,t){const a=document.getElementById(e);if(!a)return!0;const i=document.getElementById(`${e}-error`);let n=!0,l="";switch(e){case"fName":case"mName":case"lName":(!t||2>t.length)&&(n=!1,l="\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646");break;case"uEmail":t&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(n=!1,l="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");break;case"uPassportNum":(!t||6>t.length)&&(n=!1,l="\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0632 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");break;case"hCity":case"trOrigin":case"trDest":case"carPickLoc":case"carDropLoc":case"pkgDest":(!t||2>t.length)&&(n=!1,l="\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062D\u0631\u0641\u064A\u0646");}return n?(a.classList.remove("is-invalid"),a.classList.add("is-valid"),i&&(i.textContent="")):(a.classList.remove("is-valid"),a.classList.add("is-invalid"),i&&(i.textContent=l)),n}function n(){const e=parseInt(z.value)||0,t=parseInt(J.value)||0,a=parseInt(Q.value)||0,i=e+t+a;if(9<i)return Swal.fire({icon:"warning",title:"\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",text:"\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0643\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",confirmButtonText:"\u062D\u0633\u0646\u0627\u064B",confirmButtonColor:"#0F2854",iconColor:"#C5A059"}),z.value=Math.min(e,9),J.value=0,void(Q.value=0);if(0===i)return void(U.style.display="none");U.style.display="flex";let n="<h6 class=\"text-primary fw-bold border-bottom pb-2 mb-2 w-100\"><i class=\"far fa-calendar-alt me-2\"></i> \u062A\u0648\u0627\u0631\u064A\u062E \u0645\u064A\u0644\u0627\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646 (\u0645\u0637\u0644\u0648\u0628)</h6>";for(let t=1;t<=e;t++)n+=`
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (المسافر رقم ${t})</label>
            <input type="text" class="form-control dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;for(let e=1;e<=t;e++)n+=`
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل رقم ${e})</label>
            <input type="text" class="form-control dob-picker child-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;for(let e=1;e<=a;e++)n+=`
        <div class="col-md-4 animate__animated animate__fadeIn">
            <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع رقم ${e})</label>
            <input type="text" class="form-control dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
            <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
        </div>`;U.innerHTML=n,d(),l()}function l(){const e=document.querySelectorAll(".dob-picker");e.forEach(e=>{e.addEventListener("change",function(){this.value?(this.classList.remove("is-invalid"),this.classList.add("is-valid")):(this.classList.add("is-invalid"),this.classList.remove("is-valid"))})})}function d(){const e=new Date,t=e.getFullYear();"undefined"!=typeof flatpickr&&(flatpickr(".adult-dob",{dateFormat:"Y-m-d",maxDate:new Date(t-12,e.getMonth(),e.getDate()),minDate:new Date(t-100,0,1),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}}),flatpickr(".child-dob",{dateFormat:"Y-m-d",maxDate:new Date(t-2,e.getMonth(),e.getDate()),minDate:new Date(t-12,e.getMonth(),e.getDate()),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}}),flatpickr(".infant-dob",{dateFormat:"Y-m-d",maxDate:"today",minDate:new Date(t-2,e.getMonth(),e.getDate()),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}}))}function s(e){const t=document.getElementById("roomCountDisplay");t&&(t.textContent=e)}function r(){const e=document.getElementById("hCheckIn").value,t=document.getElementById("hCheckOut").value;if(e&&t){const a=new Date(e),i=new Date(t),n=Math.abs(i-a),l=Math.ceil(n/86400000);0<l?(document.getElementById("stayDuration").style.display="block",document.getElementById("nightsCount").textContent=l,90<l&&Swal.fire({icon:"warning",title:"\u0645\u062F\u0629 \u0637\u0648\u064A\u0644\u0629",text:"\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u062A\u064A \u062D\u062F\u062F\u062A\u0647\u0627 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B\u060C \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F\u061F",confirmButtonText:"\u0646\u0639\u0645\u060C \u0645\u062A\u0623\u0643\u062F",cancelButtonText:"\u062A\u0639\u062F\u064A\u0644",showCancelButton:!0})):document.getElementById("stayDuration").style.display="none"}}function o(){const e=document.getElementById("hCheckIn").value,t=document.getElementById("hCheckOut").value;if(!e)return document.getElementById("hCheckIn").classList.add("is-invalid"),!1;if(document.getElementById("hCheckIn").classList.remove("is-invalid"),!t)return document.getElementById("hCheckOut").classList.add("is-invalid"),!1;document.getElementById("hCheckOut").classList.remove("is-invalid");const a=new Date(e),i=new Date(t);return!(i<=a)||(Swal.fire({icon:"error",title:"\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u0648\u0627\u0631\u064A\u062E",text:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062E\u0631\u0648\u062C \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u062E\u0648\u0644"}),!1)}function c(){document.querySelectorAll("input[name=\"hotelStars\"]").forEach(e=>{e.addEventListener("change",function(){document.getElementById("starLabel").textContent=`${this.value} ${{1:"\u0646\u062C\u0645\u0629 (\u0627\u0642\u062A\u0635\u0627\u062F\u064A)",2:"\u0646\u062C\u0645\u062A\u064A\u0646 (\u062C\u064A\u062F)",3:"3 \u0646\u062C\u0648\u0645 (\u062C\u064A\u062F \u062C\u062F\u0627\u064B)",4:"4 \u0646\u062C\u0648\u0645 (\u0645\u0645\u062A\u0627\u0632)",5:"5 \u0646\u062C\u0648\u0645 (\u0641\u0627\u062E\u0631)"}[this.value]}`,document.getElementById("starLabel").classList.add("text-warning","fw-bold")})})}function g(){const e=parseInt(document.getElementById("hAdults").value)||0,t=parseInt(document.getElementById("hKids").value)||0,a=parseInt(document.getElementById("hInfants").value)||0,i=e+t+a,n=document.getElementById("hotel-dynamic-dob-container");if(9<i)return Swal.fire({icon:"warning",title:"\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",text:"\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0644\u062D\u062C\u0632 \u0627\u0644\u0641\u0646\u062F\u0642\u064A. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",confirmButtonText:"\u062D\u0633\u0646\u0627\u064B",confirmButtonColor:"#0F2854",iconColor:"#C5A059"}),document.getElementById("hAdults").value=Math.min(e,9),document.getElementById("hKids").value=0,void(document.getElementById("hInfants").value=0);if(0<i){n.style.display="flex";let l="<div class=\"row g-3 w-100\">";for(let t=1;t<=e;t++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${t})</label>
                    <input type="text" class="form-control hotel-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;for(let e=1;e<=t;e++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${e})</label>
                    <input type="text" class="form-control hotel-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;for(let e=1;e<=a;e++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${e})</label>
                    <input type="text" class="form-control hotel-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;if(l+="</div>",n.innerHTML=l,"undefined"!=typeof flatpickr){const e=new Date,t=e.getFullYear();flatpickr(".hotel-dob-picker",{dateFormat:"Y-m-d",maxDate:"today",minDate:new Date(t-100,0,1),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}})}}else n.style.display="none"}function u(){const e=parseInt(document.getElementById("tAdults").value)||0,t=parseInt(document.getElementById("tKids").value)||0,a=parseInt(document.getElementById("tInfants").value)||0,i=e+t+a,n=document.getElementById("train-dynamic-dob-container");if(9<i)return Swal.fire({icon:"warning",title:"\u062D\u062F \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",text:"\u0639\u0630\u0631\u0627\u064B\u060C \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0645\u0633\u0645\u0648\u062D \u0628\u0647 \u0647\u0648 9 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0644\u0631\u062D\u0644\u0627\u062A \u0627\u0644\u0642\u0637\u0627\u0631. \u064A\u0631\u062C\u0649 \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0639\u062F\u062F.",confirmButtonText:"\u062D\u0633\u0646\u0627\u064B",confirmButtonColor:"#0F2854",iconColor:"#C5A059"}),document.getElementById("tAdults").value=Math.min(e,9),document.getElementById("tKids").value=0,void(document.getElementById("tInfants").value=0);if(0<i){n.style.display="flex";let l="<div class=\"row g-3 w-100\">";for(let t=1;t<=e;t++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (البالغ ${t})</label>
                    <input type="text" class="form-control train-dob-picker adult-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;for(let e=1;e<=t;e++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الطفل ${e})</label>
                    <input type="text" class="form-control train-dob-picker child-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;for(let e=1;e<=a;e++)l+=`
                <div class="col-md-4">
                    <label class="small fw-bold text-muted">تاريخ ميلاد (الرضيع ${e})</label>
                    <input type="text" class="form-control train-dob-picker infant-dob" placeholder="YYYY-MM-DD" required>
                    <div class="invalid-feedback">تاريخ الميلاد مطلوب</div>
                </div>`;if(l+="</div>",n.innerHTML=l,"undefined"!=typeof flatpickr){const e=new Date,t=e.getFullYear();flatpickr(".train-dob-picker",{dateFormat:"Y-m-d",maxDate:"today",minDate:new Date(t-100,0,1),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}})}}else n.style.display="none"}function m(){const e=parseInt(document.getElementById("pkgDuration").value)||1,t=document.getElementById("pkgBudget").value,a=document.getElementById("pkgFlightClass").value,i=document.getElementById("pkgHotelLevel").value;let n=0;"\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629"===t?n=50:"\u0645\u062A\u0648\u0633\u0637\u0629"===t?n=100:"VIP"===t?n=250:"\u0645\u0641\u062A\u0648\u062D\u0629"===t?n=500:void 0,"\u0628\u064A\u0632\u0646\u0633"===a&&(n*=1.5),i.includes("5")&&(n*=2),"\u0645\u0646\u062A\u062C\u0639\u0627\u062A"===i&&(n*=3);const l=n*e,d=document.getElementById("packageEstimate");d&&(d.textContent=`~${Math.round(l)} د.ك للفرد`,d.style.display="block")}function y(e){const t=te.find(t=>t.id===e);if(!t)return;const a=`مرحباً 👋

أريد حجز باقة: *${t.title}*
السعر: *${t.price}*
المدة: *${t.duration}*

الرجاء التواصل معي للتفاصيل والتأكيد.

مع تحياتي،
عميل فورموست 🛫`,i=`https://wa.me/${"96565865808"}?text=${encodeURIComponent(a)}`;window.open(i,"_blank")}function v(e){const t=te.find(t=>t.id===e);if(!t)return;const a=`
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
                                ${t.includes.map(e=>`
                                    <div class="item">
                                        <i class="fas fa-check text-success"></i>
                                        <span>${e}</span>
                                    </div>
                                `).join("")}
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
    `;document.getElementById("packageModal")&&document.getElementById("packageModal").remove(),document.body.insertAdjacentHTML("beforeend",a);const i=new bootstrap.Modal(document.getElementById("packageModal"));i.show(),document.querySelector(".btn-whatsapp-modal").addEventListener("click",function(){y(e),i.hide()}),document.querySelector(".btn-share").addEventListener("click",function(){f(t)}),document.getElementById("packageModal").addEventListener("hidden.bs.modal",function(){this.remove()})}function f(e){navigator.share?navigator.share({title:e.title,text:`اكتشف هذه الباقة الرائعة من فورموست للسياحة: ${e.desc} - السعر: ${e.price}`,url:window.location.href}):navigator.clipboard.writeText(window.location.href).then(()=>{alert("\u062A\u0645 \u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u0628\u0627\u0642\u0629!")})}function h(e,t){const i=document.getElementById(e),n=document.getElementById(t);i&&n&&(i.addEventListener("input",function(){const e=this.value.toLowerCase().trim();if(n.innerHTML="","undefined"==typeof oe||0===oe.length||2>e.length)return void n.classList.remove("active");const t=oe.filter(t=>t.iata_code&&t.iata_code.toLowerCase().includes(e)||t.city&&t.city.toLowerCase().includes(e)||t.country&&t.country.toLowerCase().includes(e)||t.name&&t.name.toLowerCase().includes(e)).slice(0,10);0<t.length?(n.classList.add("active"),t.forEach(t=>{const e=document.createElement("li");e.innerHTML=`
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">${t.city}, ${t.country}</span>
                                <small class="text-muted" style="font-size: 0.8rem;">
                                    <i class="fas fa-plane-departure me-1"></i> ${t.name}
                                </small>
                            </div>
                            <span class="iata-badge bg-primary text-white shadow-sm" style="padding: 4px 8px; border-radius: 6px;">${t.iata_code}</span>
                        </div>
                    `,e.addEventListener("click",a=>{a.stopPropagation(),i.value=`${t.city} (${t.iata_code})`,n.classList.remove("active"),n.innerHTML=""}),n.appendChild(e)})):n.classList.remove("active")}),document.addEventListener("click",t=>{t.target!==i&&t.target!==n&&n.classList.remove("active")}))}function p(e,t){const a=document.getElementById(e),i=document.getElementById(t);if(!a||!i)return;let n;a.addEventListener("input",function(){clearTimeout(n);const e=this.value.trim();return 2>e.length?(i.classList.remove("active"),void(i.innerHTML="")):void(n=setTimeout(()=>{fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${e}&addressdetails=1&limit=10&accept-language=ar,en`).then(e=>e.json()).then(e=>{i.innerHTML="",0<e.length?(i.classList.add("active"),e.forEach(e=>{const t=document.createElement("li");let n=e.name||e.display_name.split(",")[0],l=e.address.country||"",d=e.address.state||e.address.region||e.address.city||"";t.innerHTML=`
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
                                `,t.addEventListener("click",t=>{t.stopPropagation(),a.value=`${n}، ${l}`,i.classList.remove("active"),i.innerHTML="",i.style.display="none",setTimeout(()=>i.style.display="",200)}),i.appendChild(t)})):i.classList.remove("active")}).catch(e=>{console.log("Search Error:",e),i.classList.remove("active")})},300))}),document.addEventListener("click",function(t){t.target!==a&&t.target!==i&&(i.classList.remove("active"),i.innerHTML="")})}function E(e){Swal.fire({title:"\u26A0\uFE0F \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",text:e,icon:"error",confirmButtonText:"\u062A\u0635\u062D\u064A\u062D",confirmButtonColor:"#dc3545"})}function I(e,t){e.innerHTML=t,e.disabled=!1}function B(){const e=document.getElementById("fFrom").value.trim(),t=document.getElementById("fTo").value.trim(),a=document.getElementById("fDepart").value.trim(),i=document.getElementById("fAdults").value,n=document.getElementById("fKids").value,l=document.getElementById("fInfants").value;if(!e)return{isValid:!1,message:"\u26A0\uFE0F \u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u0629 \u0645\u0637\u0644\u0648\u0628"};if(!t)return{isValid:!1,message:"\u26A0\uFE0F \u0645\u0643\u0627\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0645\u0637\u0644\u0648\u0628"};if(!a)return{isValid:!1,message:"\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631 \u0645\u0637\u0644\u0648\u0628"};const d=Validator.validatePassengers(i,n,l,"\u0637\u064A\u0631\u0627\u0646");if(!d.isValid)return d;const s=document.querySelectorAll("#dynamic-dob-container input.dob-picker");for(let e of s)if(!e.value)return{isValid:!1,message:"\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"};return{isValid:!0,message:""}}function b(){const e=document.getElementById("hCity").value.trim(),t=document.getElementById("hCheckIn").value.trim(),a=document.getElementById("hCheckOut").value.trim(),i=document.getElementById("hAdults").value,n=document.getElementById("hKids").value,l=document.getElementById("hInfants").value;if(!e)return{isValid:!1,message:"\u26A0\uFE0F \u0627\u0644\u0648\u062C\u0647\u0629 \u0627\u0644\u0641\u0646\u062F\u0642\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"};if(!t)return{isValid:!1,message:"\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0637\u0644\u0648\u0628"};if(!a)return{isValid:!1,message:"\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0637\u0644\u0648\u0628"};const d=Validator.validatePassengers(i,n,l,"\u0641\u0646\u0627\u062F\u0642");if(!d.isValid)return d;const s=document.querySelectorAll("#hotel-dynamic-dob-container input.hotel-dob-picker");for(let e of s)if(!e.value)return{isValid:!1,message:"\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"};return{isValid:!0,message:""}}function L(){const e=document.getElementById("trOrigin").value,t=document.getElementById("trDest").value,a=document.getElementById("trDate").value,i=document.getElementById("tAdults").value,n=document.getElementById("tKids").value,l=document.getElementById("tInfants").value;if(!e)return{isValid:!1,message:"\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0645\u0637\u0644\u0648\u0628\u0629"};if(!t)return{isValid:!1,message:"\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0645\u0637\u0644\u0648\u0628\u0629"};if(!a)return{isValid:!1,message:"\u26A0\uFE0F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u062D\u0644\u0629 \u0645\u0637\u0644\u0648\u0628"};if(e===t)return{isValid:!1,message:"\u26A0\uFE0F \u0645\u062D\u0637\u0629 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0648\u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646\u0627 \u0645\u062E\u062A\u0644\u0641\u062A\u064A\u0646"};const d=Validator.validatePassengers(i,n,l,"\u0642\u0637\u0627\u0631\u0627\u062A");if(!d.isValid)return d;const s=document.querySelectorAll("#train-dynamic-dob-container input.train-dob-picker");for(let e of s)if(!e.value)return{isValid:!1,message:"\u26A0\uFE0F \u062C\u0645\u064A\u0639 \u062A\u0648\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629"};return{isValid:!0,message:""}}function k(){const e=document.getElementById("carPickLoc").value,t=document.getElementById("carDropLoc").value,a=document.getElementById("carPickDate").value,i=document.getElementById("carDropDate").value,n=document.getElementById("carPickTime").value,l=document.getElementById("carDropTime").value,d=[];return e||d.push("\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0645\u0637\u0644\u0648\u0628"),t||d.push("\u0645\u0648\u0642\u0639 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0645\u0637\u0644\u0648\u0628"),a||d.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0645\u0637\u0644\u0648\u0628"),i||d.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0645\u0637\u0644\u0648\u0628"),0<d.length?{isValid:!1,message:"\u26A0\uFE0F "+d.join("\u060C ")}:{isValid:!0,message:""}}function D(){const e=document.getElementById("pkgDest").value,t=document.getElementById("pkgDate").value,a=document.getElementById("pkgDuration").value,i=[];return(!e||2>e.length)&&i.push("\u0627\u0644\u0648\u062C\u0647\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"),t||i.push("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631 \u0645\u0637\u0644\u0648\u0628"),(!a||1>parseInt(a))&&i.push("\u0627\u0644\u0645\u062F\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644"),0<i.length?{isValid:!1,message:"\u26A0\uFE0F "+i.join("\u060C ")}:{isValid:!0,message:""}}function C(){const e=document.querySelector("input[name=\"flightType\"]:checked"),t=e?e.value:"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",a=document.getElementById("fFrom").value.trim(),i=document.getElementById("fTo").value.trim(),n=document.getElementById("fDepart").value.trim(),l=document.getElementById("fReturnDate").value.trim()||"\u0644\u0627 \u064A\u0648\u062C\u062F",d=document.getElementById("fClass").value,s=document.getElementById("fAdults").value,r=document.getElementById("fKids").value,o=document.getElementById("fInfants").value,c=parseInt(s)+parseInt(r)+parseInt(o);return`✈️ *نوع الرحلة:* ${t}
🗺️ *المسار الأساسي:* ${a} ⬅️ ${i}
📅 *تاريخ الذهاب:* ${n}
📅 *تاريخ العودة:* ${"\u0630\u0647\u0627\u0628 \u0648\u0639\u0648\u062F\u0629"===t?l:"\u0644\u0627 \u064A\u0648\u062C\u062F"}
💺 *درجة التذكرة:* ${d}

👥 *تفاصيل المسافرين:*
• 👨‍💼 البالغين (+12 سنة): ${s} مسافر
• 👶 الأطفال (2-11 سنة): ${r} مسافر
• 🍼 الرضع (0-2 سنة): ${o} مسافر
• ✅ *الإجمالي:* ${c} مسافر`}function S(){const e=document.getElementById("hCity").value.trim(),t=document.getElementById("hCheckIn").value.trim(),a=document.getElementById("hCheckOut").value.trim(),i=document.getElementById("hRooms").value,n=document.getElementById("hRoomType").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",l=document.getElementById("hBoardType").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",d=document.querySelector("input[name=\"hotelStars\"]:checked"),s=d?`${d.value} نجوم`:"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",r=document.getElementById("hAdults").value,o=document.getElementById("hKids").value,c=document.getElementById("hInfants").value,g=parseInt(r)+parseInt(o)+parseInt(c);return`🏨 *الوجهة:* ${e||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}
📅 *فترة الإقامة:* ${t||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"} ➡️ ${a||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F"}
🏢 *عدد الغرف:* ${i} غرفة
🛏️ *نوع الغرفة:* ${n}
🍽️ *نوع الإقامة:* ${l}
⭐ *تصنيف الفندق:* ${s}

👥 *تفاصيل المسافرين:*
• البالغين: ${r} مسافر
• الأطفال: ${o} مسافر
• الرضع: ${c} مسافر
• إجمالي المسافرين: ${g}`}function T(){const e=document.getElementById("trOrigin").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",t=document.getElementById("trDest").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",a=document.getElementById("trDate").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",i=document.getElementById("trTime").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",n=document.getElementById("trClass").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",l=document.getElementById("tAdults").value,d=document.getElementById("tKids").value,s=document.getElementById("tInfants").value,r=parseInt(l)+parseInt(d)+parseInt(s);return`🚆 *نوع الخدمة:* رحلة قطار
📍 *من:* ${e}
📍 *إلى:* ${t}
📅 *التاريخ:* ${a}
🕒 *الوقت المفضل:* ${i}
🎫 *درجة القطار:* ${n}`}function A(){const e=document.getElementById("carPickLoc").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",t=document.getElementById("carDropLoc").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",a=document.getElementById("carPickDate").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",i=document.getElementById("carPickTime").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",n=document.getElementById("carDropDate").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",l=document.getElementById("carDropTime").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",d=document.getElementById("carCategory").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",s=document.getElementById("carDriverAge").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F";return`🚗 *نوع الخدمة:* تأجير سيارة
📍 *موقع الاستلام:* ${e}
📅 *تاريخ/وقت الاستلام:* ${a} - ${i}
📍 *موقع التسليم:* ${t}
📅 *تاريخ/وقت التسليم:* ${n} - ${l}
🎯 *فئة السيارة:* ${d}
👨‍✈️ *عمر السائق:* ${s}`}function x(){const e=document.getElementById("pkgDest").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",t=document.getElementById("pkgDate").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",a=document.getElementById("pkgDuration").value||"1",i=document.querySelector("input[name=\"pkgType\"]:checked")?.value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",n=document.getElementById("pkgBudget").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",l=document.getElementById("pkgFlightClass").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",d=document.getElementById("pkgHotelLevel").value||"\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",s=document.getElementById("incFlight")?.checked?"\u0646\u0639\u0645":"\u0644\u0627",r=document.getElementById("incHotel")?.checked?"\u0646\u0639\u0645":"\u0644\u0627",o=document.getElementById("incCar")?.checked?"\u0646\u0639\u0645":"\u0644\u0627",c=document.getElementById("incTransfers")?.checked?"\u0646\u0639\u0645":"\u0644\u0627",g=document.getElementById("incVisa")?.checked?"\u0646\u0639\u0645":"\u0644\u0627",u=document.getElementById("incGuide")?.checked?"\u0646\u0639\u0645":"\u0644\u0627";return`🎁 *نوع الرحلة:* ${i}
📍 *الوجهة:* ${e}
📅 *تاريخ السفر:* ${t}
⏱️ *المدة:* ${a} ليالي
💰 *الميزانية:* ${n}

✈️ *تذاكر الطيران:* ${s} (${l})
🏨 *الفنادق:* ${r} (${d})
🚗 *سيارة خاصة:* ${o}
🚐 *استقبال وتوديع:* ${c}
📋 *تأشيرات:* ${g}
👨‍🏫 *مرشد سياحي:* ${u}`}function M(e,t,a,i,n,l,d){return`🌍 *طلب حجز جديد - FOREMOST TRAVELS* 🌍

═════════════════════════════════════════

👤 *البيانات الشخصية للمسؤول عن الحجز:*
• الاسم الكامل: ${e}
• الجنسية: ${t}
• رقم الهاتف: ${a}
• البريد الإلكتروني: ${i}

═════════════════════════════════════════
${n} *تفاصيل الحجز (${window.currentService}):*
${l}

═════════════════════════════════════════

📝 *ملاحظات إضافية:* ${d||"\u0644\u0627 \u064A\u0648\u062C\u062F"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*FOREMOST TRAVELS - رحلتك بلمسة فاخرة*
📞 للاستفسار: +965 6586 5808
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*يرجى الرد بأفضل الأسعار والتفاصيل المطلوبة.* 🌹
*نتمنى لكم رحلة سعيدة!* ✈️🏨🚗`}function V(){const e=document.querySelector(".tab-pane.active");if(e){const e=document.getElementById("formProgress");e&&(e.style.width=`${50}%`,e.setAttribute("aria-valuenow",50),e.textContent=`${50}%`)}}console.log("\u2705 \u0635\u0641\u062D\u0629 \u0641\u0648\u0631\u0645\u0648\u0633\u062A \u062C\u0627\u0647\u0632\u0629!");const w=document.getElementById("bgVideo"),F=["./Foremost.mp4","./0206_1_.mp4"];let q=0;if(w){function e(){q++,q>=F.length&&(q=0);const e=F[q];console.log(`🔄 جاري الانتقال للفيديو: ${e}`),w.src="",w.src=e,w.load();const t=w.play();void 0!==t&&t.then(()=>{console.log(`✅ تم تشغيل الفيديو بنجاح`)}).catch(e=>{console.error(`❌ المتصفح منع التشغيل التلقائي:`,e)})}console.log("\uD83C\uDFAC \u062A\u0645 \u062A\u0647\u064A\u0626\u0629 \u0645\u0634\u063A\u0644 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u062E\u0644\u0641\u064A"),w.muted=!0,w.playsInline=!0,w.addEventListener("ended",function(){console.log("\u23F9\uFE0F \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0646\u062A\u0647\u0649."),e()}),w.addEventListener("error",function(){console.error("\uD83D\uDEAB \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 (\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0645\u0633\u0627\u0631):",w.error),e()})}const P=document.getElementById("hamburgerBtn"),H=document.getElementById("mobileNav"),O=document.getElementById("closeNavBtn"),N=document.querySelectorAll(".mob-link");P&&P.addEventListener("click",t),O&&O.addEventListener("click",t),N.forEach(e=>{e.addEventListener("click",()=>{H.classList.remove("active"),P.classList.remove("active")})}),H&&H.addEventListener("click",a=>{a.target===H&&t()});const _=document.querySelector(".typewriter-text");if(_){const e=_.getAttribute("data-text");if(e){function t(){a<e.length&&(_.innerHTML+=e.charAt(a),a++,setTimeout(t,.3))}let a=0;_.innerHTML="",setTimeout(t,.3)}}const K=document.querySelectorAll(".stat-number");K.forEach(e=>{const t=parseInt(e.getAttribute("data-count"));let a=0;const i=()=>{a<t?(a+=t/100,e.textContent=Math.floor(a).toLocaleString(),setTimeout(i,20)):e.textContent=t.toLocaleString()},n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(i(),n.unobserve(e.target))})});n.observe(e)}),function(){function e(){if(0===n){if(0===i){if(0===a)return void(t.textContent="\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u0639\u0631\u0636");a--,i=59}else i--;n=59}else n--;t.textContent=`${a.toString().padStart(2,"0")}:`+`${i.toString().padStart(2,"0")}:`+`${n.toString().padStart(2,"0")}`}const t=document.getElementById("offerTimer");if(!t)return;let a=2,i=15,n=30;setInterval(e,1e3)}(),document.querySelectorAll("a[href^=\"#\"]").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const e=this.getAttribute("href");if("#"!==e){const t=document.querySelector(e);t&&window.scrollTo({top:t.offsetTop-80,behavior:"smooth"})}})});const Y=document.querySelector(".airplane-flying");if(Y){function e(){t=(t+.5)%200,Y.style.transform=`translateX(${t}%)`,requestAnimationFrame(e)}let t=-100;setTimeout(e,2e3)}const j=document.querySelector(".globe-rotation i");if(j){function e(){t+=.2,j.style.transform=`rotate(${t}deg)`,requestAnimationFrame(e)}let t=0;e()}document.addEventListener("DOMContentLoaded",function(){function e(){n<i.length&&(a.textContent+=i.charAt(n),n++,setTimeout(e,100))}const t=document.querySelectorAll(".stat-number");t.forEach(e=>{const t=parseInt(e.getAttribute("data-count"));let a=0;const i=setInterval(()=>{a+=t/(2e3/16),a>=t&&(a=t,clearInterval(i)),e.textContent=Math.floor(a).toLocaleString()},16)});const a=document.querySelector(".typewriter-text"),i=a.getAttribute("data-text");let n=0;setTimeout(e,500)});new Typed(".auto-type",{strings:["Foremost Travel and Tourism ","\u0641\u0648\u0631\u0645\u0648\u0633\u062A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631","\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u062A\u0646\u0627\u0641\u0633\u064A\u0629"," \u0623\u062C\u0645\u0644 \u0648\u062C\u0647\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645","\u062E\u062F\u0645\u0629 VIP \u0645\u0645\u064A\u0632\u0629"],typeSpeed:60,backSpeed:40,startDelay:500,backDelay:2e3,loop:!0,showCursor:!0,cursorChar:"|",autoInsertCss:!0});setInterval(a,1e3),a();let R;window.currentService="\u0637\u064A\u0631\u0627\u0646",window.setService=function(e){window.currentService=e,console.log("\u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629:",e);const t={طيران:"\u2708\uFE0F \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643\u0645 \u0641\u064A \u062E\u062F\u0645\u0629 \u062D\u062C\u0632 \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u0641\u0627\u062E\u0631\u0629",فنادق:"\uD83C\uDFE8 \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0623\u0641\u0636\u0644 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0641\u0646\u062F\u0642\u064A\u0629 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",قطارات:"\uD83D\uDE86 \u0631\u062D\u0644\u0627\u062A \u0642\u0637\u0627\u0631\u0627\u062A \u0641\u0627\u062E\u0631\u0629 \u0639\u0628\u0631 \u0623\u0648\u0631\u0648\u0628\u0627 \u0648\u0627\u0644\u0639\u0627\u0644\u0645",سيارات:"\uD83D\uDE97 \u0627\u062D\u062C\u0632 \u0623\u0641\u0636\u0644 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0628\u0623\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0641\u0633\u064A\u0629","باقة شاملة":"\uD83C\uDF81 \u0635\u0645\u0645 \u0631\u062D\u0644\u0629 \u0623\u062D\u0644\u0627\u0645\u0643 \u0645\u0639 \u062E\u0628\u0631\u0627\u0626\u0646\u0627"};t[e]&&Swal.fire({title:t[e],icon:"info",timer:2e3,showConfirmButton:!1,position:"top-end",toast:!0})},"undefined"!=typeof flatpickr&&flatpickr("#uDob",{dateFormat:"Y-m-d",maxDate:"today",minDate:new Date(new Date().getFullYear()-100,0,1),disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}});const W=document.querySelector("#uPhone");window.intlTelInput&&W&&(R=window.intlTelInput(W,{initialCountry:"kw",preferredCountries:["kw","sa","eg","qa","ae"],separateDialCode:!0,utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"}));["fName","mName","lName","uEmail","uPassportNum","hCity","trOrigin","trDest","carPickLoc","carDropLoc","pkgDest"].forEach(e=>{const t=document.getElementById(e);t&&(t.addEventListener("blur",function(){i(e,this.value)}),t.addEventListener("input",function(){0===this.value.length&&this.classList.remove("is-valid","is-invalid")}))});const G=document.getElementById("uNationality");if(G){let t=document.createElement("ul");t.className="autocomplete-list",G.parentNode.appendChild(t),G.parentNode.style.position="relative";let a=[];fetch("https://restcountries.com/v3.1/all?fields=name,flags,translations").then(e=>e.json()).then(e=>{a=e.map(e=>({nameAr:e.translations.ara?e.translations.ara.common:e.name.common,nameEn:e.name.common.toLowerCase(),flag:e.flags.svg})).sort((e,t)=>e.nameAr.localeCompare(t.nameAr,"ar"))}).catch(e=>console.log("Error loading nationalities:",e)),G.addEventListener("input",function(){const e=this.value.toLowerCase().trim();if(t.innerHTML="",1>e.length)return void t.classList.remove("active");const n=a.filter(t=>t.nameAr.includes(e)||t.nameEn.includes(e));0<n.length?(t.classList.add("active"),n.slice(0,5).forEach(e=>{const a=document.createElement("li");a.style.display="flex",a.style.alignItems="center",a.style.cursor="pointer",a.style.padding="10px",a.style.borderBottom="1px solid #eee",a.innerHTML=`
                        <img src="${e.flag}" style="width: 25px; height: 18px; margin-left: 10px; border-radius: 2px; object-fit: cover;">
                        <span style="font-weight: bold; color: #0F2854;">${e.nameAr}</span>
                    `,a.addEventListener("click",function(){G.value=e.nameAr,t.classList.remove("active"),t.innerHTML="",i("uNationality",e.nameAr)}),t.appendChild(a)})):t.classList.remove("active")}),document.addEventListener("click",function(a){a.target!==G&&t.classList.remove("active")})}const z=document.getElementById("fAdults"),J=document.getElementById("fKids"),Q=document.getElementById("fInfants"),U=document.getElementById("dynamic-dob-container");z&&J&&Q&&(z.addEventListener("change",n),J.addEventListener("change",n),Q.addEventListener("change",n),n());const X=document.querySelectorAll("input[name=\"flightType\"]"),Z=document.getElementById("addRouteBtnContainer"),$=document.getElementById("returnDateContainer"),ee=document.getElementById("multi-city-container");if(X.forEach(e=>{e.addEventListener("change",function(){if("\u0648\u062C\u0647\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629"===this.value){Z.style.display="block",$.style.display="none";const e=document.getElementById("fReturnDate");e&&(e.value="")}else Z.style.display="none",ee.innerHTML="",$.style.display="\u0630\u0647\u0627\u0628 \u0648\u0639\u0648\u062F\u0629"===this.value?"block":"none"})}),window.addFlightRow=function(){const e=document.querySelectorAll(".route-card").length+2,t=Math.floor(1e5*Math.random()),a=`fFrom_${t}`,i=`fTo_${t}`,n=`res_fFrom_${t}`,l=`res_fTo_${t}`,d=`date_${t}`,s=document.createElement("div");s.className="route-card shadow-sm mt-3 position-relative p-3 border rounded bg-light animate__animated animate__fadeIn",s.innerHTML=`
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
        `,document.getElementById("multi-city-container").appendChild(s),"undefined"!=typeof flatpickr&&flatpickr(`#${d}`,{minDate:"today",dateFormat:"Y-m-d",locale:"ar",disableMobile:"true"}),window.setupAirportSearchGlobal?(window.setupAirportSearchGlobal(a,n),window.setupAirportSearchGlobal(i,l)):console.error("\u274C \u062F\u0627\u0644\u0629 \u0627\u0644\u0628\u062D\u062B \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0627\u0645!")},window.changeRoomCount=function(e){const t=document.getElementById("hRooms");if(!t)return;let a=parseInt(t.value)||1,i=a+e;1<=i&&10>=i&&(t.value=i,s(i))},document.getElementById("hCheckIn")?.addEventListener("change",function(){r(),o()}),document.getElementById("hCheckOut")?.addEventListener("change",function(){r(),o()}),document.getElementById("hAdults")?.addEventListener("change",g),document.getElementById("hKids")?.addEventListener("change",g),document.getElementById("hInfants")?.addEventListener("change",g),c(),r(),g(),document.getElementById("tAdults")?.addEventListener("change",u),document.getElementById("tKids")?.addEventListener("change",u),document.getElementById("tInfants")?.addEventListener("change",u),u(),document.getElementById("carPickDate")?.addEventListener("change",function(){const e=document.getElementById("carDropDate");if(e&&this.value){const t=new Date(this.value);if(t.setDate(t.getDate()+1),"undefined"!=typeof flatpickr){const t=flatpickr(e,{minDate:this.value,dateFormat:"Y-m-d",disableMobile:!0});t.set("minDate",this.value)}}}),document.getElementById("pkgDuration")?.addEventListener("input",m),document.getElementById("pkgBudget")?.addEventListener("change",m),document.getElementById("pkgFlightClass")?.addEventListener("change",m),document.getElementById("pkgHotelLevel")?.addEventListener("change",m),"undefined"!=typeof Swiper&&document.querySelector(".royalSwiper")){const e=document.querySelector(".autoplay-timer circle"),t=document.querySelector(".autoplay-timer span"),a=new Swiper(".royalSwiper",{spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".royal-next-btn",prevEl:".royal-prev-btn"},pagination:{el:".royal-dots",clickable:!0},on:{autoplayTimeLeft(a,i,n){e&&t&&(e.style.setProperty("--progress",1-n),t.textContent=Math.ceil(i/1e3)+"s")}}})}const te=[{id:1,title:"\u0627\u0644\u0639\u0645\u0631\u0629 \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \uD83C\uDDF8\uD83C\uDDE6",price:"350 \u062F.\u0643",img:"./images/79c082a17b5b8d4b8cece700fa344199.avif",desc:"\u0639\u0645\u0631\u0629 \u0645\u0645\u064A\u0632\u0629 \u0645\u0639 \u0641\u0646\u062F\u0642 5 \u0646\u062C\u0648\u0645 \u0639\u0644\u0649 \u0628\u0639\u062F \u062E\u0637\u0648\u0627\u062A \u0645\u0646 \u0627\u0644\u062D\u0631\u0645 \u0627\u0644\u0645\u0643\u064A\u060C \u0646\u0642\u0644 \u0645\u062A\u0645\u064A\u0632\u060C \u0648\u0645\u0631\u0634\u062F \u062F\u064A\u0646\u064A.",duration:"\u0661\u0660 \u0623\u064A\u0627\u0645",category:"\u0639\u0645\u0631\u0629",featured:!0,includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u0646\u0642\u0644 \u0641\u0627\u062E\u0631","\u0645\u0631\u0634\u062F \u062F\u064A\u0646\u064A","\u0648\u062C\u0628\u0627\u062A \u0641\u0627\u062E\u0631\u0629"]},{id:2,title:"\u0645\u0635\u0631 | \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \uD83C\uDDEA\uD83C\uDDEC",price:"220 \u062F.\u0643",img:"./images/4079546d89edfdbd8329278d08e215e4.avif",desc:"\u0631\u062D\u0644\u0629 \u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E \u0645\u0635\u0631: \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u0645\u062A\u062D\u0641 \u0627\u0644\u0645\u0635\u0631\u064A \u0627\u0644\u0643\u0628\u064A\u0631 \u0648\u0646\u0647\u0631 \u0627\u0644\u0646\u064A\u0644.",duration:"\u0667 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629","\u0646\u0642\u0644 \u062E\u0627\u0635","\u0645\u0631\u0634\u062F \u0633\u064A\u0627\u062D\u064A"]},{id:3,title:"\u062C\u062F\u0629 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \uD83C\uDDF8\uD83C\uDDE6",price:"180 \u062F.\u0643",img:"./images/0577f84053ebd78f9b59615b09cf6ed8.avif",desc:"\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u062C\u062F\u0629 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u0643\u0648\u0631\u0646\u064A\u0634 \u0645\u0639 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0623\u0635\u064A\u0644\u0629.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0645\u0645\u062A\u0627\u0632","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0628\u0644\u062F\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0645\u062D\u0644\u064A"]},{id:4,title:"\u0627\u0644\u0628\u062D\u0631\u064A\u0646 | \u0627\u0644\u0645\u0646\u0627\u0645\u0629 \uD83C\uDDE7\uD83C\uDDED",price:"160 \u062F.\u0643",img:"./images/3eb425504b4a144cc29688fad03837dd.avif",desc:"\u0632\u064A\u0627\u0631\u0629 \u0634\u062C\u0631\u0629 \u0627\u0644\u062D\u064A\u0627\u0629 \u0648\u0645\u062A\u062D\u0641 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u0648\u0637\u0646\u064A \u0648\u062C\u0633\u0631 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062F.",duration:"\u0663 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0627\u064A\u0629 \u0623\u0633\u0628\u0648\u0639",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629","\u0639\u0634\u0627\u0621 \u0641\u064A \u0645\u0637\u0639\u0645 \u062F\u0648\u0627\u0631","\u0646\u0642\u0644 \u062E\u0627\u0635"]},{id:5,title:"\u0639\u064F\u0645\u0627\u0646 | \u0645\u0633\u0642\u0637 \uD83C\uDDF4\uD83C\uDDF2",price:"280 \u062F.\u0643",img:"./images/5ad4c5b24b6f42e38a4f5db91ed57a05.avif",desc:"\u0627\u0643\u062A\u0634\u0641 \u0645\u0633\u0642\u0637 \u0628\u064A\u0646 \u0627\u0644\u062C\u0628\u0627\u0644 \u0648\u0627\u0644\u0634\u0648\u0627\u0637\u0626\u060C \u0645\u0639 \u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0645\u0646\u062A\u062C\u0639 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0628\u0627\u0644","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0639\u0645\u0627\u0646\u064A"]},{id:6,title:"\u062F\u0628\u064A | \u0627\u0644\u0623\u0628\u0631\u0627\u062C \uD83C\uDDE6\uD83C\uDDEA",price:"190 \u062F.\u0643",img:"./images/photo-1512453979798-5ea266f8880c.avif",desc:"\u062A\u062C\u0631\u0628\u0629 \u062F\u0628\u064A \u0628\u064A\u0646 \u0628\u0631\u062C \u062E\u0644\u064A\u0641\u0629 \u0648\u062F\u0628\u064A \u0645\u0648\u0644 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0628\u0631\u062C \u062E\u0644\u064A\u0641\u0629","\u062C\u0648\u0644\u0627\u062A \u062A\u0633\u0648\u0642","\u0639\u0634\u0627\u0621 \u0641\u064A \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0627\u0644\u0641\u0627\u062E\u0631\u0629"]},{id:7,title:"\u062A\u0631\u0643\u064A\u0627 | \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \uD83C\uDDF9\uD83C\uDDF7",price:"320 \u062F.\u0643",img:"./images/photo-1524231757912-21f4fe3a7200.avif",desc:"\u0631\u062D\u0644\u0629 \u0628\u064A\u0646 \u0622\u064A\u0627 \u0635\u0648\u0641\u064A\u0627 \u0648\u0627\u0644\u0645\u0633\u062C\u062F \u0627\u0644\u0623\u0632\u0631\u0642 \u0648\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0636\u064A\u0642 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631.",duration:"\u0666 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u062A\u0631\u0643\u064A\u0629"]},{id:8,title:"\u0627\u0644\u0645\u0627\u0644\u062F\u064A\u0641 \uD83C\uDDF2\uD83C\uDDFB",price:"850 \u062F.\u0643",img:"./images/photo-1514282401047-d79a71a590e8.avif",desc:"\u0625\u0642\u0627\u0645\u0629 \u0641\u0627\u062E\u0631\u0629 \u0641\u064A \u0641\u064A\u0644\u0627 \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0621 \u0645\u0639 \u0634\u0627\u0637\u0626 \u062E\u0627\u0635 \u0648\u0623\u0646\u0634\u0637\u0629 \u0628\u062D\u0631\u064A\u0629.",duration:"\u0668 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","\u0641\u064A\u0644\u0627 \u0641\u0648\u0642 \u0627\u0644\u0645\u0627\u0621","\u0625\u0642\u0627\u0645\u0629 \u0634\u0627\u0645\u0644\u0629","\u0623\u0646\u0634\u0637\u0629 \u0628\u062D\u0631\u064A\u0629","\u0645\u0633\u0627\u062C \u0633\u0628\u0627"]},{id:9,title:"\u0627\u0644\u064A\u0648\u0646\u0627\u0646 | \u0633\u0627\u0646\u062A\u0648\u0631\u064A\u0646\u064A \uD83C\uDDEC\uD83C\uDDF7",price:"720 \u062F.\u0643",img:"./images/photo-1570077188670-e3a8d69ac5ff.avif",desc:"\u0625\u0642\u0627\u0645\u0629 \u0641\u064A \u0641\u0646\u062F\u0642 \u0643\u0647\u0641\u064A \u0645\u0639 \u0625\u0637\u0644\u0627\u0644\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629 \u0639\u0644\u0649 \u0628\u062D\u0631 \u0625\u064A\u062C\u0629.",duration:"\u0667 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0643\u0647\u0641\u064A \u0641\u0627\u062E\u0631","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629","\u0639\u0634\u0627\u0621 \u0631\u0648\u0645\u0627\u0646\u0633\u064A","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062C\u0632\u0631"]},{id:10,title:"\u0634\u0631\u0645 \u0627\u0644\u0634\u064A\u062E \uD83C\uDDEA\uD83C\uDDEC",price:"250 \u062F.\u0643",img:"./images/photo-1590523741831-ab7e8b8f9c7f.avif",desc:"\u0627\u0633\u062A\u062C\u0645\u0627\u0645 \u0641\u064A \u0623\u0641\u0636\u0644 \u0645\u0646\u062A\u062C\u0639\u0627\u062A \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u062D\u0645\u0631 \u0645\u0639 \u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u063A\u0648\u0635 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0645\u0646\u062A\u062C\u0639 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u063A\u0648\u0635","\u0646\u0642\u0644 \u062E\u0627\u0635","\u0648\u062C\u0628\u0627\u062A \u0634\u0627\u0645\u0644\u0629"]},{id:11,title:"\u0628\u0627\u0631\u064A\u0633 | \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062D\u0628 \uD83C\uDDEB\uD83C\uDDF7",price:"550 \u062F.\u0643",img:"./images/photo-1502602898657-3e91760cbb34.avif",desc:"\u0631\u0648\u0645\u0627\u0646\u0633\u064A\u0629 \u0628\u0631\u062C \u0625\u064A\u0641\u0644 \u0648\u0634\u0648\u0627\u0631\u0639 \u0628\u0627\u0631\u064A\u0633 \u0645\u0639 \u062A\u062C\u0627\u0631\u0628 \u062B\u0642\u0627\u0641\u064A\u0629 \u0648\u0641\u0646\u064A\u0629 \u0644\u0627 \u062A\u0646\u0633\u0649.",duration:"\u0666 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0628\u0648\u062A\u064A\u0643","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u062A\u0627\u062D\u0641","\u062C\u0648\u0644\u0629 \u0646\u0647\u0631 \u0627\u0644\u0633\u064A\u0646","\u0639\u0634\u0627\u0621 \u0641\u064A \u0628\u0631\u062C \u0625\u064A\u0641\u0644"]},{id:12,title:"\u0644\u0646\u062F\u0646 | \u0627\u0644\u0639\u0627\u0635\u0645\u0629 \uD83C\uDDEC\uD83C\uDDE7",price:"480 \u062F.\u0643",img:"./images/photo-1513635269975-59663e0ac1ad.avif",desc:"\u0632\u064A\u0627\u0631\u0629 \u0642\u0635\u0631 \u0628\u0627\u0643\u0646\u062C\u0647\u0627\u0645 \u0648\u0639\u064A\u0646 \u0644\u0646\u062F\u0646 \u0648\u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u064A \u0623\u0643\u0633\u0641\u0648\u0631\u062F \u0633\u062A\u0631\u064A\u062A.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u0639\u0627\u0644\u0645","\u0628\u0637\u0627\u0642\u0629 \u0645\u062A\u0631\u0648","\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629"]},{id:13,title:"\u0628\u0631\u0634\u0644\u0648\u0646\u0629 \uD83C\uDDEA\uD83C\uDDF8",price:"420 \u062F.\u0643",img:"./images/photo-1583422409516-2895a77efded.avif",desc:"\u0641\u0646\u0648\u0646 \u063A\u0627\u0648\u062F\u064A \u0648\u0634\u0648\u0627\u0637\u0626 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0645\u062A\u0648\u0633\u0637 \u0648\u062B\u0642\u0627\u0641\u0629 \u0643\u0627\u062A\u0627\u0644\u0648\u0646\u064A\u0627 \u0627\u0644\u0623\u0635\u064A\u0644\u0629.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632","\u062A\u0630\u0627\u0643\u0631 \u0633\u0627\u063A\u0631\u0627\u062F\u0627 \u0641\u0627\u0645\u064A\u0644\u064A\u0627","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u064A \u0627\u0644\u0642\u0648\u0637\u064A","\u062A\u0630\u0648\u0642 \u0627\u0644\u062A\u0627\u0628\u0627\u0633"]},{id:14,title:"\u0631\u0648\u0645\u0627 | \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062E\u0627\u0644\u062F\u0629 \uD83C\uDDEE\uD83C\uDDF9",price:"460 \u062F.\u0643",img:"./images/photo-1552832230-c0197dd311b5.avif",desc:"\u0631\u062D\u0644\u0629 \u0639\u0628\u0631 \u0627\u0644\u0632\u0645\u0646 \u0628\u064A\u0646 \u0627\u0644\u0643\u0648\u0644\u0648\u0633\u064A\u0648\u0645 \u0648\u0627\u0644\u0641\u0627\u062A\u064A\u0643\u0627\u0646 \u0648\u0646\u0648\u0627\u0641\u064A\u0631 \u062A\u0631\u064A\u0641\u064A.",duration:"\u0666 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0645\u062A\u0627\u062D\u0641","\u062C\u0648\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A"]},{id:15,title:"\u0623\u0628\u0648\u0638\u0628\u064A \uD83C\uDDE6\uD83C\uDDEA",price:"210 \u062F.\u0643",img:"./images//6ec9b4d47cd78c7b215e5ab973d767c0.avif",desc:"\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0645\u0633\u062C\u062F \u0627\u0644\u0634\u064A\u062E \u0632\u0627\u064A\u062F \u0648\u0645\u062A\u062D\u0641 \u0627\u0644\u0644\u0648\u0641\u0631 \u0623\u0628\u0648\u0638\u0628\u064A \u0648\u062C\u0632\u064A\u0631\u0629 \u064A\u0627\u0633.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0641\u0631\u0627\u0631\u064A\u062C","\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062C\u062F \u0627\u0644\u0643\u0628\u064A\u0631","\u0646\u0642\u0644 \u062E\u0627\u0635"]},{id:16,title:"\u0627\u0644\u0634\u0627\u0631\u0642\u0629 \uD83C\uDDE6\uD83C\uDDEA",price:"170 \u062F.\u0643",img:"./images//3eb425504b4a144cc29688fad03837dd.avif",desc:"\u0639\u0627\u0635\u0645\u0629 \u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641\u0647\u0627 \u0627\u0644\u0641\u0646\u064A\u0629 \u0648\u0633\u0648\u0642\u0647\u0627 \u0627\u0644\u062A\u0631\u0627\u062B\u064A.",duration:"\u0663 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645","\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0641","\u062C\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u062A\u0631\u0627\u062B\u064A","\u0639\u0631\u0648\u0636 \u062B\u0642\u0627\u0641\u064A\u0629"]},{id:17,title:"\u0627\u0644\u0639\u064A\u0646 \uD83C\uDDE6\uD83C\uDDEA",price:"190 \u062F.\u0643",img:"./images/pexels-shane-hao-1271834262-23914732.avif",desc:"\u0648\u0627\u062D\u0627\u062A \u062E\u0636\u0631\u0627\u0621 \u0648\u062C\u0628\u0644 \u062D\u0641\u064A\u062A \u0645\u0639 \u062A\u062C\u0627\u0631\u0628 \u0637\u0628\u064A\u0639\u064A\u0629 \u0648\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0641\u0631\u064A\u062F\u0629.",duration:"\u0663 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0648\u0627\u062D\u0629","\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u062D\u062F\u064A\u0642\u0629 \u0627\u0644\u0645\u0627\u0626\u064A\u0629","\u062A\u0644\u0641\u0631\u064A\u0643 \u062C\u0628\u0644 \u062D\u0641\u064A\u062A","\u0646\u0642\u0644 \u062E\u0627\u0635"]},{id:18,title:"\u0645\u0627\u0644\u064A\u0632\u064A\u0627 | \u0643\u0648\u0627\u0644\u0627\u0644\u0645\u0628\u0648\u0631 \uD83C\uDDF2\uD83C\uDDFE",price:"380 \u062F.\u0643",img:"./images/photo-1596422846543-75c6fc197f07.avif",desc:"\u0623\u0628\u0631\u0627\u062C \u0628\u062A\u0631\u0648\u0646\u0627\u0633 \u0648\u0627\u0644\u062A\u0633\u0648\u0642 \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0648\u0627\u0644\u062D\u062F\u0627\u0626\u0642 \u0627\u0644\u062E\u0644\u0627\u0628\u0629.",duration:"\u0666 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0623\u0628\u0631\u0627\u062C","\u062C\u0648\u0644\u0627\u062A \u062A\u0633\u0648\u0642","\u0631\u062D\u0644\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062C\u0632\u0631"]},{id:19,title:"\u062A\u0627\u064A\u0644\u0627\u0646\u062F | \u0628\u0627\u0646\u0643\u0648\u0643 \uD83C\uDDF9\uD83C\uDDED",price:"320 \u062F.\u0643",img:"./images/photo-1563492065599-3520f775eeed.avif",desc:"\u0645\u0639\u0627\u0628\u062F \u0630\u0647\u0628\u064A\u0629 \u0648\u0623\u0633\u0648\u0627\u0642 \u0639\u0627\u0626\u0645\u0629 \u0648\u062A\u062C\u0627\u0631\u0628 \u0633\u064A\u0627\u062D\u064A\u0629 \u0644\u0627 \u062A\u0646\u062A\u0647\u064A.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0645\u063A\u0627\u0645\u0631\u0627\u062A",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0628\u062F","\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0631\u064A\u0629","\u062A\u062F\u0644\u064A\u0643 \u062A\u0627\u064A\u0644\u0627\u0646\u062F\u064A"]},{id:20,title:"\u0628\u0627\u0644\u064A | \u0625\u0646\u062F\u0648\u0646\u064A\u0633\u064A\u0627 \uD83C\uDDEE\uD83C\uDDE9",price:"680 \u062F.\u0643",img:"./images/daaf881461295630396e2b76b4bcc514.avif",desc:"\u062C\u0646\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u062E\u0627\u0621 \u0645\u0639 \u0641\u064A\u0644\u0627\u062A \u062E\u0627\u0635\u0629 \u0648\u0634\u0648\u0627\u0637\u0626 \u062E\u0644\u0627\u0628\u0629 \u0648\u062B\u0642\u0627\u0641\u0629 \u0628\u0627\u0644\u064A\u0646\u064A\u0629 \u0623\u0635\u064A\u0644\u0629.",duration:"\u0668 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u064A\u0644\u0627 \u062E\u0627\u0635\u0629","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u0628\u062F","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629","\u062C\u0644\u0633\u0627\u062A \u0633\u0628\u0627"]},{id:21,title:"\u0633\u0648\u064A\u0633\u0631\u0627 | \u062C\u0628\u0627\u0644 \u0627\u0644\u0623\u0644\u0628 \uD83C\uDDE8\uD83C\uDDED",price:"890 \u062F.\u0643",img:"./images/photo-1506905925346-21bda4d32df4.avif",desc:"\u062A\u0632\u0644\u062C \u0641\u064A \u062C\u0628\u0627\u0644 \u0627\u0644\u0623\u0644\u0628 \u0627\u0644\u0633\u0648\u064A\u0633\u0631\u064A\u0629 \u0645\u0639 \u0625\u0637\u0644\u0627\u0644\u0627\u062A \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064A\u0629 \u0644\u0627 \u0645\u062B\u064A\u0644 \u0644\u0647\u0627.",duration:"\u0667 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","\u0645\u0646\u062A\u062C\u0639 \u062C\u0628\u0644\u064A","\u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u062A\u0632\u0644\u062C","\u0631\u062D\u0644\u0627\u062A \u0642\u0637\u0627\u0631 \u062C\u0628\u0644\u064A","\u0639\u0634\u0627\u0621 \u0641\u064A \u0627\u0644\u0642\u0645\u0645"]},{id:22,title:"\u0646\u064A\u0648\u064A\u0648\u0631\u0643 \uD83C\uDDFA\uD83C\uDDF8",price:"950 \u062F.\u0643",img:"./images/photo-1496442226666-8d4d0e62e6e9.avif",desc:"\u062A\u0627\u064A\u0645\u0632 \u0633\u0643\u0648\u064A\u0631 \u0648\u062A\u0645\u062B\u0627\u0644 \u0627\u0644\u062D\u0631\u064A\u0629 \u0648\u0628\u0631\u0648\u0633\u0628\u0643\u062A \u0628\u0627\u0631\u0643 \u0645\u0639 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u062A\u064A \u0644\u0627 \u062A\u0646\u0627\u0645.",duration:"\u0668 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646 \u062F\u0631\u062C\u0629 \u0631\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062A\u0630\u0627\u0643\u0631 \u0628\u0631\u062C \u0627\u0644\u062D\u0631\u064A\u0629","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u062A\u0627\u062D\u0641","\u0639\u0631\u0636 \u0628\u0631\u0648\u062F\u0648\u0627\u064A"]},{id:23,title:"\u0641\u064A\u0646\u064A\u0633\u064A\u0627 \uD83C\uDDEE\uD83C\uDDF9",price:"580 \u062F.\u0643",img:"./images/photo-1514890547357-a9ee288728e0.avif",desc:"\u0631\u0648\u0645\u0627\u0646\u0633\u064A\u0629 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u062C\u0646\u062F\u0648\u0644 \u0645\u0639 \u0641\u0646\u0648\u0646 \u0639\u0635\u0631 \u0627\u0644\u0646\u0647\u0636\u0629 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629 \u0627\u0644\u0641\u0631\u064A\u062F\u0629.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0634\u0647\u0631 \u0639\u0633\u0644",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0642\u0646\u0627\u0629","\u062C\u0648\u0644\u0629 \u062C\u0646\u062F\u0648\u0644","\u0632\u064A\u0627\u0631\u0629 \u0642\u0635\u0631 \u0627\u0644\u062F\u0648\u062C","\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0625\u064A\u0637\u0627\u0644\u064A"]},{id:24,title:"\u0628\u0631\u0627\u063A \uD83C\uDDE8\uD83C\uDDFF",price:"340 \u062F.\u0643",img:"./images//0577f84053ebd78f9b59615b09cf6ed8.avif",desc:"\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0623\u0628\u0631\u0627\u062C \u0627\u0644\u0630\u0647\u0628\u064A\u0629 \u0648\u0627\u0644\u062C\u0633\u0648\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u0642\u0644\u0639\u0629 \u0627\u0644\u0645\u0644\u0643\u064A\u0629.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u062A\u0627\u0631\u064A\u062E\u064A","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0642\u0644\u0639\u0629","\u0631\u062D\u0644\u0627\u062A \u0646\u0647\u0631\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0628\u064A\u0631\u0629 \u0627\u0644\u062A\u0634\u064A\u0643\u064A\u0629"]},{id:25,title:"\u0631\u064A\u0648 \u062F\u064A \u062C\u0627\u0646\u064A\u0631\u0648 \uD83C\uDDE7\uD83C\uDDF7",price:"750 \u062F.\u0643",img:"./images/photo-1483729558449-99ef09a8c325.avif",desc:"\u062A\u0645\u062B\u0627\u0644 \u0627\u0644\u0645\u0633\u064A\u062D \u0627\u0644\u0641\u0627\u062F\u064A \u0648\u0634\u0648\u0627\u0637\u0626 \u0643\u0648\u0628\u0627\u0643\u0627\u0628\u0627\u0646\u0627 \u0648\u0643\u0648\u0631\u0643\u0648\u0641\u0627\u062F\u0648.",duration:"\u0667 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0645\u063A\u0627\u0645\u0631\u0627\u062A",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0665 \u0646\u062C\u0648\u0645","\u062A\u0644\u0641\u0631\u064A\u0643 \u0643\u0648\u0631\u0643\u0648\u0641\u0627\u062F\u0648","\u062C\u0648\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0634\u0648\u0627\u0637\u0626","\u0639\u0631\u0648\u0636 \u0627\u0644\u0633\u0627\u0645\u0628\u0627"]},{id:26,title:"\u062A\u0627\u064A\u0644\u0627\u0646\u062F | \u0628\u0648\u0643\u064A\u062A \uD83C\uDDF9\uD83C\uDDED",price:"410 \u062F.\u0643",img:"./images/082ca6738f3248b4c0a6f2dd6695fae8.avif",desc:"\u0634\u0648\u0627\u0637\u0626 \u0628\u0648\u0643\u064A\u062A \u0627\u0644\u0630\u0647\u0628\u064A\u0629 \u0645\u0639 \u062C\u0648\u0644\u0627\u062A \u0625\u0644\u0649 \u062C\u0632\u0631 \u0641\u064A \u0641\u064A \u0648\u0641\u0627\u064A \u0648\u0641\u0627\u064A \u0627\u0644\u063A\u0627\u0631\u0642\u0629.",duration:"\u0666 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629",featured:!0,includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0645\u0646\u062A\u062C\u0639 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0637\u0626","\u0631\u062D\u0644\u0627\u062A \u0625\u0644\u0649 \u0627\u0644\u062C\u0632\u0631","\u062C\u0648\u0644\u0627\u062A \u0628\u0627\u0644\u0642\u0648\u0627\u0631\u0628","\u062A\u062F\u0644\u064A\u0643 \u062A\u0627\u064A\u0644\u0627\u0646\u062F\u064A"]},{id:27,title:"\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u0645\u0627\u0646\u0634\u0633\u062A\u0631 \u26BD",price:"440 \u062F.\u0643",img:"./images/4b0f141ea7f7af0a1b50ad266c05a640.avif",desc:"\u0639\u0627\u0635\u0645\u0629 \u0643\u0631\u0629 \u0627\u0644\u0642\u062F\u0645 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u064A\u0629.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u0631\u064A\u0627\u0636\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0664 \u0646\u062C\u0648\u0645","\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0644\u0639\u0628 \u0623\u0648\u0644\u062F \u062A\u0631\u0627\u0641\u0648\u0631\u062F","\u0632\u064A\u0627\u0631\u0629 \u0645\u062A\u062D\u0641 \u0627\u0644\u0639\u0644\u0648\u0645","\u062A\u0630\u0648\u0642 \u0627\u0644\u0645\u0637\u0628\u062E \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A"]},{id:28,title:"\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u0644\u064A\u0641\u0631\u0628\u0648\u0644 \uD83C\uDFB5",price:"420 \u062F.\u0643",img:"./images/7259276ac64180c5d336a8a5eac14841.avif",desc:"\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0628\u064A\u062A\u0644\u0632 \u0627\u0644\u0623\u0633\u0637\u0648\u0631\u064A\u0629 \u0648\u0627\u0644\u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A \u0645\u0639 \u0627\u0644\u062A\u0631\u0627\u062B \u0627\u0644\u0645\u0648\u0633\u064A\u0642\u064A \u0627\u0644\u0641\u0631\u064A\u062F.",duration:"\u0664 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0641\u064A \u0627\u0644\u0645\u0631\u0643\u0632","\u062C\u0648\u0644\u0629 \u0641\u064A \u0645\u0633\u0627\u0631 \u0627\u0644\u0628\u064A\u062A\u0644\u0632","\u0632\u064A\u0627\u0631\u0629 \u0645\u062A\u062D\u0641 \u0627\u0644\u0628\u064A\u062A\u0644\u0632","\u0631\u062D\u0644\u0627\u062A \u0628\u062D\u0631\u064A\u0629 \u0641\u064A \u0627\u0644\u0645\u064A\u0631\u0633\u064A\u0633\u0627\u064A\u062F"]},{id:29,title:"\u0627\u0646\u062C\u0644\u062A\u0631\u0627 | \u064A\u0648\u0631\u0643 \uD83C\uDFF0",price:"380 \u062F.\u0643",img:"./images/6aa9b7922b0307ffa843427c5ab283f3.avif",desc:"\u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0639\u062A\u064A\u0642\u0629 \u0645\u0639 \u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u064A\u0648\u0631\u0643 \u0645\u064A\u0646\u0633\u062A\u0631 \u0648\u0627\u0644\u0623\u0633\u0648\u0627\u0631 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629 \u0648\u0627\u0644\u0637\u0631\u0642\u0627\u062A \u0627\u0644\u0636\u064A\u0642\u0629.",duration:"\u0663 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062A\u0627\u0631\u064A\u062E\u064A\u0629",includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u062A\u0631\u0627\u062B\u064A","\u0632\u064A\u0627\u0631\u0629 \u0643\u0627\u062A\u062F\u0631\u0627\u0626\u064A\u0629 \u064A\u0648\u0631\u0643","\u062C\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0623\u0633\u0648\u0627\u0631 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A\u0629","\u062A\u0630\u0648\u0642 \u0627\u0644\u0634\u0627\u064A \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A"]},{id:30,title:"\u0627\u0633\u0628\u0627\u0646\u064A\u0627 | \u0645\u062F\u0631\u064A\u062F \uD83C\uDDEA\uD83C\uDDF8",price:"470 \u062F.\u0643",img:"./images/photo-1543785734-4b6e564642f8.avif",desc:"\u0639\u0627\u0635\u0645\u0629 \u0625\u0633\u0628\u0627\u0646\u064A\u0627 \u0627\u0644\u0646\u0627\u0628\u0636\u0629 \u0628\u0627\u0644\u062D\u064A\u0627\u0629 \u0645\u0639 \u0645\u062A\u0627\u062D\u0641 \u0628\u0631\u0627\u062F\u0648 \u0627\u0644\u0634\u0647\u064A\u0631\u0629 \u0648\u0642\u0635\u0631 \u0627\u0644\u0645\u0644\u0643\u064A.",duration:"\u0665 \u0623\u064A\u0627\u0645",category:"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629",featured:!0,includes:["\u062A\u0630\u0643\u0631\u0629 \u0637\u064A\u0631\u0627\u0646","\u0641\u0646\u062F\u0642 \u0641\u064A \u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u062F\u064A\u0646\u0629","\u062A\u0630\u0627\u0643\u0631 \u0645\u062A\u062D\u0641 \u0628\u0631\u0627\u062F\u0648","\u0632\u064A\u0627\u0631\u0629 \u0627\u0644\u0642\u0635\u0631 \u0627\u0644\u0645\u0644\u0643\u064A","\u0639\u0631\u0636 \u0641\u0644\u0627\u0645\u0646\u0643\u0648","\u062A\u0630\u0648\u0642 \u0627\u0644\u062A\u0627\u0628\u0627\u0633"]}],ae=document.getElementById("allInclusiveContainer");if(ae){const e=te.filter(e=>e.featured),t=te.filter(e=>!e.featured),a=[...e,...t];ae.innerHTML=a.map(e=>`
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
    `).join("")}document.addEventListener("click",function(t){if(t.target.closest(".btn-details")){const e=t.target.closest(".btn-details"),a=parseInt(e.getAttribute("data-id"));v(a)}if(t.target.closest(".btn-whatsapp")){const e=t.target.closest(".btn-whatsapp"),a=parseInt(e.getAttribute("data-id"));y(a)}});const ie=document.createElement("style");ie.textContent=`
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
`,document.head.appendChild(ie),document.addEventListener("DOMContentLoaded",function(){if(ae){ae.insertAdjacentHTML("beforebegin","\n            <div class=\"row mb-4\" id=\"packagesFilter\">\n                <div class=\"col-12\">\n                    <h4 class=\"text-center mb-3\" style=\"color: #0F2854;\">\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0631\u062D\u0644\u062A\u0643</h4>\n                    <div class=\"filter-buttons\">\n                        <button class=\"filter-btn active\" data-filter=\"all\">\u0627\u0644\u0643\u0644</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0639\u0645\u0631\u0629\">\u0639\u0645\u0631\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u062D\u062C\">\u062D\u062C</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u062F\u064A\u0646\u064A\u0629\">\u062F\u064A\u0646\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u062B\u0642\u0627\u0641\u064A\u0629\">\u062B\u0642\u0627\u0641\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629\">\u0633\u064A\u0627\u062D\u064A\u0629</button>\n                        <button class=\"filter-btn\" data-filter=\"\u0631\u062D\u0644\u0627\u062A \u0641\u0627\u062E\u0631\u0629\">\u0641\u0627\u062E\u0631\u0629</button>\n                    </div>\n                </div>\n            </div>\n        "),document.querySelectorAll(".filter-btn").forEach(e=>{e.addEventListener("click",function(){document.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),this.classList.add("active");const e=this.getAttribute("data-filter"),t=document.querySelectorAll(".package-card-simple");t.forEach(t=>{const a=parseInt(t.closest("[data-id]")?.getAttribute("data-id")||t.getAttribute("data-id")),i=te.find(e=>e.id===a);i&&("all"===e?t.style.display="block":t.style.display=i.category===e?"block":"none")})})})}});const ne=document.getElementById("packageModal"),le=ne?new bootstrap.Modal(ne):null;document.addEventListener("click",function(t){if(t.target&&t.target.classList.contains("view-details-btn")){t.preventDefault();const e=t.target.getAttribute("data-index"),a=te[e];if(a&&le){const e=document.getElementById("pkgModalTitle"),t=document.getElementById("pkgModalDesc"),i=document.getElementById("pkgModalPrice"),n=document.getElementById("pkgModalImg"),l=document.getElementById("pkgModalBtn");e&&(e.innerText=a.title),t&&(t.innerText=a.desc),i&&(i.innerText=a.price),n&&(n.src=a.img),l&&l.setAttribute("data-offer",a.title),le.show()}}if(t.target&&("pkgModalBtn"===t.target.id||t.target.closest("#pkgModalBtn"))){const e="pkgModalBtn"===t.target.id?t.target:t.target.closest("#pkgModalBtn"),a=e.getAttribute("data-offer");window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent("\uD83D\uDC4B \u0645\u0631\u062D\u0628\u0627\u064B *Foremost Travels*\u060C\n\n\u0623\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0639\u0646 \u062D\u062C\u0632:\n"+`🌟 *${a}* 🌟\n\n`+`يرجى تزويدي بالتفاصيل المتاحة.\n`+`شكراً لكم. 🌹`)}`,"_blank")}if(t.target&&(t.target.classList.contains("btn-royal-book")||t.target.closest(".btn-royal-book"))){const e=t.target.classList.contains("btn-royal-book")?t.target:t.target.closest(".btn-royal-book"),a=e.getAttribute("data-deal");window.open(`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent("\uD83D\uDC51 *\u0637\u0644\u0628 \u062D\u062C\u0632 \u0639\u0631\u0636 \u062E\u0627\u0635 (Limited)* \uD83D\uDC51\n-----------------------\n\u0623\u0646\u0627 \u0645\u0647\u062A\u0645 \u062C\u062F\u0627\u064B \u0628\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0627\u0644\u064A:\n"+`📌 *${a}*\n\n`+`هل العرض ما زال متاحاً؟ يرجى الرد.`)}`,"_blank")}});const de=document.querySelectorAll("input[name=\"flightType\"]"),se=document.getElementById("fReturnDate"),re=document.getElementById("fReturnDateLabel");if(se&&de.forEach(e=>e.addEventListener("change",function(){"\u0630\u0647\u0627\u0628 \u0641\u0642\u0637"===this.value?(se.style.visibility="hidden",re.style.visibility="hidden",se.style.pointerEvents="none",re.style.pointerEvents="none",se.value=""):(se.style.visibility="visible",se.style.pointerEvents="auto",re.style.visibility="visible",re.style.pointerEvents="auto")})),"undefined"!=typeof flatpickr){const e={minDate:"today",dateFormat:"Y-m-d",disableMobile:!0,locale:{firstDayOfWeek:6,weekdays:{shorthand:["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"],longhand:["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0625\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"]},months:{shorthand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],longhand:["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"]}}};flatpickr(".date-picker",e);const t=flatpickr("#fReturnDate",e);flatpickr("#fDepart",{...e,onChange:function(e,a){t&&(t.set("minDate",a),t.selectedDates[0]<e[0]&&t.clear())}}),flatpickr("#hCheckIn",{...e,onChange:function(e,t){const a=flatpickr("#hCheckOut");a&&a.set("minDate",t)}}),flatpickr("#hCheckOut",e),flatpickr("#trDate",e),flatpickr("#carPickDate",e),flatpickr("#carDropDate",e),flatpickr("#pkgDate",e)}let oe=[];fetch("https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json").then(e=>e.json()).then(e=>{oe=e.filter(e=>e.iata_code&&3===e.iata_code.length),console.log(`✅ تم تحميل ${oe.length} مطار حول العالم بنجاح!`)}).catch(e=>console.error("\u26A0\uFE0F \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0642\u0627\u0639\u062F\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0631\u0627\u062A:",e)),window.setupAirportSearchGlobal=h,h("fFrom","results-fFrom"),h("fTo","results-fTo"),h("pkgFlightFrom","results-pkgFlightFrom"),p("hCity","results-hCity"),p("trOrigin","results-trOrigin"),p("trDest","results-trDest"),p("carPickLoc","results-carPickLoc"),p("carDropLoc","results-carDropLoc"),p("pkgDest","results-pkgDest");const ce=document.getElementById("megaBookingForm");ce&&(console.log("\u2705 \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062D\u062C\u0632"),ce.addEventListener("submit",function(t){t.preventDefault(),console.log("\u2705 \u0632\u0631 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u062A\u0645 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u064A\u0647!");const e=this.querySelector("button[type=\"submit\"]"),a=e.innerHTML;e.innerHTML="<i class=\"fas fa-spinner fa-spin me-2\"></i> \u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",e.disabled=!0;const i=document.getElementById("fName").value.trim(),n=document.getElementById("mName").value.trim(),l=document.getElementById("lName").value.trim(),d=document.getElementById("uEmail").value.trim();let s="";if(R&&R.isValidNumber())s=R.getNumber();else{const e=document.querySelector("#uPhone");s=e?e.value:""}const r=document.getElementById("uPassportNum").value.trim(),o=document.getElementById("uPassportExp").value.trim(),c=document.getElementById("uNationality").value.trim(),g=document.getElementById("uNotes").value.trim(),u=Validator.validateFullName(i,n,l);if(!u.isValid)return E(u.message),void I(e,a);const m=Validator.validateEmail(d);if(!m.isValid)return E(m.message),void I(e,a);const y=Validator.validatePhone(s);if(!y.isValid)return E(y.message),void I(e,a);const v=Validator.validatePassport(r,o);if(!v.isValid)return E(v.message),void I(e,a);if(!c||2>c.length)return E("\u26A0\uFE0F \u0627\u0644\u062C\u0646\u0633\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"),void I(e,a);let f={isValid:!0,message:""};switch(window.currentService){case"\u0637\u064A\u0631\u0627\u0646":f=B();break;case"\u0641\u0646\u0627\u062F\u0642":f=b();break;case"\u0642\u0637\u0627\u0631\u0627\u062A":f=L();break;case"\u0633\u064A\u0627\u0631\u0627\u062A":f=k();break;case"\u0628\u0627\u0642\u0629 \u0634\u0627\u0645\u0644\u0629":f=D();}if(!f.isValid)return E(f.message||"\u26A0\uFE0F \u0647\u0646\u0627\u0643 \u062E\u0637\u0623 \u0641\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629"),void I(e,a);let h="",p="\u2708\uFE0F";"\u0637\u064A\u0631\u0627\u0646"===window.currentService?(p="\u2708\uFE0F",h=C()):"\u0641\u0646\u0627\u062F\u0642"===window.currentService?(p="\uD83C\uDFE8",h=S()):"\u0642\u0637\u0627\u0631\u0627\u062A"===window.currentService?(p="\uD83D\uDE86",h=T()):"\u0633\u064A\u0627\u0631\u0627\u062A"===window.currentService?(p="\uD83D\uDE97",h=A()):"\u0628\u0627\u0642\u0629 \u0634\u0627\u0645\u0644\u0629"===window.currentService&&(p="\uD83C\uDF81",h=x());const V=M(`${i} ${n} ${l}`,c,s,d,p,h,g);console.log("\uD83D\uDCF1 \u062C\u0627\u0631\u064A \u0641\u062A\u062D \u0648\u0627\u062A\u0633\u0627\u0628...");const w=`https://wa.me/${COMPANY_NUMBER}?text=${encodeURIComponent(V)}`;setTimeout(()=>{window.open(w,"_blank"),I(e,a),Swal.fire({title:"\u2705 \u062A\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0628\u0646\u062C\u0627\u062D!",text:"\u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0642\u0631\u064A\u0628\u0627\u064B \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628",icon:"success",confirmButtonText:"\u062D\u0633\u0646\u0627\u064B",confirmButtonColor:"#0F2854"})},1e3)})),document.getElementById("hCheckIn")?.addEventListener("change",function(){r(),o()}),document.getElementById("hCheckOut")?.addEventListener("change",function(){r(),o()}),document.getElementById("hAdults")?.addEventListener("change",g),document.getElementById("hKids")?.addEventListener("change",g),document.getElementById("hInfants")?.addEventListener("change",g),c(),r(),g(),document.getElementById("tAdults")?.addEventListener("change",u),document.getElementById("tKids")?.addEventListener("change",u),document.getElementById("tInfants")?.addEventListener("change",u),u(),z&&J&&Q&&(z.addEventListener("change",n),J.addEventListener("change",n),Q.addEventListener("change",n),n()),document.querySelectorAll(".form-control").forEach(e=>{e.addEventListener("focus",function(){this.parentElement.classList.add("focused")}),e.addEventListener("blur",function(){this.value||this.parentElement.classList.remove("focused")})}),document.querySelectorAll("input, select, textarea").forEach(e=>{e.addEventListener("change",V),e.addEventListener("input",V)});const ge=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",function(){400<window.scrollY?(ge.style.display="block",setTimeout(()=>{ge.classList.add("show")},10)):(ge.classList.remove("show"),setTimeout(()=>{ge.classList.contains("show")||(ge.style.display="none")},400))}),ge.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});
   كود إخفاء الشريط السفلي (واتساب + حجز)
   ========================================= */
    const bottomBar = document.querySelector('.fixed-bottom');
    const footer = document.querySelector('footer');
    
    // 1. إخفاء الشريط عند الوصول للفوتر (شغال تمام)
    if (bottomBar && footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const isModalOpen = document.body.classList.contains('modal-open');
                
                if (entry.isIntersecting) {
                    // الفوتر ظهر؟ اخفي الشريط
                    bottomBar.classList.add('hide-bar');
                } else if (!isModalOpen) {
                    // الفوتر اختفى ومفيش مودال مفتوح؟ اظهر الشريط
                    bottomBar.classList.remove('hide-bar');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(footer);
    }

    // 2. إخفاء الشريط عند فتح التفاصيل (الحل الجذري)
    // بنراقب الصفحة كلها عشان نلقط المودال لما يفتح
    document.addEventListener('show.bs.modal', function () {
        if(bottomBar) bottomBar.classList.add('hide-bar');
    });

    document.addEventListener('hidden.bs.modal', function () {
        // لما المودال يقفل، نتأكد إننا مش عند الفوتر قبل ما نظهره تاني
        if (bottomBar && footer) {
            const footerRect = footer.getBoundingClientRect();
            const isFooterVisible = (footerRect.top < window.innerHeight);
            
            if (!isFooterVisible) {
                bottomBar.classList.remove('hide-bar');
            }
        }
    });
