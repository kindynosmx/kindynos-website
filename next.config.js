/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require("@sentry/nextjs");

const plugins = [];

const config = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["imagedelivery.net"],
		unoptimized: true,
	},
	reactStrictMode: true,
	sentry: {
		hideSourceMaps: true,
	},
	swcMinify: true,
};

const moduleExports = () => plugins.reduce((acc, next) => next(acc), config);

const sentryWebpackPluginOptions = {
	dryRun: true,
	silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
