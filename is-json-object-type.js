
// is-json-object-type @ npm, check if an object is directly like '{...}'.

module.exports = function (value) {
	return value && typeof value === "object" &&
		Object.getPrototypeOf(value) === Object.prototype;
}
