/*
This function was extracted from redux-saga/lib/internal/channel.js
to simplify the output.
*/
export function flush(cb) {
  checkForbiddenStates(); // TODO: check if some new state should be forbidden now
  (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
  if (closed && buffer.isEmpty()) {
    cb(END);
    return;
  }
  cb(buffer.flush());
}
