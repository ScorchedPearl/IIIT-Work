#!/usr/bin/env bash

OUT_DIR="./lab_files"
ARCHIVE_NAME="files.tar.gz"
mkdir -p "$OUT_DIR"
for i in $(seq 1 10); do
  fname="$OUT_DIR/file${i}.txt"
  : > "$fname"            
  echo "Timestamp: $(date '+%Y-%m-%d %H:%M:%S')" >> "$fname"
done

echo "Created files in $OUT_DIR"

tar -czf "$ARCHIVE_NAME" -C "$OUT_DIR" .
if [ $? -eq 0 ]; then
  echo "Compressed into $ARCHIVE_NAME"
else
  echo "Compression failed"
fi
