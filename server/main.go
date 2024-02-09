package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Route("/api", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			res, err := json.Marshal("Hello, Linda!")
			if err != nil {
				http.Error(w, http.StatusText(422), 422)
			}
			if _, err := w.Write(res); err != nil {
				http.Error(w, http.StatusText(404), 404)
			}
		})

		r.Route("/{zipCode}", func(r chi.Router) {
			r.Get("/", ReadWeather)
		})
	})

	// Serve's up, man
	if err := http.ListenAndServe(":3001", r); err != nil {
		panic("cannot ListenAndServe")
	}
}

func ReadWeather(w http.ResponseWriter, r *http.Request) {
	// getting the zip code from the URL, as a string
	zipcode := chi.URLParam(r, "zipCode")

	// need to do something with `zipcode`
	// probably an api call with that zip code....need to find what API to use
	fmt.Println(zipcode)
}
