
  // ყველა კლიტის დამუშავება
  document.querySelectorAll('img[class^="lock_c"][class$="e"]').forEach(lockImg => {
    lockImg.dataset.status = 'free'; // საწყისი სტატუსი

    // საწყისი კლიტე (მწვანე)
    lockImg.src = 'img/CBimages/lock_c89g.png';

    // დაჭერისას კლიტის შეცვლა
    lockImg.addEventListener('click', (e) => {
      e.stopPropagation(); // hover ან სხვა ეფექტზე გავლენა არ ქონდეს

      const status = lockImg.dataset.status;

      if (status === 'free') {
        lockImg.src = 'img/CBimages/lock_c89e.png'; // ყვითელი (დაჯავშნილი)
        lockImg.dataset.status = 'reserved';

        // SweetAlert – დაჯავშნა
        Swal.fire({
          icon: 'success',
          title: 'დაჯავშნილია!',
          text: 'ბინა წარმატებით დაეჯავშნა.',
          timer: 2000,
          showConfirmButton: false
        });

      } else if (status === 'reserved') {
        lockImg.src = 'img/CBimages/lock_c89g.png'; // მწვანე (თავისუფალი)
        lockImg.dataset.status = 'free';

        // SweetAlert – ჯავშნის გაუქმება
        Swal.fire({
          icon: 'info',
          title: 'თავისუფალია',
          text: 'ბინა ხელახლა გახდა თავისუფალი.',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  });

