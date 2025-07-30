
  // ყველა კლიტის დამუშავება
  document.querySelectorAll('img[class^="lock_a"][class$="e"]').forEach(lockImg => {
    lockImg.dataset.status = 'free'; // საწყისი სტატუსი

    // საწყისი კლიტე
    lockImg.src = 'img/ABimages/lock_am5g.png';

    // დაჭერისას კლიტის შეცვლა
    lockImg.addEventListener('click', (e) => {
      e.stopPropagation(); // hover ან სხვა ეფექტზე გავლენა არ ქონდეს

      const status = lockImg.dataset.status;

      if (status === 'free') {
        lockImg.src = 'img/ABimages/lock_am5e.png'; // ყვითელი (დაჯავშნილი)
        lockImg.dataset.status = 'reserved';
      } else if (status === 'reserved') {
        lockImg.src = 'img/ABimages/lock_am5g.png'; // მწვანე (თავისუფალი)
        lockImg.dataset.status = 'free';
      }
    });
  });

