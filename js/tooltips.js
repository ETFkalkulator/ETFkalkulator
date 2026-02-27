/* ============================================================
   tooltips.js — ETFkalkulator.pl
   System dymków informacyjnych dla początkujących inwestorów.
   Działa na desktop (hover) i mobile (kliknięcie).
   ============================================================ */

/* ----------------------------------------------------------
   TREŚCI TOOLTIPÓW
   Każdy tooltip ma: tytuł, wyjaśnienie i realny przykład.
   ---------------------------------------------------------- */

var TOOLTIPS = {

  /* --- KAFELKI KALKULATORA OBLIGACJI --- */

  'wynik-kapital-koncowy': {
    tytul: 'Kapitał końcowy',
    tekst: 'To cała kwota którą wypłacisz po zakończeniu inwestycji — Twoje wpłaty plus zarobione odsetki, już po zapłaceniu podatku.',
    przyklad: 'Wpłaciłeś łącznie 10 000 zł. Przez 10 lat zarobiłeś 4 000 zł odsetek. Zapłaciłeś 760 zł podatku. Wypłacasz 13 240 zł.'
  },

  'wynik-wklad-wlasny': {
    tytul: 'Wkład własny',
    tekst: 'Suma wszystkich Twoich wpłat — kapitał startowy plus każda regularna dopłata. To "Twoje" pieniądze, bez żadnych odsetek.',
    przyklad: 'Start: 1 000 zł. Dopłaty: 200 zł/mies. przez 10 lat = 24 000 zł. Wkład własny: 25 000 zł.'
  },

  'wynik-doplata-laczna': {
    tytul: 'Łączne dopłaty',
    tekst: 'Suma wszystkich regularnych dopłat które dodałeś do inwestycji. Nie wlicza się tu kapitał startowy.',
    przyklad: 'Dopłacasz 200 zł miesięcznie przez 10 lat: 200 × 120 miesięcy = 24 000 zł łącznych dopłat.'
  },

  'wynik-zysk-nominalny': {
    tytul: 'Zysk nominalny (przed podatkiem)',
    tekst: 'Tyle zarobiłeś na odsetkach zanim zapłacisz podatek. To "surowy" zysk — od tej kwoty zostanie obliczony podatek Belki.',
    przyklad: 'Wpłaciłeś 10 000 zł, po 10 latach masz 13 800 zł. Zysk nominalny = 3 800 zł (przed potrąceniem podatku).'
  },

  'wynik-podatek-belki': {
    tytul: 'Podatek Belki — 19%',
    tekst: 'Podatek od zysków kapitałowych który płacisz państwu. Wynosi dokładnie 19% od zysku. Przy obligacjach płacony jest jednorazowo na końcu — to zaleta, bo pieniądze pracują dłużej. Możesz go uniknąć kupując obligacje przez konto IKE lub IKZE.',
    przyklad: 'Zarobiłeś 3 800 zł odsetek. Podatek Belki: 3 800 × 19% = 722 zł. Zostaje Ci: 3 078 zł czystego zysku.'
  },

  'wynik-zysk-po-podatku': {
    tytul: 'Zysk po podatku',
    tekst: 'To co realnie zarabiasz po oddaniu 19% państwu. Twój faktyczny zarobek nominalny — bez uwzględnienia inflacji.',
    przyklad: 'Zysk nominalny 3 800 zł minus podatek 722 zł = 3 078 zł trafia do Twojej kieszeni.'
  },

  'wynik-zysk-realny': {
    tytul: 'Zysk realny (po inflacji)',
    tekst: 'Najważniejsza liczba — pokazuje ile naprawdę przybyło Ci bogactwa. Inflacja sprawia że za 100 zł za kilka lat kupisz mniej niż dziś. Zysk realny to zysk po odjęciu tego efektu. Obligacje EDO/ROS/ROD są indeksowane inflacją, więc marża (np. 2%) to Twój gwarantowany zysk realny.',
    przyklad: 'Zarobiłeś 3 078 zł po podatku. Inflacja przez 10 lat "zjadła" siłę nabywczą. Zysk realny = tylko ta część która przekracza inflację — czyli marża 2% rocznie.'
  },

  'wynik-cagr': {
    tytul: 'Roczna stopa zwrotu (CAGR)',
    tekst: 'CAGR to średni roczny zysk z całej inwestycji uwzględniający procent składany. Dzięki temu możesz porównywać inwestycje o różnych horyzontach. Jedna liczba która mówi "tyle % rocznie zarabiałem".',
    przyklad: 'Zainwestowałeś 10 000 zł, po 10 latach masz 13 000 zł. CAGR = 2,66% rocznie — tyle średnio pracowały Twoje pieniądze każdego roku.'
  },

  'wynik-cagr-realny': {
    tytul: 'Realna roczna stopa zwrotu',
    tekst: 'To samo co CAGR ale po uwzględnieniu inflacji. Pokazuje o ile % rocznie naprawdę przyrastało Twoje bogactwo — ponad inflację. Dla obligacji indeksowanych inflacją powinna być zbliżona do marży (np. 2%) minus efekt podatku.',
    przyklad: 'CAGR nominalny 5,5%, inflacja 3,5%. Realna stopa zwrotu ≈ 2% — tyle rocznie realnie zarabiasz ponad inflację.'
  },

  'wynik-obligacje-porownanie': {
    tytul: 'Zysk z obligacji po podatku',
    tekst: 'Tyle zarobisz na obligacjach skarbowych po zapłaceniu podatku Belki. Porównaj z zyskiem z lokaty poniżej — zobaczysz która opcja jest lepsza dla Ciebie.',
    przyklad: 'Obligacje EDO przez 10 lat przy inflacji 3,5%: zysk po podatku wyższy niż lokata bo marża 2% + podatek płacony tylko raz na końcu.'
  },

  'wynik-lokata-porownanie': {
    tytul: 'Zysk z lokaty po podatku',
    tekst: 'Tyle zarobiłbyś na lokacie bankowej o podanym oprocentowaniu. Uwaga: przy lokacie podatek Belki pobierany jest co roku — to zmniejsza zysk bo nie możesz zarobić odsetek od tej kwoty w kolejnych latach.',
    przyklad: 'Lokata 4,5% rocznie, 10 000 zł przez 10 lat. Podatek pobierany co roku = mniejszy kapitał w kolejnym roku = niższy końcowy wynik niż przy obligacjach.'
  },

  /* --- STRONA GŁÓWNA — karty kalkulatorów --- */

  'karta-obligacje': {
    tytul: 'Kalkulator Obligacji Skarbowych',
    tekst: 'Obligacje skarbowe to pożyczka dla rządu — w zamian dostajesz odsetki. Są uważane za jedną z najbezpieczniejszych form oszczędzania w Polsce. Kalkulator pokazuje ile realnie zarobisz po podatkach i inflacji.',
    przyklad: 'Wpłacasz 10 000 zł w obligacje EDO na 10 lat. Przy inflacji 3,5% i marży 2% — po 10 latach wypłacasz ok. 13 500 zł.'
  },

  'karta-wolnosc': {
    tytul: 'Kalkulator Wolności Finansowej',
    tekst: 'Wolność finansowa to moment gdy Twoje oszczędności generują tyle pasywnego dochodu że nie musisz pracować. Kalkulator oblicza ile musisz odłożyć żeby to osiągnąć — i jak długo to zajmie.',
    przyklad: 'Chcesz 3 000 zł/mies. pasywnego dochodu. Potrzebujesz ok. 900 000 zł kapitału (reguła 4%). Odkładając 1 000 zł/mies. osiągniesz to za ok. 25 lat.'
  },

  'karta-porownywarka': {
    tytul: 'Porównywarka ETF vs Obligacje',
    tekst: 'ETF to fundusz który kupuje wiele akcji naraz — daje szansę na wyższy zysk ale z większym ryzykiem. Obligacje są bezpieczniejsze ale mniej zyskowne. Porównaj obie opcje dla swoich parametrów.',
    przyklad: 'ETF światowy historycznie dawał ~7% rocznie, obligacje ~5%. Ale w złym roku ETF może stracić 30% wartości — obligacje tego ryzyka nie mają.'
  },

  /* --- SŁOWNICZEK POJĘĆ --- */

  'pojecie-procent-skladany': {
    tytul: 'Dlaczego procent składany jest tak potężny?',
    tekst: 'Procent składany działa tak: zarabiasz odsetki od odsetek. Z każdym rokiem baza rośnie — więc ta sama stopa % daje coraz większy zysk w złotówkach.',
    przyklad: '1 000 zł przy 5% rocznie: rok 1 = +50 zł, rok 10 = +78 zł, rok 20 = +126 zł — ta sama stopa %, ale coraz więcej złotówek.'
  },

  'pojecie-podatek': {
    tytul: 'Jak uniknąć podatku Belki?',
    tekst: 'Legalnie możesz nie płacić 19% podatku kupując obligacje przez konto IKE (Indywidualne Konto Emerytalne) lub IKZE. To jeden z nielicznych sposobów by legalnie nie płacić tego podatku w Polsce.',
    przyklad: 'Zysk 10 000 zł: bez IKE płacisz 1 900 zł podatku. Z IKE: 0 zł podatku. Różnica: 1 900 zł zostaje w Twojej kieszeni.'
  },

  'pojecie-zysk-realny': {
    tytul: 'Dlaczego inflacja jest ważna?',
    tekst: 'Inflacja to wzrost cen. Jeśli masz 1 000 zł i inflacja wynosi 5%, za rok Twoje 1 000 zł kupi tyle co dziś 952 zł. Dlatego samo "nie tracenie" pieniędzy to za mało — musisz zarabiać więcej niż wynosi inflacja.',
    przyklad: 'Lokata 3%, inflacja 5% = realnie TRACISZ 2% rocznie mimo że nominalnie zarabiasz. Obligacje EDO przy marży 2% ponad inflację = zawsze jesteś na plusie realnie.'
  }
};


