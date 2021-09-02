import mousetrap from 'mousetrap'

const VueMousetrapPlugin = {
    install(app) {
        app.config.globalProperties.$mousetrap = mousetrap
    },
};

export default VueMousetrapPlugin;