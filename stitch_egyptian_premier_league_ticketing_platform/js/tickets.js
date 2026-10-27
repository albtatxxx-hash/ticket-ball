/**
 * Egyptian Premier League - Confirmed Digital Tickets Logic (tickets.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTicketData();
  initPassClock();
  initTicketActions();
});

// Load dynamic ticket data from localStorage or query params
function initTicketData() {
  const urlParams = new URLSearchParams(window.location.search);
  let reservation = null;

  try {
    const stored = localStorage.getItem('epl_ticket_reservation');
    if (stored) {
      reservation = JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Could not read from localStorage', e);
  }

  // If query params are present, allow them to override/populate
  if (urlParams.get('ref')) {
    reservation = reservation || {};
    reservation.bookingRef = urlParams.get('ref');
    if (urlParams.get('sector')) reservation.sector = decodeURIComponent(urlParams.get('sector'));
    if (urlParams.get('seat')) reservation.seat = decodeURIComponent(urlParams.get('seat'));
    if (urlParams.get('total')) reservation.totalPrice = urlParams.get('total');
  }

  // If we have reservation data, update the DOM elements
  if (reservation) {
    const refElements = document.querySelectorAll('.ticket-ref-number');
    refElements.forEach(el => {
      el.textContent = `#${reservation.bookingRef || 'EPL-2025-88492'}`;
    });

    const sectorElements = document.querySelectorAll('.ticket-sector-name');
    sectorElements.forEach(el => {
      el.textContent = reservation.sector || 'الدرجة الثالثة شمال (جماهير الأهلي)';
    });

    const seatElements = document.querySelectorAll('.ticket-seat-name');
    seatElements.forEach(el => {
      el.textContent = reservation.seat || 'بلوك 14 • مقعد 42 (صف C)';
    });

    const gateElements = document.querySelectorAll('.ticket-gate-name');
    gateElements.forEach(el => {
      el.textContent = reservation.gate || 'بوابة 5 - طريق النصر';
    });

    const matchElements = document.querySelectorAll('.ticket-match-title');
    matchElements.forEach(el => {
      el.textContent = reservation.matchTitle || 'الأهلي vs الزمالك';
    });

    const priceElements = document.querySelectorAll('.ticket-total-price');
    priceElements.forEach(el => {
      el.textContent = `${reservation.totalPrice || 85} ج.م`;
    });
  }
}

// Live Anti-Screenshot Dynamic Watermark Clock
function initPassClock() {
  const timestampEl = document.getElementById('liveTimestamp');
  if (!timestampEl) return;

  function updatePassClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const hash = Math.random().toString(36).substring(2, 6).toUpperCase();
    timestampEl.textContent = `${hrs}:${mins}:${secs} • رمز متحرك مشفر [#${hash}]`;
  }

  setInterval(updatePassClock, 1000);
  updatePassClock();
}

// Interactive Ticket Action Buttons (Download, Print, Share)
function initTicketActions() {
  const downloadBtn = document.getElementById('downloadPdfBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const originalText = downloadBtn.innerHTML;
      downloadBtn.innerHTML = '<span class="material-symbols-outlined text-lg animate-spin">refresh</span><span>جاري تجهيز التذكرة...</span>';
      
      setTimeout(() => {
        downloadBtn.innerHTML = originalText;
        if (window.showToast) {
          window.showToast('جاري فتح نافذة الطباعة / الحفظ كـ PDF...', 'info');
        }
        window.print();
      }, 700);
    });
  }

  const shareBtn = document.getElementById('sharePassBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const shareData = {
        title: 'تذكرة مباراة الدوري المصري - تذكرتي',
        text: 'تذكرتي المعتمدة لمباراة القمة - استاد القاهرة الدولي. حجز مؤكد وموثق برقم المشجع Fan ID.',
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
          if (window.showToast) {
            window.showToast('تم نسخ رابط التذكرة الرقمية الآمنة إلى الحافظة بنجاح!', 'success');
          } else {
            alert('تم نسخ رابط التذكرة الرقمية الآمنة إلى الحافظة.');
          }
        }).catch(() => {
          if (window.showToast) {
            window.showToast('رابط التذكرة الرقمية: ' + window.location.href, 'info');
          }
        });
      }
    });
  }
}
