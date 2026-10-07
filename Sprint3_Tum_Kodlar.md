# Sprint 3 — Tüm Kodlar — Elif Nur Özek
Öğrenci: **2416501075-Elif Nur Özek-2026**
Tema: öğrenci numarasının son iki hanesi **75** kullanılarak `75°` HSL renk tonu üzerinden revize edilmiştir.

## `index.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kampüs Etkinlikleri</title>
  <link rel="stylesheet" href="css/2416501075.css">
  <script type="module" src="js/event-list.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="header-icerik">
      <h1>Kampüs Etkinlikleri</h1>
      <nav class="site-nav" aria-label="Ana menü">
        <a href="index.html" aria-current="page">Ana Sayfa</a>
        <a href="etkinlikler.html">Etkinlikler</a>
        <a href="etkinlik-ekle.html">Ekle</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="intro">
      <h2>Yaklaşan Etkinlikler</h2>
      <p>Tarihi en yakın iki kampüs etkinliğini aşağıda görebilirsiniz.</p>
    </section>

    <section id="etkinlik-listesi" class="etkinlik-listesi" data-limit="2"></section>
  </main>

  <footer class="site-footer">
    <div class="footer-icerik">2416501075-Elif Nur Özek-2026</div>
  </footer>
</body>
</html>
```

## `etkinlikler.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tüm Etkinlikler | Kampüs Etkinlikleri</title>
  <link rel="stylesheet" href="css/2416501075.css">
  <script type="module" src="js/event-list.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="header-icerik">
      <h1>Tüm Etkinlikler</h1>
      <nav class="site-nav" aria-label="Ana menü">
        <a href="index.html">Ana Sayfa</a>
        <a href="etkinlikler.html" aria-current="page">Etkinlikler</a>
        <a href="etkinlik-ekle.html">Ekle</a>
      </nav>
    </div>
  </header>

  <main>
    <form id="filtre-formu" class="filtre">
      <div class="alan-grubu">
        <label for="arama">Etkinlik ara</label>
        <input type="search" id="arama" placeholder="atölye, kariyer, yapay...">
      </div>

      <div class="alan-grubu">
        <label for="kategori-filtre">Kategori</label>
        <select id="kategori-filtre">
          <option value="">Tümü</option>
        </select>
      </div>
    </form>

    <p id="sonuc" role="status" aria-live="polite"></p>

    <section id="etkinlik-listesi" class="etkinlik-listesi"></section>
  </main>

  <footer class="site-footer">
    <div class="footer-icerik">2416501075-Elif Nur Özek-2026</div>
  </footer>
</body>
</html>
```

## `etkinlik-detay.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Etkinlik Detayı | Kampüs Etkinlikleri</title>
  <link rel="stylesheet" href="css/2416501075.css">
  <script type="module" src="js/event-detail.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="header-icerik">
      <h1>Etkinlik Detayı</h1>
      <nav class="site-nav" aria-label="Ana menü">
        <a href="index.html">Ana Sayfa</a>
        <a href="etkinlikler.html">Etkinlikler</a>
        <a href="etkinlik-ekle.html">Ekle</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="detay"></section>
  </main>

  <footer class="site-footer">
    <div class="footer-icerik">2416501075-Elif Nur Özek-2026</div>
  </footer>
</body>
</html>
```

## `etkinlik-ekle.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Etkinlik Ekle | Kampüs Etkinlikleri</title>
  <link rel="stylesheet" href="css/2416501075.css">
  <script type="module" src="js/event-form.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="header-icerik">
      <h1>Etkinlik Ekle</h1>
      <nav class="site-nav" aria-label="Ana menü">
        <a href="index.html">Ana Sayfa</a>
        <a href="etkinlikler.html">Etkinlikler</a>
        <a href="etkinlik-ekle.html" aria-current="page">Ekle</a>
      </nav>
    </div>
  </header>

  <main>
    <p>Yeni etkinlik bilgilerini girin. Bu sprintte veri kalıcı olarak kaydedilmez.</p>

    <form id="etkinlik-formu" class="form-karti" novalidate>
      <div class="form-alan">
        <label for="ad">Etkinlik adı *</label>
        <input type="text" id="ad" name="ad">
        <span id="ad-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="kategori">Kategori *</label>
        <select id="kategori" name="kategori">
          <option value="">Seçiniz</option>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Buluşma">Buluşma</option>
        </select>
        <span id="kategori-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="tarih">Tarih *</label>
        <input type="date" id="tarih" name="tarih">
        <span id="tarih-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="saat">Saat *</label>
        <input type="time" id="saat" name="saat">
        <span id="saat-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="yer">Yer *</label>
        <input type="text" id="yer" name="yer">
        <span id="yer-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="kontenjan">Kontenjan</label>
        <input type="number" id="kontenjan" name="kontenjan" min="1" max="1000">
        <span id="kontenjan-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="aciklama">Açıklama</label>
        <textarea id="aciklama" name="aciklama" rows="5"></textarea>
      </div>

      <button class="buton" type="submit">Kaydet</button>
    </form>

    <div id="form-mesaj" class="form-mesaj" aria-live="polite"></div>
  </main>

  <footer class="site-footer">
    <div class="footer-icerik">2416501075-Elif Nur Özek-2026</div>
  </footer>
