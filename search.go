package main

import (
    "fmt"
    "os"
	"encoding/json"

    "github.com/meilisearch/meilisearch-go"
)

func main() {
	client := meilisearch.NewClient(meilisearch.ClientConfig{
		Host: "http://127.0.0.1:7700",
		APIKey: "",
	})
    // Meilisearch is typo-tolerant:
    searchRes, err := client.Index("movies").Search("philoudelphia",
        &meilisearch.SearchRequest{
            Limit: 10,
        })
    if err != nil {
        fmt.Println(err)
        os.Exit(1)
    }

    fmt.Println(searchRes.Hits)

	b, err := json.Marshal(searchRes)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(b))
}