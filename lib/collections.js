MyCollection = new Mongo.Collection("mycollection");

var Schemas = {};

Schemas.CollectionItem = new SimpleSchema({
	field1: {
		type: String,
		label: "Field1"
	},
	field2: {
		type: String,
		label: "Field2"
	},
	field3: {
		type: String,
		label: "Field3"
	},
	field4: {
		type: String,
		label: "Field4"
	},
	field5: {
		type: String,
		label: "Field5"
	},
	field6: {
		type: String,
		label: "Field6"
	},
	field7: {
		type: String,
		label: "Field7"
	},
	field8: {
		type: String,
		label: "Field8"
	}
});