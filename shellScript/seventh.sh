#!/bin/bash

LENGTH=12
PASSWORD=$(openssl rand -base64 48 | cut -c1-$LENGTH)
echo "Generated Password: $PASSWORD"