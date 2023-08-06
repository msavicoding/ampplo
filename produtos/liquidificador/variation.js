const addToCartButton = document.getElementById('add-to-cart-btn');

addToCartButton.addEventListener('click', () => {
  const variation1Select = document.getElementById('variation1');
  const variation2Select = document.getElementById('variation2');
  const variation3Select = document.getElementById('variation3');

  const selectedVariant1 = variation1Select.value;
  const selectedVariant2 = variation2Select.value;
  const selectedVariant3 = variation3Select.value;

  // Customize the logic based on the selected variations
  if (selectedVariant1 === 'variant1' && selectedVariant2 === 'option1' && selectedVariant3 === 'color1') {
    window.location.href = 'https://example.com/link1';
  } else if (selectedVariant1 === 'variant2' && selectedVariant2 === 'option2' && selectedVariant3 === 'color2') {
    window.location.href = 'https://example.com/link2';
  } else if (selectedVariant1 === 'variant3' && selectedVariant2 === 'option3' && selectedVariant3 === 'color3') {
    window.location.href = 'https://example.com/link3';
  } else if (selectedVariant1 === 'variant1' && selectedVariant2 === 'option2' && selectedVariant3 === 'color1') {
    window.location.href = 'https://example.com/link4';
  } else if (selectedVariant1 === 'variant2' && selectedVariant2 === 'option1' && selectedVariant3 === 'color3') {
    window.location.href = 'https://example.com/link5';
  } else if (selectedVariant1 === 'variant3' && selectedVariant2 === 'option2' && selectedVariant3 === 'color1') {
    window.location.href = 'https://example.com/link6';
  } else {
    alert('Please select valid variations.');
  }
});