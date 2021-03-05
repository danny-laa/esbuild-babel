import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';

esbuild
  .build({
    entryPoints: ['src/input.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/output.js',
    plugins: [
      babel({
        filter: /.*/,
        namespace: '',    
        config: {
          presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
          targets: { ie: '11' },
        }
      })
    ]
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
