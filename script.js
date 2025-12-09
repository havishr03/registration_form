$(document).ready(function () {
    $("#regForm").on("submit", function (e) {
        // Clear previous error
        $("#errorMsg").text("");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let gender = $("input[name='gender']:checked").val();
        let course = $("#course").val();

        if (name === "" || email === "" || phone === "" || !gender || course === "") {
            e.preventDefault(); // stop form submit
            $("#errorMsg").text("Please fill all the required (*) fields.");
            return;
        }

        // very basic phone check
        if (!/^[0-9]{10}$/.test(phone)) {
            e.preventDefault();
            $("#errorMsg").text("Enter a valid 10-digit phone number.");
            return;
        }

        // If all good, show alert (form will submit to PHP)
        alert("Form submitted successfully!");
    });
});
