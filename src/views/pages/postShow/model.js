export const getPost = async (id) => {
  const options = {
     method: 'GET',
     headers: {
         'Content-Type': 'application/json'
     }
 };
 try {
     const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
     const json = await response.json();
     // console.log(json)
     return json
 } catch (err) {
     console.log('Error getting documents', err)
 }
}
