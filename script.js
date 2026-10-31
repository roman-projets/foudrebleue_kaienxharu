const quotes = {
  kaien: "« Je pensais le protéger du monde. Je n'avais pas compris qu'il me protégeait de moi-même. »",
  haru: "« Kaien parle peu de ce qu'il ressent. Alors j'ai appris à écouter tout ce qu'il ne dit pas. »",
};

const chapters = {
  pluie: {
    eyebrow: "Chapitre I · Pluie · 00:47",
    title: "Le parapluie oublié",
    text: "La pluie effaçait les contours de la ville. Haru attendait sous un auvent trop étroit quand une main lui tendit un parapluie noir. Kaien ne demanda pas son nom. Il dit seulement : « Tu trembles. Prends-le. » Le lendemain, Haru revint au même endroit. Pas seulement pour rendre le parapluie.",
    signature: "Le hasard frappe rarement deux fois au même endroit",
  },
  toit: {
    eyebrow: "Chapitre II · Vent · 19:12",
    title: "Au bord du ciel",
    text: "Sur le toit, la ville semblait enfin silencieuse. Haru s'assit près de Kaien, sans envahir l'espace qu'il gardait entre eux. Leurs épaules se frôlèrent pourtant. Kaien ne bougea pas. Pour lui, c'était déjà une confession.",
    signature: "Six centimètres, et aucun endroit où se cacher",
  },
  aube: {
    eyebrow: "Chapitre III · Silence · 05:03",
    title: "Avant que le jour se lève",
    text: "L'aube posa une lumière pâle sur le visage de Haru. Kaien chercha une phrase assez solide pour retenir cet instant. Il ne trouva que trois mots, fragiles et sincères : « Reste avec moi. » Haru glissa sa main dans la sienne. La réponse était là.",
    signature: "Certaines promesses n'ont pas besoin de voix",
  },
  "derniere-rame": {
    eyebrow: "Chapitre IV · Tokyo · 23:58",
    title: "La dernière rame",
    text: "Les portes du métro allaient se refermer lorsque Haru aperçut Kaien sur le quai opposé. Ils avaient passé la journée à s'éviter après une dispute idiote. Kaien leva la main, hésita, puis désigna la rame qui attendait encore. Haru courut. Quand les portes se fermèrent derrière eux, aucun des deux ne parla. Leurs épaules se touchèrent, et cette fois, aucun ne s'écarta.",
    signature: "Parfois, revenir est déjà une déclaration",
  },
  etoiles: {
    eyebrow: "Chapitre V · Nuit · 21:36",
    title: "La promesse sous les étoiles",
    text: "Sur le toit, la ville brillait comme une mer lointaine. Haru demanda à Kaien s'il avait peur de perdre les gens auxquels il tenait. Kaien répondit par un silence, puis retira sa veste pour la poser sur les épaules de Haru. « Je ne sais pas toujours comment te le montrer », murmura-t-il. Haru entrelaça leurs doigts. « Alors reste. On apprendra ensemble. »",
    signature: "Les promesses les plus fortes se font à voix basse",
  },
  matin: {
    eyebrow: "Chapitre VI · Aube · 06:14",
    title: "Le matin où tu es resté",
    text: "La lumière du matin traversait les rideaux. Haru se réveilla le premier et découvrit Kaien endormi dans le fauteuil, toujours là malgré la nuit difficile. Il posa doucement une couverture sur lui. Kaien ouvrit les yeux et attrapa sa main, encore à moitié endormi. « Tu peux rester », souffla Haru. Pour une fois, Kaien n'eut pas besoin de prétendre qu'il avait une autre destination.",
    signature: "Le foyer peut être une personne",
  },
};

const quoteButtons = document.querySelectorAll("[data-pov]");
const quote = document.querySelector("#pov-quote");

quoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quoteButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    quote.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 450, easing: "ease" });
    quote.textContent = quotes[button.dataset.pov];
  });
});

let distance = 12;
const closerButton = document.querySelector("#closer-button");
const bondValue = document.querySelector("#bond-value");
const bondFill = document.querySelector(".bond-line span");
const bondDot = document.querySelector(".bond-line i");

closerButton.addEventListener("click", () => {
  distance = Math.max(0, distance - 3);
  const progress = 18 + ((12 - distance) / 12) * 82;
  bondValue.textContent = distance === 0 ? "Enfin côte à côte" : `${distance} pas`;
  bondFill.style.height = `${progress}%`;
  bondDot.style.bottom = `calc(${progress}% - 4px)`;
  if (window.matchMedia("(max-width: 900px)").matches) {
    bondFill.style.width = `${progress}%`;
    bondFill.style.height = "1px";
    bondDot.style.left = `calc(${progress}% - 4px)`;
    bondDot.style.bottom = "-4px";
  }
  if (distance === 0) {
    closerButton.textContent = "Ils se sont trouvés";
    closerButton.disabled = true;
  }
});

const dialog = document.querySelector("#chapter-dialog");
document.querySelectorAll("[data-chapter]").forEach((button) => {
  button.addEventListener("click", () => {
    const chapter = chapters[button.dataset.chapter];
    document.querySelector("#dialog-eyebrow").textContent = chapter.eyebrow;
    document.querySelector("#dialog-title").textContent = chapter.title;
    document.querySelector("#dialog-text").textContent = chapter.text;
    document.querySelector("#dialog-signature").textContent = chapter.signature;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(element);
});

const soundToggle = document.querySelector(".sound-toggle");
soundToggle.addEventListener("click", () => {
  const enabled = soundToggle.getAttribute("aria-pressed") === "true";
  soundToggle.setAttribute("aria-pressed", String(!enabled));
});


/* Lecture des scènes : une seule vidéo peut jouer à la fois. */
const sceneVideos = document.querySelectorAll(".video-frame video");
sceneVideos.forEach((video) => {
  video.addEventListener("play", () => {
    sceneVideos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) otherVideo.pause();
    });
  });
});
