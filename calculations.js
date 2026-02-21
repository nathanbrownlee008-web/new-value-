export function impliedProbability(odds) {
  return odds ? (1 / odds) * 100 : 0;
}

export function edge(probability, odds) {
  if (!probability || !odds) return 0;
  return (probability / 100 * odds - 1) * 100;
}

export function profit(odds, stake, result) {
  if (result === 'win') return (odds - 1) * stake;
  if (result === 'loss') return -stake;
  return 0;
}