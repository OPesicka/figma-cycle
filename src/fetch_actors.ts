//return hits

export async function getActor(search) {
  let result = {};
  const url = "https://ow0o5i3qo7-dsn.algolia.net/1/indexes/prod_PUBLIC_STORE/query?x-algolia-api-key=0ecccd09f50396a4dbbe5dbfb17f4525&x-algolia-application-id=OW0O5I3QO7";
  const body = {
    query: search,
    page: 0,
    hitsPerPage: 10,
    restrictSearchableAttributes: [],
    attributesToHighlight: [],
    attributesToRetrieve: ["title", "name", "username", "userFullName", "stats", "description", "pictureUrl", "userPictureUrl", "notice", "currentPricingInfo"],
  };
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      result = data.hits;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return result;
}
