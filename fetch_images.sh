#!/bin/bash
queries=(
  "candid+office+meeting"
  "construction+worker"
  "engineering+industry"
  "manufacturing+factory"
  "warehouse+logistics"
  "healthcare+hospital"
  "building+maintenance"
  "tech+startup+team"
  "public+sector+meeting"
  "classroom+teacher"
  "retail+store"
  "construction+safety"
  "business+audit+document"
  "contractor+clipboard"
  "professional+handshake"
)

for q in "${queries[@]}"; do
  id=$(curl -s "https://unsplash.com/napi/search/photos?query=$q&per_page=1" | grep -o '"id":"[^"]*"' | head -n 1 | cut -d'"' -f4)
  echo "$q: $id"
done
