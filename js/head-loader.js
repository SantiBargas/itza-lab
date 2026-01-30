// js/head-loader.js - Unificación de recursos NO críticos
(function() {
    const head = document.head;
    const resources = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="lib/flaticon/font/flaticon.css">
        <link rel="stylesheet" href="css/fontello.css">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" media="print" onload="this.media='all'">
        <link rel="stylesheet" href="lib/animate/animate.min.css" media="print" onload="this.media='all'">
        <link rel="stylesheet" href="lib/slick/slick.css" media="print" onload="this.media='all'">
        <link rel="stylesheet" href="lib/slick/slick-theme.css" media="print" onload="this.media='all'">
        <link rel="stylesheet" href="lib/lightbox/css/lightbox.min.css" media="print" onload="this.media='all'">
    `;
    head.insertAdjacentHTML('beforeend', resources);
})();