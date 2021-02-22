#!/bin/bash

FILE=".env"

if [ -f "$FILE" ]; then
    echo "ok"
else
    cp .env.example .env
fi
