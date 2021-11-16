const withMDX = require('@next/mdx')()

module.exports = withMDX({
  target: "serverless",
  images: {
    domains: ['i.imgur.com'],
  },
  webpack: (config) => {
    config.externals.push({
      sharp: "commonjs sharp",
    });

    return config;
  }

});
