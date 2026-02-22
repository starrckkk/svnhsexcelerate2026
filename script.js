(function(){
    emailjs.init("AW9TM2Vr8l_flAMEp");
})();

function sendComment() {
    const params = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("comment").value
    };

    emailjs.send("excelerate", "template_deka25q", params)
        .then(() => {
            document.getElementById("status").innerText = "Comment sent to Gmail ✅";
        })
        .catch(() => {
            document.getElementById("status").innerText = "Failed to send ❌";
        });
}