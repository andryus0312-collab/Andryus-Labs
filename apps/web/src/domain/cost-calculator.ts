/**
 * ANDRYUS LAB - DOMAIN LOGIC
 * Principle: Local-first, Pure functions.
 */

export interface RealCostInput {
  purchase: number;
  shipping: number;
  commission: number; // As percentage or fixed? Spec says sum components. Let's assume fixed for simplicity in MVP unless specified otherwise.
  taxes: number;
  packaging: number;
  advertising: number;
}

export interface RealCostResult {
  total: number;
  breakdown: Record<string, number>;
}

export function calculateRealCost(input: RealCostInput): RealCostResult {
  // Validation: Finite numbers, non-negative
  const values = Object.values(input);
  if (!values.every(v => typeof v === 'number' && isFinite(v) && v >= 0)) {
    throw new Error("Invalid input: Values must be finite and non-negative.");
  }

  const total = 
    input.purchase + 
    input.shipping + 
    input.commission + 
    input.taxes + 
    input.packaging + 
    input.advertising;

  return {
    total,
    breakdown: { ...input }
  };
}
