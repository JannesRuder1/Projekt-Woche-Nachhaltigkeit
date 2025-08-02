function weightedSum(values) {
  if (!Array.isArray(values)) {
    throw new TypeError('Eingabe muss ein Array sein');
  }
  let totalWeight = 0;
  let weightedTotal = 0;
  for (const item of values) {
    if (typeof item.value !== 'number' || typeof item.weight !== 'number') {
      throw new TypeError('Jedes Element muss einen Wert und eine Gewichtung haben');
    }
    weightedTotal += item.value * item.weight;
    totalWeight += item.weight;
  }
  if (totalWeight === 0) return 0;
  return weightedTotal / totalWeight;
}

function weightedGroupSum(groups) {
  if (!Array.isArray(groups)) {
    throw new TypeError('Eingabe muss ein Array sein');
  }
  let totalGroupWeight = 0;
  let weightedGroupTotal = 0;
  for (const group of groups) {
    if (!Array.isArray(group.values) || typeof group.weight !== 'number') {
      throw new TypeError('Jede Gruppe muss ein Werte-Array und ein Gewichtung haben');
    }
    const groupSum = weightedSum(group.values);
    weightedGroupTotal += groupSum * group.weight;
    totalGroupWeight += group.weight;
  }
  if (totalGroupWeight === 0) return 0;
  return weightedGroupTotal / totalGroupWeight;
}

module.exports = {
  weightedSum,
  weightedGroupSum
};

