#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0 --image_name IMAGE_NAME --db_url DB_URL"
    exit 1
}

# Parse named arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --image_name) image_name="$2"; shift ;;
        --db_url) db_url="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; usage ;;
    esac
    shift
done

if [ -z "$image_name" ]; then
    image_name="databases-db"
fi


# Check if all required arguments are provided
if [ -z "$db_url" ]; then
    echo "Error: Missing required arguments."
    usage
fi

docker build --build-arg db_url=$db_url -t $image_name .