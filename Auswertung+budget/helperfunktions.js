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
      throw new TypeError('Jede Gruppe muss ein Werte-Array und eine Gewichtung haben');
    }
    const groupSum = weightedSum(group.values);
    weightedGroupTotal += groupSum * group.weight;
    totalGroupWeight += group.weight;
  }
  if (totalGroupWeight === 0) return 0;
  return weightedGroupTotal / totalGroupWeight;
}





function buy(amount, balance) {
  if (typeof amount !== 'number' || typeof balance !== 'number') {
    throw new TypeError('Betrag und Kontostand müssen Zahlen sein');
  }
  if (amount < 0) {
    console.log("Warnung: Kauf mit negativem Betrag erhöht den Kontostand, ist aber nicht gewollt.");
  }
  return balance - amount;
}

function sell(amount, balance) {
  if (typeof amount !== 'number' || typeof balance !== 'number') {
    throw new TypeError('Betrag und Kontostand müssen Zahlen sein');
  }
  if (amount < 0) {
    console.log("Warnung: Verkauf mit negativem Betrag verringert den Kontostand, ist aber nicht gewollt.");
  }
  return balance + amount;
}





module.exports = {
  weightedSum,
  weightedGroupSum,
  buy,
  sell
};

