#!/bin/sh
set -e
cd "$(dirname "$0")/../public"
SRC=icon-source.png
[ -f "$SRC" ] || SRC=icon-source.svg
for s in 180:apple-touch-icon 192:icon-192 512:icon-512; do
  size=${s%%:*}; name=${s#*:}
  magick -background none -density 300 "$SRC" -resize "${size}x${size}" -flatten -background '#bcdcae' "$name.png"
done
echo "Icons generated from $SRC"
