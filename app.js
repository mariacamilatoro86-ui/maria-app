/* ============================================================
   RECETAS DE NAVIDAD — app.js
   ============================================================ */

// ── NIEVE ──────────────────────────────────────────────────
(function createSnow() {
  const container = document.getElementById('snowContainer');
  const flakes = ['❄', '❅', '❆', '✦', '✼'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('span');
    el.classList.add('snowflake');
    el.textContent = flakes[Math.floor(Math.random() * flakes.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (Math.random() * 6 + 5) + 's';
    el.style.animationDelay = (Math.random() * 8) + 's';
    el.style.fontSize = (Math.random() * 0.8 + 0.7) + 'rem';
    el.style.opacity = (Math.random() * 0.4 + 0.4).toString();
    container.appendChild(el);
  }
})();

// ── COUNTDOWN ──────────────────────────────────────────────
function updateCountdown() {
  const now = new Date();
  const year = now.getMonth() >= 11 && now.getDate() > 25 ? now.getFullYear() + 1 : now.getFullYear();
  const xmas = new Date(year, 11, 25);
  const diff = xmas - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(d).padStart(2, '0');
  document.getElementById('hours').textContent   = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ── DATOS DE RECETAS ───────────────────────────────────────
const recipes = {
  pavo: {
    emoji: '🍗',
    name: 'Pavo Relleno Navideño',
    time: ['⏱ Prep: 2 h', '🔥 Cocción: 4-5 h', '👥 Rinde: 12 porciones'],
    ingredients: [
      'Pavo de 6-8 kg, descongelado',
      '3 cucharadas de mantequilla blanda',
      '2 cucharadas de ajo en polvo',
      'Sal, pimienta, paprika al gusto',
      'Para el relleno: 400 g pan de caja, 1 cebolla, 2 tallos apio, caldo de pollo',
      'Hierbas: romero, tomillo, laurel',
    ],
    steps: [
      'Seca el pavo con papel absorbente y retira las vísceras.',
      'Mezcla la mantequilla con ajo, sal, pimienta y paprika. Frota por dentro y por fuera.',
      'Prepara el relleno: sofríe cebolla y apio, mezcla con pan y caldo hasta humedecer.',
      'Rellena la cavidad del pavo sin compactar demasiado.',
      'Ata las patas con hilo de cocina y coloca en charola con rejilla.',
      'Cubre con papel aluminio y hornea a 165 °C — calcula 45 min por cada 2 kg.',
      'Destapa los últimos 45 minutos para dorar la piel.',
      'Deja reposar 20 minutos antes de trinchar.',
    ],
  },
  galletas: {
    emoji: '🍪',
    name: 'Galletas de Jengibre',
    time: ['⏱ Prep: 30 min', '🔥 Cocción: 10 min', '🍪 Rinde: ~30 galletas'],
    ingredients: [
      '3 tazas de harina',
      '1½ cucharadita de jengibre en polvo',
      '1 cucharadita de canela',
      '½ cucharadita de clavo molido',
      '½ taza de mantequilla a temperatura ambiente',
      '¾ taza de azúcar morena',
      '1 huevo',
      '⅓ taza de miel de abeja o melaza',
    ],
    steps: [
      'Mezcla harina, jengibre, canela y clavo en un tazón.',
      'Bate la mantequilla con el azúcar hasta cremar. Agrega el huevo y la miel.',
      'Incorpora los secos poco a poco hasta tener una masa homogénea.',
      'Refrigera la masa envuelta en plástico por 1 hora.',
      'Precalienta el horno a 180 °C.',
      'Extiende la masa a 5 mm de grosor y corta con moldes navideños.',
      'Hornea 8-10 minutos hasta que los bordes estén ligeramente dorados.',
      'Decora con glaseado real una vez frías.',
    ],
  },
  ponche: {
    emoji: '☕',
    name: 'Ponche de Frutas',
    time: ['⏱ Prep: 15 min', '🔥 Cocción: 40 min', '👥 Rinde: 10 tazas'],
    ingredients: [
      '3 litros de agua',
      '10 tejocotes',
      '4 guayabas partidas',
      '1 caña de azúcar en trozos',
      '1 taza de tamarindo pelado',
      '1 taza de ciruela pasa',
      '3 rajas de canela',
      '5 clavos de olor',
      'Piloncillo al gusto (aprox. 200 g)',
    ],
    steps: [
      'Hierve el agua con la canela y los clavos por 10 minutos.',
      'Agrega los tejocotes y la caña; cocina 10 minutos más.',
      'Incorpora las guayabas, ciruelas, tamarindo y piloncillo.',
      'Cocina a fuego medio por 20 minutos.',
      'Agrega las tazas de jamaica seca los últimos 5 minutos si deseas color extra.',
      'Sirve caliente en tazas de barro.',
    ],
  },
  ensalada: {
    emoji: '🍎',
    name: 'Ensalada de Manzana',
    time: ['⏱ Prep: 20 min', '❄️ Reposo: 1 h', '👥 Rinde: 8 porciones'],
    ingredients: [
      '4 manzanas rojas o amarillas, en cubos',
      '1 lata (340 g) de duraznos en almíbar escurridos',
      '1 taza de nueces picadas',
      '1 taza de uvas sin semilla',
      '1 lata de leche condensada',
      '1 taza de crema para batir',
      'Jugo de ½ limón',
    ],
    steps: [
      'Bate la crema hasta obtener picos firmes; mezcla con la leche condensada y el limón.',
      'En un tazón grande mezcla todos los frutos.',
      'Incorpora la crema suavemente con movimientos envolventes.',
      'Refrigera al menos 1 hora antes de servir.',
      'Decora con nueces enteras y hojitas de menta.',
    ],
  },
  rosca: {
    emoji: '🍞',
    name: 'Rosca de Reyes',
    time: ['⏱ Prep: 2.5 h', '🔥 Cocción: 25 min', '👥 Rinde: 16 porciones'],
    ingredients: [
      '500 g de harina de trigo',
      '20 g de levadura fresca',
      '4 huevos',
      '120 g de azúcar',
      '120 g de mantequilla',
      '80 ml de leche tibia',
      '1 cucharadita de sal',
      'Ralladura de naranja y limón',
      'Fruta cristalizada de colores',
      'Muñequito de plástico (sorpresa)',
    ],
    steps: [
      'Disuelve la levadura en la leche tibia con una cucharada de azúcar; espera 10 minutos.',
      'Mezcla harina, azúcar y sal. Agrega la levadura, los huevos y la ralladura.',
      'Amasa 10 minutos; incorpora la mantequilla en trozos hasta que la masa sea lisa.',
      'Deja fermentar tapada en lugar cálido por 1.5 horas.',
      'Da forma de rosca y acomoda la fruta cristalizada.',
      'Fermenta 30 minutos más y barniza con huevo batido.',
      'Hornea a 180 °C por 22-25 minutos hasta dorar.',
    ],
  },
  chocolate: {
    emoji: '🍫',
    name: 'Chocolate Caliente Espeso',
    time: ['⏱ Prep: 5 min', '🔥 Cocción: 10 min', '👥 Rinde: 4 tazas'],
    ingredients: [
      '1 litro de leche entera',
      '200 g de chocolate de mesa (tablilla)',
      '2 cucharadas de cacao en polvo',
      '2 cucharadas de maicena',
      '3 cucharadas de azúcar',
      '1 raja de canela',
      'Pizca de chile en polvo (opcional)',
    ],
    steps: [
      'Calienta la leche con la canela a fuego medio hasta que humee.',
      'Agrega el chocolate troceado y mezcla hasta disolver.',
      'En un poco de leche fría disuelve la maicena y el cacao.',
      'Incorpora la mezcla de maicena al chocolate caliente sin dejar de mover.',
      'Agrega el azúcar y el chile si usas; cocina hasta espesar.',
      'Sirve en tazas y espolvorea cacao por encima.',
    ],
  },
};

// ── MODAL RECETAS ──────────────────────────────────────────
function openRecipe(key) {
  const r = recipes[key];
  if (!r) return;
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <h2>${r.emoji} ${r.name}</h2>
    <div class="time-info">
      ${r.time.map(t => `<span class="time-badge">${t}</span>`).join('')}
    </div>
    <div class="ingredients">
      <h4>🛒 Ingredientes</h4>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="steps">
      <h4>👨‍🍳 Preparación</h4>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRecipe() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeRecipe();
});

// ── BASE DE CONOCIMIENTO FAQ ────────────────────────────────
const faqs = [
  {
    keys: ['cuánto', 'tiempo', 'tarda', 'pavo', 'horas', 'coccion', 'cocción'],
    answer: '🍗 El tiempo de cocción del pavo depende de su peso. La regla es: <strong>45 minutos por cada 2 kg</strong> a 165 °C. Un pavo de 6 kg tardará aproximadamente 3 horas. ¡No olvides taparlo con aluminio las primeras horas para que no se reseque!'
  },
  {
    keys: ['temperatura', 'horno', 'grados', 'pavo'],
    answer: '🌡️ El pavo debe hornearse a <strong>165 °C (325 °F)</strong>. Está listo cuando el termómetro insertado en el muslo (sin tocar hueso) marque 75 °C. ¡Ese es el secreto para que quede perfectamente jugoso!'
  },
  {
    keys: ['galletas', 'jengibre', 'cómo', 'hacer', 'receta'],
    answer: '🍪 Las galletas de jengibre son facilísimas. Necesitas harina, jengibre, canela, clavo, mantequilla, azúcar morena, huevo y miel. Se mezclan, se refrigera la masa 1 hora, se cortan con moldes navideños y se hornean 8-10 min a 180 °C. ¡Haz clic en "Ver receta" para todos los detalles!'
  },
  {
    keys: ['ponche', 'lleva', 'ingredientes', 'qué', 'frutas'],
    answer: '☕ El ponche tradicional lleva: <strong>tejocotes, guayabas, caña de azúcar, tamarindo, ciruela pasa, clavos, canela y piloncillo</strong>. Se hierve todo junto por 40 minutos. Puedes agregar jamaica para darle más color. ¡Servido caliente en taza de barro es insuperable!'
  },
  {
    keys: ['rosca', 'sin horno', 'sin', 'comal', 'estufa'],
    answer: '🍞 Sí, puedes hacer una rosca sin horno usando una olla de aluminio gruesa o una vaporera: precalienta la olla vacía 10 min, coloca la rosca sobre papel encerado dentro, tapa bien y cocina a fuego medio-bajo por 30-35 min. El resultado es sorprendentemente bueno.'
  },
  {
    keys: ['conservar', 'guardar', 'sobras', 'refrigerar', 'duran', 'cuánto'],
    answer: '🥡 Las sobras navideñas deben refrigerarse en <strong>recipientes herméticos dentro de las 2 horas</strong> después de servir. El pavo dura hasta <strong>4 días en refrigerador</strong> o 3 meses en congelador. La ensalada de manzana, máximo 2 días. El ponche puede guardarse hasta 5 días y recalentarse.'
  },
  {
    keys: ['menú', 'menu', 'ideas', 'cena', 'propuesta', 'qué servir'],
    answer: '🍽️ Aquí un menú navideño completo: <br>• <strong>Entrada:</strong> Ponche de frutas + botanas<br>• <strong>Fuerte:</strong> Pavo relleno + ensalada de manzana<br>• <strong>Postre:</strong> Galletas de jengibre + chocolate caliente<br>• <strong>Extra:</strong> Rosca de Reyes para el brunch del 6 de enero'
  },
  {
    keys: ['sustituto', 'sustituir', 'reemplazar', 'sin', 'alergia', 'vegano', 'vegetariano'],
    answer: '🌿 Para una versión vegetariana, sustituye el pavo por <strong>coliflor entera asada</strong> o <strong>lomo de portobello</strong>. En galletas, reemplaza la mantequilla por aceite de coco y el huevo por 1 cucharada de linaza molida + 3 de agua. ¡Quedan deliciosas!'
  },
  {
    keys: ['descongelar', 'descongelado', 'pavo congelado'],
    answer: '🧊 Descongela el pavo en el refrigerador: calcula <strong>24 horas por cada 2-2.5 kg</strong>. Un pavo de 6 kg necesita 2-3 días. También puedes descongelarlo en agua fría cambiándola cada 30 min (30 min por kg). Nunca lo descongeles a temperatura ambiente.'
  },
  {
    keys: ['glasear', 'glaseado', 'decorar', 'decoración', 'azúcar glass'],
    answer: '🎨 El glaseado para galletas se hace con: <strong>1 taza de azúcar glass + 2 cucharadas de leche + unas gotas de extracto de vainilla</strong>. Mezcla hasta obtener consistencia de pasta. Añade colorante vegetal para colores festivos. Aplica con manga pastelera o una bolsa ziplock con la punta cortada.'
  },
  {
    keys: ['piloncillo', 'cuánto', 'dulce', 'azúcar', 'ponche dulce'],
    answer: '🍫 Para el ponche, empieza con <strong>150-200 g de piloncillo</strong> por 3 litros de agua y ajusta a tu gusto. Recuerda que los tejocotes y la fruta ya aportan dulzor natural. Si no tienes piloncillo, puedes usar azúcar morena en la misma proporción.'
  },
  {
    keys: ['hola', 'hi', 'buenas', 'saludos', 'ayuda', 'ayudar'],
    answer: '🎄 ¡Hola! Soy el Asistente Navideño. Puedo ayudarte con recetas, tiempos de cocción, sustituciones de ingredientes, conservación de alimentos y más. ¿Sobre qué receta navideña tienes dudas?'
  },
  {
    keys: ['gracias', 'muchas gracias', 'thanks', 'perfecto', 'excelente'],
    answer: '🎅 ¡Con mucho gusto! Espero que tus recetas navideñas queden deliciosas. Si tienes más preguntas, aquí estaré. ¡Felices fiestas! 🎄⭐'
  },
  {
    keys: ['rosca', 'reyes', 'levadura', 'masa'],
    answer: '🍞 La clave de una buena rosca es la levadura activa y los tiempos de fermentación. Asegúrate de que la levadura haga espuma antes de añadirla — si no espuma, ya no sirve. La masa debe doblar su tamaño en la primera fermentación (1.5 h). ¡Clic en "Ver receta" para el paso a paso completo!'
  },
  {
    keys: ['chocolate', 'espeso', 'cómo', 'espesar', 'maicena'],
    answer: '🍫 El secreto del chocolate espeso es la <strong>maicena</strong>: 2 cucharadas disuelta en leche fría antes de incorporar. Sin dejar de mover a fuego medio, espesa en unos minutos. Para chocolate aún más espeso, añade otra cucharada de maicena. El chocolate de tablilla (tipo abuelita) da mejor sabor que el de polvo.'
  },
];

// ── LÓGICA DEL BOT ─────────────────────────────────────────
function findAnswer(input) {
  const lower = input.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  let bestMatch = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = faq.keys.reduce((acc, key) => {
      const normKey = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return acc + (lower.includes(normKey) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (bestScore >= 1) return bestMatch.answer;

  // Respuesta por defecto
  return `🎄 Mmm, no encontré información exacta sobre eso. Prueba preguntando sobre:<br>
    <em>• Tiempos de cocción del pavo</em><br>
    <em>• Cómo hacer galletas de jengibre</em><br>
    <em>• Ingredientes del ponche</em><br>
    <em>• Conservar las sobras navideñas</em><br>
    O haz clic en las preguntas rápidas de arriba 👆`;
}

// ── INTERFAZ DE CHAT ───────────────────────────────────────
function addMessage(text, isBot) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.classList.add('msg', isBot ? 'bot-msg' : 'user-msg');
  div.innerHTML = `
    <span class="avatar">${isBot ? '🎅' : '👤'}</span>
    <div class="bubble">${text}</div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function addTyping() {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.classList.add('msg', 'bot-msg', 'typing');
  div.id = 'typingIndicator';
  div.innerHTML = `
    <span class="avatar">🎅</span>
    <div class="bubble">
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, false);
  input.value = '';

  addTyping();

  setTimeout(() => {
    removeTyping();
    addMessage(findAnswer(text), true);
  }, 900 + Math.random() * 400);
}

function askBot(question) {
  document.getElementById('userInput').value = question;
  sendMessage();
  // Scroll al bot
  document.getElementById('bot').scrollIntoView({ behavior: 'smooth' });
}
