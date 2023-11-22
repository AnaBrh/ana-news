const { getAllTopics, getAllArticles, getSingleArticle, getCommsByArtcId, postCommentToArticle } = require("../Models/app.model")

const devData = require("../db/data/development-data/index")
const jestsorted = require("jest-sorted")

exports.getTopics = (req, res, next) => {
    getAllTopics()
    .then((topics) => {
        res.status(200).send({ topics })
    })
    .catch(next)
}

exports.getArticles = (req, res, next) => {
    getAllArticles()
    .then((articles) => {
        res.status(200).send({ articles })
    })
    .catch(next)
}

exports.getArticleById = (req, res, next) => {
    const { article_id } = req.params
    getSingleArticle(article_id)
    .then((article) => {
        res.status(200).send({ article })
    })
    .catch(next)
}

exports.getCommentsByArticleId = (req, res, next) => {
    const { article_id } = req.params
    getCommsByArtcId(article_id)
    .then((comments) => {
        res.status(200).send({ comments })
    })
    .catch(next)
}

exports.postComment = (req, res, next) => {
    const { article_id } = req.params
    const { username, body } = req.body
    
    postCommentToArticle(article_id, username, body)
    .then((comment) => {
        res.status(201).send({ comment })
    })
    .catch(next)
}
