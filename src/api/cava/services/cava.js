'use strict';

/**
 * cava service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cava.cava');