</body>
</html>
```

## `etkinlik-guncelle.html`

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Etkinlik Güncelle | Kampüs Etkinlikleri</title>
  <link rel="stylesheet" href="css/2416501075.css">
  <script type="module" src="js/event-form.js"></script>
</head>
<body>
  <header class="site-header">
    <div class="header-icerik">
      <h1>Etkinlik Güncelle</h1>
      <nav class="site-nav" aria-label="Ana menü">
        <a href="index.html">Ana Sayfa</a>
        <a href="etkinlikler.html">Etkinlikler</a>
        <a href="etkinlik-ekle.html">Ekle</a>
      </nav>
    </div>
  </header>

  <main>
    <p>Etkinlik bilgilerini düzenleyin. Bu sprintte veri kalıcı olarak kaydedilmez.</p>

    <form id="etkinlik-formu" class="form-karti" data-mode="guncelle" novalidate>
      <div class="form-alan">
        <label for="ad">Etkinlik adı *</label>
        <input type="text" id="ad" name="ad">
        <span id="ad-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="kategori">Kategori *</label>
        <select id="kategori" name="kategori">
          <option value="">Seçiniz</option>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Buluşma">Buluşma</option>
        </select>
        <span id="kategori-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="tarih">Tarih *</label>
        <input type="date" id="tarih" name="tarih">
        <span id="tarih-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="saat">Saat *</label>
        <input type="time" id="saat" name="saat">
        <span id="saat-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="yer">Yer *</label>
        <input type="text" id="yer" name="yer">
        <span id="yer-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="kontenjan">Kontenjan</label>
        <input type="number" id="kontenjan" name="kontenjan" min="1" max="1000">
        <span id="kontenjan-hata" class="hata-metni"></span>
      </div>

      <div class="form-alan">
        <label for="aciklama">Açıklama</label>
        <textarea id="aciklama" name="aciklama" rows="5"></textarea>
      </div>

      <button class="buton" type="submit">Güncelle</button>
    </form>

    <div id="form-mesaj" class="form-mesaj" aria-live="polite"></div>
  </main>

  <footer class="site-footer">
    <div class="footer-icerik">2416501075-Elif Nur Özek-2026</div>
  </footer>
</body>
</html>
```

## `css/2416501075.css`

