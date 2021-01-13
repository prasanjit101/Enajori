
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/assets/app.scss";
            `
            }
        }
    },
};