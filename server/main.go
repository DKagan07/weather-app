package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		res, err := json.Marshal("Welcome, Linda!")
		if err != nil {
			w.Write([]byte("error"))
		}
		w.Write(res)
	})

	http.ListenAndServe(":3001", r)
}
