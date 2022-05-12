import {gql, useQuery} from '@apollo/client'

export const GET_SONGS =  gql`
query ExampleQuery($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
  
`

export const useSongs = (id) => {
  const songs =  useQuery(GET_SONGS, {
       variables: {
        "playlistId": id
       }
   })
   return songs
}