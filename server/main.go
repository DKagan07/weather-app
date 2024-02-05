package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type ctxKey string

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
			r.Use(ZipCodeCtx)
			r.Get("/", ReadWeather)
		})
	})

	// r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
	// 	res, err := json.Marshal("Welcome, Linda!")
	// 	if err != nil {
	// 		w.Write([]byte("error"))
	// 	}
	// 	w.Write(res)
	// })
	//    r.Route("/api/{zipCode}", func(r chi.Router {
	//        r.Get("/", zipCodeHandler.ReadZipCode)
	//    }))

	if err := http.ListenAndServe(":3001", r); err != nil {
		panic("cannot ListenAndServe")
	}
}

func ZipCodeCtx(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		zipCode := chi.URLParam(r, "zipCode")
		ctx := context.WithValue(r.Context(), ctxKey("zipcode"), zipCode)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func ReadWeather(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	// the .(*string) is what the type of what zipcode is
	// Not too sure if this has to be the type of the return of the API call
	// (I think it does)
	zipcode, ok := ctx.Value(ctxKey("zipcode")).(*string)
	if !ok {
		http.Error(w, http.StatusText(422), 422)
	}
	// need to do something with `zipcode`
	fmt.Println(zipcode)
}
