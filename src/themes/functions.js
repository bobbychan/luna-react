const colorNames = require('./colorNames');
const themeDefaults = require('./themeDefaults');

const { colord, getFormat, extend } = require('colord');
const mixPlugin = require('colord/plugins/mix');
const namesPlugin = require('colord/plugins/names');
const lchPlugin = require('colord/plugins/lch');
const hwbPlugin = require('colord/plugins/hwb');
const labPlugin = require('colord/plugins/lab');
const xyzPlugin = require('colord/plugins/xyz');
const themes = require('./themes');

extend([mixPlugin, namesPlugin, lchPlugin, hwbPlugin, labPlugin, xyzPlugin]);

module.exports = {
  changeColorValuesToObject: function (input) {
    const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat);
    return { h, s, l, a: 1 };
  },

  turnColorValuesToString: function (input) {
    const [h, s, l] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(parseFloat);
    return `${h} ${s}% ${l}%`;
  },

  generateForegroundColorFrom: function (input, percentage = 0.8) {
    const str = colord(input)
      .mix(colord(input).isDark() ? 'white' : 'black', percentage)
      .toHslString();
    return this.turnColorValuesToString(str);
  },

  generateDarkenColorFrom: function (input, percentage = 0.07) {
    const str = colord(input).darken(percentage).toHslString();
    return this.turnColorValuesToString(str);
  },

  convertColorFormat: function (input, colorFunction = 'hsl') {
    if (typeof input !== 'object' || input === null) {
      return input;
    }

    const resultObj = {};

    Object.entries(input).forEach(([rule, value]) => {
      if (colorNames.hasOwnProperty(rule)) {
        const hslArray = colord(value).toHsl();
        // resultObj[
        //   colorNames[rule]
        // ] = `${hslArray.h} ${hslArray.s}% ${hslArray.l}%`;
        resultObj[rule] = value;
      } else {
        resultObj[rule] = value;
      }

      // if (getFormat("lch(" + value + ")") === "lch") {
      //   resultObj[rule] = value
      //   if (colorFunction === "hsl") {
      //     let arr = colord("lch(" + value + ")").toHsl()
      //     resultObj[rule] = arr.h + " " + arr.s + "% " + arr.l + "%"
      //   }
      // }

      // auto generate focus colors
      if (!Object.hasOwn(input, 'primary-focus')) {
        resultObj['--luna-primary-focus'] = this.generateDarkenColorFrom(
          input['primary'],
        );
      }
      if (!Object.hasOwn(input, 'secondary-focus')) {
        resultObj['--luna-secondary-focus'] = this.generateDarkenColorFrom(
          input['secondary'],
        );
      }
      if (!Object.hasOwn(input, 'accent-focus')) {
        resultObj['--luna-accent-focus'] = this.generateDarkenColorFrom(
          input['accent'],
        );
      }
      if (!Object.hasOwn(input, 'neutral-focus')) {
        resultObj['--luna-neutral-focus'] = this.generateDarkenColorFrom(
          input['neutral'],
        );
      }

      // auto generate base colors
      if (!Object.hasOwn(input, 'base-100')) {
        resultObj['--luna-base-100'] = '100 0 0';
      }
      if (!Object.hasOwn(input, 'base-200')) {
        resultObj['--luna-base-200'] = this.generateDarkenColorFrom(
          input['base-100'],
        );
      }
      if (!Object.hasOwn(input, 'base-300')) {
        if (Object.hasOwn(input, 'base-200')) {
          resultObj['--luna-base-300'] = this.generateDarkenColorFrom(
            input['base-200'],
          );
        } else {
          resultObj['--luna-base-300'] = this.generateDarkenColorFrom(
            input['base-100'],
            0.14,
          );
        }
      }

      // auto generate state colors

      if (!Object.hasOwn(input, 'info')) {
        resultObj['--luna-info'] = 198 + ' ' + 93 + '%' + ' ' + 60 + '%';
      }
      if (!Object.hasOwn(input, 'success')) {
        resultObj['--luna-success'] = 158 + ' ' + 64 + '%' + ' ' + 52 + '%';
      }
      if (!Object.hasOwn(input, 'warning')) {
        resultObj['--luna-warning'] = 43 + ' ' + 96 + '%' + ' ' + 56 + '%';
      }
      if (!Object.hasOwn(input, 'error')) {
        resultObj['--luna-error'] = 0 + ' ' + 91 + '%' + ' ' + 71 + '%';
      }

      // auto generate content colors
      if (!Object.hasOwn(input, 'base-content')) {
        resultObj['--luna-base-content'] = this.generateForegroundColorFrom(
          input['base-100'],
        );
      }
      if (!Object.hasOwn(input, 'primary-content')) {
        resultObj['--luna-primary-content'] = this.generateForegroundColorFrom(
          input['primary'],
        );
      }
      if (!Object.hasOwn(input, 'secondary-content')) {
        resultObj['--luna-secondary-content'] =
          this.generateForegroundColorFrom(input['secondary']);
      }
      if (!Object.hasOwn(input, 'accent-content')) {
        resultObj['--luna-accent-content'] = this.generateForegroundColorFrom(
          input['accent'],
        );
      }
      if (!Object.hasOwn(input, 'neutral-content')) {
        resultObj['--luna-neutral-content'] = this.generateForegroundColorFrom(
          input['neutral'],
        );
      }
      if (!Object.hasOwn(input, 'info-content')) {
        if (Object.hasOwn(input, 'info')) {
          resultObj['--luna-info-content'] = this.generateForegroundColorFrom(
            input['info'],
          );
        } else {
          resultObj['--luna-info-content'] =
            198 + ' ' + 100 + '%' + ' ' + 12 + '%';
        }
      }
      if (!Object.hasOwn(input, 'success-content')) {
        if (Object.hasOwn(input, 'success')) {
          resultObj['--luna-success-content'] =
            this.generateForegroundColorFrom(input['success']);
        } else {
          resultObj['--luna-success-content'] =
            158 + ' ' + 100 + '%' + ' ' + 10 + '%';
        }
      }
      if (!Object.hasOwn(input, 'warning-content')) {
        if (Object.hasOwn(input, 'warning')) {
          resultObj['--luna-warning-content'] =
            this.generateForegroundColorFrom(input['warning']);
        } else {
          resultObj['--luna-warning-content'] =
            43 + ' ' + 100 + '%' + ' ' + 11 + '%';
        }
      }
      if (!Object.hasOwn(input, 'error-content')) {
        if (Object.hasOwn(input, 'error')) {
          resultObj['--luna-error-content'] = this.generateForegroundColorFrom(
            input['error'],
          );
        } else {
          resultObj['--luna-error-content'] =
            0 + ' ' + 100 + '%' + ' ' + 14 + '%';
        }
      }

      // add css variables if not exist
      Object.entries(themeDefaults.variables).forEach((item) => {
        const [variable, value] = item;
        if (!Object.hasOwn(input, variable)) {
          resultObj[variable] = value;
        }
      });

      // add other custom styles
      if (!colorNames.hasOwnProperty(rule)) {
        resultObj[rule] = value;
      }
    });

    return resultObj;
  },

  injectThemes: function (colorFunction = 'hsl') {
    const includedThemesObj = {};
    // includedThemesObj["@supports (not(color: lch(0 0 0)))"] = {}
    // add default themes
    Object.entries(themes).forEach(([theme, value]) => {
      if (colorFunction === 'lch') {
        includedThemesObj[theme] = this.convertColorFormat(value);
      }
      if (colorFunction === 'hsl') {
        includedThemesObj[theme] = this.convertColorFormat(value, 'hsl');
      }
    });

    // add custom themes
    // if (Array.isArray(config('daisyui.themes'))) {
    //   config('daisyui.themes').forEach((item) => {
    //     if (typeof item === 'object' && item !== null) {
    //       Object.entries(item).forEach(
    //         ([customThemeName, customThemevalue]) => {
    //           includedThemesObj['[data-theme=' + customThemeName + ']'] =
    //             this.convertColorFormat(customThemevalue);
    //         },
    //       );
    //     }
    //   });
    // }

    const themeOrder = ['light', 'dark'];

    // inject themes in order
    const themesToInject = {};
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        themesToInject[':root'] =
          includedThemesObj['[data-theme=' + themeName + ']'];
      } else if (index === 1) {
        // auto dark
        if (themeOrder[0] !== 'dark' && themeOrder.includes('dark')) {
          themesToInject['@media (prefers-color-scheme: dark)'] = {
            [':root']: includedThemesObj['[data-theme=dark]'],
          };
        }
        // theme 0 with name
        themesToInject['[data-theme=' + themeOrder[0] + ']'] =
          includedThemesObj['[data-theme=' + themeOrder[0] + ']'];
        // theme 1 with name
        themesToInject['[data-theme=' + themeOrder[1] + ']'] =
          includedThemesObj['[data-theme=' + themeOrder[1] + ']'];
      } else {
        themesToInject['[data-theme=' + themeName + ']'] =
          includedThemesObj['[data-theme=' + themeName + ']'];
      }
    });
    // if (colorFunction === 'lch') {
    //   addBase({ '@supports (color: lch(0 0 0))': themesToInject });
    // }
    // if (colorFunction === 'hsl') {
    //   addBase(themesToInject);
    // }

    console.log(includedThemesObj, 'includedThemesObj');
    console.log(themeOrder, 'themeOrder');

    return {
      includedThemesObj,
      themeOrder,
    };
  },
};
