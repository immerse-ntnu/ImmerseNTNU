const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {

  eleventyConfig.addNunjucksFilter("fromDate", (date) => 
     DateTime.fromObject(date).toFormat('d/M/yyyy')
  );

  eleventyConfig.addNunjucksFilter("fromDateTime", (date) => 
    DateTime.fromFormat(date, 'yyyy-MM-dd HH:mm').toFormat('d/M/yyyy HH:mm')
  );

  eleventyConfig.addNunjucksFilter("latestDate", (collection) =>
    collection.sort((a, b) => 
       DateTime.fromObject(b.date) - DateTime.fromObject(a.date)
    )[0]  // return the first item, which is the latest
  );
  eleventyConfig.addNunjucksFilter("latestDateTime", (collection) =>  
    collection.sort((a, b) => 
      Date(b.datetime) - Date(a.datetime)  // sort from newest to oldest
   )[0]  // return the first item, which is the latest
  );
  eleventyConfig.addCollection("events", (collectionApi) =>
    collectionApi.getFilteredByGlob("Immerse/events/*.md").sort((a, b) =>
        Date(b.date) - Date(a.date) 
    )
  );
  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi.getFilteredByGlob("Immerse/news/*.md").sort((a, b) => 
      Date(b.date) - Date(a.date)
    )
  );
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
