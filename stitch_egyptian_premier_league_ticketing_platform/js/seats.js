/**
 * Egyptian Premier League - Seats & Stadium Booking Logic (seats.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMatchBooking();
});

function initMatchBooking() {
  // Query parameters handler
  const urlParams = new URLSearchParams(window.location.search);
  const matchParam = urlParams.get('match');
  const fanIdParam = urlParams.get('fanId');

  let currentMatchTitle = "الأهلي vs الزمالك";
  let currentVenue = "استاد القاهرة الدولي";
  let currentMatchRound = "قمة دوري نايل • الجولة ٢٢";
  let currentMatchDate = "الجمعة ٢٨ مارس ٢٠٢٥ • ٨:٠٠ م";

  if (matchParam === 'pyramids-ismaily') {
    currentMatchTitle = "بيراميدز vs الإسماعيلي";
    currentVenue = "استاد الدفاع الجوي (30 يونيو)";
    currentMatchRound = "دوري نايل • الجولة ٢٢";
    currentMatchDate = "السبت ٢٩ مارس ٢٠٢٥ • ٥:٣٠ م";
  } else if (matchParam === 'masry-ittihad') {
    currentMatchTitle = "المصري vs الاتحاد السكندري";
    currentVenue = "استاد الجيش ببرج العرب";
    currentMatchRound = "دوري نايل • الجولة ٢٢";
    currentMatchDate = "الأحد ٣٠ مارس ٢٠٢٥ • ٧:٠٠ م";
  }

  // Update match title elements if present
  const matchBannerTitle = document.getElementById('match-banner-title');
  if (matchBannerTitle) matchBannerTitle.innerHTML = currentMatchTitle;

  let currentSectorName = "الدرجة الثالثة شمال (جماهير الأهلي)";
  let currentGate = "بوابة 5 - شارع النصر";
  let currentSeat = "بلوك 14 • مقعد 42 (صف C)";
  let currentTicketPrice = 75;
  const serviceFee = 10;
  let quantity = 1;
  let remainingSeconds = 9 * 60 + 45; // 09:45
  const totalSessionSeconds = 12 * 60; // 12 mins initial

  // DOM Elements
  const countdownDisplay = document.getElementById('countdown-display');
  const countdownBar = document.getElementById('countdown-bar');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyCount = document.getElementById('qty-count');
  const calcQty = document.getElementById('calc-qty');
  const calcBasePrice = document.getElementById('calc-base-price');
  const calcTotalPrice = document.getElementById('calc-total-price');
  const ctaButtonText = document.getElementById('cta-button-text');
  const secondaryFanWrapper = document.getElementById('secondary-fan-wrapper');
  const verifySecondaryBtn = document.getElementById('verify-secondary-btn');
  const secondaryStatusMsg = document.getElementById('secondary-status-msg');
  const summarySector = document.getElementById('summary-sector');
  const summarySeat = document.getElementById('summary-seat');
  const summaryGate = document.getElementById('summary-gate');
  const matrixSectorTitle = document.getElementById('matrix-sector-title');
  const stadiumSvg = document.getElementById('cairo-stadium-svg');
  const bookTicketCta = document.getElementById('book-ticket-cta');

  // 1. Anti-Scalping Countdown Timer
  const timerInterval = setInterval(() => {
    if (!countdownDisplay || !countdownBar) return;
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      countdownDisplay.textContent = "00:00";
      countdownBar.style.width = "0%";
      alert("انتهت مهلة حجز المقاعد المؤقتة. يُرجى إعادة اختيار المقعد من الخريطة.");
      window.location.reload();
      return;
    }
    remainingSeconds--;
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    countdownDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    const pct = (remainingSeconds / totalSessionSeconds) * 100;
    countdownBar.style.width = `${Math.max(0, pct)}%`;
    if (remainingSeconds < 180) {
      countdownBar.classList.remove('bg-secondary');
      countdownBar.classList.add('bg-error');
      countdownDisplay.classList.remove('text-secondary');
      countdownDisplay.classList.add('text-error');
    }
  }, 1000);

  // 2. Price Calculation Updater
  function updatePricing() {
    const baseSubtotal = currentTicketPrice * quantity;
    const total = baseSubtotal + serviceFee;
    
    if (qtyCount) qtyCount.textContent = quantity;
    if (calcQty) calcQty.textContent = quantity === 1 ? '١' : '٢';
    if (calcBasePrice) calcBasePrice.textContent = `${baseSubtotal} ج.م`;
    if (calcTotalPrice) calcTotalPrice.textContent = `${total} ج.م`;
    if (ctaButtonText) ctaButtonText.textContent = `تأكيد الحجز والانتقال للدفع (${total} ج.م)`;

    if (quantity === 2) {
      if (secondaryFanWrapper) {
        secondaryFanWrapper.classList.remove('hidden');
        secondaryFanWrapper.classList.add('flex');
      }
    } else {
      if (secondaryFanWrapper) {
        secondaryFanWrapper.classList.add('hidden');
        secondaryFanWrapper.classList.remove('flex');
      }
    }
  }

  // 3. Quantity Controls (Max 2 rule)
  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      if (quantity < 2) {
        quantity++;
        qtyMinus.disabled = false;
        qtyPlus.disabled = true;
        updatePricing();
      }
    });
  }

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyPlus.disabled = false;
        qtyMinus.disabled = true;
        updatePricing();
      }
    });
  }

  // 4. Secondary Fan ID live verification mock
  if (verifySecondaryBtn) {
    verifySecondaryBtn.addEventListener('click', () => {
      const input = document.getElementById('secondary-fan-input');
      if (!input || !input.value.trim()) {
        if (window.showToast) window.showToast('يرجى إدخال رقم مشجع صحيح للمرافق', 'error');
        else alert('يرجى إدخال رقم مشجع صحيح للمرافق');
        return;
      }
      secondaryStatusMsg.classList.remove('hidden');
      secondaryStatusMsg.textContent = 'جاري التحقق من بطاقة تذكرتي...';
      setTimeout(() => {
        secondaryStatusMsg.textContent = '✓ تم التحقق بنجاح من بيانات المرافق: محمود تامر عبد العال';
        secondaryStatusMsg.classList.remove('text-secondary');
        secondaryStatusMsg.classList.add('text-primary');
        verifySecondaryBtn.disabled = true;
        verifySecondaryBtn.textContent = 'معتمد';
        verifySecondaryBtn.classList.add('bg-primary-container', 'text-on-primary-container');
        if (window.showToast) window.showToast('تم اعتماد بطاقة المرافق بنجاح!', 'success');
      }, 700);
    });
  }

  // 5. Interactive SVG Sectors Click
  const sectorElements = document.querySelectorAll('.sector-path');
  sectorElements.forEach(elem => {
    elem.addEventListener('click', () => {
      const sectorKey = elem.getAttribute('data-sector');
      if (sectorKey === 'second') {
        if (window.showToast) {
          window.showToast('هذا المدرج مباع بالكامل، يرجى اختيار مدرج بديل متاح.', 'error');
        } else {
          alert('هذا المدرج مباع بالكامل، يرجى اختيار مدرج بديل متاح.');
        }
        return;
      }

      const name = elem.getAttribute('data-name') || currentSectorName;
      const price = parseInt(elem.getAttribute('data-price') || '75', 10);
      const gate = elem.getAttribute('data-gate') || currentGate;

      currentTicketPrice = price;
      currentSectorName = name;
      currentGate = gate;

      const randomSeatNum = Math.floor(Math.random() * 40) + 10;
      currentSeat = `بلوك 14 • مقعد ${randomSeatNum} (صف C)`;

      if (summarySector) summarySector.textContent = name;
      if (summaryGate) summaryGate.textContent = gate;
      if (matrixSectorTitle) matrixSectorTitle.textContent = `${name} (بلوك ${Math.floor(Math.random() * 8) + 10})`;
      if (summarySeat) summarySeat.textContent = currentSeat;

      // Highlight active clicked path
      sectorElements.forEach(s => {
        if (s.getAttribute('data-sector') !== 'second') {
          s.classList.remove('stroke-[#4edea3]', 'stroke-[3.5]', 'drop-shadow-[0_0_12px_rgba(78,222,163,0.5)]');
        }
      });
      elem.classList.add('stroke-[#4edea3]', 'stroke-[3.5]');

      updatePricing();
      if (window.showToast) window.showToast(`تم اختيار: ${name} (${price} ج.م)`, 'success');
    });
  });

  // 6. Interactive Seat Matrix Individual Buttons
  const seatButtons = document.querySelectorAll('.seat-btn:not([disabled])');
  seatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      seatButtons.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'shadow-[0_0_12px_rgba(78,222,163,0.8)]', 'scale-110');
        b.classList.add('bg-primary-container', 'text-on-primary-container');
      });

      btn.classList.remove('bg-primary-container', 'text-on-primary-container');
      btn.classList.add('bg-primary', 'text-on-primary', 'shadow-[0_0_12px_rgba(78,222,163,0.8)]', 'scale-110');
      
      const seatNum = btn.getAttribute('data-seat') || '42';
      currentSeat = `بلوك 14 • مقعد ${seatNum} (صف C)`;
      if (summarySeat) summarySeat.textContent = currentSeat;
      if (window.showToast) window.showToast(`تم تحديد المقعد رقم ${seatNum}`, 'info');
    });
  });

  // 7. Zoom Map Controls
  let currentScale = 1;
  const zoomIn = document.getElementById('zoom-in-btn');
  const zoomOut = document.getElementById('zoom-out-btn');
  const resetView = document.getElementById('reset-view-btn');

  if (zoomIn && stadiumSvg) {
    zoomIn.addEventListener('click', () => {
      if (currentScale < 1.3) {
        currentScale += 0.1;
        stadiumSvg.style.transform = `scale(${currentScale})`;
      }
    });
  }

  if (zoomOut && stadiumSvg) {
    zoomOut.addEventListener('click', () => {
      if (currentScale > 0.85) {
        currentScale -= 0.1;
        stadiumSvg.style.transform = `scale(${currentScale})`;
      }
    });
  }

  if (resetView && stadiumSvg) {
    resetView.addEventListener('click', () => {
      currentScale = 1;
      stadiumSvg.style.transform = 'scale(1)';
    });
  }

  // 8. Checkout & Link to tickets.html
  if (bookTicketCta) {
    bookTicketCta.addEventListener('click', () => {
      if (quantity === 2 && verifySecondaryBtn && !verifySecondaryBtn.disabled) {
        if (window.showToast) {
          window.showToast('يُرجى إدخال والتحقق من بطاقة المشجع (Fan ID) للمرافق الثاني للمتابعة.', 'error');
        } else {
          alert('يُرجى إدخال والتحقق من بطاقة المشجع (Fan ID) للمرافق الثاني للمتابعة.');
        }
        return;
      }

      const totalAmount = currentTicketPrice * quantity + serviceFee;
      const refNumber = `EPL-2025-${Math.floor(10000 + Math.random() * 90000)}`;

      // Save reservation to localStorage
      const reservationData = {
        bookingRef: refNumber,
        matchTitle: currentMatchTitle,
        venue: currentVenue,
        round: currentMatchRound,
        date: currentMatchDate,
        sector: currentSectorName,
        gate: currentGate,
        seat: currentSeat,
        quantity: quantity,
        pricePerTicket: currentTicketPrice,
        serviceFee: serviceFee,
        totalPrice: totalAmount,
        fanId: fanIdParam || 'EG-92841',
        fanName: 'أحمد محمود',
        nationalId: '29810150102938',
        bookedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem('epl_ticket_reservation', JSON.stringify(reservationData));
      } catch (e) {
        console.warn('Could not save to localStorage', e);
      }

      if (window.showToast) {
        window.showToast('تم تأكيد حجز المقعد بنجاح! يتم نقلك الآن لتذكرتك الرقمية...', 'success');
      }

      // Smooth transition to tickets.html
      setTimeout(() => {
        window.location.href = `tickets.html?ref=${refNumber}&sector=${encodeURIComponent(currentSectorName)}&seat=${encodeURIComponent(currentSeat)}&total=${totalAmount}`;
      }, 900);
    });
  }
}
