import { merge } from 'lodash'

const development = {
  api: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  }
}

const production = {
  api: {
    baseURL: ''
  }
}

const stage = merge({}, production, {

})

export default {
  development,
  production,
  stage
}