```css
:root {
  /* 2416501075 -> son iki hane 75, ana renk tonu 75° olarak türetildi. */
  --ogrenci-hue: 75;
  --ana-renk: hsl(var(--ogrenci-hue) 65% 38%);
  --ana-koyu: hsl(var(--ogrenci-hue) 70% 25%);
  --zemin: hsl(var(--ogrenci-hue) 35% 96%);
  --kart: #ffffff;
  --metin: hsl(var(--ogrenci-hue) 30% 16%);
  --soluk: hsl(var(--ogrenci-hue) 15% 40%);
  --kenar: hsl(var(--ogrenci-hue) 25% 84%);
  --hata: #b42318;
  --hata-zemin: #fff1f0;
  --basari: #16794b;
  --basari-zemin: #effaf3;
  --golge: 0 8px 20px hsl(var(--ogrenci-hue) 35% 25% / 0.08);
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--metin);
  background: var(--zemin);
  line-height: 1.55;
}

.site-header {
  background: var(--ana-renk);
  color: #fff;
  padding: 1.4rem 1rem 1rem;
}

.header-icerik,
main,
.footer-icerik {
  width: min(1100px, calc(100% - 2rem));
  margin-inline: auto;
}

.site-header h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.site-nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.45rem 0.75rem;
  border-radius: 0.4rem;
}

.site-nav a:hover,
.site-nav a[aria-current="page"] {
  background: #fff;
  color: var(--ana-koyu);
}

main {
  padding: 2rem 0 3rem;
}

.intro {
  margin-bottom: 1.5rem;
}

.intro h2,
.sayfa-baslik {
  margin-top: 0;
}

.etkinlik-listesi {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.kart,
.kunye-karti,
.form-karti,
.detay-karti,
.filtre {
  background: var(--kart);
  border: 1px solid var(--kenar);
  border-radius: 0.8rem;
  box-shadow: var(--golge);
}

.kart {
  padding: 1.1rem;
  border-top: 4px solid var(--ana-renk);
}

.kart h2 {
  margin: 0 0 0.25rem;
  font-size: 1.2rem;
}

.kategori-etiketi {
  display: inline-block;
  margin: 0 0 0.8rem;
  color: var(--ana-koyu);
  font-weight: 700;
}

.kart-kunye,
.kunye-karti dl {
  margin: 0;
}

.kart-kunye div,
.kunye-karti dl div {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.5rem;
  padding: 0.25rem 0;
}

.kart-kunye dt,
.kunye-karti dt {
  font-weight: 700;
}

.kart-kunye dd,
.kunye-karti dd {
  margin: 0;
}

.buton {
  display: inline-block;
  border: 0;
  border-radius: 0.45rem;
  padding: 0.65rem 0.9rem;
  background: var(--ana-renk);
  color: #fff;
  text-decoration: none;
  font: inherit;
  cursor: pointer;
}

.buton:hover {
  background: var(--ana-koyu);
}

.buton.ikincil {
  background: #fff;
  color: var(--ana-koyu);
  border: 1px solid var(--ana-renk);
}

.filtre {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 0.8rem 1rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
}

.filtre .alan-grubu {
  display: grid;
  gap: 0.35rem;
}

.filtre label,
.form-karti label {
  font-weight: 700;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #aebdb3;
  border-radius: 0.4rem;
  padding: 0.7rem;
  font: inherit;
  background: #fff;
  color: var(--metin);
}

input:focus,
select:focus,
textarea:focus {
  outline: 3px solid hsl(var(--ogrenci-hue) 65% 38% / 0.18);
  border-color: var(--ana-renk);
}

[aria-invalid="true"] {
  border-color: var(--hata);
  background: #fffafa;
}

#sonuc {
  margin: 0.6rem 0 1.2rem;
  color: var(--ana-koyu);
  font-weight: 700;
}

.bos-sonuc {
  grid-column: 1 / -1;
  background: #fff;
  border: 1px dashed var(--kenar);
  padding: 1rem;
  border-radius: 0.6rem;
}

.detay-karti {
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(230px, 0.8fr) minmax(300px, 1.2fr);
  gap: 1.2rem;
}

.afis {
  min-height: 320px;
  background: #10233c;
  border: 4px solid #2f4a68;
  outline: 2px solid #d39b7f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 1.4rem;
}

.afis strong {
  font-size: 1.9rem;
}

.detay-icerik h1 {
  margin-top: 0;
}

.kunye-karti {
  padding: 1rem;
}

.kunye-karti h2,
.aciklama h2 {
  margin-top: 0;
}

.detay-butonlari {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.form-karti {
  padding: 1.2rem;
  max-width: 760px;
}

.form-alan {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.hata-metni {
  min-height: 1.2em;
  color: var(--hata);
  font-size: 0.9rem;
}

.form-mesaj,
.mesaj {
  max-width: 760px;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.6rem;
}

.form-mesaj:empty {
  display: none;
}

.form-mesaj.hata,
.hata-kutusu {
  background: var(--hata-zemin);
  color: #7a1c14;
  border: 1px solid #e08f87;
}

.form-mesaj.basari {
  background: var(--basari-zemin);
  color: #0b5f38;
  border: 1px solid #84c7a1;
}

.form-mesaj pre {
  overflow-x: auto;
  margin-bottom: 0;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 0.4rem;
}

.site-footer {
  border-top: 1px solid var(--kenar);
  padding: 1.5rem 0;
  color: var(--soluk);
  text-align: center;
}

@media (max-width: 850px) {
  .etkinlik-listesi {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .detay-karti {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .header-icerik,
  main,
  .footer-icerik {
    width: min(100% - 1rem, 1100px);
  }

  .etkinlik-listesi,
  .filtre {
    grid-template-columns: 1fr;
  }

  .site-nav {
    gap: 0.3rem;
  }

  .site-nav a {
    padding: 0.4rem 0.55rem;
    font-size: 0.95rem;
  }

  .detay-karti {
    padding: 0.7rem;
  }

  .afis {
    min-height: 250px;
  }
}
```

