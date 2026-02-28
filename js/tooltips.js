/* ============================================================
   tooltips.js — ETFkalkulator.pl
   Desktop: dymek przy hover na ikonę ⓘ
   Mobile: kliknięcie kafelka = modal (okienko na środku ekranu)
   ============================================================ */

var TOOLTIPS = {

  'wynik-kapital-koncowy': {
    tytul: 'Kapitał końcowy',
    tekst: 'To cała kwota którą wypłacisz po zakończeniu inwestycji — Twoje wpłaty plus zarobione odsetki, już po zapłaceniu podatku.',
    przyklad: 'Wpłaciłeś łącznie 10 000 zł. Przez 10 lat zarobiłeś 4 000 zł odsetek. Zapłaciłeś 760 zł podatku. Wypłacasz 13 240 zł.'
  },
  'wynik-wklad-wlasny': {
    tytul: 'Wkład własny',
    tekst: 'Suma wszystkich Twoich wpłat — kapitał startowy plus każda regularna dopłata. To "Twoje" pieniądze, bez żadnych odsetek.',
    przyklad: 'Start: 1 000 zł. Dopłaty: 200 zł/mies. przez 10 lat = 24 000 zł. Wkład własny łącznie: 25 000 zł.'
  },
  'wynik-doplata-laczna': {
    tytul: 'Łączne dopłaty',
    tekst: 'Suma wszystkich regularnych dopłat które dodałeś do inwestycji. Nie wlicza się tu kapitał startowy.',
    przyklad: 'Dopłacasz 200 zł miesięcznie przez 10 lat: 200 × 120 miesięcy = 24 000 zł łącznych dopłat.'
  },
  'wynik-zysk-nominalny': {
    tytul: 'Zysk nominalny (przed podatkiem)',
    tekst: 'Tyle zarobiłeś na odsetkach zanim zapłacisz podatek. To "surowy" zysk — od tej kwoty zostanie obliczony podatek Belki.',
    przyklad: 'Wpłaciłeś 10 000 zł, po 10 latach masz 13 800 zł brutto. Zysk nominalny = 3 800 zł.'
  },
  'wynik-podatek-belki': {
    tytul: 'Podatek Belki — 19%',
    tekst: 'Podatek od zysków kapitałowych który płacisz państwu. Wynosi 19% od zysku. Przy obligacjach płacony jednorazowo na końcu — to zaleta bo pieniądze pracują dłużej. Można go uniknąć przez konto IKE lub IKZE.',
    przyklad: 'Zarobiłeś 3 800 zł odsetek. Podatek: 3 800 × 19% = 722 zł. Zostaje Ci: 3 078 zł netto.'
  },
  'wynik-zysk-po-podatku': {
    tytul: 'Zysk po podatku',
    tekst: 'To co realnie zarabiasz po oddaniu 19% państwu. Twój faktyczny zarobek nominalny — jeszcze bez uwzględnienia inflacji.',
    przyklad: 'Zysk nominalny 3 800 zł minus podatek 722 zł = 3 078 zł trafia do Twojej kieszeni.'
  },
  'wynik-zysk-realny': {
    tytul: 'Zysk realny (po inflacji)',
    tekst: 'Najważniejsza liczba! Pokazuje ile naprawdę przybyło Ci bogactwa. Obligacje EDO/ROS/ROD są indeksowane inflacją — ich oprocentowanie to inflacja + marża (np. 2%). Marża to Twój gwarantowany zysk ponad inflację.',
    przyklad: 'Inflacja 3,5%, marża EDO 2%. Rok 2+: zarabiasz 5,5% nominalnie. Z tego 3,5% kompensuje inflację, 2% to Twój realny zysk. Po podatku Belki realna stopa ≈ 1,62%.'
  },
  'wynik-cagr': {
    tytul: 'Roczna stopa zwrotu (CAGR)',
    tekst: 'Średni roczny zysk z całej inwestycji uwzględniający procent składany. Pozwala porównywać inwestycje o różnych horyzontach. Jedna liczba która mówi "tyle % rocznie zarabiałem".',
    przyklad: 'Zainwestowałeś 10 000 zł, po 10 latach masz 13 000 zł. CAGR = 2,66% — tyle średnio rocznie pracowały Twoje pieniądze.'
  },
  'wynik-cagr-realny': {
    tytul: 'Realna roczna stopa zwrotu',
    tekst: 'CAGR po uwzględnieniu inflacji. Dla obligacji indeksowanych inflacją powinna być zbliżona do marży minus efekt podatku Belki. Np. marża 2%, podatek 19% → realna stopa ≈ 1,62%.',
    przyklad: 'EDO, inflacja 3,5%, marża 2%, podatek Belki. Realna stopa zwrotu ≈ 1,6% rocznie — tyle rocznie realnie przybywa Ci bogactwa ponad inflację.'
  },
  'wynik-obligacje-porownanie': {
    tytul: 'Zysk z obligacji po podatku',
    tekst: 'Tyle zarobisz na obligacjach po zapłaceniu podatku Belki. Porównaj z lokatą poniżej.',
    przyklad: 'Obligacje EDO 10 lat: podatek płacony raz na końcu = więcej kapitału pracuje przez cały okres.'
  },
  'wynik-lokata-porownanie': {
    tytul: 'Zysk z lokaty po podatku',
    tekst: 'Tyle zarobiłbyś na lokacie o podanym oprocentowaniu. Przy lokacie podatek Belki pobierany jest co roku — to zmniejsza zysk bo nie możesz zarobić odsetek od tej kwoty w kolejnych latach.',
    przyklad: 'Lokata 4,5%, podatek pobierany co roku. Obligacje: podatek raz na końcu. Różnica rośnie z każdym rokiem dzięki procentowi składanemu.'
  },

  /* Strona główna */
  'karta-obligacje': {
    tytul: 'Kalkulator Obligacji Skarbowych',
    tekst: 'Obligacje skarbowe to pożyczka dla rządu — w zamian dostajesz odsetki. Jedna z najbezpieczniejszych form oszczędzania w Polsce.',
    przyklad: '10 000 zł w EDO na 10 lat przy inflacji 3,5% → ok. 13 500 zł po podatku.'
  },
  'karta-wolnosc': {
    tytul: 'Kalkulator Wolności Finansowej',
    tekst: 'Oblicza ile musisz odłożyć żeby Twoje oszczędności same utrzymywały Twój styl życia bez pracy.',
    przyklad: 'Chcesz 3 000 zł/mies. Potrzebujesz ok. 900 000 zł kapitału. Odkładając 1 000 zł/mies. osiągniesz to za ~25 lat.'
  },
  'karta-porownywarka': {
    tytul: 'Porównywarka ETF vs Obligacje',
    tekst: 'ETF = wyższy potencjalny zysk ale ryzyko. Obligacje = niższy zysk ale bezpieczeństwo. Porównaj dla swoich parametrów.',
    przyklad: 'ETF historycznie ~7%/rok, obligacje ~5%/rok. Ale ETF może stracić 30% w złym roku.'
  },

  /* Słowniczek */
  'pojecie-procent-skladany': {
    tytul: 'Dlaczego procent składany jest tak potężny?',
    tekst: 'Zarabiasz odsetki od odsetek. Z każdym rokiem baza rośnie — ta sama stopa % daje coraz więcej złotówek.',
    przyklad: '1 000 zł przy 5%: rok 1 = +50 zł, rok 10 = +78 zł, rok 20 = +126 zł. Ta sama stopa, coraz więcej złotówek!'
  },
  'pojecie-podatek': {
    tytul: 'Jak uniknąć podatku Belki?',
    tekst: 'Kupując obligacje przez konto IKE lub IKZE legalnie nie płacisz 19% podatku od zysku.',
    przyklad: 'Zysk 10 000 zł: bez IKE = 1 900 zł podatku. Z IKE = 0 zł. Różnica: 1 900 zł zostaje u Ciebie.'
  },
  'pojecie-zysk-realny': {
    tytul: 'Dlaczego inflacja jest ważna?',
    tekst: 'Inflacja to wzrost cen. Musisz zarabiać więcej niż wynosi inflacja — inaczej realnie tracisz.',
    przyklad: 'Lokata 3%, inflacja 5% = tracisz 2% rocznie mimo że nominalnie zarabiasz. Obligacje EDO z marżą 2% = zawsze na plusie realnie.'
  }
};

