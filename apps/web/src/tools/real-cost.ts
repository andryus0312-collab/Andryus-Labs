/**
 * TOOL: Real Cost Calculator
 * TYPE: Local Pure Calculation
 * PERSISTENCE: None
 */

// Definición de entrada estricta
export interface RealCostInput {
  purchase: number;
  shipping: number;
  commission: number;
  taxes: number;
  packaging: number;
  advertising: number;
}

export interface RealCostResult {
  total: number;
  breakdown: Record<string, number>;
}

/**
 * Valida que los números sean finitos y no negativos
 */
function validateInputs(input: Partial<RealCostInput>): boolean {
  const values = Object.values(input);
  return values.every(v => typeof v === 'number' && isFinite(v) && v >= 0);
}

/**
 * Lógica pura de cálculo
 */
export function calculateRealCost(input: RealCostInput): RealCostResult {
  if (!validateInputs(input)) {
    throw new Error("Entradas inválidas: deben ser números positivos.");
  }

  const { purchase, shipping, commission, taxes, packaging, advertising } = input;
  
  const total = purchase + shipping + commission + taxes + packaging + advertising;

  return {
    total,
    breakdown: {
      purchase,
      shipping,
      commission,
      taxes,
      packaging,
      advertising
    }
  };
}
