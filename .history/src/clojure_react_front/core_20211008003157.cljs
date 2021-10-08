(ns clojure-react-front.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [clojure.string :as str]
      [goog.labs.format.csv :as csv]
      [cljs.core.async :refer [<!]] [cljs-http.client :as http])
      (:require-macros [cljs.core.async.macros :refer [go]]))

;; Atoms
(def data (r/atom []))

;; -------------------------
;; Views


(defn data-list []
[:table
  [:tr
  [:th (first (first @data))]
  [:th (second (first @data))]
  [:th "current temperature"]]
  [:th "temperature"]]
  [:th "temperature"]]
  [:th "temperature"]]
  ;; <tr>
  ;;   <td>Alfreds Futterkiste</td>
  ;;   <td>Maria Anders</td>
  ;;   <td>Germany</td>
  ;; </tr>

  ;; Map random temperatures to the table and drop the first record cause it's already filled in the table's heading
  (drop 1 (map (fn [item] [:tr [:td (first item)] [:td (second item)] [:td (.floor js/Math(* 100 (.random js/Math))) " Celsius"] [:td (.floor js/Math(* 100 (.random js/Math))) " Celsius"] [:td (.floor js/Math(* 100 (.random js/Math))) " Celsius"] [:td (.floor js/Math(* 100 (.random js/Math))) " Celsius"] [:td (.floor js/Math(* 100 (.random js/Math))) " Celsius"]]) @data))
  
]
)

;; Reading CSV
(go (let [response (<! (http/get "https://raw.githubusercontent.com/icyrockcom/country-capitals/master/data/country-list.csv" {:with-credentials? false :type "text/csv; charset=utf-8"}))]
  (prn (:status response))
  (reset! data (csv/parse (:body response)))))
  ;; (prn (str/split @data #" @s "))))
  ;; (prn @data)))


(defn home-page []
  
   [data-list])


 
  
  
  



;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
  