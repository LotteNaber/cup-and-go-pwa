// Handle successful scan
function onScanSuccess(decodedText, decodedResult) {
    // Show the scanned result
    document.getElementById("qr-result").innerText = `Scanned: ${decodedText}`;
  
    // If the QR code contains a URL, redirect
    if (decodedText.startsWith("http")) {
      window.location.href = decodedText;
    }
  }
  
  // Initialize the QR scanner once the page is ready
  document.addEventListener("DOMContentLoaded", () => {
    const qrScanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250
    });
    qrScanner.render(onScanSuccess);
  
    // Fallback button handler
    document.getElementById("fallback-btn").addEventListener("click", () => {
      // Replace with your actual menu URL or local file
      window.location.href = "https://lottenaber.github.io/cup-go-pwa/menu.html";
    });
  });
  