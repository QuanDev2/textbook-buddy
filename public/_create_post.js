(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['create_post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\r\n            <main class=\"main\">\r\n                <div class = \"create-post-container\">\r\n                    <h1 id=\"course-name\" class=\"course-name\"> BI 579 - Introduction to Cats</h1>\r\n                </div>\r\n                \r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-title\" class=\"create-input-label\">Title</label>\r\n                        <div class=\"create-post-element\">\r\n                            <input type=\"text\" name=\"title-text\" id=\"title-text\" class=\"create-input\">\r\n                        </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-author\" class=\"create-input-label\">Author</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"text\" name=\"author-text\" id=\"author-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-condition\" class=\"create-input-label\">Condition</label>\r\n                    <div class=\"create-post-element\">\r\n                      <select id=\"create-condition\" class=\"create-input\" name=\"create-condition\">\r\n                        <option selected value=\"\"></option>\r\n                        <option>New</option>\r\n                        <option>Excellent</option>\r\n                        <option>Good</option>\r\n                        <option>Fair</option>\r\n                        <option>Poor</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n                                    \r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-price\" class=\"create-input-label\">Price</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"number\" name=\"price-text\" id=\"price-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-meet\" class=\"create-input-label\">Meetup Info</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"text\" name=\"meet-text\" id=\"meet-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-description\" class=\"create-input-label\">Description</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"text\" name=\"description-text\" id=\"description-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-email\" class=\"create-input-label\">Email</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"text\" name=\"description-text\" id=\"email-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-description\" class=\"create-input-label\">Phone</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"number\" name=\"phone-text\" id=\"phone-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-image\" class=\"create-input-label\">Image url</label>\r\n                    <div class=\"create-post-element\">\r\n                        <input type=\"text\" name=\"image-text\" id=\"image-text\" class=\"create-input\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class = \"create-post-container\">\r\n                    <label for=\"create-isbn\" class=\"create-input-label\">ISBN</label>\r\n                    <div class=\"create-post-element\">\r\n                        <label name=\"isbn-text\" id=\"isbn-text\" class=\"create-input\">"
    + container.escapeExpression(((helper = (helper = helpers.isbn || (depth0 != null ? depth0.isbn : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"isbn","hash":{},"data":data,"loc":{"start":{"line":83,"column":84},"end":{"line":83,"column":92}}}) : helper)))
    + "</label>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n                <div class = \"create-post-container\">\r\n                    <div class=\"create-input-footer\">\r\n                        <button type=\"button\" id=\"create-back\" class=\"btn primary-color\">Go Back</button>\r\n                        <button type=\"button\" id=\"create-accept\" class=\"btn primary-color\">Create</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </main>\r\n\r\n        </body>\r\n    </head>\r\n</html>";
},"useData":true});
})();