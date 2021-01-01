const Joi = require('joi')

/* Event Types */
const PAGE_VIEW = "page-view"
const PAGE_CLICK = "page-click"

/* Schemas */
const viewEventSchema = Joi.object({
    eventType: Joi.string().pattern(new RegExp(PAGE_VIEW)).required(),
    occurredAt: Joi.date().iso().required(),
    browser: Joi.object({
        name: Joi.string().required(),
        version: Joi.string().required(),
        os: Joi.string().required(),
        type: Joi.string().required()
    }).required()
});

const clickEventSchema = Joi.object({
    eventType: Joi.string().pattern(new RegExp(PAGE_CLICK)).required(),
    itemClicked: Joi.string().required(),
    occurredAt: Joi.date().iso().required(),
    browser: Joi.object({
        name: Joi.string().required(),
        version: Joi.string().required(),
        os: Joi.string().required(),
        type: Joi.string().required()
    }).required()
});

const validateEvent = (userEvent) => {
    if (userEvent.eventType === undefined) {
        return {
            error: "eventType is required"
        };
    }

    if (userEvent.eventType === PAGE_VIEW) {
        return viewEventSchema.validate(userEvent);
    }

    if (userEvent.eventType === PAGE_CLICK) {
        return clickEventSchema.validate(userEvent);
    }

    return {
        error: `eventType '${userEvent.eventType}' unknown`
    };
}

module.exports = {
    validateEvent,
    pageViewEventType: PAGE_VIEW,
    pageClickEventType: PAGE_CLICK
};