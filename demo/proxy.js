const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    // app.use(proxy('/api',{
    //     target:'http://10.12.179.128/',
    //     changeOrigin:true,
    //     secure:false
    // }));
    // app.use(proxy('/api/*',{
    //     target:'http://10.12.179.128/',
    //     changeOrigin:true,
    //     secure:false
    // }));
    app.use(proxy('/api',{
        target:'https://fk.wanzhuan7h.com/',
        changeOrigin:true,
        secure:false
    }));
    app.use(proxy('/api/*',{
        target:'https://fk.wanzhuan7h.com/',
        changeOrigin:true,
        secure:false
    }));
    // app.use(proxy('/static/chart/*',{
    //     target:'http://127.0.0.1:82',
    //     changeOrigin:true
    // }));
};