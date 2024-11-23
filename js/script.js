$(document).ready(function () {
    function setarItemMenuAtivo(page) {
        $(".navbar .nav-item").removeClass("active");
        $(`a[data-page='${page}']`).parent().addClass("active");
    }

    $("#content").load("pages/home.html", function() {
        setarItemMenuAtivo('home');
    });

    $('a[data-page]').on('click', function (e) {
        e.preventDefault();

        const page = $(this).data('page');
        $('#content').load(`pages/${page}.html`, function (response, status, xhr) {
            if (status === "error") {
                $('#content').html(`<p>Erro ao carregar a página: ${xhr.statusText}</p>`);
            }
        });

        setarItemMenuAtivo(page);
    });
});