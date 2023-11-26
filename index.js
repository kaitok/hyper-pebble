exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(70,69,68,.7)',
    cursorAccentColor: '#464544',
    foregroundColor: '#464544',
    backgroundColor: '#efeeec',
    selectionColor: 'rgba(203,200,192,.7)',
    borderColor: '#cbc8c0',
    fontWeightBold: 'normal',
    padding: '20px 25px',
    css: `
      ${config.css || ''}
      .tab_text {
        color: #464544;
      }
      .component_item.item_icon.item_cwd.item_clickable {
        color: #efeeec;
      }
    `,
    colors: {
      black: '#2E2E2E',
      red: '#E44036',
      green: '#78C478',
      yellow: '#F6F658',
      blue: '#4D64D4',
      magenta: '#E97EE9',
      cyan: '#78CCCC',
      white: '#AAAAAA',
      lightBlack: '#444444',
      lightRed: '#E26D6D',
      lightGreen: '#80D380',
      lightYellow: '#FCFCD1',
      lightBlue: '#A9C8F9',
      lightMagenta: '#E26DE2',
      lightCyan: '#80E5E5',
      lightWhite: '#D2D2D2',
      limeGreen: '#A4D1A4',
      lightCoral: '#E26D6D',
    },
  })
}
