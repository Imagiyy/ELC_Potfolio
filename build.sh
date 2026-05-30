#!/bin/bash
# Generate config.js from Vercel environment variables
echo "const CONFIG = $CONFIG_JSON;" > config.js
