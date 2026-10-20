const FILLER_TEXT = "Filler text. Replace this with a short description of this location.";
 
const markers = [
  // ---------- College (23) ----------
  // Example of a fully edited marker: change title / text here for each popup.
  { id: "college-01", type: "college", x: 27.1, y: 23.1,
    title: "Bianca + Abby",
    text: "We met in our first year of Parsons in our first class." },
  { id: "college-02", type: "college", x: 26.0, y: 38.9,
    title: "Nati + Abby",
    text: "We met in our first year of Parsons through a friend." },
  { id: "college-03", type: "college", x: 29.2, y: 59.3,
    title: "Omar + Abby",
    text: "Omar is my friend and also happens to be my doorman." },
  { id: "college-04", type: "college", x: 33.3, y: 13.9,
    title: "Hwajung + Taylor",
    text: "We had our first class together at Parsons." },
  { id: "college-05", type: "college", x: 31.3, y: 29.6,
    title: "Amulya + Abby",
    text: "We had the same typography 1 class." },
  { id: "college-06", type: "college", x: 36.5, y: 48.1,
    title: "Bella + Abby",
    text: "We met because they were Hwajung's roomate." },
  { id: "college-07", type: "college", x: 44.3, y: 50.9, 
    title: "Kelise + Abby",
    text: "We met through Evelynn!" },
  { id: "college-08", type: "college", x: 57.3, y: 13.9, 
        title: "George + Abby",
    text: "He is my boss!." },
  { id: "college-09", type: "college", x: 41.7, y: 9.3, 
      title: "Daisy + Abby",
    text: "We met because we are co-workers!." },
  { id: "college-10", type: "college", x: 36.5, y: 24.1,
        title: "Emily + Abby",
    text: "We me through our friend Cayla." },
  { id: "college-11", type: "college", x: 36.5, y: 64.8, 
        title: "Fia + Abby",
    text: "We became friends through work." },
  { id: "college-12", type: "college", x: 41.7, y: 78.7,
    title: "Evelynn + Abby",
    text: "We had the same Typography 1 class together." },

  { id: "college-13", type: "college", x: 54.7, y: 81.5,
        title: "Kevin + Abby",
    text: "We are co-workers and like playing chess." },
  { id: "college-14", type: "college", x: 52.1, y: 60.2,
        title: "Maddie + Abby",
    text: "We met because of work. I helped her apply!" },
  { id: "college-15", type: "college", x: 72.9, y: 60.2,
        title: "Mayunk + Abby",
    text: "We met at The New School prom but at an after party." },
  { id: "college-16", type: "college", x: 83.3, y: 64.8,
        title: "Mohany + Abby",
    text: "We met at one of Mayunk's parties." },
  { id: "college-17", type: "college", x: 80.7, y: 41.7,
        title: "Nat + Abby",
    text: "We had the same Studio 2 in freshman year." },
  { id: "college-18", type: "college", x: 85.9, y: 30.6,
        title: "Perry + Abby",
    text: "We met at her orientation! She transferred." },
  { id: "college-19", type: "college", x: 75.5, y: 5.6, 
        title: "Raven + Abby",
    text: "She was Bianca's Dorm Roommate." },
  { id: "college-20", type: "college", x: 65.1, y: 32.4,
        title: "Sage + Abby",
    text: "We are both from Tennessee!" },
  { id: "college-21", type: "college", x: 65.1, y: 13.9,
        title: "Serena + Abby",
    text: "We met in German 1." },
  { id: "college-22", type: "college", x: 64.1, y: 44.4,
        title: "Shania + Abby",
    text: "We had the same Time teacher but different sections." },
  { id: "college-23", type: "college", x: 93.8, y: 57.9,
        title: "Shiloh + Abby",
    text: "We play in the same DND campaign." },
 
  // ---------- Family (9) ----------
  { id: "family-01", type: "family", x: 28.1, y: 74.1,
            title: "Baba + Abby",
    text: "She is my grandmother." },
  { id: "family-02", type: "family", x: 52.1, y: 44.4,
            title: "Emma + Isabel",
    text: "Emma is my girlfriend and Isabel is my best friend" },
  { id: "family-03", type: "family", x: 55.2, y: 72.2,
            title: "Dad + Valentyna",
    text: "My Dad and Step mother. She is from Ukraine." },
  { id: "family-04", type: "family", x: 78.1, y: 69.4,
            title: "Mom + Aliyah",
    text: "My mom and my niece" },
  { id: "family-05", type: "family", x: 80.7, y: 76.9,
            title: "Zack + Janie",
    text: "My brother and his girlfriend." },
  { id: "family-06", type: "family", x: 83.3, y: 13.9,
            title: "Mary + Andre",
    text: "My sister and her boyfriend." },
  { id: "family-07", type: "family", x: 85.9, y: 5.6,
          title: "Divi + Ren",
    text: "Ren is my online friend and Divi is her sister." },
  { id: "family-08", type: "family", x: 95.3, y: 37.0,
            title: "Emma + Nicole",
    text: "My girlfriend and her sister." },
  { id: "family-09", type: "family", x: 72.9, y: 91.7,
            title: "Emma + Keethri",
    text: "My girlfirend and her Brother in law." },
 
  // ---------- Online (13) ----------
  { id: "online-01", type: "online", x: 27.1, y: 88.9,
            title: "Their Mother + Acid",
    text: "I met Acid in a Podcast Discord server." },
  { id: "online-02", type: "online", x: 57.3, y: 30.6,
            title: "Alaster + Alex",
    text: "I met Alaster at TwitchCon! They roped their brother into this." },
  { id: "online-03", type: "online", x: 39.1, y: 90.7, 
            title: "Civ + John",
    text: "I met Civ because of Twitch streaming!" },
  { id: "online-04", type: "online", x: 52.1, y: 92.6,
            title: "Ozzie + Artie",
    text: "I met Ozzie through a Podcast!" },
  { id: "online-05", type: "online", x: 65.1, y: 83.3,
            title: "Ken + Kati",
    text: "Ken is one of my oldest in age friends but one of my closest." },
  { id: "online-06", type: "online", x: 57.3, y: 46.3,
            title: "Maple + Sarah",
    text: "I met them in 2019 and now they are married." },
  { id: "online-07", type: "online", x: 17.7, y: 35.2,
            title: "Mossy + Luci",
    text: "Kept me sane in Covid" },
  { id: "online-08", type: "online", x: 10.9, y: 53.7,
            title: "Mira + Mr. Park",
    text: "I met mira during Covid. I didn't make a good first impression tho." },
  { id: "online-09", type: "online", x: 18.0, y: 72.2,
            title: "Malcom + Ren",
    text: "I met Ren online and now they are my friend in person." },
  { id: "online-10", type: "online", x: 95.6, y: 13.9,
            title: "Gwyn + Tim",
    text: "They are Married and I met them through streaming!" },
  { id: "online-11", type: "online", x: 91.1, y: 85.2,
            title: "Kordell + Isabel",
    text: "Some of my best friends! we met through a bad friend." },
  { id: "online-12", type: "online", x: 95.3, y: 73.1,
            title: "Maple + Val",
    text: "We play in the same DND campaign." },
];
 
