#!/bin/bash
echo "Listing all running processes:"
ps aux

echo
echo "Process count per user:"
ps -eo user | sort | uniq -c

echo
echo "Top 5 processes by CPU:"
ps -eo pid,comm,%cpu,%mem --sort=-%cpu | head -6

echo
echo "Top 5 processes by Memory:"
ps -eo pid,comm,%cpu,%mem --sort=-%mem | head -6

read -p "Enter PID to kill (or press Enter to skip): " pid
if [[ ! -z "$pid" ]]; then
  read -p "Are you sure you want to kill PID $pid? (y/n): " confirm
  if [[ "$confirm" == "y" ]]; then
    kill -9 $pid
    echo "Process $pid killed."
  else
    echo "Aborted."
  fi
fi