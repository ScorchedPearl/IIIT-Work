#!/bin/bash

LOG_DIR="/var/log/myapp"

echo "Cleaning logs older than 30 days in $LOG_DIR"
find "$LOG_DIR" -type f -mtime +30 -exec rm -f {} \;

echo "$(date) - Cleaned logs older than 30 days" >> clean_logs.log
