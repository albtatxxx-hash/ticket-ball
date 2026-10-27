/**
 * Egyptian Premier League Ticketing Platform
 * Main Shared Logic (Navigation, Active States, Modals, Toasts)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initNotificationBell();
  initLanguageToggle();
  initSearchInput();
});

/**
 * Automatically detects current page and highlights active nav link
 */
function initNavigation() {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('header nav a, #mobileMenu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Check if link matches current page
    const isCurrent = (fileName === 'index.html' || fileName === '') && (href === 'index.html' || href === './') 
      || (fileName === 'seats.html' && href.includes('seats.html'))
      || (fileName === 'tickets.html' && href.includes('tickets.html'));

    if (isCurrent && !href.includes('#')) {
      link.classList.add('bg-surface-container-high', 'text-primary');
      link.classList.remove('text-on-surface-variant');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeMobileMenu');

  if (!toggleBtn || !menu) return;

  const toggle = () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    } else {
      menu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  };

  toggleBtn.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);

  // Close when clicking any link inside mobile menu
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = 'success') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border font-label-md text-label-md transition-all duration-300 opacity-0 translate-y-4 pointer-events-none';
    document.body.appendChild(toast);
  }

  const icon = type === 'success' ? 'check_circle' : (type === 'error' ? 'error' : 'info');
  const colorClass = type === 'success' 
    ? 'bg-surface-container-high/95 text-primary border-primary/30' 
    : (type === 'error' ? 'bg-surface-container-high/95 text-error border-error/30' : 'bg-surface-container-high/95 text-secondary border-secondary/30');

  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border font-label-md text-label-md transition-all duration-300 pointer-events-auto ${colorClass}`;
  toast.innerHTML = `<span class="material-symbols-outlined text-xl">${icon}</span><span>${message}</span>`;

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-4');
  });

  // Auto-dismiss
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3500);
}

/**
 * Notification Bell Interactive Dropdown / Toast
 */
function initNotificationBell() {
  const bellBtn = document.getElementById('notificationBellBtn');
  if (!bellBtn) return;

  bellBtn.addEventListener('click', () => {
    showToast('📢 تنبيه: تم فتح حجز مدرجات الدرجة الثالثة شمال لمباراة القمة رسمياً!', 'info');
  });
}

/**
 * Language Switcher Demo
 */
function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-toggle-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'rtl';
      if (currentDir === 'rtl') {
        showToast('Language toggled: English interface preview available.', 'info');
      } else {
        showToast('تم التحويل للغة العربية بنجاح.', 'success');
      }
    });
  });
}

/**
 * Search Header Bar simulation
 */
function initSearchInput() {
  const searchInput = document.getElementById('headerSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (!query) return;
      showToast(`جاري الاستعلام عن بطاقة المشجع أو التذكرة: ${query}...`, 'info');
      setTimeout(() => {
        window.location.href = `tickets.html?query=${encodeURIComponent(query)}`;
      }, 1000);
    }
  });
}

// Export helpers to global scope
window.showToast = showToast;
