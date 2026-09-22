import './style.css';
import { calculateRealCost, RealCostInput } from './tools/real-cost';
import { tempRepo } from './repositories/temporary-share';

// --- RENDERIZADO INICIAL ---
const app = document.getElementById('app');

if (!app) throw new Error("Elemento #app no encontrado");

app.innerHTML = `
  <header>
    <h1>🧪 Andryus Lab</h1>
    <p class="subtitle">Micro-herramientas locales • Rápidas • Seguras</p>
  </header>

  <div class="tools-grid">
    
    <!-- HERRAMIENTA 1: CALCULADORA DE COSTO REAL -->
    <article class="tool-card" id="card-real-cost">
      <div class="tool-title">💰 Real Cost Calculator</div>
      <div class="tool-desc">Calcula el costo total incluyendo comisiones e impuestos.</div>
      
      <form id="form-real-cost">
        <label>Precio Compra ($)</label>
        <input type="number" step="0.01" min="0" value="100" required name="purchase" />
        
        <label>Envío ($)</label>
        <input type="number" step="0.01" min="0" value="10" required name="shipping" />
        
        <label>Comisión (%)</label>
        <input type="number" step="0.01" min="0" value="5" required name="commission" />
        
        <button type="submit" class="action-btn">Calcular Total</button>
      </form>
      
      <div id="result-real-cost" class="status-msg"></div>
    </article>

    <!-- HERRAMIENTA 2: TEMPORARY SHARE (PREVIEW ARQUITECTURA) -->
    <article class="tool-card" id="card-temp-share">
      <div class="tool-title">⏳ Temporary Link</div>
      <div class="tool-desc">Genera un enlace que expira en 1 hora (Demo Local).</div>
      
      <textarea id="temp-input" placeholder="Pega texto aquí..." rows="3" style="width:100%; margin-bottom:0.5rem;"></textarea>
      <button id="btn-gen-link" class="action-btn">Generar Enlace Efímero</button>
      
      <div id="result-temp-share" class="status-msg"></div>
    </article>

  </div>
`;

// --- LÓGICA DE EVENTOS ---

// 1. Manejo de la Calculadora
document.getElementById('form-real-cost')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const resultDiv = document.getElementById('result-real-cost');
  
  try {
    const input: RealCostInput = {
      purchase: parseFloat(formData.get('purchase') as string) || 0,
      shipping: parseFloat(formData.get('shipping') as string) || 0,
      commission: parseFloat(formData.get('commission') as string) || 0, // Simplificado para demo
      taxes: 0,
      packaging: 0,
      advertising: 0
    };

    // Nota: En producción real, la comisión se calcularía sobre el precio, 
    // aquí asumimos valores directos para simplificar la demo visual.
    // Ajustamos la fórmula mental para la demo: Total = Purchase + Shipping + Commission$
    
    const res = calculateRealCost({
        ...input,
        commission: input.purchase * (input.commission / 100) // Convertimos % a $
    });

    if(resultDiv) {
        resultDiv.className = 'status-msg success';
        resultDiv.textContent = `✅ Costo Total Estimado: $${res.total.toFixed(2)}`;
    }

  } catch (error) {
    if(resultDiv) {
        resultDiv.className = 'status-msg error';
        resultDiv.textContent = `❌ Error: ${(error as Error).message}`;
    }
  }
});

// 2. Manejo de Temporary Share (Usando el Repositorio Mock)
document.getElementById('btn-gen-link')?.addEventListener('click', async () => {
  const inputText = (document.getElementById('temp-input') as HTMLTextAreaElement)?.value;
  const resultDiv = document.getElementById('result-temp-share');
  const btn = document.getElementById('btn-gen-link') as HTMLButtonElement;

  if (!inputText || !resultDiv || !btn) return;

  btn.disabled = true;
  btn.textContent = "Procesando...";
  resultDiv.className = 'status-msg loading';
  resultDiv.textContent = "Creando enlace seguro...";

  try {
    // TTL de 1 hora (3600 segundos)
    const response = await tempRepo.create({ payload: inputText }, 3600);
    
    resultDiv.className = 'status-msg success';
    resultDiv.innerHTML = `🔗 Listo!<br><small>${response.url}</small>`;
    
    // Copiar al portapapeles automáticamente
    navigator.clipboard.writeText(response.url);
    
  } catch (error) {
    resultDiv.className = 'status-msg error';
    resultDiv.textContent = "Error al generar enlace.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Generar Enlace Efímero";
  }
});