## `js/data.js`

```javascript
export const events = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    date: "12-10-2026",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Mezunlarla kariyer yolculukları ve sektör deneyimleri üzerine söyleşiler.",
    capacity: 120,
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    date: "15-10-2026",
    time: "10:00",
    location: "Mühendislik Fakültesi Lab-2",
    description: "Temel sensörler, motor kontrolü ve küçük bir robot uygulaması yapılacak.",
    capacity: 30,
  },
  {
    id: "event-3",
    title: "Siber Güvenlik Söyleşisi",
    category: "Seminer",
    date: "21-10-2026",
    time: "13:30",
    location: "B Blok Amfi 1",
    description: "Saldırı yüzeyleri, güvenli yazılım geliştirme ve güncel siber tehditler konuşulacak.",
    capacity: 90,
  },
  {
    id: "event-4",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    date: "25-10-2026",
    time: "15:00",
    location: "Bilgisayar Laboratuvarı 3",
    description: "HTML, CSS ve responsive tasarım ile küçük bir arayüz geliştirilecek.",
    capacity: 35,
  },
  {
    id: "event-5",
    title: "Yapay Zeka Semineri",
    category: "Seminer",
    date: "02-11-2026",
    time: "11:00",
    location: "A Blok Konferans Salonu",
    description: "Yapay zekanın eğitimde, yazılımda ve günlük hayatta kullanım alanları ele alınacak.",
    capacity: 150,
  },
  {
    id: "event-6",
    title: "Girişimcilik ve Proje Buluşması",
    category: "Buluşma",
    date: "08-11-2026",
    time: "16:00",
    location: "Teknokent Toplantı Salonu",
    description: "Öğrenci projeleri, ekip kurma ve girişim fikrini geliştirme üzerine networking etkinliği.",
    capacity: 80,
  },
];
```

## `js/event-list.js`

```javascript
import { events } from "./data.js";

const list = document.querySelector("#etkinlik-listesi");

function formatDate(dateText) {
  const [day, month, year] = dateText.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function sortableDate(dateText) {
  const [day, month, year] = dateText.split("-");
  return `${year}-${month}-${day}`;
}

function createCard(event) {
  return `
    <article class="kart">
      <h2>${event.title}</h2>
      <p class="kategori-etiketi">${event.category}</p>
      <dl class="kart-kunye">
        <div>
          <dt>Tarih</dt>
          <dd>${formatDate(event.date)}</dd>
        </div>
        <div>
          <dt>Saat</dt>
          <dd>${event.time}</dd>
        </div>
        <div>
          <dt>Yer</dt>
          <dd>${event.location}</dd>
        </div>
        <div>
          <dt>Kontenjan</dt>
          <dd>${event.capacity}</dd>
        </div>
      </dl>
      <p>${event.description}</p>
      <a class="buton" href="etkinlik-detay.html?id=${event.id}">Detayları gör</a>
    </article>
  `;
}

function render(items) {
  if (!list) return;

  if (items.length === 0) {
    list.innerHTML = `
      <p class="bos-sonuc" role="status">
        Aramanıza uygun etkinlik bulunamadı.
      </p>
    `;
    return;
  }

  list.innerHTML = items.map(createCard).join("");
}

if (list) {
  if (list.dataset.limit) {
    const yaklasan = [...events]
      .sort((a, b) => sortableDate(a.date).localeCompare(sortableDate(b.date)))
      .slice(0, Number(list.dataset.limit));

    render(yaklasan);
  } else {
    render(events);
  }
}

const filtreFormu = document.querySelector("#filtre-formu");
const arama = document.querySelector("#arama");
const kategoriFiltre = document.querySelector("#kategori-filtre");
const sonucSatiri = document.querySelector("#sonuc");

if (filtreFormu && arama && kategoriFiltre && sonucSatiri) {
  const kategoriler = [...new Set(events.map((event) => event.category))]
    .sort((a, b) => a.localeCompare(b, "tr-TR"));

  kategoriFiltre.insertAdjacentHTML(
    "beforeend",
    kategoriler
      .map((kategori) => `<option value="${kategori}">${kategori}</option>`)
      .join("")
  );

  function filtrele() {
    const aranan = arama.value.trim().toLocaleLowerCase("tr-TR");
    const secilenKategori = kategoriFiltre.value;

    const sonuc = events.filter((event) => {
      const aranacakMetin = [
        event.title,
        event.category,
        event.location,
        event.description,
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      const metinUyuyor = aranacakMetin.includes(aranan);
      const kategoriUyuyor =
        secilenKategori === "" || event.category === secilenKategori;

      return metinUyuyor && kategoriUyuyor;
    });

    render(sonuc);

    sonucSatiri.textContent =
      sonuc.length === 0
        ? "Aramanıza uygun etkinlik bulunamadı."
        : `${sonuc.length} etkinlik listeleniyor.`;
  }

  filtreFormu.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  arama.addEventListener("input", filtrele);
  kategoriFiltre.addEventListener("change", filtrele);

  sonucSatiri.textContent = `${events.length} etkinlik listeleniyor.`;
}
```

