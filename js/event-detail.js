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
