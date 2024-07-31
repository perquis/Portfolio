const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    img-src 'self' blob: data: media.istockphoto.com *.unsplash.com;
    frame-src 'self' www.youtube.com;
    style-src 'self' 'unsafe-inline';
    font-src 'self';
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    block-all-mixed-content;
`;

module.exports = cspHeader;
