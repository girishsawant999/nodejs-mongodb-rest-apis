import mongoose from "mongoose";

class BaseController {
  constructor({ collection, schema }) {
    this._collection = collection;
    this._schema = schema;
    this._model = mongoose.model(collection, schema);
  }

  async save(req, res) {
    const _data = new this._model(req.body);

    try {
      await _data.save();
      res.send(_data);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async list(req, res) {
    const _data = await this._model.find({});

    try {
      res.send(_data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
export default BaseController;
