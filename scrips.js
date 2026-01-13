document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🎉 Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    this.reset();
});
