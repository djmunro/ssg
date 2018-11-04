var Promise = require("bluebird");
var dir = require("node-dir");
const frontmatter = require("front-matter");
var hljs = require("highlight.js");
// Actual default values
var md = require("markdown-it")({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  }
});

const pug = require("pug");
const postRenderer = pug.compileFile("./templates/post.pug");
const fs = Promise.promisifyAll(require("fs"));
const path = require("path");
const outdir = "./out";
// import { l } from "./util";

/**
 * @param {String} root path
 * @param {Object} options see: https://www.npmjs.com/package/node-dir
 * @return {Promise<String[]>}
 */
function getFiles(root, options) {
  let contents = [];
  return new Promise((resolve, reject) => {
    dir.readFiles(
      root,
      options,
      function(err, content, next) {
        if (err) throw err;
        contents.push(content);
        next();
      },
      function(err, filenames) {
        if (err) return reject(err);
        // l("finished reading files");
        resolve(contents);
      }
    );
  });
}

function convertMarkdown(content) {
  return md.render(content);
}

function renderPost(post) {
  return postRenderer(post);
}

function flattenPost(data, content) {
  return Object.assign({}, data, { content: content });
}

function writeHTML(dirPath, content) {
  return fs.writeFileAsync(path.join(outdir, dirPath), content);
}

getFiles("_posts", { match: /.*\.md/ })
  .map(frontmatter) // => { data, content }
  .map(({ attributes, body, frontmatter }) => {
    // console.log(attributes.title); // "The Hotdog Dilemma"
    // console.log(attributes.author); // "Sequester McDaniels"
    // console.log(body); // "*Are hotdogs sandwiches*? There are [many people](https: ..."
    markdown = convertMarkdown(body);
    flattenedPost = flattenPost(attributes, markdown);
    post = renderPost(flattenedPost);
    writeHTML(attributes.path, post);
  });
