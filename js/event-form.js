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
