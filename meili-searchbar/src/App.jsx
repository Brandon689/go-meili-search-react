import React from "react";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const { searchClient } = instantMeiliSearch(
  "http://localhost:7700/",
  "C9435C7CCB699D837FB4EEC5614EB"
);

const App = () => (
  <InstantSearch indexName="movies" searchClient={searchClient}>
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

const Hit = ({ hit }) => (
  <div key={hit.id}>
    <img src={hit.image} width={100} alt={hit.title} />
    <h2>{hit.title}</h2>
  </div>
);

export default App;

// import "instantsearch.css/themes/algolia-min.css";
// import React from "react";
// import {
//   InstantSearch,
//   Hits,
//   SortBy,
//   SearchBox,
//   Pagination,
//   Highlight,
//   ClearRefinements,
//   RefinementList,
//   Configure,
//   Snippet
// } from "react-instantsearch-dom";
// import "./App.css";
// import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

// const searchClient = instantMeiliSearch(
//   "https://ms-adf78ae33284-106.lon.meilisearch.io",
//   "a63da4928426f12639e19d62886f621130f3fa9ff3c7534c5d179f0f51c4f303",
//   {
//     finitePagination: true
//   }
// );

// const App = () => (
//   <div className="ais-InstantSearch">
//     <h1>MeiliSearch + React InstantSearch</h1>
//     <h2>
//       Search in Steam video games{" "}
//       <span role="img" aria-label="emoji">
//         🎮
//       </span>
//     </h2>
//     <p>
//       This is not the official Steam dataset but only for demo purpose. Enjoy
//       searching with MeiliSearch!
//     </p>
//     <InstantSearch indexName="steam-video-games" searchClient={searchClient}>
//       <div className="left-panel">
//         <ClearRefinements />
//         <SortBy
//           defaultRefinement="steam-video-games"
//           items={[
//             { value: "steam-video-games", label: "Relevant" },
//             {
//               value: "steam-video-games:recommendationCount:desc",
//               label: "Most Recommended"
//             },
//             {
//               value: "steam-video-games:recommendationCount:asc",
//               label: "Least Recommended"
//             }
//           ]}
//         />
//         <h2>Genres</h2>
//         <RefinementList attribute="genres" />
//         <h2>Players</h2>
//         <RefinementList attribute="players" />
//         <h2>Platforms</h2>
//         <RefinementList attribute="platforms" />
//         <h2>Misc</h2>
//         <RefinementList attribute="misc" />
//         <Configure
//           hitsPerPage={6}
//           attributesToSnippet={["description:50"]}
//           snippetEllipsisText={"..."}
//         />
//       </div>
//       <div className="right-panel">
//         <SearchBox />
//         <Hits hitComponent={Hit} />
//         <Pagination showLast={true} />
//       </div>
//     </InstantSearch>
//   </div>
// );

// const s = ({ hit }) => (
//   <div key={hit.id}>
//     <div className="hit-name">
//       <Highlight attribute="name" hit={hit} />
//     </div>
//     <img src={hit.image} align="left" alt={hit.name} />
//     <div className="hit-description">
//       <Snippet attribute="description" hit={hit} />
//     </div>
//     <div className="hit-info">price: {hit.price}</div>
//     <div className="hit-info">release date: {hit.releaseDate}</div>
//   </div>
// );

// export default App;