/* ----------------------------------------------------------
   WYKRYWANIE MOBILE
   ---------------------------------------------------------- */

function czyMobile() {
  return window.innerWidth <= 768 || ('ontouchstart' in window);
}

/* ----------------------------------------------------------
   MODAL — dla mobile
   ---------------------------------------------------------- */

function pokazModal(id) {
  var dane = TOOLTIPS[id];
  if (!dane) return;

  // Usuń poprzedni modal jeśli istnieje
  var stary = document.getElementById('tooltip-modal-overlay');
  if (stary) stary.remove();

  // Overlay (przyciemnione tło)
  var overlay = document.createElement('div');
  overlay.id = 'tooltip-modal-overlay';
  overlay.style.cssText = [
    'position: fixed',
    'inset: 0',
    'background: rgba(0,0,0,0.45)',
    'z-index: 9998',
    'display: flex',
    'align-items: flex-end',
    'justify-content: center',
    'padding: 0',
    'animation: fadeInOverlay 0.2s ease',
  ].join(';');

  // Modal (okienko od dołu — "bottom sheet")
  var modal = document.createElement('div');
  modal.style.cssText = [
    'background: var(--color-bg-elevated, #fff)',
    'border-radius: 20px 20px 0 0',
    'padding: 24px 24px 40px',
    'width: 100%',
    'max-width: 100%',
    'max-height: 80vh',
    'overflow-y: auto',
    'animation: slideUp 0.25s ease',
    'position: relative',
  ].join(';');

  modal.innerHTML =
    // Uchwyt do przeciągania (dekoracyjny)
    '<div style="width:40px;height:4px;background:var(--color-border,#e5e7eb);border-radius:2px;margin:0 auto 20px;"></div>' +
    // Tytuł
    '<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-green-500,#40916C);margin-bottom:10px">' + dane.tytul + '</div>' +
    // Tekst
    '<div style="font-size:15px;line-height:1.65;color:var(--color-text-primary,#1C1C1E);margin-bottom:16px">' + dane.tekst + '</div>' +
    // Przykład
    '<div style="font-size:13px;line-height:1.6;color:var(--color-text-secondary,#6E6E73);background:var(--color-bg-secondary,#F5F5F0);border-radius:12px;padding:14px">' +
    '<span style="font-weight:700;color:var(--color-green-700,#2D6A4F)">Przykład: </span>' + dane.przyklad +
    '</div>' +
    // Przycisk zamknij
    '<button onclick="zamknijModal()" style="width:100%;margin-top:20px;padding:14px;background:var(--color-green-500,#40916C);color:white;border:none;border-radius:12px;font-family:var(--font-sans,sans-serif);font-size:15px;font-weight:600;cursor:pointer">Rozumiem</button>';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Zamknij po kliknięciu w tło
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) zamknijModal();
  });

  // Blokuj scroll strony gdy modal otwarty
  document.body.style.overflow = 'hidden';
}

