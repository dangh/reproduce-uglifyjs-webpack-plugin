// import {flush} from 'redux-saga/effects'
import {flush} from './flush'

export class MyClass {
  * test (channel) {
    const pendingActions = yield flush(channel)
    console.log(pendingActions)
  }
}
