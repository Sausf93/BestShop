/// Aqui va el codigo de estilo y efectos etc.
var collapse = false;

//Cuando cargue el html llamar a la funcion responsive
$(document).ready(function () {
    responsive();
});

/**
 * Funcion para hacer la busqueda avanzada desplegable y el documento responsive
 */
function responsive() {
    //La funcion resize es para cuando cambia el width de la ventana.
    $(window)
        .resize(function () {
            if (window.innerWidth > 999) {

                $("#desde").addClass("margin-bottom-10");
                $("p").removeClass("text-center");
                $(".busqueda-boton").remove();
                $("#collapse").remove();
                $("#busqueda").removeClass("collapse");
                $(".results").addClass("col-md-9");
                $(".results").removeClass("col-md-12");
                $("button").addClass("precio");
                $("#busqueda").addClass("col-md-3");
                $("#busqueda").removeClass("col-md-12");
                $("#busqueda").removeClass("margin-top-20");
                $(".col-md-2").removeClass("center-flex");
                collapse = false;
            } else {
                $(".col-md-2").removeClass("center-flex");
                $("#busqueda").removeClass("col-md-3");
                $("#busqueda").addClass("col-md-12");
                $("#search").removeClass("input-search");
                $("#search").addClass("margin-bottom-20");
                $("p").addClass("text-center");
                $("button").removeClass("precio");
                $("#busqueda").addClass("collapse");
                $("#busqueda").addClass("margin-top-10");
                $(".results").removeClass("col-md-9");
                $(".results").addClass("col-md-12");

                if (!collapse) {
                    $("#busqueda").before("<div class='busqueda-boton col-md-12 center'><button id='collapse' class='margin-bottom-10 btn bt" +
                        "n-primary' data-toggle='collapse' data-target='#busqueda'> Show advance search" +
                        " </button> </div> ");
                    collapse = true;
                }

            }
            //Y a partir de aqui es pa cuando carga directamente con una ventana sin modificar el width.
            if (window.innerWidth > 770) {
                $(".price").addClass("precio");
                $(".price").parent(".col-md-12").removeClass("center-flex");
                $(".col-md-2").removeClass("center-flex");
                $("h4").parent("div").removeClass("center-flex");
            } else {
                $(".price").removeClass("precio");
                $(".price").parent(".col-md-12").addClass("center-flex");
                $(".col-md-2").addClass("center-flex");
                $("h4").parent("div").addClass("center-flex");
            }
            if (window.innerWidth < 1206) {

                $(".item-product>.col-md-10>.col-md-12").addClass("padding-left-20");
            } else {
                $(".item-product>.col-md-10>.col-md-12").removeClass("padding-left-20");
            }
            $("#busqueda").removeClass("center-flex");
        });

    if (window.innerWidth > 999) {
        $("#desde").addClass("margin-bottom-10");
        $("p").removeClass("text-center");
        $("#precio").addClass("precio");
        $(".busqueda-boton").remove();
        $("#collapse").remove();
        $("#busqueda").removeClass("collapse");
        $(".results").addClass("col-md-9");
        $(".results").removeClass("col-md-12");
        $("#busqueda").addClass("col-md-3");
        $("#busqueda").removeClass("col-md-12");
        $("#busqueda").removeClass("margin-top-20");
        $(".col-md-2").removeClass("center-flex");
        collapse = false;
    } else {
        $(".col-md-2").removeClass("center-flex");
        $("#busqueda").removeClass("col-md-3");
        $("#busqueda").addClass("col-md-12");
        $("#search").removeClass("input-search");
        $("#search").addClass("margin-bottom-10");
        $("p").addClass("text-center");
        $("button").removeClass("precio");
        $("#busqueda").addClass("collapse");
        $("#busqueda").addClass("margin-top-20");
        $(".results").removeClass("col-md-9");
        $(".results").addClass("col-md-12");

        if (!collapse) {
            $("#busqueda").before("<div class='busqueda-boton mb-2 col-md-12 center'><button id='collapse' class='btn bt" +
                "n-primary' data-toggle='collapse' data-target='#busqueda'> Show advance search" +
                " </button> </div> <br/> ");
            collapse = true;
        }

        if (window.innerWidth < 1206) {

            $(".item-product>.col-md-10>.col-md-12").addClass("padding-left-20");
        } else {
            $(".item-product>.col-md-10>.col-md-12").removeClass("padding-left-20");
        }

    }
    if (window.innerWidth > 770) {
        $(".price").addClass("precio");
        $(".price").parent(".col-md-12").removeClass("center-flex");
        $(".col-md-2").removeClass("center-flex");
        $("h4").parent("div").removeClass("center-flex");
    } else {
        $(".price").removeClass("precio");
        $(".price").parent(".col-md-12").addClass("center-flex");
        $(".col-md-2").addClass("center-flex");
        $("h4").parent("div").addClass("center-flex");
    }

    $("#busqueda").removeClass("center-flex");
}

/**
 * Login modification
 */
function login() {
    if (window.innerWidth < 1200) {
        $("#col").removeClass("col-md-6");
        $("#col").addClass("col-md-12");

    } else {
        $("#col").removeClass("col-md-12");
        $("#col").addClass("col-md-6");
    }
}