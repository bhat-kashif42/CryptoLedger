document.getElementById('taxForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
  const salePrice = parseFloat(document.getElementById('salePrice').value);
  const quantity = parseFloat(document.getElementById('quantity').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value);

  // Validate inputs
  if (isNaN(purchasePrice) || isNaN(salePrice) || isNaN(quantity) || isNaN(taxRate)) {
    alert('Please enter valid numbers.');
    return;
  }

  // Calculate capital gain
  const capitalGain = (salePrice - purchasePrice) * quantity;

  // Calculate tax amount
  const taxAmount = (capitalGain * taxRate) / 100;

  // Display results
  document.getElementById('capitalGain').textContent = capitalGain.toFixed(2);
  document.getElementById('taxAmount').textContent = taxAmount.toFixed(2);
});
