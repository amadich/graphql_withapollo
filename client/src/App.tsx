import { ApolloClient , InMemoryCache , ApolloProvider , useQuery } from "@apollo/client";
import DisplayData from "./components/DisplayData";

export default function App() {
  
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });


  return (
    <ApolloProvider client={client}>
      
      <div>
          <h1>List Of Users</h1>
          <DisplayData />
      </div>

    </ApolloProvider>
  )
}
