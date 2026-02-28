# Changelog — ETFkalkulator.pl

---

## [Nieukończone] — Do zrobienia

### Następna sesja
- [ ] GitHub Pages — publikacja strony pod publicznym URL
- [ ] Testowanie na telefonie
- [x] `pages/kalkulator-wolnosci.html` — Moduł 2 ✅
- [x] `js/calculators/wolnosc.js` — logika Modułu 2 ✅
- [ ] `pages/porownywarka.html` — Moduł 3
- [ ] `php/newsletter.php` — zapis do MailerLite
- [ ] Cookie consent banner
- [ ] Google Analytics 4
- [ ] Favicon

---

## [2026-02] — Sesja 5+6: Mobile UX, Moduł 2

### Dodano
- **Moduł 2: Kalkulator Wolności Finansowej** (`pages/kalkulator-wolnosci.html`, `js/calculators/wolnosc.js`)
  - Obliczenie celu FIRE (wydatki roczne / stopa wypłat)
  - Ile lat do wolności przy obecnych oszczędnościach
  - Ile miesięcznie odkładać żeby osiągnąć cel w N latach
  - Symulacja fazy wypłat — jak długo kapitał wytrzyma
  - Progress bar — postęp do celu FIRE
  - Wykres akumulacji kapitału vs linia celu
  - Wykres fazy emerytalnej (wypłaty z kapitału)
  - Obsługa IKE/IKZE (brak podatku Belki)
  - Reguła 4% domyślna, konfigurowalna stopa wypłat
  - Słowniczek pojęć: FIRE, reguła 4%, procent składany

- **Mobile UX — tooltips jako modal bottom sheet**
  - Na mobile: kliknięcie kafelka → okienko od dołu ekranu
  - Animacja slideUp, przyciemnione tło, przycisk "Rozumiem"
  - Desktop bez zmian (hover na ikonie ⓘ)

- **Czyszczenie pól przy focus**
  - Domyślna wartość znika gdy użytkownik klika pole
  - Wraca automatycznie jeśli pole zostaje puste

- **Przycisk dark mode widoczny na mobile**
  - Wcześniej cały header__nav był ukryty na mobile
  - Teraz chowane są tylko linki, przycisk pozostaje

### Naprawiono
- `variables.css` — przywrócono utracony blok `:root` z tokenami
- `form-input-wrapper` — przeprojektowany na flexbox
  (suffix `zł`/`%` nie rozszerza kontenera)
- Inputy: `type="text" inputmode="decimal"` + `maxlength`
  (zapobiega rozszerzaniu layoutu przez przeglądarkę mobilną)
- Dark mode — ujednolicony system na `html.dark-mode` / `html.light-mode`
  (wcześniej `body.dark-mode` nie nadpisywało systemowego `prefers-color-scheme`)
- Disclaimer — wyraźniejszy (tło, obramowanie, czytelniejszy font)

### Znane bugi (pending)
- [ ] Dark mode na Safari iOS — przycisk nie działa
- [ ] Overflow layoutu przy wpisywaniu długich liczb na niektórych urządzeniach

---

## [2025-02] — Sesja 4: Tooltips, dark mode, UX poprawki

### Dodano
- `js/tooltips.js` — system dymków edukacyjnych
  - Ikona ⓘ przy każdym kafelku wyników
  - Desktop: hover, Mobile: kliknięcie
  - Każdy tooltip: tytuł + wyjaśnienie + realny przykład liczbowy
  - Dymek nie wychodzi poza ekran (sprawdza pozycję)
  - Zamyka się po kliknięciu gdziekolwiek lub scrollowaniu
  - Tooltips na stronie głównej przy kartach kalkulatorów
  - Tooltips w słowniczku pojęć
- Dark mode — przycisk słońce/księżyc w headerze obu stron
  - Tryb zapamiętany w localStorage
  - Płynne przejście 0.3s
- Przycisk Newsletter w headerze — zmieniony na biały
  (był nieczytelny na zielonym tle)

### Naprawiono
- Kapitał startowy = 0 z dopłatami nie przeliczał się
  → walidacja zmieniona z `kapital <= 0` na `kapital < 0`
- Tabela "Szczegóły rok po roku" była ucięta
  → usunięto overflow:hidden z prawej kolumny,
  formularz sticky z max-height zamiast height:100vh
- Główny wynik — przeprojektowany: głębszy gradient,
  wycentrowany, większy font clamp(), dekoracyjne koła w tle,
  cień tekstu

### Stan projektu po sesji
```
ETFkalkulator/
├── index.html                        ✅ tooltips, dark mode
├── css/
│   ├── reset.css                     ✅
│   ├── variables.css                 ✅
│   └── main.css                      ✅
├── js/
│   ├── calculators/
│   │   └── obligacje.js              ✅ fix kapital=0
│   ├── utils.js                      ✅
│   └── tooltips.js                   ✅ NOWY
├── pages/
│   └── kalkulator-obligacji.html     ✅ tooltips, dark mode, fix tabela
├── php/                              (pusty)
├── assets/img/                       (pusty)
├── PRD.md                            ✅
└── CHANGELOG.md                      ✅
```

---

## [2025-02] — Sesja 3: Dopłaty, wykres, ikony, scroll

### Dodano
- Dopłaty miesięczne/roczne z przełącznikiem
- Obliczenia miesięczne (dokładniejsze)
- Wykres: przełącznik Rocznie/Miesięcznie + linia wkładu własnego
- Ikony SVG zamiast emoji
- Niezależne scrollowanie kolumn (sticky formularz)

### Naprawiono
- Zysk realny na minusie — poprawna logika dla obligacji
  indeksowanych inflacją (rok 2+ = tylko marża)
- CAGR liczony od wkładu własnego zamiast od startu
- Duplikat id="wynik-zysk-po-podatku"

---

## [2025-02] — Sesja 2: Moduł 1 pierwsza wersja

### Dodano
- js/calculators/obligacje.js
- pages/kalkulator-obligacji.html

### Naprawiono
- Konflikty JS (zaokraglij, const→var)
- Marże zaktualizowane do 2026

---

## [2025-02] — Sesja 1: Fundament

### Dodano
- Design system, CSS, utils.js, index.html, PRD, .windsurfrules

---
*ETFkalkulator.pl — CHANGELOG v1.4*