function zamknijModal() {
  var overlay = document.getElementById('tooltip-modal-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.15s ease';
    setTimeout(function() { overlay.remove(); }, 150);
  }
  document.body.style.overflow = '';
}

/* ----------------------------------------------------------
   DYMEK DESKTOP — hover
   ---------------------------------------------------------- */

var aktywnyTooltip = null;

function pokazDymek(id, targetEl) {
  var dane = TOOLTIPS[id];
  if (!dane) return;

  var dymek = document.getElementById('tooltip-dymek');
  if (!dymek) {
    dymek = document.createElement('div');
    dymek.id = 'tooltip-dymek';
    dymek.style.cssText = [
      'position: fixed',
      'z-index: 9999',
      'max-width: 300px',
      'background: var(--color-bg-elevated, #fff)',
      'border: 1px solid var(--color-border-subtle, #e5e7eb)',
      'border-radius: 12px',
      'padding: 14px',
      'box-shadow: 0 8px 32px rgba(0,0,0,0.12)',
      'pointer-events: none',
      'opacity: 0',
      'transform: translateY(6px)',
      'transition: opacity 0.18s ease, transform 0.18s ease',
      'font-family: var(--font-sans, sans-serif)',
    ].join(';');
    document.body.appendChild(dymek);
  }

  dymek.innerHTML =
    '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-green-500,#40916C);margin-bottom:6px">' + dane.tytul + '</div>' +
    '<div style="font-size:12px;line-height:1.6;color:var(--color-text-primary,#1C1C1E);margin-bottom:8px">' + dane.tekst + '</div>' +
    '<div style="font-size:11px;line-height:1.5;color:var(--color-text-secondary,#6E6E73);background:var(--color-bg-secondary,#F5F5F0);border-radius:8px;padding:8px">' +
    '<span style="font-weight:700;color:var(--color-green-700,#2D6A4F)">Przykład: </span>' + dane.przyklad +
    '</div>';

  var rect  = targetEl.getBoundingClientRect();
  var left  = Math.max(8, Math.min(rect.left, window.innerWidth - 316));
  var top   = rect.bottom + 8;
  var doGory = top + 220 > window.innerHeight;

  dymek.style.left = left + 'px';
  dymek.style.top  = doGory ? (rect.top - 8 + 'px') : top + 'px';
  dymek.style.transformOrigin = doGory ? 'bottom left' : 'top left';

  requestAnimationFrame(function() {
    dymek.style.opacity   = '1';
    dymek.style.transform = 'translateY(0)';
  });

  aktywnyTooltip = id;
}

