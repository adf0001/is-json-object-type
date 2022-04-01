
//global variable, for html page, refer tpsvr @ npm.
is_json_object_type = require("../is-json-object-type.js");
assert = require("assert");

module.exports = {

	"is_json_object_type": function (done) {
		assert(is_json_object_type({}));		//true
		assert(is_json_object_type(new Object()));		//true

		assert(!is_json_object_type(Object.create(null)));		//false

		assert(!is_json_object_type(Object.create({})));		//false
		assert(!is_json_object_type(Object.create(new Object())));		//false

		assert(!is_json_object_type(Object.create(Object.create(null))));		//false
		assert(!is_json_object_type(Object.create(Object.create({}))));			//false
		assert(!is_json_object_type(Object.create(Object.create(new Object()))));		//false

		assert(!is_json_object_type(Object.create([])));		//false
		assert(!is_json_object_type(Object.create(new Array())));		//false
		assert(!is_json_object_type(Object.create(new Date())));		//false
		assert(!is_json_object_type(Object.create(/reg/)));		//false
		assert(!is_json_object_type(Object.create(Object.create([]))));		//false
		assert(!is_json_object_type(Object.create(Object.create(new Date()))));		//false

		assert(!is_json_object_type(null));		//false
		assert(!is_json_object_type(undefined));		//false
		assert(!is_json_object_type(123));		//false
		assert(!is_json_object_type("abc"));		//false
		assert(!is_json_object_type(true));		//false
		assert(!is_json_object_type(false));		//false
		assert(!is_json_object_type(new Date()));		//false
		assert(!is_json_object_type(123));		//false
		assert(!is_json_object_type(new Number(5)));		//false
		assert(!is_json_object_type([]));		//false
		assert(!is_json_object_type(new Array(1, 2)));		//false
		assert(!is_json_object_type(/reg/));		//false
		assert(!is_json_object_type(new RegExp("reg")));		//false
		assert(!is_json_object_type(function () { }));		//false

		var func1 = function () { };
		assert(!is_json_object_type(new func1()));		//false
		assert(!is_json_object_type(Object.create(new func1())));		//false

		func1.prototype = {};
		assert(!is_json_object_type(new func1()));		//false
		assert(!is_json_object_type(Object.create(new func1())));		//false

		func1.prototype = [];
		assert(!is_json_object_type(new func1()));		//false
		assert(!is_json_object_type(Object.create(new func1())));		//false

		func1.prototype.constructor = Object;
		assert(!is_json_object_type(new func1()));		//false
		assert(!is_json_object_type(Object.create(new func1())));		//false

		var o2 = [];
		o2.constructor = Object;
		assert(!is_json_object_type(o2));		//false
		assert(!is_json_object_type(Object.create(o2)));		//false

		done(false);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('is_json_object_type', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
