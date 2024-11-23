$(document).ready(function () {
    $("#content").load("pages/home.html"); 

    $('a[data-page]').on('click', function (e) {
        e.preventDefault();

        const page = $(this).data('page');
        $('#content').load(`pages/${page}.html`, function (response, status, xhr) {
            if (status === "error") {
                $('#content').html(`<p>Erro ao carregar a página: ${xhr.statusText}</p>`);
            }
        });

        $('.nav-item').on('click', function(e) {
            $('.nav-item').removeClass('active');

            $(this).addClass('active');
        });
    });
});