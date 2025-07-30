
  // ყველა კლიტის დამუშავება
  document.querySelectorAll('img[class^="lock_b"][class$="e"]').forEach(lockImg => {
    lockImg.dataset.status = 'free'; // საწყისი სტატუსი

    // საწყისი კლიტე
    lockImg.src = 'img/BBimages/lock_b108g.png';

    // დაჭერისას კლიტის შეცვლა
    lockImg.addEventListener('click', (e) => {
      e.stopPropagation(); // hover ან სხვა ეფექტზე გავლენა არ ქონდეს

      const status = lockImg.dataset.status;

      if (status === 'free') {
        lockImg.src = 'img/BBimages/lock_b108e.png'; // ყვითელი (დაჯავშნილი)
        lockImg.dataset.status = 'reserved';

      Swal.fire({
        icon: 'success',
        title: 'ბინა დაჯავშნულია 48 საათით!',
        text: 'ჯავშანის გასაგრძელებლად დაუკავშირდით კომპანიას.',
        timer: 3000,
        showConfirmButton: false
      });
      } else if (status === 'reserved') {
        lockImg.src = 'img/BBimages/lock_b108g.png'; // მწვანე (თავისუფალი)
        lockImg.dataset.status = 'free';

       Swal.fire({
        icon: 'info',
        title: 'ბინა თავისუფალია',
        text: 'თქვენ გააუქმეთ ჯავშანი.',
        timer: 3000,
        showConfirmButton: false
        });
      }
    });
  });
