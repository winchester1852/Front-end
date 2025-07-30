  document.querySelectorAll('[class^="a-"]').forEach(apartment => {
    apartment.addEventListener('mouseenter', () => {
      const overlay = apartment.querySelector('[class^="over_a-"]');
      if (overlay) overlay.style.display = 'block';
    });

    apartment.addEventListener('mouseleave', () => {
      const overlay = apartment.querySelector('[class^="over_a-"]');
      if (overlay) overlay.style.display = 'none';
    });
  });