(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['results.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"c-weatherapp__results\">\n	<div class=\"c-weatherapp__results--table o-tabs\">\n		<table class=\"o-tabs__table\" id=\"table\">\n			<thead>\n				<tr class=\"o-tabs__head\">\n					<th>City</th>\n					<th>Long</th>\n					<th>Lat</th>\n					<th>Degree</th>\n					<th>Description</th>\n				</tr>\n			</thead>\n			<tbody>\n				<tr>\n					<td>"
    + alias4(((helper = (helper = helpers.City || (depth0 != null ? depth0.City : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"City","hash":{},"data":data}) : helper)))
    + "</td>\n					<td>"
    + alias4(((helper = (helper = helpers.Long || (depth0 != null ? depth0.Long : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Long","hash":{},"data":data}) : helper)))
    + "</td>\n					<td>"
    + alias4(((helper = (helper = helpers.Lat || (depth0 != null ? depth0.Lat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Lat","hash":{},"data":data}) : helper)))
    + "</td>\n					<td>"
    + alias4(((helper = (helper = helpers.Degree || (depth0 != null ? depth0.Degree : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Degree","hash":{},"data":data}) : helper)))
    + "</td>\n					<td>"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</td>\n				</tr>\n			</tbody>\n		</table>\n	</div>\n	<div class=\"c-weatherapp__results--text\" id=\"statusMessage\">\n	</div>\n</div>";
},"useData":true});
})();