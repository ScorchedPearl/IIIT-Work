#!/bin/bash
LOGFILE="system_monitor.log"

CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
MEM=$(free | grep Mem | awk '{print $3/$2 * 100.0}')
DISK=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

DATE=$(date)

if (( ${CPU%.*} > 80 )); then
  echo "$DATE ALERT: High CPU usage: $CPU%" >> $LOGFILE
fi

if (( ${MEM%.*} > 75 )); then
  echo "$DATE ALERT: High Memory usage: $MEM%" >> $LOGFILE
fi

if (( DISK > 90 )); then
  echo "$DATE ALERT: High Disk usage: $DISK%" >> $LOGFILE
fi

echo "$DATE - Check completed" >> $LOGFILE