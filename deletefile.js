var fs = require("fs");

/**
 * 删除指定文件夹中匹配文件
 */
console.log("准备删除文件！");
fs.readdir("locales", function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        if (file.lastIndexOf('.min.min.js') > 0) {
            fs.unlink('locales/' + file, function(err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('删除文件' + file);
                }
            });
        }
    });
});
