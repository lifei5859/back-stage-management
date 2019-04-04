const isProd = process.env.NODE_ENV === "production";
const plugins = {
	autoprefixer: {}
};
if (isProd) {
	plugins.cssnano = {};
}
module.exports = { plugins };