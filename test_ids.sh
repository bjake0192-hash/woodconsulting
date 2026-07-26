ids=(
"VBLHICVh-lI"
"MSTL7-5avQo"
"QckxruozjRg"
"glRqyWJgUeY"
)

for id in "${ids[@]}"; do
  status=$(curl -s -I "https://unsplash.com/photos/$id" | head -n 1 | cut -d$' ' -f2)
  echo "$id: $status"
done
