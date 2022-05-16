import {gql, useQuery} from '@apollo/client'

export const GET_SONGS =  gql`
query ExampleQuery($playlistId: Int!, $search: String ) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
  
`

export const useSongs = (id, search) => {
  const songs =  useQuery(GET_SONGS, {
       variables: {
        "playlistId": id,
        "search": search
       }
   })
   return songs
}