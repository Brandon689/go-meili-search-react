package main

import (
	"fmt"
	"os"

	"github.com/meilisearch/meilisearch-go"
)

func main() {
	client := meilisearch.NewClient(meilisearch.ClientConfig{
                Host: "http://127.0.0.1:7700",
                APIKey: "C9435C7CCB699D837FB4EEC5614EB",
        })
	// An index is where the documents are stored.
	index := client.Index("movies")

	// If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
	documents := []map[string]interface{}{
        { "id": 1, "title": "Sora", "image": "https://cdn.myanimelist.net/s/common/store/cover/1010/33bb64cd91e6f1315208d9ea4485fe9fe4a58800f772077998df96be86c12819/l@2x.jpg", "genres": []string{"Romance", "Drama"} },
        { "id": 2, "title": "Oreimo", "image": "https://cdn.myanimelist.net/s/common/store/cover/9194/55f3e1a78fd8e8f3aa00a0768a1029d1921cc524661e179a39916a4f0baf58a5/l@2x.jpg", "genres": []string{"Action", "Adventure"} },
        { "id": 3, "title": "Wotakoi", "image": "https://cdn.myanimelist.net/s/common/store/cover/1914/3e6861436396e19270162d956d98cc1cfa758abe9ba76ba1946c3a25ae4e07a4/l@2x.jpg", "genres": []string{"Adventure", "Drama"} },
        { "id": 4, "title": "Mashle", "image": "https://cdn.myanimelist.net/images/anime/1208/133335.jpg", "genres": []string{"Adventure", "Science Fiction"} },
        { "id": 5, "title": "Black Clover", "image": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg", "genres": []string{"Fantasy", "Action"} },
        { "id": 6, "title": "Rascal does not dream of bunny girl senpai", "image": "https://cdn.myanimelist.net/images/anime/1085/114792.jpg", "genres": []string{"Drama"} },
	}
	task, err := index.AddDocuments(documents)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(task.TaskUID)
}