## `js/event-detail.js`

```javascript
import { events } from "./data.js";

const container = document.querySelector("#detay");
const id = new URLSearchParams(window.location.search).get("id");
const event = events.find((item) => item.id === id);

function formatDate(dateText) {
  const [day, month, year] = dateText.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

if (container) {
  if (!event) {
    document.title = "Etkinlik bulunamadı | Kampüs Etkinlikleri";

    container.innerHTML = `
      <section class="mesaj hata-kutusu" role="alert">
        <h1>Etkinlik bulunamadı</h1>
        <p>Geçersiz veya eksik bir etkinlik kimliği kullanıldı.</p>
        <a class="buton" href="etkinlikler.html">Listeye dön</a>
      </section>
    `;
  } else {
    document.title = `${event.title} | Kampüs Etkinlikleri`;

    container.innerHTML = `
      <article class="detay-karti">
        <div class="afis" aria-label="${event.title} afiş alanı">
          <span>${event.category}</span>
          <strong>${event.title}</strong>
          <small>${formatDate(event.date)} · ${event.time}</small>
        </div>

        <div class="detay-icerik">
          <h1>${event.title}</h1>

          <section class="kunye-karti" aria-labelledby="kunye-baslik">
            <h2 id="kunye-baslik">Etkinlik Künyesi</h2>
            <dl>
              <div><dt>Tarih</dt><dd>${formatDate(event.date)}</dd></div>
              <div><dt>Saat</dt><dd>${event.time}</dd></div>
              <div><dt>Yer</dt><dd>${event.location}</dd></div>
              <div><dt>Kategori</dt><dd>${event.category}</dd></div>
              <div><dt>Kontenjan</dt><dd>${event.capacity}</dd></div>
            </dl>
          </section>

          <section class="aciklama">
            <h2>Açıklama</h2>
            <p>${event.description}</p>
          </section>

          <div class="detay-butonlari">
            <a class="buton" href="etkinlikler.html">Listeye dön</a>
            <a class="buton ikincil" href="etkinlik-guncelle.html?id=${event.id}">
              Bu etkinliği güncelle
            </a>
          </div>
        </div>
      </article>
    `;
  }
}
```

## `js/event-form.js`

```javascript
import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");
const mesaj = document.querySelector("#form-mesaj");

function toInputDate(dateText) {
  const [day, month, year] = dateText.split("-");
  return `${year}-${month}-${day}`;
}

function fromInputDate(dateText) {
  if (!dateText) return "";
  const [year, month, day] = dateText.split("-");
  return `${day}-${month}-${year}`;
}

function clearFieldError(name) {
  const field = form?.elements[name];
  const errorElement = document.querySelector(`#${name}-hata`);

  if (field) field.removeAttribute("aria-invalid");
  if (errorElement) errorElement.textContent = "";
}

function setFieldError(name, messageText) {
  const field = form?.elements[name];
  const errorElement = document.querySelector(`#${name}-hata`);

  if (field) field.setAttribute("aria-invalid", "true");
  if (errorElement) errorElement.textContent = messageText;
}

function showMessage(type, text, data = null) {
  if (!mesaj) return;

  mesaj.className = `form-mesaj ${type}`;
  mesaj.innerHTML = "";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  mesaj.appendChild(paragraph);

  if (data) {
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    mesaj.appendChild(pre);
  }
}

