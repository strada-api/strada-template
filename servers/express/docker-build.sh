#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0 --image_name IMAGE_NAME"
    exit 1
}

# Parse named arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --image_name) image_name="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; usage ;;
    esac
    shift
done

if [ -z "$image_name" ]; then
    image_name="$(basename "$(dirname "$PWD")")-$(basename "$PWD")"
fi

# Check if all required arguments are provided
if [ -z "$image_name" ]; then
    echo "Error: Missing required arguments."
    usage
fi

docker build --build-arg infisical_token=$INFISICAL_TOKEN -t $image_name .
