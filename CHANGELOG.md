# Changelog — ETFkalkulator.pl

---

## [Nieukończone] — Do zrobienia

### Następna sesja
- [ ] GitHub Pages — publikacja strony pod publicznym URL
- [ ] Testowanie na telefonie
- [ ] `pages/kalkulator-wolnosci.html` — Moduł 2
- [ ] `js/calculators/wolnosc.js` — logika Modułu 2
- [ ] `pages/porownywarka.html` — Moduł 3
- [ ] `php/newsletter.php` — zapis do MailerLite
- [ ] Cookie consent banner
- [ ] Google Analytics 4
- [ ] Favicon

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
