const palette = require("./palette.ts");

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
module.exports = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * Shadow color, for elevations, modals, etc.
   */
  shadow: "rgba(0, 0, 0, 0.5)",
  /**
   * The main tinting color.
   */
  primary: palette.violetRed,

  /**
   * The secondary tinting color.
   */
  secondary: palette.blue,

  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.black,
  /**
   * The color for text with dark background color.
   */
  textDarkBg: palette.white,
  /**
   * Paragraph/description/subtitle text. Lighter than title.
   */
  textDim: palette.lightGrey,
  /**
   * The color for blue touchable text
   */
  textBlueTouchable: palette.dodgerBlue,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Input Text
   */
  inputText: palette.gray,

  /**
   * Input background color
   */
  inputBg: palette.gallery,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,

  /**
   * Clickable text color
   */
  clickableText: palette.pelorous
};
