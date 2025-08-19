#!/bin/bash
LOGFILE="user_mgmt.log"

add_user() {
  username=$1
  sudo useradd -m -s /bin/bash "$username"
  sudo passwd "$username"
  echo "$(date) - Added user $username" >> $LOGFILE
}

delete_user() {
  username=$1
  sudo userdel -r "$username"
  echo "$(date) - Deleted user $username" >> $LOGFILE
}

echo "1) Add User"
echo "2) Delete User"
read -p "Choose option: " opt

case $opt in
  1) read -p "Enter username: " user; add_user "$user";;
  2) read -p "Enter username: " user; delete_user "$user";;
  *) echo "Invalid option";;
esac