/* ----------------------------------------------------------
   TWORZENIE I ZARZĄDZANIE DYMKIEM
   ---------------------------------------------------------- */

var aktywnyTooltip = null;

function stworzDymek() {
  var dymek = document.createElement('div');
  dymek.id = 'tooltip-dymek';
  dymek.style.cssText = [
    'position: fixed',
    'z-index: 9999',
    'max-width: 320px',
    'background: var(--color-bg-elevated, #fff)',
    'border: 1px solid var(--color-border-subtle, #e5e7eb)',
    'border-radius: 12px',
    'padding: 16px',
    'box-shadow: 0 8px 32px rgba(0,0,0,0.12)',
    'pointer-events: none',
    'opacity: 0',
    'transform: translateY(6px)',
    'transition: opacity 0.18s ease, transform 0.18s ease',
    'font-family: var(--font-sans, DM Sans, sans-serif)',
  ].join(';');
  document.body.appendChild(dymek);
  return dymek;
}

function pokazDymek(id, targetEl) {
  var dane = TOOLTIPS[id];
  if (!dane) return;

  var dymek = document.getElementById('tooltip-dymek') || stworzDymek();

  dymek.innerHTML =
    '<div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-green-500,#40916C);margin-bottom:6px">' + dane.tytul + '</div>' +
    '<div style="font-size:13px;line-height:1.6;color:var(--color-text-primary,#1C1C1E);margin-bottom:10px">' + dane.tekst + '</div>' +
    '<div style="font-size:12px;line-height:1.5;color:var(--color-text-secondary,#6E6E73);background:var(--color-bg-secondary,#F5F5F0);border-radius:8px;padding:10px">' +
    '<span style="font-weight:600;color:var(--color-green-700,#2D6A4F)">Przykład: </span>' + dane.przyklad +
    '</div>';

  // Pozycjonowanie dymka
  var rect   = targetEl.getBoundingClientRect();
  var dLeft  = rect.left;
  var dTop   = rect.bottom + 8;

  // Sprawdź czy nie wychodzi za prawą krawędź ekranu
  var maxLeft = window.innerWidth - 336;
  if (dLeft > maxLeft) dLeft = maxLeft;

  // Sprawdź czy nie wychodzi za dolną krawędź
  if (dTop + 200 > window.innerHeight) {
    dTop = rect.top - 8;
    dymek.style.transform = 'translateY(-100%) translateY(-6px)';
  } else {
    dymek.style.transform = 'translateY(6px)';
  }

  dymek.style.left = Math.max(8, dLeft) + 'px';
  dymek.style.top  = dTop + 'px';

  // Animacja wejścia
  requestAnimationFrame(function() {
    dymek.style.opacity   = '1';
    dymek.style.transform = dTop + 200 > window.innerHeight
      ? 'translateY(-100%)'
      : 'translateY(0)';
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
   IKONA ⓘ — tworzona automatycznie
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
    'width: 18px',
    'height: 18px',
    'border-radius: 50%',
    'border: 1.5px solid var(--color-text-muted, #AEAEB2)',
    'background: transparent',
    'color: var(--color-text-muted, #AEAEB2)',
    'font-size: 11px',
    'font-weight: 700',
    'font-family: Georgia, serif',
    'cursor: pointer',
    'margin-left: 6px',
    'flex-shrink: 0',
    'transition: all 0.15s ease',
    'vertical-align: middle',
    'line-height: 1',
  ].join(';');
  ikona.textContent = 'i';

  // Hover — desktop
  ikona.addEventListener('mouseenter', function() {
    ikona.style.borderColor = 'var(--color-green-500, #40916C)';
    ikona.style.color       = 'var(--color-green-500, #40916C)';
    pokazDymek(tooltipId, ikona);
  });
  ikona.addEventListener('mouseleave', function() {
    ikona.style.borderColor = 'var(--color-text-muted, #AEAEB2)';
    ikona.style.color       = 'var(--color-text-muted, #AEAEB2)';
    ukryjDymek();
  });

  // Kliknięcie — mobile
  ikona.addEventListener('click', function(e) {
    e.stopPropagation();
    if (aktywnyTooltip === tooltipId) {
      ukryjDymek();
    } else {
      pokazDymek(tooltipId, ikona);
    }
  });

  return ikona;
}


/* ----------------------------------------------------------
   PODPINANIE TOOLTIPÓW DO KAFELKÓW
   ---------------------------------------------------------- */

function podepnijTooltips() {

  // Kafelki z id — szukamy etykiety i dodajemy ikonę
  var mapowanieKafelkow = [
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
  ];

  mapowanieKafelkow.forEach(function(id) {
    var el = document.getElementById(id);
    if (!el || !TOOLTIPS[id]) return;

    // Znajdź etykietę (poprzedni element z klasą kafelek__etykieta lub porownanie__nazwa)
    var kafelek  = el.closest('.kafelek, .porownanie__wiersz, .wynik-glowny');
    if (!kafelek) return;

    var etykieta = kafelek.querySelector('.kafelek__etykieta, .porownanie__nazwa, .wynik-glowny__etykieta');
    if (!etykieta) return;

    // Nie dodawaj dwa razy
    if (etykieta.querySelector('[data-tooltip]')) return;

    etykieta.style.display     = 'flex';
    etykieta.style.alignItems  = 'center';
    etykieta.appendChild(stworzIkoneInfo(id));
  });

  // Słowniczek pojęć
  var mapowaniePojec = [
    { selektor: '.pojecie:nth-child(1)', id: 'pojecie-procent-skladany' },
    { selektor: '.pojecie:nth-child(2)', id: 'pojecie-podatek' },
    { selektor: '.pojecie:nth-child(3)', id: 'pojecie-zysk-realny' },
  ];

  mapowaniePojec.forEach(function(p) {
    var el = document.querySelector(p.selektor);
    if (!el || !TOOLTIPS[p.id]) return;
    var term = el.querySelector('.pojecie__term');
    if (!term || term.querySelector('[data-tooltip]')) return;
    term.style.display    = 'flex';
    term.style.alignItems = 'center';
    term.appendChild(stworzIkoneInfo(p.id));
  });
}


/* ----------------------------------------------------------
   ZAMKNIJ DYMEK PO KLIKNIĘCIU GDZIEKOLWIEK
   ---------------------------------------------------------- */

document.addEventListener('click', function(e) {
  if (!e.target.closest('[data-tooltip]')) {
    ukryjDymek();
  }
});

// Zamknij przy scrollowaniu
window.addEventListener('scroll', ukryjDymek, { passive: true });


/* ----------------------------------------------------------
   INICJALIZACJA
   ---------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', podepnijTooltips);
