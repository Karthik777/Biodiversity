// helper.js
Animals = new Meteor.Collection("animals");
SpeciesSuite = new Meteor.Collection('animalList');

var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream);
};

Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("thumbs", { transformWrite: createThumb }),
    new FS.Store.FileSystem("images"),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

Images.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return false;
  },
  remove: function () {
    return false;
  },
  download: function () {
    return true;
  }
});