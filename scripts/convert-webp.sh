#!/bin/bash
# Bulk converts PNG to WebP format to save space.
# Usage: ./scripts/convert-webp.sh ./public/images

SOURCE_DIR=${1:-"./public/images"}

# Ensure cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed."
    echo "Mac: brew install webp"
    exit 1
fi

find "$SOURCE_DIR" -type f -iname "*.png" | while read img; do
  dir_path=$(dirname "$img")
  filename=$(basename -- "$img")
  name="${filename%.*}"
  
  # Convert to 80% quality WebP
  cwebp -q 80 "$img" -o "$dir_path/$name.webp"
  
  echo "Converted: $name.webp"
  
  # Optional: Delete original PNG to clean repo
  # rm "$img"
done

echo "✅ All images optimized successfully!"
