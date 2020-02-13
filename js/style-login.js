/**
 * Login modification
 */
function login() {
    if (window.innerWidth < 1200) {
        $(".col").removeClass("col-md-6");
        $(".col").addClass("col-12");
    } else {
        $(".col").removeClass("col-12");
        $(".col").addClass("col-md-6");
    }
    if (window.innerWidth < 483) {
        $("button").addClass("margin-bottom-20");
    } else {
        $("button").removeClass("margin-bottom-10");
    }

    $(window)
        .resize(function () {
            if (window.innerWidth < 1200) {
                $(".col").removeClass("col-md-6");
                $(".col").addClass("col-12");
            } else {
                $(".col").removeClass("col-12");
                $(".col").addClass("col-md-6");
            }
            if (window.innerWidth < 483) {
                $("button").addClass("margin-bottom-20");
            } else {
                $("button").removeClass("margin-bottom-10");
            }
        });
}