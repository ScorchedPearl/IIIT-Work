#!/bin/bash
INPUT_DIR="./images"
OUTPUT_DIR="./resized"
SIZE="800x600"

mkdir -p "$OUTPUT_DIR"

for img in "$INPUT_DIR"/*.{jpg,png,jpeg}; do
  [ -e "$img" ] || continue
  filename=$(basename "$img")
  convert "$img" -resize $SIZE "$OUTPUT_DIR/$filename"
  echo "Resized $filename -> $OUTPUT_DIR/$filename"
done
