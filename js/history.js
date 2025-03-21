document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.gallery-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true, // Centralizar os slides
            speed: 1000, // Velocidade da transição em milissegundos
            dots: true, // Adicionar os pontinhos embaixo dos slides
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});