if (form) {
  const mode = form.dataset.mode === "guncelle" ? "guncelle" : "ekle";
  const id = new URLSearchParams(window.location.search).get("id");
  const existingEvent = events.find((event) => event.id === id);

  if (mode === "guncelle") {
    if (!existingEvent) {
      const warning = document.createElement("section");
      warning.className = "mesaj hata-kutusu";
      warning.setAttribute("role", "alert");
      warning.innerHTML = `
        <h2>Güncellenecek etkinlik bulunamadı</h2>
        <p>Bu sayfayı geçerli bir etkinliğin detayındaki güncelleme bağlantısından açmalısınız.</p>
        <a class="buton" href="etkinlikler.html">Etkinliklere git</a>
      `;

      form.replaceWith(warning);
      if (mesaj) mesaj.remove();
    } else {
      form.elements.ad.value = existingEvent.title;
      form.elements.kategori.value = existingEvent.category;
      form.elements.tarih.value = toInputDate(existingEvent.date);
      form.elements.saat.value = existingEvent.time;
      form.elements.yer.value = existingEvent.location;
      form.elements.kontenjan.value = existingEvent.capacity;
      form.elements.aciklama.value = existingEvent.description;
    }
  }

  if (mode !== "guncelle" || existingEvent) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const data = {
        id: mode === "guncelle" ? existingEvent.id : `event-${events.length + 1}`,
        title: String(fd.get("ad") ?? "").trim(),
        category: String(fd.get("kategori") ?? ""),
        date: fromInputDate(String(fd.get("tarih") ?? "")),
        time: String(fd.get("saat") ?? ""),
        location: String(fd.get("yer") ?? "").trim(),
        description: String(fd.get("aciklama") ?? "").trim(),
        capacity:
          String(fd.get("kontenjan") ?? "").trim() === ""
            ? null
            : Number(fd.get("kontenjan")),
      };

      const errors = {};

      if (data.title.length < 3) {
        errors.ad = "En az 3 karakter olmalı.";
      }

      if (!data.category) {
        errors.kategori = "Bir kategori seçmelisiniz.";
      }

      if (!data.date) {
        errors.tarih = "Tarih boş bırakılamaz.";
      }

      if (!data.time) {
        errors.saat = "Saat boş bırakılamaz.";
      }

      if (!data.location) {
        errors.yer = "Yer boş bırakılamaz.";
      }

      if (
        data.capacity !== null &&
        (!Number.isInteger(data.capacity) || data.capacity < 1 || data.capacity > 1000)
      ) {
        errors.kontenjan = "Kontenjan 1 ile 1000 arasında olmalı.";
      }

      ["ad", "kategori", "tarih", "saat", "yer", "kontenjan"].forEach(
        clearFieldError
      );

      Object.entries(errors).forEach(([name, messageText]) => {
        setFieldError(name, messageText);
      });

      if (Object.keys(errors).length > 0) {
        showMessage("hata", "Formda hatalı alanlar var. Lütfen işaretli alanları düzeltin.");
        return;
      }

      const successText =
        mode === "guncelle"
          ? "Etkinlik başarıyla güncellendi. (Bu sprintte kalıcı kayıt yapılmaz.)"
          : "Etkinlik başarıyla oluşturuldu. (Bu sprintte kalıcı kayıt yapılmaz.)";

      showMessage("basari", successText, data);
      console.log(data);
    });

    ["ad", "kategori", "tarih", "saat", "yer", "kontenjan"].forEach((name) => {
      const field = form.elements[name];
      if (!field) return;

      const eventName = field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, () => clearFieldError(name));
    });
  }
}
```

## `README.md`

```markdown
Canlı site: BURAYA-VERCEL-LINKINI-YAZ

# Sprint 3 — JavaScript ve DOM

Bu klasör Sprint 3 görevlerini içerir.

## Çalıştırma
VS Code içinde Live Server ile `index.html` dosyasını açın. ES module kullanıldığı için dosyaları `file://` ile doğrudan açmayın.

## Dosyalar
- `js/data.js`: 6 etkinliklik veri dizisi
- `js/event-list.js`: kart üretme, ana sayfada ilk 2 etkinlik, arama ve kategori filtresi
- `js/event-detail.js`: `?id=` ile detay sayfası
- `js/event-form.js`: ekleme/güncelleme formu, doğrulama ve mesajlar
- `css/2416501075.css`: responsive görünüm

## Test URL'leri
- `etkinlik-detay.html?id=event-3`
- `etkinlik-detay.html?id=event-99`
- `etkinlik-guncelle.html?id=event-4`
- `etkinlik-guncelle.html`

## Teslim komutları
```bash
git add .
git commit -m "Sprint3 yapıldı"
git tag sprint-03
git push
git push --tags
```
```
