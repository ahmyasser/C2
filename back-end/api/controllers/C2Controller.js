var mongoose = require('mongoose'),
    moment = require('moment'),
    Validations = require('../utils/Validations'),
    C2 = mongoose.model('C2');

module.exports.getProduct = function(req, res, next) {
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    C2.findById(req.params.productId).exec(function(err, C2) {
        if (err) {
            return next(err);
        }
        if (!C2) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product retrieved successfully.',
            data: C2
        });
    });
};

module.exports.getProducts = function(req, res, next) {
    C2.find({}).exec(function(err, C2) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            err: null,
            msg: 'Products retrieved successfully.',
            data: C2
        });
    });
};

module.exports.getProductsBelowPrice = function(req, res, next) {
    if (!Validations.isNumber(req.params.price)) {
        return res.status(422).json({
            err: null,
            msg: 'price parameter must be a valid number.',
            data: null
        });
    }
    C2.find({
        price: {
            $lt: req.params.price
        }
    }).exec(function(err, C2) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            err: null,
            msg:
            'Products priced below ' +
            req.params.price +
            ' retrieved successfully.',
            data: C2
        });
    });
};

module.exports.createProduct = function(req, res, next) {
    var valid =
        req.body.name &&
        Validations.isString(req.body.name) &&
        req.body.price &&
        Validations.isNumber(req.body.price);
    if (!valid) {
        return res.status(422).json({
            err: null,
            msg: 'name(String) and price(Number) are required fields.',
            data: null
        });
    }
    // Security Check
    delete req.body.createdAt;
    delete req.body.updatedAt;

    C2.create(req.body, function(err, C2) {
        if (err) {
            return next(err);
        }
        res.status(201).json({
            err: null,
            msg: 'Product was created successfully.',
            data: C2
        });
    });
};

module.exports.updateProduct = function(req, res, next) {
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    var valid =
        req.body.name &&
        Validations.isString(req.body.name) &&
        req.body.price &&
        Validations.isNumber(req.body.price);
    if (!valid) {
        return res.status(422).json({
            err: null,
            msg: 'name(String) and price(Number) are required fields.',
            data: null
        });
    }
    // Security Check
    delete req.body.createdAt;
    req.body.updatedAt = moment().toDate();

    C2.findByIdAndUpdate(
        req.params.productId,
        {
            $set: req.body
        },
        { new: true }
    ).exec(function(err, updatedProduct) {
        if (err) {
            return next(err);
        }
        if (!updatedProduct) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product was updated successfully.',
            data: updatedProduct
        });
    });
};

module.exports.deleteProduct = function(req, res, next) {
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    C2.findByIdAndRemove(req.params.productId).exec(function(
        err,
        deletedProduct
    ) {
        if (err) {
            return next(err);
        }
        if (!deletedProduct) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product was deleted successfully.',
            data: deletedProduct
        });
    });
};
