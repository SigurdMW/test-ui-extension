var contentfulExtension = require('contentful-ui-extensions-sdk')


window.contentfulExtension.init(function (extension) {
	var value = extension.field.getValue()
	extension.field.setValue("Hello world!")
})