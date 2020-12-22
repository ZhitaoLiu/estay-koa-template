class BaseModel {
    constructor(data, msg) {
        this.msg = msg || '';
        this.data = data || '';
    }
}


class SuccessModel extends BaseModel {
    constructor(data, msg, code) {
        super(data, msg)
        this.code = code || 0;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, msg, code) {
        super(data, msg)
        this.code = code || -1;
    }
}


module.exports = {
    SuccessModel,
    ErrorModel
}