function ukryjDymek() {
  var dymek = document.getElementById('tooltip-dymek');
  if (dymek) {
    dymek.style.opacity   = '0';
    dymek.style.transform = 'translateY(6px)';
  }
  aktywnyTooltip = null;
}

/* ----------------------------------------------------------
   PODŚWIETLENIE KAFELKA — efekt tap na mobile
   ---------------------------------------------------------- */

function dodajEfektKafelka(kafelek, tooltipId) {
  kafelek.style.cursor = 'pointer';
  kafelek.style.transition = 'background-color 0.15s ease, transform 0.15s ease';
  kafelek.setAttribute('role', 'button');
  kafelek.setAttribute('tabindex', '0');

  // Mobile — kliknięcie całego kafelka otwiera modal
  kafelek.addEventListener('click', function(e) {
    // Nie otwieraj jeśli kliknięto w ikonę ⓘ (ona ma własny handler)
    if (e.target.closest('[data-tooltip]')) return;

    if (czyMobile()) {
      // Efekt podświetlenia
      kafelek.style.backgroundColor = 'var(--color-green-50, #d8f3dc)';
      kafelek.style.transform = 'scale(0.98)';
      setTimeout(function() {
        kafelek.style.backgroundColor = '';
        kafelek.style.transform = '';
      }, 200);
      pokazModal(tooltipId);
    }
  });

  // Desktop hover — subtelne podświetlenie
  kafelek.addEventListener('mouseenter', function() {
    if (!czyMobile()) {
      kafelek.style.backgroundColor = 'var(--color-green-50, #d8f3dc)';
    }
  });
  kafelek.addEventListener('mouseleave', function() {
    kafelek.style.backgroundColor = '';
  });
}

/* ----------------------------------------------------------
   IKONA ⓘ — tylko na desktop
   ---------------------------------------------------------- */

function stworzIkoneInfo(tooltipId) {
  var ikona = document.createElement('button');
  ikona.setAttribute('type', 'button');
  ikona.setAttribute('aria-label', 'Więcej informacji');
  ikona.setAttribute('data-tooltip', tooltipId);
  ikona.style.cssText = [
    'display: inline-flex',
    'align-items: center',
    'justify-content: center',
    'width: 16px',
    'height: 16px',
    'border-radius: 50%',
    'border: 1.5px solid var(--color-text-muted, #AEAEB2)',
    'background: transparent',
    'color: var(--color-text-muted, #AEAEB2)',
    'font-size: 10px',
    'font-weight: 700',
    'font-family: Georgia, serif',
    'cursor: pointer',
    'margin-left: 5px',
    'flex-shrink: 0',
    'transition: all 0.15s ease',
    'line-height: 1',
  ].join(';');
  ikona.textContent = 'i';

  // Desktop — hover
  ikona.addEventListener('mouseenter', function() {
    if (!czyMobile()) {
      ikona.style.borderColor = 'var(--color-green-500, #40916C)';
      ikona.style.color       = 'var(--color-green-500, #40916C)';
      pokazDymek(tooltipId, ikona);
    }
  });
  ikona.addEventListener('mouseleave', function() {
    ikona.style.borderColor = 'var(--color-text-muted, #AEAEB2)';
    ikona.style.color       = 'var(--color-text-muted, #AEAEB2)';
    ukryjDymek();
  });

  // Mobile — ikona też otwiera modal
  ikona.addEventListener('click', function(e) {
    e.stopPropagation();
    if (czyMobile()) {
      pokazModal(tooltipId);
    } else {
      if (aktywnyTooltip === tooltipId) ukryjDymek();
      else pokazDymek(tooltipId, ikona);
    }
  });

  return ikona;
}

