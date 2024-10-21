(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    3454: function(e, n, t) {
        "use strict";
        var i, o;
        e.exports = (null == (i = t.g.process) ? void 0 : i.env) && "object" == typeof (null == (o = t.g.process) ? void 0 : o.env) ? t.g.process : t(7663)
    },
    5557: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(6514)
        }
        ])
    },
    6514: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return $
            }
        });
        var i = t(5893)
          , o = t(7294)
          , c = t(9008)
          , s = t.n(c);
        let M = () => {
            document.cookie.includes("isEP") && window.location.replace("https://betberry.io/signup".concat(window.location.search))
        }
        ;
        var a = t(3454);
        let r = {
            mainUrl: "#",
            regUrl: "#",
            termsLink: "#",
            privacyLink: "#",
            respGamingLink: "#",
            year: new Date().getFullYear(),
            lpBrand: a.env.LP_BRAND,
            lpLang: a.env.LP_LANG,
            lpType: "casino",
            nnBonus: "3"
        };
        var g = t(5075)
          , A = t.n(g);
        let l = () => {
            let e = new URL(window.location).searchParams;
            window.Analytics && e.append("clstrmid", window.Analytics.getCrossdomainId()),
            console.log(e.size),
            e.size && document.querySelectorAll("a").forEach(n => n.href += "?".concat(e))
        }
          , N = () => {
            "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(function() {
                "undefined" != typeof MTFEF && void 0 !== MTFEF.init && MTFEF.init()
            }, 10) : document.addEventListener("DOMContentLoaded", function() {
                "undefined" != typeof MTFEF && void 0 !== MTFEF.init && MTFEF.init()
            })
        }
        ;
        var j = t(8440)
          , u = t.n(j)
          , D = t(6788)
          , E = t.n(D)
          , I = t(1242)
          , d = t.n(I)
          , T = t(2018)
          , y = t.n(T)
          , x = t(3967)
          , z = t.n(x);
        let w = () => (0,
        i.jsxs)("header", {
            className: u().header,
            children: [(0,
            i.jsx)("a", {
                className: u().header__logo,
                href: r.regUrl,
                "data-cs": "cs-header-logo",
                children: (0,
                i.jsx)("img", {
                    src: E(),
                    alt: "Betberry logo"
                })
            }), (0,
            i.jsx)("div", {
                className: u()["jgb-button"],
                children: (0,
                i.jsxs)("a", {
                    href: r.regUrl,
                    "data-cs": "cs-header-signup",
                    children: [(0,
                    i.jsx)("div", {
                        className: z()(u()["jgb-button__bg"], u()["jgb-button__bg--default"]),
                        children: (0,
                        i.jsx)("img", {
                            src: d(),
                            alt: ""
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: z()(u()["jgb-button__bg"], u()["jgb-button__bg--hover"]),
                        children: (0,
                        i.jsx)("img", {
                            src: y(),
                            alt: ""
                        })
                    })]
                })
            })]
        });
        var C = t(4074)
          , O = t.n(C);
        let k = () => (0,
        i.jsxs)("footer", {
            className: O().footer,
            children: [(0,
            i.jsx)("div", {
                className: z()(O().footer__left),
                children: (0,
                i.jsxs)("p", {
                    className: O()["footer__left-copyright"],
                    children: ["\xa9 Betberry ", (0,
                    i.jsx)("strong", {
                        children: r.year
                    })]
                })
            }), (0,
            i.jsxs)("div", {
                className: O().footer__center,
                children: [(0,
                i.jsx)("a", {
                    href: "".concat(r.respGamingLink),
                    className: O()["footer__center-link"],
                    children: "Jogo Responsável"
                }), (0,
                i.jsx)("a", {
                    href: "".concat(r.privacyLink),
                    className: O()["footer__center-link"],
                    children: "Politica de Privacidade"
                }), (0,
                i.jsxs)("p", {
                    className: O()["footer__center-email"],
                    children: ["Nos Contate:", " ", (0,
                    i.jsx)("a", {
                        href: "mailto:@",
                        children: "Suporte"
                    })]
                })]
            }), (0,
            i.jsx)("div", {
                className: O().footer__right
            }), (0,
            i.jsx)("p", {
                className: O().footer__description,
                children: 'TODOS OS DIREITOS RESERVADOS'
            })]
        })
          , U = {
            brand: "JBCL",
            lang: "es",
            bonusType: "3",
            lpType: "casino",
            ctaButtonType: "button"
        };
        function h(e) {
            let {children: n} = e
              , t = (0,
            o.useRef)(0);
            return (0,
            o.useEffect)( () => {
                l(),
                N()
            }
            , []),
            (0,
            o.useEffect)( () => {
                setTimeout( () => {
                    let e = window.innerWidth >= 1e3 ? "DESKTOP_AIR_PM" : "MOBILE_WEB";
                    if (window.Analytics)
                        try {
                            window.Analytics.addGlobalContext(U.brand, U.lang, e),
                            window.Analytics.addContextLanding(U.bonusType, U.lpType),
                            window.Analytics.pageViewEvent(),
                            window.Analytics.pushEvent({
                                pushEventName: "marketing_lib_data",
                                currentStep: "visit",
                                clstrmid: window.Analytics.getCrossdomainId()
                            }),
                            function() {
                                let e = {
                                    csHeaderLogo: document.querySelectorAll('[data-cs="cs-header-logo"]'),
                                    csHeaderSignup: document.querySelectorAll('[data-cs="cs-header-signup"]'),
                                    mainCtaButton: document.querySelectorAll('[data-cs="cs-cta-button"]'),
                                    csRegIsPlayerAgree: document.querySelectorAll('[data-cs="cs-reg-isplayeragree"]'),
                                    csRegBonusActivate: document.querySelectorAll('[data-cs="cs-reg-bonus-activate"]'),
                                    csRegBonusRules: document.querySelectorAll('[data-cs="cs-reg-bonus-rules"]'),
                                    csAppDownload: document.querySelectorAll('[data-cs="cs-app-download"]'),
                                    csTerms: document.querySelectorAll('[data-cs="cs-terms"]'),
                                    csRegformPhoneFocus: document.querySelectorAll('[data-cs="cs-regform-phone-focus"]'),
                                    csLoginBtn: document.querySelectorAll('[data-cs="cs-login-btn"]')
                                };
                                null !== e.csHeaderLogo && e.csHeaderLogo.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_registration_logo_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csHeaderSignup && e.csHeaderSignup.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_registration_product_redirect_click",
                                            bonusType: U.bonusType
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.mainCtaButton && e.mainCtaButton.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_cta_buttons_click",
                                            bonusType: U.bonusType,
                                            ctaButtonType: U.ctaButtonType
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csRegIsPlayerAgree && e.csRegIsPlayerAgree.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_field_agreement_toggle_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csRegBonusActivate && e.csRegBonusActivate.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_field_bonus_toggle_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csRegBonusRules && e.csRegBonusRules.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_bonus_rules_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csAppDownload && e.csAppDownload.forEach(e => {
                                    e.addEventListener("click", () => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_download_app_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csTerms && e.csTerms.forEach(e => {
                                    e.addEventListener("click", e => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_terms_condition_link_click"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csRegformPhoneFocus && e.csRegformPhoneFocus.forEach(e => {
                                    e.addEventListener("click", e => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_registration_start"
                                        })
                                    }
                                    )
                                }
                                ),
                                null !== e.csLoginBtn && e.csLoginBtn.forEach(e => {
                                    e.addEventListener("click", e => {
                                        window.Analytics.pushEvent({
                                            pushEventName: "landing_registration_already_have_account",
                                            bonusType: U.bonusType
                                        })
                                    }
                                    )
                                }
                                )
                            }()
                        } catch (e) {
                            console.log("Error - ", e)
                        }
                }
                , 1e3)
            }
            , []),
            (0,
            i.jsxs)("div", {
                className: A()["main-wrapper"],
                children: [(0,
                i.jsx)(w, {
                    link: r.regUrl
                }), n, (0,
                i.jsx)("div", {
                    className: A()["main-wrapper__ref"],
                    ref: t
                }), (0,
                i.jsx)(k, {})]
            })
        }
        var S = t(7604)
          , p = t.n(S)
          , B = t(1402)
          , m = t.n(B)
          , L = t(4170)
          , f = t.n(L)
          , b = t(2843)
          , R = t.n(b);
        let G = e => {
            let {openModal: n} = e
              , [t,c] = (0,
            o.useState)(0)
              , [s,M] = (0,
            o.useState)(!1)
              , a = z()(m().spinner__wheel, m()["status-".concat(t)])
              , r = e => {
                let t = "looser";
                switch (e) {
                case 1:
                    t = "looser";
                    break;
                case 2:
                    t = "winner";
                    break;
                default:
                    t = ""
                }
                setTimeout( () => {
                    n(t),
                    M(!1)
                }
                , 1e3)
            }
            ;
            return (0,
            i.jsxs)("div", {
                className: m().spinner,
                children: [(0,
                i.jsx)("div", {
                    className: m().spinner__frame,
                    children: (0,
                    i.jsx)("img", {
                        src: R(),
                        alt: ""
                    })
                }), (0,
                i.jsx)("div", {
                    className: a,
                    children: (0,
                    i.jsx)("img", {
                        src: f(),
                        alt: ""
                    })
                }), (0,
                i.jsx)("button", {
                    className: m().spinner__button,
                    onClick: () => {
                        4 !== t && (M(!0),
                        c(e => e + 1),
                        setTimeout( () => {
                            c(e => (r(e),
                            e))
                        }
                        , 5e3))
                    }
                    ,
                    "aria-disabled": s,
                    "data-cs": "cs-cta-button"
                })]
            })
        }
        ;
        var Q = t(6370)
          , Y = t.n(Q)
          , v = t(5431)
          , F = t.n(v)
          , J = t(6221)
          , H = t.n(J)
          , q = t(5273)
          , V = t.n(q)
          , K = t(998)
          , Z = t.n(K)
          , P = t(7259)
          , W = t.n(P);
        let X = e => {
            let {modalStatus: n, closeModal: t} = e;
            return (0,
            o.useEffect)( () => {
                l(),
                N()
            }
            , []),
            (0,
            i.jsxs)("div", {
                className: Y()["modal-wrapper"],
                children: ["looser" === n && (0,
                i.jsxs)("div", {
                    className: z()(Y().modal, Y()["modal--looser"]),
                    children: [(0,
                    i.jsx)("button", {
                        className: Y()["modal__btn-close"],
                        onClick: t,
                        children: (0,
                        i.jsx)("img", {
                            src: F(),
                            alt: "close button"
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: Y()["modal__btn-main"],
                        children: (0,
                        i.jsxs)("button", {
                            onClick: t,
                            children: [(0,
                            i.jsx)("div", {
                                className: z()(Y()["modal__btn-main__bg"], Y()["modal__btn-main__bg--default"]),
                                children: (0,
                                i.jsx)("img", {
                                    src: H(),
                                    alt: ""
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: z()(Y()["modal__btn-main__bg"], Y()["modal__btn-main__bg--hover"]),
                                children: (0,
                                i.jsx)("img", {
                                    src: V(),
                                    alt: ""
                                })
                            })]
                        })
                    })]
                }), "winner" === n && (0,
                i.jsx)("div", {
                    className: z()(Y().modal, Y()["modal--winner"]),
                    children: (0,
                    i.jsx)("div", {
                        className: Y()["modal__btn-main"],
                        children: (0,
                        i.jsxs)("button", {
                            onClick: () => {
                                let e = new URL(window.location).searchParams;
                                window.Analytics && (e.append("clstrmid", window.Analytics.getCrossdomainId()),
                                window.Analytics.pushEvent({
                                    pushEventName: "landing_registration_product_redirect_click",
                                    bonusType: U.bonusType,
                                    ctaButtonType: U.ctaButtonType
                                })),
                                setTimeout( () => {
                                    window.location.href = "".concat(r.regUrl, "?").concat(e)
                                }
                                , 1e3)
                            }
                            ,
                            id: "submit-button",
                            children: [(0,
                            i.jsx)("div", {
                                className: z()(Y()["modal__btn-main__bg"], Y()["modal__btn-main__bg--default"]),
                                children: (0,
                                i.jsx)("img", {
                                    src: Z(),
                                    alt: ""
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: z()(Y()["modal__btn-main__bg"], Y()["modal__btn-main__bg--hover"]),
                                children: (0,
                                i.jsx)("img", {
                                    src: W(),
                                    alt: ""
                                })
                            })]
                        })
                    })
                })]
            })
        }
          , _ = () => {
            let[e,n] = (0,
            o.useState)("")
              , [t,c] = (0,
            o.useState)("2");
            return (0,
            i.jsxs)("main", {
                className: p().main,
                children: [(0,
                i.jsx)("div", {
                    className: p().main__article,
                    children: "Entretenimento perfeito em poucos cliques"
                }), (0,
                i.jsxs)("div", {
                    className: p().main__text,
                    children: [(0,
                    i.jsxs)("div", {
                        children: [(0,
                        i.jsxs)("h2", {
                            className: p().main__title,
                            children: ["GIRE A", (0,
                            i.jsx)("br", {}), "ROLETA", (0,
                            i.jsx)("br", {}), "E GANHE"]
                        }), (0,
                        i.jsx)("h3", {
                            className: p().main__subtitle,
                            children: "UM PRÊMIO ESPECIAL"
                        }), (0,
                        i.jsxs)("div", {
                            className: p().main__terms,
                            children: [(0,
                            i.jsxs)("p", {
                                children: ["TEM ", (0,
                                i.jsx)("span", {
                                    children: t
                                }), " CHANCES"]
                            }), (0,
                            i.jsx)("a", {
                                href: "".concat(r.termsLink),
                                "data-cs": "cs-terms",
                                children: "CONDIÇÕES ESPECIAIS"
                            })]
                        })]
                    }), (0,
                    i.jsx)("div", {
                        className: p().main__wheel,
                        children: (0,
                        i.jsx)(G, {
                            openModal: e => {
                                if ("looser" === e)
                                    c("1");
                                else {
                                    if ("winner" !== e)
                                        return;
                                    c("2")
                                }
                                n(e)
                            }
                        })
                    })]
                }), e && (0,
                i.jsx)(X, {
                    modalStatus: e,
                    closeModal: () => {
                        n(""),
                        document.querySelector("body").style.overflow = "auto"
                    }
                    ,
                    link: r.regUrl
                })]
            })
        }
        ;
        function $() {
            return (0,
            o.useEffect)( () => {
                M()
            }
            , []),
            (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(s(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: "BETBERRY | CASSINO"
                    }), (0,
                    i.jsx)("link", {
                        rel: "shortcut icon",
                        href: "/utils/images/favicon.ico"
                    }), (0,
                    i.jsx)("script", {
                        defer: !0,
                        src: "/mtapi/js/build/framework.min.js",
                        type: "text/javascript"
                    }), (0,
                    i.jsx)("script", {
                        defer: !0,
                        src: "/lib/analytics.min.js",
                        type: "module"
                    })]
                }), (0,
                i.jsx)(h, {
                    children: (0,
                    i.jsx)(_, {})
                })]
            })
        }
    },
    4074: function(e) {
        e.exports = {
            footer: "Footer_footer__OQpsI",
            footer__left: "Footer_footer__left___dKEA",
            "footer__left-copyright": "Footer_footer__left-copyright__fXifI",
            footer__center: "Footer_footer__center__IOlC8",
            "footer__center-link": "Footer_footer__center-link__pExmv",
            "footer__center-email": "Footer_footer__center-email__53wsX",
            footer__right: "Footer_footer__right__jTVSy",
            footer__description: "Footer_footer__description__x8Skz"
        }
    },
    8440: function(e) {
        e.exports = {
            header: "Header_header__1RJ5C",
            header__logo: "Header_header__logo__W3BBN",
            "jgb-button": "Header_jgb-button__drlQd",
            "jgb-button__bg": "Header_jgb-button__bg__m92u2",
            "jgb-button__bg--default": "Header_jgb-button__bg--default__4GQCX",
            "jgb-button__bg--hover": "Header_jgb-button__bg--hover__PdDbF"
        }
    },
    7604: function(e) {
        e.exports = {
            main: "MainSection_main__SW4mE",
            main__article: "MainSection_main__article__pByeu",
            main__title: "MainSection_main__title__FAUMC",
            main__subtitle: "MainSection_main__subtitle__xLnLr",
            main__terms: "MainSection_main__terms__qQsAB",
            main__wheel: "MainSection_main__wheel__QWRhb"
        }
    },
    6370: function(e) {
        e.exports = {
            "modal-wrapper": "Modal_modal-wrapper___ZlFK",
            modal: "Modal_modal__tv1jq",
            "modal--looser": "Modal_modal--looser__TGmFO",
            "modal--winner": "Modal_modal--winner__O8rt8",
            "modal__btn-main": "Modal_modal__btn-main__GbOSJ",
            "modal__btn-close": "Modal_modal__btn-close__RXqmk",
            "modal__btn-main__bg": "Modal_modal__btn-main__bg__kcodP"
        }
    },
    5075: function(e) {
        e.exports = {
            "main-wrapper": "PageLayout_main-wrapper__0YdTr"
        }
    },
    1402: function(e) {
        e.exports = {
            spinner: "Spinner_spinner__mgqnO",
            spinner__frame: "Spinner_spinner__frame__HJ6yc",
            spinner__wheel: "Spinner_spinner__wheel__JBVfO",
            "status-1": "Spinner_status-1__NPH2_",
            "spin-1": "Spinner_spin-1__fuMDy",
            "status-2": "Spinner_status-2__8cnCQ",
            "spin-2": "Spinner_spin-2__5euEN",
            spinner__button: "Spinner_spinner__button__6Dfu2",
            scale: "Spinner_scale__1vrFf"
        }
    },
    7663: function(e) {
        !function() {
            var n = {
                229: function(e) {
                    var n, t, i, o = e.exports = {};
                    function c() {
                        throw Error("setTimeout has not been defined")
                    }
                    function s() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function M(e) {
                        if (n === setTimeout)
                            return setTimeout(e, 0);
                        if ((n === c || !n) && setTimeout)
                            return n = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return n(e, 0)
                        } catch (t) {
                            try {
                                return n.call(null, e, 0)
                            } catch (t) {
                                return n.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            n = "function" == typeof setTimeout ? setTimeout : c
                        } catch (e) {
                            n = c
                        }
                        try {
                            t = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (e) {
                            t = s
                        }
                    }();
                    var a = []
                      , r = !1
                      , g = -1;
                    function A() {
                        r && i && (r = !1,
                        i.length ? a = i.concat(a) : g = -1,
                        a.length && l())
                    }
                    function l() {
                        if (!r) {
                            var e = M(A);
                            r = !0;
                            for (var n = a.length; n; ) {
                                for (i = a,
                                a = []; ++g < n; )
                                    i && i[g].run();
                                g = -1,
                                n = a.length
                            }
                            i = null,
                            r = !1,
                            function(e) {
                                if (t === clearTimeout)
                                    return clearTimeout(e);
                                if ((t === s || !t) && clearTimeout)
                                    return t = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    t(e)
                                } catch (n) {
                                    try {
                                        return t.call(null, e)
                                    } catch (n) {
                                        return t.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function N(e, n) {
                        this.fun = e,
                        this.array = n
                    }
                    function j() {}
                    o.nextTick = function(e) {
                        var n = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var t = 1; t < arguments.length; t++)
                                n[t - 1] = arguments[t];
                        a.push(new N(e,n)),
                        1 !== a.length || r || M(l)
                    }
                    ,
                    N.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    o.title = "browser",
                    o.browser = !0,
                    o.env = {},
                    o.argv = [],
                    o.version = "",
                    o.versions = {},
                    o.on = j,
                    o.addListener = j,
                    o.once = j,
                    o.off = j,
                    o.removeListener = j,
                    o.removeAllListeners = j,
                    o.emit = j,
                    o.prependListener = j,
                    o.prependOnceListener = j,
                    o.listeners = function(e) {
                        return []
                    }
                    ,
                    o.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    o.cwd = function() {
                        return "/"
                    }
                    ,
                    o.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    o.umask = function() {
                        return 0
                    }
                }
            }
              , t = {};
            function i(e) {
                var o = t[e];
                if (void 0 !== o)
                    return o.exports;
                var c = t[e] = {
                    exports: {}
                }
                  , s = !0;
                try {
                    n[e](c, c.exports, i),
                    s = !1
                } finally {
                    s && delete t[e]
                }
                return c.exports
            }
            i.ab = "//";
            var o = i(229);
            e.exports = o
        }()
    },
    9008: function(e, n, t) {
        e.exports = t(7828)
    },
    1242: function(e) {
        e.exports = "./media/REGISTER.png";
    },
    2018: function(e) {
        e.exports = "./images/btn-hover1-f3815dff41c218c8211a70e47831273a.png"
    },
    7259: function(e) {
        e.exports = "./media/MAIS-PREMIOS.png"
    },
    998: function(e) {
        e.exports = "./media/MAIS-PREMIOS.png";
    },
    5431: function(e) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACKBAMAAABoa6RpAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMAgM8QIFC/QDCQYL7wqg0AAAEESURBVGje7dcxToJREEXhIWiMVljTaUlDdAMugSW5pd/CZjZHQnNCgGJyOrinnOpr7ktepZRSSimllFK6354PRfR2qFG7v/2V63r3X5Neuj+vnL+6f2vQUzecAtP9M+JsT5xLzFKjVifOJWZTZThgFAeM4YBRHDCGA0ZxwBgOGMUBYzhgFAeM4YBRHDCKA8ZxwCgOGMX5BmM4H2AMp8EYDhjRq8SwJoY+j2kzdIWBozDvcARmYegGs+HdMRiG7jAFx2DgKAwcg4GjMHAUBo7BGA4YxQFjOGAUB4zhgFEcMIYDRnPAnHPGPxgwtJ3/YMDQavyDWW6dR633t84ppZRSSunROwLNM8B16lacmAAAAABJRU5ErkJggg=="
    },
    2843: function(e) {
        e.exports = "./images/frame-abe97640b8971c5c51433e7915a6e72b.webp"
    },
    6788: function(e) {
        e.exports = "./media/betberry.png";
    },
    5273: function(e) {
        e.exports = "./media/DENUEVOEE.png"
    },
    6221: function(e) {
        e.exports = "./media/DENUEVOEE.png";
    },
    4170: function(e) {
        e.exports = "./images/wheel-9b0162dea68a4d25973066e5d42dea25.png"
    },
    3967: function(e, n) {
        var t;
        !function() {
            "use strict";
            var i = {}.hasOwnProperty;
            function o() {
                for (var e = "", n = 0; n < arguments.length; n++) {
                    var t = arguments[n];
                    t && (e = c(e, function(e) {
                        if ("string" == typeof e || "number" == typeof e)
                            return e;
                        if ("object" != typeof e)
                            return "";
                        if (Array.isArray(e))
                            return o.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                            return e.toString();
                        var n = "";
                        for (var t in e)
                            i.call(e, t) && e[t] && (n = c(n, t));
                        return n
                    }(t)))
                }
                return e
            }
            function c(e, n) {
                return n ? e ? e + " " + n : e + n : e
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 !== (t = (function() {
                return o
            }
            ).apply(n, [])) && (e.exports = t)
        }()
    }
}, function(e) {
    e.O(0, [888, 774, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