/* Default titles / text / image. Any field set on a marker above wins. */
// Each type looks for its photos in its own folder, named after the marker id
const IMAGE_FOLDER = { college: "colleges", family: "family", online: "online" };
const TYPE_LABEL = { college: "College", family: "Family", online: "Online" };
 
function fillerImage(type) {
  const colour = { college: "#8b3a34", family: "#4474c2", online: "#1f4d30" }[type];
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200">` +
    `<rect width="320" height="200" fill="${colour}" opacity="0.55"/>` +
    `<text x="160" y="108" font-family="sans-serif" font-size="22" fill="#fff" ` +
    `text-anchor="middle">Filler image</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
 
markers.forEach((m, i) => {
  const n = m.id.split("-")[1];
  m.title = m.title || `${TYPE_LABEL[m.type]} location ${parseInt(n, 10)}`;
  m.text = m.text || FILLER_TEXT;
  // College markers look for assets/colleges/<id>.jpg automatically (e.g. college-01.jpg)
  m.image = m.image || `assets/${IMAGE_FOLDER[m.type]}/${m.id}.jpg`;
});
 
/* =====================================================================
   BEHAVIOUR — no need to edit below this line
   ===================================================================== */
const map = document.getElementById("map");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
let activeButton = null;
 
// Build one button per marker, each with its own id
markers.forEach((m) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = m.id;
  btn.className = `marker ${m.type}`;
  btn.style.left = m.x + "%";
  btn.style.top = m.y + "%";
  btn.setAttribute("aria-label", m.title);
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    activeButton === btn ? closePopup() : openPopup(m, btn);
  });
  map.appendChild(btn);
});
 
function openPopup(m, btn) {
  if (activeButton) activeButton.classList.remove("active");
  activeButton = btn;
  btn.classList.add("active");
 
  popupImg.onerror = () => { popupImg.onerror = null; popupImg.src = fillerImage(m.type); };
  popupImg.onerror = () => {
    if (/\.jpg$/.test(popupImg.src)) { popupImg.src = popupImg.src.replace(/\.jpg$/, ".png"); }
    else { popupImg.onerror = null; popupImg.src = fillerImage(m.type); }
  };
  popupImg.style.objectPosition = "center 25%"; // keeps faces in frame when cropping tall photos
  popupImg.src = m.image;
  popupImg.alt = m.title;
  popupTitle.textContent = m.title;
  popupText.textContent = m.text;
  popup.hidden = false;
  positionPopup(btn);
}
 
function closePopup() {
  popup.hidden = true;
  if (activeButton) activeButton.classList.remove("active");
  activeButton = null;
}
 
// Put the popup above the marker, or below it if there isn't room; keep it inside the map
function positionPopup(btn) {
  const mapRect = map.getBoundingClientRect();
  const markerRect = btn.getBoundingClientRect();
  const gap = 10;
  const w = popup.offsetWidth;
  const h = popup.offsetHeight;
 
  const cx = markerRect.left + markerRect.width / 2 - mapRect.left;
  const top = markerRect.top - mapRect.top;
  const bottom = markerRect.bottom - mapRect.top;
 
  let y = top - gap - h;
  if (y < 4) y = bottom + gap;
  let x = cx - w / 2;
  x = Math.max(4, Math.min(x, mapRect.width - w - 4));
  y = Math.max(4, Math.min(y, mapRect.height - h - 4));
 
  popup.style.left = x + "px";
  popup.style.top = y + "px";
}
 
document.getElementById("popup-close").addEventListener("click", closePopup);
popup.addEventListener("click", (e) => e.stopPropagation());
document.addEventListener("click", closePopup);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePopup(); });
window.addEventListener("resize", () => { if (activeButton) positionPopup(activeButton); });