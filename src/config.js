export const config = {

  theme: {

    // global scale
    scale: 30, // range: min:0|max:100

    // accent colours
    // not used for much yet, this should be developed as the project grows
    accent: { hsl: [198, 20, 10] },

    // text colours
    // not used for much yet, this should be developed as the project grows
    text: { hsl: [0, 0, 0] },

    // text font
    // works with Google Fonts: https://fonts.google.com/
    // enter the full name of a font as it is displayed on Google Fonts
    font: 'Lilita One',

    // the speed of the different transitions
    transition: { speed: { xfast: 10, fast: 20, medium: 30, slow: 40, xslow: 50 } }, // range: min:0|max:*

    // the bounce transition easing bezier curve
    easing: { bounce: [0.8, 0.5, 0.2, 2] }, // range: min:0|max:*

    bookmark: {
      background: {

        // bookmark left side panel background blur amount
        blur: 14, // range: min:0|max:*

        // bookmark left side panel background colour
        color: { hsla: [198, 20, 10, 0.2] }
      }
    }

  },

  bookmark: {

    // open the bookmarks in a new tab: true or false
    newTab: false, // boolean: true|false

    // the bookmark panel and group name position and direction the bookmarks flow
    direction: 'left', // string: left|right

    // bookmark icons show when a bookmark group gains focus or on cursor hover
    // if set to true bookmarks are always shown
    alwaysVisible: false, // boolean: true|false

    // bookmark left side panel size
    // this area contains bookmark group name, description and open all button
    panel: 30, // range: min:0|max:100

    // bookmark size
    scale: 30, // range: min:0|max:*

    // bookmark icon size the bookmark group is in focus
    iconScaleVisible: 1, // range: min:*|max:*

    // bookmark icon size when the bookmark group is not in focus
    // if alwaysVisible is set to true this setting will not have an effect
    iconScaleHidden: 0, // range: min:*|max:*

    // bookmark icon size when the bookmark icon is hovered (:hover)
    iconScaleHover: 1.7, // range: min:*|max:*

    // bookmark icon size when the bookmark icon is clicked (:active)
    iconScaleActive: 1, // range: min:*|max:*

    // spacing between bookmarks
    iconSpacing: 15, // range: min:0|max:*

    // spacing between bookmark group rows
    groupSpacing: 30, // range: min:0|max:*

    // spacing between bookmark group name, description and open all button
    tabSpacing: 30, // range: min:0|max:*

    // bookmark grouping
    // each object in this array definesa group
    // add as many objects as needed
    // each group contains any number of bookmarks
    group: [{

      // bookmark group name
      name: 'Daily',

      // bookmark group description
      description: 'Daily apps',

      // bookmark colours
      color: {
        primary: { hsl: [0, 0, 85] }, // colour for group name and icons
        secondary: { hsl: [110, 46, 65] } // colour for group description and the open all button
      },

      list: [

        // icon eg:
        // use a Font Awesome class name found on https://fontawesome.com/icons
        // { icon: 'fa-solid fa-envelope', url: 'https://website.com/' },

        // letter eg:
        // { letter: 'ABC', url: 'https://website.com/' },

        // image eg:
        // { image: 'https://example.com/image.jpg', url: 'https://website.com/' },

        { icon: 'fa-brands fa-youtube', url: 'https://youtube.com/' },
        { icon: 'fa-solid fa-envelope', url: 'https://mail.google.com/' },
        { icon: 'fa-solid fa-download', url: 'https://torrentgalaxy.to/' },
        { icon: 'fa-brands fa-google-drive', url: 'https://drive.google.com/' },
        { icon: 'fa-solid fa-calendar-day', url: 'https://calendar.google.com/calendar/' },
      ]

    }, {
      name: 'Keebs',
      description: 'Wallet = Zero',
      color: { primary: { hsl: [0, 0, 85] }, secondary: { hsl: [288, 51, 67] } },
      list: [
        { letter: 'MB', url: 'https://mechboards.co.uk/' },
        { letter: 'PT', url: 'https://prototypist.net/' },
        { letter: 'K4A', url: 'https://keebsforall.com/' },
        { letter: 'GBs', url: 'https://www.mechgroupbuys.com/keyboards' },
        { letter: 'KBD', url: 'https://kbd.news/' },
      ]
    }, {
      name: 'Shops',
      description: 'Wallet < Zero',
      color: { primary: { hsl: [0, 0, 85] }, secondary: { hsl: [45, 70, 66] } },
      list: [
        { icon: 'fa-brands fa-amazon', url: 'https://www.amazon.co.uk/' },
        { icon: 'fa-brands fa-ebay', url: 'https://www.ebay.co.uk/' },
        { icon: 'fa-solid fa-cart-shopping', url: 'https://vi.aliexpress.com/' },
        { icon: 'fa-brands fa-twitch', url: 'https://thepihut.com/' },
        { letter: 'T', url: 'https://www.tindie.com/' },
      ]
    }, {
      name: 'Dev',
      description: 'Docs, code & specs',
      color: { primary: { hsl: [0, 0, 85] }, secondary: { hsl: [0, 68, 68] } },
      list: [
        { icon: 'fa-brands fa-github', url: 'https://github.com/' },
        { icon: 'fa-solid fa-code', url: 'https://devdocs.io/' },
        { icon: 'fa-brands fa-stack-overflow', url: 'https://stackoverflow.com/' },
        { icon: 'fa-brands fa-codepen', url: 'https://codepen.io/' },
        { icon: 'fa-brands fa-figma', url: 'https://figma.com/' },
        { icon: 'fa-brands fa-css3-alt', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/' },
      ]
    }]

  },

  background: {

    // the background is made of three layers
    // colour at the bottom
    // an image above the colour layer
    // a gradient above the image layer

    // background layer 1 (bottom)
    // colour defined with HSL: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
    color: {
      hsl: [198, 20, 10]
    },

    // background layer 2 (middle)
    image: {

      // url: 'https://i.redd.it/niecy4jmlmh81.png', // background image url
      url: 'glen_coe_custom.png',

      // opacity of background image
      opacity: 1, // range: min:0|max:1

      // grayscale of background image
      grayscale: 0.1, // range: min:0|max:1

      // blur of background image
      blur: 0 // range: min:0|max:*

    },

    // background layer 3 (top)
    gradient: {

      // gradient angle
      degree: 90, // range: min:0|max:360

      color: [
        // gradient colours
        // each object is a single colour and position in the gradient layer
        // the position value defines the location of the colour stop
        // each stop should not be a lower value than the previous stop
        // eg: {..., position: 40}, {..., position: 60}, {..., position: 90},
        // add as many objects as needed
        { hsla: [220, 80, 18, 0.6], position: 30 /* range: min:0|max:100 */ },
        { hsla: [240, 85, 25, 0.4], position: 40 },
        { hsla: [280, 40, 25, 0.1], position: 100 }
      ]

    }

  }

};
