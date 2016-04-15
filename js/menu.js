(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['menu.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- this is menuToggle made with a checkbox hack, we have to change this later! -->\n<input type=\"checkbox\" id=\"menuToggle\" name=\"\" value=\"\"></input>\n\n<!-- this is the menu template, this should be dynamic later -->\n<div class=\"c-menu\">\n	<nav class=\"c-menu__items\">\n		<ul class=\"c-menu__nav-pages\">\n			<li class=\"c-menu__link\">\n				<a href=\"index.html\">"
    + alias4(((helper = (helper = helpers["1"] || (depth0 != null ? depth0["1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"1","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"image.html\">"
    + alias4(((helper = (helper = helpers["2"] || (depth0 != null ? depth0["2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"2","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"form.html\">"
    + alias4(((helper = (helper = helpers["3"] || (depth0 != null ? depth0["3"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"3","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"to-do-list.html\">"
    + alias4(((helper = (helper = helpers["4"] || (depth0 != null ? depth0["4"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"4","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"code-clinic.html\">"
    + alias4(((helper = (helper = helpers["5"] || (depth0 != null ? depth0["5"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"5","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"ajax.html\">"
    + alias4(((helper = (helper = helpers["6"] || (depth0 != null ? depth0["6"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"6","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n			<li class=\"c-menu__link\">\n				<a href=\"weatherApp.html\">"
    + alias4(((helper = (helper = helpers["7"] || (depth0 != null ? depth0["7"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"7","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n		</ul>\n\n		<ul class=\"c-menu__contact\">\n			<li class=\"c-menu__link\">\n				<span>Victor Lee @ Peakfijn</span>\n				<span>Keizersgracht 536</span>\n				<span>Tel: 0681160090</span>\n			</li>\n		</ul>\n	</nav>\n</div>\n\n<!-- End menu, this is going to be dynamic later -->\n\n<label for=\"menuToggle\" class=\"fa fa-bars fa-2x c-menu__icon\"></label>\n<!-- End 2 second part of toggle -->";
},"useData":true});
})();