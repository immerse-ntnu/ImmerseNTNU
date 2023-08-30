const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksFilter("fromDate", function(date) {
    return DateTime.fromObject(date).toFormat('d/M/yyyy');
    });

  eleventyConfig.addNunjucksFilter("fromDateTime", function(date) {
    console.log(date);
    return DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm').toFormat('d/M/yyyy HH:mm');
    });

  eleventyConfig.addNunjucksFilter("latestDate", function(collection) {
    return collection.sort((a, b) => {
      return DateTime.fromObject(b.date) - DateTime.fromObject(a.date);
    })[0];  // return the first item, which is the latest
  });
  eleventyConfig.addNunjucksFilter("latestDateTime", function(collection) {
    return collection.sort((a, b) => {
      return Date(b.datetime) - Date(a.datetime);  // sort from newest to oldest
    })[0];  // return the first item, which is the latest
  });
   eleventyConfig.addCollection("events", function(collectionApi) {
      return collectionApi.getFilteredByGlob("Immerse/events/*.md").sort(function(a, b) {
         return Date(b.date) - Date(a.date); 
      });
   });
   eleventyConfig.addCollection("news", function(collectionApi) {
      return collectionApi.getFilteredByGlob("Immerse/news/*.md").sort(function(a, b) {
         return Date(b.date) - Date(a.date); 
      });
   });
eleventyConfig.addPassthroughCopy({ "Immerse/images/": "img/Immerse/" });

eleventyConfig.addPassthroughCopy("style");
eleventyConfig.addPassthroughCopy("scripts");
eleventyConfig.addPassthroughCopy("img");
eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      output: "_site"
    }
  };
};
