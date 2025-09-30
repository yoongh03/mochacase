window.addEventListener('load', () => {
    // print('연결확인')
    const logo = document.querySelector('.logo');
    console.log('logo:', logo);
    if (logo)  {
            requestAnimationFrame(() => {
               logo.style.transition = 'all 2000ms ease';
               logo.style.opacity = '1';
               logo.style.transform ='translateY(0)';
            });
    }

    const link = document.querySelector('.link');
    console.log('link:', link);
    if (link) {
        setTimeout(()=>{
            requestAnimationFrame(() => {
                link.style.transition = 'all 2000ms ease';
                link.style.opacity = '1';
                link.style.transform ='translateY(0)';
            });
        },500);
    }
});


// window.addEventListener('load', () => {



// });
