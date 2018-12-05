const { ContentItem } = require('kentico-cloud-delivery');

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Wed Dec 05 2018 10:36:54 GMT-0500 (Eastern Standard Time).
*/
class Office extends ContentItem {
        constructor() {
        super({
            propertyResolver: ((fieldName) => {
                if (fieldName === 'zip_code') {
                    return 'zipCode';
                }
                return fieldName;
            })
        });
    }
}
module.exports = Office