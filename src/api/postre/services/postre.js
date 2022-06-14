'use strict';

/**
 * postre service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::postre.postre');
