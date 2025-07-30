
  const buttons = document.querySelectorAll('.floor-btn');
  const floorLayers = document.querySelectorAll('.layer, .layer-2, .layer-3, .layer-4, .layer-5, .layer-6, .layer-7, .layer-8, .layer-9, .layer-10, .layer-11, .layer-12');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const floor = btn.dataset.floor;

      // დაამატე active კლასები
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // იმალება ყველა სართული
      floorLayers.forEach(layer => layer.style.display = 'none');

      // გამოჩნდეს შესაბამისი სართული
      const target = document.querySelector(`.layer-${11 - floor}`) || document.querySelector('.layer');
      if (target) target.style.display = 'block';
    });
  });

  // საწყისი მხოლოდ ზედა სართული ჩანს
  floorLayers.forEach((layer, index) => {
    layer.style.display = index === 0 ? 'block' : 'none';
  });

