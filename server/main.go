package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"DKagan07/weather-app/server/types"
)

// Looking at using this API: https://www.weatherapi.com/
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
	// Get API key from terminal env
	api_key := os.Getenv("API_KEY")
	if api_key == "" {
		http.Error(w, "Cannot retreive API key", 500)
	}

	// getting the zip code from the URL, as a string
	zipcode := chi.URLParam(r, "zipCode")
	url := fmt.Sprintf(
		"http://api.weatherapi.com/v1/forecast.json?key=%s&q=%s&days=7&aqi=yes&alerts=no",
		api_key,
		zipcode,
	)

	wD := types.WeatherOutput{}
	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "with GET request", 404)
		fmt.Println("Err: ", err)
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "with io.ReadAll", 404)
		fmt.Println("Err: ", err)
	}

	if err = json.Unmarshal(body, &wD); err != nil {
		fmt.Println("err with unmarshal")
	}

	fmt.Printf("%+v\n", wD)

	//
	// need to do something with `zipcode`
	// probably an api call with that zip code....need to find what API to use
	// fmt.Println(weatherData)
}
