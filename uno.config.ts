import { defineConfig, presetWind3 } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import extractorPug from '@unocss/extractor-pug'
import { blackA,  whiteA } from '@radix-ui/colors'

export default defineConfig({
  presets: [
    presetWind3( ),
  ],
  transformers: [
    transformerDirectives(),
  ],
  extractors: [
    extractorPug(),
  ],
  theme: {
    container:{
      center:true,
      padding:'1.5em'
    },
    colors: {
      blackA,
      whiteA,
      takane:'#a6126a',
      takane33:'var(--color-takane33)',
    } ,
    fontFamily: {
      'archivo': 'Archivo Black, sans-serif',
      'noto-emoji':'Noto Color, Emoji sans-serif'
    },
    animation: {
      keyframes: {
        'spin': '{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
        'scale-in': '{ from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }',
        'scale-out': '{ from { opacity: 1; transform: scale(1) } to { opacity: 0; transform: scale(0.95) } }',
      },
      durations: {
        'spin': '4000ms',
        'scale-in': '100ms',
        'scale-out': '100ms',
      },
      timingFns: {
        'spin': 'linear',
        'scale-in': 'ease-in-out',
        'scale-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      counts: {
        'spin': 'infinite',
        'scale-in': "1",
      },
    }
  }
})