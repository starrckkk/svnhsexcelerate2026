(function(){
    emailjs.init("YKHiaKKtzN_hMXrN9");
})();

function sendComment() {
    const params = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("comment").value
    };

    emailjs.send("service_li8jfu4", "template_inxp7vk", params)
        .then(() => {
            document.getElementById("status").innerText = "Comment sent to Gmail ✅";
        })
        .catch(() => {
            document.getElementById("status").innerText = "Failed to send ❌";
        });
}