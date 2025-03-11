// Hàm mở/đóng form liên hệ
function toggleContactForm() {
    var contactSection = document.getElementById("contactSection");
    if (contactSection.style.display === "none" || contactSection.style.display === "") {
        contactSection.style.display = "block";
        contactSection.style.zIndex = "4"; // Đảm bảo luôn hiển thị trên các phần khác
    } else {
        contactSection.style.display = "none";
    }
}


// Hàm kiểm tra và gửi tin nhắn
function sendMessage() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        return;
    }

    // Hiển thị thông báo thành công
    document.getElementById("successMessage").style.display = "block";

    // Reset form
    document.getElementById("contactForm").reset();

    // Tự động đóng form sau 2 giây
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        toggleContactForm();
    }, 2000);
}
