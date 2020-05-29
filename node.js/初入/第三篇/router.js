let router = pathname => {
    if(pathname !== '/favicon.ico')console.log(JSON.stringify(pathname));
}
exports.router = router