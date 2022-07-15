// Working PNs
// 3YM61AE
// J8H61A
// 3R133EA

var ccs_cc_args = ccs_cc_args || [];

function onPageLoad() {
    setParams(ccs_cc_args);
    setLanguageForParams(ccs_cc_args);
    const pn = getProductNumber();
    getProductPage(ccs_cc_args, pn);
    // updateTitle()
}

function setParams(params) {
    params.push(['mf', 'HP']);
    params.push(['market', 'MA']);
    // ccs_cc_args.push(['cpn', 'CPN']);
    // ccs_cc_args.push(['upcean', 'UPC_EAN_CODE']);
    // ccs_cc_args.push(['ccid', 'CATALOG_CODE']);
}

function setLanguageForParams(params) {
    const lang = navigator.language.slice(0, 2);
    params.push(['lang', lang]);
}

function getProductNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productNumber');
}

function getProductPage(params, pn) {
    const reqParams = params;
    reqParams.push(['pn', pn]);
    reqParams.push(['_SKey', 'cd6e58ab']);
    reqParams.push(['_ZoneId', 'aca3973787']);
    // o.push(['_SKey', '2de3937d']);,
    // o.push(['_ZoneId', '2f700b5fba']);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.cnetcontent.com/jsc/h.js';
    // script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.cs.1worldsync.com/jsc/h1ws.js'

    const myElement = document.getElementsByTagName('script')[0];
    myElement.parentNode.insertBefore(script, myElement);
}

//tried to change website title but didnt seem to work

// function updateTitle() {
//     const headerElement = document.getElementsByClassName('ccs-cc-inline-header')[0];
//     const titleElement = headerElement.getElementsByClassName('ccs-cc-inline-section-title')[0];
//     document.title = titleElement.innerText;
// }