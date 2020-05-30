import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'

export default function(context) {
  return {
    defaultHttpLink: false,
    link: createHttpLink({
      uri: 'https://flashcards-backend.herokuapp.com/graphql',
      credentials: 'include',
      fetch: (uri, options) => {
        const token = localStorage.getItem('apollo-token')

        options.headers['Authorization'] = token

        return fetch(uri, options)
      }
    })
  }
}