$(function() {
  var post = {
    title: "Post Title",
    date: (new Date().toString()),
    body: "<p>lorem ipsum</p>",
    tags: ["test", "something", "hello"]
  };

  var post_template = Handlebars.compile($("#post_template").html());
  var tags_template = Handlebars.compile($("#tags_template").html());

  Handlebars.registerPartial("tags_template", $("#tags_template").html());



  var posts = [post];

  posts.push({
    title: "Post 2",
    date: "October 31, 1999",
    body: "<p>Something else</p>"
  });

 $("body").append(post_template({ posts: posts }));
})
