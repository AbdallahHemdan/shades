/**
 *
 * @param {options} options: list of options for shadow effect
 *
 */
function shades(options) {
  let images = document.querySelectorAll('.shades');

  console.log(images);

  /**
   * Set of styles we are going to apply on our images
   */
  let imgPadding;
  let imgBoxShadow;

  /**
   * Define proper values for box shadow based on shadow type
   */

  let shadowType = options.shadowType;
  if (shadowType === 'hard') {
    imgBoxShadow = '0px';
  } else {
    imgBoxShadow = '15px';
  }

  if (options.padding) {
    imgPadding = options.padding;
  } else {
    imgPadding = '0px';
  }

  console.log('imgBoxShadow: ', imgBoxShadow);
  images.forEach(image => {
    image.style.padding = `${imgPadding}`;
    image.style.boxShadow = `10px 10px ${imgBoxShadow} 1px rgba(0, 0, 0, 0.52)`;
  });
}

modules.exports.shades = shades;
