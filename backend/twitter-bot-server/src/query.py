from gql import gql

create_post = gql("""
mutation CreatePost($content: String!) {
  createPost(content: $content, acceptedForPosting: false) {
    id
    createdAt
  }
}
""")

create_accepted_post = gql("""
mutation CreatePost($content: String!) {
  createPost(content: $content, acceptedForPosting: true) {
    id
    createdAt
  }
}
""")

get_accepted_post = gql("""
query GetAcceptedPost {
  allPosts(filter: {
    acceptedForPosting: true
  }, orderBy: createdAt_ASC, first: 1){
    id,
    content,
    createdAt
  } 
}
""")

delete_post = gql("""
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
""")