/* ----------------------------------------------------------
   ANIMACJE CSS
   ---------------------------------------------------------- */

var style = document.createElement('style');
style.textContent = [
  '@keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }',
  '@keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }',
].join('\n');
document.head.appendChild(style);

/* ----------------------------------------------------------
   PODPINANIE DO KAFELKÓW
   ---------------------------------------------------------- */

function podepnijTooltips() {

  var kafelkiIds = [
    /* Moduł 1 — Obligacje */
    'wynik-kapital-koncowy',
    'wynik-wklad-wlasny',
    'wynik-doplata-laczna',
    'wynik-zysk-nominalny',
    'wynik-podatek-belki',
    'wynik-zysk-po-podatku',
    'wynik-zysk-realny',
    'wynik-cagr',
    'wynik-cagr-realny',
    'wynik-obligacje-porownanie',
    'wynik-lokata-porownanie',
    /* Moduł 2 — Wolność Finansowa */
    'wf-wynik-cel',
    'wf-wynik-lata',
    'wf-wynik-wymagane',
    'wf-wynik-fire-trwa',
    'wf-wynik-stopa-realna',
    /* Moduł 3 — Porównywarka */
    'por-etf-kapital',
    'por-obligacje-kapital',
    'por-lokata-kapital',
  ];

  kafelkiIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (!el || !TOOLTIPS[id]) return;

    var kafelek = el.closest('.kafelek, .porownanie__wiersz, .wynik-glowny, .wynik-glowny-fire, .por-panel, .por-wiersz');
    if (!kafelek) return;

    // Dodaj efekt kliknięcia na kafelek (mobile)
    dodajEfektKafelka(kafelek, id);

    // Dodaj ikonę ⓘ do etykiety (desktop)
    var etykieta = kafelek.querySelector('.kafelek__etykieta, .porownanie__nazwa, .wynik-glowny__etykieta, .wynik-glowny-fire__etykieta, .por-panel__tytul, .por-wiersz__label');
    if (!etykieta || etykieta.querySelector('[data-tooltip]')) return;
    etykieta.style.display    = 'flex';
    etykieta.style.alignItems = 'center';
    etykieta.appendChild(stworzIkoneInfo(id));
  });

  // Słowniczek
  var pojecia = [
    { selektor: '.pojecie:nth-child(1)', id: 'pojecie-procent-skladany' },
    { selektor: '.pojecie:nth-child(2)', id: 'pojecie-podatek' },
    { selektor: '.pojecie:nth-child(3)', id: 'pojecie-zysk-realny' },
  ];
  pojecia.forEach(function(p) {
    var el = document.querySelector(p.selektor);
    if (!el || !TOOLTIPS[p.id]) return;
    dodajEfektKafelka(el, p.id);
    var term = el.querySelector('.pojecie__term');
    if (!term || term.querySelector('[data-tooltip]')) return;
    term.style.display    = 'flex';
    term.style.alignItems = 'center';
    term.appendChild(stworzIkoneInfo(p.id));
  });
}

/* Zamknij dymek po kliknięciu lub scrollu */
document.addEventListener('click', function(e) {
  if (!e.target.closest('[data-tooltip]')) ukryjDymek();
});
window.addEventListener('scroll', ukryjDymek, { passive: true });

document.addEventListener('DOMContentLoaded', podepnijTooltips);
