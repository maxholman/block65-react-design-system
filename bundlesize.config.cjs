/**
 * @type {import('@block65/bundlesize').Config}
 */
module.exports = {
  files: [
    {
      path: 'build/*.js',
      maxSize: '49 kB',
      compression: 'brotli',
    },
    {
      path: 'build/style.css',
      maxSize: '7 kB',
      compression: 'brotli',
    },
  ],
};
