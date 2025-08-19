#!/usr/bin/env bash

HOME_DIR="$HOME"
USER_NAME="$(whoami)"
CURRENT_DATETIME="$(date '+%Y-%m-%d %H:%M:%S')"

echo "Home directory contents of $USER_NAME ($HOME_DIR):"
ls -la "$HOME_DIR"

echo
echo "Current user: $USER_NAME"
echo "Current date & time: $CURRENT_DATETIME"