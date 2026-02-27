# Changelog — ETFkalkulator.pl

---

## [Nieukończone] — Do zrobienia

### Znany błąd do naprawy w następnej sesji
- [ ] Nieznany błąd zgłoszony pod koniec sesji 3 — wymaga screenshota i diagnozy

### Kolejne kroki po naprawie błędu
- [ ] `pages/kalkulator-wolnosci.html` — Moduł 2: Kalkulator Wolności Finansowej
- [ ] `js/calculators/wolnosc.js` — logika Modułu 2
- [ ] `pages/porownywarka.html` — Moduł 3
- [ ] `js/calculators/porownywarka.js` — logika Modułu 3
- [ ] `php/newsletter.php` — zapis do MailerLite
- [ ] Cookie consent banner
- [ ] Google Analytics 4
- [ ] Favicon

---

## [2025-02] — Sesja 3: Moduł 1 — dopracowanie

### Dodano
- Pole "Regularna dopłata" z przełącznikiem Miesięcznie / Rocznie
- Hint pod polem dopłaty pokazuje przeliczenie na żywo
  (np. "200 zł/mies. = 2400 zł/rok = 24000 zł łącznie")
- Obliczenia miesięczne — każda dopłata zaczyna pracować od razu
- Trzecia linia na wykresie: "Wkład własny" — pokazuje ile to odsetki
  a ile własne wpłaty
- Przełącznik wykresu: Rocznie / Miesięcznie
- Nowe kafelki wyników: Wkład własny, Łączne dopłaty
- Ikony SVG (Phosphor Icons styl) zamiast emoji:
  - Strona główna: wykres liniowy, koncentryczne koła, waga,
    liść, dom, książka, tarcza, telefon
  - Kalkulator: ikona info w disclaimerze
- Niezależne scrollowanie kolumn na desktopie —
  formularz i wyniki scrollują się osobno

### Naprawiono
- Zysk realny wychodził na minusie — błąd w logice obliczeniowej.
  Dla obligacji indeksowanych inflacją (EDO/ROS/ROD/COI) inflacja
  jest wbudowana w oprocentowanie (rok 2+ = inflacja + marża).
  Zysk realny = symulacja tylko z marżą (bez inflacji) bo inflacja
  już skompensowana przez indeksację
- CAGR liczony od kapitału startowego zamiast od wkładu własnego —
  dawał absurdalne wartości (41%) przy dużych dopłatach.
  Teraz: podstawa = kapital + doplataLaczna
- Duplikat id="wynik-zysk-po-podatku" w HTML — JS znajdował tylko
  pierwszy element. Drugi zmieniony na id="wynik-obligacje-porownanie"
- Nieaktualne marże obligacji (0.5%) → zaktualizowane do 2026:
  EDO 2.00%, ROS 2.00%, ROD 2.50%, COI 1.50%

### Decyzje techniczne
- Obliczenia miesięczne zamiast rocznych — dokładniejsze,
  lepiej pokazuje siłę procentu składanego
- SVG stroke-based zamiast emoji — identyczny wygląd na każdej
  przeglądarce i systemie, podświadomie spokojniejszy odbiór
- var zamiast const/let — unika konfliktów w plikach przeglądarkowych

### Stan projektu po sesji
```
ETFkalkulator/
├── index.html                        ✅ ikony SVG
├── css/
│   ├── reset.css                     ✅
│   ├── variables.css                 ✅
│   └── main.css                      ✅
├── js/
│   ├── calculators/
│   │   └── obligacje.js              ✅ obliczenia miesięczne + dopłaty
│   └── utils.js                      ✅
├── pages/
│   └── kalkulator-obligacji.html     ✅ dopłaty, wykres, scroll, SVG
├── php/                              (pusty)
├── assets/img/                       (pusty)
├── PRD.md                            ✅
├── PRD.docx                          ✅
├── .windsurfrules                    ✅
└── CHANGELOG.md                      ✅
```

---

## [2025-02] — Sesja 2: Moduł 1 — pierwsza wersja

### Dodano
- `js/calculators/obligacje.js` — logika finansowa
- `pages/kalkulator-obligacji.html` — pełna strona kalkulatora

### Naprawiono
- Konflikt zaokraglij między utils.js a obligacje.js
- const → var (Temporal Dead Zone)
- Marże obligacji zaktualizowane do 2026

---

## [2025-02] — Sesja 1: Fundament projektu

### Dodano
- PRD.md + PRD.docx, .windsurfrules, CHANGELOG.md
- css/reset.css, css/variables.css, css/main.css
- js/utils.js
- index.html — strona główna

### Decyzje
- Design: ciepła biel + zieleń, DM Sans, filozofia Apple, złoty podział
- Stack: Vanilla HTML/CSS/JS + PHP

---

## Jak wypełniać ten plik

Po każdej sesji dodaj wpis na górze:
```
## [RRRR-MM-DD] — krótki opis sesji
### Dodano / Zmieniono / Naprawiono / Decyzje
```

---
*ETFkalkulator.pl — CHANGELOG v1.3*
