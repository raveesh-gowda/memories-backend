const Post = require("../models/post")

const postControllers = {}

postControllers.list = (req, res) => {
   Post.find()
      .then((post) => {
         res.json(post);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

postControllers.create = (req, res) => {
   const body = req.body;
   const post = new Post(body);
   post
      .save()
      .then((post) => {
         res.json(post);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

postControllers.show = (req, res) => {
   const id = req.params.id;
   Post.findById(id)
      .then((post) => {
         res.json(post);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

postControllers.update = (req, res) => {
   const id = req.params.id;
   const body = req.body;
   Post.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .then((post) => {
         res.json(post);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

postControllers.destroy = (req, res) => {
   const id = req.params.id;
   Post.findByIdAndDelete(id)
      .then((post) => {
         res.json(post);
      })
      .catch((err) => {
         res.json(err.message);
      });
};

module.exports = postControllers