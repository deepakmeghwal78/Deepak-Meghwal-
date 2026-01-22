// यह फंक्शन बॉक्स को खोलने और बंद करने के लिए है
function togglePrice(element) {
    // अगर कोई और बॉक्स खुला है तो उसे बंद करें (Optional)
    // document.querySelectorAll('.service-box').forEach(box => {
    //     if (box !== element) box.classList.remove('active');
    // });

    // वर्तमान बॉक्स को खोलें या बंद करें
    element.classList.toggle('active');
}

// पेज लोड होते ही एक वेलकम मैसेज कंसोल में दिखाएँ
window.onload = () => {
    console.log("Welcome Deepak! Your website is ready.");
};
