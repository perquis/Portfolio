const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' app.cal.com;
    img-src 'self' blob: data: media.istockphoto.com *.unsplash.com;
    frame-src 'self' www.youtube.com cal.com app.cal.com;
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    connect-src 'self' cdn.jsdelivr.net unpkg.com lottie.host;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    block-all-mixed-content;
`;

module.exports = cspHeader;
