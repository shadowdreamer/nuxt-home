import { defineConfig, presetWind3 } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import extractorPug from '@unocss/extractor-pug'
import { blackA, green, grass, mauve,whiteA } from '@radix-ui/colors'

export default defineConfig({
  presets: [
    presetWind3(),
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
      green,
      grass,
      mauve,
      whiteA,
      takane:'#a6126a',
      takane33:'var(--color-takane33)',
    } ,
    fontFamily: {
      'archivo': 'Archivo Black, sans-serif',
      'noto-emoji':'Noto Color, Emoji sans-serif'
    },
  }
  // ...UnoCSS options
})