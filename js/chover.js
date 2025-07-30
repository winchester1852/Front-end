  document.querySelectorAll('[class^="c"]').forEach(apartment => {
    apartment.addEventListener('mouseenter', () => {
      const overlay = apartment.querySelector('[class^="over_c"]');
      if (overlay) overlay.style.display = 'block';
    });

    apartment.addEventListener('mouseleave', () => {
      const overlay = apartment.querySelector('[class^="over_c"]');
      if (overlay) overlay.style.display = 'none';
    });
  });