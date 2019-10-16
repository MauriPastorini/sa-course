exports.InvalidToken = {
    code: 1,
    http_status: 403,
    code_message: 'Invalid token'
};

exports.InvalidParameters = {
    code: 2,
    http_status: 400,
    code_message: 'Invalid parameters'
};

exports.UserAlreadyExists = {
    code: 3,
    http_status: 400,
    code_message: 'User already exists'
};

exports.Unthorized = {
    code: 4,
    http_status: 403,
    code_message: 'User doesnt have permission'
};

