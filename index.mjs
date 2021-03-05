import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';

esbuild
  .build({
    entryPoints: ['src/input.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/index.js',
    plugins: [
      babel({
        presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
        targets: { ie: '11', chrome: '39' },
        compact: true,
        inputSourceMap: true,
        sourceMap: true,
        sourceType: 'unambiguous'
      })
    ]
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
