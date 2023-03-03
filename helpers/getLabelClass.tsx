import classNames from "classnames";

export function getLabelClass(styles, label) {
  return classNames({
    [styles.js]: label.id === "js",
    [styles.html]: label.id === "html",
    [styles.css]: label.id === "css",
    [styles.react]: label.id === "react",
    [styles.typescript]: label.id === "typescript",
    [styles.nextjs]: label.id === "nextjs",
    [styles.wordpress]: label.id === "wordpress",
    [styles.php]: label.id === "php",
    [styles.moduleCss]: label.id === "cssmodule",
    [styles.sass]: label.id === "sass",
    [styles.styledComponents]: label.id === "styled",
    [styles.restapi]: label.id === "restapi",
  });
}
