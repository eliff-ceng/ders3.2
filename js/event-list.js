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
