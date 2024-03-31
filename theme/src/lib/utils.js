// a function to return only unique values
export const unique = (val, index, self) => {
  return self.indexOf(val) === index;
};
//  /theme-folder or ''
export const slugPrefix = process.env.IS_GITHUB_PAGE
  ? "/" + process.env.THEME_FOLDER
  : "";
