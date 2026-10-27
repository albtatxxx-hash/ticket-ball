/**
 * Egyptian Premier League - Home Page Logic (home.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initClubFilter();
  initFanIdCheck();
});

// Live Countdown Logic for Big Derby
function initCountdown() {
  let seconds = 10;
  let minutes = 32;
  let hours = 14;
  let days = 2;

  const secEl = document.getElementById('timerSecs');
  const minEl = document.getElementById('timerMins');
  const hrEl = document.getElementById('timerHours');
  const dayEl = document.getElementById('timerDays');

  if (!secEl) return;

  setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
          if (days > 0) days--;
        }
      }
    }

    secEl.textContent = String(seconds).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    hrEl.textContent = String(hours).padStart(2, '0');
    dayEl.textContent = String(days).padStart(2, '0');
  }, 1000);
}

// Fan ID Instant Client-Side Verification Simulator
function initFanIdCheck() {
  const verifyBtn = document.getElementById('checkFanIdBtn');
  const input = document.getElementById('fanIdInput');
  const feedback = document.getElementById('fanIdFeedback');

  if (!verifyBtn || !input || !feedback) return;

  const check = () => {
    const val = input.value.trim();
    feedback.classList.remove('hidden', 'flex', 'text-error', 'text-primary');

    if (!val) {
      feedback.classList.add('flex', 'text-error');
      feedback.innerHTML = '<span class="material-symbols-outlined text-sm">warning</span><span>برجاء إدخال رقم بطاقة المشجع Fan ID أو الرقم القومي المكون من 14 رقماً.</span>';
      return;
    }

    feedback.classList.add('flex', 'text-primary');
    feedback.innerHTML = `
      <div class="flex flex-col gap-2 w-full">
        <div class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          <span>بطاقة مشجع معتمدة ومفعلة لموسم 2024/2025: <strong>${val}</strong></span>
        </div>
        <a href="seats.html?fanId=${encodeURIComponent(val)}&match=derby" class="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary text-on-primary font-label-md hover:bg-primary-fixed-dim transition-all text-xs w-fit">
          <span>المتابعة لاختيار المقاعد وحجز التذكرة</span>
          <span class="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
        </a>
      </div>
    `;
    if (window.showToast) {
      window.showToast('تم التحقق بنجاح من بطاقة المشجع!', 'success');
    }
  };

  verifyBtn.addEventListener('click', check);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') check();
  });
}

// Filter Match Cards dynamically by Club
function initClubFilter() {
  const buttons = document.querySelectorAll('#clubFilterBar button');
  const cards = document.querySelectorAll('.match-fixture-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update button active state
      buttons.forEach(b => {
        b.className = 'px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shrink-0';
      });
      btn.className = 'px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md shrink-0 shadow-sm';

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const club = card.getAttribute('data-club') || '';
        if (filter === 'all' || club.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
