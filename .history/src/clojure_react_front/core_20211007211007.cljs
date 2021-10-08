(ns clojure-react-front.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [ajax.core :refer [GET]]))

;; -------------------------
;; Views

(defn handler [response]
  (.log js/console response))
(defn home-page []
  [:div [:h1 "Data"
  ]])


 
  
  )
  
  



;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
  