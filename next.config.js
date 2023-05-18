module.exports = {
    trailingSlash: true,
    async redirects(){
        return [{
            source: '/about',  // sempre que eu acessar /about, o destino é a home
            destination: '/', 
            permanent: true 
        }]
    }
}