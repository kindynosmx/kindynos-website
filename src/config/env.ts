export const ENV = {
	NODE_ENV: process.env.NODE_ENV,
};

export const isProd = ENV.NODE_ENV === "production";
