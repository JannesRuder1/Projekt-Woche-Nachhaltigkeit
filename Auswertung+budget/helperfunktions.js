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












function addPopulation(amount, percentages, groups = {}) {
  if (typeof amount !== 'number') {
    throw new TypeError('Betrag muss eine Zahl sein');
  }
  
  if (typeof percentages !== 'object' || percentages === null) {
    throw new TypeError('Prozentsätze müssen ein Objekt sein');
  }
  
  const totalPercentage = Object.values(percentages).reduce((sum, percentage) => sum + percentage, 0);
  if (Math.abs(totalPercentage - 100) > 0.01) {
    console.log(`Warnung: Die Gesamtprozentsätze betragen ${totalPercentage}%, nicht 100%`);
  }
  
  const updatedGroups = {...groups};
  
  for (const [groupName, percentage] of Object.entries(percentages)) {
    const addedAmount = amount * (percentage / 100);
    
    if (updatedGroups[groupName]) {
      updatedGroups[groupName] = {
        count: updatedGroups[groupName].count + addedAmount,
        percentage: percentage
      };
    } else {
      updatedGroups[groupName] = {
        count: addedAmount,
        percentage: percentage
      };
    }
  }
  
  return updatedGroups;
}

function removePopulation(amount, groups, percentages) {
  if (typeof amount !== 'number') {
    throw new TypeError('Betrag muss eine Zahl sein');
  }
  
  if (typeof groups !== 'object' || groups === null) {
    throw new TypeError('Gruppen müssen ein Objekt sein');
  }
  
  if (typeof percentages !== 'object' || percentages === null) {
    throw new TypeError('Prozentsätze müssen ein Objekt sein');
  }
  
  const updatedGroups = {...groups};
  
  const totalPopulation = Object.values(groups).reduce((sum, group) => sum + group.count, 0);
  
  if (amount > totalPopulation) {
    console.log(`Warnung: Entferne ${amount} von einer Population von ${totalPopulation}`);
  }
  
  for (const [groupName, percentage] of Object.entries(percentages)) {
    if (updatedGroups[groupName]) {
      const groupCount = updatedGroups[groupName].count;
      const removedAmount = amount * (percentage / 100);
      
      updatedGroups[groupName] = {
        count: Math.max(0, groupCount - removedAmount),
        percentage: updatedGroups[groupName].percentage
      };
    }
  }
  
  return updatedGroups;
}








module.exports = {
  weightedSum,
  weightedGroupSum,
  buy,
  sell,
  addPopulation,
  removePopulation
};

