// import {flush} from 'redux-saga/effects'
import {flush} from './flush'

export class QueueManager {
  * test (channel) {
    const pendingActions = yield flush(channel)
    console.log(pendingActions)
  }
}
