//depending on current time make other blocks grey
let hour = moment().format('HH')
console.log(hour)

for (i = 0; i < 9; i++) {
    let time = "#Div" + i;
    if (hour > i + 9) {
        $(time).removeClass("future past present");
        $(time).addClass("past");
    } else if (hour < i + 9) {
        $(time).removeClass("future past present");
        $(time).addClass("future");
    } else {
        $(time).removeClass("future past present");
        $(time).addClass("present");
    }

}

//click the divisions to enter task
$(".row").on("click", ".col-10", function () {

    var text = $(".innertext", this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("changeText")
        .val(text);

    $(".innertext", this).replaceWith(textInput);

})

$(".row").on("click", ".saveBtn", function () {

    var text = $(this)
        .closest(".row")
        .find(".col-10")
        .find(".changeText")
        .val();

    var textInput = $("<p>")
        .addClass("innertext")
        .text(text);

    $(this)
        .closest(".row")
        .find(".col-10")
        .find(".changeText")
        .replaceWith(textInput);
    save();
});

//page refreshes, remains in local storage
function save() {
    for (i = 0; i < 9; i++) {
        saveitem = $("#Div" + i).find(".innertext").text();
        if (saveitem === "") {
            continue;
        } else {
            localStorage.setItem('time' + i, saveitem)
        }
    }
};


function refresh() {
    for (i = 0; i < 9; i++) {

        saved = 'time' + i;

        var storage = localStorage.getItem(saved);
        if (!storage) {
            storage = "";
        }
        $("#text" + i).text(storage.trim());
        $("#Div" + i).html($("#Div" + i).html().trim())
    }
}

refresh();
